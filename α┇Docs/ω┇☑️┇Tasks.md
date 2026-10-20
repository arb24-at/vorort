---
id: vorort.dev.tasks
version: "v0.1"
module: vorort
type: vorort-dev-tasks
schema: 3
created: 2026-10-20
updated: 2026-10-20
---

> [!help]- Instructions
> **One Codex run = one Task; verified → `[x]` → one local commit → report → stop.** This repository board follows Flow's **Task Bundle → Task → optional Subtask** layout and retains its own task IDs; it is not a `flow-3` Chain or another roadmap.
>
> - Task **3A** is complete; the next executable task is **3B**, in a separate run. `Work on the next task` means the earliest unchecked executable item in **Bundle 3**, then **Bundle 4**, preserving listed order: **finish all German tasks before English**. Do not jump ahead after a blocked task; report and stop.
> - Each Task is one locale's one page, not a broad redesign sprint. A Codex run activates **Content & SEO + Design + Implementation + QA**; its scope is the selected page plus genuinely shared implementation/recipe fixes it requires. All four role guides and root `AGENTS.md` apply.
> - Use the real current repository and `ω┇Engine/src/data/seo-keywords.yml` as research-routing authority; inspect the exact page's validated content and route, `α┇Docs/α┇Project.md` for service truth, and the registry `src/design-system/section-recipes.ts` for approved patterns. Content may be creatively restructured; section order, density and copy are not frozen.
> - **Per-page acceptance contract:** form a concise page-specific content/SEO/design plan within the run; independently author the selected language; integrate the approved shared section patterns into the actual target route using validated editable content, maintain correct canonical/alternate-language/SEO relationships, preserve factual boundaries, base-aware links and functional contact paths, and inspect responsive/focus behaviour. Report the plan and rationale after completion. A separate advance blueprint-sign-off is not required for this explicitly authorised programme; final publication approval remains with the Product Owner.
> - **Experimental Design Lab:** Codex may improve misleading recommended placement/use, flexible guidance, compatible schemas, shared styling, responsive behaviour and implementation where evidence from the page justifies it, and MUST enumerate every change in the report and update the canonical source/documentation. Never loosen truth, accessibility or basic validation safeguards. Substantial new/breaking recipes remain experimental until explicitly approved; do not silently approve or migrate them.
> - Run targeted checks during implementation; before completion run applicable `npm run validate` from `ω┇Engine/`, `git diff --check`, `git status --short`, and representative desktop/mobile checks when UI changed. Mark `[x]` **only** for actually implemented/validated work; otherwise leave `[ ]`, record the exact blocker in `β┇Collaboration.md`, report and stop.
> - Local Git commit only; **no automatic push, release or deployment**. Increment the canonical root `AGENTS.md` version once per new commit unless an uncommitted bump already belongs to it, and use `VorOrt vX.Y.Z: message`. Preserve unrelated local changes; do not modify `.git` internals. The working page may still await final customer facts or editorial approval; never describe provisional legal/contact facts as published-ready.
> - Existing SEO evidence is not permission to fabricate search volumes, licences, certifications, testimonials, response times, pricing or operator details. When necessary, flag unavailable credentials, media, legal facts or backend services clearly instead of blocking truthful page composition unnecessarily.

## Bundle 1 — Archived Approved Sections foundation

> [!done] Completed work
> Former Task 1A–1C implemented canonical authoring guidance, visual Approved Sections examples, and collapsed disclosure details. IDs/history preserved in concise form; **1D is not completed** and appears under Bundle 5 as deferred QA.

- [x] 1A — Add the canonical authoring contract
- [x] 1B — Build the visual Approved Sections library
- [x] 1C — Collapse dense authoring details by default

## Bundle 2 — Archived Design Lab review tooling

> [!done] Completed work
> Former Task 2A–2C implemented quiet recipe IDs, a page-sections navigator and Copy screenshot. Implementation history remains in Git/Collaboration, not repeated here.

- [x] 2A — Add subtle recipe-ID labels
- [x] 2B — Add Workshop section contents navigator
- [x] 2C — Copy rendered section screenshots

## Bundle 3 — German launch pages (execute first)

> [!todo] Goal
> Rewrite one **German** publication-route page per run and commit. This bundle must be completed before Bundle 4. Use the ten approved recipes creatively and improve their compatible shared implementation where real page content exposes flaws.

