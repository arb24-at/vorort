# Implementation role

## Mission

Implement agreed product, content, and design decisions in the Astro application with maintainable, reusable, static-first code. Preserve architecture and production behavior while making the smallest coherent change that solves the task.

## When this role is useful

Activate Implementation for Astro/TypeScript/CSS changes, content schemas/loaders, reusable components, Design Lab recipe wiring, production adoption, route/navigation changes, validation tooling, refactors, and integration of accepted media.

Implementation may combine with Design, Content & SEO, or QA when the task benefits from it. Do not stop because another discipline becomes relevant; add the role and continue when the issue can responsibly be solved in the current work.

## Engineering principles

- Prefer Astro-native, static-first solutions and minimal client JavaScript.
- Inspect existing layouts, components, section recipes, tokens, utilities, and styles before adding new structures.
- Shared design decision → shared token/component/recipe/style.
- Page-specific composition → page/section implementation appropriate to that context.
- Editable factual/localized content → validated content/fixture record.
- Avoid giant universal components, boolean-prop explosions, framework additions, unnecessary dependencies, and abstractions created only to remove superficial duplication.
- Preserve base-aware links/assets and static deployment behavior.

## Page Workshop implementation map

- `src/design-system/section-recipes.ts` — canonical recipe IDs, lifecycle, compatibility, schemas, renderer references, and human guidance metadata.
- `src/design-system/workshop-schema.ts` — strict page/section-instance contract.
- `src/content/workshop/` — ordered experimental page fixtures and semantic content.
- `src/data/workshop*.ts` — loading, path/usage helpers, derived usage.
- `src/components/design-lab/` — Workshop UI and reusable renderers.
- `src/styles/design-lab/` — shared Workshop/recipe styling.
- `src/pages/design-lab/approved.astro` — Approved Sections presentation derived from the canonical registry.
- `scripts/validate-workshop.mjs` — Design Lab contract/lifecycle/usage validation.

Do not create a second source of approval or manually maintained usage count.

## Recipe identity and reuse

Treat recipe IDs as reusable semantic/design contracts. Section-instance IDs inside page fixtures identify occurrences/anchors; they are not substitutes for the recipe identity.

A non-breaking refinement can keep its recipe ID so shared implementation updates consumers consistently. A breaking/material contract change gets a new recipe ID and may supersede an older one. Preserve the old approved recipe while the replacement is experimental. After Aykhan approval, update lifecycle states and migrate intended consumers deliberately.

When adding recommendation metadata, keep it advisory. Hard compatibility belongs in validated schema/registry fields; recommended placement/use should guide page authors without blocking reasonable composition.

## Production adoption

Workshop approval and production adoption are separate events. Do not migrate production merely because a recipe became approved. Production adoption must preserve researched content, routes, bilingual pairing, SEO metadata, contact behavior, and any explicit migration scope.

## Media integration

Integrate only the media requested/accepted for the task. Use the target path and semantic media fields rather than embedding styling into content. A checked item in `α┇Docs/ω┇Media-Queue.md` means Aykhan has accepted the media for use; source/fixture readback still confirms the implementation reference.

## Environment-aware completion

With shell/browser access, run applicable validation and inspect Git state. Without shell, a connected Chat may still edit source, read it back, and complete the implementation decision. Record unavailable commands/browser checks under `Pending repository verification` with a narrow `RV-###` request.

A later QA/Codex validation task should validate the existing change, not reopen design/content decisions unless an actual failure requires it.

## Completion standard

Implementation is complete when the requested behavior/design/content integration exists in the correct shared/local source, unrelated work is preserved, source is read back where required, and available validation has been performed. Repository verification is a separate evidence level when the environment cannot provide it.
