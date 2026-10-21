---
kind: site-map
status: review-draft
scope: vorort
last-reviewed: 2026-10-20
blueprint-version: 0.2
approval: pending-product-owner-review
owner: Aykhan
---

# Site-wide blueprint — review draft

> **Purpose:** The site's editorial map: what each page owns, how visitors travel between pages, and which important questions still need a destination. This is a **reviewable site plan**, not a roadmap, SEO research log, task board, approval record, or instruction to publish pages. Routes and keyword ownership below reflect the existing planning sources; the ownership and link relationships below are proposed for approval.

## 1. Site promise and visitor journeys

**Promise:** Useful, trustworthy on-site IT services in Berlin for private customers, home-office users, freelancers, and small businesses. Describe recognisable needs first; offer relevant technical detail as visitors move deeper into service pages. No invented prices, emergency response, qualifications, customer testimonials, or guaranteed results.

**Journey A — Private customer:** Homepage → Private-services landing → appropriate detailed service → related service if needed → enquiry.

**Journey B — Small business:** Homepage → Business-services landing → appropriate business service → useful related systems or trust detail → enquiry.

**Journey C — Search arrival:** Relevant detailed service → quick recognition of the problem → explanation of options/scope → contextually related page where appropriate → enquiry.

**Language:** German `/` and independently authored English `/en/`. They should describe the same truthful service, but the planned information and section purposes are shared; headlines and phrasing follow natural locale writing and distinct research. Locale counterparts are connected by canonical/alternate-language metadata; not every German-only general/legal page must automatically acquire an English counterpart.

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

**Status rule:** A route in this map is not evidence of QA completion, release readiness, or even a completed page blueprint. Existing content records and live source own implementation state.

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

## 5. Blueprint portfolio and authoring decisions

Use one detailed bilingual `<actual-content-directory>-bp.md` per service. Existing review drafts: [Home networks](wifi-home-network-bp.md) and [Software installation](software-installation-bp.md). Use [the detailed template](Template┇Bilingual%20Page%20Blueprint.md) for remaining families. Directory and translation ID are both explicit; e.g. `office-network` owns translation ID `network-it-support`. Non-service pages link their actual source files.

The site map is approved first; page drafts can then be reviewed individually. English precedes German generation after that page's approval. Both convey the same planned meaning, with per-section EN/DE SEO guidance. Supported blocks are flexible; word ranges are guidance. Specified experiments require exact page trial permissions and keep their lifecycle. Routine refinements do not reopen blueprint review; changes to intent, service scope, journey or essential interactions do.

## 6. Evidence and current adoption

`seo-keywords.yml` owns evidence status and Keyword Planner findings. Preserve existing research; investigate gaps rather than restarting the whole map. Both `wifi-en` and `wifi-de` retain researched-2026-09-03 Keyword Planner evidence. `software-en` and `software-de` remain provisional seeds; software terms in its draft are coverage proposals rather than volume-backed findings. Research & SEO should investigate those gaps without downgrading existing research.

Current production records remain authoritative for rendered content/routes. The new bilingual drafts are targets, not proof of German/English parity. Existing authorised English experiments continue independently of this pending map. Project owns business truth, Tasks owns sequence, Media Queue owns asset acceptance and Collaboration owns active verification.

## 7. Decisions for Aykhan

1. Approve or revise this ownership map and contact journey as the site-wide baseline.
2. Confirm the proposed separation of NAS guidance from any future independent NAS page; no new route is created.
3. Choose the English trust/legal treatment when those blueprints are prepared. German legal sources remain current destinations.
4. Review the two bilingual page drafts individually after the site-wide decision. Their experimental choices, contact/localisation dependencies and media questions remain pending.

**Approval:** Pending. No page/section/block promotion, customer-copy migration or publication follows from creating this draft.
