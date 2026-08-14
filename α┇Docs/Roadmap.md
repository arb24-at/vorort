# VorOrt repository roadmap

Last updated: 2026-08-14

This roadmap is subordinate to Aykhan's external Obsidian Chain. It records repository implementation phases and acceptance criteria without duplicating the Chain's high-level project-management state.

Status markers: `complete`, `next`, `planned`, `blocked`.

## 1. Repository organization and operating context — complete

- Isolate the Astro application in `ω┇Engine` while retaining GitHub-required root configuration.
- Establish three canonical documentation files and a root `AGENTS.md` contract.
- Add repeatable static-output validation and update GitHub Pages to build from the engine.
- Preserve the live `/vorort/` URL, German root, English subtree, 23 HTML pages, and 22 sitemap URLs.

Acceptance: a fresh dependency install and `npm run validate` pass from `ω┇Engine`; the `main` Pages workflow deploys successfully; future agents can orient themselves from root documentation alone.

## 2. Production truth and technical health — next

- Replace placeholder telephone, WhatsApp, email, address, legal identity, privacy details, and certificate evidence.
- Choose the public brand and production domain without exposing the internal VorOrt name by accident.
- Audit the real service catalogue, exclusions, operating coverage, response wording, and any pricing statements.
- Upgrade Astro and affected transitive dependencies, then rerun the security audit and static validation.
- Remove tracked or generated platform residue and keep the working tree reproducible.

Acceptance: no placeholder identity or unsupported operational claim is public; legal pages match the real hosting/contact stack; dependency audit findings are reviewed and production-relevant issues resolved.

## 3. Validated bilingual content architecture — planned

- Define Astro content-collection schemas for localized page copy, services, FAQs, SEO metadata, contact facts, and approved feature variants.
- Preserve separate German and English editorial content connected by stable translation IDs.
- Complete English equivalents or deliberate language handling for system/software, security, and other future pages.
- Normalize German typography and replace remaining transliterated copy such as `fuer` where it is customer-facing.
- Keep layout primitives and design tokens in code; expose only constrained page/theme choices to content files.

Acceptance: representative content and SEO changes require no Astro component edit; invalid or incomplete content fails the build; every translated page has correct canonical and alternate-language metadata.

## 4. Thematic visual and interaction system — planned

- Establish typography, color, spacing, icon, illustration, diagram, and motion rules for the provisional or chosen brand.
- Prototype one coherent Berlin home/office visual world across the homepage, one private service, and one business service.
- Add only high-value generated or commissioned imagery with documented consistency rules and accessible alternatives.
- Review navigation, contact surfaces, responsive behavior, keyboard use, focus treatment, reduced motion, contrast, and performance.

Acceptance: page topics are visually distinguishable without unrelated stock imagery; private and business contexts remain one recognizable system; accessibility and performance checks meet the agreed release baseline.

## 5. Conversion and demand measurement — planned

- Choose and implement a static-compatible form backend with spam protection, error/success states, privacy disclosure, retention policy, and reliable delivery.
- Instrument phone, email, WhatsApp, and form interactions as distinct conversion events.
- Configure Search Console and privacy-conscious traffic measurement that separates impressions, visits, service intent, and genuine enquiries.
- Define a lightweight review cadence and avoid redesigning between observation windows without evidence.

Acceptance: every contact method is functional and measurable; a test enquiry is delivered and observable; the site can distinguish vanity traffic from meaningful Berlin service demand.

## 6. Launch, observe, and iterate — planned

- Complete production-domain, HTTPS, redirect, canonical, sitemap, indexing, legal, accessibility, and contact-flow checks.
- Launch the agreed German and English demand-test pages.
- Review search visibility, relevant visits, service-page behavior, calls, emails, WhatsApp conversations, and form enquiries at useful intervals.
- Improve copy, internal linking, service positioning, and conversion friction based on evidence.
- Decide whether evidence supports further investment in content, paid acquisition, booking, staffing, or broader Berlin operations.

Acceptance: the demand test is live on the production domain, measurement is reliable, and investment decisions reference accumulated enquiry and search evidence rather than raw traffic alone.
