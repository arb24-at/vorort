---
kind: page-blueprint
status: review-draft
page-id: wifi-home-network
locale: en
seo-reference: wifi-en
route: /en/services/private/wifi-home-network/
locale-pair: /leistungen/privatpersonen/wlan-heimnetz/
content-file-path: ω┇Engine/src/content/services/wifi-home-network/en.yml
content-file-url: https://drive.google.com/file/d/1qaj0e-Bby-ftcG78Q--tMIzv-oIX1wX9/view
blueprint-version: 0.3
approval: pending-product-owner-review
pilot: english-first-experiment
---

# Page blueprint — Home network setup & Wi-Fi help (EN)

> **Revised English page blueprint for review; not approved copy or a publication decision.** This v0.3 refinement retains the 15-section journey and intentionally gives visitors **two useful sections between the hero and quick-contact invitation**: relatable situations followed by a substantive but approachable account of what help looks like. The enquiry comes *after* those sections and the short CTA, not immediately after the hero. Section IDs are page instances; recipe IDs are shared design contracts. Compact HTML status pills are deliberately hand-written **snapshots** of canonical registry status for now; they are not a separate approval ledger or an automated feature. Experimental sections may be rendered in the authorised English test composition without being promoted to Approved. The separate Design Lab Workshop page should be a reusable **Private Service Page** pattern showcase, not another home-network-only copy of this page.

## Page-level brief

| Field | Direction |
| --- | --- |
| **Audience** | English-reading Berlin residents, households, home-office workers and freelancers who need either a specific small fix or a planned home-network installation. Do not infer nationality, tenure, preferred telephone language or an urgent appointment need |
| **Primary job** | Make an everyday Wi-Fi/router problem feel like a perfectly valid reason to enquire now; offer a comfortable written alternative; provide substantial network detail for visitors who want to research before deciding |
| **Positioning / feeling** | Competent, approachable local on-site IT help, not an enterprise contractor and not a forced whole-house rewire. Existing equipment and small jobs are taken seriously. Explain complexity only where it helps a decision |
| **Independent EN search ownership** | `wifi-en` in `ω┇Engine/src/data/seo-keywords.yml` owns **home network setup** as the primary researched intent, with **home network installation**, **Wi-Fi installation/setup**, **Mesh Wi-Fi setup**, **home network cabling/Ethernet installation**, **NAS setup** and **home office network setup** as supporting service intents. These have English-language research; do not import German keyword priorities or claim new volume figures |
| **Do not optimise for** | Cable/product queries such as Cat5e/Cat6/Cat8/RJ45 shopping, specific manufacturer/router instructions, ISP outages, enterprise network consultancy or unrelated equipment repair. Do not turn the page into a generic troubleshooting blog |
| **Service truth and boundaries** | Planning and improving Wi-Fi, Mesh/access points, Ethernet/network outlets, home-office devices and NAS are supported. Check existing equipment before recommending replacements; quote work individually; first conversation is free; explain possible diagnostic visit charges before arranging. No guaranteed speeds/whole-property coverage, ISP-line repair, electrical installation, automatic remote NAS access, data recovery or broad smart-home installations. NAS/RAID alone is not an independent backup |
| **Voice and English intent** | Write naturally for someone seeking **home network setup in Berlin**, not as a sentence-by-sentence German translation. Friendly, practical, modest small-team voice. Explain technical terms on first meaningful use. English copy does not itself promise phone support in any specific language or verified response times |
| **Three reader stages** | **Act now:** hero → varied recognisable problems → practical scope/approach → short call-or-write CTA. **Prefer to write:** a prominent, comfortable enquiry form after useful reassurance. **Investigate:** topic index, deeper Wi-Fi/cabling/office/NAS/planning explanations, process, FAQs and return-to-contact CTA |
| **Intentional depth progression** | Short early mentions answer **“Is my problem in scope, and can I contact them?”** Later chapters answer **“Which approach might work, what is involved, and where are the limits?”** A shared topic reference joins those mentions but their copy must not be duplicated |
| **Indicative page text** | Approximately **1,550–2,400 visible English words** overall, with roughly **350–550 words before the form** across hero, situations, practical scope and quick CTA; omit padding where less is more. Ensure the opening feels substantial **without** forcing a hesitant visitor through a technical article before contact. These are pacing guides, not SEO quotas |
| **Media status** | Current EN production record references P1 hero and P2–P6 topic illustrations, shared with its DE pair; the topic images remain provisional. Media Queue controls acceptance. No false implication that illustrations show actual customers or premises |
| **Current implementation / test boundary** | The English record now owns the complete 15-section journey, including one canonical email-draft enquiry after the two orientation sections and quick CTA. `composition.experiment: wifi-home-network-en-test` is bound to the exact English service identity, private audience and route. Only situations, quick contact and the email-draft enquiry are experimental exceptions; default/German production remains approved-only. The old `contactAfter` shortcut and service-bound Workshop source references are retired. Direct delivery remains a separate backend/privacy dependency |
| **Testing boundary** | Apply this Wi-Fi-specific **content plan** to the real EN route for the authorised local test, while Design Lab has one **generic Private Service Page** Workshop showcasing reusable private-service section patterns and suggestions. Keep `en.yml` the source of real EN service copy. Do not maintain a duplicate home-network Workshop page; do not change German, approve a recipe, push, deploy or claim the form backend works |

