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
const suppliedMedia = labelledMedia.extend({ src: media.shape.src.unwrap() });
const paragraphs = z.array(text).min(1);
const editorialHeading = { eyebrow: text, title: text, paragraphs };
const sectionAction = z.object({ label: text, target: anchor }).strict();

// Human authoring guidance lives beside the machine-enforced content schema.
// Density recommendations are advisory, not additional content constraints.
const authoringGuidanceSchema = z.object({
  contentShape: text,
  typicalRange: text,
  fixed: text,
  flexible: text,
  needsDesignReview: text,
  media: text,
  responsive: text,
  accessibility: text,
}).strict();
export type AuthoringGuidance = z.infer<typeof authoringGuidanceSchema>;

function recipe<S extends z.ZodTypeAny>(definition: {
  name: string;
  kind: string;
  purpose: string;
  recommendedPlacement: string;
  recommendedUse: string;
  renderer: string;
  schema: S;
  status?: RecipeStatus;
  supersedes?: string;
  authoringGuidance?: Partial<AuthoringGuidance>;
}) {
  return {
    ...definition,
    status: definition.status ?? "experimental",
    supersedes: definition.supersedes ?? null,
    pageTypes: ["service"] as readonly PageType[],
    audiences: ["private", "business"] as readonly Audience[],
  };
}

