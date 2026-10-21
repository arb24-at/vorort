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
const heroBannerContentSchema = z.object({ ...heading, media: labelledMedia,
  actions: z.array(z.object({ label: text, target: anchor }).strict()).length(2),
}).strict();
const editorialNote = z.object({
  title: text,
  body: text,
  tone: z.enum(["quiet", "solid"]).optional(),
}).strict();
const enquiryContentSchema = z.object({
  title: text.optional(), intro: text.optional(), formIntro: text.optional(),
  affectedPlaceholder: text.optional(), request: text.optional(), requestPlaceholder: text.optional(),
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
  "hero.service-intro": recipe({
    name: "Service introduction without artwork", kind: "hero", status: "experimental",
    purpose: "Introduce practical service help with a prominent heading, two actions and a useful preparation note, without requiring artwork.",
    recommendedPlacement: "Opening / first section",
    recommendedUse: "Use when a clear explanation and useful intake context serve the visitor better than an environmental image.",
    renderer: "ServiceIntro.astro",
    authoringGuidance: {
      contentShape: "Eyebrow, heading, introduction, two on-page actions, and one note with a title, two to four preparation items and an optional footnote.",
      typicalRange: "A concise introduction and a genuinely useful note; do not repeat the service catalogue or the next recognition section.",
      fixed: "One primary heading, two real anchor actions, and a subordinate preparation note. No required image, simulated diagnostic interface or invented proof.",
      flexible: "Service wording, note subject/items and column proportions can vary. The note may explain useful enquiry details or what to have ready.",
      needsDesignReview: "Review before approval. Inputs, live diagnostics, booking, more actions or a materially different note relationship need separate review.",
      media: "No media. Typography, tonal contrast and a restrained accent establish the composition.",
      responsive: "Heading, introduction and actions precede the note in source order; desktop columns become a compact single stream on phones.",
      accessibility: "Use one real page heading, descriptive link labels, valid targets, visible focus and a labelled aside. The specimen may use H2 below the gallery H1.",
    },
    schema: z.object({ ...heading, actions: z.array(sectionAction).length(2), note: z.object({ title: text, items: z.array(text).min(2).max(4), footnote: text.optional() }).strict() }).strict(),
  }),
  "scope.chapter-links": recipe({
    name: "Text chapter navigation", kind: "scope", status: "experimental",
    purpose: "Offer concise, accessible navigation to deeper service explanations without requiring illustrations.",
    recommendedPlacement: "Before detailed chapters, including after an early enquiry",
    recommendedUse: "Use for two to six text-led topics whose destinations add detail beyond the opening service explanation.",
    renderer: "ChapterLinks.astro",
    authoringGuidance: {
      contentShape: "Eyebrow, heading, brief introduction and two to six links, each with a topic title, short description and existing explanation target.",
      typicalRange: "A short orientation and distinct topics. Describe the decision each chapter helps with rather than repeat its introduction.",
      fixed: "Every complete entry is one real link to a distinct explanation chapter on the same page. There are no images, filters or hidden panels.",
      flexible: "Topic count, wording, order, typography and columns may vary while preserving source order and the navigation relationship.",
      needsDesignReview: "Review before approval. External destinations, nested navigation, interactive filtering or more than six topics require another design decision.",
      media: "No media required; text must carry the meaning without decorative icons.",
      responsive: "Multiple desktop columns stack in source order on mobile, with comfortable complete-entry tap targets.",
      accessibility: "Use a labelled navigation landmark, real links, distinct names and visible focus; targets must exist and arrows/colour are supplementary.",
    },
    schema: z.object({ ...heading, items: z.array(item.extend({ target: anchor })).min(2).max(6) }).strict(),
  }),
  "hero.editorial-art": recipe({
    name: "Editorial introduction with environmental artwork", kind: "hero",
    purpose: "Give a substantial service introduction and artwork their own readable space.",
    recommendedPlacement: "Opening / first section",
    recommendedUse: "Introduce a service with a strong heading, readable explanation and a broad environmental image, without text covering the scene.",
    renderer: "EditorialHero.astro",
    status: "approved",
    authoringGuidance: {
      contentShape: "Eyebrow, substantial service heading, introduction, two section-target actions and one broad environmental image with meaningful alternative text.",
      typicalRange: "One concise eyebrow, a prominent title, one explanatory introduction, exactly two actions and one informative image. Keep detailed topics in the following sections rather than overloading the hero.",
      fixed: "A readable opening hierarchy, distinct introduction and action area, one substantial environmental image, and two actionable on-page destinations. Service copy is not overlaid on the scene in this editorial composition.",
      flexible: "Copy, illustration subject, crop, typography, spacing, column proportions and image scale may evolve. The specimen is an example, not a frozen snapshot; preserve the essential separation of explanation and artwork.",
      needsDesignReview: "Use Design review for a new text-over-image composition, more actions, additional information modules, a different content contract or a different core relationship between heading, introduction and image.",
      media: "Exactly one supplied informative environmental image is required, with a real source and meaningful alt text. The specific Berlin home scene is an example, not a mandated asset or proof of business premises.",
      responsive: "Large screens may balance heading and introduction/actions beside one another above the image. Narrow screens reflow them in a clear reading order with accessible actions and an image that remains legible without horizontal overflow.",
      accessibility: "Use a meaningful heading and image alt text, readable contrast, two keyboard-accessible action links with visible focus treatment, and valid destinations. Decorative connection cues must not carry essential information.",
    },
    supersedes: "hero.banner-art",
    schema: z.object({ ...heading, media: suppliedMedia, actions: z.array(sectionAction).length(2) }).strict(),
  }),
  "scope.topic-index": recipe({
    name: "Illustrated topic index", kind: "scope",
    purpose: "Help visitors choose a topic and jump directly to its full explanation.",
    recommendedPlacement: "Before the detailed chapters, following initial orientation or an early enquiry",
    recommendedUse: "Orient readers on a substantial service page with a prominent lead topic and supporting illustrated chapter links.",
    renderer: "TopicIndex.astro",
    status: "approved",
    authoringGuidance: {
      contentShape: "Eyebrow, title, orienting introduction and two to six illustrated topic links. Each topic provides a distinct title, short description, meaningful image and real on-page anchor target.",
      typicalRange: "Usually four to six distinct topics, with one useful starting point highlighted when the content warrants it. Keep descriptions short enough to scan and put detailed answers in the destination chapters.",
      fixed: "The section acts as meaningful navigation to actual page chapters rather than a decorative card gallery. Each topic remains a single coherent linked unit with title, description, media and valid destination.",
      flexible: "Topic count within the supported range, order, featured item, copy, image subjects/crops, card proportions, gaps, type sizes and responsive layout may evolve. The exact five-card grid and mobile image-strip sizes are not locked.",
      needsDesignReview: "Use Design review for nested categories, more than six topics, destinations outside the page, filtering, multi-stage navigation or a fundamentally different index hierarchy.",
      media: "Each topic uses a supplied relevant image with useful alt text. Maintain a coherent visual family within a page, but no particular illustration or crop is permanently fixed by approval.",
      responsive: "Desktop can use a featured topic with supporting cards. On narrow screens, keep topics in a clear top-to-bottom order with readable text and accessible tap targets; image width, stacking and card density may be refined without changing the navigation contract.",
      accessibility: "Provide a discernible focusable link for every topic, useful alternative text, clear focus and hover states and an understandable text-first reading order. Link targets must exist and colour or arrows must not be the only navigation cue.",
    },
    supersedes: "scope.art-panels",
    schema: z.object({ ...heading, items: z.array(z.object({ title: text, body: text, target: anchor, media: suppliedMedia }).strict()).min(2).max(6) }).strict(),
  }),
  "explanation.options-guide": recipe({
    name: "Editorial explanation and options guide", kind: "explanation",
    purpose: "Explain a customer problem and compare practical approaches using consistent criteria.",
    recommendedPlacement: "Early-to-middle page, within a service topic",
    recommendedUse: "Help a reader understand alternatives without implying one product or approach is always the best choice. It works as a complete section on its own and pairs especially well with a following editorial-prose section when the topic needs deeper explanation.",
    renderer: "OptionsGuide.astro",
    status: "approved",
    authoringGuidance: {
      contentShape: "Eyebrow and substantial introduction, one supporting image, then two to four alternatives compared against the same two criteria, with an optional practical note.",
      typicalRange: "Usually two or three introductory paragraphs and two to four clearly distinct approaches. Keep each comparison cell concise enough to scan while preserving useful nuance.",
      fixed: "Every option is compared using the same named criteria so the section remains a genuine guide rather than a collection of unrelated cards. The section does not rank one option as universally best.",
      flexible: "Option count within the supported range, wording, supporting image and optional note may vary. The recipe may stand alone; when additional explanation is useful, a separate editorial-prose section can follow it without becoming part of this recipe.",
      needsDesignReview: "Use Design review for pricing matrices, ranked recommendations, more than four alternatives, materially different criteria per option, interactive selection, or a comparison that needs a complex table rather than the standard guide.",
      media: "One informative supporting image is required with meaningful alt text and a concise visible caption. The image establishes context rather than representing a recommended product.",
      responsive: "The introductory image and prose stack on narrower screens, and each option keeps its title plus both comparison criteria in source order. Do not hide criteria merely to preserve a desktop table shape.",
      accessibility: "Use real headings and paragraph text for every option and criterion. Preserve the same comparison labels in source and visual order, and do not communicate suitability through colour alone.",
    },
    schema: z.object({ ...editorialHeading, media: suppliedMedia, caption: text,
      comparisonTitle: text, fitLabel: text, considerationLabel: text,
      options: z.array(z.object({ title: text, fit: text, consideration: text }).strict()).min(2).max(4),
      note: item.optional(),
    }).strict(),
  }),
  "explanation.connection-path": recipe({
    name: "Explanation with a connection path", kind: "explanation",
    purpose: "Make the relationship between a source, a physical route and its destinations understandable, then connect that relationship to the practical installation decisions around it.",
    recommendedPlacement: "Within a topic about infrastructure or connected systems",
    recommendedUse: "Use when a physical or logical path is the clearest way to explain how one source reaches several destinations. The full-width diagram deliberately divides the introductory explanation from the practical planning details that follow.",
    renderer: "ConnectionPath.astro",
    status: "approved",
    authoringGuidance: {
      contentShape: "Eyebrow, heading and introductory prose; one full-width source-to-route-to-destinations diagram with real-text labels and a concise planning caption; then a practical planning block with a heading, short introduction and two to four decision points.",
      typicalRange: "Usually two introductory paragraphs, one source, one route, two to four destinations and three concise planning points below the diagram.",
      fixed: "The section keeps a clear source → route → destinations relationship, with the diagram spanning the content width as the visual break between explanation and practical planning. Important labels remain real text rather than being baked into artwork.",
      flexible: "Source, route, destination count and planning details may vary to suit the system. The exact schematic artwork may be refined or replaced later as long as the full-width path relationship, readable labels and post-diagram planning layer remain intact.",
      needsDesignReview: "Use Design review for several sources, loops, many branches, network topology that cannot be understood as one path, interactive diagrams, or a diagram that needs multiple independent stages rather than a single source/route/destination relationship.",
      media: "No external image is required. The current schematic is an implementation treatment rather than a locked illustration asset; future visual refinement must preserve the semantic path and real-text labels.",
      responsive: "Desktop presents the path horizontally and the planning details as a compact editorial grid. Narrow screens recompose to a vertical path followed by source-ordered planning points without hiding destinations or labels.",
      accessibility: "Keep the section heading, diagram title, node headings and planning headings as meaningful real text. Interface labels follow the page locale, defaulting to English for existing Workshop consumers; author-supplied labels remain semantic content. Decorative connectors/icons stay hidden from assistive technology; the source order must make the relationship understandable without relying on lines, colour or artwork.",
    },
    schema: z.object({ ...editorialHeading, diagramTitle: text, caption: text,
      source: item, route: item, destinations: z.array(item).min(2).max(4),
      planning: z.object({ title: text, body: text, items: z.array(item).min(2).max(4) }).strict(),
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
    recommendedUse: "Use for one coherent explanation, from a compact practical orientation before contact to a substantial technical chapter. Combine only the prose, subheads, columns, callouts, images or table the subject needs. It is independent of the options guide, although the two often work well in sequence.",
    renderer: "EditorialProse.astro",
    status: "approved",
    authoringGuidance: {
      contentShape: "Eyebrow, title and introduction followed by a sequence of semantic editorial blocks: prose, internal headings, two-column text, callouts, images or a compact table. Banded headings act as major internal chapter breaks; soft headings act as quieter subsection transitions.",
      typicalRange: "Choose one to twelve blocks to fit the explanation. One or two can be enough for a focused section; longer chapters may need more. Workshop demonstrates available block types, not a required sequence or minimum amount of copy.",
      fixed: "The section remains one coherent article-like chapter with a clear heading hierarchy and visible reading order. Blocks are always visible and are not accordions, tabs or independent cards. Heading treatments must communicate hierarchy rather than alternate randomly for visual variety.",
      flexible: "Authors may vary block order and quantity, use one- or two-column prose, use a banded chapter heading and/or a softer subsection heading where the hierarchy justifies it, choose quiet/filled/outline callouts, place occasional images wide/left/right, and include a compact table when the information genuinely compares well. The recipe can stand alone or follow another section such as an options guide; do not merge the two contracts merely because they are often useful together.",
      needsDesignReview: "Use Design review for more than two text columns, complex data tables, interactive controls, galleries, nested navigation, several unrelated subjects, or decorative block variation that no longer serves one coherent article.",
      media: "Images are optional and should be used selectively. Each image needs meaningful alt text; visible captions are not required by this recipe.",
      responsive: "All multi-column and side-media blocks collapse to a single source-ordered reading stream on narrow screens. Tables may scroll horizontally inside their own wrapper rather than forcing the page wider.",
      accessibility: "Use semantic headings, paragraphs, tables and asides. Preserve source order across responsive layouts, keep table headers real text, and never communicate callout importance through colour alone. A horizontally scrolling table region must have an accessible label, keyboard focus and visible focus treatment so every column is reachable.",
    },
    schema: z.object({ ...heading, blocks: z.array(editorialProseBlock).min(1).max(12) }).strict(),
  }),
  "hero.banner-art": recipe({
    name: "Banner with environmental artwork", kind: "hero",
    purpose: "Introduce a service and its environment with clear next actions.",
    recommendedPlacement: "Opening / first section",
    recommendedUse: "Introduce the service, establish its real-world context, and present the primary next actions.",
    renderer: "HeroBanner.astro",
    schema: heroBannerContentSchema,
  }),
  "comparison.hero-banner": recipe({
    name: "Hero banner comparison specimen", kind: "comparison",
    purpose: "Render the banner-hero structure inside a Workshop page without creating a second opening hero.",
    recommendedPlacement: "Design Lab comparison only, immediately after the real opening hero when useful",
    recommendedUse: "Compare an experimental hero treatment against the page's real opening hero while preserving the one-opening-hero Workshop contract.",
    renderer: "HeroBanner.astro",
    schema: heroBannerContentSchema,
  }),
  "comparison.hero-banner-cta-overlay": recipe({
    name: "Hero banner with CTA-only image overlay", kind: "comparison",
    purpose: "Compare the same centred banner structure with headline and introduction above the artwork while keeping only the actions over the image.",
    recommendedPlacement: "Design Lab comparison only, beside other hero-banner variants",
    recommendedUse: "Test whether moving explanatory copy above the artwork improves image legibility while preserving centred in-image calls to action.",
    renderer: "HeroBannerCtaOverlay.astro",
    schema: heroBannerContentSchema,
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
  "cta.quick-contact": recipe({
    name: "Quick contact invitation", kind: "cta",
    status: "experimental",
    purpose: "Offer a low-pressure call or a return to the page's single enquiry form without repeating the form.",
    recommendedPlacement: "After recognition near the opening; optionally reused as the final editorial action",
    recommendedUse: "Welcome a small question or job before detailed explanations, then provide a concise return path after them.",
    renderer: "QuickContact.astro",
    authoringGuidance: {
      contentShape: "Eyebrow, short heading and paragraph, call label and enquiry label with an existing enquiry anchor. Phone number and destination come from shared site configuration.",
      typicalRange: "One short paragraph, about 35–60 words early or 25–50 at the close. Reused instances should offer different levels of reassurance.",
      fixed: "One real telephone link showing the centrally sourced number, and one anchor to the page's single contact.enquiry instance. No duplicated form, booking control or promised availability.",
      flexible: "Copy and early/closing position may vary; repeated instances use unique anchors and the same recipe ID.",
      needsDesignReview: "Review before promotion; new channels, external destinations, appointment booking or required inputs change this contract.",
      media: "No media; the invitation should be visually distinct through typography, spacing and a compact action group.",
      responsive: "Copy and actions sit side by side when space permits and stack in source order on mobile. Keep the full phone number readable.",
      accessibility: "Use a labelled section, real links, descriptive labels, visible keyboard focus and comfortable targets. The enquiry target must resolve to the page's one contact section.",
    },
    schema: z.object({ eyebrow: text, title: text, body: text, callLabel: text, enquiryLabel: text, enquiryTarget: anchor }).strict(),
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
    status: "approved",
    purpose: "Invite a service enquiry with direct contact routes and an always-visible structured form.",
    recommendedPlacement: "Early after a concise service introduction, or near the close before the shared footer; use one enquiry instance per page",
    recommendedUse: "Give a visitor enough structure to make contact without requiring a technical diagnosis, while keeping phone, WhatsApp and email available as direct alternatives.",
    renderer: "ContactEnquiry.astro",
    authoringGuidance: {
      contentShape: "Brief service-specific invitation, three prominent direct contact actions and one always-visible enquiry form. Show name, preferred reply channel, its required address/number, and request; place optional context in a native disclosure.",
      typicalRange: "Use one short heading and one sentence of reassurance. Only the core contact and request fields appear initially; location, company (for business), affected service and appointment period remain available without lengthening the default view.",
      fixed: "The form stays visible rather than hidden behind a disclosure. Phone, WhatsApp and email remain visible as direct actions with the real number/address shown. The intended form submits directly to a configured endpoint rather than opening the visitor\'s mail app. Name, preferred contact and request are always required; the selected reply channel is required too, so email is required for Email while phone is required for Phone or WhatsApp. A consent checkbox is not part of the standard template: show a plain privacy notice/link instead unless a specific legal purpose genuinely requires separate consent. Never request passwords, authentication/recovery codes, payment-card data or remote-access credentials.",
      flexible: "Service-specific title, short introduction, affected-service prompt and request wording may vary. The single enquiry may appear early with a clear transition back to deeper service explanations, or near the close. Known audience context is submitted invisibly. Business pages may show company details; optional location, service/device and appointment fields may adapt within the native details disclosure. Contact-card proportions and visual balance may evolve while retaining conspicuous direct actions and the enquiry form.",
      needsDesignReview: "Use Design review before adding file uploads, multi-step flows, substantial conditional intake, account/authentication fields, payment, appointment booking or materially different required data. Submission-provider choice, privacy/legal wording and data-retention policy remain implementation/product decisions rather than content styling options.",
      media: "No illustration is required. The invitation should stay legible without decorative media competing with the form.",
      responsive: "Desktop uses a concise invitation beside the form; mobile stacks a brief invitation and compact, clear Call/WhatsApp/Email actions above the form. Essential fields stay visible, and only the selected reply-channel field is shown. A native Add details disclosure hides optional inputs by default, not essential fields.",
      accessibility: "Use real labels, explicit required states, visible focus, inline validation errors and an announced submission status. Change the selected email/phone field's actual required/disabled and visible state together; inactive contact fields must not be submitted. The native optional disclosure remains keyboard accessible. Privacy notice and safety warning remain readable without interaction.",
    },
    schema: enquiryContentSchema,
  }),
  "contact.enquiry-email": recipe({
    name: "Enquiry with an email draft", kind: "contact",
    status: "experimental",
    purpose: "Offer a substantial enquiry form that prepares an email for the visitor to review and send in their own mail application.",
    recommendedPlacement: "After meaningful service orientation; one enquiry per customer page",
    recommendedUse: "Provide a functional fallback while direct delivery and its privacy arrangements are unresolved. Share the enquiry design without changing contact.enquiry's direct-submit contract.",
    renderer: "ContactEnquiry.astro",
    authoringGuidance: {
      contentShape: "Service invitation, centrally sourced phone/WhatsApp/email, core name/reply channel/request fields, optional details and an email subject. Uses the same renderer as the direct enquiry.",
      typicalRange: "A concise invitation and a clear explanation that the visitor must review and send the draft in their mail app. Keep technical detail outside the form.",
      fixed: "Always-visible form; name, preferred reply channel, selected address/number and request required. Preparing a draft is not sending a message. No backend request or success claim; direct contact alternatives, privacy link and sensitive-data warning remain visible.",
      flexible: "Service wording, email subject and optional context can vary; the form may follow the initial orientation or sit near the close. Keep the action label explicit about preparing an email.",
      needsDesignReview: "Review before approval or general production adoption. Direct submission belongs to contact.enquiry; uploads, booking, payments or a different required-data contract need separate review.",
      media: "No artwork; give the fields and contact choices room to read.",
      responsive: "Balanced invitation and generous form columns on desktop; source-ordered invitation/actions followed by a full-width form on mobile.",
      accessibility: "Real labels, conditional required/disabled fields, inline errors, visible focus and announced draft status. Preserve a native mailto fallback and never imply that opening a mail application delivered the enquiry.",
    },
    schema: enquiryContentSchema.extend({ emailSubject: text }),
  }),
  "footer.site": recipe({
    name: "Shared site footer", kind: "footer",
    status: "approved",
    purpose: "Close the site with reliable navigation, direct contact routes, service context and legal information.",
    recommendedPlacement: "Final utility section after the editorial journey, whether the single enquiry appeared early or near the close",
    recommendedUse: "Use the consistent site-wide closing footer on English private and business service pages, with the navigation and contact details sourced centrally rather than repeated in each page fixture.",
    renderer: "SiteFooter.astro",
    authoringGuidance: {
      contentShape: "A site-wide closing introduction, a few service-information labels, Explore navigation, Phone/WhatsApp/Email links, a concise working-method note, copyright and legal links. Fixture content stays empty because all site facts come from shared configuration.",
      typicalRange: "One succinct introduction, the shared navigation set, three contact routes, one short service note and the required legal links; avoid adding another enquiry form or repeating the preceding page content.",
      fixed: "The footer is the last section after contact and has semantic footer markup. Navigation, real contact destinations and legal routes are drawn from the shared site sources; both audiences use the same stable implementation. Do not invent credentials, guarantees or service claims.",
      flexible: "Visual grouping, horizontal/vertical layout, spacing, typographic hierarchy, labels and concise editorial explanation may be refined without changing navigation or legal facts. Site-wide content changes belong in shared site data/components, not separate page fixture overrides.",
      needsDesignReview: "Use Design review for material navigation changes, legal structure changes, additional signup or enquiry actions, new social channels, different footer contracts for separate audiences or any changes to what is centrally owned.",
      media: "No photograph or illustration is required. The understated coloured marker and decorative accents are optional and must not replace real information.",
      responsive: "Desktop arranges the site introduction, navigation, contact routes and service note in a compact editorial grid; narrow widths stack or group these into short, readable blocks with flexible link wrapping and no horizontal overflow.",
      accessibility: "Preserve semantic footer and labelled navigation landmarks; contact links must show their purpose and retain visible focus. Headings, real phone/email text, legal destinations and source order must remain understandable without relying on colour or arrows.",
    },
    schema: z.object({}).strict(),
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
