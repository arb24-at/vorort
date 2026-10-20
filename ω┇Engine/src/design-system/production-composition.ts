import { z } from "astro/zod";
import { getSectionRecipe, recipeAllowedIn, recipeSectionSchema, type Audience, type RecipeSection } from "./section-recipes";

const text = z.string().trim().min(1);
export const relatedServicesSchema = z.object({
  eyebrow: text, title: text, linkLabel: text,
  serviceIds: z.array(z.string().regex(/^[a-z0-9-]+$/)).min(2),
}).strict();
export const productionCompositionSchema = z.object({
  sections: z.array(recipeSectionSchema).min(2),
  related: relatedServicesSchema,
  contact: getSectionRecipe("contact.enquiry").schema,
  // Optional semantic placement of the existing email-preparation shell.
  // Absence preserves the closing enquiry on existing pages.
  contactAfter: z.string().regex(/^[a-z][a-z0-9-]*$/).optional(),
}).strict().superRefine((composition, context) => {
  if (composition.contactAfter && !composition.sections.some(section => section.id === composition.contactAfter)) {
    context.addIssue({ code: z.ZodIssueCode.custom, path: ["contactAfter"], message: "Contact placement must name an existing section" });
  }
});

// Production currently supplies its existing contact/footer as page chrome.
// Share recipe contracts, not the Workshop's English-only page-shell contract.
export function validateProductionSections(
  sections: RecipeSection[], audience: Audience, locale: "de" | "en",
  issue: (path: (string | number)[], message: string) => void,
) {
  const contactId = locale === "de" ? "kontakt" : "contact";
  const reserved = new Set(["main-content", "kontakt", "contact", "site-footer", "related-services"]);
  const ids = new Set<string>();
  sections.forEach((section, index) => {
    if (ids.has(section.id) || reserved.has(section.id)) issue([index, "id"], `Duplicate or reserved section ID: ${section.id}`);
    ids.add(section.id);
    const recipe = getSectionRecipe(section.recipe);
    if (!recipeAllowedIn(section.recipe, "production")) issue([index, "recipe"], "Production requires an approved recipe");
    if (!recipe.audiences.includes(audience) || !recipe.pageTypes.includes("service")) issue([index, "recipe"], "Recipe does not support this audience or page type");
    if (section.kind === "contact" || section.kind === "footer") issue([index, "recipe"], "Contact and footer are supplied by the production page shell");
  });
  if (sections[0]?.kind !== "hero" || sections.filter(section => section.kind === "hero").length !== 1) {
    issue([], "A production service composition requires exactly one opening hero");
  }
  sections.forEach((section, index) => {
    if (section.recipe === "hero.editorial-art") {
      section.content.actions.forEach((action, actionIndex) => {
        if (!ids.has(action.target) && action.target !== contactId) issue([index, "content", "actions", actionIndex, "target"], `Missing section target: ${action.target}`);
      });
    }
    if (section.recipe === "scope.topic-index") {
      const targets = new Set<string>();
      section.content.items.forEach((item, itemIndex) => {
        const path = [index, "content", "items", itemIndex, "target"];
        if (!sections.some(target => target.id === item.target && target.kind === "explanation")) issue(path, "A topic must link to an explanation chapter");
        if (targets.has(item.target)) issue(path, `Duplicate topic target: ${item.target}`);
        targets.add(item.target);
      });
    }
  });
}