- [x] **3A — DE · Home networks / Wi-Fi**
  - **Route:** `/leistungen/privatpersonen/wlan-heimnetz/`
  - **Page job:** Pilot an expressive, technically accurate service chapter structure. Preserve the approved editorial hero, topic navigation and conversion path where they help; avoid repair or guaranteed-coverage promises.
  - **Execution:** German original; use formal **Sie** and German-specific researched intent; do not translate from English. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **3B — DE · Computer and laptop help**
  - **Route:** `/leistungen/privatpersonen/computer-laptop-hilfe/`
  - **Page job:** Clarify fault diagnosis, troubleshooting and honest hardware-repair boundaries; make the problem-to-action journey distinct from software and data-transfer pages.
  - **Execution:** German original; use formal **Sie** and German-specific researched intent; do not translate from English. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **3C — DE · Software installation / optimisation**
  - **Route:** `/leistungen/privatpersonen/software-installation-optimierung/`
  - **Page job:** Cover supported software setup, compatibility and practical optimisation without promising unlicensed, unsupported or guaranteed fixes.
  - **Execution:** German original; use formal **Sie** and German-specific researched intent; do not translate from English. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **3D — DE · Setup and data transfer**
  - **Route:** `/leistungen/privatpersonen/einrichtung-datenumzug/`
  - **Page job:** Explain setup, ordinary migrations and handover clearly; distinguish normal file transfer from specialist data recovery.
  - **Execution:** German original; use formal **Sie** and German-specific researched intent; do not translate from English. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **3E — DE · Private customers landing**
  - **Route:** `/leistungen/privatpersonen/`
  - **Page job:** Create a distinct audience-oriented overview and navigation gateway rather than a generic cloned service page; extend page-type compatibility carefully if needed.
  - **Execution:** German original; use formal **Sie** and German-specific researched intent; do not translate from English. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **3F — DE · Business networks / IT support**
  - **Route:** `/leistungen/unternehmen/netzwerk-it-betreuung/`
  - **Page job:** Pilot a business service chapter that conveys infrastructure competence without implying enterprise security, SLAs or mandatory managed contracts.
  - **Execution:** German original; use formal **Sie** and German-specific researched intent; do not translate from English. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **3G — DE · Microsoft 365 workplaces**
  - **Route:** `/leistungen/unternehmen/microsoft-365-arbeitsplaetze/`
  - **Page job:** Address practical workplace setup, accounts, collaboration and migration only within grounded capabilities and lawful licensing.
  - **Execution:** German original; use formal **Sie** and German-specific researched intent; do not translate from English. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **3H — DE · Google Workspace / cloud**
  - **Route:** `/leistungen/unternehmen/google-workspace-cloud/`
  - **Page job:** Use the already researched Workspace intent; distinguish it from Microsoft 365 and avoid unsupported admin/security guarantees.
  - **Execution:** German original; use formal **Sie** and German-specific researched intent; do not translate from English. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **3I — DE · Business customers landing**
  - **Route:** `/leistungen/unternehmen/`
  - **Page job:** Create a differentiated business entry page, balancing specific needs, verifiable process and clear service navigation.
  - **Execution:** German original; use formal **Sie** and German-specific researched intent; do not translate from English. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **3J — DE · Homepage**
  - **Route:** `/`
  - **Page job:** Compose an intentional site-wide introduction and route to key audiences; the current approved library is service-page-oriented, so adjust safe compatibility or flag genuinely missing patterns rather than forcing a template.
  - **Execution:** German original; use formal **Sie** and German-specific researched intent; do not translate from English. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **3K — DE · Trust and working methods**
  - **Route:** `/datensicherheit-zertifizierungen/`
  - **Page job:** Replace misleading/transitional certification framing with grounded working methods and verifiable facts; for English, decide the appropriate paired route/content carefully and report any route decision.
  - **Execution:** German original; use formal **Sie** and German-specific researched intent; do not translate from English. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **3L — DE · Legal notice**
  - **Route:** `/impressum/`
  - **Page job:** Maintain legally relevant German source of truth; never fabricate operator/address/legal facts. The English task must review whether the German legal source remains the correct destination instead of inventing an English legal page.
  - **Execution:** German original; use formal **Sie** and German-specific researched intent; do not translate from English. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **3M — DE · Privacy policy**
  - **Route:** `/datenschutz/`
  - **Page job:** Preserve accurate data-processing disclosures and contact-form/legal dependencies; do not invent controller, provider or retention facts. English-facing treatment may keep the German legal source until verified.
  - **Execution:** German original; use formal **Sie** and German-specific researched intent; do not translate from English. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.

## Bundle 4 — Independent English launch pages (after all German tasks)

> [!todo] Goal
> Rewrite English pages **only after Bundle 3**. Research and write for English-speaking audiences independently while preserving the established site relationships. For trust and legal pages with no current independent English route, make a grounded language-route decision and document it rather than manufacturing a path.