// The single recipe contract: validation, renderer lookup and approval/impact views
// all consume these records. A breaking content contract gets a new semantic ID.
export const sectionRecipes = {
  "hero.editorial-art": recipe({
    name: "Editorial introduction with environmental artwork", kind: "hero",
    purpose: "Give a substantial service introduction and artwork their own readable space.",
    recommendedPlacement: "Opening / first section",
    recommendedUse: "Introduce a service with a strong heading, readable explanation and a broad environmental image, without text covering the scene.",
    renderer: "EditorialHero.astro",
    supersedes: "hero.banner-art",
    schema: z.object({ ...heading, media: suppliedMedia, actions: z.array(sectionAction).length(2) }).strict(),
  }),
  "scope.topic-index": recipe({
    name: "Illustrated topic index", kind: "scope",
    purpose: "Help visitors choose a topic and jump directly to its full explanation.",
    recommendedPlacement: "Immediately after the service introduction",
    recommendedUse: "Orient readers on a substantial service page with a prominent lead topic and supporting illustrated chapter links.",
    renderer: "TopicIndex.astro",
    supersedes: "scope.art-panels",
    schema: z.object({ ...heading, items: z.array(z.object({ title: text, body: text, target: anchor, media: suppliedMedia }).strict()).min(2).max(6) }).strict(),
  }),
  "explanation.options-guide": recipe({
    name: "Editorial explanation and options guide", kind: "explanation",
    purpose: "Explain a customer problem and compare practical approaches using consistent criteria.",
    recommendedPlacement: "Early-to-middle page, within a service topic",
    recommendedUse: "Help a reader understand alternatives without implying one product or approach is always the best choice.",
    renderer: "OptionsGuide.astro",
    schema: z.object({ ...editorialHeading, media: suppliedMedia, caption: text,
      comparisonTitle: text, fitLabel: text, considerationLabel: text,
      options: z.array(z.object({ title: text, fit: text, consideration: text }).strict()).min(2).max(4),
      note: item.optional(),
    }).strict(),
  }),
  "explanation.connection-path": recipe({
    name: "Explanation with a connection path", kind: "explanation",
    purpose: "Make the relationship between a source, a physical route and its destinations understandable.",
    recommendedPlacement: "Within a topic about infrastructure or connected systems",
    recommendedUse: "Explain one shared connection route branching to several destinations; labels remain real text when the diagram recomposes on mobile.",
    renderer: "ConnectionPath.astro",
    schema: z.object({ ...editorialHeading, diagramTitle: text, caption: text,
      source: item, route: item, destinations: z.array(item).min(2).max(4), note: item.optional(),
    }).strict(),
  }),
  "explanation.editorial-media": recipe({
    name: "Editorial chapter with supporting media", kind: "explanation",
    purpose: "Develop a service topic through substantial prose, a relevant illustration and optional practical context.",
    recommendedPlacement: "Middle page / service topic chapters",
    recommendedUse: "Give one subject room to be explained; consecutive chapters alternate their media relationship while keeping a consistent reading order.",
    renderer: "EditorialMedia.astro",
    schema: z.object({ ...editorialHeading, media: suppliedMedia, caption: text, note: item.optional() }).strict(),
  }),
  "hero.banner-art": recipe({
    name: "Banner with environmental artwork", kind: "hero",
    purpose: "Introduce a service and its environment with clear next actions.",
    recommendedPlacement: "Opening / first section",
    recommendedUse: "Introduce the service, establish its real-world context, and present the primary next actions.",
    renderer: "HeroBanner.astro",
    schema: z.object({ ...heading, media: labelledMedia,
      actions: z.array(z.object({ label: text, target: anchor }).strict()).length(2),
      highlights: z.array(text).min(1).max(4),
    }).strict(),
  }),
  "scope.art-panels": recipe({
    name: "Service scope artwork panels", kind: "scope",
    purpose: "Show the service territories before detailed explanation.",
    recommendedPlacement: "Early page, usually after the hero",
    recommendedUse: "Make several distinct service territories understandable at a glance before deeper explanation.",
    renderer: "ScopeArtPanels.astro",
    schema: z.object({ ...heading, items: z.array(z.object({ title: text, media }).strict()).length(5) }).strict(),
  }),
  "explanation.art-gallery": recipe({
    name: "Environmental explanation gallery", kind: "explanation",
    purpose: "Explain connected service areas through one lead panel and supporting panels.",
    recommendedPlacement: "Early-to-middle page",
    recommendedUse: "Develop one primary idea with two supporting ideas when visual context helps explain how service areas relate.",
    renderer: "ArtGallery.astro",
    schema: z.object({ ...heading, items: z.array(item.extend({ eyebrow: text, media })).length(3) }).strict(),
  }),
  "recognition.situations": recipe({
    name: "Recognisable situations", kind: "recognition",
    purpose: "Connect customer situations or project triggers to the service.",
    recommendedPlacement: "Early-to-middle page",
    recommendedUse: "Help visitors recognise concrete situations, symptoms, or project triggers that make the service relevant.",
    renderer: "Situations.astro",
    schema: z.object({ ...heading, items: z.array(item).min(2).max(6) }).strict(),
  }),
  "process.staged-path": recipe({
    name: "Staged working path", kind: "process",
    purpose: "Explain the four stages from assessment to handover.",
    recommendedPlacement: "Middle page",
    recommendedUse: "Explain a four-stage working method or customer journey where sequence and handover matter.",
    renderer: "StagedPath.astro",
    status: "approved",
    authoringGuidance: {
      contentShape: "Eyebrow, title and intro, followed by exactly four stages, each with a title and body.",
      typicalRange: "A short introduction and four concise stage explanations, usually a short heading and a short paragraph per stage.",
      fixed: "Exactly four sequential stages in their reading order, with visible stage numbers and real-text titles and explanations.",
      flexible: "Eyebrow, title, intro and each stage's wording and level of detail may vary to suit the service and audience.",
      needsDesignReview: "Use Design review when the relationship is not sequential, needs branching or loops, or genuinely needs a different number of stages.",
      media: "No media is required; the sequence and its labels are conveyed through real text.",
      responsive: "The four-column sequence may reflow to two columns and then one. Preserve stage order and readable labels at every width.",
      accessibility: "Keep the section heading and stage headings in a meaningful hierarchy. Preserve the same sequence in source and visual reading order; real-text numbers, titles and explanations must convey it without relying on colour or connecting lines.",
    },
    schema: z.object({ ...heading, steps: z.array(item).length(4) }).strict(),
  }),
  "outcome.scope-proof": recipe({
    name: "Outcome, scope and working boundaries", kind: "outcome",
    purpose: "Connect a useful outcome with included work, boundaries and verified experience.",
    recommendedPlacement: "Middle-to-late page",
    recommendedUse: "Set expectations by connecting the intended outcome with included work, working boundaries, and credible proof.",
    renderer: "ScopeProof.astro",
    schema: z.object({ eyebrow: text, title: text, body: text, media: labelledMedia,
      includedHeading: text, included: z.array(text).min(1),
      boundariesHeading: text, boundaries: z.array(text).min(1),
    }).strict(),
  }),
  "faq.accordion": recipe({
    name: "Expandable questions", kind: "faq",
    purpose: "Answer independent service questions without hiding the rest of the page.",
    recommendedPlacement: "Late page, after the core service explanation",
    recommendedUse: "Resolve independent practical questions that remain after the page has established scope, process, and boundaries.",
    renderer: "FaqAccordion.astro",
    status: "approved",
    authoringGuidance: {
      contentShape: "Eyebrow and title, followed by one or more question-and-answer items; each answer is plain paragraph text.",
      typicalRange: "Several focused questions with short paragraph answers are the normal range; avoid article-length answers. This is guidance, not a fixed question count or word limit.",
      fixed: "Native, independent details/summary disclosure items: each question opens its own answer and multiple answers may remain open.",
      flexible: "Eyebrow, title, question count, order and wording, and answer depth may vary within the simple question-and-answer shape.",
      needsDesignReview: "Use Design review for complex nested answer structure, rich media, tables, categories, or a relationship other than independent questions and answers.",
      media: "No media is required; questions and answers are real text. Rich media needs Design review.",
      responsive: "The side-by-side heading and question list stack on narrow screens. Allow questions and answers to wrap naturally, retaining disclosure order and readable text without clipping.",
      accessibility: "Use meaningful real-text questions as native summary labels. Preserve keyboard activation, visible focus and native expanded/collapsed semantics; each disclosure remains independently operable without JavaScript.",
    },
    schema: z.object({ eyebrow: text, title: text, items: z.array(z.object({ question: text, answer: text }).strict()).min(1) }).strict(),
  }),
  "contact.enquiry": recipe({
    name: "Service enquiry", kind: "contact",
    purpose: "Use the existing centrally maintained contact channels and enquiry form.",
    recommendedPlacement: "Closing section",
    recommendedUse: "Close the page with the shared enquiry paths once the visitor has enough context to act.",
    renderer: "ContactEnquiry.astro",
    schema: z.object({
      title: text.optional(), intro: text.optional(), formIntro: text.optional(),
      affectedPlaceholder: text.optional(), request: text.optional(), requestPlaceholder: text.optional(),
    }).strict(),
  }),
};