## Section journey — quick scan

| Order | Instance ID | Reader stage | Value to the visitor | Recipe / current status |
| --- | --- | --- | --- | --- |
| 01 | `introduction` | Act now | Is this local help appropriate for my home? | `hero.editorial-art` — Approved |
| 02 | `everyday-situations` | Act now | Do they recognise the kinds of problems I actually have? | `recognition.situations` — Experimental |
| 03 | `practical-help` | Act now / considering | What would they actually do, and can the work stay proportional? | `explanation.editorial-prose` — Approved (short orientation use) |
| 04 | `quick-contact` | Act now / write | I can call without committing to a large installation | `cta.quick-contact` — Experimental |
| 05 | `contact` | Prefer to write | I can describe my problem using a clearly presented form | `contact.enquiry-email` — Experimental email-draft fallback; approved direct recipe remains separate |
| 06 | `topics` | Investigate | More substantial explanations continue after contact | `scope.topic-index` — Approved |
| 07 | `wifi-coverage` | Investigate | How should Wi-Fi or Mesh be improved? | `explanation.editorial-prose` — Approved |
| 08 | `ethernet-cabling` | Investigate | Is Ethernet worth installing here? | `explanation.connection-path` — Approved |
| 09 | `home-office` | Investigate | How should a desk and its devices be connected? | `explanation.editorial-prose` — Approved |
| 10 | `nas-storage` | Investigate | When is NAS useful, and what is not a backup? | `explanation.editorial-prose` — Approved |
| 11 | `network-planning` | Investigate | Can we build on existing equipment? | `explanation.editorial-prose` — Approved |
| 12 | `installation` | Investigate | What happens once the request is assessed? | `process.staged-path` — Approved |
| 13 | `questions` | Investigate | What concerns remain unanswered? | `faq.editorial-answers` — Approved |
| 14 | `related-services` | Investigate / redirect | Is another service a better fit? | Existing related-services shell, not a recipe |
| 15 | `final-contact` | Investigate → act | I can return to the same contact choice | `cta.quick-contact` — Experimental, reused |

## 01 — Hero: Local home network help at a human scale

**Instance ID:** `introduction` · **Recipe ID:** `hero.editorial-art` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader stage / depth:** Act now · concise orientation. **Topic refs:** `home-network`, `wifi-coverage`.
- **Job / customer perception:** “They help in Berlin, and my single-room Wi-Fi problem is not too small.” Also acknowledge a new or upgraded network without making a big installation sound mandatory.
- **Must communicate:** Service is on site in Berlin; setup or improvement for Wi-Fi, home networking and devices; practical solutions start from the rooms and equipment the person actually uses. One straightforward H1 naturally aligned with **home network setup**, not an all-technology inventory.
- **Organic phrasing:** **Home network setup in Berlin** or a natural close variant; Wi-Fi help, home network installation only when the wording earns its place. No repeater-brand instructions or speed guarantees.
- **Composition / variation:** Approved editorial hero contract: eyebrow, H1, introduction, one informative supplied image, **exactly two actionable section-anchor links**. Prefer `contact` and `topics` as targets; phone calling is a separate quick CTA / shared contact route, not a fabricated hero recipe action.
- **Generator freedom / words:** Medium; write distinct, approachable English around a recognisable household need. **45–80 visible words** excluding actions. Avoid inventing personal testimonials.
- **Media / question:** Current P1 environment artwork, meaningful alt text. On mobile, can someone tell within seconds that a modest request is welcome?

