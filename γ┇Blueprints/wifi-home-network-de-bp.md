---
kind: page-blueprint
status: review-draft
page-id: wifi-home-network
locale: de
seo-reference: wifi-de
route: /leistungen/privatpersonen/wlan-heimnetz/
locale-pair: /en/services/private/wifi-home-network/
content-file-path: ω┇Engine/src/content/services/wifi-home-network/de.yml
content-file-url: https://drive.google.com/file/d/16FCDGJx9GiPnIrp73odBnXIZD4jnhgTY/view
blueprint-version: 0.2
approval: pending-product-owner-review
---

# Page blueprint — Heimnetzwerk einrichten (DE)

> **Planning document, not approved copy or a live-page specification.** Sections appear in proposed reader order. Each section has a unique instance ID and references a reusable Design Lab recipe (or a plainly identified proposal). The HTML status pills are *review aids*, not independent lifecycle records: **Approved / Experimental / Deprecated** must be checked against `src/design-system/section-recipes.ts`; **Proposed** means no canonical recipe is registered. The only authority for approval is the Product Owner. Word budgets concern approximate visible German page text, not SEO quotas; do not pad content. This example revises the page architecture without editing the production content record, Design Lab or submission backend.

## Page-level brief

| Field | Direction |
| --- | --- |
| **Audience** | Private customers, families, home-office users and freelancers in Berlin; include people with one small network problem and people planning a larger installation |
| **Primary job** | Show immediately that everyday Wi-Fi/router issues are legitimate enquiries; make calling or writing easy; offer progressively deeper help for people researching a full home network |
| **Positioning / perception** | Approachable local IT business, not a large infrastructure contractor. Small jobs and considered projects are both welcome. Show technical competence without requiring visitors to understand technical systems first |
| **Search ownership** | `wifi-de` in `ω┇Engine/src/data/seo-keywords.yml`. Main intent: **Heimnetzwerk einrichten** in Berlin. Support **WLAN-Reichweite verbessern**, WLAN/Mesh, Ethernet/Netzwerkkabel and relevant device/NAS setup in genuinely useful contexts. No unsupported search-volume claims or keyword density targets |
| **Service truth / limits** | Evaluate existing equipment before proposing changes; planned Wi-Fi/Mesh/access points, cables/network outlets, home-office/device connectivity, NAS and storage access are in scope. No blanket coverage/speed guarantee, ISP-side repairs, electrical installation, sweeping smart-home offer or automatic remote access. NAS/RAID is not an independent backup |
| **Voice** | Warm, practical German with formal **Sie** and a small-team **wir** voice. Prefer ordinary household situations before jargon. Avoid inflated consultancy, enterprise language, unverified pricing/response promises or invented proof |
| **Three reader stages** | **Act now:** recognition + direct-call path → **Write instead:** early scope reassurance + visible enquiry → **Investigate:** deeper topics, diagrams, trade-offs, process/FAQs + return-to-contact action |
| **Deliberate repetition rule** | Early mentions answer *“Can you help?”*; later chapters answer *“How might you solve it, and what are the limits?”* Repeat the subject, never the same paragraph. Shared topic refs connect summaries and chapters |
| **Planned text scale** | Indicatively **1,300–2,100 visible words across all sections**, with roughly the first **200–350 words** aimed at fast-deciding visitors. A long page should remain inviting because enquiry precedes research content; reduce material that adds no new decision value |
| **Media** | Existing P1 hero artwork reference; P2–P6 topic images remain provisional. Treat the Media Queue as the authority for acceptance. Meaningful alt text; no implied real customer photos |
| **Implementation reality** | Current `recipe-service` production shell places contact/related services after the composition, and its form prepares an email in the visitor's mail client. The separately **approved Design Lab** `contact.enquiry` recipe intends direct form submission, which cannot be advertised as working before provider, privacy and production integration are resolved. This blueprint proposes an earlier form and new CTA recipe; **neither exists in the current production placement** |
| **Source relationship** | The linked `de.yml` is the current content source, **not** evidence that this new section order, new recipe or form placement has already been implemented. The English blueprint will have independently planned copy/search coverage while preserving shared business facts |

## Section journey — quick scan

