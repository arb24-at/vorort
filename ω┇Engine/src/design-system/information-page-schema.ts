import { z } from "astro/zod";
import { getSectionRecipe, usedRecipeBlocks } from "./section-recipes";

const text = z.string().trim().min(1);
const referenceHref = z.string().refine(value => {
  if (/^\/(?!\/)[^\s]*$/.test(value)) return true;
  try { const url = new URL(value); return url.protocol === "https:" && Boolean(url.hostname) && !url.username && !url.password && /^https:\/\/[^/]/.test(value); } catch { return false; }
}, "Use a valid HTTPS URL or an internal path");
const anchor = z.string().regex(/^[a-z][a-z0-9-]*$/, "Use a lowercase semantic section ID");
export const informationKinds = ["trust", "legal-notice", "privacy"] as const;
export type InformationKind = typeof informationKinds[number];
export type InformationLocale = "en" | "de";

// Use the canonical palette and lifecycle; this page family grants no trials.
export const informationSectionSchema = z.object({
  id: anchor,
  kind: z.literal("explanation"),
  recipe: z.literal("explanation.editorial-prose"),
  content: getSectionRecipe("explanation.editorial-prose").schema,
}).strict();

export const informationPageSchema = z.object({
  id: z.string().regex(/^(trust|legal-notice|privacy)-(en|de)$/),
  kind: z.enum(informationKinds),
  locale: z.enum(["en", "de"]),
  publication: z.enum(["working", "draft"]),
  seo: z.object({ title: text.min(15).max(70), description: text.min(70).max(180) }).strict(),
  header: z.object({ eyebrow: text, title: text, intro: text }).strict(),
  sections: z.array(informationSectionSchema).min(1),
  draftNotice: z.object({ title: text, body: text }).strict().optional(),
  missingFacts: z.array(text).min(1).optional(),
  references: z.array(z.object({ label: text, href: referenceHref }).strict()).min(1).optional(),
  nextStep: z.object({ title: text, body: text, linkLabel: text }).strict().optional(),
}).strict().superRefine((page, context) => {
  const issue = (path: (string | number)[], message: string) => context.addIssue({ code: z.ZodIssueCode.custom, path, message });
  if (page.id !== `${page.kind}-${page.locale}`) issue(["id"], "Information page identity, kind and locale must agree");
  if (page.publication === "draft" && !page.missingFacts?.length) issue(["missingFacts"], "A draft must identify its outstanding facts");

  if (page.publication === "working" && page.missingFacts?.length) issue(["publication"], "Outstanding facts require visible draft status");
  const occupied = new Set(["main-content", "site-header", "site-footer", "mobile-menu", "mobile-toggle", "mobile-menu-backdrop", "contact", "kontakt", "information-title", "information-contents", "information-status", "information-next-step", "information-next-title", "information-missing-facts", "information-references"]);
  for (const [index, section] of page.sections.entries()) {
    const recipe = getSectionRecipe(section.recipe);
    if (recipe.status !== "approved" || !recipe.pageTypes.includes("information") || !recipe.audiences.includes("general")) issue(["sections", index, "recipe"], "Information pages require an Approved recipe compatible with information/general");
    if (usedRecipeBlocks(section).some(block => block.status !== "approved")) issue(["sections", index, "content", "blocks"], "Information pages allow only Approved blocks; parent approval grants no block trial");
    const renderedIds = [section.id, `${section.id}-title`, ...section.content.blocks.flatMap((block, blockIndex) => block.type === "table" && block.title ? [`${section.id}-table-${blockIndex}`] : [])];
    for (const id of renderedIds) {
      if (occupied.has(id)) issue(["sections", index, "id"], `Duplicate or reserved rendered ID: ${id}`);
      occupied.add(id);
    }
  }
});
export type InformationPage = z.infer<typeof informationPageSchema>;

const paths: Record<InformationKind, Record<InformationLocale, string>> = {
  trust: { en: "en/how-we-work/", de: "datensicherheit-zertifizierungen/" },
  "legal-notice": { en: "en/legal-notice/", de: "impressum/" },
  privacy: { en: "en/privacy/", de: "datenschutz/" },
};
export function informationPath(kind: InformationKind, locale: InformationLocale): string {
  return paths[kind][locale];
}