## 02 — Everyday situations: Recognise the request immediately

**Instance ID:** `everyday-situations` · **Recipe ID:** `recognition.situations` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Experimental</span>

- **Reader stage / depth:** Act now · recognition snapshots. **Topic refs:** `wifi-coverage`, `router-setup`, `homeoffice-connectivity`, `network-planning`.
- **Job / customer perception:** “They work on normal home problems, not only elaborate installations.” Make a weak bedroom connection, newly supplied router, work desk that disconnects, or move/new setup feel familiar and solvable in principle.
- **Must communicate / SEO:** **Four to six distinct situations** spanning a weak room signal, unfamiliar router setup, an unreliable home-office desk, an awkwardly connected printer or fixed device, and a move/upgrade where relevant. Give each an actual consequence and a believable way the service could help rather than a two-word symptom. Use ordinary **Wi-Fi setup**, **weak Wi-Fi**, **home network setup** phrasing naturally.
- **Composition / variation:** Use the registered **2–6 item** structure with an inviting intro and usually five well-developed situations. Each body should offer a sentence of context, not a skeletal label; avoid a narrow three-item strip that makes the page feel over before it starts. Distinguish the situations, maintain an accessible mobile reading order and do not create a device-manual tutorial.
- **Generator freedom / words:** High for lived-in, believable household situations; approximately **140–210 words** total, including a concise section intro. Do not fill a count or promise to fix provider-side or all manufacturer faults.
- **Design Lab / review:** Actual recipe status is **Experimental**. Trial it only in appropriate experimental contexts until approved. Does the section make one small job feel sufficient reason to contact us?

## 03 — Practical help and proportionate scope: Show what the service actually does

**Instance ID:** `practical-help` · **Recipe ID:** `explanation.editorial-prose` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader stage / depth:** Act now → Considering · practical orientation, **not** another technical chapter. **Topic refs:** `home-network`, `working-scope`, `wifi-coverage`, `homeoffice-connectivity`. **Related detail:** `wifi-coverage`, `ethernet-cabling`, `network-planning`, `installation`.
- **Job / intended perception:** Answer **“What can you actually help me with, and must I buy a whole new system?”** before presenting an enquiry. The visitor should see enough substantive explanation to trust the service with a single-room Wi-Fi problem, a few devices, or a considered home-network installation. This section is deliberately a **second meaningful piece of information between hero and contact**, not another sparse row of tiles.
- **Must communicate:** What the work may involve in ordinary terms: assess existing router, placement, room/device needs and feasible connections; improve setup/configuration where practical; discuss a targeted access point or cable where it makes sense; optionally plan a more complete network. Emphasise proportional decisions, not fixed packages, universal fixes or a compulsory equipment purchase. Initial conversation is free; pricing is agreed individually, with any paid diagnostic visit explained before arranging. No fake guarantees, same-day promises or ISP-line repair.
- **Composition / design intent:** Use the **approved editorial-prose** contract as a compact, varied editorial section—not a long technical essay and not a three-card duplicate of `everyday-situations`. Suggested treatment: clear H2 and lead paragraph, two short complementary prose blocks (a small issue vs a planned setup), and one discreet service/process reassurance or practical example. Use a narrow/wide text rhythm or two-column passage only when it reads well. Keep all information visible and responsive. If the current renderer makes a compact orientation look too article-like, request an **experimental generic private-service scope recipe** in the consolidated Design Lab rather than distorting an approved contract.
- **Difference from later chapters:** Give the **shape and boundaries of help**, not how Mesh operates, the Ethernet route diagram, NAS setup procedures or the four-step installation process. Later sections should deepen the same topics without copying this introduction.
- **Generator freedom / words:** Medium–high for independently written English and concrete examples; **135–195 words**. No unverified outcomes, quotes, badges or price examples.
- **Review:** Would a sceptical visitor understand the likely scale of help *before* the contact choices? Does the section add genuine information while still making the call option easy to find?

## 04 — Quick contact: Call now, or choose writing

**Instance ID:** `quick-contact` · **Recipe ID:** `cta.quick-contact` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Experimental</span>

