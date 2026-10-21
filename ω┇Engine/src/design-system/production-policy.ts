import { getSectionRecipe, recipeAllowedIn, type Audience, type PageType, type RecipeSection, usedRecipeBlocks } from "./section-recipes";

export type ProductionRecipeContext = {
  id: string; translationId: string; slug: string;
  locale: "de" | "en"; audience: Audience; experiment?: string; pageType?: PageType;
};
type Trial = {
  id: string; translationId: string; slug: string; locale: "de" | "en"; audience: Audience;
  authorisation: string; recipes: readonly string[]; blocks: readonly string[]; pageType?: PageType;
};
// Exact page permissions, never lifecycle approval. These historical direct
// assignments remain valid; the new bilingual drafts do not claim approval.
// Add future trials only after recorded blueprint approval: cite its path,
// version and Aykhan's decision here, listing recipe and parent/block IDs.
const serviceExperiments = ["hero.service-intro", "scope.chapter-links", "recognition.situations", "cta.quick-contact", "contact.enquiry-email"];
export const productionTrials: Record<string, Trial> = {
  "business-landing-de-preview": {
    id: "business-landing-de", translationId: "business-landing", slug: "business", locale: "de", audience: "business", pageType: "audience",
    authorisation: "Aykhan’s six existing gateway/homepage assignment, Task 3I under the initial-update exception, 2026-10-21.",
    recipes: ["hero.service-intro", "scope.service-directory", "contact.enquiry-email", "cta.quick-contact"], blocks: [],
  },
  "business-landing-en-preview": {
    id: "business-landing-en", translationId: "business-landing", slug: "business", locale: "en", audience: "business", pageType: "audience",
    authorisation: "Aykhan’s six existing gateway/homepage assignment, Task 4I under the initial-update exception, 2026-10-21.",
    recipes: ["hero.service-intro", "scope.service-directory", "contact.enquiry-email", "cta.quick-contact"], blocks: [],
  },
  "private-landing-de-preview": {
    id: "private-landing-de", translationId: "private-landing", slug: "private", locale: "de", audience: "private", pageType: "audience",
    authorisation: "Aykhan’s six existing gateway/homepage assignment, Task 3E under the initial-update exception, 2026-10-21.",
    recipes: ["scope.service-directory", "contact.enquiry-email", "cta.quick-contact"], blocks: [],
  },
  "private-landing-en-preview": {
    id: "private-landing-en", translationId: "private-landing", slug: "private", locale: "en", audience: "private", pageType: "audience",
    authorisation: "Aykhan assigned six existing gateway/homepage updates, starting with Task 4E, during the initial-update blueprint exception, 2026-10-21.",
    recipes: ["scope.service-directory", "contact.enquiry-email", "cta.quick-contact"], blocks: [],
  },
  "wifi-home-network-en-test": {
    id: "wifi-home-network-en", translationId: "wifi-home-network", slug: "wifi-home-network", locale: "en", audience: "private",
    authorisation: "Aykhan's explicitly assigned English Home Network correction, v2.2.36; retained existing permission, not approval of blueprint v0.5.",
    recipes: ["recognition.situations", "cta.quick-contact", "contact.enquiry-email"], blocks: [],
  },
  "computer-laptop-en-preview": {
    id: "computer-laptop-en", translationId: "computer-laptop", slug: "computer-laptop-help", locale: "en", audience: "private",
    authorisation: "Aykhan's named Task 4B, v2.2.38.", recipes: serviceExperiments, blocks: [],
  },
  "business-network-en-preview": {
    id: "network-it-support-en", translationId: "network-it-support", slug: "network-it-support", locale: "en", audience: "business",
    authorisation: "Aykhan's named Task 4F, v2.2.39.", recipes: serviceExperiments, blocks: [],
  },
  "microsoft-365-en-preview": {
    id: "microsoft-365-workplaces-en", translationId: "microsoft-365-workplaces", slug: "microsoft-365-workplaces", locale: "en", audience: "business",
    authorisation: "Aykhan's named Task 4G, v2.2.40.", recipes: serviceExperiments, blocks: [],
  },
};
export function productionTrial(context?: ProductionRecipeContext) {
  if (!context?.experiment || !Object.hasOwn(productionTrials, context.experiment)) return undefined;
  const trial = productionTrials[context.experiment];
  return trial.id === context.id && trial.translationId === context.translationId && trial.slug === context.slug
    && trial.locale === context.locale && trial.audience === context.audience
    && (trial.pageType ?? "service") === (context.pageType ?? "service") ? trial : undefined;
}
export const isEnglishHomeNetworkTest = (c?: ProductionRecipeContext) => c?.experiment === "wifi-home-network-en-test" && Boolean(productionTrial(c));
export const isEnglishComputerSupportPreview = (c?: ProductionRecipeContext) => c?.experiment === "computer-laptop-en-preview" && Boolean(productionTrial(c));
export const isEnglishBusinessNetworkPreview = (c?: ProductionRecipeContext) => c?.experiment === "business-network-en-preview" && Boolean(productionTrial(c));
export const isEnglishMicrosoft365Preview = (c?: ProductionRecipeContext) => c?.experiment === "microsoft-365-en-preview" && Boolean(productionTrial(c));

export function recipeAllowedForProduction(id: string, context?: ProductionRecipeContext) {
  return recipeAllowedIn(id, "production") || (getSectionRecipe(id).status === "experimental" && Boolean(productionTrial(context)?.recipes.includes(id)));
}
export function blocksAllowedForProduction(section: RecipeSection, context?: ProductionRecipeContext) {
  return usedRecipeBlocks(section).every(block => block.status === "approved"
    || (block.status === "experimental" && Boolean(productionTrial(context)?.blocks.includes(block.id))));
}
