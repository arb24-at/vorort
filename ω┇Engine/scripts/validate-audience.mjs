import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "esbuild";
import yaml from "js-yaml";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const temporary = await fs.mkdtemp(path.join(root, "node_modules/.audience-check-"));
async function records(folder) {
  const entries = await fs.readdir(folder, { withFileTypes: true });
  return (await Promise.all(entries.map(async entry => entry.isDirectory() ? records(path.join(folder, entry.name)) : entry.name.endsWith(".yml") ? [yaml.load(await fs.readFile(path.join(folder, entry.name), "utf8"))] : []))).flat();
}
try {
  const modulePath = path.join(temporary, "contracts.mjs");
  await build({ stdin: { contents: 'export * from "./src/design-system/audience-page-schema.ts"; export * from "./src/design-system/section-recipes.ts"; export * from "./src/design-system/production-policy.ts"; export * from "./src/data/workshop-usage.ts"; export * from "./src/data/audience-paths.ts";', resolveDir: root, loader: "ts" }, outfile: modulePath, bundle: true, platform: "node", format: "esm", packages: "external" });
  const { audiencePageSchema, validateAudienceReferences, sectionRecipes, recipeAllowedForProduction, blocksAllowedForProduction, getRecipeUsage, audiencePath } = await import(pathToFileURL(modulePath).href);
  const services = await records(path.join(root, "src/content/services"));
  const pages = (await records(path.join(root, "src/content/audience-pages"))).map(page => audiencePageSchema.parse(page));
  assert.equal(new Set(pages.map(page => page.id)).size, pages.length);
  for (const page of pages) {
    validateAudienceReferences(page, services);
    const context = { ...page, slug: page.audience, pageType: "audience" };
    const directory = page.sections.find(section => section.recipe === "scope.service-directory");
    assert.ok(directory, `${page.id} must render its real service choices`);
    assert.equal(recipeAllowedForProduction(directory.recipe, context), true);
    for (const changed of [undefined, { ...context, pageType: "service" }, { ...context, experiment: undefined }, { ...context, id: "other-en" }, { ...context, translationId: "other" }, { ...context, slug: "other" }, { ...context, locale: page.locale === "en" ? "de" : "en" }, { ...context, audience: page.audience === "private" ? "business" : "private" }]) assert.equal(recipeAllowedForProduction(directory.recipe, changed), false, "Audience experiment escaped its exact identity/page context");
    const invalid = [
      ["borrowed experiment", p => { p.experiment = "computer-laptop-en-preview"; }],
      ["incorrect identity", p => { p.id = p.audience === "private" ? `business-landing-${p.locale}` : `private-landing-${p.locale}`; }],
      ["wrong locale", p => { p.locale = p.locale === "en" ? "de" : "en"; }],
      ["duplicate ID", p => { p.sections[1].id = p.sections[0].id; }],
      ["broken action", p => { p.sections[0].content.actions[0].target = "missing"; }],
      ["missing form", p => { p.sections = p.sections.filter(section => section.kind !== "contact"); }],
      ["duplicate form", p => { p.sections.push({ ...structuredClone(p.sections.find(section => section.kind === "contact")), id: "extra-enquiry" }); }],
      ["incorrect contact anchor", p => { p.sections.find(section => section.kind === "contact").id = "write-to-us"; }],
      ["duplicate destination", p => { const items = p.sections.find(section => section.recipe === "scope.service-directory").content.items; items[1].serviceId = items[0].serviceId; }],
      ["unapproved block", p => { p.sections.find(section => section.recipe === "explanation.editorial-prose").content.blocks.push({ type: "list", ordered: false, items: ["An experimental block"] }); }],
    ];
    for (const [name, change] of invalid) {
      const candidate = structuredClone(page); change(candidate);
      assert.equal(audiencePageSchema.safeParse(candidate).success, false, `${page.id} accepted ${name}`);
    }
    for (const serviceId of ["nonexistent", page.audience === "private" ? "network-it-support" : "computer-laptop"]) {
      const candidate = structuredClone(page); candidate.sections.find(section => section.recipe === "scope.service-directory").content.items[0].serviceId = serviceId;
      assert.throws(() => validateAudienceReferences(candidate, services), /Unknown or incompatible service/);
    }
    for (const recipeId of ["explanation.connection-path", "recognition.situations"]) {
      const candidate = structuredClone(page);
      const section = services.flatMap(service => service.composition?.sections ?? []).find(section => section.recipe === recipeId);
      candidate.sections.splice(2, 0, { ...structuredClone(section), id: "incompatible-example" });
      assert.equal(audiencePageSchema.safeParse(candidate).success, false, "Unsupported page compatibility or unlisted experiments must be rejected");
    }
    const status = sectionRecipes[directory.recipe].status;
    try { sectionRecipes[directory.recipe].status = "deprecated"; assert.equal(audiencePageSchema.safeParse(page).success, false); } finally { sectionRecipes[directory.recipe].status = status; }
    const pathName = audiencePath(page.audience, page.locale);
    const output = await fs.readFile(path.join(root, "dist", pathName, "index.html"), "utf8");
    assert.equal((output.match(/<h1[ >]/g) ?? []).length, 1);
    assert.equal((output.match(/<form\b/g) ?? []).length, 1);
    assert.ok(output.includes('data-delivery="email"'));
    assert.doesNotMatch(output, /data-lab-recipe|data-lab-block|lab-capture-/);
    assert.ok(output.includes(`data-locale="${page.locale}"`));
    if (page.locale === "de") {
      for (const text of ["Gewünschter Kontaktweg", "Weitere Angaben (optional)", "E-Mail-Entwurf vorbereiten", "Datenschutzerklärung"]) assert.ok(output.includes(text), `Missing German enquiry interface: ${text}`);
      assert.doesNotMatch(output, /Preferred contact|Prepare email draft|Add details \(optional\)/);
    }
    const ids = [...output.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(ids).size, ids.length);
    for (const match of output.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(match[1]), `Broken target ${match[1]}`);
    let previous = -1;
    for (const section of page.sections) { const at = output.indexOf(`id="${section.id}"`); assert.ok(at > previous, "Rendered order must follow canonical source"); previous = at; }
    const consumer = { id: page.id, title: page.seo.title, audience: page.audience, locale: page.locale, path: pathName, sections: page.sections };
    assert.equal(getRecipeUsage([], [], "explanation.editorial-prose", [consumer]).length, 1, "Repeated gateway prose counts once");
  }
  console.log(`Validated ${pages.length} audience page(s): exact page trials, independent block lifecycle, valid real service destinations, unique anchors, source order, one truthful form and derived usage.`);
} finally { await fs.rm(temporary, { recursive: true, force: true }); }
