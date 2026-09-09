import { z } from "astro/zod";

export type RecipeStatus = "experimental" | "approved" | "deprecated";
export type Audience = "private" | "business";
export type PageType = "service";

const text = z.string().trim().min(1);
const anchor = z.string().regex(/^[a-z][a-z0-9-]*$/, "Use a lowercase semantic section ID");
const media = z.object({
  subject: z.enum(["private-hero", "business-hero", "wifi", "home-office", "storage-home", "cabling-home", "upgrade-home", "office-wifi", "office-cabling", "network-core", "storage-business", "secure-access"]),
  src: z.string().regex(/^\/images\/[a-zA-Z0-9/_-]+\.(png|jpg|jpeg|webp|svg)$/, "Use a site-relative /images/ asset path without a deployment base").optional(),
}).strict();
const labelledMedia = media.extend({ alt: text });
const heading = { eyebrow: text, title: text, intro: text };
const item = z.object({ title: text, body: text }).strict();

function recipe<S extends z.ZodTypeAny>(definition: {
  name: string;
  kind: string;
  purpose: string;
  renderer: string;
  schema: S;
  status?: RecipeStatus;
}) {
  return {
    ...definition,
    status: definition.status ?? "experimental",
    pageTypes: ["service"] as readonly PageType[],
    audiences: ["private", "business"] as readonly Audience[],
  };
}

// The single recipe contract: validation, renderer lookup and approval/impact views
// all consume these records. A breaking content contract gets a new semantic ID.
export const sectionRecipes = {
  "hero.banner-art": recipe({
    name: "Banner with environmental artwork", kind: "hero",
    purpose: "Introduce a service and its environment with clear next actions.",
    renderer: "HeroBanner.astro",
    schema: z.object({ ...heading, media: labelledMedia,
      actions: z.array(z.object({ label: text, target: anchor }).strict()).length(2),
      highlights: z.array(text).min(1).max(4),
    }).strict(),
  }),
  "scope.art-panels": recipe({
    name: "Service scope artwork panels", kind: "scope",
    purpose: "Show the service territories before detailed explanation.",
    renderer: "ScopeArtPanels.astro",
    schema: z.object({ ...heading, items: z.array(z.object({ title: text, media }).strict()).length(5) }).strict(),
  }),
  "explanation.art-gallery": recipe({
    name: "Environmental explanation gallery", kind: "explanation",
    purpose: "Explain connected service areas through one lead panel and supporting panels.",
    renderer: "ArtGallery.astro",
    schema: z.object({ ...heading, items: z.array(item.extend({ eyebrow: text, media })).length(3) }).strict(),
  }),
  "recognition.situations": recipe({
    name: "Recognisable situations", kind: "recognition",
    purpose: "Connect customer situations or project triggers to the service.",
    renderer: "Situations.astro",
    schema: z.object({ ...heading, items: z.array(item).min(2).max(6) }).strict(),
  }),
  "process.staged-path": recipe({
    name: "Staged working path", kind: "process",
    purpose: "Explain the four stages from assessment to handover.",
    renderer: "StagedPath.astro",
    schema: z.object({ ...heading, steps: z.array(item).length(4) }).strict(),
  }),
  "outcome.scope-proof": recipe({
    name: "Outcome, scope and working boundaries", kind: "outcome",
    purpose: "Connect a useful outcome with included work, boundaries and verified experience.",
    renderer: "ScopeProof.astro",
    schema: z.object({ eyebrow: text, title: text, body: text, media: labelledMedia,
      includedHeading: text, included: z.array(text).min(1),
      boundariesHeading: text, boundaries: z.array(text).min(1),
    }).strict(),
  }),
  "faq.accordion": recipe({
    name: "Expandable questions", kind: "faq",
    purpose: "Answer independent service questions without hiding the rest of the page.",
    renderer: "FaqAccordion.astro",
    schema: z.object({ eyebrow: text, title: text, items: z.array(z.object({ question: text, answer: text }).strict()).min(1) }).strict(),
  }),
  "contact.enquiry": recipe({
    name: "Service enquiry", kind: "contact",
    purpose: "Use the existing centrally maintained contact channels and enquiry form.",
    renderer: "ContactEnquiry.astro",
    schema: z.object({}).strict(),
  }),
};

export type RecipeId = keyof typeof sectionRecipes;
export type RecipeContent<K extends RecipeId> = z.infer<(typeof sectionRecipes)[K]["schema"]>;
export type RecipeSection = { [K in RecipeId]: {
  id: string; kind: string; recipe: K; content: RecipeContent<K>;
} }[RecipeId];

export function getSectionRecipe<K extends RecipeId>(id: K): (typeof sectionRecipes)[K];
export function getSectionRecipe(id: string): (typeof sectionRecipes)[RecipeId];
export function getSectionRecipe(id: string) {
  if (!Object.hasOwn(sectionRecipes, id)) throw new Error(`Unknown section recipe: ${id}`);
  return sectionRecipes[id as RecipeId];
}

export function recipesWithStatus(status: RecipeStatus) {
  return Object.entries(sectionRecipes).filter(([, recipe]) => recipe.status === status);
}

// Future production consumers use this policy, not a second recipe whitelist.
export function recipeAllowedIn(id: string, context: "workshop" | "production") {
  const recipe = getSectionRecipe(id);
  return context === "production" ? recipe.status === "approved" : recipe.status !== "deprecated";
}

const alternatives = Object.entries(sectionRecipes).map(([id, recipe]) => z.object({
  id: anchor, kind: z.literal(recipe.kind), recipe: z.literal(id), content: recipe.schema,
}).strict());

export const recipeSectionSchema = z.discriminatedUnion("recipe", alternatives as [typeof alternatives[number], typeof alternatives[number], ...typeof alternatives[number][]]);
