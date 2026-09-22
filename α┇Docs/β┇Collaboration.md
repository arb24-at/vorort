# VorOrt collaboration handoff

Last updated: 2026-09-22

## Current handoff

- **Version and branch:** `2.2.8` in root `AGENTS.md`; local branch `main` is Git verified. Task 1C is implemented, repository validated and browser verified; no push or deployment was performed.
- **Private Workshop:** the English home-network prototype now has ten sections: editorial hero, five-topic index, Wi-Fi options, Ethernet connection diagram, home office, NAS, planning/troubleshooting, four-stage process, eight native FAQs and enquiry. Content uses the repository's English research and canonical service facts; scope boundaries sit beside their relevant topics.
- **Recipes:** `process.staged-path` and `faq.accordion` are now explicitly approved for service pages across private and business Workshop contexts. The newer private recipes, `contact.enquiry`, and retained predecessor recipes remain experimental; nothing is deprecated.
- **Media:** P1–P6 reused with explicit image dimensions and responsive WebP derivatives; masters unchanged. P1 remains the accepted working reference, P2–P6 await Aykhan's acceptance, P7–P9 are deferred. Placement notes remain in `ω┇Media-Queue.md`.
- **Verification:** Task 1C passed `npm run validate`: 31 HTML pages, 23 sitemap URLs, 46 invalid-content cases, 86 invalid approved-guidance cases, experimental guidance migration/promotion, replacement/lifecycle/compatibility and derived usage checks. Built approval count now matches the registry instead of a stale zero-approval assertion. Base-aware internal links resolve; Lab robots/sitemap separation passes. `git diff --check` passed and `git status --short` was reviewed.
- **Browser review:** Task 1C reviewed at 1440×1000 and 390×844 in collapsed and expanded states. Native guidance disclosures start closed, support Enter/Space with visible focus, preserve readable hierarchy and do not alter FAQ disclosure state. No horizontal overflow at either width. Desktop height is 3,056px collapsed versus 4,863px with both guidance panels open (about 37% shorter); specimen heights remain unchanged. All pre-existing authoring/usage markup was compared with HEAD and preserved apart from indentation.
- **Next action:** Tasks **1A–1C** are complete in `ω┇Tasks.md`. Stop here; final QA/refinement is **1D** and remains unstarted until Aykhan explicitly assigns it. Historical RV-001 remains open for its broader review scope.

## Cross-role requests

None.

## Awaiting Aykhan

- Review/accept outstanding items in `ω┇Media-Queue.md` as they become relevant to page review.
- Review the v2.2.0 private prototype: hero balance, topic navigation, chapter rhythm, diagram clarity and mobile/contact composition. Remaining recipe approvals stay explicit, separate Aykhan decisions.
- Final brand/domain, production contact/legal facts, qualification evidence and Berlin travel policy remain future launch inputs tracked in `β┇Roadmap.md`.

## Pending repository verification

### RV-001 — v2.1.0 collaboration and Design Lab governance

- **Source state:** originally verified through Drive; subsequent repository checks are recorded below.
- **Repository checks resolved in Task 1A:** `npm run validate`, `git diff --check` and `git status --short` ran successfully. Browser review below remains pending.
- **Remaining review:** broader Page Workshop/tablet review and production visual regression checks remain pending. Approved Sections desktop/mobile review was completed in Task 1B; this does not close the wider historical request.
- **Contract checks resolved in Task 1A:** guidance builds successfully, `supersedes` rejects unknown/self/cross-kind/cyclic relationships, derived Workshop usage passes, and approval checks use the canonical registry rather than a fixed count. Browser confirmation of replacement-candidate presentation remains pending.
- **Scope:** validate the existing v2.1.0 change first. Do not redesign, rewrite content or refactor unrelated code unless an actual failure requires it.

## Recent work

### 2026-09-22 — Codex — v2.2.8 Task 1C authoring disclosures

- Wrapped each dense authoring/usage area in one native disclosure, closed by default, with a labelled summary, native triangle and explicit focus styling. Recipe identity, context and full rendered examples stay visible; all contract, lifecycle/replacement and usage information remains inside the expanded panel. No JavaScript was added.
- Full `npm run validate` and Git diff/status checks passed. Desktop/mobile collapsed and expanded states, keyboard activation/focus, specimen sizing and independence from FAQ disclosure state were verified as recorded above. Task 1C is checked complete; 1D remains unstarted.

### 2026-09-22 — ChatGPT — v2.2.7 Approved Sections density follow-up

