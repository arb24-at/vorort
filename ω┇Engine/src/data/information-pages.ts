import { getCollection } from "astro:content";
import { type InformationKind, type InformationLocale, informationPath } from "../design-system/information-page-schema";

export { informationPath };
export async function getInformationPages() {
  return (await getCollection("informationPages")).map(entry => entry.data);
}
export async function getInformationPage(kind: InformationKind, locale: InformationLocale) {
  const page = (await getInformationPages()).find(page => page.kind === kind && page.locale === locale);
  if (!page) throw new Error(`Missing information page ${kind}/${locale}`);
  return page;
}
