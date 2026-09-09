import type { WorkshopFixture } from "../design-system/workshop-schema";
import type { RecipeId } from "../design-system/section-recipes";

export const workshopPath = (id: string) => `/design-lab/workshop/${id}/`;
export const workshopPreviewPath = (id: string) => `/design-lab/preview/${id}/`;

// Count distinct fixture pages, not occurrences or duplicate preview routes.
// Production has not adopted recipes and is not connected as a usage source yet.
export function getWorkshopUsage(pages: WorkshopFixture[], recipeId: RecipeId) {
  return pages.filter(page => page.sections.some(section => section.recipe === recipeId))
    .map(({ page }) => ({ id: page.id, title: page.title, audience: page.audience, path: workshopPath(page.id) }));
}
