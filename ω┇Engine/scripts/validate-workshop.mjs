import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "esbuild";
import yaml from "js-yaml";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
// Use Astro's existing TS build tool; generated test modules are never shipped.
const temporary = await fs.mkdtemp(path.join(root, "node_modules/.workshop-check-"));
try {
  const modulePath = path.join(temporary, "contracts.mjs");
  await build({
    stdin: { contents: 'export * from "./src/design-system/workshop-schema.ts"; export * from "./src/design-system/section-recipes.ts"; export * from "./src/data/workshop-usage.ts";', resolveDir: root, loader: "ts" },
    outfile: modulePath, bundle: true, platform: "node", format: "esm", packages: "external",
  });
  const { workshopSchema, recipeAllowedIn, recipesWithStatus, sectionRecipes, getWorkshopUsage, validateRecipeRegistry } = await import(pathToFileURL(modulePath).href);
  const folder = path.join(root, "src/content/workshop");
  const fixtures = await Promise.all((await fs.readdir(folder)).filter(file => /\.ya?ml$/.test(file)).map(async file => {
    const fixture = workshopSchema.parse(yaml.load(await fs.readFile(path.join(folder, file), "utf8")));
    assert.equal(fixture.page.id, file.replace(/\.ya?ml$/, ""), "Filename and semantic page ID must match");
    return fixture;
  }));
  assert.equal(new Set(fixtures.map(f => f.page.id)).size, fixtures.length, "Fixture page IDs must be unique");
  assert.doesNotThrow(() => validateRecipeRegistry(), "Recipe guidance/replacement registry must be valid");
  const source = fixtures.find(f => f.sections[0].recipe === "hero.banner-art");
  assert.ok(source, "Lifecycle checks require an existing banner-art consumer");
  const invalid = [
    ["unknown recipe", f => { f.sections[0].recipe = "hero.unknown"; }],
    ["wrong semantic kind", f => { f.sections[0].kind = "scope"; }],
    ["missing hero text", f => { delete f.sections[0].content.title; }],
    ["missing accessible hero media label", f => { delete f.sections[0].content.media.alt; }],
    ["arbitrary section CSS", f => { f.sections[1].content.className = "custom-grid"; }],
    ["nested positioning", f => { f.sections[1].content.items[0].media.position = "20px"; }],
    ["page styling", f => { f.page.columns = 5; }],
    ["duplicate section ID", f => { f.sections[1].id = f.sections[0].id; }],
    ["broken action target", f => { f.sections[0].content.actions[0].target = "missing"; }],
    ["unsupported audience", f => { f.page.audience = "general"; }],
    ["unsupported page type", f => { f.page.pageType = "unrestricted"; }],
    ["unreviewed locale", f => { f.page.locale = "de"; }],
    ["unsafe media reference", f => { f.sections[0].content.media.src = "javascript:alert(1)"; }],
    ["incomplete staged path", f => { f.sections.find(s => s.kind === "process").content.steps.pop(); }],
    ["missing opening hero", f => { f.sections.shift(); }],
    ["missing closing contact", f => { f.sections.pop(); }],
    ["wrong shared contact anchor", f => { f.sections.at(-1).id = "enquiry"; }],
  ];
  for (const original of fixtures) {
    for (const [name, change] of invalid) {
      const fixture = structuredClone(original);
      change(fixture);
      assert.equal(workshopSchema.safeParse(fixture).success, false, `Invalid fixture accepted (${original.page.id}): ${name}`);
    }
  }
  const editorial = fixtures.find(f => f.sections.some(s => s.recipe === "scope.topic-index"));
  assert.ok(editorial, "The topic-index consumer must be exercised");
  const findContent = (fixture, id) => fixture.sections.find(s => s.recipe === id).content;
  const editorialInvalid = [
    ["missing topic target", f => { findContent(f, "scope.topic-index").items[0].target = "missing"; }],
    ["duplicate topic target", f => { const c = findContent(f, "scope.topic-index"); c.items[1].target = c.items[0].target; }],
    ["self-referencing topic", f => { const s = f.sections.find(s => s.recipe === "scope.topic-index"); s.content.items[0].target = s.id; }],
    ["missing topic image label", f => { delete findContent(f, "scope.topic-index").items[0].media.alt; }],
    ["empty editorial prose", f => { findContent(f, "explanation.editorial-media").paragraphs = []; }],
    ["empty paragraph", f => { findContent(f, "explanation.editorial-media").paragraphs[0] = "  "; }],
    ["missing editorial image", f => { delete findContent(f, "explanation.editorial-media").media.src; }],
    ["incomplete comparison", f => { delete findContent(f, "explanation.options-guide").options[0].consideration; }],
    ["diagram without destinations", f => { findContent(f, "explanation.connection-path").destinations = []; }],
    ["arbitrary diagram positioning", f => { findContent(f, "explanation.connection-path").source.x = 42; }],
    ["contact styling", f => { findContent(f, "contact.enquiry").columns = 2; }],
    ["empty contact override", f => { findContent(f, "contact.enquiry").title = " "; }],
  ];
  for (const [name, change] of editorialInvalid) {
    const fixture = structuredClone(editorial);
    change(fixture);
    assert.equal(workshopSchema.safeParse(fixture).success, false, `Invalid editorial content accepted: ${name}`);
  }
  const hero = sectionRecipes["hero.banner-art"];
  const originalStatus = hero.status;
  const originalAudiences = hero.audiences;
  assert.throws(() => recipeAllowedIn("__proto__", "workshop"), /Unknown section recipe/);
  hero.status = "experimental";
  assert.equal(recipeAllowedIn("hero.banner-art", "production"), false);
  assert.equal(recipeAllowedIn("hero.banner-art", "workshop"), true);
  hero.status = "approved";
  assert.equal(recipeAllowedIn("hero.banner-art", "production"), true);
  assert.ok(recipesWithStatus("approved").some(([id]) => id === "hero.banner-art"));
  hero.status = "deprecated";
  assert.equal(recipeAllowedIn("hero.banner-art", "production"), false);
  assert.equal(workshopSchema.safeParse(source).success, false);
  hero.status = originalStatus;
  hero.audiences = [];
  assert.equal(workshopSchema.safeParse(source).success, false, "Incompatible audience accepted");
  hero.audiences = originalAudiences;
  const originalSupersedes = hero.supersedes;
  hero.supersedes = "hero.banner-art";
  assert.throws(() => validateRecipeRegistry(), /cannot supersede itself/);
  hero.supersedes = "recipe.that-does-not-exist";
  assert.throws(() => validateRecipeRegistry(), /supersedes unknown recipe/);
  hero.supersedes = "scope.art-panels";
  assert.throws(() => validateRecipeRegistry(), /same kind/);
  hero.supersedes = "hero.editorial-art";
  assert.throws(() => validateRecipeRegistry(), /supersedes cycle/);
  hero.supersedes = originalSupersedes;
  assert.doesNotThrow(() => validateRecipeRegistry());
  const repeated = structuredClone(source);
  repeated.sections.splice(2, 0, { ...structuredClone(source.sections[1]), id: "additional-scope" });
  assert.equal(workshopSchema.safeParse(repeated).success, true);
  assert.equal(getWorkshopUsage([repeated], "scope.art-panels").length, 1, "Usage must count pages, not occurrences");
  for (const id of Object.keys(sectionRecipes)) {
    assert.deepEqual(getWorkshopUsage(fixtures, id).map(p => p.id).sort(), fixtures.filter(f => f.sections.some(s => s.recipe === id)).map(f => f.page.id).sort());
  }
  assert.equal(getWorkshopUsage([editorial], "explanation.editorial-media").length, 1, "Repeated editorial chapters count as one consuming page");
  console.log(`Validated ${fixtures.length} Workshop fixtures, ${invalid.length * fixtures.length + editorialInvalid.length} invalid-content cases, recipe guidance/replacement relationships, lifecycle/compatibility policy and distinct-page usage.`);
} finally {
  await fs.rm(temporary, { recursive: true, force: true });
}
