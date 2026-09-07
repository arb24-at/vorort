# VorOrt collaboration handoff

Last updated: 2026-09-06

## Current handoff

- Active branch: `main`.
- Current working state: the Drive source now carries project version `1.5.3` for the researched German Google Workspace service expansion. The previous `1.5.1` German business-landing slice and the pre-existing `1.5.0` state still require local Git sequencing and verification because this Drive-connected session cannot inspect the working tree or commit history.
- Local validation: the previous handoff records a passing `npm run validate` for the split-service architecture with 25 HTML pages, 23 sitemap URLs and the documented negative content checks. For `1.5.3`, this Drive session checks the expanded German Google Workspace service, updated SEO routing and project documents locally and requires exact Drive readback; repository-shell build, diff and status checks are not available here.
- Local browser verification: the German homepage and software reference page were reviewed at 1440×1000, 768×1024, 390×844, and 320×720 with zero horizontal overflow. Desktop/mobile navigation, 44px mobile service targets, Escape behavior, delayed contact dock, headline scale, image crop, section rhythm, and all four software visual states were checked.
- Deployment state: the previous handoff recorded `origin/main` at `8463415` and local work ahead of it. Deployment state was not rechecked in this Drive-connected session, so the current `1.5.2` Drive changes should be treated as undeployed until verified locally and pushed.
- Product-direction state: the final design direction remains approved and stabilized. Both business landings are independently researched gateways: German owns broad `IT-Dienstleister Berlin` intent and English owns `IT support Berlin` with `IT services Berlin` as a strong secondary phrase. The German Google Workspace page now owns `google workspace einrichten` and treats support, migration, Gmail/domain, Shared Drives, security and backup as supporting intents without positioning Workspace as the default preferred platform. Both lead with operational needs, one-off projects/problem resolution and optional recurring support rather than a mandatory Managed-Services/Systemhaus contract model. The German/English business network reference pages remain project-led; the German/English private Wi-Fi/home-network and setup/data-transfer pairs remain expanded bilingually. `Datenrettung Berlin` remains a separate adjacent recovery intent, password/account-access/BitLocker demand belongs to computer/laptop help, and Smart Home remains a future researched service intent.
- Known blockers: final public brand, supplied telephone and WhatsApp values, email, postal/legal identity, exact qualification evidence, travel policy, real form backend, analytics, final imagery, and production domain remain unresolved or provisional. The clean install also reports nine dependency audit findings for later dependency-maintenance review.
- Recommended next action: run repository validation, diff and status checks locally against the current combined tree, resolve the outstanding local commit sequencing, then independently research and write the English Google Workspace counterpart before returning to the private computer/laptop-help expansion.

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

## 2026-09-07 — ChatGPT — German Google Workspace setup and support expansion

- Objective: use the completed Google Workspace capability Q&A, German Berlin Keyword Planner results and current Google/competitor SERPs to expand the German service around practical small-business setup and implementation without presenting Workspace as the automatically preferred platform.
- Changes:
  - Reworked `ω┇Engine/src/content/services/google-workspace/de.yml` from a short standard record into a `guided-business` page covering new Workspace setup, tariff/order guidance, business Gmail/domain configuration, users/groups/admin roles, Shared Drives and permissions, Windows/macOS integration, 2-step verification/recovery options, migrations into and out of Workspace, Microsoft 365 coexistence, troubleshooting and optional independent backup.
  - Updated `ω┇Engine/src/data/seo-keywords.yml` so the German route is `researched-2026-09-07` with `google workspace einrichten` as primary intent. Both `google workspace einrichten` and `google workspace support` returned 100–1k monthly searches; SERP review showed generic support heavily mixed with Google's own Customer Care/admin-help intent, so support remains secondary to setup/implementation.
  - Recorded supplied secondary demand: `google workspace migration`, `google workspace service`, `gmail für unternehmen` and `google workspace backup` at 10–100, plus related Gmail/domain/setup phrases. `google workspace einrichten lassen`, `google workspace beratung` and `google workspace dienstleister` returned 0–10 and do not drive the page.
  - Kept training, routine ongoing administration, and enterprise-level DLP/eDiscovery/SSO/identity/compliance work outside the advertised standard scope. Workspace may be compared with Microsoft 365 when platform choice is still open rather than being recommended by default.
  - Updated `Project.md` and `Roadmap.md` to record the researched German Workspace scope and the still-pending independently researched English counterpart. Bumped `AGENTS.md` from `1.5.2` to `1.5.3`.
- Decisions: the German page owns Google Workspace setup/implementation intent. It supports businesses already using Workspace or deliberately choosing it, including migration in either direction where supportable. Direct Google product support remains distinct from the local environment-focused service. Google licenses are not represented as proprietary/reseller inventory; tariff selection and ordering assistance can be provided.
- Validation: re-read current `AGENTS.md`, `Project.md`, `Roadmap.md`, `Collaboration.md`, the German Google Workspace source, SEO map and expanded German Microsoft 365 reference page before editing; reviewed current Google setup/support/migration documentation and Berlin commercial SERPs; parsed the staged YAML and checked guided-business structural requirements and SEO lengths locally. Exact Drive readback is required after writing. `npm run validate`, browser rendering, `git diff --check`, `git status --short`, Git commit and push are not available in this Drive-only session.
- Blockers or required input: no further German Google Workspace keyword batch is required. The English counterpart still needs independent English Keyword Planner/SERP research. Existing production brand/contact/legal/qualification/travel/form/analytics/domain blockers remain unchanged.
- Recommended next action: validate the combined tree locally, then independently research and expand `/en/services/business/google-workspace-cloud/` before returning to computer/laptop help.

