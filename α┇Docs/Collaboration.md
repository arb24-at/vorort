# VorOrt collaboration handoff

Last updated: 2026-08-30

## Current handoff

- Active branch: `main`.
- Current working state: the responsive connected-space redesign remains the foundation; the validated bilingual service collection and first expanded software-service pair are implemented locally on `main` and are not yet committed or pushed.
- Local validation: `npm run validate` passed on 2026-08-30 with 25 HTML pages, 23 sitemap URLs, zero missing `/vorort/` targets, and zero stale `/astro-demo/` paths.
- Local browser verification: German and English homepages plus the private computer/laptop and business network/workplace prototypes were reviewed at 1440×1000 and 390×844. No horizontal overflow or console errors were observed; mobile navigation, contact dock, anchored contact section, and progressive enquiry form were exercised successfully.
- Deployment state: `origin/main` is currently commit `2e60555`; the link-free npm configuration will reach GitHub Actions after the current changes are committed and pushed.
- Product-direction state: the homepage, two selected prototypes, and bilingual software installation/optimization expansion now demonstrate progressive technical depth, validated service content, intentional thematic states, differentiated private/business treatment, and one shared responsive system.
- Known blockers: final public brand, supplied telephone and WhatsApp values, email, postal/legal identity, exact qualification evidence, travel policy, real form backend, analytics, final imagery, and production domain remain unresolved or provisional. The clean install also reports nine dependency audit findings for later dependency-maintenance review.
- Recommended next action: review the German and English software-service pair; after acceptance, continue the roadmap priority order with Wi-Fi/home network before setup/data transfer and the business cloud pages.

## Reporting template

Add a new dated entry after material work. Do not rewrite older entries except to correct a factual error.

```markdown
## YYYY-MM-DD — Agent or contributor — Short objective

- Objective:
- Changes:
- Decisions:
- Validation:
- Blockers or required input:
- Recommended next action:
```

## Work log

## 2026-08-30 — Codex — Validated service architecture and software-service expansion

- Objective: begin the next roadmap phase from the existing launch information architecture, establish the maintainable bilingual service-content model, and complete one service pair for review before broader rollout.
- Changes:
  - Moved all German and English service records from the TypeScript data array into a schema-validated Astro content collection with stable translation IDs, distinct search intent, technical-depth levels, approved templates, thematic page states, SEO metadata, and conversion copy.
  - Added build-time checks for complete German/English pairs, matching audiences, unique service routes, and valid related-service references; fully expanded pages additionally require situations, process, proof, boundaries, FAQs, and related services.
  - Created substantial, independently authored German and English Software installation and optimization pages at `/leistungen/privatpersonen/software-installation-optimierung/` and `/en/services/private/software-installation-optimisation/`.
  - Extended the software theme below the hero through symptom states, use-case panels, a conflict-to-order process view, scoped work, competence evidence, truthful boundaries, service-specific FAQs, related-service links, and direct contact paths.
  - Connected the new service from the problem-led homepage, both private-service gateways, German and English navigation, and related private services.
  - Replaced the old German `/leistungen/reparatur-installation/` overview with a noindex static transition to the dedicated software page and removed it from the sitemap.
- Decisions: the first expanded page uses an informative private/home-office depth and the intent-led slugs `software-installation-optimierung` and `software-installation-optimisation`; existing computer/laptop and network/workplace pages remain the reference private and business prototypes; broader mechanical conversion is paused until Aykhan reviews this first expansion.
- Validation:
  - `npm run validate` passed with 25 generated HTML pages and 23 sitemap URLs.
  - All internal `/vorort/` links resolved and no stale `/astro-demo/` references were found.
  - The local German software-service route returned HTTP 200 and was opened in the Codex preview for review.
- Blockers or required input: no new decision blocks review of this slice. Final brand, production contact/legal facts, verified qualifications, travel policy, form backend, analytics, production domain, and final imagery remain unresolved.
- Recommended next action: review the German and English software-service pair and confirm the content depth, thematic treatment, and intent-led slugs; after acceptance, expand the same validated system to Wi-Fi/home network next.

## 2026-08-14 — Codex — Discovery, bilingual foundation, and engine organization