| Order | Instance ID | Reader stage | Main reader value | Recipe ID / status |
| --- | --- | --- | --- | --- |
| 01 | `einstieg` | Act now | Is this the service I need? | `hero.editorial-art` — Approved |
| 02 | `alltagssituationen` | Act now | Do they handle my actual problem? | `recognition.situations` — Experimental |
| 03 | `kontakt-kurz` | Act now / write | I can call without commissioning a huge project | `cta.quick-contact` — Proposed |
| 04 | `kontakt` | Write | I can describe my situation without a call | `contact.enquiry` — Approved in Design Lab; production move required |
| 05 | `themen` | Investigate | I can explore relevant subjects after the form | `scope.topic-index` — Approved |
| 06 | `wlan-mesh` | Investigate | Which Wi-Fi solution fits? | `explanation.editorial-prose` — Approved |
| 07 | `netzwerkverkabelung` | Investigate | When is a cable worthwhile? | `explanation.connection-path` — Approved |
| 08 | `homeoffice` | Investigate | How are real devices connected? | `explanation.editorial-prose` — Approved |
| 09 | `nas-speicher` | Investigate | What can shared storage do safely? | `explanation.editorial-prose` — Approved |
| 10 | `heimnetz-planen` | Investigate | Can this be staged or built around existing gear? | `explanation.editorial-prose` — Approved |
| 11 | `ablauf` | Investigate | What happens after I enquire? | `process.staged-path` — Approved |
| 12 | `fragen` | Investigate | What remaining concerns are relevant? | `faq.editorial-answers` — Approved |
| 13 | `verwandte-leistungen` | Investigate / redirect | Is a different service a better fit? | Existing production shell, not a recipe |
| 14 | `kontakt-abschluss` | Investigate → act | I am ready now; take me back to contact | `cta.quick-contact` — Proposed, reused instance |

## 01 — Hero: Help with a real home problem

**Instance ID:** `einstieg` · **Recipe ID:** `hero.editorial-art` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader stage / depth:** Act now · summary. **Topic refs:** `home-network`, `wifi-coverage`.
- **Job and intended perception:** Immediately recognise a local service that helps with one badly connected room **or** an entire home setup. The visitor should not assume that a large system redesign is a prerequisite.
- **Must communicate:** Berlin on-site help; Wi-Fi/routers and connected devices; existing equipment can be considered; concise next step. One primary H1 aligned with `wifi-de` and an approachable explanation. Do not claim all provider faults can be repaired.
- **Organic language:** **Heimnetzwerk einrichten**, WLAN / Heimnetz, Berlin; other terms only if natural. Do not list Mesh, NAS and every network component in the first sentence.
- **Composition / permitted variation:** Approved editorial hero contract: eyebrow, H1, intro, one informative environmental image, **exactly two real section-anchor actions**. Prefer first jump to `kontakt` (not a fabricated `tel:` action in this recipe), second to `themen`; fast phone access should also be visible in the separate CTA/navigation.
- **Generator freedom / words:** Medium; fresh everyday angle and concise prose, no fictional customer story. **55–90 words** excluding action labels.
- **Media / review:** P1 working reference, informative alt text; check mobile first viewport. **Question:** Can the visitor understand the offer in five seconds?

## 02 — Familiar situations: Make small requests welcome

**Instance ID:** `alltagssituationen` · **Recipe ID:** `recognition.situations` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Experimental</span>

- **Reader stage / depth:** Act now · short recognition. **Topic refs:** `wifi-coverage`, `router-setup`, `homeoffice-connectivity`, `home-network`.
- **Job and intended perception:** “That is exactly my problem.” Explicitly normalise a single-room weak signal, an unfamiliar router/setup, trouble connecting a desk/printer, and a new/changed home network. Not a dramatic fault checklist.
- **Content and SEO:** Three to four recognisable problem situations with a human-scale consequence and a brief kind of help. Natural **WLAN einrichten**, **WLAN verbessern** and home-network phrasing; do not invent keyword research status.
- **Composition / variation:** Recipe supports **2–6 situations**, each title + body; no imagery or invented diagnostics required. Change example order/wording for rhythm but preserve separate problems rather than a technical feature catalogue.
- **Generator freedom / words:** High within truthful service scope; **75–120 words** across situations. No promise that every router/provider issue is solvable locally.
- **Design Lab need / review:** Registry state currently Experimental, not approved. Use in reviewable experimental compositions only until accepted. **Question:** Would a person with just one problem feel invited rather than overqualified away?

