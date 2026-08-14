# VorOrt project documentation

Last updated: 2026-08-14

## Purpose and positioning

VorOrt is the internal name for a Berlin-focused IT-support website serving private customers, home offices, and small business offices. The public brand has not been selected; the current `BerlinTech Support` identity is provisional.

The website is intended to operate as a normal local Berlin service presence while also providing evidence of demand through calls, emails, prepared form enquiries, WhatsApp conversations, relevant search visibility, and service-page engagement. Public copy must not mention a waitlist, Baku, or delayed operating availability. Communication is primarily in German from Berlin, with optional messaging that contact and technician service are also available in English.

The offer may cover practical computer, software, hardware, setup, migration, connectivity, networking, Microsoft, Google, workplace, troubleshooting, and related IT-support work. Exact promises, prices, response times, and exclusions must remain truthful and should be confirmed before being expanded in public copy.

## Decisions currently in force

- `VorOrt` is an internal project name, not the chosen customer-facing brand.
- German is the default language at `/`; English is maintained separately under `/en/` for stronger language quality and SEO.
- Stable translation pairs are connected by service IDs in `src/data/services.ts`, rather than runtime machine translation.
- English-service messaging is centrally configurable and currently enabled.
- The site remains static-first with no accounts or authentication.
- GitHub Pages is the current host at `https://arb24-at.github.io/vorort/`.
- The current telephone, WhatsApp, email, postal address, legal identity, and badge assets are placeholders until verified replacements are supplied.
- Certification badges may only represent credentials actually earned and verifiable. The DSGVO graphic describes a process intention and is not an independent certification.
- Editable business facts and localized content should eventually move to validated Markdown/content collections. Foundational spacing, typography, components, and accessibility behavior stay in code; Markdown must not become an unrestricted page builder.

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

The current blue, white, rounded-card interface is a functional prototype, not the final brand system. The removed standalone HTML concept contributed several ideas worth retaining: clear service signaling, icon-supported scanning, a diagnostic/status-panel metaphor, visible Berlin relevance, and trust/process content that reduces uncertainty.

The future direction should go beyond unrelated service stock photographs. Explore a consistent visual world—such as a recognizable connected Berlin home/office/building environment—that changes state by subject:

- networking reveals coverage, signal paths, and connection problems;
- security reveals protected boundaries, access, and anomalies;
- repair reveals diagnostic layers and isolated faults;
- setup and migration reveal information and devices moving into an ordered state;
- private and business pages show distinct contexts while remaining visibly part of the same system.

Use bespoke imagery selectively. The same visual grammar should extend into icons, diagrams, background details, status colors, and motion. Prototype the system on the homepage and two contrasting service pages before commissioning a large asset library.

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

## Documentation ownership

- This file owns stable purpose, decisions, architecture, website map, and operating facts.
- `Roadmap.md` owns implementation phases and acceptance criteria subordinate to the external Obsidian Chain.
- `Collaboration.md` owns the current handoff and append-only reports from material work sessions.
- The external Chain remains Aykhan's high-level advancing task list and should not be expanded with repository-level implementation detail.