- Objective: understand the inherited IT-support prototype, establish a truthful Berlin demand-test foundation, repair GitHub Pages, add useful German/English service coverage, and leave a maintainable context system for future models.
- Changes:
  - Audited routes, components, styles, assets, content, SEO, deployment, build health, and the external Obsidian Chain.
  - Added a German-root/English-`/en/` architecture with separately authored copy and alternate-language metadata.
  - Added three dedicated private service pages and three business service pages in both languages.
  - Added optional English-service messaging, WhatsApp contact, an email-preparation form, Open Graph basics, and a generated sitemap.
  - Repaired the `/vorort/` GitHub Pages base and removed the duplicate deployment workflow; the bilingual commit was pushed as `eb7317c` and verified live.
  - Relocated the application into `ω┇Engine`, created the root agent contract and three-document system, added static-output validation, and updated the Pages workflow for the subdirectory.
  - Extracted useful visual principles from the standalone HTML concept and removed the redundant prototype.
- Decisions:
  - VorOrt remains internal; the public brand is undecided.
  - German stays at `/`, English at `/en/`, with stable translation IDs and independent editorial copy.
  - The external Chain remains high-level; `Roadmap.md` owns repository implementation phases.
  - Project context, website map, roadmap, and collaboration reporting are limited to three documentation files plus root `AGENTS.md`.
  - All Astro and npm work runs from `ω┇Engine`; the root has no wrapper package.
- Validation:
  - Fresh `npm ci` completed inside `ω┇Engine`.
  - `npm run validate` built 23 HTML pages and verified 22 sitemap URLs, all internal `/vorort/` targets, and no stale demo paths.
  - Development-server checks returned HTTP 200 for both language homes, representative private/business pages, a public asset, and the sitemap.
- Blockers or required input: real business identity/contact/legal data, chosen brand/domain, verified credentials, conversion backend, measurement stack, and a reviewed service/promise boundary.
- Recommended next action: publish and verify the engine reorganization, then begin Roadmap phase 2 with real business data and dependency/security maintenance.

## 2026-08-27 — Aykhan and Codex — Product and design direction

- Objective: replace generic prototype assumptions with a clear audience, offer, positioning, content-depth model, and thematic visual direction.
- Changes:
  - Recorded the demand-validation purpose, priority audiences, Berlin-wide on-site model, five initial service pillars, advertised exclusions, and individual-quote approach.
  - Defined progressive technical depth from a reassuring homepage entrance to detailed business and professional-service pages.
  - Replaced `BerlinTech Support` with `VorOrt` as the provisional public working name while keeping the final brand open.
  - Defined English-speaking technical service accurately and retained complete German and English sites.
  - Expanded the visual direction into a coherent, state-changing Berlin home/office environment that continues below hero sections through imagery, diagrams, icons, layout, motion, and interaction.
- Decisions: the desired position combines a trustworthy neighborhood expert, calm professional service, and modern small-business specialist; calls, WhatsApp, and an enquiry form are the primary contact paths; genuine qualifications, experience, and named expertise are progressively disclosed trust evidence.
- Validation: documentation-only change; reviewed against the supplied questionnaire answers and repository source-of-truth boundaries. Application validation was not required because no engine or deployment files changed.
- Blockers or required input: exact operating facts, credential names and evidence, experience wording, contact/legal identity, availability and response boundaries, form/measurement choices, final brand, and production domain.
- Recommended next action: collect the remaining factual inputs, then translate the direction into a page hierarchy, content brief, and visual prototype specification.

## 2026-08-27 — Aykhan and Codex — Operating facts and prototype scope

- Objective: confirm the real service operation, experience wording, technology boundaries, enquiry model, and first contrasting design prototypes.
- Changes:
  - Recorded the small-team `wir` voice, registered-Gewerbe basis, simplified public customer journey, and IT experience since 2008.
  - Classified promoted and supported-on-request technologies without turning the site into a logo catalogue.
  - Defined the approximate 1–20-user small-business focus, one-off work plus optional recurring support, flexible appointment boundaries, and individual assessment of larger or specialist requests.
  - Defined the free initial conversation, pre-visit scope indication where possible, possible paid diagnosis, approachable form fields, and prohibited sensitive form data.
  - Selected computer/laptop troubleshooting and office network/workplace IT as the first contrasting service prototypes.