- **Reader stage / depth:** Act now → Write · micro reassurance. **Topic ref:** `contact-choice`.
- **Job / customer perception:** “A conversation doesn't mean agreeing to an expensive project.” Offer an accessible direct call route and a second clear route to the written enquiry, with actual contacts read from verified site configuration rather than invented here.
- **Must communicate:** The **initial conversation is free**; needs/scope are discussed before work, and any charge for a diagnostic visit must be explained beforehand; existing gear will be considered before a replacement recommendation. No published hourly price, guaranteed appointment date, or implied telephone language capability.
- **Composition / variations:** Use the newly registered **Experimental** `cta.quick-contact` design: short invitation and reassurance, centrally sourced telephone action plus `#contact` anchor. It follows the two informational sections, **in fourth position**, rather than trying to replace them. Do not duplicate the form, turn this into a large sales panel or invent appointment and channel promises. Preserve responsive and keyboard-accessible controls.
- **Generator freedom / words:** Medium for reassuring English tone and visual emphasis, fixed on cost/service truths. **35–60 words**.
- **Design Lab / review:** This shared recipe is currently **Experimental** in the canonical registry and should appear in the unified **Private Service Page** Workshop, not a separate Wi-Fi-only pilot. It is an actual reusable candidate, not an unregistered suggestion. Does the invitation feel easy after adequate context, without pressure?

## 05 — Early enquiry: The written path comes before deep explanations

**Instance ID:** `contact` (the unique enquiry anchor) · **Recipe ID:** `contact.enquiry-email` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Experimental</span>

- **Reader stage / depth:** Prefer to write · first conversion point. **Topic ref:** `contact-choice`.
- **Job / customer perception:** “I can ask in my own words, without choosing hardware or making a full technical plan.” An enquiry is not agreement to a quote or automatically paid diagnosis.
- **Must communicate:** Provide one simple prompt: which room/device is affected, what they want to connect or improve, the Berlin district where relevant, and how to reply. No passwords, recovery codes, card details or sensitive credentials. State what action actually delivers the enquiry and provide an appropriate privacy link.
- **Composition / contract:** Use the **Experimental** `contact.enquiry-email` fallback, sharing the substantial layout and field implementation with Approved `contact.enquiry`. Both show direct contact choices plus an **always-visible structured form**; their delivery contracts remain distinct. Name, preferred reply channel, required address/number and request stay in the core flow, with optional details in native disclosure. Give the form a **substantial visual presence**—comfortable field widths, readable labels, clear heading, breathing room, and a balanced container that does not feel like a tiny utility widget beneath a CTA. This is a size and hierarchy request **within** the existing approved semantics, not permission to change its data contract. The email-draft recipe validates the selected reply field, prepares a mailto draft and tells the visitor to review and send it in their own email app. Its native mailto action and visible direct contacts provide fallbacks. It never calls a backend or claims delivery. The Approved direct-submit recipe remains unavailable without an authorised endpoint/privacy arrangement.
- **Generator freedom / words:** Medium for short EN invitation and practical placeholders, fixed on form semantics, privacy and truth. **45–80 editorial words**, excluding field labels.
- **Production/testing caveat:** The v2.2.35 hero → form shortcut is retired. **The form must remain after meaningful opening content.** The intended form follows `everyday-situations`, `practical-help` and `quick-contact`. Reuse one canonical `contact` anchor, do not duplicate the shell, and do not pretend direct submission works without configured delivery/privacy approval. The English local test explicitly exercises the three Experimental recipes `recognition.situations`, `cta.quick-contact` and `contact.enquiry-email`, without promoting them.
- **Review:** Does the visitor get enough context to trust the business *before* seeing the form? Is the form visibly important and comfortable, not a cramped second-row widget? Can a writing-preferring visitor use it without reading technical chapters, and continue reading afterwards?

## 06 — Explore the options: Invitation to continue after the form

