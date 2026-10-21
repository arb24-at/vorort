import { z } from "astro/zod";
import { getSectionRecipe, recipeSectionSchema, type RecipeSection } from "./section-recipes";
import { isEnglishHomeNetworkTest, isEnglishComputerSupportPreview, recipeAllowedForProduction, type ProductionRecipeContext } from "./production-policy";

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
  z.object({ ...common, contact: getSectionRecipe("contact.enquiry").schema }).strict(),
  z.object({ ...common, experiment: z.enum(["wifi-home-network-en-test", "computer-laptop-en-preview"]), relatedBefore: anchor }).strict(),
]);

export function validateProductionSections(
  sections: RecipeSection[], context: ProductionRecipeContext,
  issue: (path: (string | number)[], message: string) => void,
) {
  const homeNetworkTest = isEnglishHomeNetworkTest(context);
  const computerSupportPreview = isEnglishComputerSupportPreview(context);
  const testing = homeNetworkTest || computerSupportPreview;
  if (context.experiment && !testing) issue([], "Experimental composition authorisation must match its exact service identity, locale, audience and slug");
  const contactId = context.locale === "de" ? "kontakt" : "contact";
  const reserved = new Set(["main-content", "kontakt", "contact", "site-footer", "related-services"]);
  const ids = new Set<string>();
  sections.forEach((section, index) => {
    const ownEnquiry = testing && section.kind === "contact" && section.id === "contact";
    if (ids.has(section.id) || (reserved.has(section.id) && !ownEnquiry)) issue([index, "id"], `Duplicate or reserved section ID: ${section.id}`);
    ids.add(section.id);
    const recipe = getSectionRecipe(section.recipe);
    if (!recipeAllowedForProduction(section.recipe, context)) issue([index, "recipe"], "Production requires an approved recipe or the exact authorised English test exception");
    if (!recipe.audiences.includes(context.audience) || !recipe.pageTypes.includes("service")) issue([index, "recipe"], "Recipe does not support this audience or page type");
    if (section.kind === "footer" || (section.kind === "contact" && !ownEnquiry)) issue([index, "recipe"], "Contact and footer are supplied by the production shell outside the authorised English test");
  });
  if (sections[0]?.kind !== "hero" || sections.filter(section => section.kind === "hero").length !== 1) issue([], "A production service composition requires exactly one opening hero");
  if (testing) {
    const enquiries = sections.filter(section => section.kind === "contact");
    if (enquiries.length !== 1 || enquiries[0]?.recipe !== "contact.enquiry-email") issue([], "The English test requires exactly one truthful email-draft enquiry");
    const contactIndex = sections.findIndex(section => section.kind === "contact");
    const before = sections.slice(1, contactIndex);
    if (contactIndex < 4 || !before.some(s => s.recipe === "recognition.situations" && s.content.items.length >= 4)
      || !before.some(s => s.id === "practical-help" && s.recipe === "explanation.editorial-prose")
      || !before.some(s => s.recipe === "cta.quick-contact")) issue([], "Meaningful recognition, practical help and a quick CTA must precede the enquiry");
    if (sections.filter(s => s.recipe === "cta.quick-contact").length !== 2 || sections.at(-1)?.recipe !== "cta.quick-contact") issue([], "The English test requires an early and closing quick-contact invitation");
    const indexRecipe = homeNetworkTest ? "scope.topic-index" : "scope.chapter-links";
    if (sections.findIndex(s => s.recipe === indexRecipe) <= contactIndex) issue([], "Chapter navigation must continue the page after the enquiry");
  }
  sections.forEach((section, index) => {
    if (section.recipe === "hero.editorial-art" || section.recipe === "hero.service-intro") section.content.actions.forEach((action, actionIndex) => {
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
