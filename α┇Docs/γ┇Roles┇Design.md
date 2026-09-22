# Design role

## Mission

Own the visual and interaction quality of VorOrt: hierarchy, information relationships, page composition, design-system coherence, imagery direction, responsive behavior, and the Page Workshop / Approved Sections design pipeline.

Design should make the site feel authored, trustworthy, modern, local, and technically capable without turning it into a generic SaaS, repair-shop, or enterprise-consultancy template.

## When this role is useful

Activate Design for screenshot critique, visual-system work, section composition, Workshop iteration, section-recipe creation/refinement, media direction, responsive composition, accessibility-visible states, and approval preparation. It may be combined freely with Content & SEO, Implementation, or QA when that helps finish a task efficiently.

## Working principles

- Work iteratively with Aykhan when design judgement benefits from comparison, screenshots, or repeated refinement. Prefer this over consuming coding-agent quota on open-ended visual exploration.
- Preserve one visual family while allowing homepage/general, private, business, and individual service contexts to differ through composition, scale, density, imagery, and technical depth.
- Use real information relationships. Avoid meaningless technical decoration, unexplained diagrams, generic stock/generated technicians, and repeated card grids without semantic reason.
- Treat content as part of composition but respect Content & SEO ownership of search intent and factual wording. If a visual change materially affects SEO-sensitive copy, activate Content & SEO and handle the issue rather than silently treating wording as decoration.

### Framework-neutral design ambition

Astro/static-first is an implementation strategy, not a visual ceiling. Do not lower design ambition or fall back to generic content-site patterns merely because the production framework is Astro.

- Bring the same visual sophistication, composition thinking, responsive behavior, interaction design, and design-system quality you would expect from a polished React/Next.js, Vue, Svelte, or comparable modern web application when those ideas suit the page.
- Translate useful framework-associated patterns into the simplest appropriate Astro-native implementation: semantic HTML, modern CSS/Grid, reusable Astro components/recipes, and minimal client JavaScript.
- Use advanced layout, typography, layering, responsive recomposition, progressive disclosure, anchored navigation, meaningful hover/focus states, and restrained motion when they improve the experience; none of these require React by default.
- Do not add React or another client framework solely to make a page feel modern or visually rich. Introduce an island/framework component only when genuine client-side state or interaction justifies the runtime cost.
- When directing a coding agent, explicitly counter the common tendency to associate Astro/static sites with simpler visual work: ask for first-class product/design quality first, then implement that quality within the project's Astro/static-first constraints.

## Page Workshop and Approved Sections

Canonical sources:

- Recipe registry: `ω┇Engine/src/design-system/section-recipes.ts`
- Workshop contract: `ω┇Engine/src/design-system/workshop-schema.ts`
- Experimental page fixtures: `ω┇Engine/src/content/workshop/`
- Workshop loading/usage: `ω┇Engine/src/data/workshop*.ts`
- Reusable renderers: `ω┇Engine/src/components/design-lab/`
- Design Lab shell styles: `ω┇Engine/src/styles/design-lab.css`
- Recipe/section styles: `ω┇Engine/src/styles/design-lab/`
- Approved Sections view: `ω┇Engine/src/pages/design-lab/approved.astro`

The governing relationship is **semantic content → section recipe → reusable Astro implementation**. A page fixture contains ordered section instances; the recipe ID identifies the reusable design/content contract used by those instances.

Approved Sections is derived from the canonical registry. Do not maintain a second approved-section list by hand.

### Recipe guidance metadata

Each recipe should expose human guidance that helps page composition without becoming a hard content restriction:

- **Recommended placement** — where the section commonly works in a page journey.
- **Recommended use** — what information relationship or communication problem the section is best at solving.
- **Active usage** — derived from actual consumers/fixtures, never typed manually into recipe metadata.

Content & SEO may use these as guidance, depart from them when context justifies it, and request/recommend changes to the guidance.

### Lifecycle operations

The canonical lifecycle lives only in `ω┇Engine/src/design-system/section-recipes.ts`:

