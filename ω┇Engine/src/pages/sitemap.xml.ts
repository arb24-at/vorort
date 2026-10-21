import type { APIRoute } from "astro";
import { getInformationPages, informationPath } from "../data/information-pages";
import { getServicePath, getServices } from "../data/services";
import { withBase } from "../utils/withBase";

export const prerender = true;

const staticRoutes = [
  "",
  "leistungen/privatpersonen/",
  "leistungen/unternehmen/",
  "datensicherheit-zertifizierungen/",
  "impressum/",
  "datenschutz/",
  "en/",
  "en/services/private/",
  "en/services/business/"
];

const serviceRoutes = (
  await Promise.all([
    getServices("private", "de"),
    getServices("business", "de"),
    getServices("private", "en"),
    getServices("business", "en")
  ])
).flat().map(getServicePath);

const informationPages = await getInformationPages();
const informationRoutes = informationPages.filter(page => page.publication !== "draft").map(page => informationPath(page.kind, page.locale));
const governedRoutes = new Set(informationPages.map(page => informationPath(page.kind, page.locale)));

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL("https://www.berlin-tech-support.de");
  const urls = [...staticRoutes.filter(route => !governedRoutes.has(route)), ...serviceRoutes, ...informationRoutes]
    .map((path) => new URL(withBase(path), origin).toString())
    .map((url) => `  <url><loc>${url}</loc></url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } }
  );
};
