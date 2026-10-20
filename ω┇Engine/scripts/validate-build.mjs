import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import astroConfig from "../astro.config.mjs";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const engineRoot = path.resolve(scriptDirectory, "..");
const distRoot = path.join(engineRoot, "dist");
const basePath = astroConfig.base ?? "/";
const workshopIds = fs.readdirSync(path.join(engineRoot, "src/content/workshop"))
  .filter(file => /\.ya?ml$/.test(file)).map(file => file.replace(/\.ya?ml$/, ""));

const expectedHtml = [
  "404.html",
  "index.html",
  "design-lab/index.html",
  "design-lab/approved/index.html",
  ...workshopIds.flatMap(id => [`design-lab/workshop/${id}/index.html`, `design-lab/preview/${id}/index.html`]),
  "datenschutz/index.html",
  "datensicherheit-zertifizierungen/index.html",
  "impressum/index.html",
  "leistungen/privatpersonen/index.html",
  "leistungen/privatpersonen/computer-laptop-hilfe/index.html",
  "leistungen/privatpersonen/software-installation-optimierung/index.html",
  "leistungen/privatpersonen/wlan-heimnetz/index.html",
  "leistungen/privatpersonen/einrichtung-datenumzug/index.html",
  "leistungen/reparatur-installation/index.html",
  "leistungen/unternehmen/index.html",
  "leistungen/unternehmen/microsoft-365-arbeitsplaetze/index.html",
  "leistungen/unternehmen/google-workspace-cloud/index.html",
  "leistungen/unternehmen/netzwerk-it-betreuung/index.html",
  "en/index.html",
  "en/services/private/index.html",
  "en/services/private/computer-laptop-help/index.html",
  "en/services/private/software-installation-optimisation/index.html",
  "en/services/private/wifi-home-network/index.html",
  "en/services/private/setup-data-transfer/index.html",
  "en/services/business/index.html",
  "en/services/business/microsoft-365-workplaces/index.html",
  "en/services/business/google-workspace-cloud/index.html",
  "en/services/business/network-it-support/index.html"
];

const textExtensions = new Set([".css", ".html", ".js", ".svg", ".txt", ".xml"]);
const errors = [];
const reviewChrome = /lab-section-review|lab-recipe-label|data-lab-recipe|lab-section-picker|lab-capture-|data-capture-exclude/;

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });
}