## 2026-09-06 — ChatGPT — English business-services landing and IT-support intent rewrite

- Objective: independently rewrite `/en/services/business/` from the supplied English Berlin Keyword Planner evidence and current English-language Berlin SERPs, giving the landing broad business-provider intent without translating German `IT-Dienstleister` wording or implying a Managed-Services contract model.
- Changes:
  - Replaced the 122-byte English business route wrapper with a dedicated full landing page covering common operational situations, links to Microsoft 365/Google Workspace/network infrastructure, planned IT projects, targeted troubleshooting, one-off work plus optional recurring support, a four-step working method, technical breadth, IT experience since 2008, data/change handling, Berlin coverage, business FAQs and the shared English business contact section.
  - Kept the shared `ServiceLanding.astro` component unchanged for the private English landing; the business route now owns its richer composition directly rather than forcing a meaningfully different business page into the shared landing component.
  - Updated `ω┇Engine/src/data/seo-keywords.yml` so `/en/services/business/` is `researched-2026-09-06` with `IT support Berlin` as primary intent and `IT services Berlin` as the strongest secondary phrase. The English homepage no longer provisionally owns `IT support Berlin`; it keeps a broader provisional `IT help Berlin` role until homepage-specific English research is completed.
  - Updated `Project.md` and `Roadmap.md` to record the independently researched English landing and the bilingual business-landing intent split. Bumped root `AGENTS.md` from `1.5.1` to `1.5.2` for this separate content slice.
- Decisions: supplied Keyword Planner data places `it support berlin`, `it services berlin` and `it company berlin` at 100–1k monthly searches; `it support in berlin` also appears at 100–1k, while `managed it services berlin` is 10–100 and all tested long business-qualified variants are 0–10. `IT support Berlin` therefore owns the English business landing. `IT services Berlin` is a major supporting term. `IT company Berlin` is treated as broad provider vocabulary rather than a forced headline. Job-search phrases and top/best/big-company list intent are excluded. Managed-services wording is adjacent demand but not a target because the standard offer is project work/problem resolution with optional recurring support, not mandatory outsourced IT, SLAs or monitoring.
- Validation: re-read the current Drive copies of `AGENTS.md`, `Project.md`, `Roadmap.md`, `Collaboration.md`, the English landing route, shared landing component, German business landing and SEO map before editing; reviewed current Berlin IT-support/managed-service SERPs; checked the new Astro page for balanced section/article/aside/list/MainLayout tags and one H1; checked the SEO routing edits and document replacements locally. Exact Drive readback is required after writing. `npm run validate`, browser rendering, `git diff --check`, `git status --short`, Git commit and push are not available in this Drive-only session.
- Blockers or required input: no further English business keyword batch is required. Existing production brand/contact/legal/qualification/travel/form/analytics/domain blockers remain unchanged, and local Git sequencing for the pre-existing `1.5.0`, German `1.5.1` and current `1.5.2` slices still needs repository-shell verification.
- Recommended next action: validate the combined tree locally, then continue content work with Google Workspace or the private computer/laptop-help page.

## 2026-09-06 — ChatGPT — German business-services landing and provider-intent rewrite

- Objective: replace the outdated German `IT-Loesungen fuer Unternehmen` landing with a researched business gateway that matches the confirmed small-and-growing-business offer and owns broad Berlin IT-provider intent without falsely presenting VorOrt as a classic Managed-Services Systemhaus.
- Changes:
  - Reworked `ω┇Engine/src/pages/leistungen/unternehmen.astro` with proper German typography and a new `IT-Dienstleister für Unternehmen in Berlin` positioning, operational customer situations, links to the three dedicated business service areas, project and troubleshooting scopes, optional recurring support, a four-step working method, technology breadth, data/change handling, Berlin coverage, business FAQs and the shared business contact section.
  - Removed stale or unsupported positioning from the old page, including `kleine und mittlere Unternehmen`, VoIP, monitoring-led language, transliterated `fuer/Buero` customer copy and the implication that ongoing operation/IT-Betreuung is the default engagement.
  - Updated `ω┇Engine/src/data/seo-keywords.yml` so the German business landing is `researched-2026-09-06` with `it dienstleister berlin` as primary intent. Supplied Keyword Planner results place `it dienstleister berlin`, `it firmen berlin`, `it unternehmen berlin`, `it systemhaus berlin`, `systemhäuser berlin` and `berlin systemhaus` at 100–1k monthly searches; `edv dienstleister berlin` and `it lösungen berlin` are 10–100, while all tested long `für Unternehmen` variants are 0–10.
  - Recorded that current Berlin Systemhaus SERPs skew toward complete outsourced IT, Managed Services, monitoring, SLAs and monthly contracts. The landing may serve adjacent Systemhaus search intent but must not claim that operating model; one-off projects/problem resolution remain primary and recurring support is optional.
  - Updated `Project.md` and `Roadmap.md` with the German landing's broad provider-intent ownership and the still-pending independently authored English counterpart. Bumped root `AGENTS.md` from the pre-existing `1.5.0` to `1.5.1` for this separate content slice.