## 03 — Immediate action and reassurance: Call or choose writing

**Instance ID:** `kontakt-kurz` · **Proposed recipe ID:** `cta.quick-contact` <span style="display:inline-block;border:1px dashed #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Proposed</span>

- **Reader stage / depth:** Act now → Write · micro-summary. **Topic ref:** `contact-choice`.
- **Job and intended perception:** “I can contact them about a small job, and I am not agreeing to a costly installation.” Offer a **direct call route** and a clear alternative jump to the enquiry form. Phone/WhatsApp/email should use verified shared site-config data, never placeholder numbers.
- **Must say:** Initial conversation is free; discuss scope and any paid diagnostic visit **before** it is arranged; existing equipment need not automatically be replaced. No invented minimum charge, fixed price, response time or appointment slot.
- **Composition / variation:** **New recipe request.** Compact call-oriented heading, one plain reassurance line, conspicuous call action and a “write to us” anchor to `kontakt`. Design should distinguish primary/secondary actions without a large card stack. It must remain accessible at mobile width and should not become a second form.
- **Generator freedom / words:** Medium for inviting wording and visual balance; factual cost boundaries fixed. **35–65 words**.
- **Design Lab handoff:** Register an **Experimental** `cta.quick-contact` recipe/renderer and preview with realistic content if content generation is authorised. This ID is only a proposal until registration and Product Owner approval. **Question:** Do direct call and form choices both feel effortless?

## 04 — Early enquiry: A low-pressure message, not a commitment

**Instance ID:** `kontakt` (desired visible contact anchor; **currently reserved/owned by the production shell**) · **Recipe ID:** `contact.enquiry` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader stage / depth:** Write · conversion. **Topic ref:** `contact-choice`.
- **Job and intended perception:** An alternative for people who prefer writing to calling. No technical diagnosis or complete shopping list required: a short problem description, approximate area and how to reply should be enough to begin.
- **Content intent:** Service-specific invitation; “tell us which rooms/devices cause trouble or what you want connected”. No passwords or recovery codes. Brief privacy context and clear reply choice. Direct contact alternatives remain available.
- **Composition / contract:** Approved **Design Lab** `contact.enquiry` includes conspicuous direct Call/WhatsApp/Email routes and an **always-visible structured form** (name, reply preference and address/number, request; optional details in a native disclosure). Preserve schema, keyboard/form behaviour and privacy treatment. Do not hide the form behind a CTA or assume unverified delivery.
- **Generator freedom / words:** Medium for service-specific title, one sentence and examples; form requirements fixed. **45–80 visible editorial words**, excluding shared labels.
- **Implementation decision / review:** **Proposed placement** after quick reassurance, **before** deeper content. Today the production shell adds the contact later and its form opens the mail app; direct submission requires a configured endpoint/privacy decision and an intentional renderer/shell change. Reuse/relocate the `kontakt` anchor, do **not** duplicate it or promise the form works. **Question:** Would someone comfortable only with email know what happens next?

## 05 — Transition to detail: Explore before choosing

**Instance ID:** `themen` · **Recipe ID:** `scope.topic-index` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader stage / depth:** Investigate · topic overview. **Topic refs:** `wifi-coverage`, `home-cabling`, `homeoffice-connectivity`, `nas-sharing`, `network-planning`.
- **Job and intended perception:** The early form was a legitimate action point, **not the end of the page**. Signal clearly that practical explanations follow for visitors who want more detail before deciding.
- **Content intent:** Five concise linked topics: Wi-Fi/Mesh, cables/Ethernet, home-office and devices, NAS/shared files, moving or improving the setup. Briefly state the reader benefit, not specifications.
- **Composition / variation:** Approved **2–6 real on-page chapter links** with relevant illustrative media, all linking to sections *below*. Use a helpful transition such as “Möchten Sie die Möglichkeiten besser verstehen?”; no repetitive second hero or sales pitch. Featured first tile may lead with weak Wi-Fi.
- **Generator freedom / words:** Medium–high in labels, visual hierarchy and order within contract. **65–105 words**. Media P2–P6 remain provisional, not accepted.
- **Review:** Do the cards invite exploration without implying that everyone needs all five technologies?

## 06 — Wi-Fi and Mesh: Expand the early problem recognition