function resolveBuiltTarget(urlPath) {
  const withoutQueryOrHash = urlPath.split(/[?#]/, 1)[0];
  const relativePath = decodeURIComponent(withoutQueryOrHash.slice(basePath.length));

  if (!relativePath) return path.join(distRoot, "index.html");
  if (relativePath.endsWith("/")) return path.join(distRoot, relativePath, "index.html");
  return path.join(distRoot, relativePath);
}

if (!fs.existsSync(distRoot)) {
  console.error("Validation failed: dist/ does not exist. Run the build first.");
  process.exit(1);
}

for (const relativePath of expectedHtml) {
  if (!fs.existsSync(path.join(distRoot, relativePath))) {
    errors.push(`Missing required page: ${relativePath}`);
  }
}

const files = walk(distRoot);
const htmlFiles = files.filter((file) => file.endsWith(".html"));
if (htmlFiles.length !== expectedHtml.length) {
  errors.push(`Expected ${expectedHtml.length} HTML files, found ${htmlFiles.length}.`);
}

for (const file of files) {
  if (!textExtensions.has(path.extname(file))) continue;
  const contents = fs.readFileSync(file, "utf8");
  const displayPath = path.relative(distRoot, file);

  if (contents.includes("/astro-demo/")) {
    errors.push(`Stale /astro-demo/ reference in ${displayPath}`);
  }

  if (!file.endsWith(".html")) continue;
  if (displayPath.startsWith("design-lab/")) {
    if (!/<meta name="robots" content="noindex, nofollow"\s*\/?\s*>/.test(contents)) {
      errors.push("Design Lab must carry noindex, nofollow robots metadata.");
    }
    const labCanonical = new URL(`${basePath}${displayPath.replace(/index\.html$/, "")}`, astroConfig.site).toString();
    if (!contents.includes(`<link rel="canonical" href="${labCanonical}"`)) {
      errors.push("Design Lab canonical must retain the configured site and base.");
    }
    if (/class="(?:site-header|site-footer|mobile-contact-dock)"/.test(contents)) {
      errors.push("Design Lab must not render customer-facing site chrome.");
    }
  } else if (contents.includes(`${basePath}design-lab/`)) {
    errors.push(`Customer page must not link to the internal Design Lab: ${displayPath}`);
  }
  if (!displayPath.startsWith("design-lab/") && reviewChrome.test(contents)) {
    errors.push(`Design Lab review controls must not appear in customer HTML: ${displayPath}`);
  }
  for (const match of contents.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (!url.startsWith(basePath)) continue;
    const target = resolveBuiltTarget(url);
    if (!fs.existsSync(target)) {
      errors.push(`Missing internal target in ${displayPath}: ${url}`);
    } else if (!displayPath.startsWith("design-lab/") && /\.(css|js)$/.test(target) && reviewChrome.test(fs.readFileSync(target, "utf8"))) {
      errors.push(`Customer page must not load Design Lab review assets: ${displayPath}: ${url}`);
    }
  }
}

for (const retired of ["en/services/private/wifi-home-network-ii/index.html", "en/services/business/office-network-ii/index.html"]) {
  if (fs.existsSync(path.join(distRoot, retired))) errors.push(`Retired Concept II route is still generated: ${retired}`);
}

// First authorised production recipe consumer: check the actual customer route,
// metadata, navigation and retained contact transport rather than a Lab preview.
const wifiPath = "leistungen/privatpersonen/wlan-heimnetz/index.html";
const wifiHtml = fs.readFileSync(path.join(distRoot, wifiPath), "utf8");
const wifiCanonical = new URL(`${basePath}leistungen/privatpersonen/wlan-heimnetz/`, astroConfig.site).toString();
const wifiAlternate = new URL(`${basePath}en/services/private/wifi-home-network/`, astroConfig.site).toString();
for (const required of [
  '<html lang="de">',
  `<link rel="canonical" href="${wifiCanonical}"`,
  `<link rel="alternate" hreflang="en" href="${wifiAlternate}"`,
  '<title>Heimnetzwerk einrichten in Berlin: WLAN, Mesh &amp; NAS</title>',
  'data-service-page="wifi-home-network-de"',
  'data-recipe="explanation.connection-path"',
  'role="region" tabindex="0" aria-labelledby="wlan-mesh-table-2"',
  'id="kontakt"', 'action="mailto:',
]) {
  if (!wifiHtml.includes(required)) errors.push(`German home-network page missing required output: ${required}`);
}
if ((wifiHtml.match(/<h1[ >]/g) ?? []).length !== 1) errors.push("German home-network page must have one h1");
const wifiIds = [...wifiHtml.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
if (new Set(wifiIds).size !== wifiIds.length) errors.push("German home-network page contains duplicate IDs");
for (const match of wifiHtml.matchAll(/href="#([^"]+)"/g)) {
  if (!wifiIds.includes(match[1])) errors.push(`German home-network anchor is missing: ${match[1]}`);
}
for (const english of ["Physical connection path", "Installation planning", "Planning note"]) {
  if (wifiHtml.includes(english)) errors.push(`Unlocalised connection diagram label: ${english}`);
}

const wifiEnHtml = fs.readFileSync(path.join(distRoot, "en/services/private/wifi-home-network/index.html"), "utf8");
for (const required of [
  '<html lang="en">',
  `<link rel="canonical" href="${wifiAlternate}"`,
  `<link rel="alternate" hreflang="de" href="${wifiCanonical}"`,
  '<title>Home Network Setup in Berlin | Wi-Fi, Ethernet &amp; NAS</title>',
  'data-service-page="wifi-home-network-en"',
  'data-recipe="explanation.connection-path"',
  'id="contact"', 'action="mailto:',
  'Physical connection path', 'Planning note', 'Installation planning',
]) {
  if (!wifiEnHtml.includes(required)) errors.push(`English home-network page missing required output: ${required}`);
}
if ((wifiEnHtml.match(/<h1[ >]/g) ?? []).length !== 1) errors.push("English home-network page must have one h1");
// Editorial blocks may be selected/reordered; verify the accessible relationship,
// rather than freezing the comparison table at a particular block index.
const wifiTableLabel = wifiEnHtml.match(/role="region" tabindex="0" aria-labelledby="(wifi-coverage-table-\d+)"/)?.[1];
if (!wifiTableLabel || !wifiEnHtml.includes(`<h3 id="${wifiTableLabel}">`)) errors.push("English Wi-Fi comparison needs a keyboard-scrollable region labelled by its heading");
const wifiEnIds = [...wifiEnHtml.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
if (new Set(wifiEnIds).size !== wifiEnIds.length) errors.push("English home-network page contains duplicate IDs");
for (const match of wifiEnHtml.matchAll(/href="#([^"]+)"/g)) {
  if (!wifiEnIds.includes(match[1])) errors.push(`English home-network anchor is missing: ${match[1]}`);
}
if (wifiEnHtml.includes('href="#kontakt"')) errors.push("English home-network contact links must use the English anchor");
if (wifiEnHtml.indexOf('id="contact"') > wifiEnHtml.indexOf('id="topics"')) errors.push("English production enquiry must precede the technical topic index");
if (wifiHtml.indexOf('id="kontakt"') < wifiHtml.indexOf('id="related-services"')) errors.push("German closing enquiry must retain its position");
const journeyOrder = ["introduction", "everyday-situations", "practical-help", "quick-contact", "contact", "topics", "wifi-coverage", "ethernet-cabling", "home-office", "nas-storage", "network-planning", "installation", "questions", "related-services", "final-contact"];
for (let index = 0; index < journeyOrder.length; index++) {
  const position = wifiEnHtml.indexOf(`id="${journeyOrder[index]}"`);
  if (position < 0 || (index && position <= wifiEnHtml.indexOf(`id="${journeyOrder[index - 1]}"`))) errors.push(`English journey order failed: ${journeyOrder[index]}`);
}
for (const recipe of ["recognition.situations", "cta.quick-contact", "contact.enquiry-email"]) {
  if (!wifiEnHtml.includes(`data-recipe="${recipe}"`)) errors.push(`Authorised English recipe is missing: ${recipe}`);
}
if ((wifiEnHtml.match(/data-recipe="cta.quick-contact"/g) ?? []).length !== 2) errors.push("English test requires two instances of the same quick-contact recipe");
if ((wifiEnHtml.match(/<form\b/g) ?? []).length !== 1) errors.push("English test requires exactly one enquiry form");
if (!wifiEnHtml.includes('data-delivery="email"') || !wifiEnHtml.includes("Prepare email draft")) errors.push("English enquiry must explain its functional mail-app fallback");
if (/<button[^>]*type="submit"[^>]*disabled/.test(wifiEnHtml)) errors.push("The email-draft fallback must remain usable without a direct endpoint");

const privateHtml = fs.readFileSync(path.join(distRoot, "design-lab/workshop/private-service-page/index.html"), "utf8");
const privatePreview = fs.readFileSync(path.join(distRoot, "design-lab/preview/private-service-page/index.html"), "utf8");
for (const [name, contents] of [["Workshop", privateHtml], ["Canvas", privatePreview]]) {
  if ((contents.match(/<h1[ >]/g) ?? []).length !== 1 || !contents.includes(">Private Service Page</h1>")) errors.push(`${name} needs one Private Service Page heading`);
  const ids = [...contents.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
  if (ids.length !== new Set(ids).size) errors.push(`${name} has duplicate IDs`);
  for (const match of contents.matchAll(/href="#([^"]+)"/g)) if (!ids.includes(match[1])) errors.push(`${name} has a broken specimen target: ${match[1]}`);
  if (!contents.includes('data-proposal="scope.proportionate-help"') || !contents.includes("Proposed · unregistered · no renderer")) errors.push(`${name} must distinguish unimplemented proposals`);
  if (!contents.includes('data-lab-recipe="contact.enquiry-email"')) errors.push(`${name} must include the email-draft specimen`);
}
for (const retired of ["wifi-home-network-concept-ii", "wifi-home-network-blueprint-pilot"]) {
  for (const area of ["workshop", "preview"]) if (fs.existsSync(path.join(distRoot, `design-lab/${area}/${retired}/index.html`))) errors.push(`Retired private Workshop route still builds: ${retired}`);
  if (privateHtml.includes(`/design-lab/workshop/${retired}/`)) errors.push(`Obsolete private navigation remains: ${retired}`);
}

// Standalone approved examples link back to complete Workshop context. Local
// library anchors must still resolve inside the namespaced specimen document.
const libraryHtml = fs.readFileSync(path.join(distRoot, "design-lab/approved/index.html"), "utf8");
const libraryIds = new Set([...libraryHtml.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));
for (const match of libraryHtml.matchAll(/href="#([^"]+)"/g)) if (!libraryIds.has(match[1])) errors.push(`Approved specimen has a broken local target: ${match[1]}`);

const sitemapPath = path.join(distRoot, "sitemap.xml");
if (!fs.existsSync(sitemapPath)) {
  errors.push("Missing sitemap.xml");
} else {
  const sitemap = fs.readFileSync(sitemapPath, "utf8");
  const sitemapUrlCount = (sitemap.match(/<url>/g) ?? []).length;
  if (sitemap.includes("/design-lab/") || reviewChrome.test(sitemap)) {
    errors.push("Design Lab must remain excluded from sitemap.xml.");
  }
  if (sitemapUrlCount !== 23) {
    errors.push(`Expected 23 sitemap URLs, found ${sitemapUrlCount}.`);
  }
}

if (errors.length > 0) {
  console.error("Static build validation failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validated ${htmlFiles.length} HTML pages and 23 sitemap URLs.`);
console.log(`All internal ${basePath} links resolve; no stale /astro-demo/ paths found.`);
