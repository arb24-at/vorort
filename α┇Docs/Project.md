# VorOrt project documentation

Last updated: 2026-09-03

## Purpose and positioning

VorOrt is the provisional project and public working name for a Berlin-focused IT-support service. It is not the final brand, so architecture and major design decisions must not depend on the name being permanent. The earlier `BerlinTech Support` identity is retired as the working direction.

The website is intended to operate as a normal local Berlin service presence and generate genuine enquiries while testing commercial demand through calls, form enquiries, WhatsApp conversations, relevant search visibility, traffic quality, contact intent, and service-page engagement. A polished professional presence is a means to that outcome rather than an end in itself. Public copy must not mention a waitlist, Baku, or delayed operating availability.

The primary audiences are private customers, home-office users, freelancers, and small and growing businesses, including visitors who may be discouraged by overly technical IT websites. The service should feel accessible to them without publicly labelling them as a demographic segment. On-site support throughout Berlin is the defining service model; remote support and initial diagnosis remain supporting options where appropriate.

The current primary service pillars are computer and laptop troubleshooting, software installation and optimization, office networks and workplace IT, Microsoft 365, and Google Workspace. Public organization should follow customer needs and problems, not internal service tiers. Hardware and component-level repair, low-value repair work, and trivial standalone fixes that cannot reasonably support a professional service rate must not become core advertised categories. Small related tasks may still be handled during a larger visit.

The intended market position combines an accessible neighborhood IT expert, a calm established professional service, and a modern small-business specialist. It must not resemble either a cheap repair shop, a luxury technology concierge, or an expensive enterprise consultancy.

## Decisions currently in force

- `VorOrt` is the provisional public working name, not the final customer-facing brand.
- German is the default language at `/`; English is maintained separately under `/en/` for stronger language quality and SEO.
- Stable translation pairs are connected by service IDs in the validated `services` content collection, rather than runtime machine translation.
- The German copy uses contemporary, friendly, formal `Sie` language.
- English-speaking technical service is a real public promise: the technician doing the work can communicate in English. Do not expand this into a claim of fully bilingual technicians or advertise German-speaking telephone support or technicians.
- The complete German and English sites are both important. English-service messaging is centrally configurable and currently enabled.
- Content follows progressive technical depth: reduce anxiety at the entrance, reveal stronger evidence further down, and permit substantial professional detail on business pages.
- Calls, WhatsApp, and a real enquiry form are the three primary contact paths; their visual priority may vary by page, context, and device.
- Pricing is handled through individual quotations rather than public fixed, starting, or hourly prices for now.
- The site remains static-first with no accounts or authentication.
- GitHub Pages is the current host at `https://arb24-at.github.io/vorort/`.
- The current telephone, WhatsApp, email, postal address, and legal identity are placeholders until verified replacements are supplied. Unverified public badge assets were removed and must not return without exact credential evidence.
- Certification badges may only represent credentials actually earned and verifiable. Do not represent a process intention as an independent privacy or compliance certification.
- Editable business facts and localized content should eventually move to validated Markdown/content collections. Foundational spacing, typography, components, and accessibility behavior stay in code; Markdown must not become an unrestricted page builder.

## Operating model and service truth

The public voice is a small professional team using `wir`. Do not imply a sole freelancer or exaggerate the operation into a large company. The business is a registered Gewerbe under Aykhan's personal name; a separate service brand may be used publicly while the legal notice identifies the real operator.

The internal enquiry path is deliberately more detailed than the public explanation: collect the problem, location, device or service, and urgency; review whether the request is supportable; decide whether on-site work, remote help, or further diagnosis is appropriate; give a scope or cost indication where possible; arrange the appointment; perform the work primarily on site; and agree any additional work, equipment, or return visit before proceeding. A German-speaking operator may handle initial calls, but the website must not advertise this. The public journey should remain short and reassuring.

Relevant professional IT experience dates from 2008. Prefer durable wording such as `IT experience since 2008` rather than a calculated number of years.