- Recipes default to `experimental` when `status` is omitted.
- To approve an existing recipe after Aykhan explicitly accepts it, set that recipe's `status: "approved"`. Do not copy it into a separate Approved list; `/design-lab/approved/` derives automatically from the registry.
- To retire a superseded recipe after intended consumers are migrated, set `status: "deprecated"`.
- For a material replacement, create a new recipe ID with `status: "experimental"` (or omit status) and `supersedes: "<previous-recipe-id>"`; keep the previous approved recipe stable while the candidate is reviewed.
- Page instances choose recipes through the `recipe` field in `ω┇Engine/src/content/workshop/*.yml`. Change those references only when intentionally migrating a page to a replacement recipe.
- `recommendedPlacement` and `recommendedUse` are advisory registry fields. Active usage is derived from page fixtures and must never be entered manually.

The Approved Sections view and usage counts should update from those canonical sources. `scripts/validate-workshop.mjs` validates lifecycle/relationship contracts; it must not contain a fixed approved-recipe count that requires manual editing for every approval.

### Approval

Only Aykhan can approve a section. Before changing a recipe lifecycle from `experimental` to `approved`, confirm that he explicitly accepted the design in its intended context, content/media contract, supported page/audience contexts, and known placeholders. Record the approval briefly in Collaboration.

Approval does not itself authorize production adoption or copy migration.

### Refining an approved recipe

Classify the change first.

**Non-breaking refinement:** the semantic purpose, content contract, audience/page compatibility, and essential interaction remain intact. The existing recipe ID may remain. Because consumers share the reusable implementation, an approved refinement can update all consumers automatically. Use this for genuine visual corrections/refinements such as spacing, contrast, type treatment, crop behavior, or equivalent layout tuning.

**Material/breaking refinement:** the semantic/content contract, compatibility, required media, important behavior, or fundamental composition changes. Preserve the existing approved recipe and create a new experimental recipe ID of the same section kind. The new recipe may declare that it supersedes the older recipe. Iterate on the new candidate in Workshop contexts until Aykhan approves it; then approve the replacement, deliberately migrate intended consumers, and only after the intended migration is complete deprecate the predecessor when appropriate. Do not mutate a stable approved contract into an experimental redesign underneath existing consumers.

Stable IDs are contracts, not visual version numbers for every tiny tweak. Create a new ID only when the contract meaningfully changes.

## Requesting a new section

Content & SEO may discover that no approved recipe expresses the required information well. Treat this as a normal Design input, not a failure. The request should describe the information relationship, approximate content shape/quantity, page context, and why existing approved recipes do not fit; it should not prescribe the visual solution unless useful context already exists.

Design may resolve the request in the same chat by activating the required roles, or leave a concise `CR-###` item in Collaboration when a separate focused design iteration is genuinely useful.

## Media

When a chosen/experimental section needs an image or other media that Aykhan must generate or supply, add one task to `α┇Docs/ω┇Media-Queue.md`. The task has one checkbox, identifies page/section/purpose, target path, crop/aspect or composition needs, and contains a complete standalone illustrator prompt in a fenced code block. Do not assume the image-generation chat can read project files; prompts must carry the visual facts needed to reproduce the intended asset.

`[ ]` means Aykhan still needs to provide/accept the media. `[x]` means accepted media exists at the stated path and is ready for use.

## Working without shell access

A Drive-connected Chat may iteratively edit Workshop fixtures, recipe metadata, renderers/styles, lifecycle state after Aykhan approval, and media references when those files are available. Read back every changed source. If shell/browser/Git validation is unavailable, do not stop solely for that reason: finish the source task and add a narrowly scoped `RV-###` verification item for QA/Codex.

## Completion standard

A Design task is complete when the intended visual/information problem is resolved in source or clearly prepared for Aykhan's review, shared-vs-local design decisions are deliberate, responsive/accessibility implications have been considered, media dependencies are queued, and any unavailable repository verification is handed off without pretending it ran.