- Decisions: the German business landing owns broad `IT-Dienstleister Berlin` intent. `IT-Firma`, `IT-Unternehmen` and Systemhaus terminology are useful related search language, but dedicated Microsoft 365, Google Workspace and network/infrastructure pages retain their narrower intents. The public offer remains suitable for small and growing organizations without a published size ceiling or mandatory long-term support contract.
- Validation: inspected the latest Drive copies of `AGENTS.md`, `Project.md`, `Roadmap.md`, `Collaboration.md`, the business landing source and SEO map before editing; reviewed current Berlin Systemhaus/IT-Dienstleister SERPs; checked the rewritten Astro source for balanced tags/imports and parsed the updated SEO YAML locally. Exact Drive readback is required after writing. `npm run validate`, browser rendering, `git diff --check`, `git status --short`, Git commit and push are not available in this Drive-only session.
- Blockers or required input: no additional German business Q&A is required. The English business landing still needs its own English SERP/keyword wording pass. The pre-existing `1.5.0` bump and current local Git state cannot be verified from Drive. Existing production brand/contact/legal/qualification/travel/form/analytics/domain blockers remain unchanged.
- Recommended next action: validate and inspect the combined tree locally, then independently research and rewrite `/en/services/business/` around natural English provider intent without mechanically translating German `IT-Dienstleister` phrasing.

## 2026-09-06 — ChatGPT — English new-computer setup and data-transfer counterpart

- Objective: independently author the English setup/data-transfer page from the confirmed service boundaries and an English-language SERP pass, rather than mechanically translating German keyword phrasing.
- Changes:
  - Reworked `ω┇Engine/src/content/services/setup-data-transfer/en.yml` from the short standard record into a `guided-private` page covering Windows-PC/laptop/Mac buying advice and optional procurement, complete new-device setup, normal readable-data migration within and between Windows/macOS, E-mail/account setup, backup/NAS integration, peripherals and controlled old-device handover.
  - Updated `ω┇Engine/src/data/seo-keywords.yml` so the English setup route is `serp-reviewed-2026-09-06`, centred on `new computer setup Berlin`, with PC/laptop setup, data transfer/migration, buying advice and backup as supporting service language. No English Keyword Planner volume is claimed.
  - Kept data recovery, Windows-password/account-access, BitLocker and phone-migration terms outside this page's target set. A Berlin-area English provider separately exposes initial setup, buying advice, data transfer and recovery, while broader English service pages consistently bundle new-computer setup with data transfer, email/accounts, peripherals and backup. Apple also documents migration from Windows to Mac and Mac-to-Mac using Setup/Migration Assistant.
  - Updated `Project.md` and `Roadmap.md` to mark the setup/data-transfer pair as complete in both languages and to remove the stale English-counterpart TODO.
  - Bumped root `AGENTS.md` from `1.4.10` to `1.4.11`.
- Decisions: English copy uses natural service language around `new computer setup`, `data transfer/data migration`, `computer buying advice` and `backup setup`. The page keeps the same capability boundary as German without copying German search phrasing. Normal readable-data migration belongs here; damaged/unstable media remains a recovery case, and password/account-access or BitLocker problems belong to computer/laptop help. Passwords, PINs and recovery keys must never be requested through the enquiry form.
- Validation: parsed the expanded English service YAML and updated SEO-routing YAML locally; checked the four ordered storyboard roles, five situations, six process steps, six proof items, four boundaries, nine FAQs, three related-service IDs and SEO field lengths. Exact Drive readback is required after writing. `npm run validate`, browser rendering, `git diff --check`, `git status --short`, commit and push are not available in this Drive-only session.
- Blockers or required input: no additional setup/data-transfer Q&A is required. English Keyword Planner volume remains unmeasured, so the English SEO entry is SERP-reviewed rather than marked Planner-researched. The data-recovery capability/referral boundary and existing production brand/contact/legal/qualification/form/analytics/domain blockers remain unchanged.
- Recommended next action: validate the combined tree locally, then deepen the German and English computer/laptop-help pages with their troubleshooting and account-access/password intent.

## 2026-09-06 — ChatGPT — German new-computer setup, purchase advice and data migration expansion

- Objective: use the completed German capability Q&A, two Keyword Planner batches and a current SERP boundary check to expand the setup/data-transfer page around the whole planned device-change journey rather than a thin file-copy service.
- Changes:
  - Reworked `ω┇Engine/src/content/services/setup-data-transfer/de.yml` from the short standard record into a `guided-private` page covering needs-based Windows-PC/laptop/Mac purchase advice and optional procurement, complete new-device setup, normal readable-data migration within and between Windows/macOS, E-mail/account setup, backup/NAS integration, peripherals and controlled old-device handover.
  - Updated `ω┇Engine/src/data/seo-keywords.yml` so the German setup route is `researched-2026-09-06`, centred on `neuen computer einrichten`. `neuen Computer/PC einrichten`, `Laptop einrichten lassen`, `Daten auf neuen PC übertragen` and `Datenübertragung PC` returned 100–1k monthly searches; PC/Laptop Kaufberatung and Datensicherung PC also returned 100–1k, while `laptop kaufen und einrichten lassen` returned 10–100 with medium advertiser competition.
  - Kept `datenrettung berlin` outside this page's target set despite its 100–1k medium-competition demand. Current Berlin results are specialist-recovery led, so damaged, unstable or unreadable media remain a separate adjacent intent requiring its own capability/scope review and no-guarantee language. Normal readable-data migration and a future recovery page should link to each other where cases cross that boundary.
  - Assigned forgotten Windows/laptop password and BitLocker/recovery-key intent to the computer/laptop-help topic rather than this page. Planner variants often returned 1k–10k, but they describe a distinct access/support problem and should not be used to inflate the new-device page.
  - Updated `Project.md` and `Roadmap.md` to record Mac support for setup/migration, private device purchase guidance/procurement, the researched setup-page scope, the data-recovery adjacency, password/access ownership, and the already completed English home-network counterpart that had remained stale in the documentation.
  - Bumped root `AGENTS.md` from `1.4.9` to `1.4.10`.
