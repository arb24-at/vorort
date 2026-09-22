# VorOrt project documentation

Last updated: 2026-09-10

## Purpose and operating facts

`VorOrt` is the internal project name, not an approved public brand. Final branding remains Aykhan's decision; existing placeholder identity must not be treated as verified. The website should generate genuine enquiries for a normal local Berlin IT business through useful service information, credible presentation and accessible contact paths. Do not mention a waitlist, Baku or delayed availability.

The audiences are private customers, home-office users, freelancers and small and growing businesses. Lead with understandable problems and outcomes, then reveal technical depth. On-site Berlin support is the defining model; remote help and initial diagnosis are supporting options. Use a small professional team voice (`wir`) without implying either a sole freelancer or a large company. The business is a registered Gewerbe under Aykhan's personal name; the legal notice must eventually identify the verified operator. Relevant IT experience dates from 2008.

- **Language:** German at `/` uses friendly formal `Sie`; English at `/en/` is independently authored and connected through stable translation IDs. English-speaking technical service is real, but its public messaging is optional and centrally controlled in `src/data/site.ts`. Do not promise German-speaking technicians or telephone support; a German-speaking operator is an internal possibility only.
- **Engagement:** one-off projects, planned work and problem resolution are primary; recurring maintenance is optional. Assess business fit by complexity, risk and supportability, without an employee/device ceiling or required long-term contract.
- **Pricing and appointments:** individual quotations, no public fixed/starting/hourly rates. The initial conversation is free; explain any paid diagnostic visit before arranging it. Weekdays, evenings and Saturdays may be available by agreement, without rigid published hours or same-day/response-time guarantees. Berlin travel policy remains undecided.
- **Internal journey:** collect problem, location, device/service and urgency; assess fit and on-site/remote/diagnostic needs; indicate scope/cost where possible; arrange and perform work; agree extra work, equipment or return visits before proceeding. Keep the public explanation short and reassuring.
- **Trust boundaries:** no invented customers, prices, availability, qualifications or security/compliance promises. Publish certificates only after exact names, issuers, holders, status and verification evidence are supplied. Never turn a working-method intention into an independent certification.

## Service and content boundaries

The core pillars are computer/laptop troubleshooting, software installation/optimization, office networks/workplace IT, Microsoft 365 and Google Workspace. Home networks and new-device setup/data transfer also have dedicated substantial service pages. Supported technologies include Windows, macOS, Wi-Fi and managed networks, cabling, printers/peripherals, NAS, VPN/remote access, backups/cloud storage, email/domains, accounts/security configuration and workplace software.

| Service | Durable boundary |
| --- | --- |
| Computer/laptop help | Symptom-led Windows/macOS system, software, startup, performance and legitimate account-access support, including available recovery-key mechanisms. No promise to restore protected access. Hardware-fault diagnosis and component-level repair are not the advertised offer; simple replacement may be agreed selectively. |
| Software installation/optimization | Licensed, supported software; installation, updates, configuration, conflicts, profiles, stability and handover. |
| Home networks | Planned setup/improvement, Mesh/access points, Ethernet, NAS, home-office connectivity and device integration. ISP-line faults stay with the provider; no universal coverage/speed guarantee. Broader smart-home installation is a separate future intent. |
| Setup/data transfer | Windows/Mac selection, optional procurement, complete setup, normal readable-data migration, email/accounts, optional software/peripherals and recommended backup. Smartphones/tablets are not advertised in this page's scope. Damaged media and password-access problems belong elsewhere. |
| Business networks | Planning, modernization, cabling/racks/patching, managed hardware, business Wi-Fi, NAS, VPN, procurement, testing, documentation and optional maintenance. Server/AD/Linux capabilities deserve separate researched pages. |
| Microsoft 365 | Accounts/users, Outlook/Teams/Office, sharing/permissions, workplace setup, migration/integration, troubleshooting and working practices; exact credentials require evidence. |
| Google Workspace | Business setup, tariff guidance, domain/Gmail, users/access, Shared Drives, workplace integration, migration/coexistence, security configuration and optional independent backup. No reseller claim, default ongoing administration, end-user training or enterprise DLP/eDiscovery/SSO/compliance-migration offer. Distinguish local business work from Google's own support. |