**Instance ID:** `topics` · **Recipe ID:** `scope.topic-index` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader stage / depth:** Investigate · scannable map. **Topic refs:** `wifi-coverage`, `home-cabling`, `homeoffice-connectivity`, `nas-sharing`, `network-planning`.
- **Job / customer perception:** “There is more help here if I want to understand it.” The first form was deliberately placed early; it is not the end of the page.
- **Must communicate:** Five distinct useful chapters: Wi-Fi/Mesh, Ethernet/network cabling, home-office connections, NAS/shared files and moving/upgrading an existing system. Lead descriptions with household outcomes, not a device catalogue.
- **Organic language:** Topic labels may naturally include **Mesh Wi-Fi setup**, **Ethernet installation**, **NAS setup** and **home office network setup**, but only where they are accurate and readable. Do not repeat all SEO phrases across every card.
- **Composition / variation:** Approved **2–6 topic anchors** pointing to real explanations **below**; concise introduction such as “Want to understand the options first?” and meaningful media. The lead Wi-Fi tile may be visually featured; vary layouts without breaking the actual index behaviour.
- **Generator freedom / words:** Medium–high in topic ordering and labels within the five planned distinct destinations. **65–110 words**.
- **Media / review:** P2–P6 are provisional, and no new approved media is implied. Is the transition visually unmistakable and inviting rather than feeling like a second homepage?

## 07 — Wi-Fi and Mesh: Explain the decisions behind a better signal

**Instance ID:** `wifi-coverage` · **Recipe ID:** `explanation.editorial-prose` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader stage / depth:** Investigate · substantial explanation. **Topic refs:** `wifi-coverage`, `router-setup`. **Earlier mentions:** `everyday-situations`, `introduction`.
- **Job / customer perception:** A technician considers the building and what works already before recommending a new router, repeater, Mesh system or access point.
- **Must cover:** Reception in the actual rooms, walls/floors, location of router, neighbouring wireless networks, how access points connect (wireless/wired backhaul), selecting and configuring what fits, testing agreed areas. Be clear that provider-line failure is not solved by moving Wi-Fi equipment.
- **EN search language:** **Wi-Fi installation**, **Wi-Fi setup**, **Mesh Wi-Fi setup**, **home network setup** naturally distributed; no forced “best router” or manufacturer-specific phrase. Existing `wifi-en` research, not German equivalents, owns intent.
- **Composition / options:** A meaningful editorial passage, one short common-criteria comparison (router placement / wireless Mesh / wired access point), perhaps one quiet testing note. Could choose approved `explanation.options-guide` instead *only* if its image and equal-criteria contract genuinely fit. Do not turn it into product shopping advice.
- **Generator freedom / words:** High for real-life examples, comparison structure and pacing; no universal speed/coverage claims. **210–320 words**.
- **Link / review:** A contextual in-page link to `ethernet-cabling` makes sense when discussing wired access points, if supported in renderer. Does the reader gain practical reasoning beyond the top-of-page promise?

## 08 — Ethernet: A wired connection where it is useful

**Instance ID:** `ethernet-cabling` · **Recipe ID:** `explanation.connection-path` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader stage / depth:** Investigate · practical infrastructure. **Topic ref:** `home-cabling`. **Earlier mention:** `topics`.
- **Job / customer perception:** Ethernet is an option to improve a desk, fixed device or Wi-Fi access point, not a compulsory full-home cable project.
- **Must cover:** Router/switch → feasible cable route and possible network outlet → destinations such as workstation, TV or access point. Existing cable checks, drilling/landlord permission if needed, realistic routes, agreed labour/equipment, testing. No electrical wiring service. In the diagram, the route node represents **separate cable runs and outlets**; every wired destination needs its own cable connection and network port. Do not suggest that one cable branches into unlimited ports.
- **EN search language:** **Home network cabling**, **Ethernet installation**, **network cabling** where natural in headings and explanations; avoid cable-category product/specification queries.
- **Composition / variation:** Approved source → route → destinations diagram with legible text labels, one useful caption and post-diagram planning decisions; reflow logically for mobile. Include only technically defensible nodes.
- **Generator freedom / words:** Medium for destination examples, captions and household trade-offs. **170–260 words** including diagram text.
- **Review:** Could a non-technical reader understand when a cable helps without thinking every room needs drilling?

## 09 — Home office and devices: Work where you actually sit

**Instance ID:** `home-office` · **Recipe ID:** `explanation.editorial-prose` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader stage / depth:** Investigate · focused. **Topic ref:** `homeoffice-connectivity`. **Earlier mention:** `everyday-situations`.
- **Job / customer perception:** The service knows why a real desk, work call, shared printer or other device needs stable connectivity, without equating a flat with a corporate office.
- **Must cover:** Check connection at the desk, compare suitable Wi-Fi or Ethernet, connect selected printers/TVs/docking stations within their supported capabilities, and explain boundary of employer-managed VPNs/devices and provider faults.
- **EN search language:** **Home office network setup** in an authentic explanation; Wi-Fi/connection terms only as relevant, not a duplicate business-network landing page.
- **Composition / variation:** Compact comparison between workstation and shared household devices, followed by a single quiet boundary note. Do not repeat Wi-Fi's full comparison table and callout stack.
- **Generator freedom / words:** High for everyday examples, fixed on managed-device and support boundaries. **110–175 words**.
- **Links / review:** Point to existing EN Computer & Laptop Help for a computer fault or Setup & Data Transfer for a new computer when relevant and technically linkable. Is the chapter useful even to someone who has no office infrastructure?