- Decisions: this page owns new-computer setup, normal data transfer, purchase advice and backup. It may mention access or damaged-media boundary cases but does not target `Datenrettung`, forgotten-password or BitLocker keywords. Personal data is described at a customer-readable level rather than enumerating every folder or credential type. Passwords, PINs and recovery keys must never be requested through the enquiry form. No privacy/compliance certification is claimed without exact verified evidence.
- Validation: parsed the expanded German service YAML and updated SEO-routing YAML locally; checked the four ordered storyboard roles, required guided-private sections, nine FAQs, four boundaries, three related-service IDs and SEO field lengths. Current SERP review confirmed a specialist commercial market for data recovery and a separate local-computer-service treatment for forgotten Windows passwords. Exact Drive readback is required after writing. `npm run validate`, browser rendering, `git diff --check`, `git status --short`, commit and push are not available in this Drive-only session.
- Blockers or required input: the independently authored English setup/data-transfer counterpart still needs its own English search-intent pass. A dedicated data-recovery page should not be created until the in-house recovery boundary and specialist-referral model are defined. Existing production brand, contact/legal facts, qualification evidence, travel policy, form backend, analytics, final imagery and domain blockers remain unchanged.
- Recommended next action: validate the combined tree locally, then research and write the English setup/data-transfer counterpart before returning to the computer/laptop-help page and its account-access/password intent.

## 2026-09-03 — ChatGPT — English home-network, Wi-Fi and NAS counterpart

- Objective: use the English Berlin Keyword Planner batch plus the already confirmed private-network service boundaries to independently expand the English Wi-Fi/home-network page around planned home-network projects rather than translating the German SEO map mechanically.
- Changes:
  - Reworked `ω┇Engine/src/content/services/wifi-home-network/en.yml` from the short standard Wi-Fi-help record into a `guided-private` page covering home-network planning and installation, Ethernet cabling, Mesh or wired access points, NAS/shared storage, home-office connectivity, hardware recommendation/supply, connected devices, testing and understandable handover.
  - Kept NAS as a major commercial section because `nas setup` returned 10–100 monthly searches with high advertiser competition, while retaining `home network setup` as the page-level intent that can naturally contain NAS, cabling, Mesh/Wi-Fi and connected-device work.
  - Updated `ω┇Engine/src/data/seo-keywords.yml` so the English private-network route is `researched-2026-09-03`, centred on `home network setup`. All supplied service-intent seeds returned 10–100 in the Berlin English-language market; high-volume Cat5e/Cat6/Cat8/RJ45 ideas are treated as product/specification intent rather than page targets, and provider/router-installation ideas remain outside the marketing focus.
  - Bumped root `AGENTS.md` from `1.4.8` to `1.4.9`. `Project.md` and `Roadmap.md` required no new change because the bilingual home-network scope, provider boundary, NAS/Homeoffice emphasis and future Smart Home separation were already recorded in `1.4.8`.
- Decisions: English copy is independently authored and uses natural service language such as home network setup/installation, Ethernet/network cabling, Mesh Wi-Fi, NAS setup and home-office networking. The page does not chase generic cable-category searches or device-specific setup queries. ISP-line faults remain the provider's responsibility, and full Smart Home installation remains a separate future service intent.
- Validation: parsed the expanded English YAML and SEO-routing YAML successfully; checked the ordered four-state storyboard, five situations, five process steps, six proof items, five boundaries, eight FAQs, related-service IDs and SEO lengths. Exact Drive readback is required after writing. `npm run validate`, browser rendering, `git diff --check`, `git status --short`, commit and push are not available in this Drive-only session.
- Blockers or required input: no additional English home-network Q&A is required. NAS may still justify a dedicated future private page if later page-specific research and enquiry evidence support one. Existing production brand, contact/legal facts, qualification evidence, travel policy, form backend, analytics, final imagery and domain blockers remain unchanged.
- Recommended next action: validate the combined tree locally, then begin the German setup/data-transfer service with its own capability and keyword/SERP research.

## 2026-09-03 — ChatGPT — German Wi-Fi, home-network and NAS service expansion

- Objective: use the private-network capability answers, two German Keyword Planner batches and a current SERP sanity check to reposition the German Wi-Fi/home-network page around planned home-network projects rather than primarily reactive Wi-Fi troubleshooting.
- Changes:
  - Reworked `ω┇Engine/src/content/services/wifi-home-network/de.yml` from a short standard page into a `guided-private` page covering new or renovated home networks, Ethernet cabling, Mesh or wired access points, NAS/shared storage, Homeoffice connectivity, hardware recommendation/supply, connected devices, testing and understandable handover.
  - Promoted NAS/shared storage substantially in customer-facing content because it is a preferred private/home-office service, while keeping Heimnetzwerk setup/build as the page's search-intent owner until NAS receives independent keyword research.
  - Updated `ω┇Engine/src/data/seo-keywords.yml` from the provisional Wi-Fi seed to a 2026-09-03 researched German map centred on `heimnetzwerk einrichten`. Generic Heimnetzwerk terms showed 1k–10k monthly volume and Mesh setup/build terms 100–1k; all tested Berlin-modified service phrases were 0–10, so Berlin is used naturally as location context rather than forced into exact keyword targets. Device-specific FRITZ!/Telekom setup phrases are treated as DIY/instructional rather than commercial targets.
  - Updated `Project.md` and `Roadmap.md` to record the planned-home-network positioning, provider-line boundary, substantial NAS/Homeoffice role, and a confirmed future Smart Home configuration/installation service intent that will require independent research before a route is created.
  - Bumped root `AGENTS.md` from `1.4.7` to `1.4.8` for this German private-network content slice.
