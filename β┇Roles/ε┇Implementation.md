# ε · Implementation

## Purpose and source map

Implement the agreed blueprint/content/design in maintainable Astro code. Read AGENTS, current target source, relevant schema/renderer/style and existing consumers before changing them. Chats may edit these through Drive; shell access is not a prerequisite for source work.

Inside `ω┇Engine/`:

| Source | Owns |
| --- | --- |
| `src/content/services/`, `src/data/service-schema.ts` | Editable records and validated service contracts |
| `src/design-system/section-recipes.ts` | Section/block identity, lifecycle, schemas and guidance |
| `src/design-system/production-policy.ts`, `production-composition.ts` | Exact page trials and semantic journey constraints |
| `src/components/RecipeSection.astro`, `design-lab/sections/` | Shared production/Workshop renderers |
| `src/design-system/workshop-schema.ts`, `src/content/workshop/` | Strict independent specimen/business fixture contracts |
| `src/design-system/presentation.ts`, `src/styles/design-lab/presentation.css` | Shared named presentation contexts |
| `src/data/workshop*.ts`, `src/pages/design-lab/approved.astro` | Derived usage and approval view |
| `scripts/validate-*.mjs` | Focused contracts, documents and built-output checks |

## Implementation rules

Prefer native HTML/CSS, reusable Astro components/tokens and minimal client JavaScript. Shared ideas belong in shared implementation; editable copy/facts in validated records. Preserve base-aware routing/assets, locale pairing, metadata and existing form transport. Do not introduce giant conditional renderers, unnecessary client frameworks or production-only recipe imitations.

Keep strict schemas and semantic invariants: one opening hero/H1, one enquiry, unique/reserved anchors, valid link targets, audience/page compatibility and deprecated rejection. A page's approved blueprint owns composition; do not hard-code one service's section counts/order into validators. Validate output against its canonical source rather than freezing a particular example journey.

Block lifecycle is independent. Schema and runtime both reject unauthorised Experimental or Deprecated blocks, including within Approved parents. New block definitions default Experimental; new proposals have no implementation until developed. Preserve existing block payloads and approval states.

For a newly approved blueprint trial, add an exact `productionTrials` entry plus accepted composition experiment key, citing blueprint path/version and Aykhan's decision; list authorised recipe and parent/block IDs, exact service ID, translation ID, locale, audience and slug. Do not add a broad YAML bypass or borrow another page's permission. Existing direct-assignment trials remain historical exceptions. Blueprint approval is not lifecycle promotion.

Compatible refinements retain IDs and need an impact note/tests. Breaking meaning/required-field changes require affected-page review before migration; preserve the old consumer contract and develop a separate Experimental candidate where material. Keep Lab labels/capture/scripts outside reusable customer markup.

## Forms and completion

Use the actual configured transport. Email-draft fallback needs truthful text, usable native fallback and no sent-success claim. Direct delivery requires an authorised endpoint/privacy configuration and real delivery tests. German adoption of an English-only renderer requires localisation, not just a changed locale prop.

Read back source, run focused checks while iterating and appropriate broader validation before repository completion. Review affected rendered desktop/mobile behaviour when warranted. Without shell/browser, finish source and hand off explicit checks under RV; do not mark QA passed. Follow AGENTS for version/commit and stop boundaries.