**Instance ID:** `wlan-mesh` · **Recipe ID:** `explanation.editorial-prose` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader stage / depth:** Investigate · substantial. **Topic refs:** `wifi-coverage`, `router-setup`. **Earlier summary:** `alltagssituationen`.
- **Job and intended perception:** Understand that help is based on the building, existing router, needed rooms and sensible technical options — not automatic expensive replacement.
- **Must cover:** Why an old router position, walls or inadequate access-point backhaul affects reception; when repositioning/reconfiguring existing gear, wireless Mesh/repeater or wired access points may help; what will be assessed and tested in agreed rooms. Clarify line/provider boundary and no universal speed guarantee.
- **SEO language:** **WLAN-Reichweite verbessern**, **Mesh**, **Heimnetzwerk einrichten**, WLAN einrichten where natural. Not repeated exact-match headings.
- **Composition / variation:** Approved editorial-prose blocks: 1–2 explanatory passages, a genuine comparison **table or paired explanation**, and one quiet practical note. Use a scenario to illuminate a decision rather than producing a buying guide. May suggest `explanation.options-guide` (Approved) instead only when its fixed comparable criteria and media better fit.
- **Generator freedom / words:** High in examples, order and comparison; fixed advice must stay cautious. **210–315 words**. Link internally to `netzwerkverkabelung` when wired access points need explanation.
- **Review:** Does this chapter add reasoning, rather than repeat the initial “weak Wi-Fi” pitch?

## 07 — Ethernet: Show what a cable actually changes

**Instance ID:** `netzwerkverkabelung` · **Recipe ID:** `explanation.connection-path` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader stage / depth:** Investigate · practical technical. **Topic ref:** `home-cabling`. **Earlier summary:** `themen`.
- **Job and intended perception:** Ethernet is an *option* for a real use case, not a sales push to wire every room.
- **Must cover:** Router/switch → feasible cable route/network outlet → actual destinations (desk, access point, selected fixed devices). Explain existing cable checks, permissions for drilling/changes, route choices, network testing and absence of electrical-installation work.
- **SEO language:** **Netzwerkkabel verlegen**, Ethernet, Netzwerkdose in genuinely explanatory captions and prose.
- **Composition / variation:** Keep the approved diagram's **source → route → destinations** relationship and post-diagram planning points. Real-text labels, responsive stacked sequence; don't draw a misleading single-cable-to-unlimited-devices solution.
- **Generator freedom / words:** Medium for household examples, useful caption and planning decisions. **165–245 words**, including informative diagram labels.
- **Review:** Can a non-technical person explain back why a cable might improve a particular room?

## 08 — Home-office and devices: Describe everyday use

**Instance ID:** `homeoffice` · **Recipe ID:** `explanation.editorial-prose` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader stage / depth:** Investigate · focused. **Topic ref:** `homeoffice-connectivity`. **Earlier summary:** `alltagssituationen`.
- **Job and intended perception:** “They understand why my desk, printer or TV needs to be connected, without treating my flat like an office fit-out.”
- **Content intent:** Real desk location, stable calls, printers/TV or selected peripherals, when Ethernet vs WLAN is useful; distinguish local connectivity from employer-managed VPN/device or the external internet connection.
- **SEO language:** Homeoffice, WLAN, Netzwerkanschluss naturally; don't make this another business IT landing page.
- **Composition / variation:** One compact editorial comparison (desk vs household devices) and a quiet boundary note. Avoid repeating the substantial structure used in the Wi-Fi chapter.
- **Generator freedom / words:** High for relatable details, fixed employer IT boundary. **100–155 words**.
- **Internal links:** Existing Computer & Laptop Help when the device itself is failing; Computer Setup & Data Transfer for new-computer/migration needs. Only if the chosen renderer actually supports the intended links.

## 09 — NAS: Useful option, not a required purchase

