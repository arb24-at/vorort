# VorOrt task board

Last updated: 2026-09-22

## Purpose

This is the project's universal execution task board for bounded work that benefits from being split into commit-sized stages. It is not a second roadmap, approval registry, media queue, or source of truth. Durable product decisions remain in `α┇Project.md`, priorities in `β┇Roadmap.md`, live handoff/verification in `β┇Collaboration.md`, media production in `ω┇Media-Queue.md`, and implementation truth in source.

Use this board when a task is too large or risky to hand to Codex as one uninterrupted job.

## Working rules

- Top-level work uses stable numbers: **Task 1**, **Task 2**, **Task 3**, and so on.
- Each task is split into substantial lettered stages: **1A**, **1B**, **1C**. A stage should be large enough to justify one coherent commit, but small enough that a coding agent can normally finish, validate, and commit it within one working session.
- Aykhan may assign a single stage directly, for example: **“Work on Task 1A.”**
- When a stage is assigned, work only that stage unless Aykhan explicitly asks to continue. Do not silently begin the next stage.
- Do not split a stage into micro-tasks or repeated tiny commits. Internal bullet points are acceptance criteria for the stage, not separate stopping points.
- For coding agents with Git access, a completed stage should normally end with the applicable validation, its stage checkbox changed to `[x]`, and one coherent commit using the project version/commit rules in root `AGENTS.md`.
- If a stage cannot be completed within the available session/usage, leave its checkbox `[ ]`, do not claim completion, and hand back the exact remaining work. Prefer stopping before starting the next stage.
- Only populate roles that genuinely have work to do. Leave unrelated role fields blank rather than manufacturing tasks for every role.
- Completed tasks may remain here while useful for immediate sequencing; move durable outcomes to their proper source of truth rather than growing this file into project history.

## Task template

### Task N — Title

**Goal:** One coherent outcome.

**Roles**
- Design:
- Content & SEO:
- Implementation:
- QA:

- [ ] **NA — First substantial stage**
  - Scope and acceptance criteria.
  - Validation/finish condition.
  - Stop after this stage and commit.

- [ ] **NB — Second substantial stage**
  - Scope and acceptance criteria.
  - Validation/finish condition.
  - Stop after this stage and commit.

---

## Task 1 — Approved Sections visual library and authoring contract

**Goal:** Turn Approved Sections from a text-only registry summary into a practical visual library that shows the real section design and clearly tells future content authors what is fixed, what may vary, and when the recipe no longer fits.

**Roles**
- Design:
- Content & SEO:
- Implementation: 1A, 1B, 1C
- QA: 1D

- [x] **1A — Add the canonical authoring contract**
  - Extend the canonical recipe definition in `ω┇Engine/src/design-system/section-recipes.ts` with one compact human-guidance structure. Keep existing Zod schemas as the machine-enforced content contract; do not create a second metadata file or separate approved-section catalogue.
  - The guidance must cover: content shape, typical content range/density, **Fixed**, **Flexible**, **Needs Design review**, media requirements, responsive behaviour, and recipe-specific accessibility guidance. Validation must require complete guidance before a recipe can be `approved`, while experimental recipes may remain incomplete during migration.
  - Populate the two currently approved recipes with concrete guidance:
    - `process.staged-path`: exactly four sequential stages remain fixed; eyebrow/title/intro and stage wording/detail may vary; typical use is a short intro plus four concise stage explanations; request Design review when the relationship is not sequential, needs branching/loops, or genuinely needs a different number of stages; no media requirement; responsive layouts may reflow but must preserve sequence and readable real-text labels.
    - `faq.accordion`: native independent disclosure items remain fixed; question count/order/wording and answer depth may vary; a practical normal range is several focused questions with short paragraph answers rather than article-length content; request Design review when answers need complex nested structure, rich media, tables, categories, or another information relationship; no media requirement; keyboard/native disclosure semantics and meaningful real-text questions remain part of the contract.
  - Preserve existing lifecycle, audience/page-type compatibility, `supersedes`, derived usage, and production-separation rules. Add/adjust focused validation coverage as needed.
  - Finish condition: run the appropriate repository validation plus `git diff --check` and `git status --short`; mark **1A** complete only when the contract is implemented and validated. Stop and make one coherent commit before 1B.

