import { getCollection } from "astro:content";
export const homePath = (locale: "en" | "de") => locale === "en" ? "en/" : "";
export async function getHomePages() { return (await getCollection("homePages")).map(entry => entry.data); }
export async function getHomePage(locale: "en" | "de") {
  const page = (await getHomePages()).find(page => page.locale === locale);
  if (!page) throw new Error(`Missing homepage ${locale}`);
  return page;
}
