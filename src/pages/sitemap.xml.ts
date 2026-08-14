import type { APIRoute } from "astro";
import { getServicePath, getServices } from "../data/services";
import { withBase } from "../utils/withBase";

export const prerender = true;

const staticRoutes = [
  "",
  "leistungen/privatpersonen/",
  "leistungen/unternehmen/",
  "leistungen/reparatur-installation/",
  "datensicherheit-zertifizierungen/",
  "impressum/",
  "datenschutz/",
  "en/",
  "en/services/private/",
  "en/services/business/"
];

const serviceRoutes = [
  ...getServices("private", "de"),
  ...getServices("business", "de"),
  ...getServices("private", "en"),
  ...getServices("business", "en")
].map(getServicePath);

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL("https://www.berlin-tech-support.de");
  const urls = [...staticRoutes, ...serviceRoutes]
    .map((path) => new URL(withBase(path), origin).toString())
    .map((url) => `  <url><loc>${url}</loc></url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } }
  );
};