## 10 — NAS and shared files: A real specialist option, not an upsell

**Instance ID:** `nas-storage` · **Recipe ID:** `explanation.editorial-prose` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader stage / depth:** Investigate · optional but substantial specialist coverage. **Topic ref:** `nas-sharing`. **Earlier mention:** `topics`.
- **Job / customer perception:** People specifically searching for **NAS setup** can see the service genuinely covers it. Someone who came only for weak Wi-Fi should not feel NAS is part of the necessary purchase.
- **Must cover:** What a NAS does, suitability of existing/new device, network connection, accounts/permissions, shared folders, checking access, and a separate independent backup/restore approach. Explicitly **RAID is not a backup**. No automatic external access, guaranteed data recovery or exaggerated security claims.
- **SEO ownership:** `wifi-en` includes commercially relevant **NAS setup** in its actual English research. Cover it meaningfully here, but do not claim a dedicated NAS page exists or invent a separate target keyword record.
- **Composition / variation:** Intro with a familiar use case (family files or work documents), distinct practical sharing/permissions passage, one concise sharing-versus-backup contrast and an appropriately sober warning. Keep it recognisably optional rather than another costly project showcase.
- **Generator freedom / words:** Medium–high in story and block combination; fixed permission and backup distinctions. **145–215 words**.
- **Internal link / review:** Existing English Setup & Data Transfer only when migration or separate setup is genuinely related. A dedicated NAS page remains a candidate. Does the depth satisfy a NAS-interested search visitor without crowding out the main network promise?

## 11 — Moving, upgrading or starting fresh: Scale to the actual need

**Instance ID:** `network-planning` · **Recipe ID:** `explanation.editorial-prose` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader stage / depth:** Investigate · situational planning. **Topic ref:** `network-planning`. **Earlier mentions:** `everyday-situations`, `topics`.
- **Job / customer perception:** A move can justify a fuller setup, but an existing network can be improved in stages without needless replacement.
- **Must cover:** How rooms and desk/TV positions affect router, access point, cable and outlet planning; check any existing network routes, practical installation/permission limits and optional agreed procurement. Additional equipment/work is discussed before proceeding.
- **EN search language:** **Home network installation** or **home network setup** where relevant; don't imply enterprise design consultancy or a fixed project package.
- **Composition / variation:** New installation vs working with the current setup: two clear paragraphs or a compact two-column contrast with one preparation suggestion. Avoid a second full technical comparison or a lengthy house-renovation checklist.
- **Generator freedom / words:** High in relatable home examples and presentation, truthful cost/permission contract fixed. **110–175 words**.
- **Review:** Does this offer expansion for serious planners while keeping the small-job customer welcome?

## 12 — How the installation works: More detail for the cautious reader

**Instance ID:** `installation` · **Recipe ID:** `process.staged-path` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader stage / depth:** Investigate · assurance and process. **Topic ref:** `working-process`. **Earlier mention:** `quick-contact`.
- **Job / customer perception:** This is the fuller explanation of the simple early scope/cost reassurance, not a repeated sales pitch. The next steps and any possible paid visit are predictable.
- **Must cover:** Four actual stages: (1) initial discussion and needs, (2) assessment and agreed scope/any diagnostic fee, (3) configure or install what was agreed, (4) test and explain/handover. Agree added work or return visits separately. Do not promise appointment or completion deadlines.
- **Composition / variation:** Approved **exactly four-stage** recipe. Clear verbs, realistic short explanations and responsive reading order. Do not add a fifth fake stage or imply an obligatory complex consultation.
- **Generator freedom / words:** Medium for language and examples; exact four-stage relationship and factual boundaries fixed. **100–165 words**.
- **Review:** Could a reader describe what happens after they enquire, including when costs are discussed?

## 13 — Questions that actually hold someone back