Actively represented technology and service areas are Windows computers, Microsoft 365, Google Workspace, Wi-Fi and local networks, managed network infrastructure, network cabling, printers and peripherals, NAS and shared storage, VPN/remote access, backups and cloud storage, email and domain configuration, security and account protection, workplace software, device setup, data migration, software installation and optimization, and general system troubleshooting. Apple/macOS and smartphones/tablets may be supported where a request fits but are not core business categories. Windows Server/Active Directory and Linux server work are confirmed deeper business capabilities and candidates for dedicated future service pages after independent search-intent research; the network page may mention their network relationship without absorbing the full server offer.

The business audience is small and growing organizations, including offices, practices, shops, studios, and similar workplaces. Assess fit by the actual project, complexity, operational risk, and supportability rather than publishing an employee or device ceiling. One-off projects, planned infrastructure work, and problem resolution are primary; occasional or optional recurring maintenance may be offered without making a long-term contract part of the standard engagement.

Do not guarantee data recovery, emergency or 24-hour response, same-day visits, response times, enterprise cybersecurity, component-level electronics repair, acceptance of regulated or highly sensitive environments, or support for pirated, unlicensed, or unsupported software. Small-business server and security-configuration requests may be assessed individually without presenting the service as an enterprise infrastructure or cybersecurity consultancy.

Appointments may be available on weekdays, weekday evenings, and Saturdays with flexible scheduling. Do not publish rigid hours yet. Same-day or urgent help may occasionally be possible but is never a public guarantee.

The initial conversation is free. Give an expected scope or quotation before the visit when the request is sufficiently clear. A paid diagnostic visit may be needed when responsible remote diagnosis is not possible. Explain that distinction without suggesting every technical issue can be priced exactly before inspection. Berlin travel policy remains undecided.

The future enquiry form should stay approachable while collecting name; telephone and/or email; preferred contact method; postcode or Berlin district; private, home-office, or business context; optional company name; a short problem description; affected device, software, or service; preferred appointment period; an optional screenshot or photograph; and privacy consent. It must never request passwords, authentication or recovery codes, payment-card data, remote-access credentials, or other sensitive login information.

## Repository and application architecture

The repository has two intentional work areas:

```text
α┇Docs/     Stable context, roadmap, and collaborative handoffs
ω┇Engine/   Astro application, source, assets, dependencies, and validation
```

Root files are limited to repository instructions, ignore rules, and GitHub-required workflow configuration.

The engine uses Astro 5 with static output. There is one shared layout, reusable header/footer/contact/service components, TypeScript data modules, a layered global CSS system, and minimal client JavaScript for header behavior. No server adapter, CMS, analytics integration, or form backend is currently installed.

Important sources of truth inside `ω┇Engine`:

- `src/data/site.ts`: provisional public identity, contact channels, service districts, and optional English-support messaging.
- `src/content.config.ts`: validated service-page schema, approved page templates, thematic variants, SEO fields, FAQ requirements, and expanded-page contracts.
- `src/content/services/<service-identity>/<locale>.yml`: independently maintained German and English service records connected by stable translation IDs; folder names are stable service identities and each locale owns one complete page record.
- `src/data/services.ts`: collection loading, translation-pair and route validation, related-service resolution, and route helpers.
- `src/data/navigation.ts`: language-specific navigation.
- `src/layouts/MainLayout.astro`: canonical, alternate-language, Open Graph, header, and footer behavior.
- `src/styles/tokens.css`, `global.css`, and `technical-field.css`: shared design decisions, foundation and legacy page rules, and the approved Technical Field layer in explicit cascade order.
- `astro.config.mjs`: deployment origin and `/vorort/` base path.

The contact form currently prepares an email through the visitor's configured mail client. It is not a server-backed submission and cannot independently count abandoned or completed form attempts. Calls, email, and WhatsApp are the practical contact channels until the conversion backend is chosen.

## Current implemented website map

The current sitemap contains 23 indexable URLs. The separate 404 page and noindex transitional redirect bring the generated HTML total to 25. This describes the implemented state, not a permanently frozen launch architecture.