- [x] **1B — Build the visual Approved Sections library**
  - Rework `ω┇Engine/src/pages/design-lab/approved.astro` and Design Lab styling so each approved recipe contains a clearly bounded **Rendered example** showing the real Astro section implementation with representative content from an actual Workshop consumer. Reuse the same renderer/content path used by Workshop pages; do not duplicate section markup or maintain a second sample-content copy unless a deterministic fallback is genuinely required for an approved recipe with no current usage.
  - Make the section boundary visually obvious so a reviewer can see exactly what belongs to the approved recipe. Keep recipe identity outside the specimen. The page should feel like a visual design-system library rather than developer documentation.
  - Beside or below the specimen, show the useful human contract in a clear hierarchy: purpose/use, **Fixed / Flexible / Needs Design review**, content shape/range, supported audiences/page types, recommended placement, media/responsive/accessibility guidance, lifecycle/replacement state, and derived Workshop usages. Keep renderer filenames/raw Zod implementation details out of the primary UI.
  - Preserve `noindex, nofollow`, registry-derived approval, derived usage, base-aware links, static-first behaviour, and the separation between approval and production adoption. Do not add React solely for this.
  - Finish condition: validate the repository and inspect the affected Approved Sections page at representative desktop and mobile widths. Mark **1B** complete only when both approved recipes render as real, readable specimens with their authoring contracts. Stop and make one coherent commit before 1C.

- [x] **1C — Collapse dense authoring details by default**
  - Keep each recipe's identity, approval state, short purpose/use, compact context metadata, and the full **Rendered example** visible. Do not collapse the specimen itself: the page must still show exactly what the approved section looks like without extra interaction.
  - Move the dense authoring/contract area below each specimen into one clearly labelled disclosure such as **Authoring guidance & usage**. It must be collapsed by default so the library scans visually first, especially once more approved recipes are added.
  - Use native HTML disclosure behaviour (`<details>` / `<summary>`) unless there is a demonstrated reason not to. The summary should have an obvious open/closed affordance and visible keyboard focus; no client framework or unnecessary JavaScript.
  - When expanded, preserve all existing guidance and derived information without loss: **Fixed / Flexible / Needs Design review**, content shape/range, media, responsive and accessibility guidance, lifecycle/replacement details, and Workshop usage links. Keep the internal information hierarchy readable rather than turning the disclosure into one undifferentiated text block.
  - Review the collapsed and expanded states at representative desktop and mobile widths. Avoid layout jumps, horizontal overflow, clipped specimen content, or interaction ambiguity with the FAQ specimen's own disclosure controls.
  - Finish condition: run the appropriate repository validation plus `git diff --check` and `git status --short`; mark **1C** complete only when the default page is materially shorter and more visual while every contract detail remains accessible. Stop and make one coherent commit before 1D.

- [ ] **1D — Final QA and responsive refinement**
  - Verify that Approved Sections still derives only from the canonical registry, shows only recipes that are currently approved, and excludes experimental ones. At the start of this stage `process.staged-path`, `faq.editorial-answers`, `explanation.editorial-media`, `explanation.options-guide`, `explanation.editorial-prose` and `explanation.connection-path` are approved while `faq.accordion` remains experimental; specimen content must come from real Workshop consumers or the documented deterministic fallback.
  - Review desktop and mobile behaviour for specimen clipping, excessive width, collapsed/expanded guidance readability, visual hierarchy, and growth beyond two recipes. Check keyboard/focus behaviour for the authoring disclosures and any interactive specimen that is actually approved at that time; preserve native semantics where possible.
  - Confirm approved-recipe guidance validation fails cleanly when required authoring guidance is missing, Lab routes remain out of the sitemap/production navigation, and production pages have not changed unexpectedly.
  - Fix small defects discovered by QA within this stage; do not reopen the approved design/content model unless an actual failure requires it.
  - Finish condition: run `npm run validate`, `git diff --check`, and `git status --short`, record the evidence in the normal handoff, mark **1D** complete, and make one coherent commit if the stage changes repository state.

---

## Task 2 — Design Lab section review workflow

**Goal:** Make Design Lab section review faster: identify recipes immediately, jump to sections on long Workshop pages, and copy a clean screenshot of any rendered section for design/content review without affecting production output.

**Roles**
- Design:
- Content & SEO:
- Implementation: 2A, 2B, 2C
- QA:

