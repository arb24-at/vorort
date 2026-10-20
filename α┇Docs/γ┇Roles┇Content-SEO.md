# Content & SEO role

## Mission

Own factual meaning, search intent, page information architecture, concise page blueprints, independently written German/English content, metadata, FAQs, service boundaries, internal linking, and content usefulness. Optimize for genuine Berlin enquiries and clear customer understanding rather than keyword count.

## When this role is useful

Activate Content & SEO for keyword/SERP research, page ownership and cannibalisation decisions, concise page-blueprint planning, service-page composition, copywriting/editing, SEO-sensitive headings, FAQs, internal linking, schema-backed content records, and composing a page from approved section recipes.

This role may combine with Design, Implementation, or QA whenever doing so completes the task more efficiently. Roles are awareness tools, not permission barriers.

## Durable rules

- Use `α┇Docs/α┇Project.md` as the durable truth for business/service boundaries and production facts.
- German and English are independently authored. Do not mechanically translate keyword strategy or claim search-volume evidence from one language for the other.
- Never invent customers, prices, availability, qualifications, operational promises, certifications, or service capability.
- Protect useful page intent over raw keyword volume. Do not create thin pages merely because a query has volume, and do not keyword-stuff to reach an arbitrary count.
- Keep keyword routing/research status in its designated SEO source and production copy in the validated content architecture. Do not scatter SEO research logs through Project, role documentation, or page-blueprint files.
- Treat the current production page structure as an interim implementation, not a composition template. Preserve researched facts, useful intent, page ownership, route relationships and truthful boundaries; do not preserve repeated bullets, checkboxes, cards or section order merely because they already exist.
- Aykhan remains the final approval authority for page blueprints, section approval and substantive launch copy.

## Blueprint-first page workflow

Use a short planning stage before writing long-form launch copy once the Approved Sections library is mature enough for the page being planned.

1. **Ground the page.** Read the relevant Project truth, SEO routing/research status and existing page/content records needed for the page. Reuse valid research and service truth instead of restarting completed research by default.
2. **Create or update the concise blueprint.** Keep one repository overview for the launch-page blueprints rather than a separate planning file per page unless Aykhan explicitly changes that approach. Each German and English page blueprint should normally record:
   - page job and audience/context;
   - main topics, customer questions or decisions the page must cover;
   - important search intent and researched terms that genuinely belong on the page;
   - service, trust or proof boundaries;
   - key internal-link relationships;
   - likely approved section recipes and their intended information role;
   - genuine research/design/media gaps that must be resolved before or during full writing.
3. **Keep the blueprint short.** It is closer to a table of contents than a draft. Do not fill it with finished paragraphs, detailed styling directions, duplicated keyword research, or copied production text.
4. **Review the blueprint when the active programme requires it.** For the ordinary blueprint-first workflow, pause for Aykhan to review coverage, section choice/order and cross-page relationships. **Exception: Aykhan explicitly authorised the `α┇Docs/ω┇☑️┇Tasks.md` Codex programme to plan and fully draft each assigned page in one run without an intermediate approval gate.** Preserve a concise page rationale/SEO design decision in the completion report; Aykhan retains final substantive and launch approval.
5. **Write the full page from the reviewed blueprint.** Use compatible Approved Sections creatively within their authoring guidance. Vary rhythm, density, prose/media relationships and section order when allowed by the recipes and the material. Do not turn the blueprint into a rigid one-to-one template or reproduce the same section sequence across every page.
6. **Review the full bilingual site as a system.** After drafting, reconcile page ownership, overlap, internal links, titles/descriptions, canonical/alternate-language relationships and contact paths before substantive copy is treated as ready for Aykhan's final approval.

If a reviewed blueprint reveals a real research gap, resolve that gap using the appropriate SEO source. Do not reopen completed research merely because a page is being rewritten.

## Search intent and keyword use

Use `ω┇Engine/src/data/seo-keywords.yml` as the planning source for keyword routing and research status. Respect the evidence level recorded there; do not describe provisional seeds or SERP review as search-volume research when that evidence does not exist.

Important researched terms should be covered intentionally when they fit the page's real subject and customer language. Use natural variants, related terminology, useful headings, explanatory prose and internal links to build topical coverage. Do not repeat a term purely to increase its count, and do not distort service scope to capture traffic that belongs to another page or another service.

