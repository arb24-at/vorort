import { getSectionRecipe, recipeAllowedIn, type Audience } from "./section-recipes";

export type ProductionRecipeContext = {
  id: string; translationId: string; slug: string;
  locale: "de" | "en"; audience: Audience; experiment?: string;
};

// Aykhan's local English test authorisation. This is not recipe approval, a
// general experimental context, or permission for another route to opt in.
export function isEnglishHomeNetworkTest(context?: ProductionRecipeContext) {
  return context?.experiment === "wifi-home-network-en-test"
    && context.id === "wifi-home-network-en"
    && context.translationId === "wifi-home-network"
    && context.slug === "wifi-home-network"
    && context.locale === "en" && context.audience === "private";
}

// Task 4B authorises these experiments for this service only. Registry lifecycle
// and the default production approval rule remain independent of page adoption.
export function isEnglishComputerSupportPreview(context?: ProductionRecipeContext) {
  return context?.experiment === "computer-laptop-en-preview"
    && context.id === "computer-laptop-en"
    && context.translationId === "computer-laptop"
    && context.slug === "computer-laptop-help"
    && context.locale === "en" && context.audience === "private";
}

export function recipeAllowedForProduction(id: string, context?: ProductionRecipeContext) {
  if (recipeAllowedIn(id, "production")) return true;
  if (getSectionRecipe(id).status !== "experimental") return false;
  if (isEnglishHomeNetworkTest(context)) return ["recognition.situations", "cta.quick-contact", "contact.enquiry-email"].includes(id);
  return isEnglishComputerSupportPreview(context)
    && ["hero.service-intro", "scope.chapter-links", "recognition.situations", "cta.quick-contact", "contact.enquiry-email"].includes(id);
}
