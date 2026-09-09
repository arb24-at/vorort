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
  const { workshopSchema, recipeAllowedIn, recipesWithStatus, sectionRecipes, getWorkshopUsage } = await import(pathToFileURL(modulePath).href);
  const folder = path.join(root, "src/content/workshop");
  const fixtures = await Promise.all((await fs.readdir(folder)).filter(file => /\.ya?ml$/.test(file)).map(async file => {
    const fixture = workshopSchema.parse(yaml.load(await fs.readFile(path.join(folder, file), "utf8")));
    assert.equal(fixture.page.id, file.replace(/\.ya?ml$/, ""), "Filename and semantic page ID must match");
    return fixture;
  }));
  assert.equal(new Set(fixtures.map(f => f.page.id)).size, fixtures.length, "Fixture page IDs must be unique");
  assert.equal(recipesWithStatus("approved").length, 0, "Initial migration must not approve recipes");
  const source = fixtures[0];
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
  for (const [name, change] of invalid) {
    const fixture = structuredClone(source);
    change(fixture);
    assert.equal(workshopSchema.safeParse(fixture).success, false, `Invalid fixture accepted: ${name}`);
  }
  const hero = sectionRecipes["hero.banner-art"];
  assert.equal(recipeAllowedIn("hero.banner-art", "production"), false);
  assert.equal(recipeAllowedIn("hero.banner-art", "workshop"), true);
  assert.throws(() => recipeAllowedIn("__proto__", "workshop"), /Unknown section recipe/);
  hero.status = "approved";
  assert.equal(recipeAllowedIn("hero.banner-art", "production"), true);
  assert.equal(recipesWithStatus("approved").length, 1);
  hero.status = "deprecated";
  assert.equal(recipeAllowedIn("hero.banner-art", "production"), false);
  assert.equal(workshopSchema.safeParse(source).success, false);
  hero.status = "experimental";
  hero.audiences = [];
  assert.equal(workshopSchema.safeParse(source).success, false, "Incompatible audience accepted");
  hero.audiences = ["private", "business"];
  const repeated = structuredClone(source);
  repeated.sections.splice(2, 0, { ...structuredClone(source.sections[1]), id: "additional-scope" });
  assert.equal(workshopSchema.safeParse(repeated).success, true);
  assert.equal(getWorkshopUsage([repeated], "scope.art-panels").length, 1, "Usage must count pages, not occurrences");
  assert.equal(getWorkshopUsage(fixtures, "hero.banner-art").length, fixtures.length);
  console.log(`Validated ${fixtures.length} Workshop fixtures, ${invalid.length} invalid-content cases, lifecycle/compatibility policy and distinct-page usage.`);
} finally {
  await fs.rm(temporary, { recursive: true, force: true });
}
