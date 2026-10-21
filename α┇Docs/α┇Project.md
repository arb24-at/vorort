# Project facts and constraints

Last reviewed: 2026-10-21. Workflow: [AGENTS.md](../AGENTS.md). Assignments: [Tasks](ω┇☑️┇Tasks.md). This file owns facts and current constraints, not implementation history or approvals.

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

Production copy and page-specific scope live in `ω┇Engine/src/content/services/`; the planning-only `ω┇Engine/src/data/seo-keywords.yml` owns keyword routing and research status. Do not present provisional seeds as researched findings when generating copy or duplicate research logs here. German and English research remain distinct evidence sets; their bilingual blueprint shares meaning and structure. Protect service intent over search volume: hardware-repair keywords must not redefine computer support, normal migration must not imply recovery, and business provider terms must not imply a mandatory managed-service/SLA contract. Private landings remain orientation/conversion gateways rather than forced high-volume targets. Preserve canonical and alternate-language pairing; add substantial new pages only for distinct search intent or a genuine customer-information need.


## Routes and content identity

Routes omit the configured `/vorort/` base. Resolve links/assets with existing helpers; content directory, translation ID and slug may differ.

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


Service folders are `computer-laptop`, `software-installation`, `wifi-home-network`, `setup-data-transfer`, `office-network`, `microsoft-365`, `google-workspace`. Read the record for its translation ID rather than deriving it from the folder. Trust/legal English treatment remains a deliberate planning decision; German notices remain the current authority.

## Architecture and editing map

All paths below are inside `ω┇Engine/`.

| Source | Responsibility |
| --- | --- |
| `src/data/site.ts` | Central provisional identity/contact facts, districts and optional English-support messaging |
| `src/content/services/<directory>/<locale>.yml` | Actual editable production copy, metadata and composition |
| `src/content/audience-pages/`, `src/data/audience-pages.ts`, `src/design-system/audience-page-schema.ts` | Validated audience-gateway content and locale-aware service references |
| `src/content.config.ts`, `src/data/service-schema.ts`, `services.ts`, `service-paths.ts` | Collection/schema, pairing, routes and resolution |
| `src/data/seo-keywords.yml` | Planning-only research evidence, intent, exclusions and page ownership |
| `src/design-system/section-recipes.ts` | Section/block definitions, lifecycle, schemas, renderer pointers and guidance |
| `src/design-system/production-policy.ts`, `production-composition.ts` | Explicit page trials and semantic composition checks |
| `src/design-system/presentation.ts`, `src/styles/design-lab/presentation.css` | Named shared presentation contexts |
| `src/components/RecipeSection.astro`, `design-lab/sections/` | Same section implementations for production and Lab |
| `src/components/RecipeServicePage.astro` | Composition and existing contact/related-service shells |
| `src/design-system/workshop-schema.ts`, `src/content/workshop/`, `src/data/workshop*.ts` | Independent specimens, journey fixture and derived distinct-page usage |
| `src/components/design-lab/SectionReview.astro` | Lab-only lifecycle labels and screenshot controls |
| `src/data/navigation.ts`, `src/layouts/MainLayout.astro` | Localised navigation, metadata and customer chrome |
| `src/styles/tokens.css`, `global.css`, `technical-field.css` | Existing shared production foundation |
| `astro.config.mjs`, `.github/workflows/astro.yml` (root) | Static GitHub Pages origin/base and deployment workflow |

Use strict semantic records. Default recipe-service pages use Approved sections/blocks and a shell enquiry. Explicit existing page trials in `production-policy.ts` permit only listed experiments on their exact identity/locale/audience/slug; no trial currently authorises the new list block. Future trials cite an approved blueprint/version and decision. Schema and rendering enforce permissions independently of lifecycle. One opening hero, one enquiry, compatible recipes, unique/reserved anchors and valid navigation remain enforced. Blueprint intent determines the rest of the journey, not a fixed Home Network pattern.