**Instance ID:** `nas-speicher` · **Recipe ID:** `explanation.editorial-prose` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader stage / depth:** Investigate · optional specialist detail. **Topic ref:** `nas-sharing`. **Earlier summary:** `themen`.
- **Job and intended perception:** Shared family files may benefit from a NAS, but visitors with ordinary Wi-Fi trouble do not need to buy or learn storage architecture.
- **Must cover:** What NAS means, when shared folders/users are useful, hardware suitability and access permissions; distinguish storage from independent backup, including **RAID is not a complete backup**. No remote-access default, guaranteed recoverability or data-recovery claim.
- **SEO language:** **NAS einrichten**, NAS, Heimnetz only when they clarify the chapter. No independent NAS volume claim or dedicated route yet.
- **Composition / variation:** One short explanatory passage plus a concise sharing-versus-backup comparison or clear caution. A two-column layout is optional, not compulsory; avoid a repeated technical callout stack.
- **Generator freedom / words:** Medium–high within data/protection boundaries. **115–180 words**.
- **Linking:** Contextual link to the existing Setup & Data Transfer service only if a separate data migration/setup need is involved. Dedicated NAS page remains only a candidate, not a real destination.

## 10 — Moving or changing the setup: Scale the work sensibly

**Instance ID:** `heimnetz-planen` · **Recipe ID:** `explanation.editorial-prose` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader stage / depth:** Investigate · situational. **Topic ref:** `network-planning`. **Earlier summary:** `alltagssituationen` / `themen`.
- **Job and intended perception:** A move or renovation can merit planning, but an existing network can also be improved step by step without buying everything new.
- **Must cover:** New installation vs existing gear; position of router, desk, devices and outlets; realistic cable routes; avoiding wasted purchases; optional procurement and staged work; agree extra costs/permissions before work.
- **SEO language:** Heimnetzwerk planen/einrichten, Router, Netzwerkanschluss naturally. Avoid enterprise network architecture jargon.
- **Composition / variation:** Compact *new vs existing* contrast and one short practical preparation note; perhaps an accessible two-column editorial block, not another full decision table.
- **Generator freedom / words:** High for household examples and brevity, fixed scope/cost truth. **110–175 words**.

## 11 — Process: Details for those who still need assurance

**Instance ID:** `ablauf` · **Recipe ID:** `process.staged-path` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader stage / depth:** Investigate · assurance. **Topic ref:** `working-process`. **Earlier summary:** `kontakt-kurz`.
- **Job and intended perception:** They can imagine what happens after sending a message and when a cost or scope decision is made. This is the *fuller account* of the brief early promise, not its verbatim repetition.
- **Must cover:** Exactly four steps: (1) first discussion/needs, (2) assess and agree scope/diagnostic charges, (3) configure/perform agreed installation, (4) test and explain. Extra work is agreed separately. No automatic appointment timing claims.
- **SEO:** None required. Clear verbs and transparent boundaries matter more than search phrases.
- **Composition / variation:** Four real stages under the approved recipe; short labels and readable mobile order, no speculative timelines or icons as the only communication.
- **Generator freedom / words:** Medium in wording/pacing, four stages and cost facts fixed. **95–155 words**.

## 12 — FAQs: Resolve real concerns without padding

**Instance ID:** `fragen` · **Recipe ID:** `faq.editorial-answers` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader stage / depth:** Investigate · selective answers. **Topic refs:** `router-setup`, `home-cabling`, `working-process`, `wifi-coverage`.
- **Job and intended perception:** A few honest answers build trust better than a wall of technical FAQs.
- **Candidates:** Can an existing router stay? Is cabling possible in a lived-in/rented apartment? What determines scope/cost and a possible visit? Can every room's Wi-Fi be guaranteed? Is an ISP fault something you handle? NAS/backup only if not already well addressed in section 09.
- **SEO:** Phrase questions as customers would actually ask them; no artificial FAQ keyword quota or assumption of search-rich-result eligibility.
- **Composition / variation:** Approved **3–6 always-visible** editorial Q&As; aim for **four or five**. Answers may vary in length, but must not simply repeat preceding chapters. No unapproved accordion swap.
- **Generator freedom / words:** High in selection and explanation; strict on false prices, provider repairs, guarantees and access/data claims. **185–290 words** total.
- **Review:** Which answers are genuinely useful to someone still undecided after the chapters?

## 13 — Related services: A route to a better-fit page

**Instance ID:** `verwandte-leistungen` · **Implementation owner:** `RecipeServicePage` related-services shell <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Existing shell · no recipe status</span>

