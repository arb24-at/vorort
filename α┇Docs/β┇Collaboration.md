# VorOrt collaboration handoff

Last updated: 2026-09-22

## Current handoff

- **Version and branch:** `2.2.14` in root `AGENTS.md`; local branch `main` was Git verified for Task 1C. The current editorial explanation experiments are Drive source/readback work; no new repository validation, browser verification, Git commit, push or deployment is claimed.
- **Private Workshop:** the English home-network prototype now has twelve sections: editorial hero, five-topic index, Wi-Fi options, the new rich editorial-prose Wi-Fi chapter, refined Ethernet connection path, three editorial-media chapters, four-stage process, approved always-visible editorial Q&A, retained experimental accordion FAQ for comparison, a redesigned always-visible enquiry form, and shared Workshop footer chrome. Content uses the repository's English research and canonical service facts; scope boundaries sit beside their relevant topics.
- **Recipes:** `process.staged-path`, `faq.editorial-answers`, `explanation.editorial-media`, `explanation.options-guide`, `explanation.editorial-prose` and `explanation.connection-path` are approved. `faq.accordion` remains experimental and is superseded by the approved editorial Q&A recipe; it has not been deprecated because Workshop comparison/migration is still active. Other newer private recipes and `contact.enquiry` remain experimental; the enquiry recipe now has an explicit authoring contract and a Design-Lab-specific always-visible form treatment. The options guide and rich editorial prose remain separate recipes that can be used independently or consecutively. `explanation.editorial-media` keeps its simpler one-image chapter contract, while the connection-path approval covers the full section composition and semantic path; its exact schematic artwork remains replaceable/refinable.
- **Media:** P1–P6 reused with explicit image dimensions and responsive WebP derivatives; masters unchanged. P1 remains the accepted working reference, P2–P6 await Aykhan's acceptance, P7–P9 are deferred. Placement notes remain in `ω┇Media-Queue.md`.
- **Verification:** Task 1C passed `npm run validate`: 31 HTML pages, 23 sitemap URLs, 46 invalid-content cases, 86 invalid approved-guidance cases, experimental guidance migration/promotion, replacement/lifecycle/compatibility and derived usage checks. Built approval count now matches the registry instead of a stale zero-approval assertion. Base-aware internal links resolve; Lab robots/sitemap separation passes. `git diff --check` passed and `git status --short` was reviewed.
- **Browser review:** Task 1C reviewed at 1440×1000 and 390×844 in collapsed and expanded states. Native guidance disclosures start closed, support Enter/Space with visible focus, preserve readable hierarchy and do not alter FAQ disclosure state. No horizontal overflow at either width. Desktop height is 3,056px collapsed versus 4,863px with both guidance panels open (about 37% shorter); specimen heights remain unchanged. All pre-existing authoring/usage markup was compared with HEAD and preserved apart from indentation.
- **Next action:** review the new `contact` (`contact.enquiry`) closing section and whole-page Workshop footer together, then refine/approve the form if desired. Task **2A** adds Lab-only recipe labels with a subtle green/mint ID tint for approved recipes, and **2B** adds the `recipe.id — “Visible section heading”` contents navigator. Task **1D** final QA should wait until Aykhan is ready to close the library pass. Historical RV-001 remains open for its broader review scope.

## Cross-role requests

None.

## Awaiting Aykhan

- Review/accept outstanding items in `ω┇Media-Queue.md` as they become relevant to page review.
- Review the v2.2.0 private prototype: hero balance, topic navigation, chapter rhythm, diagram clarity and mobile/contact composition. Remaining recipe approvals stay explicit, separate Aykhan decisions.
- Final brand/domain, production contact/legal facts, qualification evidence and Berlin travel policy remain future launch inputs tracked in `β┇Roadmap.md`.

## Pending repository verification

### RV-005 — v2.2.14 contact and Workshop footer pass

- **Source state:** Drive source/readback work makes the Workshop `contact.enquiry` form always visible in a new split closing composition, adds explicit experimental authoring guidance, renders shared Workshop-only footer chrome after full page canvases (but not Approved Section specimens), and documents the global blueprint-not-template philosophy in Project plus the Approved Sections intro.
- **Verify:** run Workshop/registry validation plus `git diff --check` and `git status --short`. Confirm `WorkshopFooter.astro` and `contact-footer.css` resolve, `WorkshopCanvas` omits footer chrome when rendering subsection specimens, the mailto form still compiles, and no production component was modified.
- **Browser review:** inspect the home-network Workshop at representative desktop/mobile widths. Check form labels/focus, field wrapping, direct contact links, footer hierarchy/legal links, no horizontal overflow, and a clean transition from the form into the footer.

