import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";

const engine = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const root = path.dirname(engine);
const read = relative => fs.readFile(path.join(root, relative), "utf8");
const frontmatter = source => yaml.load(source.match(/^---\n([\s\S]*?)\n---(?:\n|$)/)?.[1] ?? "");
const roleNames = ["α┇Research & SEO.md", "β┇Blueprint Architect.md", "γ┇Content Generator.md", "δ┇Design.md", "ε┇Implementation.md", "ζ┇QA.md"];
const roles = (await fs.readdir(path.join(root, "β┇Roles"))).filter(name => name.endsWith(".md")).sort();
assert.deepEqual(roles, [...roleNames].sort(), "All six ordered roles must exist together without obsolete copies");
const docs = ["AGENTS.md", ...roles.map(name => `β┇Roles/${name}`), ...(await fs.readdir(path.join(root, "α┇Docs"))).filter(name => name.endsWith(".md")).map(name => `α┇Docs/${name}`), ...(await fs.readdir(path.join(root, "γ┇Blueprints"))).filter(name => name.endsWith(".md")).map(name => `γ┇Blueprints/${name}`)];
for (const file of docs) {
  const source = await read(file);
  for (const match of source.matchAll(/\]\(([^\n)]+)\)/g)) {
    let target = match[1].replace(/^<|>$/g, "");
    if (/^[a-z]+:/i.test(target) || target.startsWith("#")) continue;
    target = decodeURIComponent(target.split("#")[0]);
    await assert.doesNotReject(fs.access(path.resolve(root, path.dirname(file), target)), `Broken document link in ${file}: ${target}`);
  }
  assert.doesNotMatch(source, /(?:γ┇Roles┇(?:Design|Implementation|QA)|wifi-home-network-(?:en|de)-bp|software-installation-en-bp|β┇Roles\/α┇Blueprint Architect|β┇Roles\/β┇Content Generator)\.md/, `Obsolete role/blueprint reference in ${file}`);
}
const agents = await read("AGENTS.md");
assert.match(frontmatter(agents).version, /^\d+\.\d+\.\d+$/);
for (const role of roles) assert.ok(agents.includes(encodeURI(role).replaceAll("%E2%94%87", "┇")) || agents.includes(role.replaceAll(" ", "%20")), `Role missing from entry point: ${role}`);
const seo = yaml.load(await read("ω┇Engine/src/data/seo-keywords.yml"));
let blueprintCount = 0;
for (const file of docs.filter(file => file.startsWith("γ┇Blueprints/"))) {
  const source = await read(file);
  const data = frontmatter(source);
  if (data?.kind !== "page-blueprint") continue;
  blueprintCount++;
  assert.equal(path.basename(file), `${data["service-directory"]}-bp.md`, "Blueprint filename must match the actual directory");
  assert.deepEqual(Object.keys(data.locales).sort(), ["de", "en"]);
  if (data.approval === "approved") {
    assert.equal(String(data["approved-version"]), String(data["blueprint-version"]));
    assert.ok(data["approval-reference"], "Approved version needs Aykhan's recorded decision reference");
  } else {
    assert.equal(data.approval, "pending-product-owner-review");
    assert.equal(data["approved-version"], null, "A pending new draft cannot invent version approval");
    assert.equal(data["approval-reference"], null);
  }
  for (const locale of ["en", "de"]) {
    const pointers = data.locales[locale];
    const expected = `ω┇Engine/src/content/services/${data["service-directory"]}/${locale}.yml`;
    assert.equal(pointers["content-file-path"], expected);
    const record = yaml.load(await read(expected));
    assert.equal(record.id, pointers["page-id"]);
    assert.equal(record.translationId, data["page-id"]);
    assert.equal(record.locale, locale);
    const route = locale === "en" ? `/en/services/${record.audience}/${record.slug}/` : `/leistungen/${record.audience === "private" ? "privatpersonen" : "unternehmen"}/${record.slug}/`;
    assert.equal(pointers.route, route);
    const keywords = seo.pages.find(page => page.id === pointers["seo-reference"]);
    assert.equal(keywords?.route, route);
    assert.equal(keywords?.locale, locale);
    assert.ok(pointers["content-file-url"] === null || /^https:\/\/drive\.google\.com\/file\/d\/[^/]+\/view$/.test(pointers["content-file-url"]));
  }
  const count = [...source.matchAll(/^## \d{2} · /gm)].length;
  assert.ok(count > 0, "Detailed ordered section guidance must exist");
  assert.equal([...source.matchAll(/\*\*English SEO coverage:\*\*/g)].length, count);
  assert.equal([...source.matchAll(/\*\*German SEO coverage:\*\*/g)].length, count);
}
const board = await read("α┇Docs/ω┇☑️┇Tasks.md");
for (const letter of "ABCDEFGHIJKLM") {
  const en = board.indexOf(`**4${letter} — EN`), de = board.indexOf(`**3${letter} — DE`);
  assert.ok(en >= 0 && de > en, `English must precede German within family ${letter}`);
  assert.match(board, new RegExp(`- \\[ \\] \\*\\*QA-${letter} —`));
}
for (const id of ["3A", "4A", "4B", "4C", "4F", "4G"]) assert.ok(board.includes(`- [x] **${id} —`), `Source completion lost: ${id}`);
assert.match(board, /- \[ \] \*\*1D —/);
const handoff = await read("α┇Docs/β┇Collaboration.md");
for (const id of ["001", "003", "004", "005", "006", "007", "008", "009", "010", "011", "012", "013", "014", "015"]) assert.ok(handoff.includes(`RV-${id}`), `Unresolved verification ID lost: RV-${id}`);
console.log(`Validated six role paths, document links, ${blueprintCount} bilingual source/SEO relationships, approval records, task order and retained verification IDs.`);
