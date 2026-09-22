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
const editorialNote = z.object({
  title: text,
  body: text,
  tone: z.enum(["quiet", "solid"]).optional(),
}).strict();
const editorialProseBlock = z.discriminatedUnion("type", [
  z.object({ type: z.literal("prose"), paragraphs: z.array(text).min(1).max(4) }).strict(),
  z.object({ type: z.literal("subheading"), title: text, body: text.optional(), emphasis: z.enum(["plain", "band"]).optional() }).strict(),
  z.object({ type: z.literal("columns"), columns: z.array(z.object({ title: text.optional(), paragraphs: z.array(text).min(1).max(3) }).strict()).length(2) }).strict(),
  z.object({ type: z.literal("callout"), tone: z.enum(["quiet", "solid", "outline"]), title: text, body: text }).strict(),
  z.object({ type: z.literal("media"), media: suppliedMedia, placement: z.enum(["wide", "left", "right"]).optional() }).strict(),
  z.object({ type: z.literal("table"), title: text.optional(), columns: z.array(text).min(2).max(4), rows: z.array(z.array(text).min(2).max(4)).min(2).max(8) }).strict(),
]);

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
    recommendedUse: "Give one subject room to be explained; when several chapters use this recipe, their media relationship should vary rather than repeat the same side-by-side composition.",
    renderer: "EditorialMedia.astro",
    status: "approved",
    authoringGuidance: {
      contentShape: "Eyebrow, title, substantial prose, one supporting image and an optional callout. The image uses meaningful alt text but no visible caption line by default.",
      typicalRange: "Usually two to four paragraphs around one service topic, with one supporting image. Add a short callout only when it adds a boundary, practical note or useful emphasis rather than repeating the prose.",
      fixed: "One focused topic, one supporting image and a readable prose-first relationship remain the core of the recipe. The image is not a gallery and visible image captions are not part of the standard composition.",
      flexible: "Paragraph count and depth may vary. The callout may be omitted or use a quiet/transparent or solid emphasis treatment. When several editorial-media sections appear on one page, alternate left/right image placement by editorial-media occurrence to create rhythm; unrelated sections inserted earlier in the page must not flip that sequence. The renderer handles the variation rather than requiring authors to set layout classes.",
      needsDesignReview: "Use Design review when the topic needs multiple images, nested subheadings, two-column prose, a table, several callouts or another richer block structure; use the editorial-prose recipe rather than forcing those relationships into this one.",
      media: "Exactly one informative image is required with meaningful alt text. No visible caption is required or normally shown under the image.",
      responsive: "Desktop may alternate image/text sides across repeated uses. Narrow screens return to one reading order: heading, image, prose and optional callout without changing the semantic sequence.",
      accessibility: "Keep one meaningful section heading, normal paragraph flow and useful image alt text. Callouts must remain understandable without relying on fill colour alone.",
    },
    schema: z.object({ ...editorialHeading, media: suppliedMedia, note: editorialNote.optional() }).strict(),
  }),
  "explanation.editorial-prose": recipe({
    name: "Rich editorial prose", kind: "explanation",
    purpose: "Carry a large amount of explanatory content through varied but controlled editorial blocks without reducing it to cards or collapsible fragments.",
    recommendedPlacement: "Between more structured service sections, especially after a comparison, diagram or topic index",
    recommendedUse: "Use when a subject needs several paragraphs plus selective subheads, two-column passages, callouts, supporting images or a compact table while remaining one coherent article-like section.",
    renderer: "EditorialProse.astro",
    authoringGuidance: {
      contentShape: "Eyebrow, title and introduction followed by a sequence of semantic editorial blocks: prose, internal headings, two-column text, callouts, images or a compact table. Banded headings act as major internal chapter breaks; soft headings act as quieter subsection transitions.",
      typicalRange: "A substantial reading section normally uses four to eight blocks. Mix only the block types the subject actually needs; variation should support comprehension rather than become decoration.",
      fixed: "The section remains one coherent article-like chapter with a clear heading hierarchy and visible reading order. Blocks are always visible and are not accordions, tabs or independent cards. Heading treatments must communicate hierarchy rather than alternate randomly for visual variety.",
      flexible: "Authors may vary block order and quantity, use one- or two-column prose, use a banded chapter heading and/or a softer subsection heading where the hierarchy justifies it, choose quiet/filled/outline callouts, place occasional images wide/left/right, and include a compact table when the information genuinely compares well.",
      needsDesignReview: "Use Design review for more than two text columns, complex data tables, interactive controls, galleries, nested navigation, several unrelated subjects, or decorative block variation that no longer serves one coherent article.",
      media: "Images are optional and should be used selectively. Each image needs meaningful alt text; visible captions are not required by this recipe.",
      responsive: "All multi-column and side-media blocks collapse to a single source-ordered reading stream on narrow screens. Tables may scroll horizontally inside their own wrapper rather than forcing the page wider.",
      accessibility: "Use semantic headings, paragraphs, tables and asides. Preserve source order across responsive layouts, keep table headers real text, and never communicate callout importance through colour alone.",
    },
    schema: z.object({ ...heading, blocks: z.array(editorialProseBlock).min(3).max(12) }).strict(),
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
  "faq.editorial-answers": recipe({
    name: "Editorial questions and answers", kind: "faq",
    purpose: "Answer important service questions in an always-visible editorial reading flow rather than hiding answers behind disclosures.",
    recommendedPlacement: "Late page, after the main service explanation and before the final contact section",
    recommendedUse: "Develop a small set of important customer questions with enough room for nuanced answers, optional supporting illustrations and a more authored article rhythm.",
    renderer: "EditorialAnswers.astro",
    status: "approved",
    supersedes: "faq.accordion",
    authoringGuidance: {
      contentShape: "Eyebrow, title and introduction followed by three to six visible question chapters. Each question has one to three prose paragraphs and may optionally include one supporting illustration with a caption.",
      typicalRange: "Usually four to six substantial questions. Answers should be long enough to explain the issue properly without becoming separate articles; use illustrations selectively where they clarify a physical setup, choice or relationship.",
      fixed: "Questions and answers remain visible in the normal reading flow; there are no accordion or disclosure controls. Each item keeps a visible question number, a real heading and prose answer, and optional media stays subordinate to the answer.",
      flexible: "Question count within the supported range, wording, answer depth, ordering and which items use media may vary to suit the service. Individual answers may be shorter or longer so the section does not become a repeated card pattern.",
      needsDesignReview: "Use Design review when the material needs more than six major questions, nested subsections, comparison tables, interactive filtering, several images per answer, or another information relationship beyond editorial Q&A.",
      media: "Media is optional per question and should explain something useful rather than decorate the page. Reuse the normal Workshop image contract with meaningful alt text and a concise caption.",
      responsive: "Desktop uses a broad editorial question/answer rhythm with optional media beside the prose. Narrow screens become one continuous article stream in source order: number, question, answer and then supporting media.",
      accessibility: "Keep every question as a real heading in a meaningful hierarchy and every answer present without interaction. Media needs meaningful alt text when informative; the section must remain understandable with images unavailable and without relying on number colour or decoration.",
    },
    schema: z.object({
      ...heading,
      items: z.array(z.object({
        question: text,
        paragraphs: z.array(text).min(1).max(3),
        media: suppliedMedia.optional(),
        caption: text.optional(),
      }).strict()).min(3).max(6),
    }).strict(),
  }),
  "faq.accordion": recipe({
    name: "Expandable questions", kind: "faq",
    purpose: "Answer independent service questions without hiding the rest of the page.",
    recommendedPlacement: "Late page, after the core service explanation",
    recommendedUse: "Resolve independent practical questions that remain after the page has established scope, process, and boundaries.",
    renderer: "FaqAccordion.astro",
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