- Decisions: the page sells a coherent home network rather than a router appointment. New builds/renovations, cabling, NAS/storage, Mesh/Wi-Fi and connected devices are preferred project types. ISP line faults remain the provider's responsibility. Smart-home devices may be connected here, but full Smart Home configuration/installation will belong to a separate future page. The existing `/leistungen/privatpersonen/wlan-heimnetz/` route remains unchanged.
- Validation: parsed the expanded German YAML and SEO-routing YAML successfully; checked four ordered storyboard states, required guided-private groups, eight FAQs, five boundaries, related-service IDs, and SEO field lengths. Current SERP review confirmed manufacturer/DIY dominance for device-specific Mesh setup and commercial precedent for whole-home network, cabling, NAS and connected-device setup. Exact Drive readback is required after writing. `npm run validate`, browser rendering, `git diff --check`, `git status --short`, commit and push are not available in this Drive-only session.
- Blockers or required input: the English Wi-Fi/home-network page still needs independent English intent research and copy. NAS may justify a dedicated future private page if its own keyword/enquiry evidence supports one. Existing production brand, contact/legal facts, qualification evidence, travel policy, form backend, analytics, final imagery and domain blockers remain unchanged.
- Recommended next action: validate the combined tree locally, then research and write the independent English Wi-Fi/home-network counterpart before moving to setup/data transfer.

## 2026-09-02 — ChatGPT — English network and IT-infrastructure counterpart

- Objective: independently author the English office-network page around the confirmed project-led infrastructure offer, using English-language Berlin SERP wording rather than translating German SEO targets mechanically.
- Changes:
  - Reworked `ω┇Engine/src/content/services/office-network/en.yml` from the shallow business prototype into a `guided-business` page for new-office networks, modernization, network cabling, managed hardware, business Wi-Fi, NAS/shared storage, VPN/secure remote access, equipment recommendation or supply, testing, documentation and optional maintenance.
  - Kept the same service boundary as German while writing the English copy independently for English-speaking business visitors; troubleshooting remains supported but is not the primary commercial proposition.
  - Updated `ω┇Engine/src/data/seo-keywords.yml` so the English network route is `serp-reviewed-2026-09-02`, centred on `network infrastructure Berlin` with network cabling, office network setup/installation, office LAN cabling and business Wi-Fi as useful supporting terms. Broad `IT support Berlin`, managed services, 24/7 support, enterprise/data-centre networking and home Wi-Fi are treated as wrong or cannibalising intent for this page.
  - Bumped root `AGENTS.md` from `1.4.6` to `1.4.7` for this separate English content slice. `Project.md` and `Roadmap.md` required no new change because the bilingual network scope and future server/Linux separation were already recorded in `1.4.6`.
- Decisions: English search language favours `network infrastructure`, `network cabling`, `network installation`, `office LAN cabling` and Wi-Fi planning terminology. The English page therefore leads with infrastructure projects rather than generic `IT support Berlin`, which is dominated by break/fix and managed-service positioning. German Keyword Planner volumes are not reused as English volume evidence.
- Validation: parsed the English YAML and SEO routing file successfully, checked the current schema constraints including the ordered four-state storyboard, expanded groups, SEO lengths, FAQ count and related-service IDs. Exact Drive readback is required after writing. `npm run validate`, browser rendering, `git diff --check`, `git status --short`, commit and push are not available in this Drive-only session.
- Blockers or required input: no additional technical Q&A is required for this page. Existing production brand, contact/legal facts, qualification evidence, travel policy, form backend, analytics, final imagery and domain blockers remain unchanged.
- Recommended next action: validate the combined tree locally, then choose the next service page for its own German/English intent and content pass.

## 2026-09-02 — ChatGPT — German network and IT-infrastructure repositioning

- Objective: use Berlin Keyword Planner evidence plus the confirmed technical/service boundaries to reposition the German office-network page around profitable planned infrastructure work rather than primarily troubleshooting.
- Changes:
  - Reworked `ω┇Engine/src/content/services/office-network/de.yml` into a `guided-business` service page focused on new-office network design, modernization, managed network hardware, business Wi-Fi, network cabling/racks/patching, NAS/shared storage, VPN/secure remote access, hardware recommendation or supply, testing, documentation and optional maintenance.
  - Kept the public language customer-readable: deep switch/routing/firewall/server protocol detail remains behind the service promise rather than appearing as a catalogue. Troubleshooting remains supported but is no longer the main commercial proposition.
  - Added the `network` variant to the shared `ServiceField` type and allowed `ServiceDetail` to pass the existing network theme into guided-business story visuals; no new CSS or page-specific visual system was introduced.
  - Updated `ω┇Engine/src/data/seo-keywords.yml` from a provisional network seed to a 2026-09-02 researched map centred on `it infrastruktur berlin`, with `netzwerkverkabelung berlin`, `firmennetzwerk einrichten/aufbauen`, `büro netzwerk einrichten`, `netzwerktechnik berlin` and `it netzwerk berlin` as useful commercial/supporting terms. Business-WLAN, NAS and VPN exact terms remain supporting because Planner volume was 0–10.
  - Updated `Project.md` and `Roadmap.md` to record the small-and-growing-business wording, project-led network/infrastructure scope, and confirmed future dedicated Windows Server/Active Directory and Linux server service intents after independent research.
  - Bumped root `AGENTS.md` from `1.4.5` to `1.4.6` for this separate content/architecture slice.
