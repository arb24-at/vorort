---
kind: site-map
status: structure-example
scope: vorort
last-reviewed: 2026-10-20
owner: Product Owner approval pending
---

# Site-wide blueprint — structure example

> **Purpose:** The site's editorial map: what each page owns, how visitors travel between pages, and which important questions still need a destination. This is a **structure proposal**, not a roadmap, SEO research log, task board, approval record, or instruction to publish pages. Routes and keyword ownership below reflect the existing planning sources; proposed relationships are illustrative and require review.

## 1. Site promise and visitor journeys

**Promise:** Useful, trustworthy on-site IT services in Berlin for private customers, home-office users, freelancers, and small businesses. Describe recognisable needs first; offer relevant technical detail as visitors move deeper into service pages. No invented prices, emergency response, qualifications, customer testimonials, or guaranteed results.

**Journey A — Private customer:** Homepage → Private-services landing → appropriate detailed service → related service if needed → enquiry.

**Journey B — Small business:** Homepage → Business-services landing → appropriate business service → useful related systems or trust detail → enquiry.

**Journey C — Search arrival:** Relevant detailed service → quick recognition of the problem → explanation of options/scope → contextually related page where appropriate → enquiry.

**Language:** German `/` and independently authored English `/en/`. They should describe the same truthful service, but headlines, priorities, and phrasing may differ with independently researched intent. Locale counterparts are connected by canonical/alternate-language metadata; not every German-only general/legal page must automatically acquire an English counterpart.

## 2. Page ownership inventory

Use each `seo-keywords.yml` ID for the existing research/routing record. Routes are shown without the deployment base (`/vorort`). *Gateway* pages orient; *service* pages answer one distinct customer intent; *trust* and *legal* pages do not manufacture commercial keyword targets.

| Page family / page | DE route and SEO ID | EN route and SEO ID | Primary job / boundary |
| --- | --- | --- | --- |
| Homepage | `/` · `home-de` | `/en/` · `home-en` | Broad Berlin/on-site IT entrance; route visitors to the correct audience and service |
| Private-services gateway | `/leistungen/privatpersonen/` · `private-landing-de` | `/en/services/private/` · `private-landing-en` | Help people choose a home/personal IT service; do not duplicate detail pages |
| Computer & laptop help | `/leistungen/privatpersonen/computer-laptop-hilfe/` · `computer-laptop-de` | `/en/services/private/computer-laptop-help/` · `computer-laptop-en` | Troubleshooting, performance, legitimate access; not a component-repair workshop |
| Software installation & optimisation | `/leistungen/privatpersonen/software-installation-optimierung/` · `software-de` | `/en/services/private/software-installation-optimisation/` · `software-en` | Software installation, setup, updates, conflicts and optimisation |
| Wi-Fi & home networks | `/leistungen/privatpersonen/wlan-heimnetz/` · `wifi-de` | `/en/services/private/wifi-home-network/` · `wifi-en` | Whole-home network planning, Wi-Fi/Mesh, cabling, devices and NAS as part of a network |
| Computer setup & data transfer | `/leistungen/privatpersonen/einrichtung-datenumzug/` · `setup-transfer-de` | `/en/services/private/setup-data-transfer/` · `setup-transfer-en` | New computer setup and migration of ordinarily readable data; not data recovery |
| Business-services gateway | `/leistungen/unternehmen/` · `business-landing-de` | `/en/services/business/` · `business-landing-en` | Entry to small-business IT support; orient rather than duplicate individual services |
| Microsoft 365 & workplaces | `/leistungen/unternehmen/microsoft-365-arbeitsplaetze/` · `microsoft-365-de` | `/en/services/business/microsoft-365-workplaces/` · `microsoft-365-en` | Accounts, email, collaboration, workplace setup and supported integration |
| Google Workspace | `/leistungen/unternehmen/google-workspace-cloud/` · `google-workspace-de` | `/en/services/business/google-workspace-cloud/` · `google-workspace-en` | Workspace, Gmail/domain/users/sharing and migration within documented scope |
| Business network & IT support | `/leistungen/unternehmen/netzwerk-it-betreuung/` · `network-it-de` | `/en/services/business/network-it-support/` · `network-it-en` | Small-business network architecture, equipment, cabling and related infrastructure |
| Trust / working with data | `/datensicherheit-zertifizierungen/` · `trust-de` | **No verified equivalent in the SEO map** | Explain responsible data, access and backup practices; never imply unverified certifications |
| Legal notice & privacy | `/impressum/`, `/datenschutz/` | Existing footer currently links to German notices | Legal obligations; verify operator/contact/privacy before launch, not SEO landing pages |

**Status rule:** A route in this map is not evidence of final copy approval, release readiness, or even a completed page blueprint. Existing content records and live source own implementation state.

## 3. Topic ownership and adjacent-page decisions

