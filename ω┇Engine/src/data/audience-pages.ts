import { getCollection } from "astro:content";
import { validateAudienceReferences } from "../design-system/audience-page-schema";
import { getServices } from "./services";
export async function getAudiencePages() {
  const pages = (await getCollection("audiencePages")).map(entry => entry.data);
  for (const page of pages) {
    const services = await getServices(page.audience, page.locale);
    validateAudienceReferences(page, services);
  }
  return pages;
}
export async function getAudiencePage(audience: "private" | "business", locale: "en" | "de") {
  const page = (await getAudiencePages()).find(page => page.audience === audience && page.locale === locale);
  if (!page) throw new Error(`Missing audience page ${audience}/${locale}`);
  return page;
}
