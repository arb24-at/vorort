import { shellRecipeIds } from "./site-shell";
import { getServicePath } from "./service-paths";
import type { WorkshopFixture } from "../design-system/workshop-schema";
import type { RecipeId } from "../design-system/section-recipes";

export const workshopPath = (id: string) => `/design-lab/workshop/${id}/`;
export const workshopPreviewPath = (id: string) => `/design-lab/preview/${id}/`;

// Count distinct fixture pages, not occurrences or duplicate preview routes.
export function getWorkshopUsage(pages: WorkshopFixture[], recipeId: RecipeId) {
  return pages.filter(page => page.sections.some(section => section.recipe === recipeId))
    .map(({ page }) => ({ id: page.id, title: page.title, audience: page.audience, path: workshopPath(page.id) }));
}

type ProductionConsumer = {
  id: string; hero: { title: string }; audience: "private" | "business";
  locale: "de" | "en"; slug: string;
  composition?: { sections: readonly { recipe: string }[] };
};

type AdditionalConsumer = { id: string; title: string; audience: "private" | "business" | "general"; locale: "de" | "en"; path: string; sections: readonly { recipe: string }[] };
export function getRecipeUsage(pages: WorkshopFixture[], services: ProductionConsumer[], recipeId: RecipeId, additional: AdditionalConsumer[] = []) {
  const workshop = getWorkshopUsage(pages, recipeId).map(page => ({ ...page, context: "Workshop" }));
  const suppliedByShell = shellRecipeIds.includes(recipeId);
  const production = services.filter(service => suppliedByShell || service.composition?.sections.some(section => section.recipe === recipeId))
    .map(service => ({
      id: service.id, title: service.hero.title, audience: service.audience,
      path: getServicePath(service),
      context: `Production · ${service.locale.toUpperCase()}`,
    }));
  const otherPages = additional.filter(page => suppliedByShell || page.sections.some(section => section.recipe === recipeId)).map(page => ({ id: page.id, title: page.title, audience: page.audience, path: page.path, context: `Production · ${page.locale.toUpperCase()}` }));
  return [...workshop, ...production, ...otherPages].filter((page, index, all) =>
    all.findIndex(other => other.context === page.context && other.path === page.path) === index);
}