### RV-004 — v2.2.13 editorial explanation experiments

- **Source state:** Drive source/readback work adds and approves `explanation.editorial-prose`, approves `explanation.options-guide` and `explanation.connection-path`, refines the connection-path into intro → full-width path → practical planning composition, expands `explanation.editorial-media` guidance/callout variation, removes its visible image captions, and queues Design Lab recipe IDs/approval tint plus Workshop contents navigation as Tasks 2A/2B.
- **Verify:** run the Workshop/registry validation plus `git diff --check` and `git status --short`. Confirm the new block schema and renderer compile, new stylesheet import resolves, existing editorial-media fixtures still validate after caption removal, and note tones do not alter unrelated consumers.
- **Browser review:** inspect `wifi-coverage`, `wifi-planning-notes`, `ethernet-cabling`, `home-office`, `nas-storage` and `network-planning` at representative desktop/mobile widths. Check the connection section's new post-diagram planning layer feels complete, rich-prose tables stay contained, side media collapses cleanly, alternating editorial-media composition remains readable, and no visible image-caption line remains under those three chapter images.

### RV-003 — v2.2.10 editorial Q&A Workshop candidate

- **Source state:** new `faq.editorial-answers` recipe, renderer, stylesheet and home-network fixture instance were written and read back through Drive; the existing accordion remains immediately after it for side-by-side page review.
- **Verify:** run the appropriate Workshop validation plus `git diff --check` and `git status --short`. Confirm the new recipe/fixture schema compiles, its renderer is discovered, existing image paths resolve, and no production route changes.
- **Browser review:** inspect the home-network Workshop at representative desktop and mobile widths. Confirm every answer is visible without disclosure controls, question headings remain readable, optional illustrations do not dominate the prose, and the new section sits immediately before the accordion comparison section without overflow or broken spacing.

### RV-001 — v2.1.0 collaboration and Design Lab governance

- **Source state:** originally verified through Drive; subsequent repository checks are recorded below.
- **Repository checks resolved in Task 1A:** `npm run validate`, `git diff --check` and `git status --short` ran successfully. Browser review below remains pending.
- **Remaining review:** broader Page Workshop/tablet review and production visual regression checks remain pending. Approved Sections desktop/mobile review was completed in Task 1B; this does not close the wider historical request.
- **Contract checks resolved in Task 1A:** guidance builds successfully, `supersedes` rejects unknown/self/cross-kind/cyclic relationships, derived Workshop usage passes, and approval checks use the canonical registry rather than a fixed count. Browser confirmation of replacement-candidate presentation remains pending.
- **Scope:** validate the existing v2.1.0 change first. Do not redesign, rewrite content or refactor unrelated code unless an actual failure requires it.

## Recent work

### 2026-09-22 — ChatGPT — v2.2.14 contact/footer Workshop pass

- Documented approved recipes as structural blueprints rather than frozen specimens: only explicitly fixed semantic/design constraints are mandatory; copy, imagery, density, treatments and element order may vary where guidance allows so Content & SEO can shape sections around meaning without cloning pages.
- Rebuilt the experimental Workshop `contact.enquiry` renderer as an always-visible closing form with direct phone/WhatsApp/email routes, safety/consent guidance and service-specific prompt overrides; production `ContactSection.astro` remains untouched.
- Added Workshop-only shared footer chrome after full page canvases. It is intentionally not a section recipe and is suppressed for Approved Sections specimen canvases. Added dedicated contact/footer styles and queued repository/browser verification under RV-005.

- 2026-09-22 — Design: approved the options guide, rich editorial prose and connection-path recipes after Aykhan review; strengthened the connection-path lower planning composition and clarified that options-guide/editorial-prose are separate recipes that may be paired.

### 2026-09-22 — ChatGPT — v2.2.13 editorial prose polish and editorial-media approval

- On Aykhan's explicit approval, promoted `explanation.editorial-media` to `approved`. Its contract remains intentionally simple: one focused prose chapter, one informative image with no visible caption, optional callout, and automatic left/right rhythm across repeated uses.
- Polished the experimental `explanation.editorial-prose` renderer/styles after screenshot review: internal headings now share a clear visual family while banded headings read as major chapter breaks and soft-filled headings as quieter subsection transitions; subheading numbering is sequential rather than inherited from block positions.
- Reduced dead space by using a 12-column editorial grid and allowing a callout followed by right-positioned media to share one row on desktop. Changed the filled callout away from the same dark treatment used by banded headings, tightened vertical rhythm and table spacing, and kept tablet/mobile layouts in a single readable source order.
- Drive source changes were read back after writing. Repository validation, browser verification, Git commit, push and deployment remain pending under RV-004.

### 2026-09-22 — ChatGPT — v2.2.13 completion audit

