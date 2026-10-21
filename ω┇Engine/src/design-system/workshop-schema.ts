import { z } from "astro/zod";
import { presentationVariants } from "./presentation";
import { getSectionRecipe, recipeAllowedIn, recipeSectionSchema, sectionRecipes, usedRecipeBlocks } from "./section-recipes";

const text = z.string().trim().min(1);
const anchor = z.string().regex(/^[a-z][a-z0-9-]*$/);
const pageSchema = z.object({
  id: anchor, locale: z.literal("en"), audience: z.enum(["private", "business"]),
  pageType: z.literal("service"), title: text,
}).strict();
const sections = z.array(recipeSectionSchema).min(2);
const base = z.object({ page: pageSchema, sections }).strict();
type PageSections = z.infer<typeof base>;
type Issue = (path: (string | number)[], message: string) => void;

function validateSections(fixture: PageSections, issue: Issue, specimens: boolean) {
  const ids = new Set<string>();
  fixture.sections.forEach((section, index) => {
    if (ids.has(section.id) || section.id === "main-content") issue(["sections", index, "id"], `Duplicate or reserved section ID: ${section.id}`);
    ids.add(section.id);
    const recipe = getSectionRecipe(section.recipe);
    if (usedRecipeBlocks(section).some(block => block.status === "deprecated")) issue(["sections", index, "content", "blocks"], "Deprecated blocks cannot be used even inside approved sections");
    if (!recipeAllowedIn(section.recipe, "workshop")) issue(["sections", index, "recipe"], "Deprecated recipes cannot be selected for Workshop pages");
    if (!recipe.audiences.includes(fixture.page.audience) || !recipe.pageTypes.includes(fixture.page.pageType)) issue(["sections", index, "recipe"], "Recipe does not support this audience or page type");
    if (!specimens && section.kind === "contact" && section.id !== "contact") issue(["sections", index, "id"], "The shared English enquiry requires the contact ID");
    if (section.kind === "footer" && section.id !== "site-footer") issue(["sections", index, "id"], "The shared site footer requires the site-footer ID");
  });
  fixture.sections.forEach((section, index) => {
    if (["hero.service-intro", "hero.banner-art", "hero.editorial-art", "comparison.hero-banner", "comparison.hero-banner-cta-overlay"].includes(section.recipe)) {
      const schema = section.recipe === "hero.service-intro" ? getSectionRecipe("hero.service-intro").schema
        : section.recipe === "hero.editorial-art" ? getSectionRecipe("hero.editorial-art").schema
        : getSectionRecipe("hero.banner-art").schema;
      const content = schema.safeParse(section.content);
      if (content.success) content.data.actions.forEach((action, i) => {
        if (!ids.has(action.target)) issue(["sections", index, "content", "actions", i, "target"], `Missing section target: ${action.target}`);
      });
    }
    if (section.recipe === "cta.quick-contact" && !fixture.sections.some(s => s.id === section.content.enquiryTarget && s.kind === "contact")) issue(["sections", index, "content", "enquiryTarget"], "Quick contact must target an enquiry specimen");
    if (section.recipe === "scope.topic-index" || section.recipe === "scope.chapter-links") {
      const targets = new Set<string>();
      section.content.items.forEach((item, i) => {
        if (!fixture.sections.some(s => s.id === item.target && s.kind === "explanation") || item.target === section.id || targets.has(item.target)) issue(["sections", index, "content", "items", i, "target"], "Topics require distinct existing explanation targets");
        targets.add(item.target);
      });
    }
  });
}

const journeyWorkshopSchema = base.superRefine((fixture, context) => {
  const issue: Issue = (path, message) => context.addIssue({ code: z.ZodIssueCode.custom, path, message });
  validateSections(fixture, issue, false);
  if (fixture.sections[0]?.kind !== "hero" || fixture.sections.filter(s => s.kind === "hero").length !== 1) issue(["sections"], "A Workshop service page requires exactly one opening hero");
  if (fixture.sections.at(-2)?.kind !== "contact" || fixture.sections.filter(s => s.kind === "contact").length !== 1) issue(["sections"], "A Workshop service page requires exactly one enquiry immediately before the footer");
  if (fixture.sections.at(-1)?.kind !== "footer" || fixture.sections.filter(s => s.kind === "footer").length !== 1) issue(["sections"], "A Workshop service page requires exactly one final site footer");
});

const specimenNotes = z.object({ context: text, description: text, presentation: z.enum(presentationVariants).optional() }).strict();
const proposal = z.object({
  id: z.string().regex(/^[a-z][a-z0-9-]*\.[a-z][a-z0-9-]*$/),
  title: text, rationale: text, contentShape: text, reviewQuestion: text,
}).strict();
export const specimenWorkshopSchema = z.object({
  page: pageSchema.extend({ audience: z.literal("private"), layout: z.literal("specimens") }),
  sections, specimenNotes: z.record(anchor, specimenNotes), proposals: z.array(proposal).min(1),
}).strict().superRefine((fixture, context) => {
  const issue: Issue = (path, message) => context.addIssue({ code: z.ZodIssueCode.custom, path, message });
  validateSections(fixture, issue, true);
  const ids = new Set(fixture.sections.map(s => s.id));
  fixture.sections.forEach((s, i) => {
    if (!fixture.specimenNotes[s.id]) issue(["sections", i, "id"], "Each specimen needs design context and a review description");
  });
  Object.keys(fixture.specimenNotes).forEach(id => {
    if (!ids.has(id)) issue(["specimenNotes", id], "Specimen notes must describe an actual section");
  });
  const proposalIds = new Set<string>();
  fixture.proposals.forEach((p, i) => {
    if (Object.hasOwn(sectionRecipes, p.id)) issue(["proposals", i, "id"], "Registered recipes belong among rendered specimens, not unimplemented proposals");
    const id = `proposal-${p.id.replaceAll(".", "-")}`;
    if (proposalIds.has(p.id) || ids.has(id)) issue(["proposals", i, "id"], "Proposal anchors must be unique");
    proposalIds.add(p.id);
  });
});

// Separate specimen contracts allow independent examples without relaxing the
// business journey's one-hero, closing-contact and final-footer requirements.
export const workshopSchema = z.union([journeyWorkshopSchema, specimenWorkshopSchema]);
export type WorkshopFixture = z.infer<typeof workshopSchema>;
export type SpecimenWorkshopFixture = z.infer<typeof specimenWorkshopSchema>;
export function isSpecimenWorkshop(fixture: WorkshopFixture): fixture is SpecimenWorkshopFixture {
  return "layout" in fixture.page && fixture.page.layout === "specimens";
}