Both home-network and computer-help locale pairs, plus English software, business networks and Microsoft 365 use recipe composition; other records retain their existing templates. Root hero summaries must match the opening recipe. Related IDs resolve through the real route map. The optional `contactAfter` places the legacy shell after orientation and requires further content. Compact presentation follows trial/early-enquiry composition, is shared with Lab, and does not depend on a service ID.

## Audience gateways

All four private/business gateways use `AudiencePage.astro` and validated bilingual `audience-pages/` records. Page identity/locale/audience and explicit trial permissions are checked separately from services. The shared editorial hero, Experimental text introduction, rich prose, staged process, visible FAQ, email enquiry and quick CTA safely support the `audience` page context; existing service consumers retain their contracts and output. New Experimental `scope.service-directory` resolves real service IDs to locale-aware editorial navigation rows, without artwork or nested links. Its generic Private Service Page specimen uses the same renderer. Approved Sections usage includes each audience locale once per recipe. No recipe or block was promoted.

## Design Lab and media

Two surfaces: **Page Workshop** and **Approved Sections**. `/design-lab/workshop/private-service-page/` is the service-agnostic **Private Service Page** specimen gallery; `office-network-concept-ii` remains an independent business journey. These are not duplicate customer websites. Approved Sections derives lifecycle, guidance and real specimens from the registry/fixtures; usage includes each production locale and Workshop once per recipe. No fixed recipe count is policy.

Recipe approval accepts meaning, fixed interactions and compatibility, not every block/order in a screenshot. Existing prose, subheading, columns, callout, media and table blocks retain their inherited historical approval; the new native list is independently Experimental. Parent and block states display separately in Lab; Approved Sections also lists the canonical block palette inside its authoring disclosure. Unregistered proposals have no renderer. The compact specimen demonstrates selective blocks, list alternatives and optional introductions. See Design/Implementation roles for maintenance.

Lab review/capture tools stay out of production. Capture is dynamically loaded, keyboard-operated and resource-limited; clipboard failure downloads the same PNG. Lab routes are noindex/nofollow, unlisted rather than authenticated, and excluded from customer navigation/sitemap. Existing retired Wi-Fi-specific fixtures remain retired.

The visual family uses strong typography, meaningful hierarchy, navy/petrol/off-white, restrained mint/orange and tactile editorial illustration where useful. Recompose on mobile, preserve focus/source order and reduced-motion behaviour. Avoid generic technician imagery, decorative cybersecurity motifs and uniform card grids. Shared blocks/variants support content; they do not prescribe its quantity. Provisional artwork use is not acceptance; [Media Queue](ω┇Media-Queue.md) owns requests, crops and complete standalone prompts.

## Contact and publication constraints

No authorised direct-delivery backend is installed. Experimental `contact.enquiry-email` prepares a localised encoded draft for the visitor's mail app; the visitor must send it. The older `ContactSection` also uses mailto and a disclosure, including the current software page and German/default pages. Its older fields/mobile presentation differ from the intended enquiry below; this is recorded QA debt, not an approved universal experience. `ContactEnquiry.astro` uses shared EN/DE interface strings, feedback and draft labels; existing English consumers preserve their wording and transport. The German private gateway adopts it without changing legacy service forms.

The intended enquiry has required name, preferred reply method, request and selected email/phone; optional location, company (business), device/service and appointment context. Known audience is hidden. Inactive reply fields are disabled. Show privacy information/link and a sensitive-data warning. Do not ask for passwords, authentication/recovery codes, card data or remote-access credentials. Standard checkbox consent is not a design requirement; separate consent requires a real legal/data-use purpose. Direct-submit `contact.enquiry` needs an authorised endpoint, spam/error/delivery behaviour and provider/privacy/retention facts before production adoption. Phone, WhatsApp and email remain direct alternatives, with provisional details centrally sourced.

Current hosting configuration: `https://arb24-at.github.io/vorort/`; no server adapter or analytics. Domain, public identity/contact/legal data, qualification evidence, travel policy, media acceptance, backend/privacy and release QA remain unresolved. Do not infer publication readiness from source completion, a passing build or a local commit. The engine's `.npmrc` retains `bin-links=false` for Drive; scripts call Astro's JavaScript entry point directly.