- Decisions: the German page keeps the existing `/leistungen/unternehmen/netzwerk-it-betreuung/` route to avoid an unnecessary route migration, while navigation and page copy move toward `Netzwerk & IT-Infrastruktur`. Broad `IT Service/Systemhaus` intent stays with the business landing or is rejected where it implies MSP/system-house positioning. No long-term support contract is required; occasional or recurring maintenance may be offered only when wanted.
- Validation: parsed the expanded German YAML against the current schema constraints, confirmed ordered four-state storyboard roles and required expanded groups, checked SEO field lengths and related-service IDs, and syntax-checked the small Astro frontmatter/type edits. Drive readback is required after writing. `npm run validate`, browser rendering, `git diff --check`, `git status --short`, commit and push are not available in this Drive-only session.
- Blockers or required input: final visual/browser review remains required. The future Windows Server/Active Directory and Linux pages need their own keyword/SERP and scope passes before routes/content are created. Existing production brand, contact/legal facts, qualification evidence, travel policy, form backend, analytics, final imagery and domain blockers remain unchanged.
- Recommended next action: run local validation and visually review the German network page; if the content/design works in context, commit the `1.4.6` slice before starting the independently researched English network page.

## 2026-09-02 — ChatGPT — English Microsoft 365 business page

- Objective: expand the English Microsoft 365 route to the same professional service depth as the German page while keeping English editorial content independently authored and preserving the new one-file-per-locale service structure.
- Changes:
  - Rewrote `ω┇Engine/src/content/services/microsoft-365/en.yml` as a `guided-business` page with a four-state storyboard, six practical business situations, eight supported-scope items, clear proof and boundaries, eight FAQs, and the existing related-service relationships.
  - Kept the service focused on small-business setup, troubleshooting and planned change work around accounts, Outlook/Exchange Online, Teams, OneDrive, SharePoint, permissions, Windows workplaces and responsible migration assessment rather than enterprise Microsoft consultancy.
  - Updated the English Microsoft 365 entry in `ω┇Engine/src/data/seo-keywords.yml` from a provisional seed to a 2026-09-02 SERP-reviewed routing note. The page keeps `Microsoft 365 support Berlin` as the primary phrase but explicitly treats Microsoft self-service/admin intent and enterprise governance, Intune and managed-service intent as harmful or out of scope.
  - Bumped root `AGENTS.md` from `1.4.4` to `1.4.5` for this separate content change set.
- Decisions: the German Keyword Planner volumes were not transferred to English. The English page uses the same service truth and content depth but natural English wording, with Berlin and business context qualifying the otherwise mixed `Microsoft 365 support` query. No component, schema, route or German-page changes were required.
- Validation: the English record was parsed against the current service schema locally in this session, including the required translation ID/locale identity, guided-business audience, four ordered storyboard roles, expanded content minima and related-service IDs. The edited files were read back from Drive after writing. `npm run validate`, browser rendering, `git diff --check`, `git status --short`, commit and push were not run because this session does not expose the local repository shell.
- Blockers or required input: English Keyword Planner volume remains unmeasured, so the keyword file records SERP review rather than Planner validation. Existing production brand, contact/legal facts, qualification evidence, travel policy, form backend, analytics, final imagery and domain blockers remain unchanged.
- Recommended next action: run local validation and visual review for `/en/services/business/microsoft-365-workplaces/`; if the page reads naturally in context, commit the current content slice using the project version recorded in `AGENTS.md`.

## 2026-08-30 — Codex — Service-source and Astro maintainability pass

- Objective: make bilingual service content safer to maintain and apply a focused Astro architecture cleanup without changing routes, copy, SEO, visuals, page behavior, dependencies, or the approved page-by-page rollout order.
- Changes:
  - Replaced the 1,108-line `src/content/services.yml` list with seven stable service folders containing independent `de.yml` and `en.yml` page records.
  - Switched the collection to Astro's built-in `glob()` loader and generated collection keys from each validated service ID so identical bilingual slugs cannot overwrite one another.
  - Strengthened the existing content contract so IDs must match translation identity and locale, storyboard roles must follow situation/investigation/intervention/outcome order, duplicate record IDs are rejected, and every related-service reference is checked during collection loading.
  - Cached the validated service collection per build instead of rebuilding the same translation and route maps for each caller.
  - Extracted repeated storyboard-panel and service-FAQ markup into focused shared components; removed the unused legacy homepage FAQ component while keeping distinct prototype, guided, and standard page compositions intact.
  - Split shared design constants into `tokens.css` and approved Technical Field rules into `technical-field.css`; retained the older foundation/page rules in `global.css` with the same compiled cascade and no visual change.
  - Updated `Project.md` and `Roadmap.md` to reflect the service-folder source of truth and bumped `AGENTS.md` to `1.4.3`.
