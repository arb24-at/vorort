# VorOrt project documentation

Last updated: 2026-08-27

## Purpose and positioning

VorOrt is the provisional project and public working name for a Berlin-focused IT-support service. It is not the final brand, so architecture and major design decisions must not depend on the name being permanent. The earlier `BerlinTech Support` identity is retired as the working direction.

The website is intended to operate as a normal local Berlin service presence and generate genuine enquiries while testing commercial demand through calls, form enquiries, WhatsApp conversations, relevant search visibility, traffic quality, contact intent, and service-page engagement. A polished professional presence is a means to that outcome rather than an end in itself. Public copy must not mention a waitlist, Baku, or delayed operating availability.

The primary audiences are private customers, home-office users, freelancers, and very small businesses, including visitors who may be discouraged by overly technical IT websites. The service should feel accessible to them without publicly labelling them as a demographic segment. On-site support throughout Berlin is the defining service model; remote support and initial diagnosis remain supporting options where appropriate.

The current primary service pillars are computer and laptop troubleshooting, software installation and optimization, office networks and workplace IT, Microsoft 365, and Google Workspace. Public organization should follow customer needs and problems, not internal service tiers. Hardware and component-level repair, low-value repair work, and trivial standalone fixes that cannot reasonably support a professional service rate must not become core advertised categories. Small related tasks may still be handled during a larger visit.

The intended market position combines an accessible neighborhood IT expert, a calm established professional service, and a modern small-business specialist. It must not resemble either a cheap repair shop, a luxury technology concierge, or an expensive enterprise consultancy.

## Decisions currently in force

- `VorOrt` is the provisional public working name, not the final customer-facing brand.
- German is the default language at `/`; English is maintained separately under `/en/` for stronger language quality and SEO.
- Stable translation pairs are connected by service IDs in `src/data/services.ts`, rather than runtime machine translation.
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

Actively represented technology and service areas are Windows computers, Microsoft 365, Google Workspace, Wi-Fi and local networks, printers and peripherals, backups and cloud storage, email and domain configuration, security and account protection, workplace software, device setup, data migration, software installation and optimization, and general system troubleshooting. Apple/macOS, smartphones and tablets, NAS devices, Windows Server, and Linux may be supported where a request fits. They do not all need prominent service categories. Linux and server knowledge may demonstrate deeper capability on relevant business pages without implying enterprise datacenter operations.

The initial business audience is generally workplaces of approximately 1–20 users, including home offices, practices, shops, studios, and similar small organizations. Assess requests individually and do not publish 20 users as an absolute ceiling. One-off projects and problem resolution are primary; optional recurring support may be offered without making a long-term contract feel mandatory.

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

The engine uses Astro 5 with static output. There is one shared layout, reusable header/footer/contact/service components, TypeScript data modules, a global CSS system, and minimal client JavaScript for header behavior. No server adapter, CMS, analytics integration, or form backend is currently installed.

Important sources of truth inside `ω┇Engine`:

- `src/data/site.ts`: provisional public identity, contact channels, service districts, and optional English-support messaging.
- `src/data/services.ts`: German and English service copy, stable translation identity, and service route metadata.
- `src/data/navigation.ts`: language-specific navigation.
- `src/layouts/MainLayout.astro`: canonical, alternate-language, Open Graph, header, and footer behavior.
- `astro.config.mjs`: deployment origin and `/vorort/` base path.

The contact form currently prepares an email through the visitor's configured mail client. It is not a server-backed submission and cannot independently count abandoned or completed form attempts. Calls, email, and WhatsApp are the practical contact channels until the conversion backend is chosen.

## Website map

The sitemap contains 22 indexable URLs; the separate 404 page brings the generated HTML total to 23.

| Purpose | German route | English route |
| --- | --- | --- |
| Homepage | `/` | `/en/` |
| Private-services landing | `/leistungen/privatpersonen/` | `/en/services/private/` |
| Computer and laptop help | `/leistungen/privatpersonen/computer-laptop-hilfe/` | `/en/services/private/computer-laptop-help/` |
| Wi-Fi and home networks | `/leistungen/privatpersonen/wlan-heimnetz/` | `/en/services/private/wifi-home-network/` |
| Setup and data transfer | `/leistungen/privatpersonen/einrichtung-datenumzug/` | `/en/services/private/setup-data-transfer/` |
| Business-services landing | `/leistungen/unternehmen/` | `/en/services/business/` |
| Microsoft 365 workplaces | `/leistungen/unternehmen/microsoft-365-arbeitsplaetze/` | `/en/services/business/microsoft-365-workplaces/` |
| Google Workspace | `/leistungen/unternehmen/google-workspace-cloud/` | `/en/services/business/google-workspace-cloud/` |
| Network and office IT | `/leistungen/unternehmen/netzwerk-it-betreuung/` | `/en/services/business/network-it-support/` |
| System and software overview | `/leistungen/reparatur-installation/` | Not yet mirrored |
| Security and certifications | `/datensicherheit-zertifizierungen/` | Not yet mirrored |
| Legal notice | `/impressum/` | German legal source linked from English pages |
| Privacy policy | `/datenschutz/` | German legal source linked from English pages |
| Sitemap | `/sitemap.xml` | Shared |
| Not found | `/404.html` | Shared |

All routes are served beneath the GitHub Pages repository base, for example `/vorort/en/`. Source code should continue using the base-aware URL helper rather than hard-coding the repository prefix into individual links.

## Visual direction

The first connected-space interface is now implemented as a functional prototype foundation. It replaces the generic blue card system with warm neutral entrance surfaces, a dark technical layer, coral action accents, editorial typography, stronger section rhythm, and distinct private/business page states. Retain its sound structural and interaction patterns while continuing to refine the identity; do not treat this first visual pass or the provisional name as permanently fixed.

The desired impression is trustworthy, competent, and modern, supported by approachability, calmness, friendliness, and local familiarity. The site should look like a real Berlin IT service without resembling a conventional IT-company template, a cheap repair shop, or an intimidating consultancy.

The governing visual principle is a coherent environment that changes state by subject. This adapts the successful logic of a previous conservatory website, where one recognizable environment expressed rain, winter, sun, leakage, insulation, or repair according to the page topic. On this site, visitors should often understand a service context through the page treatment before reading its heading.

Explore a consistent Berlin home, home-office, and small-office visual world that changes state by subject:

- networking reveals coverage, signal paths, and connection problems;
- security reveals protected boundaries, access, and anomalies;
- troubleshooting and software work reveal diagnostic layers, conflicts, and an ordered resolution;
- Microsoft, Google, and workplace pages reveal collaboration, device relationships, accounts, and information flow;
- private, home-office, and business pages grow progressively more sophisticated while remaining visibly part of the same system.

The thematic idea must continue beyond hero imagery into section composition, custom icons, technical diagrams, small system visualizations, interface-like details, typography, restrained abstract graphics, meaningful motion, interaction, and subtle reactive behavior. Avoid generic laptop users, technicians pointing at monitors, server racks without service relevance, handshakes, call centers, unrelated AI people, and a different style on every page.

Generated or bespoke imagery should be selective and belong to a deliberately designed family with recurring environments, composition, perspective, materials, and lighting. Identify a small number of high-value master concepts before commissioning assets. Prototype the system on the homepage, one private service, and one business service before expanding it across the site.

The current implementation uses intentional visual placeholder panels rather than generic stock or generated imagery. Each panel records its future role, subject, state, and accessible description, so commissioned master environments can replace the placeholders without changing the surrounding page hierarchy or visual narrative.

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