Do not advertise a hardware-repair workshop, guaranteed data recovery, emergency/24-hour response, enterprise cybersecurity, acceptance of regulated/highly sensitive environments, or pirated/unlicensed/unsupported software. Damaged or unreadable media requires a separately defined recovery capability and referral boundary. Small-business server/security requests may be assessed individually without implying an enterprise consultancy.

**Content contracts:** homepages provide a plain-language Berlin/on-site entrance and progressive trust; audience landings orient visitors and link to detailed services. Private pages lead with recognizable situations, scope, outcomes, process, boundaries and FAQs. Business pages lead with operational impact, then systems/dependencies, implementation, documentation and maintainability. Trust content explains necessary access, account/data protection, backup/change precautions, experience and verified qualifications. Each indexable service owns a distinct useful intent, truthful proof and an obvious contact path.

Production copy and page-specific scope live in `ω┇Engine/src/content/services/`; the planning-only `ω┇Engine/src/data/seo-keywords.yml` owns keyword routing and research status. Do not regenerate copy from its provisional seeds or duplicate research logs here. German and English research remain independent. Protect service intent over search volume: hardware-repair keywords must not redefine computer support, normal migration must not imply recovery, and business provider terms must not imply a mandatory managed-service/SLA contract. Private landings remain orientation/conversion gateways rather than forced high-volume targets. Preserve canonical and alternate-language pairing; add substantial new pages only for distinct search intent or a genuine customer-information need.

## Repository and application architecture

`ω┇Engine/` owns the static Astro application, dependencies, source, assets and validation. `α┇Docs/` owns project context; the deployment workflow stays at repository-root `.github/workflows/astro.yml`. Prefer reusable Astro components, shared tokens, scoped styles and minimal client JavaScript. Editable content belongs in validated collections; layout, dimensions, classes and arbitrary visual controls stay in code.

Key sources inside `ω┇Engine/`:

| Source | Owns |
| --- | --- |
| `src/data/site.ts` | Provisional identity/contact facts, service districts, optional English-support messaging |
| `src/content.config.ts`, `src/content/services/<identity>/<locale>.yml`, `src/data/services.ts` | Production schemas, independent locale records, translation/route validation and service resolution |
| `src/data/navigation.ts`, `src/layouts/MainLayout.astro` | Localized navigation and shared metadata/chrome |
| `src/styles/tokens.css`, `global.css`, `technical-field.css` | Shared tokens, global foundation and existing production visual layer |
| `astro.config.mjs` | Static deployment origin and `/vorort/` base |
| `src/design-system/section-recipes.ts`, `workshop-schema.ts` | Canonical section registry and strict Workshop contracts |
| `src/content/workshop/`, `src/data/workshop*.ts` | Experimental page fixtures, unique page IDs, loading, paths and distinct-page usage |
| `src/components/design-lab/`, `src/styles/design-lab.css`, `src/styles/design-lab/` | Workshop UI/renderers, Lab-shell styling, shared artwork primitive and recipe/section styles |

### Page Workshop and Approved Sections

Each recipe's canonical `authoringGuidance` describes content shape, typical range/density, fixed and flexible aspects, Design-review triggers, media, responsive behaviour and accessibility. Approved recipes require complete, non-blank guidance; experimental recipes may omit it or provide partial guidance during migration. The recipe's existing Zod content schema remains the machine-enforced content contract; density recommendations do not add word or item limits. Guidance lives only in `section-recipes.ts`, alongside the recipe definition.

Design Lab has exactly two user-facing areas: **Page Workshop** and **Approved Sections**. The Workshop renders complete experimental pages; Approved Sections derives its list from the same canonical registry. Each approved entry frames a real section rendered through `WorkshopCanvas`, using the first matching occurrence in the loader's stable Workshop page order and retaining that consumer's audience/locale. Only its section ID is namespaced for the library. Recipe identity, purpose/use, context metadata and the full specimen stay visible. Dense guidance, lifecycle/replacement details and derived usage sit below each specimen in a native “Authoring guidance & usage” disclosure, closed by default. Links lead to the original section and all derived consumers. There is no sample-content copy or fallback catalogue: an approved recipe without a Workshop consumer raises a build error requiring an explicit example decision. The governing relationship is **semantic content → section recipe → reusable Astro implementation**. Production services remain independent and have not adopted this contract.