**Instance ID:** `questions` · **Recipe ID:** `faq.editorial-answers` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader stage / depth:** Investigate · objections, not filler. **Topic refs:** `router-setup`, `home-cabling`, `working-process`, `wifi-coverage`, `nas-sharing`.
- **Job / customer perception:** Practical details are transparent; the reader is not being pushed into a consultation just to learn obvious limitations.
- **Candidate questions:** Can I keep my provider’s router? Can Ethernet cabling be installed in a lived-in/rented Berlin apartment? What does the cost depend on and how is a visit arranged? Can every room have guaranteed Wi-Fi? What if the issue is at the internet provider? Can a NAS also hold computer backups? Pick **four to five** according to remaining real information gaps and avoid repeating NAS backup paragraphs verbatim. The current draft favours lived-in-flat cabling, retaining a provider’s router, cost/appointments, realistic coverage and provider faults; the opening already establishes that small jobs are welcome.
- **SEO style:** Use real English questions and helpful answers; no invented FAQ rich-result entitlement or repeated primary keyphrase in every answer.
- **Composition / variation:** Approved **3–6 always-visible** questions, each with purposeful prose. Optional media only if it adds explanation; no unapproved accordion swap.
- **Generator freedom / words:** High for selection and answer depth; fixed on no fabricated prices, guarantees, provider repairs or recovery promises. **190–300 words** across questions/answers.
- **Review:** Which answers are truly necessary after the rest of the page, and can any be removed rather than padded?

## 14 — Related services: Help them reach the right route

**Instance ID:** `related-services` · **Implementation owner:** current `RecipeServicePage` related-services shell <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Existing shell · no recipe status</span>

- **Reader stage / depth:** Investigate / redirect. **Topic ref:** `service-navigation`.
- **Job:** Someone with a computer malfunction, a new device migration or separate software problem should reach the more specific service rather than believe everything is a home-network job.
- **Content / linking:** Up to three existing EN destinations: **Setup & Data Transfer**, **Computer & Laptop Help**, and **Software Installation & Optimisation**, ordered by genuine relevance. Use known service IDs and validated locale-aware links; don't invent a dedicated NAS route.
- **Generator freedom / words:** Medium for brief, accurate descriptions. **50–95 words** if counted as visible page content.
- **Implementation boundary:** Current related-services shell is **not** a registered recipe in this page composition, so never label it as Approved merely for visual consistency.

## 15 — Closing contact: Return to the same enquiry choice

**Instance ID:** `final-contact` · **Recipe ID:** `cta.quick-contact` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Experimental</span>

- **Reader stage / depth:** Investigate → Act now · concise return action. **Topic ref:** `contact-choice`. **Shared recipe with:** `quick-contact`.
- **Job / customer perception:** “I understand enough now, and getting in touch is simple.” Call or jump to the **same** earlier `#contact` form. Do not introduce a second identical form or imply they missed their chance.
- **Composition / variation:** Reuse the same registered Experimental CTA semantics and site-driven contacts with slightly different closing English wording. A short invitation plus call/enquiry routes, not an oversized banner or another summary of every service.
- **Generator freedom / words:** High on fresh closing tone, fixed on actual working destinations and accessibility. **25–50 words**.
- **Design Lab link:** If an eventual approved shared renderer receives compatible improvements, both instance placements may inherit them. Material interaction/content redesign requires a new experimental recipe ID and deliberate migration.

## Generator freedom, recipe status and English-first pilot

