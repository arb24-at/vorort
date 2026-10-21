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
    stdin: { contents: 'export * from "./src/data/site-shell.ts"; export { serviceSchema } from "./src/data/service-schema.ts"; export * from "./src/design-system/workshop-schema.ts"; export * from "./src/design-system/section-recipes.ts"; export * from "./src/data/workshop-usage.ts"; export * from "./src/design-system/production-policy.ts"; export { enquiryEmailHref } from "./src/utils/enquiry-email.ts"; export { enquiryFieldError } from "./src/utils/enquiry-interface.ts"; export { captureScale } from "./src/scripts/design-lab/section-capture.ts";', resolveDir: root, loader: "ts" },
    outfile: modulePath, bundle: true, platform: "node", format: "esm", packages: "external",
  });
  const { serviceSchema, getRecipeUsage, workshopSchema, blocksAllowedForProduction, productionTrials, usedRecipeBlocks, editorialProseBlocks, recipeAllowedForProduction, isEnglishHomeNetworkTest, isEnglishComputerSupportPreview, isEnglishBusinessNetworkPreview, isEnglishMicrosoft365Preview, enquiryEmailHref, enquiryFieldError, recipeAllowedIn, recipesWithStatus, sectionRecipes, getWorkshopUsage, validateRecipeRegistry } = await import(pathToFileURL(modulePath).href);
  const { captureScale, shellRecipeIds, siteFooterSection } = await import(pathToFileURL(modulePath).href);
  for (const [width, height] of [[390, 400], [1440, 800], [390, 10000], [3000, 20000], [20000, 3000]]) {
    const scale = captureScale(width, height);
    assert.ok(scale > 0 && scale <= 2, "Capture must retain a positive scale without excessive upscaling");
    assert.ok(width * scale <= 8192 && height * scale <= 8192, "Capture must fit the canvas edge limit");
    assert.ok(width * height * scale * scale <= 8_000_001, "Capture must fit the pixel budget");
  }
  const serviceFolder = path.join(root, "src/content/services");
  const serviceEntries = await Promise.all((await fs.readdir(serviceFolder, { withFileTypes: true })).filter(entry => entry.isDirectory()).flatMap(entry => ["de", "en"].map(async locale =>
    serviceSchema.parse(yaml.load(await fs.readFile(path.join(serviceFolder, entry.name, `${locale}.yml`), "utf8")))
  )));
  const folder = path.join(root, "src/content/workshop");
  const fixtures = await Promise.all((await fs.readdir(folder)).filter(file => /\.ya?ml$/.test(file)).map(async file => {
    const fixture = workshopSchema.parse(yaml.load(await fs.readFile(path.join(folder, file), "utf8")));
    assert.equal(fixture.page.id, file.replace(/\.ya?ml$/, ""), "Filename and semantic page ID must match");
    return fixture;
  }));
  assert.equal(new Set(fixtures.map(f => f.page.id)).size, fixtures.length, "Fixture page IDs must be unique");
  assert.doesNotThrow(() => validateRecipeRegistry(), "Recipe guidance/replacement registry must be valid");
  const approvedRecipes = recipesWithStatus("approved");
  const approvedHtml = await fs.readFile(path.join(root, "dist/design-lab/approved/index.html"), "utf8");
  assert.ok(approvedHtml.includes(`data-approved-count="${approvedRecipes.length}"`),
    "Built Approved Sections count must match the canonical registry");
  const guidanceFields = ["contentShape", "typicalRange", "fixed", "flexible", "needsDesignReview", "media", "responsive", "accessibility"];
  let invalidGuidanceCases = 0;
  for (const [id, recipe] of approvedRecipes) {
    const originalGuidance = recipe.authoringGuidance;
    const rejectsGuidance = guidance => {
      recipe.authoringGuidance = guidance;
      assert.throws(() => validateRecipeRegistry(), error =>
        error.message.includes(`Approved section recipe ${id} needs complete authoring guidance`),
      `Incomplete approved guidance accepted: ${id}`);
      invalidGuidanceCases++;
    };
    try {
      for (const absent of [undefined, null, {}]) rejectsGuidance(absent);
      for (const field of guidanceFields) {
        const missing = { ...originalGuidance };
        delete missing[field];
        rejectsGuidance(missing);
        for (const invalid of ["", " \n\t ", null, 42]) {
          rejectsGuidance({ ...originalGuidance, [field]: invalid });
        }
      }
    } finally {
      recipe.authoringGuidance = originalGuidance;
    }
  }
  const source = fixtures.find(f => f.sections[0].recipe === "hero.banner-art");
  assert.ok(source, "Lifecycle checks require an existing banner-art consumer");
  const invalid = [
    ["unknown recipe", f => { f.sections[0].recipe = "hero.unknown"; }],
    ["wrong semantic kind", f => { f.sections[0].kind = "scope"; }],
    ["missing hero text", f => { delete f.sections[0].content.title; }],
    ["missing accessible hero media label", f => { delete f.sections[0].content.media.alt; }],
    ["arbitrary section CSS", f => { f.sections[1].content.className = "custom-grid"; }],
    ["nested positioning", f => { f.sections.find(s => s.kind === "scope").content.items[0].media.position = "20px"; }],
    ["page styling", f => { f.page.columns = 5; }],
    ["duplicate section ID", f => { f.sections[1].id = f.sections[0].id; }],
    ["broken action target", f => { f.sections[0].content.actions[0].target = "missing"; }],
    ["unsupported audience", f => { f.page.audience = "general"; }],
    ["unsupported page type", f => { f.page.pageType = "unrestricted"; }],
    ["unreviewed locale", f => { f.page.locale = "de"; }],
    ["unsafe media reference", f => { f.sections[0].content.media.src = "javascript:alert(1)"; }],
    ["incomplete staged path", f => { f.sections.find(s => s.kind === "process").content.steps.pop(); }],
    ["missing opening hero", f => { f.sections.shift(); }],
    ["missing closing contact", f => { f.sections.splice(-2, 1); }],
    ["wrong shared contact anchor", f => { f.sections.at(-2).id = "enquiry"; }],
    ["missing closing footer", f => { f.sections.pop(); }],
    ["wrong shared footer anchor", f => { f.sections.at(-1).id = "footer"; }],
    ["footer before contact", f => { const footer = f.sections.pop(); f.sections.splice(-1, 0, footer); }],
    ["duplicate footer", f => { f.sections.splice(-1, 0, { ...structuredClone(f.sections.at(-1)), id: "additional-footer" }); }],
    ["arbitrary footer content", f => { f.sections.at(-1).content.note = "Custom footer"; }],
  ];
  const closingFixtures = fixtures.filter(f => f.page.layout !== "specimens");
  for (const original of closingFixtures) {
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
  const originalGuidance = hero.authoringGuidance;
  assert.throws(() => recipeAllowedIn("__proto__", "workshop"), /Unknown section recipe/);
  hero.status = "experimental";
  assert.equal(recipeAllowedIn("hero.banner-art", "production"), false);
  assert.equal(recipeAllowedIn("hero.banner-art", "workshop"), true);
  hero.authoringGuidance = undefined;
  assert.doesNotThrow(() => validateRecipeRegistry(), "Experimental recipes may omit authoring guidance");
  hero.authoringGuidance = { contentShape: "Migration in progress." };
  assert.doesNotThrow(() => validateRecipeRegistry(), "Experimental recipes may carry partial authoring guidance");
  hero.status = "approved";
  assert.throws(() => validateRecipeRegistry(), /hero\.banner-art needs complete authoring guidance/,
    "Promoting an incomplete experimental recipe must fail");
  hero.authoringGuidance = Object.fromEntries(guidanceFields.map(field => [field, `Test guidance for ${field}.`]));
  assert.doesNotThrow(() => validateRecipeRegistry(), "Complete guidance permits validation after promotion without a fixed approval list");
  assert.equal(recipeAllowedIn("hero.banner-art", "production"), true);
  assert.ok(recipesWithStatus("approved").some(([id]) => id === "hero.banner-art"));
  hero.status = "deprecated";
  assert.equal(recipeAllowedIn("hero.banner-art", "production"), false);
  assert.equal(workshopSchema.safeParse(source).success, false);
  hero.status = originalStatus;
  hero.authoringGuidance = originalGuidance;
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
  const production = serviceEntries.find(service => service.id === "wifi-home-network-de");
  assert.ok(production?.composition, "German home network service must adopt a validated composition");
  const productionInvalid = [
    ["shell contact too early", s => { s.composition.contactAfter = "introduction"; }],
    ["missing composition", s => { delete s.composition; }],
    ["empty composition", s => { s.composition.sections = []; }],
    ["wrong template", s => { s.page.template = "standard"; }],
    ["duplicate production anchor", s => { s.composition.sections[1].id = s.composition.sections[0].id; }],
    ["reserved production anchor", s => { s.composition.sections[1].id = "kontakt"; }],
    ["missing production hero", s => { s.composition.sections.shift(); }],
    ["duplicate production hero", s => { s.composition.sections.push({ ...structuredClone(s.composition.sections[0]), id: "second-hero" }); }],
    ["missing action target", s => { s.composition.sections[0].content.actions[0].target = "missing"; }],
    ["wrong locale contact target", s => { s.composition.sections[0].content.actions[0].target = "contact"; }],
    ["missing topic target", s => { s.composition.sections[1].content.items[0].target = "missing"; }],
    ["non-chapter topic target", s => { s.composition.sections[1].content.items[0].target = "ablauf"; }],
    ["duplicate topic target", s => { s.composition.sections[1].content.items[1].target = s.composition.sections[1].content.items[0].target; }],
    ["production styling in copy", s => { s.composition.sections[2].content.className = "custom"; }],
    ["divergent hero summary", s => { s.hero.title = "An unrelated page heading"; }],
    ["duplicate shell contact", s => { s.composition.sections.push({ id: "extra-contact", kind: "contact", recipe: "contact.enquiry", content: {} }); }],
  ];
  for (const [name, change] of productionInvalid) {
    const service = structuredClone(production);
    change(service);
    assert.equal(serviceSchema.safeParse(service).success, false, `Invalid production composition accepted: ${name}`);
  }
  const approvedHero = sectionRecipes["hero.editorial-art"];
  for (const [field, invalidValue] of [["status", "deprecated"], ["audiences", []], ["pageTypes", []]]) {
    const original = approvedHero[field];
    try {
      approvedHero[field] = invalidValue;
      assert.equal(serviceSchema.safeParse(production).success, false, `Production must enforce ${field}`);
    } finally { approvedHero[field] = original; }
  }
  for (const id of Object.keys(sectionRecipes)) {
    const expected = serviceEntries.filter(service => shellRecipeIds.includes(id) || service.composition?.sections.some(section => section.recipe === id)).length;
    assert.equal(getRecipeUsage(fixtures, serviceEntries, id).length, getWorkshopUsage(fixtures, id).length + expected);
  }
  assert.equal(siteFooterSection.recipe, "footer.site");
  assert.equal(sectionRecipes[siteFooterSection.recipe].status, "approved");
  for (const pageType of ["service", "audience", "home", "information"]) assert.ok(sectionRecipes[siteFooterSection.recipe].pageTypes.includes(pageType));
  for (const audience of ["private", "business", "general"]) assert.ok(sectionRecipes[siteFooterSection.recipe].audiences.includes(audience));
  assert.equal(getRecipeUsage([], [production, production], "footer.site").length, 1, "Shell-owned footer counts the page once, even with repeated inputs");
  assert.equal(getRecipeUsage([], [production], "explanation.editorial-prose").length, 1, "Repeated production chapters count as one page");
  const englishProduction = serviceEntries.find(service => service.id === "wifi-home-network-en");
  assert.ok(englishProduction?.composition, "English home network service must adopt a validated composition");
  const englishInvalid = structuredClone(englishProduction);
  englishInvalid.composition.sections[0].content.actions[0].target = "kontakt";
  assert.equal(serviceSchema.safeParse(englishInvalid).success, false, "English hero must reject the German contact anchor");
  const englishUsage = getRecipeUsage([], [production, englishProduction], "explanation.editorial-prose");
  assert.equal(englishUsage.length, 2, "Each independently authored locale counts as its own consuming page");
  assert.equal(new Set(englishUsage.map(page => page.path)).size, 2, "Locale usage links must resolve to distinct routes");
  const gallery = fixtures.find(f => f.page.id === "private-service-page");
  assert.ok(gallery, "The general private-service gallery must exist");
  assert.equal(gallery.page.title, "Private Service Page");
  assert.equal(gallery.page.layout, "specimens");
  assert.equal(fixtures.filter(f => f.page.audience === "private").length, 1, "Only one general private Workshop may remain");
  const galleryHtml = await fs.readFile(path.join(root, "dist/design-lab/workshop/private-service-page/index.html"), "utf8");
  for (const [id, recipe] of Object.entries(sectionRecipes)) {
    if (recipe.status !== "deprecated" && recipe.audiences.includes("private")) {
      assert.ok(gallery.sections.some(s => s.recipe === id), `Missing reusable private specimen: ${id}`);
      assert.ok(galleryHtml.includes(`data-lab-recipe="${id}" data-lab-status="${recipe.status}"`), `Incorrect rendered lifecycle: ${id}`);
    }
  }
  assert.equal(getWorkshopUsage([gallery], "explanation.editorial-media").length, 1, "Gallery variations count as one consumer");
  const galleryInvalid = [
    ["duplicate ID", f => { f.sections[1].id = f.sections[0].id; }],
    ["unknown recipe", f => { f.sections[0].recipe = "hero.unknown"; }],
    ["wrong kind", f => { f.sections[0].kind = "scope"; }],
    ["missing specimen context", f => { delete f.specimenNotes[f.sections[0].id]; }],
    ["orphan specimen context", f => { f.specimenNotes.missing = f.specimenNotes[f.sections[0].id]; }],
    ["page CSS", f => { f.page.columns = 3; }],
    ["specimen CSS", f => { f.specimenNotes[f.sections[0].id].className = "special"; }],
    ["unsupported audience", f => { f.page.audience = "business"; }],
    ["unreviewed locale", f => { f.page.locale = "de"; }],
    ["fake source binding", f => { f.page.sourceService = "wifi-home-network-en"; }],
    ["old source reference", f => { f.sections[0] = { fromServiceSection: "introduction" }; }],
    ["registered proposal", f => { f.proposals[0].id = "cta.quick-contact"; }],
    ["fake proposal approval", f => { f.proposals[0].status = "approved"; }],
    ["duplicate proposal", f => { f.proposals.push(structuredClone(f.proposals[0])); }],
    ["broken CTA anchor", f => { f.sections.find(s => s.recipe === "cta.quick-contact").content.enquiryTarget = "missing"; }],
  ];
  for (const [name, change] of galleryInvalid) {
    const fixture = structuredClone(gallery); change(fixture);
    assert.equal(workshopSchema.safeParse(fixture).success, false, `Invalid gallery accepted: ${name}`);
  }
  const englishContext = {
    id: englishProduction.id, translationId: englishProduction.translationId,
    slug: englishProduction.slug, audience: englishProduction.audience, locale: englishProduction.locale,
    experiment: englishProduction.composition.experiment,
  };
  // A specimen demonstrates blocks; focused chapters may select only one.
  const proseSchema = sectionRecipes["explanation.editorial-prose"].schema;
  const proseExample = englishProduction.composition.sections.find(s => s.recipe === "explanation.editorial-prose").content;
  for (const count of [1, 2]) {
    assert.equal(proseSchema.safeParse({ ...proseExample, blocks: proseExample.blocks.slice(0, count) }).success, true, `${count} meaningful prose blocks should be sufficient`);
  }
  assert.equal(proseSchema.safeParse({ ...proseExample, blocks: [] }).success, false, "An explanation still requires content beyond its introduction");
  assert.equal(proseSchema.safeParse({ ...proseExample, blocks: [{ type: "arbitrary-layout" }] }).success, false, "Compact sections retain validated semantic blocks");
  assert.equal(isEnglishHomeNetworkTest(englishContext), true);
  const authorised = ["recognition.situations", "cta.quick-contact", "contact.enquiry-email"];
  for (const recipe of authorised) {
    const normallyApproved = sectionRecipes[recipe].status === "approved";
    assert.equal(recipeAllowedIn(recipe, "production"), normallyApproved, "The default policy must follow registry approval");
    assert.equal(recipeAllowedForProduction(recipe, englishContext), true);
    for (const context of [undefined, { ...englishContext, experiment: undefined }, { ...englishContext, locale: "de" }, { ...englishContext, audience: "business" }, { ...englishContext, id: "computer-laptop-en" }, { ...englishContext, slug: "another-route" }, { ...englishContext, translationId: "another-service" }]) {
      assert.equal(recipeAllowedForProduction(recipe, context), normallyApproved, `Unapproved exception escaped its exact English context: ${recipe}`);
    }
    const status = sectionRecipes[recipe].status;
    try {
      sectionRecipes[recipe].status = "deprecated";
      assert.equal(recipeAllowedForProduction(recipe, englishContext), false);
      assert.equal(serviceSchema.safeParse(englishProduction).success, false);
    } finally { sectionRecipes[recipe].status = status; }
  }
  const bannerStatus = sectionRecipes["hero.banner-art"].status;
  try {
    sectionRecipes["hero.banner-art"].status = "experimental";
    assert.equal(recipeAllowedForProduction("hero.banner-art", englishContext), false, "The exception must not admit unlisted experiments");
    const unapprovedHero = structuredClone(production);
    unapprovedHero.composition.sections[0].recipe = "hero.banner-art";
    assert.equal(serviceSchema.safeParse(unapprovedHero).success, false, "Default production must reject an experimental hero");
  } finally { sectionRecipes["hero.banner-art"].status = bannerStatus; }
  const boundaryStatus = sectionRecipes["outcome.scope-proof"].status;
  try {
    sectionRecipes["outcome.scope-proof"].status = "experimental";
    const unlisted = structuredClone(englishProduction);
    unlisted.composition.sections.splice(2, 0, structuredClone(gallery.sections.find(s => s.recipe === "outcome.scope-proof")));
    assert.equal(serviceSchema.safeParse(unlisted).success, false, "English test must reject an unlisted experimental recipe");
  } finally { sectionRecipes["outcome.scope-proof"].status = boundaryStatus; }
  assert.equal(getRecipeUsage([], [englishProduction], "cta.quick-contact").length, 1, "Early/closing CTA counts one production consumer");
  assert.equal(englishProduction.composition.sections.filter(s => s.kind === "contact").length, 1);
  const englishTestInvalid = [
    ["no experiment authorisation", s => { delete s.composition.experiment; }],
    ["unknown experiment", s => { s.composition.experiment = "all-experiments"; }],
    ["another service", s => { s.id = "computer-laptop-en"; s.translationId = "computer-laptop"; s.slug = "computer-laptop-help"; }],
    ["another slug", s => { s.slug = "another-route"; }],
    ["business audience", s => { s.audience = "business"; }],
    ["duplicate enquiry", s => { s.composition.sections.push({ ...structuredClone(s.composition.sections[4]), id: "second-enquiry" }); }],
    ["missing enquiry", s => { s.composition.sections.splice(4, 1); }],
    ["wrong enquiry anchor", s => { s.composition.sections[4].id = "enquiry"; }],
    ["broken CTA target", s => { s.composition.sections[3].content.enquiryTarget = "wifi-coverage"; }],
    ["missing related target", s => { s.composition.relatedBefore = "missing"; }],
    ["duplicate instance ID", s => { s.composition.sections.at(-1).id = "quick-contact"; }],
    ["missing email subject", s => { delete s.composition.sections[4].content.emailSubject; }],
    ["silently changed direct-submit semantics", s => { s.composition.sections[4].recipe = "contact.enquiry"; delete s.composition.sections[4].content.emailSubject; }],
  ];
  for (const [name, change] of englishTestInvalid) {
    const service = structuredClone(englishProduction); change(service);
    assert.equal(serviceSchema.safeParse(service).success, false, `Invalid English test accepted: ${name}`);
  }
  const draft = new URL(enquiryEmailHref("support@example.test", "Setup & connection", [["name", "Example & visitor"], ["email", "reader@example.test"], ["request", "First line\nSecond line?"], ["phone", ""], ["unknown", "ignored"], ["__proto__", "ignored"]]));
  assert.equal(draft.protocol, "mailto:");
  assert.equal(draft.pathname, "support@example.test");
  assert.equal(draft.searchParams.get("subject"), "Setup & connection");
  assert.equal(draft.searchParams.get("body"), "Name: Example & visitor\n\nEmail: reader@example.test\n\nRequest: First line\nSecond line?");
  assert.equal([...draft.searchParams].length, 2, "User punctuation must remain encoded inside the two mailto fields");
  assert.equal(enquiryFieldError("de", { valueMissing: true }, "Please fill in this field."), "Bitte füllen Sie dieses Feld aus.");
  assert.equal(enquiryFieldError("de", { typeMismatch: true }, "Browser email error"), "Bitte geben Sie eine gültige E-Mail-Adresse ein.");
  assert.equal(enquiryFieldError("de", { tooShort: true }, "Browser length error", 10), "Bitte verwenden Sie mindestens 10 Zeichen.");
  assert.equal(enquiryFieldError("de", { customError: true }, "Bereits lokalisierte Meldung"), "Bereits lokalisierte Meldung");
  assert.equal(enquiryFieldError("en", { valueMissing: true }, "Native browser message"), "Native browser message");
  const germanDraft = new URL(enquiryEmailHref("support@example.test", "Anfrage & Einrichtung", [["name", "Beispiel"], ["preferred-contact", "Phone"], ["phone", "+49 30"], ["context", "Private"], ["request", "WLAN prüfen"]], "de"));
  assert.equal(germanDraft.searchParams.get("subject"), "Anfrage & Einrichtung");
  assert.equal(germanDraft.searchParams.get("body"), "Name: Beispiel\n\nGewünschter Kontaktweg: Telefon\n\nTelefon: +49 30\n\nKundenbereich: Privat\n\nAnliegen: WLAN prüfen");
  const computer = serviceEntries.find(s => s.id === "computer-laptop-en");
  assert.ok(computer?.composition, "English computer support must use canonical composition");
  const computerContext = { id: computer.id, translationId: computer.translationId, slug: computer.slug, locale: computer.locale, audience: computer.audience, experiment: computer.composition.experiment };
  assert.equal(isEnglishComputerSupportPreview(computerContext), true);
  for (const id of ["hero.service-intro", "scope.chapter-links", "recognition.situations", "cta.quick-contact", "contact.enquiry-email"]) {
    const approved = sectionRecipes[id].status === "approved";
    assert.equal(recipeAllowedIn(id, "production"), approved, "Default approval rules remain independent of page permission");
    assert.equal(recipeAllowedForProduction(id, computerContext), true);
    for (const context of [undefined, { ...computerContext, experiment: undefined }, { ...computerContext, experiment: "wifi-home-network-en-test" }, { ...computerContext, id: "another-en" }, { ...computerContext, translationId: "another" }, { ...computerContext, slug: "another" }, { ...computerContext, locale: "de" }, { ...computerContext, audience: "business" }]) {
      assert.equal(recipeAllowedForProduction(id, context), approved, `Computer page authorisation escaped its route: ${id}`);
    }
    const status = sectionRecipes[id].status;
    try {
      sectionRecipes[id].status = "deprecated";
      assert.equal(recipeAllowedForProduction(id, computerContext), false);
      assert.equal(serviceSchema.safeParse(computer).success, false);
    } finally { sectionRecipes[id].status = status; }
  }
  for (const id of ["hero.service-intro", "scope.chapter-links"]) {
    assert.equal(recipeAllowedForProduction(id, englishContext), sectionRecipes[id].status === "approved", "Home-network permission must not expand with the computer page");
    const usage = getRecipeUsage(fixtures, serviceEntries, id);
    assert.equal(usage.filter(p => p.context === "Production · EN").length,
      serviceEntries.filter(s => s.locale === "en" && s.composition?.sections.some(section => section.recipe === id)).length);
    assert.ok(usage.some(p => p.path === "en/services/private/computer-laptop-help/"));
  }
  const computerInvalid = [
    ["missing permission", s => { delete s.composition.experiment; }],
    ["borrowed permission", s => { s.composition.experiment = "wifi-home-network-en-test"; }],
    ["wrong route", s => { s.slug = "other-route"; }],
    ["wrong locale", s => { s.id = "computer-laptop-de"; s.locale = "de"; }],
    ["wrong audience", s => { s.audience = "business"; }],
    ["duplicate anchor", s => { s.composition.sections[1].id = "introduction"; }],
    ["broken hero target", s => { s.composition.sections[0].content.actions[0].target = "missing"; }],
    ["missing preparation note", s => { delete s.composition.sections[0].content.note; }],
    ["styling in hero", s => { s.composition.sections[0].content.className = "big"; }],
    ["divergent hero summary", s => { s.hero.title = "An unrelated service heading"; }],
    ["broken chapter target", s => { s.composition.sections[5].content.items[0].target = "missing"; }],
    ["non-chapter destination", s => { s.composition.sections[5].content.items[0].target = "questions"; }],
    ["duplicate chapter target", s => { s.composition.sections[5].content.items[1].target = s.composition.sections[5].content.items[0].target; }],
    ["second enquiry", s => { s.composition.sections.splice(5, 0, { ...structuredClone(s.composition.sections[4]), id: "extra-enquiry" }); }],
    ["wrong enquiry destination", s => { s.composition.sections[3].content.enquiryTarget = "questions"; }],
    ["unlisted experiment", s => { s.composition.sections.splice(6, 0, structuredClone(gallery.sections.find(s => s.recipe === "outcome.scope-proof"))); }],
    ["changed delivery contract", s => { s.composition.sections[4].recipe = "contact.enquiry"; delete s.composition.sections[4].content.emailSubject; }],
  ];
  for (const [name, change] of computerInvalid) {
    const service = structuredClone(computer); change(service);
    assert.equal(serviceSchema.safeParse(service).success, false, `Invalid computer composition accepted: ${name}`);
  }
  for (const recipe of ["hero.service-intro", "scope.chapter-links"]) {
    const specimen = structuredClone(gallery);
    const entry = specimen.sections.find(s => s.recipe === recipe);
    if (recipe === "hero.service-intro") entry.content.actions[0].target = "missing";
    else entry.content.items[0].target = "missing";
    assert.equal(workshopSchema.safeParse(specimen).success, false, `New specimen accepted a broken target: ${recipe}`);
  }
  assert.equal(getRecipeUsage([], [computer], "cta.quick-contact").length, 1, "Repeated computer CTAs count once");
  console.log(`Validated computer support: ${computerInvalid.length} invalid compositions, two new shared specimens, route-bound schema/runtime authorisation and derived usage.`);
  const business = serviceEntries.find(s => s.id === "network-it-support-en");
  assert.ok(business?.composition, "English business network needs a complete source composition");
  const businessContext = { id: business.id, translationId: business.translationId, slug: business.slug, locale: business.locale, audience: business.audience, experiment: business.composition.experiment };
  assert.equal(isEnglishBusinessNetworkPreview(businessContext), true);
  const businessExperiments = ["hero.service-intro", "scope.chapter-links", "recognition.situations", "cta.quick-contact", "contact.enquiry-email"];
  for (const [id, recipe] of Object.entries(sectionRecipes)) {
    assert.equal(recipeAllowedForProduction(id, businessContext), recipe.status === "approved" || (recipe.status === "experimental" && businessExperiments.includes(id)), `Business runtime whitelist mismatch: ${id}`);
  }
  for (const id of businessExperiments) {
    const approved = sectionRecipes[id].status === "approved";
    for (const context of [undefined, { ...businessContext, experiment: undefined }, { ...businessContext, experiment: "computer-laptop-en-preview" }, { ...businessContext, experiment: "wifi-home-network-en-test" }, { ...businessContext, id: "another-en" }, { ...businessContext, translationId: "another" }, { ...businessContext, slug: "another" }, { ...businessContext, locale: "de" }, { ...businessContext, audience: "private" }]) {
      assert.equal(recipeAllowedForProduction(id, context), approved, `Business authorisation escaped its exact identity: ${id}`);
    }
    const status = sectionRecipes[id].status;
    try {
      sectionRecipes[id].status = "deprecated";
      assert.equal(recipeAllowedForProduction(id, businessContext), false);
      assert.equal(serviceSchema.safeParse(business).success, false);
    } finally { sectionRecipes[id].status = status; }
  }
  // The shared journey safeguards must apply to business, without borrowing a
  // private-page identity or allowing arbitrary experimental recipes.
  const businessInvalid = computerInvalid.map(([name, change]) => [name, change]);
  businessInvalid.push(["borrowed computer permission", s => { s.composition.experiment = "computer-laptop-en-preview"; }]);
  for (const [name, change] of businessInvalid) {
    const candidate = structuredClone(business);
    if (name === "wrong audience") candidate.audience = "private";
    else change(candidate);
    assert.equal(serviceSchema.safeParse(candidate).success, false, `Invalid business composition accepted: ${name}`);
  }
  assert.equal(getRecipeUsage([], [business], "cta.quick-contact").length, 1, "Repeated business invitations count as one consumer");
  assert.ok(getRecipeUsage(fixtures, serviceEntries, "hero.service-intro").some(p => p.path === "en/services/business/network-it-support/"));
  console.log(`Validated business network: ${businessInvalid.length} invalid compositions, exact schema/runtime whitelist, deprecated rejection and distinct production usage.`);
  const microsoft = serviceEntries.find(s => s.id === "microsoft-365-workplaces-en");
  assert.ok(microsoft?.composition, "Microsoft 365 must use a complete canonical composition");
  const microsoftContext = { id: microsoft.id, translationId: microsoft.translationId, slug: microsoft.slug, locale: microsoft.locale, audience: microsoft.audience, experiment: microsoft.composition.experiment };
  assert.equal(isEnglishMicrosoft365Preview(microsoftContext), true);
  for (const [id, recipe] of Object.entries(sectionRecipes)) {
    assert.equal(recipeAllowedForProduction(id, microsoftContext), recipe.status === "approved" || (recipe.status === "experimental" && businessExperiments.includes(id)), `Microsoft 365 runtime whitelist mismatch: ${id}`);
  }
  for (const id of businessExperiments) {
    const approved = sectionRecipes[id].status === "approved";
    assert.equal(recipeAllowedIn(id, "production"), approved, "Page adoption must not change the default approval rule");
    for (const context of [undefined, { ...microsoftContext, experiment: undefined }, { ...microsoftContext, experiment: "business-network-en-preview" }, { ...microsoftContext, experiment: "computer-laptop-en-preview" }, { ...microsoftContext, experiment: "wifi-home-network-en-test" }, { ...microsoftContext, id: "another-en" }, { ...microsoftContext, translationId: "another" }, { ...microsoftContext, slug: "another" }, { ...microsoftContext, locale: "de" }, { ...microsoftContext, audience: "private" }]) {
      assert.equal(recipeAllowedForProduction(id, context), approved, `Microsoft 365 permission escaped its identity: ${id}`);
    }
    const status = sectionRecipes[id].status;
    try {
      sectionRecipes[id].status = "deprecated";
      assert.equal(recipeAllowedForProduction(id, microsoftContext), false);
      assert.equal(serviceSchema.safeParse(microsoft).success, false);
    } finally { sectionRecipes[id].status = status; }
  }
  const microsoftInvalid = [...businessInvalid, ["borrowed network permission", s => { s.composition.experiment = "business-network-en-preview"; }]];
  for (const [name, change] of microsoftInvalid) {
    const candidate = structuredClone(microsoft);
    if (name === "wrong audience") candidate.audience = "private";
    else change(candidate);
    assert.equal(serviceSchema.safeParse(candidate).success, false, `Invalid Microsoft 365 composition accepted: ${name}`);
  }
  for (const id of ["cta.quick-contact", "explanation.editorial-prose"]) {
    assert.equal(getRecipeUsage([], [microsoft], id).length, 1, "Repeated Microsoft 365 sections count as one page per recipe");
    assert.ok(getRecipeUsage(fixtures, serviceEntries, id).some(p => p.path === "en/services/business/microsoft-365-workplaces/"));
  }
  console.log(`Validated Microsoft 365: ${microsoftInvalid.length} invalid compositions, exact schema/runtime whitelist, lifecycle safeguards and distinct usage.`);
  // Blueprint approval controls journeys; code enforces semantics, not one pilot.
  const validJourneys = [
    ["three recognition situations", s => { s.composition.sections[1].content.items = s.composition.sections[1].content.items.slice(0, 3); }],
    ["renamed scope ID", s => { s.composition.sections[2].id = "help-and-scope"; }],
    ["no recognition section", s => { s.composition.sections.splice(1, 1); }],
    ["one invitation", s => { s.composition.sections.splice(3, 1); }],
    ["no forced closing invitation", s => { s.composition.sections.pop(); s.composition.relatedBefore = "questions"; }],
    ["chapter links before enquiry", s => { s.composition.sections.splice(2, 0, s.composition.sections.splice(5, 1)[0]); }],
  ];
  for (const [name, change] of validJourneys) {
    const candidate = structuredClone(englishProduction); change(candidate);
    assert.equal(serviceSchema.safeParse(candidate).success, true, `Valid flexible journey rejected: ${name}`);
  }
  const software = serviceEntries.find(s => s.id === "software-optimisation-en");
  assert.equal(serviceSchema.safeParse(software).success, true, "Existing software early-contact composition must stay valid");
  for (const target of ["missing", "introduction", software.composition.sections.at(-1).id]) {
    const candidate = structuredClone(software); candidate.composition.contactAfter = target;
    assert.equal(serviceSchema.safeParse(candidate).success, false, `Invalid shell contact position accepted: ${target}`);
  }
  const laterContact = structuredClone(software);
  laterContact.composition.contactAfter = "installation-choices";
  assert.equal(serviceSchema.safeParse(laterContact).success, true, "A valid alternative shell contact position must be supported");

  const compactSpecimen = gallery.sections.find(s => s.id === "compact-explanation");
  assert.ok(compactSpecimen, "Compact list variation needs a real generic specimen");
  assert.equal(gallery.specimenNotes[compactSpecimen.id].presentation, "compact");
  assert.equal(sectionRecipes[compactSpecimen.recipe].status, "approved");
  assert.equal(editorialProseBlocks.list.status, "experimental");
  assert.ok(approvedHtml.includes('data-library-block="explanation.editorial-prose/list" data-block-status="experimental"'), "Approved Sections must show the independent Experimental palette entry");
  assert.equal(galleryHtml.includes('data-lab-block="explanation.editorial-prose/list" data-block-status="experimental"'), true, "List status must be visible independently of Approved parent");
  assert.match(galleryHtml, /class="[^"]*pw-presentation--compact/);
  assert.match(galleryHtml, /<ol class="pw-rich-prose__list">/);
  assert.match(galleryHtml, /<ul class="pw-rich-prose__list">/);
  assert.equal(usedRecipeBlocks(compactSpecimen).filter(b => b.status === "experimental").length, 2);
  assert.equal(blocksAllowedForProduction(compactSpecimen), false, "Approved parent cannot approve its list");
  assert.equal(blocksAllowedForProduction(compactSpecimen, englishContext), false, "Section trial does not authorise unlisted blocks");
  const withList = structuredClone(englishProduction);
  withList.composition.sections.splice(2, 0, structuredClone(compactSpecimen));
  assert.equal(serviceSchema.safeParse(withList).success, false, "Unauthorised experimental block must fail production schema");
  const trial = productionTrials[englishContext.experiment];
  const savedBlocks = trial.blocks;
  try {
    // Simulate a future recorded approval in the canonical permission table.
    trial.blocks = ["explanation.editorial-prose/list"];
    assert.equal(blocksAllowedForProduction(compactSpecimen, englishContext), true);
    assert.equal(serviceSchema.safeParse(withList).success, true);
    for (const context of [undefined, { ...englishContext, locale: "de" }, { ...englishContext, audience: "business" }, { ...englishContext, experiment: undefined }, { ...englishContext, slug: "other" }, { ...englishContext, id: "other-en" }, { ...englishContext, translationId: "other" }]) {
      assert.equal(blocksAllowedForProduction(compactSpecimen, context), false, "Block permission escaped its exact page identity");
    }
    editorialProseBlocks.list.status = "deprecated";
    assert.equal(blocksAllowedForProduction(compactSpecimen, englishContext), false);
    assert.equal(serviceSchema.safeParse(withList).success, false);
    assert.equal(workshopSchema.safeParse(gallery).success, false);
  } finally {
    trial.blocks = savedBlocks;
    editorialProseBlocks.list.status = "experimental";
  }
  for (const content of [
    { title: "A meaningful heading", blocks: [{ type: "prose", paragraphs: ["A useful explanation."] }] },
    { title: "A longer explanation", blocks: Array.from({ length: 15 }, () => ({ type: "prose", paragraphs: ["A distinct supported block."] })) },
    { title: "Reordered selection", blocks: [...compactSpecimen.content.blocks].reverse() },
  ]) assert.equal(proseSchema.safeParse(content).success, true, "Supported combinations and optional intros must remain flexible");
  for (const content of [
    { title: "", blocks: compactSpecimen.content.blocks },
    { title: "Unknown block", blocks: [{ type: "invented" }] },
    { title: "Empty list", blocks: [{ type: "list", ordered: false, items: [] }] },
    { title: "Blank item", blocks: [{ type: "list", ordered: true, items: [" "] }] },
    { title: "Fake approval", blocks: [{ type: "list", ordered: false, items: ["Item"], status: "approved" }] },
  ]) assert.equal(proseSchema.safeParse(content).success, false, "Invalid/unknown blocks and content-supplied approval must fail");
  assert.throws(() => usedRecipeBlocks({ ...compactSpecimen, content: { blocks: [{ type: "__proto__" }] } }), /Unknown block/);
  for (const id of ["network-it-support-de", "microsoft-365-workplaces-de"]) {
    const service = serviceEntries.find(entry => entry.id === id);
    assert.ok(service?.composition?.experiment, `${id} needs its own German trial`);
    const context = { ...service, experiment: service.composition.experiment };
    for (const section of service.composition.sections) assert.equal(recipeAllowedForProduction(section.recipe, context), true);
    const changes = [
      ["borrowed English trial", s => { s.composition.experiment = id === "network-it-support-de" ? "business-network-en-preview" : "microsoft-365-en-preview"; }],
      ["wrong locale", s => { s.locale = "en"; }],
      ["duplicate ID", s => { s.composition.sections[1].id = s.composition.sections[0].id; }],
      ["missing enquiry", s => { s.composition.sections = s.composition.sections.filter(x => x.kind !== "contact"); }],
      ["wrong contact target", s => { s.composition.sections.find(x => x.kind === "contact").id = "contact"; }],
      ["broken chapter", s => { s.composition.sections.find(x => x.recipe === "scope.chapter-links").content.items[0].target = "missing"; }],
      ["unapproved block", s => { s.composition.sections.find(x => x.recipe === "explanation.editorial-prose").content.blocks.push({ type: "list", ordered: false, items: ["Not authorised"] }); }],
    ];
    for (const [name, change] of changes) { const candidate = structuredClone(service); change(candidate); assert.equal(serviceSchema.safeParse(candidate).success, false, `${id} accepted ${name}`); }
    const output = await fs.readFile(path.join(root, "dist/leistungen/unternehmen", service.slug, "index.html"), "utf8");
    assert.equal((output.match(/<h1[ >]/g) ?? []).length, 1);
    assert.equal((output.match(/<form\b/g) ?? []).length, 1);
    assert.ok(output.includes('data-delivery="email"'));
    assert.doesNotMatch(output, /data-lab-recipe|data-lab-block|lab-capture-|Preferred contact|Prepare email draft/);
    const ids = [...output.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
    assert.equal(new Set(ids).size, ids.length);
    for (const match of output.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(match[1]));
    const experimental = service.composition.sections.find(x => sectionRecipes[x.recipe].status === "experimental");
    assert.equal(recipeAllowedForProduction(experimental.recipe, { ...context, locale: "en" }), false);
  }
  console.log("Validated both German business trials: exact permissions, 7 invalid compositions each, unique anchors and one localised truthful enquiry.");
  console.log(`Validated flexible journeys, shell-contact placements, independent block lifecycle and exact block permissions.`);
  console.log(`Validated private gallery: ${gallery.sections.length} specimens / ${new Set(gallery.sections.map(s => s.recipe)).size} recipes, ${galleryInvalid.length} invalid arrangements, unregistered proposal policy and independent examples.`);
  console.log(`Validated English test: ${englishTestInvalid.length} invalid compositions, route-bound schema/runtime policy, email-draft encoding.`);
  console.log(`Validated ${serviceEntries.length} service records, ${productionInvalid.length + 4} invalid production cases and combined derived usage.`);
  console.log(`Validated ${fixtures.length} Workshop fixtures, ${invalid.length * closingFixtures.length + editorialInvalid.length} invalid-content cases, ${invalidGuidanceCases} invalid approved-guidance cases, experimental guidance migration/promotion, replacement relationships, lifecycle/compatibility policy and distinct-page usage.`);
} finally {
  await fs.rm(temporary, { recursive: true, force: true });
}