| Purpose | German route | English route | Current direction |
| --- | --- | --- | --- |
| Homepage | `/` | `/en/` | Condensed Technical Field homepage and grouped service discovery implemented |
| Private-services landing | `/leistungen/privatpersonen/` | `/en/services/private/` | Keep; refine as the approachable gateway into private/home-office help |
| Computer and laptop help | `/leistungen/privatpersonen/computer-laptop-hilfe/` | `/en/services/private/computer-laptop-help/` | Keep; first private thematic prototype |
| Software installation and optimization | `/leistungen/privatpersonen/software-installation-optimierung/` | `/en/services/private/software-installation-optimisation/` | First four-state Technical Field service pair and current private-service review reference |
| Wi-Fi and home networks | `/leistungen/privatpersonen/wlan-heimnetz/` | `/en/services/private/wifi-home-network/` | Keep; German page expanded around planned home-network setup, cabling, Mesh, NAS and Homeoffice; independently researched English counterpart still to follow |
| Setup and data transfer | `/leistungen/privatpersonen/einrichtung-datenumzug/` | `/en/services/private/setup-data-transfer/` | Keep; convert to the validated thematic service-page system |
| Business-services landing | `/leistungen/unternehmen/` | `/en/services/business/` | Keep; refine as a gateway rather than a substitute for deep service pages |
| Microsoft 365 workplaces | `/leistungen/unternehmen/microsoft-365-arbeitsplaetze/` | `/en/services/business/microsoft-365-workplaces/` | Keep; expand into a deeper business service page |
| Google Workspace | `/leistungen/unternehmen/google-workspace-cloud/` | `/en/services/business/google-workspace-cloud/` | Keep; expand into a deeper business service page |
| Network and IT infrastructure | `/leistungen/unternehmen/netzwerk-it-betreuung/` | `/en/services/business/network-it-support/` | Keep; reference business page, led by planning, building and modernizing office networks and infrastructure, with troubleshooting secondary |
| Former system and software overview | `/leistungen/reparatur-installation/` | Not mirrored | Noindex transitional redirect to the dedicated German software service; excluded from the sitemap |
| Security and certifications | `/datensicherheit-zertifizierungen/` | Not yet mirrored | Transitional trust/capability page; do not market unverified certifications |
| Legal notice | `/impressum/` | German legal source linked from English pages | Keep and replace placeholders with verified legal facts |
| Privacy policy | `/datenschutz/` | German legal source linked from English pages | Keep and align with the real form/analytics stack |
| Sitemap | `/sitemap.xml` | Shared | Keep generated |
| Not found | `/404.html` | Shared | Keep |

All routes are served beneath the GitHub Pages repository base, for example `/vorort/en/`. Source code should continue using the base-aware URL helper rather than hard-coding the repository prefix into individual links.

## Target launch information architecture

The launch architecture should be intentionally small enough to maintain well, but deep enough to satisfy real search intent and let motivated visitors verify competence. The homepage is not expected to carry every service explanation. Audience landings orient visitors; individual service pages answer one concrete problem or professional need in depth.

### Core pages to retain, create, or complete

