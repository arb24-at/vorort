import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "esbuild";
import yaml from "js-yaml";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const temporary = await fs.mkdtemp(path.join(root, "node_modules/.home-check-"));
try {
  const modulePath = path.join(temporary, "contracts.mjs");
  await build({ stdin: { contents: 'export * from "./src/design-system/home-page-schema.ts"; export * from "./src/design-system/section-recipes.ts"; export * from "./src/design-system/production-policy.ts"; export * from "./src/data/workshop-usage.ts";', resolveDir: root, loader: "ts" }, outfile: modulePath, bundle: true, platform: "node", format: "esm", packages: "external" });
  const { homePageSchema, sectionRecipes, recipeAllowedForProduction, getRecipeUsage } = await import(pathToFileURL(modulePath).href);
  const folder = path.join(root, "src/content/home-pages");
  const pages = await Promise.all((await fs.readdir(folder)).filter(name => name.endsWith(".yml")).map(async name => homePageSchema.parse(yaml.load(await fs.readFile(path.join(folder, name), "utf8")))));
  assert.equal(new Set(pages.map(page => page.id)).size, pages.length);
  for (const page of pages) {
    const context = { ...page, slug: "home", pageType: "home" };
    assert.equal(recipeAllowedForProduction("hero.local-support", context), true);
    for (const patch of [{ experiment: undefined }, { id: "other" }, { locale: page.locale === "en" ? "de" : "en" }, { pageType: "audience" }, { audience: "private" }, { slug: "private" }, { translationId: "private-landing" }]) assert.equal(recipeAllowedForProduction("hero.local-support", { ...context, ...patch }), false);
    const invalid = [
      ["borrowed trial", p => { p.experiment = "private-landing-en-preview"; }],
      ["wrong identity", p => { p.id = "home-other"; }],
      ["wrong audience", p => { p.audience = "private"; }],
      ["duplicate section", p => { p.sections[1].id = p.sections[0].id; }],
      ["broken hero action", p => { p.sections[0].content.actions[0].target = "missing"; }],
      ["missing enquiry", p => { p.sections = p.sections.filter(s => s.kind !== "contact"); }],
      ["duplicate enquiry", p => { p.sections.push({ ...structuredClone(p.sections.find(s => s.kind === "contact")), id: "extra-contact" }); }],
      ["wrong contact anchor", p => { p.sections.find(s => s.kind === "contact").id = "write"; }],
      ["broken return", p => { p.sections.find(s => s.recipe === "cta.quick-contact").content.enquiryTarget = "missing"; }],
      ["duplicate audience", p => { const items = p.sections.find(s => s.recipe === "scope.audience-paths").content.items; items[1].audience = items[0].audience; }],
      ["invented audience", p => { p.sections.find(s => s.recipe === "scope.audience-paths").content.items[0].audience = "enterprise"; }],
      ["unknown block", p => { p.sections.find(s => s.recipe === "explanation.editorial-prose").content.blocks.push({ type: "unknown" }); }],
      ["unapproved list", p => { p.sections.find(s => s.recipe === "explanation.editorial-prose").content.blocks.push({ type: "list", ordered: false, items: ["Not authorised"] }); }],
      ["unlisted experiment", p => { const s = p.sections[0]; s.recipe = "hero.service-intro"; s.content.note = { title: "A note", items: ["First", "Second"] }; delete s.content.image; delete s.content.facts; }],
    ];
    for (const [name, change] of invalid) { const candidate = structuredClone(page); change(candidate); assert.equal(homePageSchema.safeParse(candidate).success, false, `${page.id} accepted ${name}`); }
    for (const id of ["hero.local-support", "scope.audience-paths"]) {
      const original = sectionRecipes[id].status;
      try { sectionRecipes[id].status = "deprecated"; assert.equal(homePageSchema.safeParse(page).success, false); } finally { sectionRecipes[id].status = original; }
    }
    const route = page.locale === "en" ? "en/" : "";
    const output = await fs.readFile(path.join(root, "dist", route, "index.html"), "utf8");
    assert.equal((output.match(/<h1[ >]/g) ?? []).length, 1);
    assert.equal((output.match(/<form\b/g) ?? []).length, 1);
    assert.ok(output.includes('data-delivery="email"'));
    assert.ok(output.includes('name="context" value="General"'));
    assert.ok(output.includes(`data-locale="${page.locale}"`));
    assert.doesNotMatch(output, /data-lab-recipe|data-lab-block|lab-capture-/);
    const ids = [...output.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(ids).size, ids.length);
    for (const match of output.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(match[1]), `Broken target ${match[1]}`);
    let previous = -1;
    for (const section of page.sections) { const at = output.indexOf(`id="${section.id}"`); assert.ok(at > previous); previous = at; }
    assert.ok(output.includes(page.locale === "en" ? "/vorort/en/services/private/" : "/vorort/leistungen/privatpersonen/"));
    assert.ok(output.includes(page.locale === "en" ? "/vorort/en/services/business/" : "/vorort/leistungen/unternehmen/"));
    if (page.locale === "de") assert.doesNotMatch(output, /Preferred contact|Prepare email draft|Add details \(optional\)/);
    const consumer = { id: page.id, title: page.seo.title, audience: page.audience, locale: page.locale, path: route, sections: page.sections };
    assert.equal(getRecipeUsage([], [], "explanation.editorial-prose", [consumer]).length, 1);
  }
  console.log(`Validated ${pages.length} homepage(s): mixed-audience context, exact trials, 14 invalid compositions, retired recipes, one honest form, source order, anchors and derived usage.`);
} finally { await fs.rm(temporary, { recursive: true, force: true }); }