- After Aykhan reviewed the completed Task 1B screen, inserted a new **Task 1C** before QA: keep live section specimens visible while collapsing the dense authoring/usage contract by default using an accessible native disclosure.
- Renumbered final QA/refinement to **Task 1D** and updated role allocation accordingly. This change only refines the universal task board/handoff; no Astro source, browser output, repository validation, Git commit, push or deployment is claimed.

### 2026-09-22 — Codex — v2.2.6 Task 1B visual section library

- Rebuilt Approved Sections around bounded real examples, canonical authoring guidance, compatibility, lifecycle/replacement state and derived Workshop usage. Each specimen uses the existing `WorkshopCanvas` renderer path with content from the first actual consumer in stable loader order; no duplicated samples, renderer markup or client framework were added.
- Full `npm run validate` and Git diff/status checks passed. Browser verified at 1440×1000 and 390×844, including readable specimens/guidance, no horizontal overflow and mobile FAQ keyboard/focus behaviour. No production content, section implementation or approval state changed.
- RV-002 is resolved: both approved recipes appear, each with derived private/business usage. Task 1B is checked complete; final QA/refinement in 1C remains unstarted. Current approved recipes both have consumers; future unused approvals fail with an explicit example requirement rather than silently inventing fallback content.

### 2026-09-22 — Codex — v2.2.5 Task 1A authoring contract

- Added canonical `authoringGuidance` with all eight requested guidance dimensions and concrete process/FAQ guidance. Approved recipes require complete, non-blank guidance; experimental recipes may remain incomplete. Existing content schemas, lifecycle, compatibility, replacement rules and production-adoption policy are preserved.
- Added rejection and migration/promotion coverage; replaced the obsolete zero-approved assertion with a registry-derived built-count check. Full validation and Git diff/status checks passed as recorded above. Task 1A is checked complete; no library UI, renderer, fixture or production-page changes were made, and 1B/1C remain unstarted.

### 2026-09-22 — ChatGPT — v2.2.4 universal staged task board

- Replaced the job-specific Approved Sections worklist with universal `ω┇Tasks.md`, using stable numbered tasks and substantial lettered stages so Aykhan can assign work such as **Task 1A** without asking Codex to consume a whole multi-stage job at once.
- Task 1 now has three commit-sized stages: 1A canonical authoring contract, 1B visual Approved Sections library, and 1C final QA/refinement. Only roles with actual future work are populated; unrelated role fields are left blank.
- Root agent guidance now tells workers to load the task board only when a numbered stage is assigned or the handoff points there. Drive source changes were read back; no repository validation, browser review, Git commit, push or deployment is claimed.

### 2026-09-22 — ChatGPT — v2.2.2 first Approved Sections lifecycle test

- On Aykhan's explicit request, approved `process.staged-path` and `faq.accordion`; both are media-independent, already used in the private and business Workshop fixtures, and keep the existing semantic/content contracts unchanged.
- Updated only lifecycle status in the canonical recipe registry plus project version/handoff metadata. No production adoption, copy migration, browser verification, Git verification, commit, push or deployment is claimed.

### 2026-09-22 — ChatGPT — v2.2.1 usage-efficient agent/tool policy

- Added proportional validation and tool-use guidance to `AGENTS.md` for rate-limited agents such as Codex: targeted checks during iteration, broader validation at meaningful milestones, browser/screenshots only when they materially reduce uncertainty, and explicit permission to use deeper testing whenever the task genuinely requires it.
- This was a documentation-only governance patch. Source/readback verification is expected; no application/browser/Git validation is implied by the change itself.

### 2026-09-11 — Codex — v2.2.0 private home-network Workshop

- Combined Design, Content & SEO, Implementation and QA pass. Replaced the private gallery, repeated situations and outcome/tag panel with substantial service chapters, a linked visual index and a labelled connection diagram.
- Added strict semantic contracts and negative cases for topic targets, paragraph blocks, labelled media, comparisons, connection labels and contact copy; usage remains derived from fixtures. Production contact defaults and email-preparation behavior remain unchanged.
- Completed repository and browser checks described above, corrected the discovered private disclosure resize failure, and handed the experimental result back for visual review. Historical RV-001 is not claimed resolved by this implementation pass.

## Maintenance

Keep this file live and small. Cross-role and repository-verification items exist only while open; remove resolved entries after preserving any durable consequence in `α┇Project.md`, priority in `β┇Roadmap.md`, or implementation source. Keep only brief recent work here; Git is the historical record.