1. **Homepage — German and English.** Keep the entrance problem-led and non-technical. It should state on-site Berlin IT help clearly, offer call/WhatsApp/form access, let visitors recognize their problem in plain language, introduce private/home-office/business pathways, then progressively reveal experience, technology competence, English-speaking technical service, Berlin coverage, FAQ, and trust evidence. Technology names must not become the main entrance taxonomy.
2. **Private-services landing — German and English.** This is the middle layer between the simple homepage and individual service pages. Use recognizable situations, plain-language outcomes, a short service process, sensible service boundaries, reassuring trust evidence, and links into the detailed private services. It should remain suitable for non-technical and older visitors without naming them as a demographic target.
3. **Computer and laptop troubleshooting — German and English.** Retain as the reference private-service page. Lead with symptoms rather than diagnoses; explain what can be investigated, likely outcomes, the on-site diagnostic process, boundaries around component-level repair and guaranteed data recovery, relevant FAQs, and simple contact paths. The page theme should show a recognizable device/problem state progressing towards diagnosis and resolution.
4. **Software installation and optimization — German and English.** Implemented as the first expanded content-collection service pair using the intent-led slugs `software-installation-optimierung` and `software-installation-optimisation`. It covers installation, updates, configuration, performance/stability problems, software conflicts, user profiles, workplace applications, safe handover, FAQs, boundaries, proof, related services, and direct contact paths. Keep it as the review reference before expanding the same treatment to the remaining pages.
5. **Wi-Fi and home networks — German and English.** Keep as a useful private/home-office search-intent page even though it is not one of the five headline pillars. Lead with planned home-network setup and improvement rather than router troubleshooting: new or renovated homes, Ethernet cabling, Mesh or wired access points, NAS/shared storage, Homeoffice connectivity, printers/TVs and other connected devices, hardware recommendation or supply, testing and understandable handover. Weak coverage and dropouts remain supported entry points but are secondary to building a coherent network. Provider-line faults remain the ISP's responsibility, and no universal Wi-Fi coverage or speed guarantee is published. Smart-home devices may be connected to the network here, while broader smart-home configuration/installation is a separate future service intent.
6. **Setup and data transfer — German and English.** Keep as a secondary private service. Cover new-device setup, accounts, profiles, application setup, migration of user data, backups before changes where appropriate, peripherals, and handover. Do not imply guaranteed recovery of missing or damaged data.
7. **Business-services landing — German and English.** Treat this as a professional gateway for small and growing businesses, offices, practices, studios, shops, freelancers, and home-office operations rather than a full technical catalogue. Start from operational needs, then expose deeper competence, one-off work plus optional recurring support, relevant technologies, working methods, experience, and verified qualifications when available. Avoid enterprise-consultancy language and avoid publishing an employee or device ceiling.
8. **Network and IT infrastructure — German and English.** Retain as the reference business-service page, with planned infrastructure work ahead of break/fix troubleshooting. Lead with new-office network design, modernization of existing networks, managed network hardware, business Wi-Fi, network cabling/racks/patching, NAS/shared storage, VPN/secure remote access, hardware recommendation or supply, implementation, testing, documentation/handover, and optional maintenance. Keep the public language understandable and describe technical depth through customer outcomes rather than protocol lists. Windows Server/Active Directory and comprehensive Linux server work remain separate service intents even when they overlap technically with networking. This page may use the deepest network/system diagrams of the initial set.
9. **Microsoft 365 workplaces — German and English.** Expand beyond a generic service card into a real business page covering accounts and users, Outlook/Teams/Office, files and sharing, permissions, device/workplace setup, migration/integration issues, troubleshooting, and working practices. Publish exact certifications only after evidence is supplied.
10. **Google Workspace — German and English.** Expand into a real business page covering Gmail, Drive, shared information, users and access, device/workplace integration, synchronization, migration/configuration issues, troubleshooting, and collaboration workflows. Keep the page grounded in small-business outcomes rather than feature-list marketing.
11. **Working methods, data handling, experience, and qualifications — bilingual trust/capability treatment.** The existing `/datensicherheit-zertifizierungen/` route is provisional and should not remain framed as a certification showcase while credentials are unverified. Rework or replace it around necessary access, understandable changes, account/data protection, backup/change precautions, experience since 2008, supported technology expertise, and verified qualifications when supplied. A future route/name change should preserve or redirect existing URLs deliberately.
12. **Contact — dedicated German and English route once the real form backend is chosen.** Keep the global contact section and mobile contact access, but add a durable contact destination for call, WhatsApp, and form enquiries. Explain what information helps, the free initial conversation, possible paid diagnosis, Berlin service area, and privacy expectations. Never ask for passwords, authentication/recovery codes, payment-card data, or remote-access credentials.

**Confirmed future business-service expansions — routes and wording TBD after independent research.** Windows Server/Active Directory and Linux server services are real supported capabilities that should receive dedicated service pages rather than being compressed into the network page. Create them only after page-specific keyword/SERP research defines distinct intent, scope, boundaries, and internal-link relationships.

**Confirmed future private-service expansion — route and wording TBD after independent research.** Smart-home configuration and installation is a real intended service area. The home-network page may cover the network foundation and connection of compatible smart-home devices, but a dedicated smart-home page should own equipment selection, ecosystem compatibility, configuration and broader installation scope once its own intent, boundaries and product strategy are researched.

### Pages not required for the first demand-test launch

- Do not create Berlin-district landing pages merely to multiply local keywords. Berlin coverage belongs in the core pages unless Search Console and enquiry evidence later justify genuinely useful district content.
- Do not create separate thin pages for every supported technology, printer type, operating system, router brand, or minor task. Add a page only when it represents a real service/search intent and can support substantial original content.
- A dedicated About/team page can wait until the final public identity and suitable authentic photography or biography material exist. Trust evidence can live on the homepage, audience landings, service pages, and the working-methods/qualifications treatment in the meantime.
- A blog or advice library is not a launch requirement. Add editorial content later only when it serves demonstrated search questions, internal linking, or customer education rather than publishing filler for SEO.