The registry owns stable semantic IDs, lifecycle (`experimental`, `approved`, `deprecated`), purpose/kind, audience/page-type compatibility, content schema and renderer reference. Human guidance may include recommended placement/use and replacement relationships; active usage is derived from actual Workshop consumers rather than stored manually. Workshop YAML holds page metadata and ordered `{ id, kind, recipe, content }` sections, including copy, accessible media and semantic link targets. Strict validation rejects unknown recipes, styling keys, incompatible kinds/audiences, invalid content, duplicate IDs, broken hero/topic targets and duplicate or self-referencing topic links. Current support is deliberately English private/business service pages with an opening hero and closing shared contact section; additional locales/page types require intentional extension. Fixture stems match page IDs; loader keys retain extensions to detect duplicate YAML stems.

The Workshop is static and read-only. Page selection uses normal links; normal document scrolling is the default. Optional desktop/tablet/mobile previews reuse the same canvas in auto-height iframes. Page selection and the full canvas work without JavaScript; width controls require it. Usage counts distinct fixture pages, excluding repeated sections and preview routes; production usage is not connected. No file-writing UI/API or dedicated local editing command exists yet.

**Approval contract:** Aykhan explicitly accepts a section's design in context, copy/media contract, supported audiences/page types and remaining placeholders before its registry status becomes `approved`. Record the decision in the handoff, change the canonical registry status, and run the existing validation. Routine approval must not require editing tests or fixed-count assertions; change validation logic only when the underlying contract changes. A non-breaking refinement may retain its recipe ID so shared implementation updates consumers consistently. A material/breaking semantic, content-contract, compatibility, media-contract or essential-behavior change requires a new experimental recipe ID while the approved predecessor remains stable; the replacement may supersede only a recipe of the same section kind, and intended consumers are migrated deliberately only after approval. Deprecate the predecessor only after the intended migration is complete. Future production consumers must enforce approved-only recipes. Approval does not itself authorize production adoption or copy migration.

**Collaboration:** role operating contracts live in the `γ┇Roles┇*.md` files. Content & SEO owns factual meaning/search intent and may compose pages from approved compatible section recipes; Design owns visual/information relationships and the Workshop approval/refinement pipeline; Implementation turns decisions into reusable Astro code; QA owns evidence and regression review. Roles may be combined when useful and are not hard permission gates. Aykhan remains Product Owner and final approval authority.

## Website map and deployment

The current output has 23 indexable URLs and 31 HTML pages. Routes below omit the configured `/vorort/` deployment base; always resolve links/assets with the existing base-aware helpers.

| Page | German | English |
| --- | --- | --- |
| Homepage | `/` | `/en/` |
| Private landing | `/leistungen/privatpersonen/` | `/en/services/private/` |
| Computer/laptop help | `/leistungen/privatpersonen/computer-laptop-hilfe/` | `/en/services/private/computer-laptop-help/` |
| Software installation/optimization | `/leistungen/privatpersonen/software-installation-optimierung/` | `/en/services/private/software-installation-optimisation/` |
| Home networks | `/leistungen/privatpersonen/wlan-heimnetz/` | `/en/services/private/wifi-home-network/` |
| Setup/data transfer | `/leistungen/privatpersonen/einrichtung-datenumzug/` | `/en/services/private/setup-data-transfer/` |
| Business landing | `/leistungen/unternehmen/` | `/en/services/business/` |
| Microsoft 365 | `/leistungen/unternehmen/microsoft-365-arbeitsplaetze/` | `/en/services/business/microsoft-365-workplaces/` |
| Google Workspace | `/leistungen/unternehmen/google-workspace-cloud/` | `/en/services/business/google-workspace-cloud/` |
| Business networks | `/leistungen/unternehmen/netzwerk-it-betreuung/` | `/en/services/business/network-it-support/` |
| Transitional trust page | `/datensicherheit-zertifizierungen/` | Bilingual replacement pending |
| Legal notice / privacy | `/impressum/`, `/datenschutz/` | Link to German legal sources |

Additional output: `/sitemap.xml`, `/404.html`, and the noindex transitional `/leistungen/reparatur-installation/` redirect. The six internal Lab routes are the `/design-lab/` entrance, `/design-lab/approved/`, and Workshop/preview routes for each of the two fixtures. All are `noindex, nofollow`, omit customer chrome, and stay out of production navigation and the sitemap. They are unlisted, not authenticated. Discover current fixture URLs through the Workshop picker; legacy technical names remain until the planned application rename.