export type RecipeId = keyof typeof sectionRecipes;

export function validateRecipeRegistry() {
  for (const [id, recipe] of Object.entries(sectionRecipes)) {
    if (!recipe.recommendedPlacement.trim()) throw new Error(`Section recipe ${id} needs recommended placement guidance`);
    if (!recipe.recommendedUse.trim()) throw new Error(`Section recipe ${id} needs recommended use guidance`);
    if (recipe.status === "approved") {
      const guidance = authoringGuidanceSchema.safeParse(recipe.authoringGuidance);
      if (!guidance.success) {
        const fields = guidance.error.issues.map(issue => issue.path.join(".") || "authoringGuidance");
        throw new Error(`Approved section recipe ${id} needs complete authoring guidance: ${fields.join(", ")}`);
      }
    }
    if (recipe.supersedes === id) throw new Error(`Section recipe ${id} cannot supersede itself`);
    if (recipe.supersedes && !Object.hasOwn(sectionRecipes, recipe.supersedes)) {
      throw new Error(`Section recipe ${id} supersedes unknown recipe: ${recipe.supersedes}`);
    }
    if (recipe.supersedes) {
      const predecessor = sectionRecipes[recipe.supersedes as RecipeId];
      if (predecessor.kind !== recipe.kind) {
        throw new Error(`Section recipe ${id} may only supersede a recipe of the same kind: ${recipe.supersedes}`);
      }
    }
  }
  // Check each local relationship before walking chains so an invalid ancestor
  // reports its own error regardless of registry insertion order.
  for (const [id, recipe] of Object.entries(sectionRecipes)) {
    const seen = new Set<string>([id]);
    let predecessor = recipe.supersedes;
    while (predecessor) {
      if (!Object.hasOwn(sectionRecipes, predecessor)) {
        throw new Error(`Section recipe ${id} supersedes unknown recipe: ${predecessor}`);
      }
      if (seen.has(predecessor)) throw new Error(`Section recipe supersedes cycle detected from ${id}`);
      seen.add(predecessor);
      predecessor = sectionRecipes[predecessor as RecipeId].supersedes;
    }
  }
}

validateRecipeRegistry();

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
