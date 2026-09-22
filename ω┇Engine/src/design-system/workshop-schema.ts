import { z } from "astro/zod";
import { getSectionRecipe, recipeAllowedIn, recipeSectionSchema } from "./section-recipes";

export const workshopSchema = z.object({
  page: z.object({
    id: z.string().regex(/^[a-z][a-z0-9-]*$/),
    // Only the independently authored English Concept II content is supported yet.
    locale: z.literal("en"),
    audience: z.enum(["private", "business"]),
    pageType: z.literal("service"),
    title: z.string().trim().min(1),
  }).strict(),
  sections: z.array(recipeSectionSchema).min(2),
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
  });
  if (fixture.sections[0]?.kind !== "hero" || fixture.sections.filter(s => s.kind === "hero").length !== 1) {
    issue(["sections"], "A Workshop service page requires exactly one opening hero");
  }
  if (fixture.sections.at(-1)?.kind !== "contact" || fixture.sections.filter(s => s.kind === "contact").length !== 1) {
    issue(["sections"], "A Workshop service page requires exactly one closing contact section");
  }
  fixture.sections.forEach((section, index) => {
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