GitHub Pages currently hosts `https://arb24-at.github.io/vorort/`. The workflow responds to engine/workflow changes; documentation-only commits do not redeploy. SEO metadata, canonical/alternate-language links and the sitemap are implemented. No server adapter, analytics integration or submission backend is installed. The contact form currently prepares an email in the visitor's mail client; it does not deliver or measure submissions independently.

The intended enquiry form uses minimal initial fields with progressive optional detail: name, telephone/email, preferred contact, postcode/district, customer context, optional company, problem/device/service, preferred appointment period, optional screenshot/photo and privacy consent. Never request passwords, authentication/recovery codes, payment-card data or remote-access credentials. Phone, WhatsApp and a future delivered form are primary paths; email remains available.

## Visual baseline and direction under review

Preserve the existing shared production foundation, tokens, grouped navigation and Technical Field treatment until a separately authorized migration. The illustrated Berlin homepage environment and software-service progression are existing production work, not newly approved Workshop recipes.

The private home-network Workshop now uses an editorial hero, an illustrated anchor index, a Wi-Fi options guide, an Ethernet connection path and three substantial editorial chapters, followed by process, FAQ and shared contact. Its five new recipes remain experimental. The business Workshop retains its earlier banner, illustrated scope, gallery, situations, process and proof/boundaries composition. The private pass reuses P1–P6 with responsive Astro-generated WebP images; source masters and acceptance states remain intact. Optional semantic contact-copy overrides preserve production defaults. Private compositions use softer room/device-scale scenes; Business uses more structured workplace/infrastructure relationships. The working artwork language is tactile editorial illustration, with flatter supporting panels, restrained navy/petrol/off-white surfaces, orange routes and mint connection cues. Aykhan's accepted working private hero reference establishes an art family, not section approval.

Useful ideas retained from the external design reference remain **review heuristics**, not mandatory layouts: recognizable physical environments; clear spatial relationships; topic/scope/relevance apparent from the hero and first section within roughly three seconds; connected scope shown as a coherent environment where useful; meaningful variation in section rhythm. Choose scenes, diagrams, sequences, prose or lists according to meaning. Do not force integrated scenes, identical cards, fixed section counts or a single composition onto every page.

Keep one family through typography, navigation, palette, illustration quality and contact patterns; distinguish audiences through composition, scale and density as well as colour. Mobile should recompose complex visuals, keep key meaning available without hover, and preserve readable/tappable contact actions. Avoid generic stock people/generated technicians, decorative cyber imagery and unexplained diagrams. Review keyboard/focus behavior, contrast, reduced motion and performance alongside appearance. Current media-production needs and standalone illustrator prompts are tracked in [`ω┇Media-Queue.md`](ω┇Media-Queue.md). The queue is operational only: actual media references remain in source/fixtures and accepted media does not itself approve a section.

## Documentation and local workflow

- Root `AGENTS.md` is the worker/router contract and owns the canonical project version, role selection, context loading, evidence language, collaboration rules and Git handoff.
- `α┇Project.md` owns durable product facts, service/content boundaries, architecture, website map and durable design/Workshop contracts.
- `β┇Roadmap.md` owns repository priorities and acceptance criteria, subordinate to Aykhan's external Obsidian Chain. Do not edit or duplicate the Chain.
- `β┇Collaboration.md` is the live coordination surface: current handoff, active cross-role requests, items awaiting Aykhan, pending repository verification and only brief recent work.
- `γ┇Roles┇Design.md`, `γ┇Roles┇Content-SEO.md`, `γ┇Roles┇Implementation.md` and `γ┇Roles┇QA.md` own discipline-specific operating guidance; they do not duplicate project truth.
- `ω┇Media-Queue.md` is Aykhan's current media production/acceptance queue, not an asset catalogue or design source of truth.

Load only the role and project context required by the current task as directed by `AGENTS.md`. Run application commands from `ω┇Engine/`: `npm ci`, `npm run dev`, `npm run validate`. Validation builds the site, checks Workshop contracts/approval/usage rules and verifies static output, robots, canonical/base paths, internal assets and sitemap exclusions. Follow root instructions for Git checks and commit handoff. The engine's `.npmrc` uses `bin-links=false` for Google Drive compatibility; scripts invoke Astro's JavaScript entry point directly and must retain that form unless the storage constraint changes.
