# VorOrt collaboration handoff

Last updated: 2026-09-10

## Current handoff

- **Version and branch:** canonical source version `2.1.0` in root `AGENTS.md`; expected branch remains `main`, but this Drive-connected Chat cannot verify the local Git branch or working tree.
- **Collaboration system:** role-aware context loading is now defined for Design, Content & SEO, Implementation and QA. Roles may be combined and are guidance rather than permission gates; Aykhan remains Product Owner and final approval authority.
- **Design Lab governance:** the canonical recipe registry now carries advisory recommended placement/use and optional same-kind `supersedes` relationships. Approved Sections derives recipe IDs, guidance, active Workshop usage and pending replacement candidates from canonical sources. The validation script no longer hard-codes an approved-section count, so explicit approval is a normal lifecycle change.
- **Media:** `ω┇Media-Queue.md` is the sole operational media-production/acceptance queue, with one authoritative checkbox per asset and standalone prompts. The former `art-prompts.md` tracker has been retired.
- **Production:** production pages have not adopted the Workshop recipe contract. Section approval still does not authorize production migration.
- **Next action:** complete `RV-001` in a shell/browser-capable QA or Codex session, then resume iterative review of the two Workshop pages with Aykhan.

## Cross-role requests

None.

## Awaiting Aykhan

- Review/accept outstanding items in `ω┇Media-Queue.md` as they become relevant to page review.
- Explicitly approve individual section recipes only after reviewing their design in context; no recipe is approved by this collaboration-system change.
- Final brand/domain, production contact/legal facts, qualification evidence and Berlin travel policy remain future launch inputs tracked in `β┇Roadmap.md`.

## Pending repository verification

### RV-001 — v2.1.0 collaboration and Design Lab governance

- **Source state:** Drive changes were read back after writing; repository-shell evidence is not available in this Chat.
- **Verify:** run `npm run validate` from `ω┇Engine/`, then `git diff --check` and `git status --short` from the repository root.
- **Review:** open Page Workshop and Approved Sections in the local browser; confirm the Lab still renders at representative desktop/tablet/mobile widths and that no production route or visual output changed unexpectedly.
- **Contract checks:** confirm recipe guidance fields compile, `supersedes` rejects unknown/self/cross-kind/cyclic relationships, Approved Sections exposes pending replacement candidates, derived Workshop usage still works, and changing a recipe to `approved` no longer requires editing a fixed-count assertion.
- **Scope:** validate the existing v2.1.0 change first. Do not redesign, rewrite content or refactor unrelated code unless an actual failure requires it.

## Recent work

### 2026-09-10 — ChatGPT — v2.1.0 role-aware collaboration and Design Lab governance

- **Objective:** make collaboration modular enough for iterative Project Chats and bounded coding-agent work without creating hard discipline silos or another source-of-truth system.
- **Changes:** renamed the three canonical docs; added four role contracts; rewrote `AGENTS.md` as the shared worker/router contract; replaced the temporary art-prompt tracker with `ω┇Media-Queue.md`; added Design Lab recipe guidance/replacement metadata, same-kind replacement validation, Approved Sections guidance/usage/replacement-candidate presentation and generic lifecycle validation; clarified routine approval, production-composition and style-source contracts.
- **Decisions:** workers select the minimum useful roles when Aykhan does not assign them and may add roles to finish work; environment limits evidence rather than permission to work; active section usage is derived; recommendation metadata is advisory; only Aykhan approves; routine approval changes registry state and runs existing validation rather than rewriting tests; non-breaking refinements may retain a recipe ID while material contract changes use a same-kind experimental replacement, migrate intended consumers after approval, and deprecate the predecessor only after migration.
- **Validation performed here:** all changed Drive documentation and source files were read back after writing; the local copy of `validate-workshop.mjs` passed JavaScript syntax checking. No repository `npm run validate`, browser review, Git diff/status, commit, push or deployment check was available in this Chat.
- **Next action:** complete `RV-001`, then continue the Workshop design-review cycle.

## Maintenance

Keep this file live and small. Cross-role and repository-verification items exist only while open; remove resolved entries after preserving any durable consequence in `α┇Project.md`, priority in `β┇Roadmap.md`, or implementation source. Keep only brief recent work here; Git is the historical record.
