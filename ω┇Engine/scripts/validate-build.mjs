import yaml from "js-yaml";
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

const informationFolder = path.join(engineRoot, "src/content/information-pages");
const informationRoutesEn = { trust: "en/how-we-work/index.html", "legal-notice": "en/legal-notice/index.html", privacy: "en/privacy/index.html" };
const informationRecords = fs.existsSync(informationFolder) ? fs.readdirSync(informationFolder).filter(name => name.endsWith(".yml")).map(name => yaml.load(fs.readFileSync(path.join(informationFolder, name), "utf8"))) : [];
const englishInformationHtml = informationRecords.filter(page => page.locale === "en").map(page => informationRoutesEn[page.kind]);
// The baseline includes all three German information routes. Only working
// English additions enter the sitemap; governed German drafts leave it.
const expectedSitemapCount = 23 + informationRecords.filter(page => page.locale === "en" && page.publication !== "draft").length - informationRecords.filter(page => page.locale === "de" && page.publication === "draft").length;
const expectedHtml = [
  ...englishInformationHtml,
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
  const footers = [...contents.matchAll(/<footer\b[^>]*data-recipe="footer\.site"[^>]*>[\s\S]*?<\/footer>/g)];
  if (footers.length !== 1) errors.push(`Expected one canonical footer.site section in ${displayPath}`);
  const footer = footers[0]?.[0] ?? "";
  if (!displayPath.startsWith("design-lab/")) {
    const locale = contents.includes('<html lang="en"') ? "en" : "de";
    if (!footer.includes('id="site-footer"') || !footer.includes(`data-locale="${locale}"`)) errors.push(`Footer identity/locale mismatch in ${displayPath}`);
    if (contents.indexOf(footer) < contents.indexOf("</main>")) errors.push(`Customer footer must follow main content in ${displayPath}`);
    if (/class="site-footer"/.test(contents)) errors.push(`Legacy footer remains in ${displayPath}`);
    for (const target of (locale === "en" ? ["en/legal-notice/", "en/privacy/"] : ["impressum/", "datenschutz/"])) {
      if (!footer.includes(`href="${basePath}${target}"`)) errors.push(`Missing locale legal footer link in ${displayPath}: ${target}`);
    }
    if (!footer.includes(locale === "en" ? "Get in touch" : "Kontakt aufnehmen")) errors.push(`Missing translated footer interface in ${displayPath}`);
  } else if (!contents.includes('data-lab-recipe="footer.site"') && !contents.includes('data-library-recipe="footer.site"')) {
    errors.push(`Lab footer must remain an identified specimen in ${displayPath}`);
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
if (wifiHtml.indexOf('id="kontakt"') < wifiHtml.indexOf('id="related-services"')) errors.push("German closing enquiry must retain its position");

for (const recipe of ["recognition.situations", "cta.quick-contact", "contact.enquiry-email"]) {
  if (!wifiEnHtml.includes(`data-recipe="${recipe}"`)) errors.push(`Authorised English recipe is missing: ${recipe}`);
}
if ((wifiEnHtml.match(/<form\b/g) ?? []).length !== 1) errors.push("English test requires exactly one enquiry form");
if (!wifiEnHtml.includes('data-delivery="email"') || !wifiEnHtml.includes("Prepare email draft")) errors.push("English enquiry must explain its functional mail-app fallback");
if (/<button[^>]*type="submit"[^>]*disabled/.test(wifiEnHtml)) errors.push("The email-draft fallback must remain usable without a direct endpoint");

const privateHtml = fs.readFileSync(path.join(distRoot, "design-lab/workshop/private-service-page/index.html"), "utf8");
const computerHtml = fs.readFileSync(path.join(distRoot, "en/services/private/computer-laptop-help/index.html"), "utf8");
const computerPath = "en/services/private/computer-laptop-help/";
const computerCanonical = new URL(`${basePath}${computerPath}`, astroConfig.site).toString();
const computerAlternate = new URL(`${basePath}leistungen/privatpersonen/computer-laptop-hilfe/`, astroConfig.site).toString();
for (const required of [
  '<html lang="en">', '<title>Computer Support Berlin | Windows, Mac &amp; Laptop Help</title>',
  `rel="canonical" href="${computerCanonical}"`,
  `hreflang="de" href="${computerAlternate}"`,
  'data-service-page="computer-laptop-en"', 'data-recipe="hero.service-intro"', 'data-recipe="scope.chapter-links"',
  'data-delivery="email"', 'Prepare email draft', 'BitLocker', 'macOS',
]) if (!computerHtml.includes(required)) errors.push(`Computer support missing required output: ${required}`);
if ((computerHtml.match(/<h1[ >]/g) ?? []).length !== 1 || (computerHtml.match(/<form\b/g) ?? []).length !== 1) errors.push("Computer support needs one H1 and one enquiry form");
const computerIds = [...computerHtml.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
if (computerIds.length !== new Set(computerIds).size) errors.push("Computer support contains duplicate IDs");
for (const m of computerHtml.matchAll(/href="#([^"]+)"/g)) if (!computerIds.includes(m[1])) errors.push(`Computer support has a broken target: ${m[1]}`);
for (const m of computerHtml.matchAll(/aria-labelledby="([^"]+)"/g)) for (const id of m[1].split(" ")) if (!computerIds.includes(id)) errors.push(`Computer support has a missing accessible label: ${id}`);

const businessHtml = fs.readFileSync(path.join(distRoot, "en/services/business/network-it-support/index.html"), "utf8");
for (const required of [
  '<html lang="en">', '<title>Network Infrastructure Berlin | Office Cabling &amp; Wi-Fi</title>',
  `rel="canonical" href="${new URL(`${basePath}en/services/business/network-it-support/`, astroConfig.site)}"`,
  `hreflang="de" href="${new URL(`${basePath}leistungen/unternehmen/netzwerk-it-betreuung/`, astroConfig.site)}"`,
  'data-service-page="network-it-support-en"', 'data-recipe="explanation.connection-path"',
  'data-delivery="email"', 'name="context" value="Business"', 'name="company"', 'Prepare email draft',
  'en/services/business/microsoft-365-workplaces/', 'en/services/business/google-workspace-cloud/',
]) if (!businessHtml.includes(required)) errors.push(`Business network missing required output: ${required}`);
if ((businessHtml.match(/<h1[ >]/g) ?? []).length !== 1 || (businessHtml.match(/<form\b/g) ?? []).length !== 1) errors.push("Business network needs one H1 and one enquiry form");
if (/<button[^>]*type="submit"[^>]*disabled/.test(businessHtml)) errors.push("Business email draft must remain usable without a direct endpoint");
const businessIds = [...businessHtml.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
if (businessIds.length !== new Set(businessIds).size) errors.push("Business network contains duplicate IDs");
for (const m of businessHtml.matchAll(/href="#([^"]+)"/g)) if (!businessIds.includes(m[1])) errors.push(`Business network has a broken target: ${m[1]}`);
for (const m of businessHtml.matchAll(/aria-labelledby="([^"]+)"/g)) for (const id of m[1].split(" ")) if (!businessIds.includes(id)) errors.push(`Business network has a missing accessible label: ${id}`);

const microsoftHtml = fs.readFileSync(path.join(distRoot, "en/services/business/microsoft-365-workplaces/index.html"), "utf8");
for (const required of [
  '<html lang="en">', '<title>Microsoft 365 Support Berlin | Setup, Outlook &amp; Teams</title>',
  `rel="canonical" href="${new URL(`${basePath}en/services/business/microsoft-365-workplaces/`, astroConfig.site)}"`,
  `hreflang="de" href="${new URL(`${basePath}leistungen/unternehmen/microsoft-365-arbeitsplaetze/`, astroConfig.site)}"`,
  'data-service-page="microsoft-365-workplaces-en"', 'data-recipe="hero.service-intro"', 'data-recipe="scope.chapter-links"',
  'data-delivery="email"', 'name="context" value="Business"', 'name="company"', 'Prepare email draft',
  'en/services/business/network-it-support/', 'en/services/business/google-workspace-cloud/', 'data-columns="2"',
]) if (!microsoftHtml.includes(required)) errors.push(`Microsoft 365 missing required output: ${required}`);
if ((microsoftHtml.match(/<h1[ >]/g) ?? []).length !== 1 || (microsoftHtml.match(/<form\b/g) ?? []).length !== 1) errors.push("Microsoft 365 needs one H1 and one enquiry form");
if (/<button[^>]*type="submit"[^>]*disabled/.test(microsoftHtml)) errors.push("Microsoft 365 email draft must be usable without a direct endpoint");
const microsoftIds = [...microsoftHtml.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
if (microsoftIds.length !== new Set(microsoftIds).size) errors.push("Microsoft 365 contains duplicate IDs");
for (const m of microsoftHtml.matchAll(/href="#([^"]+)"/g)) if (!microsoftIds.includes(m[1])) errors.push(`Microsoft 365 has a broken target: ${m[1]}`);
for (const m of microsoftHtml.matchAll(/aria-labelledby="([^"]+)"/g)) for (const id of m[1].split(" ")) if (!microsoftIds.includes(id)) errors.push(`Microsoft 365 has a missing accessible label: ${id}`);

// Production order follows canonical source, including shells. It is not a
// universal section script. These checks also cover the newer software option.
for (const folder of fs.readdirSync(path.join(engineRoot, "src/content/services"), { withFileTypes: true }).filter(entry => entry.isDirectory()).map(entry => entry.name)) {
  for (const locale of ["en", "de"]) {
    const sourcePath = path.join(engineRoot, "src/content/services", folder, `${locale}.yml`);
    const service = yaml.load(fs.readFileSync(sourcePath, "utf8"));
    if (!service.composition) continue;
    const composition = service.composition;
    const route = locale === "en" ? `en/services/${service.audience}/${service.slug}/` : `leistungen/${service.audience === "private" ? "privatpersonen" : "unternehmen"}/${service.slug}/`;
    const output = fs.readFileSync(path.join(distRoot, route, "index.html"), "utf8");
    const expected = composition.sections.flatMap(section => [
      ...(composition.relatedBefore === section.id ? ["related-services"] : []), section.id,
      ...(composition.contactAfter === section.id ? [locale === "en" ? "contact" : "kontakt"] : []),
    ]);
    if (!composition.experiment) expected.push("related-services", ...(!composition.contactAfter ? [locale === "en" ? "contact" : "kontakt"] : []));
    let previous = -1;
    for (const id of expected) {
      const position = output.indexOf(`id="${id}"`);
      if (position < 0 || position <= previous) errors.push(`${service.id} does not render source order: ${id}`);
      previous = position;
    }
    if ((output.match(/<form\b/g) ?? []).length !== 1 || (output.match(/<h1[ >]/g) ?? []).length !== 1) errors.push(`${service.id} must render one form and H1`);
    const ids = [...output.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
    if (ids.length !== new Set(ids).size) errors.push(`${service.id} has duplicate IDs`);
    for (const m of output.matchAll(/href="#([^"]+)"/g)) if (!ids.includes(m[1])) errors.push(`${service.id} has missing target: ${m[1]}`);
    for (const m of output.matchAll(/aria-labelledby="([^"]+)"/g)) for (const id of m[1].split(" ")) if (!ids.includes(id)) errors.push(`${service.id} has missing accessible label: ${id}`);
    const hasCompact = composition.experiment || composition.contactAfter;
    if (output.includes("pw-presentation--compact") !== Boolean(hasCompact)) errors.push(`${service.id} has wrong shared presentation context`);
    if (/data-lab-block=|data-block-status=|lab-block-states/.test(output)) errors.push(`${service.id} leaked block review labels`);
  }
}
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

// The Approved library must report implicit shell adoption, including utilities.
const footerArticle = libraryHtml.split('data-library-recipe="footer.site"')[1]?.split("</article>")[0] ?? "";
const footerUsage = footerArticle.match(/<ul class="lab-usage-list">([\s\S]*?)<\/ul>/)?.[1] ?? "";
const usageLinks = [...footerUsage.matchAll(/href="([^"]+)"/g)].map(match => match[1]);
const customerPaths = expectedHtml.filter(route => !route.startsWith("design-lab/")).map(route => `${basePath}${route.replace(/index\.html$/, "")}`);
for (const target of customerPaths) if (usageLinks.filter(link => link === target).length !== 1) errors.push(`Footer usage must list one customer consumer: ${target}`);
if (usageLinks.length !== customerPaths.length + workshopIds.length || new Set(usageLinks).size !== usageLinks.length) errors.push("Footer usage must count each Workshop/customer page once.");
const privateFooterPosition = privateHtml.indexOf('data-lab-recipe="footer.site"');
if (privateFooterPosition < 0 || privateFooterPosition > privateHtml.indexOf('data-lab-recipe="contact.enquiry"')) errors.push("Private gallery footer must be an independent specimen before the enquiry specimens, not page chrome.");

const sitemapPath = path.join(distRoot, "sitemap.xml");
if (!fs.existsSync(sitemapPath)) {
  errors.push("Missing sitemap.xml");
} else {
  const sitemap = fs.readFileSync(sitemapPath, "utf8");
  const sitemapUrlCount = (sitemap.match(/<url>/g) ?? []).length;
  const sitemapLocations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
  if (new Set(sitemapLocations).size !== sitemapLocations.length) errors.push("Sitemap contains duplicate URLs.");
  if (sitemap.includes("/design-lab/") || reviewChrome.test(sitemap)) {
    errors.push("Design Lab must remain excluded from sitemap.xml.");
  }
  if (sitemapUrlCount !== expectedSitemapCount) {
    errors.push(`Expected ${expectedSitemapCount} sitemap URLs, found ${sitemapUrlCount}.`);
  }
}

if (errors.length > 0) {
  console.error("Static build validation failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validated ${htmlFiles.length} HTML pages and ${expectedSitemapCount} sitemap URLs.`);
console.log(`All internal ${basePath} links resolve; no stale /astro-demo/ paths found.`);