- Decisions: authentic people imagery waits for real photography; unverified certifications, guaranteed response times, emergency service, data recovery, enterprise security, and other unsupported claims remain prohibited; German-speaking call handling is an internal operational fact, not a public claim.
- Validation: visually inspected the current German homepage and both selected prototype pages in the local application. The routing, shared shell, responsive foundation, contact components, and bilingual service data are reusable, while the generic repeated card composition, unsupported trust claims, placeholder identity, shallow service differentiation, and mail-client form require replacement or redesign.
- Blockers or required input: actual ready telephone and WhatsApp values, final email/address/operator presentation, verified qualifications, travel policy, production domain, and final brand.
- Recommended next action: remove unsupported public claims, define the new homepage and prototype-page hierarchy, then implement the shared thematic visual system on those three pages before expanding it site-wide.

## 2026-08-27 — Codex — Truth-first public prototype cleanup

- Objective: make the existing public prototype reflect confirmed facts before beginning the thematic visual redesign.
- Changes:
  - Replaced `BerlinTech Support` with `VorOrt` as the provisional working identity in central site configuration.
  - Replaced unverified Microsoft certification and `DSGVO-konform` marketing claims with verifiable signals: IT experience since 2008, Berlin-wide on-site service, clear diagnosis boundaries, and English-speaking technical service.
  - Removed public placeholder badge displays from the footer and rewrote the security/certification page around necessary access, understandable changes, and the rule that exact qualifications appear only after verification.
  - Reworked homepage hero, process, service-area, trust, FAQ, metadata, and footer wording to avoid guaranteed speed or response implications and to address private customers, home offices, and small businesses clearly.
  - Updated the German private and business landing content to remove implied data-recovery and compliance guarantees, represent all Berlin districts, and emphasize software/setup and proportionate access handling.
- Decisions: the unverified badge component and public assets were removed completely; verified replacements may be added later. The current contact placeholders remain centralized until the actual ready phone and WhatsApp values are supplied.
- Validation:
  - `npm run validate` passed: 23 HTML pages, 22 sitemap URLs, all internal `/vorort/` links resolved, and no stale demo paths.
  - Browser verification confirmed `VorOrt` titles and branding on the German homepage, private computer/laptop prototype, and business network/workplace prototype, with no rendered `BerlinTech`, `Microsoft Certified`, or `DSGVO-konform` text.
- Blockers or required input: actual telephone and WhatsApp values, email, postal/legal details, verified qualifications, travel policy, real form backend, measurement stack, final brand, and production domain.
- Recommended next action: implement the connected Berlin-space visual system and progressive page hierarchy on the homepage and the two selected prototype service pages.

## 2026-08-27 — Codex — Responsive connected-space redesign

- Objective: replace the generic public prototype with the planned responsive visual system while using explicit placeholder panels instead of unsupported final imagery.
- Changes:
  - Rebuilt the German and English homepages around a reassuring entrance, problem-led navigation, a visible service journey, progressive audience depth, professional evidence, Berlin coverage, FAQ, and contact sections.
  - Added a reusable family of labeled visual placeholder panels for the connected home/workplace, diagnostic, network, service-journey, ordered-workspace, and Berlin states.
  - Rebuilt the computer/laptop page as an approachable private-customer prototype and the network/workplace page as a deeper small-business prototype within the same design language.
  - Reworked the header, mobile navigation, footer, language-support message, FAQ, contact section, enquiry fields, and mobile contact dock for the new shell.
  - Replaced the previous global styling with a responsive token system and removed three superseded homepage components.
- Decisions: final photography or generated imagery remains deferred; placeholder panels are part of the visual specification and state what future master assets must communicate. The mobile contact dock prioritizes phone, WhatsApp, and the enquiry section without forcing one channel.
- Validation:
  - `npm run validate` passed after the final implementation and handoff update with 23 HTML pages, 22 sitemap URLs, all `/vorort/` links resolved, and no stale `/astro-demo/` paths.
  - Browser review covered German and English homepages and both prototypes at 1440×1000 and 390×844, with no horizontal overflow or console errors.
  - Mobile navigation, the sticky contact dock, the contact anchor, and the progressive form expansion were tested successfully.