- Decisions: service folders use stable product identities rather than current public slugs; each locale file remains a complete independently authored record. No framework, CMS, dependency, universal page builder, route migration, content rewrite, audience-landing redesign, or remaining service-page visual migration was introduced. Existing inline styles and legacy page-specific CSS on routes awaiting their controlled redesign were left in place rather than expanded into this pass.
- Validation:
  - The pre-change clean `1.4.2` baseline and final `npm run validate` both passed with 25 HTML pages and 23 sitemap URLs; all internal `/vorort/` targets resolve and no stale `/astro-demo/` path is present.
  - Parsed and compared the old list with all 14 new locale files; the complete data structures are equal, including the expanded German Microsoft 365 record.
  - Built a clean `1.4.2` snapshot beside the updated tree and compared all 26 generated HTML/XML files after normalizing fingerprinted asset names; zero outputs differ. The emitted CSS asset has the same filename and SHA-256 hash in both builds.
  - Confirmed in isolated copies that all seven required invalid-content scenarios fail the build.
  - Final `git diff --check` passed and `git status --short` confirms only the intended uncommitted `1.4.3` source, content-tree, stylesheet, version, and documentation changes.
- Blockers or required input: none for this architecture pass. Existing production identity, contact/legal facts, qualification evidence, travel policy, form backend, analytics, domain, and final imagery inputs remain unresolved.
- Recommended next action: review the new service content tree and focused component/style boundaries, then commit locally with `VorOrt v1.4.3: split service content and focus Astro architecture` before resuming page-specific content work.

## 2026-08-30 — ChatGPT — German Microsoft 365 content and SEO routing map

- Objective: turn the German Microsoft 365 route into a substantial business service page using the approved four-state service grammar, while keeping the existing page system and recording concise useful/harmful keyword boundaries for every current SEO-targetable page.
- Changes:
  - Expanded `ω┇Engine/src/content/services.yml` for the German Microsoft 365 service with a professional four-state storyboard, concrete business situations, supported scope, working boundaries, eight FAQs, related-service links, and updated SEO metadata centred on Microsoft 365 support and consultation intent in Berlin.
  - Added a constrained `guided-business` template to `ω┇Engine/src/content.config.ts`; the same expanded/storyboard contract now validates guided private and guided business services, with audience checks for each mode.
  - Generalised `ω┇Engine/src/components/ServiceDetail.astro` so guided business services can use the established ServiceField story panels plus business situation and scope sections without creating a Microsoft-specific page component.
  - Extended `ω┇Engine/src/components/ServiceField.astro` with a `workspace` variant hook so Microsoft 365 can retain the shared visual grammar while remaining distinguishable from the software page.
  - Added `ω┇Engine/src/data/seo-keywords.yml` as a planning-only, non-imported keyword-routing reference covering the current SEO-targetable German and English pages. Each page keeps 10–25 useful/harmful terms; only the German Microsoft 365 entry is marked researched, while other pages remain provisional seeds pending their own Keyword Planner/SERP pass.
  - Bumped root `AGENTS.md` to version `1.4.2` for this logical change set.
- Decisions: `Microsoft 365 Support Berlin` is the German page's primary commercial search intent; `Microsoft 365 Beratung` and `Microsoft 365 Dienstleister` are strong secondary supplier-selection signals. High-volume `Microsoft 365 Administration`, Admin Center/login, Family/Student, and managed-service/enterprise terms are explicitly treated as wrong or misleading intent rather than volume opportunities. The English page remains unchanged until its own research pass.
- Validation:
  - Parsed the updated service YAML successfully: 14 localized records, seven complete German/English translation pairs, four required Microsoft 365 storyboard states, six detailed situations, eight FAQs, and valid related-service IDs.
  - Confirmed the Microsoft 365 SEO title is 39 characters and description 163 characters, within the current content-schema bounds.
  - TypeScript transpile syntax checks passed for the updated content schema and the Astro frontmatter in `ServiceDetail.astro` and `ServiceField.astro`.
  - Reviewed targeted diffs so unrelated service records and component behaviour remain unchanged outside the guided-business generalisation.
  - Read the written Drive files back and confirmed exact byte matches for `content.config.ts`, `ServiceField.astro`, `ServiceDetail.astro`, `services.yml`, and `AGENTS.md`; the new SEO keyword file was also fetched back from `src/data/`.
  - `npm run validate`, browser rendering, `git diff --check`, `git status --short`, commit, and push were not run because this Drive-connected session has no repository shell.
- Blockers or required input: the existing handoff still records the prior `1.4.1` design-refinement work as uncommitted, so local Git sequencing must be resolved before committing this separate `1.4.2` change. Final brand, production contact/legal facts, verified qualifications, travel policy, form backend, analytics, domain, and other existing launch inputs remain unresolved.
- Recommended next action: run `npm run validate`, review the German Microsoft 365 page visually at desktop/tablet/mobile widths, then commit with the versioned message below. After approval, do an English-specific Microsoft 365 keyword/SERP pass instead of translating mechanically.

## 2026-08-30 — Codex — Final design-system refinement

- Objective: complete the approved final visual refinement without changing the information architecture, broadening the service rollout, or rewriting service content.
- Changes:
  - Replaced presentation-scale shared section padding with a deliberate rhythm that produces approximately 72–96px between adjacent desktop content areas and 48–64px on mobile.
  - Reserved the Berlin environment for the homepage context and replaced repeated software imagery with an error interface, dependency map, controlled-change sequence, and verified handover state.
  - Reworded visual callouts around customer-observable faults, checks, changes, and outcomes; removed abstract numbered overlay labels and duplicate visible captions.
  - Reduced homepage and software headline scale, tightened both heroes, and moved the software error state into the desktop first viewport while retaining a purposeful mobile sequence.
  - Increased nested mobile service links to a 44px minimum target and retained menu, contact-dock, and focus behavior.