- Audited the full request after the initial Drive pass. Confirmed Task 2B exists, the three editorial-media instances have no visible image captions, optional quiet/solid callouts are part of the recipe guidance, the connection-path renderer was materially refined, and the new rich editorial-prose experiment sits directly after `wifi-coverage`.
- Corrected one fragility found in the audit: editorial-media left/right alternation now counts only editorial-media siblings, so inserting unrelated sections earlier in the Workshop does not unexpectedly flip the intended right/left/right rhythm. Added a quiet/transparent callout to `wifi-planning-notes` so the Workshop now demonstrates quiet, solid and outline callout treatments alongside banded/plain subheads, two-column prose, two images and a compact table.
- These remain Drive source/readback changes under the same uncommitted v2.2.13 logical patch. Repository validation, browser verification, Git commit, push and deployment are still pending under RV-004.

### 2026-09-22 — ChatGPT — v2.2.13 editorial explanation experiments

- Added Task 2B for a live Workshop contents dropdown using `recipe.id — “Visible section heading”` entries derived from the current fixture/registry.
- Refined `explanation.connection-path` into a more complete source → route → destinations path map with clearer stages, connector logic and destination cards.
- Added experimental `explanation.editorial-prose` and a substantial `wifi-planning-notes` Workshop instance demonstrating normal prose, two-column text, styled subheads, quiet/solid/outline callouts, left/right media and a compact table.
- Expanded `explanation.editorial-media` authoring guidance: repeated uses should alternate image/text sides, callouts are optional and may be quiet or solid, richer block structures should move to editorial-prose, and the standard recipe no longer shows a visible caption under its image.
- These are Drive source/readback changes only; repository validation, browser verification, Git commit, push and deployment remain pending under RV-004.

### 2026-09-22 — ChatGPT — v2.2.12 Design Lab recipe identifiers task

- Added **Task 2A** to the universal task board: every rendered Design Lab section should expose a subtle top-left label with its canonical recipe ID so Aykhan can identify/search candidates directly in Page Workshop and section specimens.
- The task explicitly requires a shared Lab-only decorator/wrapper and forbids leaking the identifier into reusable production renderer markup, customer-facing styles, accessibility text or production output.
- This is a Drive documentation/task-board change only; no Astro implementation, repository validation, browser verification, Git commit, push or deployment is claimed.

### 2026-09-22 — ChatGPT — v2.2.11 editorial Q&A approved

- On Aykhan's explicit approval, promoted `faq.editorial-answers` to `approved` in the canonical recipe registry. Its approved contract keeps all questions/answers visible, supports three to six article-style Q&A chapters, and allows optional explanatory media without disclosure controls.
- `faq.accordion` remains experimental and superseded but not deprecated while Workshop comparison/migration is still active. Task 1D expectations were updated to the new approval state.
- Drive source changes were read back after writing. Repository validation, browser verification, Git commit, push and deployment have not been run for this approval patch.


### 2026-09-22 — ChatGPT — v2.2.10 editorial Q&A layout refinement

- Refined the experimental `faq.editorial-answers` renderer/styles after Aykhan review: removed the repeated question-left/answer-right composition, reduced heading scale and vertical spacing, and varied optional illustration placement across media-bearing answers while keeping all content always visible.
- This remains part of the same uncommitted v2.2.10 Workshop candidate. Source edits are Drive/readback work only until repository/browser validation is run.

### 2026-09-22 — ChatGPT — v2.2.10 editorial Q&A Workshop candidate

- Added experimental `faq.editorial-answers` as an always-visible article-style Q&A recipe that supersedes the accordion candidate without deprecating it. The section supports three to six substantial visible question chapters, one to three prose paragraphs per answer and optional explanatory media; no answer is collapsible.
- Added `EditorialAnswers.astro` and dedicated editorial-Q&A styling, then inserted a six-question home-network instance immediately before the retained accordion. The candidate reuses existing P2, P5 and P4 Workshop artwork for selected answers so Aykhan can compare an authored long-form rhythm against the accordion in the same page.
- Drive source changes were read back. Repository validation, browser verification, Git commit, push and deployment remain pending under RV-003.

### 2026-09-22 — ChatGPT — v2.2.9 FAQ approval withdrawn

- On Aykhan's explicit review, returned `faq.accordion` from `approved` to its default experimental lifecycle state. The recipe and its authoring guidance remain available in Workshop contexts, but it must no longer appear in Approved Sections or be eligible for future approved-only production use.
- Updated Task 1D expectations to the current approval state and left final QA pending while Design explores an editorial, article-style Q&A replacement. This Drive-connected change is source/readback work only; no repository validation, browser review, Git commit, push or deployment is claimed.

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