- **Reader stage / depth:** Investigate / redirect. **Topic ref:** `service-navigation`.
- **Purpose:** Distinguish local network issues from a computer fault, new-device setup/data transfer or software configuration. Don't turn a home-network page into a general catalogue.
- **Content / links:** Prefer 2–3 relevant existing service destinations, e.g. Computer & Laptop Help and Computer Setup & Data Transfer; Software Installation & Optimisation only when a genuine related need is evident. Use valid locale-aware routes.
- **Generator freedom / words:** Medium, **50–90 words** total for labels/descriptions, if counted as visible page content.
- **Implementation note:** This is *not* a registered approved section recipe; keep ownership explicit. Do not invent a recipe status merely to display a pill.

## 14 — Closing action: Return to the enquiry, don't start over

**Instance ID:** `kontakt-abschluss` · **Proposed recipe ID:** `cta.quick-contact` <span style="display:inline-block;border:1px dashed #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Proposed</span>

- **Reader stage / depth:** Investigate → Act now · small action. **Topic ref:** `contact-choice`. **Shared recipe with:** `kontakt-kurz`.
- **Job and intended perception:** Having read the technical details, the visitor can now call directly or jump back to the **same** earlier enquiry form. Do not ask them to scroll manually or generate a second identical form.
- **Composition / variation:** Reuse the proposed short-CTA semantic contract with slightly different contextual wording and identical verified contact destinations. Avoid repeating the full early reassurance or duplicating the form.
- **Generator freedom / words:** High in closing phrasing, fixed contact routing and accessibility. **25–50 words**.
- **Design Lab effect:** If one approved, compatible shared renderer later improves, both section instances can inherit it. A breaking interaction/content redesign requires a new experimental recipe ID and intentional migration.

## Generator freedom and staged implementation

- **Fixed:** Source business facts, `wifi-de` ownership, existing real routes, verified contact channels, approval authority, approved recipe semantics, required fields and accessible actions. One page section = one unique instance ID. Do not use the same anchor twice.
- **Guided:** Section order, optional chapters, suggested block combinations, topic depth, word ranges and image layout. The early contact opportunity and later depth are the strategic plan, but the final implementation should choose the cleanest valid section sequence rather than imitate a sketch at any cost.
- **Creative:** Headlines, real-world examples, prose rhythm, approved block variations, helpful comparisons, minor media choices and chapter transitions. Repeated topic references permit **different** explanations, not duplicate wording.
- **Design Lab:** `recognition.situations` is **Experimental**. `cta.quick-contact` is **Proposed** until registered; a generator may create a matching **Experimental** recipe/preview only when implementation/design work is authorised. Do not mark it Approved, add it to a second recipe registry or assume production can consume it automatically.
- **Production gap:** Existing production placement has the `kontakt` and related-services shell after recipe sections. Moving a direct-submit `contact.enquiry` into the middle requires an intentional production layout/schema adjustment, a configured endpoint, privacy review and validation; keep the current mail-client handoff accurately described until that work is done.
- **Link and media checks:** Topic-index targets and both CTA routes must exist; locale-aware URLs need base-aware rendering; illustration requests/acceptance stay in Media Queue. The new proposal is not itself a media approval or implementation order.
- **Word counts:** Never write to fill a range; reduce repeated instructions if they do not improve a decision. Approximate chapter budgets include ordinary headings/captions, excluding navigation/footer and shared form field labels.

## Review decisions before production adoption

1. **Journey:** Does the first 200–350 words establish a small-job welcome, direct call option and credible route to writing before the technical material?
2. **Depth:** Do early Wi-Fi/home-office mentions and their later chapters feel complementary? Does NAS remain optional rather than dominating the page?
3. **Design Lab:** Is `recognition.situations` worth refining/approving for the early recognition section? Should `cta.quick-contact` be developed experimentally as one reusable recipe for early and closing positions?
4. **Enquiry placement:** Approve an earlier direct-submission enquiry only after confirming the necessary production adaptation and submission/privacy functionality. Until then it is a blueprint intention, not a live feature.
5. **Layout rhythm:** Is the long-form section index inviting after the form, with a clear continuation into genuinely useful technical explanations?
6. **Status display:** Are HTML pills next to recipe IDs readable in the preferred Markdown review surface? Treat their values as a snapshot of the canonical registry, never a second status authority.

**Approval:** Pending Product Owner review. This file does not alter the current autonomous Codex task programme, production route, recipe lifecycle, form provider or publication status.