- [x] **2A — Add subtle recipe-ID labels to Design Lab sections**
  - Add a small, deliberately low-emphasis label at the top-left edge of every rendered section in Design Lab that shows the exact canonical recipe ID, for example `faq.editorial-answers` or `explanation.editorial-media`. The label should be easy to read/copy when needed but visually quiet enough that it does not compete with the section itself.
  - Use lifecycle state as subtle Lab-only styling on that identifier: approved recipes get a barely visible pale green/mint background (and, if useful, a similarly restrained border), while experimental recipes remain neutral. The tint should make approved sections recognisable during review without turning the ID into a prominent badge or changing the section design.
  - Apply the identifier consistently to Page Workshop section instances and other Design Lab section specimens where the same rendered-section wrapper is used. Prefer one shared Lab-only wrapper/decorator rather than editing every section renderer.
  - The identifier is tooling chrome, not section content. It must never become part of reusable production renderer markup, production section CSS, production page output, sitemap content or customer-facing accessibility text. Keep it isolated to Design Lab rendering/shell code.
  - Do not use the page-instance `id` as the primary label. Show the canonical recipe ID so Aykhan can identify, search and discuss candidate recipes reliably. If an instance ID is useful for debugging, it may appear secondarily without obscuring the recipe ID.
  - Keep the label from changing the approved section's actual composition: it should not consume meaningful layout space, change section dimensions, block clicks, or overlap important content at desktop/mobile widths.
  - Finish condition: verify labels on representative private/business Workshop sections and Approved Sections specimens, confirm production routes contain no Design Lab ID label or Lab-only class/markup, run the appropriate repository validation plus `git diff --check` and `git status --short`, mark **2A** complete, and make one coherent commit.

- [ ] **2B — Add a Workshop section contents navigator**
  - Add a compact dropdown/disclosure to the Page Workshop toolbar that lists the sections on the current fixture in page order and lets Aykhan jump directly to any rendered section anchor without scrolling through the whole page.
  - Derive every entry from the current fixture and canonical recipe registry; do not maintain a second contents list. Display entries in the review-friendly form **`recipe.id — “Visible section heading”`**. Use the section content's visible title when present; for a section without one, use an honest fallback such as its instance ID or canonical recipe name rather than inventing copy.
  - Keep the existing Workshop-page picker separate: one control changes the Workshop page, the new contents control navigates within the current page. Prefer native links/disclosure so section navigation works without JavaScript and preserves normal URL hash/deep-link behaviour.
  - The navigator is Design Lab tooling only. It must not appear inside the reusable section canvas, responsive preview content, Approved Section specimen itself, production pages or customer-facing accessibility output.
  - Design for long pages: the menu should remain usable with roughly 10–20 sections, wrap long headings sensibly, and expose both recipe ID and visible heading clearly enough to search/discuss screenshots.
  - Finish condition: verify the navigator against both private and business Workshop fixtures, confirm every link lands on the intended section and the labels reflect live fixture/registry data, run the appropriate repository validation plus `git diff --check` and `git status --short`, mark **2B** complete, and make one coherent commit.

- [ ] **2C — Copy a rendered section screenshot to the clipboard**
  - Add one small Design-Lab-only **Copy screenshot** control to each rendered section wrapper so Aykhan can capture that single section and paste it directly into a design/content chat without manually cropping a full-page screenshot. Reuse the shared Lab wrapper introduced for 2A rather than editing individual section renderers.
  - Capture the section at the width in which it is currently being reviewed. In responsive preview modes, the copied image should represent that desktop/tablet/mobile composition rather than silently rendering a different full-width version. Crop to the section boundary only.
  - The exported image should include the Lab-only recipe identifier/approval tint from 2A because that context is useful when sharing screenshots, but must exclude the screenshot button itself and unrelated Design Lab toolbar/navigation chrome. Do not alter the underlying recipe markup just to make capture easier.
  - Implement capture entirely as Design Lab tooling. Use a small dependable DOM-to-PNG approach and the browser Clipboard API (`ClipboardItem` / `navigator.clipboard.write`) from the user's click/keyboard gesture. Do not introduce React or another client framework for this feature. Keep any capture dependency out of production page execution/output.
  - Handle real rendering details: wait for relevant images/fonts before capture, preserve backgrounds/borders/illustrations closely enough for design review, and avoid a scale choice that creates impractically huge images for long sections. Current Workshop media is expected to be same-origin; fail clearly rather than producing a blank/partial screenshot if an asset cannot be captured.
  - Feature-detect image clipboard support. On browsers where PNG clipboard writing is unavailable or rejected, provide a graceful fallback such as downloading the same PNG and show a concise status message instead of failing silently. Do not request clipboard permission before the user activates the control.
  - Make the control keyboard-operable with a useful accessible name and an `aria-live` success/error status such as **Copied section image**. The control must never appear in production HTML/CSS, customer-facing accessibility output, sitemap content, or reusable production renderer markup.
  - Finish condition: browser-test representative simple, image-heavy, long-form and interactive sections in Page Workshop at full-page and at least one constrained preview width; also verify an Approved Sections specimen if the shared wrapper exposes the control there. Confirm the copied/downloaded PNG has the right crop, includes the recipe ID context, excludes the capture control, and pastes successfully into a normal clipboard target on at least one supported browser. Run the appropriate repository validation plus `git diff --check` and `git status --short`, mark **2C** complete, and make one coherent commit.