- [ ] **4A — EN · Home networks / Wi-Fi**
  - **Route:** `/en/services/private/wifi-home-network/`
  - **Page job:** Pilot an expressive, technically accurate service chapter structure. Preserve the approved editorial hero, topic navigation and conversion path where they help; avoid repair or guaranteed-coverage promises.
  - **Execution:** Independent English authoring using the English intent and research; do not mechanically translate the German copy. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **4B — EN · Computer and laptop help**
  - **Route:** `/en/services/private/computer-laptop-help/`
  - **Page job:** Clarify fault diagnosis, troubleshooting and honest hardware-repair boundaries; make the problem-to-action journey distinct from software and data-transfer pages.
  - **Execution:** Independent English authoring using the English intent and research; do not mechanically translate the German copy. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **4C — EN · Software installation / optimisation**
  - **Route:** `/en/services/private/software-installation-optimisation/`
  - **Page job:** Cover supported software setup, compatibility and practical optimisation without promising unlicensed, unsupported or guaranteed fixes.
  - **Execution:** Independent English authoring using the English intent and research; do not mechanically translate the German copy. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **4D — EN · Setup and data transfer**
  - **Route:** `/en/services/private/setup-data-transfer/`
  - **Page job:** Explain setup, ordinary migrations and handover clearly; distinguish normal file transfer from specialist data recovery.
  - **Execution:** Independent English authoring using the English intent and research; do not mechanically translate the German copy. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **4E — EN · Private customers landing**
  - **Route:** `/en/services/private/`
  - **Page job:** Create a distinct audience-oriented overview and navigation gateway rather than a generic cloned service page; extend page-type compatibility carefully if needed.
  - **Execution:** Independent English authoring using the English intent and research; do not mechanically translate the German copy. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **4F — EN · Business networks / IT support**
  - **Route:** `/en/services/business/network-it-support/`
  - **Page job:** Pilot a business service chapter that conveys infrastructure competence without implying enterprise security, SLAs or mandatory managed contracts.
  - **Execution:** Independent English authoring using the English intent and research; do not mechanically translate the German copy. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **4G — EN · Microsoft 365 workplaces**
  - **Route:** `/en/services/business/microsoft-365-workplaces/`
  - **Page job:** Address practical workplace setup, accounts, collaboration and migration only within grounded capabilities and lawful licensing.
  - **Execution:** Independent English authoring using the English intent and research; do not mechanically translate the German copy. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **4H — EN · Google Workspace / cloud**
  - **Route:** `/en/services/business/google-workspace-cloud/`
  - **Page job:** Use the already researched Workspace intent; distinguish it from Microsoft 365 and avoid unsupported admin/security guarantees.
  - **Execution:** Independent English authoring using the English intent and research; do not mechanically translate the German copy. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **4I — EN · Business customers landing**
  - **Route:** `/en/services/business/`
  - **Page job:** Create a differentiated business entry page, balancing specific needs, verifiable process and clear service navigation.
  - **Execution:** Independent English authoring using the English intent and research; do not mechanically translate the German copy. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **4J — EN · Homepage**
  - **Route:** `/en/`
  - **Page job:** Compose an intentional site-wide introduction and route to key audiences; the current approved library is service-page-oriented, so adjust safe compatibility or flag genuinely missing patterns rather than forcing a template.
  - **Execution:** Independent English authoring using the English intent and research; do not mechanically translate the German copy. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **4K — EN · Trust and working methods**
  - **Route:** No existing independent English route; evaluate the current German-source-link policy, avoid an invented URL.
  - **Page job:** Replace misleading/transitional certification framing with grounded working methods and verifiable facts; for English, decide the appropriate paired route/content carefully and report any route decision.
  - **Execution:** Independent English authoring using the English intent and research; do not mechanically translate the German copy. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **4L — EN · Legal notice**
  - **Route:** No existing independent English route; evaluate the current German-source-link policy, avoid an invented URL.
  - **Page job:** Maintain legally relevant German source of truth; never fabricate operator/address/legal facts. The English task must review whether the German legal source remains the correct destination instead of inventing an English legal page.
  - **Execution:** Independent English authoring using the English intent and research; do not mechanically translate the German copy. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.
- [ ] **4M — EN · Privacy policy**
  - **Route:** No existing independent English route; evaluate the current German-source-link policy, avoid an invented URL.
  - **Page job:** Preserve accurate data-processing disclosures and contact-form/legal dependencies; do not invent controller, provider or retention facts. English-facing treatment may keep the German legal source until verified.
  - **Execution:** Independent English authoring using the English intent and research; do not mechanically translate the German copy. Apply the common per-page acceptance contract, record every Design Lab change, verify, mark this item complete, commit once, report and stop.

## Bundle 5 — Deferred validation and release decisions

> [!todo] Not part of automatic next-page selection until Bundles 3 and 4 are complete or the Product Owner explicitly calls one of these tasks.

- [ ] **1D — Historical final Approved Sections QA (retained ID)**
  - Review registry-derived approval, both Workshop specimens, responsive and disclosure/capture behaviour, and full validation. This was unfinished in the old `ω┇Tasks.md` board, so it has **not** been marked complete or renumbered. Perform/commit only after actual evidence.

- [ ] **5A — Bilingual site-wide consistency and production QA**
  - Reconcile every revised page: page ownership/keyword cannibalisation, distinct German/English depth, linking, metadata/canonicals/alternates, truthful service scope, accessibility, imagery, layout diversity and form paths. Resolve actual defects, verify, commit and stop.

- [ ] **5B — Publication readiness decision**
  - Audit legal/operator/contact/brand verification, form submission provider/spam/privacy handling, GitHub Pages domain/SEO setup, release health and remaining media. Record which prerequisites require the Product Owner; **never self-approve launch, push or deploy**.
