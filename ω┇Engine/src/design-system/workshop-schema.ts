import { z } from "astro/zod";
import { getSectionRecipe, recipeAllowedIn, recipeSectionSchema } from "./section-recipes";
import { relatedServicesSchema } from "./production-composition";

const pageSchema = z.object({
  id: z.string().regex(/^[a-z][a-z0-9-]*$/),
  // Workshop interfaces currently support independently authored English pages.
  locale: z.literal("en"),
  audience: z.enum(["private", "business"]),
  pageType: z.literal("service"),
  title: z.string().trim().min(1),
  enquiryPlacement: z.enum(["early", "closing"]).optional(),
}).strict();
const relatedShellSchema = relatedServicesSchema.extend({ before: z.string().regex(/^[a-z][a-z0-9-]*$/) });

export const workshopSchema = z.object({
  page: pageSchema,
  sections: z.array(recipeSectionSchema).min(2),
  relatedServices: relatedShellSchema.optional(),
}).strict().superRefine((fixture, context) => {
  const ids = new Set<string>();
  const issue = (path: (string | number)[], message: string) => context.addIssue({ code: z.ZodIssueCode.custom, path, message });
  fixture.sections.forEach((section, index) => {
    if (ids.has(section.id)) issue(["sections", index, "id"], `Duplicate section ID: ${section.id}`);
    ids.add(section.id);
    const recipe = getSectionRecipe(section.recipe);
    if (!recipeAllowedIn(section.recipe, "workshop")) issue(["sections", index, "recipe"], "Deprecated recipes cannot be selected for Workshop pages");
    if (!recipe.audiences.includes(fixture.page.audience) || !recipe.pageTypes.includes(fixture.page.pageType)) {
      issue(["sections", index, "recipe"], "Recipe does not support this audience or page type");
    }
    if (section.kind === "contact" && section.id !== "contact") issue(["sections", index, "id"], "The shared English enquiry section requires the contact ID");
    if (section.kind === "footer" && section.id !== "site-footer") issue(["sections", index, "id"], "The shared site footer requires the site-footer ID");
  });
  if (fixture.sections[0]?.kind !== "hero" || fixture.sections.filter(s => s.kind === "hero").length !== 1) {
    issue(["sections"], "A Workshop service page requires exactly one opening hero");
  }
  const contacts = fixture.sections.filter(s => s.kind === "contact");
  if (contacts.length !== 1) issue(["sections"], "A Workshop service page requires exactly one enquiry section");
  if (fixture.page.enquiryPlacement === "early") {
    const contactIndex = fixture.sections.findIndex(s => s.kind === "contact");
    const detailsIndex = fixture.sections.findIndex(s => s.kind === "scope" || s.kind === "explanation");
    if (contactIndex < 1 || detailsIndex <= contactIndex) issue(["sections"], "An early enquiry must follow the hero and precede the service detail");
  } else if (fixture.sections.at(-2)?.kind !== "contact") {
    issue(["sections"], "A closing enquiry must immediately precede the footer");
  }
  if (fixture.sections.at(-1)?.kind !== "footer" || fixture.sections.filter(s => s.kind === "footer").length !== 1) {
    issue(["sections"], "A Workshop service page requires exactly one final site footer section");
  }
  if (fixture.relatedServices) {
    if (ids.has("related-services")) issue(["relatedServices"], "Related services would duplicate a section ID");
    if (!ids.has(fixture.relatedServices.before)) issue(["relatedServices", "before"], "Missing related-services insertion target");
    ids.add("related-services");
  }
  fixture.sections.forEach((section, index) => {
    if (section.recipe === "cta.quick-contact" && !contacts.some(contact => contact.id === section.content.enquiryTarget)) {
      issue(["sections", index, "content", "enquiryTarget"], "Quick contact must target the single enquiry section");
    }
    if (section.recipe === "hero.banner-art" || section.recipe === "hero.editorial-art" || section.recipe === "comparison.hero-banner" || section.recipe === "comparison.hero-banner-cta-overlay") {
      const parsed = getSectionRecipe(section.recipe).schema.safeParse(section.content);
      if (!parsed.success) return; // Preserve the original section-path validation issues.
      parsed.data.actions.forEach((action, actionIndex) => {
        if (!ids.has(action.target)) issue(["sections", index, "content", "actions", actionIndex, "target"], `Missing section target: ${action.target}`);
      });
    }
    if (section.recipe === "scope.topic-index") {
      const parsed = getSectionRecipe("scope.topic-index").schema.safeParse(section.content);
      if (!parsed.success) return;
      const targets = new Set<string>();
      parsed.data.items.forEach((item, itemIndex) => {
        const path = ["sections", index, "content", "items", itemIndex, "target"];
        if (!ids.has(item.target)) issue(path, `Missing section target: ${item.target}`);
        if (item.target === section.id) issue(path, "A topic must link to its explanation, not the index itself");
        if (targets.has(item.target)) issue(path, `Duplicate topic target: ${item.target}`);
        targets.add(item.target);
      });
    }
  });
});

export type WorkshopFixture = z.infer<typeof workshopSchema>;

// A pilot can assemble production chapters and experimental instances without a
// second editable copy of the service text. Resolve first, then enforce the full
// Workshop contract (including lifecycle, unique IDs and actual anchor targets).
export const workshopSourceSchema = z.union([
  workshopSchema,
  z.object({
    page: pageSchema.extend({ sourceService: z.string().regex(/^[a-z0-9-]+-en$/) }),
    sections: z.array(z.union([recipeSectionSchema, z.object({ fromServiceSection: z.string().regex(/^[a-z][a-z0-9-]*$/) }).strict()])).min(2),
    relatedServicesBefore: z.string().regex(/^[a-z][a-z0-9-]*$/).optional(),
  }).strict(),
]);

type SourceService = {
  id: string; audience: string; locale: string;
  composition?: { sections: WorkshopFixture["sections"]; related: z.infer<typeof relatedServicesSchema> };
};
export function resolveWorkshopSource(input: unknown, services: SourceService[]): WorkshopFixture {
  const fixture = workshopSourceSchema.parse(input);
  if (!("sourceService" in fixture.page)) return workshopSchema.parse(fixture);
  const { sourceService, ...page } = fixture.page;
  const service = services.find(service => service.id === sourceService);
  if (!service?.composition || service.locale !== fixture.page.locale || service.audience !== fixture.page.audience) {
    throw new Error(`Missing or incompatible Workshop source service: ${fixture.page.sourceService}`);
  }
  const composition = service.composition;
  const sections = fixture.sections.map(section => {
    if (!("fromServiceSection" in section)) return section;
    const original = composition.sections.find(item => item.id === section.fromServiceSection);
    if (!original) throw new Error(`Missing source section: ${sourceService}/${section.fromServiceSection}`);
    return structuredClone(original);
  });
  return workshopSchema.parse({
    page, sections,
    ...("relatedServicesBefore" in fixture && fixture.relatedServicesBefore ? {
      relatedServices: { ...composition.related, before: fixture.relatedServicesBefore },
    } : {}),
  });
}
