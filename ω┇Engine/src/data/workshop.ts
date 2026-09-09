import { getCollection } from "astro:content";
import type { WorkshopFixture } from "../design-system/workshop-schema";
export { getWorkshopUsage, workshopPath, workshopPreviewPath } from "./workshop-usage";

export async function getWorkshopPages(): Promise<WorkshopFixture[]> {
  const entries = await getCollection("workshop");
  const ids = new Set<string>();
  for (const { id, data } of entries) {
    if (id.replace(/\.ya?ml$/, "") !== data.page.id) throw new Error(`Workshop filename ${id} must match page.id ${data.page.id}`);
    if (ids.has(data.page.id)) throw new Error(`Duplicate Workshop page ID: ${data.page.id}`);
    ids.add(data.page.id);
  }
  if (!entries.length) throw new Error("Page Workshop requires at least one validated page fixture");
  return entries.map(entry => entry.data).sort((a, b) =>
    a.page.audience === b.page.audience ? a.page.title.localeCompare(b.page.title) : a.page.audience === "private" ? -1 : 1
  );
}
