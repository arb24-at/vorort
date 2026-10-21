import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "esbuild";
import yaml from "js-yaml";
import astroConfig from "../astro.config.mjs";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const temporary = await fs.mkdtemp(path.join(root, "node_modules/.information-check-"));
try {
  const modulePath = path.join(temporary, "contracts.mjs");
  await build({ stdin: { contents: 'export * from "./src/design-system/information-page-schema.ts"; export * from "./src/design-system/section-recipes.ts"; export * from "./src/data/workshop-usage.ts";', resolveDir: root, loader: "ts" }, outfile: modulePath, bundle: true, platform: "node", format: "esm", packages: "external" });
  const { informationPageSchema, informationPath, sectionRecipes, editorialProseBlocks, getRecipeUsage } = await import(pathToFileURL(modulePath).href);
  const folder = path.join(root, "src/content/information-pages");
  const pages = await Promise.all((await fs.readdir(folder)).filter(name => name.endsWith(".yml")).map(async name => informationPageSchema.parse(yaml.load(await fs.readFile(path.join(folder, name), "utf8")))));
  assert.ok(pages.length);
  assert.equal(new Set(pages.map(page => page.id)).size, pages.length);
  const sitemap = await fs.readFile(path.join(root, "dist/sitemap.xml"), "utf8");
  const base = (astroConfig.base ?? "/").replace(/\/$/, "");
  const authority = astroConfig.site;
  for (const page of pages) {
    const invalid = [
      ["wrong identity", p => { p.id = "trust-other"; }],
      ["wrong locale", p => { p.locale = p.locale === "en" ? "de" : "en"; }],
      ["borrowed trial", p => { p.experiment = "home-en-preview"; }],
      ["duplicate ID", p => { p.sections.push(structuredClone(p.sections[0])); }],
      ["generated ID collision", p => { p.sections.push({ ...structuredClone(p.sections[0]), id: `${p.sections[0].id}-title` }); }],
      ["reserved ID", p => { p.sections[0].id = "information-title"; }],
      ["wrong recipe kind", p => { p.sections[0].kind = "hero"; }],
      ["unapproved list block", p => { p.sections[0].content.blocks.push({ type: "list", ordered: false, items: ["No inherited approval"] }); }],
      ["unknown block", p => { p.sections[0].content.blocks.push({ type: "invented" }); }],
      ["unsafe reference", p => { p.references = [{ label: "Unsafe", href: "javascript:alert(1)" }]; }],
      ["protocol-relative reference", p => { p.references = [{ label: "Unsafe", href: "//example.test" }]; }],
      ["malformed external reference", p => { p.references = [{ label: "Invalid", href: "https://#fragment" }]; }],
      ["empty external reference", p => { p.references = [{ label: "Invalid", href: "https:///" }]; }],
      ["concealed outstanding facts", p => { p.publication = "working"; p.missingFacts = ["Unknown operator"]; }],
      ["draft without outstanding facts", p => { p.publication = "draft"; delete p.missingFacts; }],
    ];
    for (const [name, change] of invalid) { const candidate = structuredClone(page); change(candidate); assert.equal(informationPageSchema.safeParse(candidate).success, false, `${page.id} accepted ${name}`); }
    const savedParent = sectionRecipes["explanation.editorial-prose"].status;
    try { sectionRecipes["explanation.editorial-prose"].status = "deprecated"; assert.equal(informationPageSchema.safeParse(page).success, false); } finally { sectionRecipes["explanation.editorial-prose"].status = savedParent; }
    const savedBlock = editorialProseBlocks.prose.status;
    try { const proseFixture = structuredClone(page); proseFixture.sections[0].content.blocks = [{ type: "prose", paragraphs: ["This used block must have its own approval."] }]; editorialProseBlocks.prose.status = "deprecated"; assert.equal(informationPageSchema.safeParse(proseFixture).success, false); } finally { editorialProseBlocks.prose.status = savedBlock; }
    const route = informationPath(page.kind, page.locale);
    const output = await fs.readFile(path.join(root, "dist", route, "index.html"), "utf8");
    assert.equal((output.match(/<h1[ >]/g) ?? []).length, 1);
    assert.equal((output.match(/<form\b/g) ?? []).length, 0, "Information pages lead to the real homepage enquiry");
    assert.doesNotMatch(output, /data-lab-recipe|data-lab-block|lab-capture-/);
    const ids = [...output.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(ids).size, ids.length);
    for (const match of output.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(match[1]), `Broken local target ${match[1]}`);
    const contact = `${base}/${page.locale === "en" ? "en/" : ""}#${page.locale === "en" ? "contact" : "kontakt"}`;
    assert.ok(output.includes(`href="${contact}"`), "Information header/dock must use the real locale homepage enquiry");
    for (const reference of page.references ?? []) {
      const expectedHref = reference.href.startsWith("https://") ? reference.href : `${base}${reference.href}`;
      assert.ok(output.replaceAll("&amp;", "&").includes(`href="${expectedHref}"`), `Reference URL must be preserved: ${reference.href}`);
    }
    const canonical = new URL(`${base}/${route}`, authority).href;
    assert.ok(output.includes(`<link rel="canonical" href="${canonical}"`));
    assert.ok(output.includes(`hreflang="${page.locale === "en" ? "de" : "en"}"`));
    if (page.locale === "en" && page.kind !== "trust") {
      const sourcePath = `${base}/${informationPath(page.kind, "de")}`;
      assert.ok(output.includes(`href="${sourcePath}"`), "English legal/privacy pages retain the German source link");
      if (page.publication === "draft") assert.ok(output.includes(page.kind === "privacy" ? "completed privacy notice" : "completed legal notice"));
    }
    let previous = -1;
    for (const section of page.sections) { const at = output.indexOf(`id="${section.id}"`); assert.ok(at > previous); previous = at; }
    if (page.publication === "draft") {
      assert.ok(output.includes('name="robots" content="noindex, nofollow"'));
      assert.ok(output.includes('class="information-status"'));
      assert.ok(!sitemap.includes(`<loc>${canonical}</loc>`), "Incomplete legal drafts must not be advertised in the sitemap");
      for (const fact of page.missingFacts) assert.ok(output.replaceAll("&amp;", "&").includes(fact), "Outstanding facts must stay visible");
      const taskBoard = await fs.readFile(path.join(root, "../α┇Docs/ω┇☑️┇Tasks.md"), "utf8");
      const taskId = `${page.locale === "en" ? "4" : "3"}${page.kind === "legal-notice" ? "L" : "M"}`;
      if (page.kind !== "trust") assert.ok(taskBoard.includes(`- [ ] **${taskId} —`), "Draft legal tasks must remain incomplete");
    } else assert.ok(sitemap.includes(`<loc>${canonical}</loc>`));
    const consumer = { id: page.id, title: page.seo.title, audience: "general", locale: page.locale, path: route, sections: page.sections };
    assert.equal(getRecipeUsage([], [], "explanation.editorial-prose", [consumer]).length, 1);
  }
  // New English privacy paths are shared by production and Lab enquiry consumers.
  for (const [locale, route] of [["en", "en/"], ["de", ""]]) {
    const home = await fs.readFile(path.join(root, "dist", route, "index.html"), "utf8");
    const privacy = `${base}/${informationPath("privacy", locale)}`;
    assert.ok(home.includes(`class="c2-contact__privacy"`) && home.includes(`href="${privacy}"`));
  }
  console.log(`Validated ${pages.length} information page(s): approved-only blocks, 15 negative contracts, unique IDs, source order, locale contact fallbacks, draft disclosure/indexing and derived usage.`);
} finally { await fs.rm(temporary, { recursive: true, force: true }); }