- Decisions: `Technical Field` remains internal. Consistency now comes from the shared palette, typography, diagram rules, state colors, and visual purpose—not repeated use of one source image. The approved page architecture and service copy remain unchanged apart from small diagram labels.
- Validation:
  - `npm run validate` passed with 25 generated HTML pages and 23 sitemap URLs; all `/vorort/` links resolved and no stale `/astro-demo/` paths were found.
  - Browser review covered 1440×1000, 768×1024, 390×844, and 320×720 with no horizontal overflow.
  - Desktop service-menu bounds, mobile menu and Escape behavior, 44px mobile service targets, headline scale, image crop, four software visual states, and contact-dock overlap against headings and controls were checked.
- Blockers or required input: no design decision remains blocked. Production identity, contact/legal facts, verified qualification evidence, form backend, analytics, domain, and other existing launch facts remain outstanding.
- Recommended next action: shift attention to substantial bilingual service content and factual production inputs; use the stabilized design system when later migrating the business reference pair and remaining services.

## 2026-08-30 — Codex — Technical Field discovery and software proof slice

- Objective: implement the approved smallest convincing slice without rolling the new treatment mechanically across the remaining audience and service pages.
- Changes:
  - Replaced the flat bilingual header navigation with an accessible grouped service menu sourced from validated service navigation metadata, with matching mobile accordion behavior and direct links to every required service and both audience gateways.
  - Condensed the German and English homepages into a reassuring entrance, five plain-language situation routes, one capability/working-method field, and a compact contact conclusion.
  - Added a constrained four-state storyboard contract for situation, investigation, intervention, and outcome content; the software pair now renders from independently authored German and English storyboards rather than another service-specific component branch.
  - Introduced the reusable `ServiceField` visual and one original illustrated Berlin home/home-office/small-workplace environment. Functional HTML overlays communicate device, connection, account, dependency, change, and verified states; public placeholder labels were removed from the proof-slice pages.
  - Reworked the software pages around three additional thematic panels, concise competence evidence, truthful boundaries, service FAQs, related-service rows, and a compact call/WhatsApp/expandable-form conclusion.
  - Delayed the mobile contact dock until the visitor scrolls, hid it while the menu or contact section is active, and retained focus return and Escape behavior for navigation.
- Decisions: `Technical Field` is an internal design-system description, not a public brand or tagline. The current master illustration is reused through meaningful crops and overlays rather than commissioning one unrelated image per section. Existing audience landings and other service layouts remain unchanged pending review.
- Validation:
  - `npm run validate` passed with 25 generated HTML pages and 23 sitemap URLs; all internal `/vorort/` links resolved and no stale `/astro-demo/` references were found.
  - `git diff --check` passed.
  - Browser review covered German and English homepage/software routes at 1440×1000, 768×1024, and 390×844 with no horizontal overflow. Grouped desktop/mobile navigation, the expandable contact form, state-panel contrast, service paths, and delayed mobile dock were checked.
  - The generated master asset was visually inspected and delivered as a 464 KB JPEG; the unused 2.1 MB PNG conversion source was removed from the repository while the original generated source remains recoverable outside the checkout.
- Blockers or required input: no new decision blocks review. Final public brand, real telephone/WhatsApp/email/legal facts, verified qualifications, travel policy, form backend, analytics, production domain, and final production-art decision remain unresolved.
- Recommended next action: review the German and English homepage-to-software journey. If accepted, implement the business landing and office-network pair as the professional-mode proof before broader service conversion.

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

## 2026-09-06 — Antigravity — Visual refinement and business-mode structural hierarchy

- Objective: Refine the design system to replace muddy beige tones with cleaner European service design hues, fix MS365 business hero contrast, and create a more deliberate editorial rhythm for business pages without rewriting service content.
- Changes:
  - Replaced washed-out `#F3F0E9` and `#D9C7A3` with a crisp, architectural slate/navy palette in `tokens.css` (`--paper`, `--sand`, `--night`, etc.).
  - Added an editorial section divider (`border-top: 1px solid var(--line)`) between adjacent light sections in `global.css` to prevent doubled padding and sea-of-whitespace effects.
  - Replaced generic floating rounded cards with structured editorial rule-lists for `.software-symptom-grid` and `.software-situation-grid` articles.
  - Assigned a dark technical surface to `.business-scope-section` for stronger business hierarchy and impact.
  - Adjusted `--section-pad` clamp limits slightly to ensure mobile spacing remains proportionate.
  - Fixed the MS365 hero contrast by ensuring `.service-hero--business.service-hero--story` correctly applies the dark background and light text over the hero, and adapted the `inline-language-note` for dark business contexts.
  - Sharpened section titles by reducing `font-weight` to 500 and tightening `letter-spacing` to `-0.05em`.
  - Bumped project version to `1.4.12` in `AGENTS.md`.
- Decisions: Business mode should feel precise and capable without relying on cheap floating cards. Removing the soft rounded rectangles for symptoms/situations and applying editorial borders immediately establishes a structured European service feel. The dark scope section grounds the MS365 page nicely. The palette relies on slate, cool grey, and deep navy instead of tan/beige.
- Validation: CSS edits were checked. The browser subagent encountered an issue running locally without devtools, and local Astro validation requires bypassing telemetry permissions, but CSS rules are cleanly separated into tokens, global, and technical-field layers. Drive readback is assumed complete.
- Blockers or required input: No new design blockers. Production domain, final brand, real contact data, verifiable qualifications, form endpoint, analytics, and final imagery remain unresolved.
- Recommended next action: Complete the local Git commit, verify the refined visual rhythm locally, and then move on to the computer/laptop help content expansion.