- Blockers or required input: real telephone and WhatsApp values, final brand and legal/contact facts, verified qualifications, travel policy, final visual assets, production form endpoint, analytics, and production domain.
- Recommended next action: review this first visual direction in context, supply the ready phone and WhatsApp values, and choose one master-environment concept for final visual development before extending the page-specific states to every service page.

## 2026-08-27 — Codex — Google Drive-compatible dependency installation

- Objective: prevent npm from permanently recreating symbolic links in `node_modules/.bin` when the repository moves into Google Drive.
- Changes: added an engine-level `.npmrc` with `bin-links=false` and changed the development, build, and preview scripts to invoke Astro's JavaScript entry point directly instead of relying on the missing `.bin/astro` link.
- Decisions: `node_modules` remains local, generated, and ignored by Git, but installs inside the Drive-backed project must remain link-free. Future package-script additions must not assume executables are available through `node_modules/.bin`.
- Validation:
  - A clean `npm ci` installed 278 packages while respecting `bin-links=false`.
  - A full scan found no symbolic links anywhere under `node_modules`, and `node_modules/.bin` was not created.
  - `npm run validate` built 23 HTML pages and verified 22 sitemap URLs, all `/vorort/` links, and the absence of stale `/astro-demo/` paths.
  - `npm run dev -- --host 127.0.0.1` started Astro successfully through the direct JavaScript entry point.
- Blockers or required input: none for the link-free npm setup; the parent-folder move itself remains a local filesystem operation outside this repository.
- Recommended next action: complete the clean-install validation, then move the parent folder while development processes are closed and reopen the repository and Obsidian vault from their new paths.

## 2026-08-27 — ChatGPT — English homepage hero translation

- Objective: align the English homepage hero heading and subheading directly with the German homepage wording.
- Changes: updated only the English `title` and `intro` strings in `ω┇Engine/src/components/HomeExperience.astro`; the German hero copy and all other homepage content remain unchanged.
- Decisions: translated `IT-Hilfe vor Ort. Klar, persönlich, professionell.` as `On-site IT help. Clear, personal, professional.` and the supporting line as `For computers, software, networks and workplaces – personal on-site support for private customers, home offices and small businesses in Berlin.`
- Validation:
  - Compared the pre-edit and post-edit source locally; the diff contains exactly the two intended English hero lines.
  - Read the updated Drive file back after writing and confirmed the returned bytes match the intended source exactly.
  - `npm run validate`, `git diff --check`, and `git status --short` were not executed because the connected Drive interface does not expose the repository shell.
- Blockers or required input: none for the requested wording; repository command validation remains required before commit or deployment.
- Recommended next action: run the repository validation commands from `ω┇Engine`, then continue with the next requested bilingual content adjustment.

## 2026-08-27 — ChatGPT — Project Chat Git handoff rule

- Objective: make the repository contract explicit about Git handoff when a Project Chat can edit connected Drive files but cannot access the local repository shell.
- Changes: updated root `AGENTS.md` so `git status`, `git diff --check`, `npm run validate`, and Git commit steps are conditional on local repository shell access; added a dedicated Git commit handoff section requiring explicit commit status and a ready-to-use commit message whenever the commit is left to Aykhan.
- Decisions: Project Chat sessions without local repository shell access may leave the Git commit for Aykhan and must never imply shell checks or Git operations succeeded when they were not actually run. Sessions that do complete a commit must say so and identify the commit when available.
- Validation: read the complete current `AGENTS.md` before editing and reviewed the updated local file for internal consistency. Drive readback will be used after writing both documentation files. No repository-shell validation or Git commit was performed in this Project Chat.
- Blockers or required input: none.
- Recommended next action: commit this documentation change locally using the provided commit message, then continue normal project work under the updated handoff rule.

## 2026-08-27 — ChatGPT — Versioned Git commit-message convention