- **Non-negotiable:** Project/SEO facts, `wifi-en` keyword ownership, existing routes, canonical recipes and their schema/interaction contracts, contact truth, clear privacy and actual delivery behaviour, unique anchors/IDs, accessibility and explicit Product Owner approvals. A blueprint is neither a content source nor an instruction to publish.
- **Flexible:** Detailed phrasing, permitted block combinations, section pacing, word ranges, most chapter subheads and meaningful media choices. Preserve the **three reader-stage opportunities**, but do not imitate a draft layout when a better compatible implementation is identified and reported.
- **Repeat topics purposefully:** `wifi-coverage` appears first as an everyday issue and later as a useful technical comparison; `homeoffice-connectivity` appears as an invitation then a focused chapter; `working-process` starts as brief reassurance then becomes a four-stage description. Copy must bring new value at each depth.
- **Design Lab states:** `recognition.situations`, `cta.quick-contact` and `contact.enquiry-email` are **Experimental** in the current canonical registry. `contact.enquiry`, `hero.editorial-art`, `scope.topic-index`, `explanation.editorial-prose`, `explanation.connection-path`, `process.staged-path` and `faq.editorial-answers` are **Approved**. The compact HTML pills are **manually maintained review snapshots for now**; later status automation should derive them from `section-recipes.ts`, not establish another status source. Do not promote experimental designs by changing pill text.
- **EN first:** This specific blueprint guides the **real English home-network page content**, while the Design Lab should use one **generic Private Service Page** Workshop as the shared private-service recipe showcase. Do not maintain the prior Home Network Concept II and Wi-Fi blueprint-pilot pages as redundant fixtures. Keep the already-approved library and unrelated business Workshop intact; do not confuse a generic design specimen with a second EN content source. Review the EN result before deciding on DE adoption.
- **Implementation:** The real English test renders all **15** planned sections through canonical shared implementations. A route-bound policy permits only the three named Experimental recipes and is enforced both by content validation and the renderer. One email-draft form follows substantial recognition, practical scope and a short CTA; both quick-contact instances return to its unique `contact` anchor. The approved direct-submit recipe is neither relabelled nor silently given a different delivery mechanism. Real direct submission still requires backend/privacy approval. Static blueprint pills remain manually maintained.
- **Links/media:** Hero and topic-index anchors must point to existing unique destinations; English service links must respect deployment base and locale; accepted media status belongs to Media Queue. Existing P1 and provisional P2–P6 may inform the proposed composition without being deemed accepted by this file.
- **Word budgets:** Approximate visible English copy, generally including headings/captions but not navigation/footer or standard form labels. Never fill a section to meet a number or claim SEO value from length alone.

## v0.3 refinement notes

- **Keep the 15-stage order:** two useful orientation sections earn confidence before contact; the short fourth-position CTA remains convenient. A concise hero avoids repeating the richer five-situation section.
- **Separate delivery contracts:** use the new Experimental `contact.enquiry-email` with the shared form renderer. A truthful, functional mail-app draft is a better local test than a disabled direct form or a production-only imitation. Approval of the existing direct-submit recipe does not approve this variant.
- **Improve technical precision and FAQ value:** label the diagram’s grouped runs/ports explicitly. Use FAQs for property, compatibility and appointment questions; do not spend a whole answer restating the opening’s welcome for small jobs.
- **Keep the Workshop generic:** `private-service-page` is an independent specimen/gallery arrangement, not a service-record consumer. Registered recipes use their real lifecycle states; `scope.proportionate-help` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Proposed</span> is a clearly unregistered, unimplemented proposal for later evaluation. The two former home-network fixtures are retired; production is the only complete English journey.

## English pilot review and acceptance questions

1. **Opening value:** Does the visitor see **hero → four-to-six concrete situations → meaningful practical scope and approach → short CTA → generously presented enquiry**, with enough substance before the form but no technical obstacle to calling?
2. **Written enquiry:** Is the form visually comfortable and appropriately prominent, with its actual submission mechanism and privacy explained? Is it **fifth**, not second, and does the page clearly continue afterward?
3. **Progressive depth:** Do later chapters supply new explanation instead of rephrasing the early situation cards? Is NAS useful to a search visitor but recognisably optional?
4. **Reusable recipes:** Are `recognition.situations`, `cta.quick-contact` and `contact.enquiry-email` shown with accurate **Experimental** status in the unified **Private Service Page** Workshop, available for reuse with other private services without being tied to this Wi-Fi copy?
5. **Implementation tests, if authorised:** Verify all 15 sections in meaningful order, unique instance/contact anchors, real destinations, mobile/desktop and keyboard focus, and readable static recipe-status pills. Without a configured direct-submit endpoint, verify the honest mail-client fallback and explicitly mark direct submission unavailable—not a successful end-to-end form test.
6. **SEO/locale:** Are `wifi-en` service-intent phrases natural and genuinely covered, without copying German keyword priorities or accidentally targeting DIY product searches?
7. **Approval:** Treat this blueprint, any experimental recipe and the live English page as **separate** approval objects. An English pilot success does not automatically approve or rewrite its German counterpart.

**Approval:** Pending Product Owner review. The English test is implemented for evaluation; technical verification belongs in Collaboration. No publication or recipe approval follows from implementation or passing checks.