| Topic / customer need | Primary existing owner | Secondary mentions permitted | Linking rationale |
| --- | --- | --- | --- |
| Better Wi-Fi / Mesh in a home | Wi-Fi & home networks | Private gateway; home-office context on other pages | Keep the substantial explanation on the home-network service |
| Ethernet/network cabling at home | Wi-Fi & home networks | Home-office, setup and private gateway | Explain why a wired connection may solve a different room's problem |
| NAS storage in a home | **Currently part of Wi-Fi & home networks** | Computer setup/data transfer; business networks for business use | Useful short-to-medium explanation now; evaluate a standalone NAS page only if intent and real service depth justify it |
| Backups and migration | Computer setup & data transfer (for setup/migration) | NAS section as a supporting concept | Never imply NAS/RAID alone is a complete backup or promise data recovery |
| Managed workplace accounts | Microsoft 365 / Google Workspace | Business landing; business network where interdependent | Each platform owns its own detailed service; cross-link only for genuine integration needs |
| Business cabling and network infrastructure | Business network & IT support | Business landing; relevant platform setup | Do not send business infrastructure visitors to the residential network page as the primary answer |
| Computer symptoms and software faults | Computer & laptop help; Software installation & optimisation (distinct) | Each other as useful adjacent help | Avoid duplicating symptom lists and targeting one another's primary search intent |

**Candidate only — Dedicated NAS service page.** No route, SEO target or approval is assigned here. Evidence required before creation: a distinct customer problem, defensible depth of service, language-specific search intent, and a clear difference from the home-network and data-transfer pages. Until then the home-network page keeps useful NAS guidance without a dead-end link.

## 4. Internal-link architecture — proposed relationships

| Origin | Destination | Why a visitor would follow it | Placement suggestion | Readiness |
| --- | --- | --- | --- | --- |
| Homepage | Private and business gateways | Choose their situation | Primary navigation / prominent audience choice | Existing pages |
| Private gateway | Four detailed private services | Choose the appropriate problem | Service choices | Existing pages |
| Business gateway | Microsoft 365, Google Workspace, business networks | Choose the relevant business system | Service choices | Existing pages |
| Home networks | Computer setup & data transfer | They are connecting a new computer or moving data | Home-office/NAS context or related-services section | Existing target; exact inline-link support to verify |
| Home networks | Computer & laptop help | Network is fine; the computer itself has a fault | Diagnosis boundary or related-services section | Existing target |
| Home networks | Dedicated NAS page | They need deeper NAS-specific planning/setup | NAS chapter, not a generic footer | **Not yet actionable — page unapproved/uncreated** |
| Business networks | Microsoft 365 or Google Workspace | Identity, workstation and network dependencies intersect | Relevant integration explanation | Existing targets |
| All service pages | Contact section | They want next steps, scope or a quotation | Contextual CTA plus end-of-page enquiry | Existing shell; submission backend remains unresolved |
| German/English counterparts | Corresponding locale route | Read equivalent service in preferred language | Language switch and hreflang | Existing paired routes |

**Link quality rule:** Link where the next page answers a real question, with descriptive anchor text. The quantity of links is not a ranking objective. Do not create cross-language, nonexistent or placeholder destinations. Verify rendered links against existing recipes and implementation capabilities; blueprint wishes are not proof that inline links are currently supported.

## 5. Blueprint portfolio

**Naming convention (proposal):** `<identity>-<locale>-bp.md`, one per locale where page-specific decisions differ; link them by a common page identity. Keep the map's page inventory stable and give full section-by-section treatment in the individual blueprints, not here.

**Initial example:** `wifi-home-network-de-bp.md` — structure for the existing German Wi-Fi/home-network route. The English counterpart should reuse confirmed service facts and site relationships while following `wifi-en` research independently.

**Page-level information expected:** audience and job; precise content/search ownership; service boundaries; ordered section decisions with canonical recipe IDs; rough per-section word ranges; permitted blocks/creative latitude; contextual link placement; visual/media purpose; conversion path; open decisions; acceptance checks.

## 6. Connections to authoritative project sources

- `AGENTS.md` and `α┇Docs/α┇Project.md` — business/service truth and current execution rules.
- `ω┇Engine/src/data/seo-keywords.yml` — canonical keyword routing, search-intent research status, harmful intents. Never copy volume research into this map.
- `ω┇Engine/src/design-system/section-recipes.ts` — canonical recipe lifecycle, approval, semantics, block schema and flexible authoring contract. This map must never declare new approval.
- `ω┇Engine/src/content/services/` — validated production copy and locale-specific service data.
- `α┇Docs/ω┇Media-Queue.md` — real media requests and acceptance, not duplicated here.
- `α┇Docs/β┇Roadmap.md` and `α┇Docs/ω┇☑️┇Tasks.md` — priority and execution; this map must not become a second task queue.

## 7. Review questions for the structure (not implementation tasks)

1. Should all individual blueprints use a small fixed set of field labels, or should a section be allowed to omit fields it does not need?
2. Would you prefer a graph-style overview alongside the inventory table?
3. Should we retain one page blueprint per locale or use a shared bilingual skeleton with locale-specific SEO appendices? The example uses the former for clarity.
4. Should optional new pages such as NAS be captured in this map as *candidates*, or only after their distinct intent is proven?

**Approval:** Structure draft only. No production or workflow documents were changed, and no page is approved by this file.