- Objective: define the repository-wide Git commit-message format and version-bump ownership for future local and Project Chat handoffs.
- Changes: updated root `AGENTS.md` so every completed or proposed commit message uses `VorOrt vX.Y.Z: message`; defined `X` as Aykhan-controlled, `Y` as the major-update counter, and `Z` as the minor/patch counter.
- Decisions: only Aykhan may change `X`; major updates increment `Y` and reset `Z` to `0`; minor changes and patches increment `Z`; agents must use the latest confirmed version and must not invent a missing version number.
- Validation: read the complete latest `AGENTS.md` and `Collaboration.md` before editing and reviewed the resulting local files. This documentation-only change does not require Astro application validation. Drive readback will be used after writing both files. No repository-shell Git operations were performed in this Project Chat.
- Blockers or required input: the current numeric project-version baseline was not specified in this conversation, so no `X.Y.Z` value was invented.
- Recommended next action: establish or confirm the current project version when committing locally, then use the new `VorOrt vX.Y.Z: message` format for subsequent commits and handoffs.

## 2026-08-27 — ChatGPT — Launch page architecture and documentation alignment

- Objective: audit `α┇Docs/` against the current product direction and make the intended page inventory, content depth, service-page requirements, and SEO expansion rules explicit before broader page work.
- Changes:
  - Updated `Project.md` to separate the current implemented sitemap from the target launch information architecture.
  - Defined the required content role for the homepage, private landing, private service pages, business landing, business service pages, trust/capability treatment, and future dedicated contact route.
  - Recorded the missing dedicated software installation/optimization page as a confirmed architecture gap and marked the generic `reparatur-installation` route as transitional rather than a permanent repair category.
  - Clarified that the current security/certification route must become truthful working-methods/data-handling/experience/qualification content rather than an unverified badge showcase.
  - Added explicit guardrails against thin Berlin-district, technology-brand, and filler editorial pages before evidence supports them.
  - Updated `Roadmap.md` so the content-architecture phase owns the page inventory and briefs, the visual phase expands from the two validated prototypes in a defined order, and the conversion phase includes the future bilingual contact destination.
- Decisions: the current private and business detail routes are real route foundations but most still need the full thematic/content treatment; office network/workplace IT remains the initial home for one-off work plus optional recurring business support rather than creating another thin recurring-support page immediately; a dedicated About page and blog are not first-launch requirements.
- Validation: read the latest complete `AGENTS.md`, `Project.md`, `Roadmap.md`, and `Collaboration.md`, inspected the current route/data structure and the existing transitional system/software page, and reviewed the edited Markdown locally for consistency. Drive readback is required after writing. No Astro build, Git status/diff check, commit, or push was run because this Project Chat does not have the local repository shell.
- Blockers or required input: final software-service slug/search wording should be chosen during the SEO/content audit; final brand, production contact/legal facts, verified qualification evidence, travel policy, form backend, analytics, production domain, and final imagery remain unresolved.
- Recommended next action: use the new page contracts to design and implement the dedicated software installation/optimization service, then convert the remaining private and business service pages one at a time through the validated thematic system.

## 2026-08-27 — ChatGPT — AGENTS frontmatter as canonical project version

- Objective: make the root `AGENTS.md` frontmatter version the single source of truth for repository `X.Y.Z` and ensure proposed or completed commit versions always match it.
- Changes: bumped `AGENTS.md` from `1.2.1` to `1.2.2` for this documentation change and tightened the Git handoff rules so every logical commit receives one version bump, the frontmatter is updated as part of the same change set, and the commit message must use the exact same version.
- Decisions: `AGENTS.md` frontmatter now owns the current project version; `X` remains Aykhan-controlled, `Y` remains the major-update counter, and `Z` remains the minor/patch counter. An already-uncommitted bump for the same intended commit is reused rather than incremented again. Project Chat sessions without repository shell access must still align the Drive-edited frontmatter with the proposed local commit message.
- Validation: read the latest complete `AGENTS.md`, then `Project.md`, `Roadmap.md`, and `Collaboration.md` before editing; reviewed the updated Markdown locally. Drive readback is required after writing. No repository-shell Git status, diff check, Astro validation, commit, or push was run in this Project Chat.
- Blockers or required input: none.
- Recommended next action: commit these documentation changes locally with `VorOrt v1.2.2: make AGENTS frontmatter the canonical project version`.