## Page content contracts

Every indexable service page should have one clear audience, one primary search/problem intent, a defined level of technical depth, a thematic visual state, truthful proof, and an obvious conversion path. German and English should be independently written rather than mechanically translated.

### Homepage

- plain-language promise and Berlin/on-site context;
- problem/symptom-led navigation rather than product taxonomy;
- private, home-office, and business pathways;
- progressive competence and trust evidence;
- concise English-speaking technician message;
- Berlin coverage, concise FAQ, and call/WhatsApp/form actions;
- no wall of certificates, brands, acronyms, or technical specifications above the fold.

### Private landing and private service pages

- recognizable symptoms and everyday situations first;
- what we can investigate or set up, explained in plain language;
- likely outcomes without guarantees;
- a short on-site process and when paid diagnosis may be necessary;
- clear boundaries around hardware/component repair, data recovery, unsupported software, and other non-core work where relevant;
- thematic visuals that explain the problem state throughout the page, not only in the hero;
- FAQs based on genuine customer questions and search intent;
- call, WhatsApp, and form options kept easy to find.

### Business landing and business service pages

- operational impact before technical architecture;
- supported scope, systems, users/devices, dependencies, and workflows;
- diagrams or system relationships where they improve understanding;
- assessment, prioritization, implementation, documentation/handover, and maintainability;
- relevant Microsoft, Google, networking, workplace, server/Linux, security, or other expertise only where the page needs it;
- experience and verified qualifications as proof, not decorative badge collections;
- one-off project/problem work first, optional recurring support where relevant;
- security/access boundaries and no unsupported enterprise guarantees;
- business-appropriate enquiry prompts without making the form feel like procurement paperwork.

### Trust/capability content

- experience since 2008;
- transparent working methods and necessary-access principles;
- account/data protection and sensible backup/change precautions;
- named technology expertise that is actually supported;
- exact certificates only after names, issuers, holders, status, and verification evidence are supplied;
- no invented compliance, response-time, availability, or security guarantees.

### Contact content

- phone, WhatsApp, and form as equal legitimate paths with context-sensitive visual priority;
- minimal first-step fields with optional detail revealed progressively;
- Berlin location/postcode, customer context, affected device/service, problem summary, preferred contact/appointment period, and optional screenshot/photo;
- free initial conversation and possible paid diagnostic visit explained without promising an exact pre-visit price for every fault;
- explicit instruction not to send passwords, authentication/recovery codes, payment-card information, or remote-access credentials.

## SEO and page-creation guardrails

Service-page planning must happen before broad visual rollout. Each new page should target a distinct useful intent rather than a keyword variation of another page. Use Berlin and the service/problem naturally in titles, descriptions, headings, internal links, and copy without repetitive location stuffing. Preserve canonical and `hreflang` pairing for bilingual content. Do not create thin district, technology, or near-duplicate pages merely to increase sitemap size; expand the architecture when search evidence or a genuine customer decision need justifies it.

## Visual direction

The connected-space foundation and its final design-refinement pass are approved. The German and English homepages use one physical Berlin living/work environment for broad context, the shared header exposes every required service through a compact grouped menu, and the software-service pair progresses through situation, investigation, intervention, and verified outcome states. The remaining audience and service pages retain their earlier prototype treatment until each controlled conversion is reviewed.

The desired impression is trustworthy, competent, and modern, supported by approachability, calmness, friendliness, and local familiarity. The site should look like a real Berlin IT service without resembling a conventional IT-company template, a cheap repair shop, or an intimidating consultancy.

The governing visual principle is a coherent environment that changes state by subject. The shared layers are `place` for the familiar physical setting, `signal` for connections and dependencies, and `state` for fault, intervention, or verified operation. Private pages foreground the place and understandable symptoms; business pages will foreground system relationships and operational consequences while remaining part of the same visual identity.

Explore a consistent Berlin home, home-office, and small-office visual world that changes state by subject:

- networking reveals coverage, signal paths, and connection problems;
- security reveals protected boundaries, access, and anomalies;
- troubleshooting and software work reveal diagnostic layers, conflicts, and an ordered resolution;
- Microsoft, Google, and workplace pages reveal collaboration, device relationships, accounts, and information flow;
- private, home-office, and business pages grow progressively more sophisticated while remaining visibly part of the same system.

The thematic idea must continue beyond hero imagery into section composition, custom icons, technical diagrams, small system visualizations, interface-like details, typography, restrained abstract graphics, meaningful motion, interaction, and subtle reactive behavior. Avoid generic laptop users, technicians pointing at monitors, server racks without service relevance, handshakes, call centers, unrelated AI people, and a different style on every page.

Generated or bespoke imagery should be selective and belong to a deliberately designed family with recurring environments, composition, perspective, materials, and lighting. Identify a small number of high-value master concepts before commissioning assets. Prototype the system on the homepage, one private service, and one business service before expanding it across the site.

The homepage reserves the original illustrated Berlin master environment for the broad place-based entrance. Capability and software states use customer-readable diagnostic paths, interface-like fault views, dependency diagrams, controlled-change sequences, and verified handover views instead of repeating the same image. Public placeholder chrome and internal design-taxonomy labels have been removed from those pages. Shared section rhythm targets approximately 72–96px between adjacent desktop content areas and 48–64px on mobile by controlling each section edge rather than stacking presentation-scale padding. Existing placeholder panels remain only on routes that have not yet entered the controlled conversion sequence; they must be replaced rather than propagated.

The first contrasting service prototypes are computer and laptop troubleshooting for private customers, and office networks and workplace IT for businesses. Until suitable authentic photography exists, do not substitute generic stock people or generated technicians; use environments, devices, systems, illustrations, diagrams, and icons to carry the identity.

## Content-depth and trust model

The homepage entrance must be simple, attractive, reassuring, and immediately understandable. It should explain what the service does and reduce anxiety without leading with certifications, technology lists, or dense terminology. Deeper homepage sections may reveal more evidence while staying understandable.

Private-service pages may contain more detail because their visitors have shown stronger intent. Business pages may go considerably deeper into workplace IT, networking, Microsoft, Google, working methods, technologies, qualifications, and certificates without adopting enterprise-consultancy language or presentation.

Genuine professional qualifications, years of experience, and named technology expertise are the intended trust signals. Use simple reassurance near the entrance, stronger evidence further down, and detailed proof on relevant professional pages. Certifications must prove competence rather than become decorative badge collections, and no credential or duration may be published until its exact wording and evidence are supplied.

## SEO, deployment, and measurement

The current site includes page titles, descriptions, canonical URLs, German/English `hreflang`, Open Graph basics, a generated sitemap, base-aware links, and a GitHub Pages workflow. The workflow builds only when the engine or workflow changes; documentation-only commits do not redeploy the site.

Still required before a meaningful demand test:

- real contact and legal information;
- a chosen brand and production domain;
- search-console verification and privacy-conscious analytics;
- measurable telephone, email, WhatsApp, and form events;
- a reliable form endpoint and consent/data-retention decisions;
- dependency/security maintenance;
- English equivalents or deliberate canonical treatment for remaining German-only service/trust pages.

## Local workflow

Run commands from the engine:

```bash
cd 'ω┇Engine'
npm ci
npm run dev
npm run validate
```

`npm run validate` builds the site and verifies required pages, sitemap size, internal `/vorort/` targets, and the absence of stale `/astro-demo/` references. GitHub Actions runs the equivalent build and output validation before deployment.

The engine's project-level `.npmrc` sets `bin-links=false` so fresh installs do not create symbolic links in `node_modules/.bin`, which keeps the working directory compatible with its Google Drive location. Package scripts invoke Astro's JavaScript entry point directly and must retain that form unless the storage constraint changes.

## Documentation ownership

- This file owns stable purpose, decisions, architecture, website map, and operating facts.
- `Roadmap.md` owns implementation phases and acceptance criteria subordinate to the external Obsidian Chain.
- `Collaboration.md` owns the current handoff and append-only reports from material work sessions.
- The external Chain remains Aykhan's high-level advancing task list and should not be expanded with repository-level implementation detail.
