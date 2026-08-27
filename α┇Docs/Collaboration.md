# VorOrt collaboration handoff

Last updated: 2026-08-27

## Current handoff

- Active branch: `main`.
- Current working state: the truth-first public pass is committed on `main`; the responsive connected-space redesign is implemented locally but is not yet committed or pushed.
- Local validation: `npm run validate` passed after the final implementation and handoff update on 2026-08-27 with 23 HTML pages, 22 sitemap URLs, zero missing `/vorort/` targets, and zero stale `/astro-demo/` paths.
- Local browser verification: German and English homepages plus the private computer/laptop and business network/workplace prototypes were reviewed at 1440×1000 and 390×844. No horizontal overflow or console errors were observed; mobile navigation, contact dock, anchored contact section, and progressive enquiry form were exercised successfully.
- Deployment state: commit `4bd18da` is live on `main`; the connected-space redesign will deploy only after the current changes are committed and pushed.
- Product-direction state: the homepage and two selected prototypes now demonstrate progressive technical depth, intentional visual placeholders, differentiated private/business treatment, and one shared responsive system.
- Known blockers: final public brand, supplied telephone and WhatsApp values, email, postal/legal identity, exact qualification evidence, travel policy, real form backend, analytics, final imagery, and production domain remain unresolved or provisional.
- Recommended next action: replace the central telephone and WhatsApp placeholders when supplied, review the implemented visual direction, then define the first commissioned master environment and production enquiry backend.

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
