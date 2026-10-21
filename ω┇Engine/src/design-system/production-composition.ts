import { z } from "astro/zod";
import { getSectionRecipe, recipeSectionSchema, type RecipeSection } from "./section-recipes";
import { productionTrial, blocksAllowedForProduction, recipeAllowedForProduction, type ProductionRecipeContext } from "./production-policy";

const text = z.string().trim().min(1);
const anchor = z.string().regex(/^[a-z][a-z0-9-]*$/);
export const relatedServicesSchema = z.object({
  eyebrow: text, title: text, linkLabel: text,
  serviceIds: z.array(z.string().regex(/^[a-z0-9-]+$/)).min(2),
}).strict();
const common = { sections: z.array(recipeSectionSchema).min(2), related: relatedServicesSchema };
// Default pages retain their shell-owned closing contact. Explicitly authorised
// English compositions own one recipe enquiry and a related-navigation position.
export const productionCompositionSchema = z.union([
  z.object({ ...common, contact: getSectionRecipe("contact.enquiry").schema, contactAfter: anchor.optional() }).strict(),
  z.object({ ...common, experiment: z.enum(["wifi-home-network-en-test", "computer-laptop-en-preview", "business-network-en-preview", "microsoft-365-en-preview", "microsoft-365-de-preview"]), relatedBefore: anchor }).strict(),
]);

export function validateProductionSections(
  sections: RecipeSection[], context: ProductionRecipeContext,
  issue: (path: (string | number)[], message: string) => void,
) {
  const testing = Boolean(productionTrial(context));
  if (context.experiment && !testing) issue([], "Experimental composition authorisation must match its exact service identity, locale, audience and slug");
  const contactId = context.locale === "de" ? "kontakt" : "contact";
  const reserved = new Set(["main-content", "kontakt", "contact", "site-footer", "related-services"]);
  const ids = new Set<string>();
  sections.forEach((section, index) => {
    const ownEnquiry = testing && section.kind === "contact" && section.id === contactId;
    if (ids.has(section.id) || (reserved.has(section.id) && !ownEnquiry)) issue([index, "id"], `Duplicate or reserved section ID: ${section.id}`);
    ids.add(section.id);
    const recipe = getSectionRecipe(section.recipe);
    if (!blocksAllowedForProduction(section, context)) issue([index, "content", "blocks"], "Every block requires approval or its own exact page permission; parent approval is insufficient");
    if (!recipeAllowedForProduction(section.recipe, context)) issue([index, "recipe"], "Production requires an approved recipe or the exact authorised page trial");
    if (!recipe.audiences.includes(context.audience) || !recipe.pageTypes.includes(context.pageType ?? "service")) issue([index, "recipe"], "Recipe does not support this audience or page type");
    if (section.kind === "footer" || (section.kind === "contact" && !ownEnquiry)) issue([index, "recipe"], "Contact and footer are supplied by the production shell outside an authorised page trial");
  });
  if (sections[0]?.kind !== "hero" || sections.filter(section => section.kind === "hero").length !== 1) issue([], "A production service composition requires exactly one opening hero");
  if (testing) {
    const enquiries = sections.filter(section => section.kind === "contact");
    if (enquiries.length !== 1 || enquiries[0]?.recipe !== "contact.enquiry-email") issue([], "An authorised trial requires exactly one truthful email-draft enquiry");
  }
  sections.forEach((section, index) => {
    if (section.kind === "hero" && "actions" in section.content) section.content.actions.forEach((action, actionIndex) => {
      if (!ids.has(action.target) && action.target !== contactId) issue([index, "content", "actions", actionIndex, "target"], `Missing section target: ${action.target}`);
    });
    if (section.recipe === "cta.quick-contact" && section.content.enquiryTarget !== contactId) issue([index, "content", "enquiryTarget"], "Quick contact must target the single enquiry");
    if (section.recipe === "scope.topic-index" || section.recipe === "scope.chapter-links") {
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
