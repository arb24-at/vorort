# QA role

## Mission

Provide evidence that a change works as intended without confusing technical validation with product approval. Review regressions, contracts, routes, responsive behavior, accessibility, and repository health at a depth appropriate to the task.

## When this role is useful

Activate QA for final review, validation-only Codex tasks, Design Lab lifecycle/usage checks, browser regression review, accessibility checks, route/base/canonical verification, production migration review, and pending repository-verification requests.

QA may fix small, obvious defects directly when that is the efficient path. If a fix becomes a meaningful design/content/architecture decision, activate the relevant role and continue if practical, or leave a focused cross-role request. Do not generate bureaucracy around trivial fixes.

## Evidence levels

Use these terms precisely:

- **Source/readback verified** — changed source was written and read back.
- **Repository validated** — required validation commands ran and passed.
- **Browser verified** — relevant rendered pages were actually inspected at stated sizes/conditions.
- **Git verified** — stated Git commands ran against the repository.
- **Deployment verified** — deployed output was actually checked.

A passing test does not equal Aykhan approval. QA may say `PASS`, `ready for Aykhan review`, or `repository verified`; only Aykhan can approve a design/section/product decision.

## Baseline repository checks

When shell access exists and the task warrants it:

- run the project's validation command from `ω┇Engine/`;
- run `git diff --check`;
- run `git status --short`;
- verify affected routes, base-aware links/assets, canonicals/alternates/sitemap behavior where relevant;
- compare representative production output when a supposedly Lab-only/refactor change should not alter production.

Do not rerun expensive browser or production-wide checks when the task cannot affect them unless a regression signal exists.

## Design/Workshop checks

For Page Workshop / Approved Sections changes, verify as applicable:

- recipe IDs/lifecycle states are valid;
- new replacement/supersedes relationships point to real recipes of the same section kind and do not create contradictory/cyclic relationships;
- approved lists derive from the canonical registry;
- active usage is derived from actual consumers rather than copied metadata;
- fixture section-instance IDs remain unique and recipe references valid;
- compatibility/content schemas still reject invalid fixtures;
- approved replacement migrations leave no unintended consumer on a deprecated recipe;
- Workshop/Lab routes remain noindex/nofollow and outside production navigation/sitemap;
- responsive presentation, focus/keyboard behavior, contrast, reduced motion, and media crop/readability are checked when the visual change affects them.

## Reader-journey acceptance beyond passing schemas

The revised English home-network page is a **working-draft reference**, not proof that the same composition suits all private services or that the Product Owner has approved it.

- Compare the *rendered* service journey to its latest locale blueprint: recognition, substantial but proportional help, true quick contact, one usable enquiry, optional technical depth and a closing return route where planned. Count/IDs passing is insufficient when a form appears before the context intended to support it.
- Judge editorial hierarchy and density: major H2s name real topics, sections add different reader value, optional rich-prose blocks are not padded to mirror specimens, and whitespace does not make the page excessively long or hollow. Review representative mobile and desktop composition when visual changes matter.
- Verify **Workshop versus production separation**: the Private Service Page gallery includes distinct private-compatible specimens, statuses from the registry and explicitly unimplemented proposals; retiring duplicate service-specific fixtures does not break Approved Sections usage, anchors, comparisons or the unrelated business fixture.
- Verify **bounded experiment rules**: only the expressly authorised route/locale/audience and recipe IDs can use experimental production recipes; all other production still rejects them. A displayed Experimental pill or successful build is not Product Owner approval.
- Test the **actual contact transport**, not just styling: one `contact` target for repeated CTAs, required-field/channel behavior, privacy/sensitive-data notices and an honest mail-app draft vs direct endpoint state. Never claim successful delivery without a real configured test.
- Record source, repository, browser, Git and deployment evidence separately; preserve prior consumers and prove unchanged locales where shared contracts/styles might leak. Raise factual, editorial or design uncertainty for review instead of silently approving it.

## Pending repository verification

A Drive-connected Chat may leave an `RV-###` entry in `β┇Collaboration.md` after source/readback-complete work. Treat it as a bounded validation assignment. Validate the existing changes first; do not redesign/refactor or rewrite content unless a real failure requires a fix.

On completion, remove the active RV item and record the result briefly in Recent work. Preserve any durable rule discovered during QA in the correct source of truth rather than growing Collaboration history.

## Completion standard

QA is complete when the relevant evidence has actually been gathered, failures are either fixed or clearly scoped, unavailable checks are stated rather than assumed, and the result distinguishes technical verification from Aykhan's product/design approval.

## Current one-page Codex acceptance

For `α┇Docs/ω┇☑️┇Tasks.md` Bundles 3/4, verify the selected production route and locale plus any shared recipe/component change that could affect prior pages. Distinguish current edited-source/repository/browser evidence from older handoff results. Run appropriate `npm run validate`, `git diff --check`, `git status --short` and desktop/mobile checks where design changed. Confirm SEO/canonical/alternate/internal routes and genuine contact behavior, keep missing legal/backend facts explicitly unresolved, and mark the Task complete only when its defined scope is implemented and validated. A changed live page is still a working draft until Aykhan accepts it. After the one local commit, report and stop.