Page ownership outranks raw volume. Keep landing pages useful as orientation/conversion gateways where that is their job, and protect service boundaries from adjacent high-volume intents such as hardware repair, data recovery or mandatory managed-service/SLA positioning.

## Page composition with Approved Sections

Content & SEO may build semantic page compositions using available **approved and compatible** section recipes. Workshop remains the current composition/review surface; production pages stay outside this recipe-composition flow until production adoption is explicitly authorized and implemented.

When moving from an approved page blueprint into a full Workshop page:

1. Start from the reviewed page job, audience/context, main questions, boundaries, internal links and conversion path.
2. Review Approved Sections and their recipe IDs, including recommended placement/use and authoring guidance.
3. Choose and order recipes that express the information naturally. Recommended placement/use is decision support, not a hard page template.
4. Populate semantic content contracts with useful real copy. Do not insert arbitrary styling instructions into content.
5. Vary permitted order, density, media and treatments so pages feel authored rather than cloned, while preserving the fixed parts of each approved recipe.
6. Add required media tasks to `α┇Docs/ω┇Media-Queue.md` when a selected section needs media that does not yet exist.

Do not force content into an unsuitable approved recipe merely to avoid design work. If the page needs an information relationship that the approved library cannot express well, activate Design and solve it if practical, or create a concise Content & SEO → Design `CR-###` request describing the communication need, approximate content shape/quantity and why existing recipes do not fit.

Recommendations in the recipe registry may be challenged. Content & SEO may propose changes when real page use shows that recommended placement/use is too narrow, misleading or incomplete.

## Relationship with Design

Content briefs and page blueprints should describe meaning and relationships rather than prescribe CSS/components. Useful design inputs include hierarchy, grouping, emphasis, sequence, comparison, dependency, content density and media purpose.

Design may identify copy that materially breaks a composition. If the wording is SEO-sensitive or changes meaning, activate Content & SEO and resolve it here. A hero/header length problem is a content task when changing the copy can affect search intent; do not treat it as purely visual.

Small wording adjustments with no factual/SEO consequence may be handled pragmatically by a combined-role worker.

## Media queue

When page composition selects a section with media, create one queue item per asset that Aykhan must generate/supply. Include:

- page and section/recipe ID;
- what the media must communicate;
- visual/compositional requirements supplied by the Design contract or active Design role;
- exact target file path when known;
- a complete standalone illustrator prompt in a fenced code block.

Do not duplicate accepted asset catalogues in this file. The Media Queue tracks current production needs; source/fixtures own actual media references.

## Content changes and implementation

Content & SEO may edit validated content records directly when the environment allows it. If a small schema/fixture adjustment is necessary to complete the content task, activate Implementation and continue rather than creating unnecessary micro-handoffs. Preserve reusable design/implementation contracts unless the combined task explicitly changes them.

Production adoption of the reviewed blueprint/content system is a separate implementation step. Do not silently treat a Workshop composition or completed copy draft as authorization to migrate production routes.

## Completion standard

For a **page-blueprint task**, completion means the page has a concise, truthful and distinct plan covering its job, key topics/questions, relevant search intent, boundaries, internal-link relationships, likely approved recipes and genuine open gaps, and it is ready for Aykhan's review without pretending the final page has been written.

For a **full-page content task**, completion means the reviewed blueprint has been expanded into useful independently authored content, important researched terms are covered naturally, section composition fits the information without clone-page repetition, required media is queued, internal links/metadata are coherent where applicable, and any genuinely separate Design/Implementation/QA need is recorded concisely. Final substantive approval remains Aykhan's decision.

## Current German-first Codex execution authority

For Bundles 3 and 4 of `α┇Docs/ω┇☑️┇Tasks.md`, actively combine Content & SEO with Design, Implementation and QA. One task owns one production page in one language, may adjust related shared components and approved-recipe **recommendations or non-breaking contracts** where actual content demonstrates a need, and must document the changes in its report. Do not force clone compositions, delay a truthful useful page for optional Design Lab polish, fabricate SEO evidence or auto-approve material new recipes. Complete all German Tasks before English Tasks; the English versions must be independently written. A production working draft is not final editorial, legal or publication approval.
