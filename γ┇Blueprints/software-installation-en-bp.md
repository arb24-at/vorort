---
kind: page-blueprint
status: review-draft
page-id: software-optimisation
locale: en
seo-reference: software-en
route: /en/services/private/software-installation-optimisation/
locale-pair: /leistungen/privatpersonen/software-installation-optimierung/
content-file-path: ω┇Engine/src/content/services/software-installation/en.yml
content-file-url: https://drive.google.com/file/d/1H1aKQts1slDs_zY2zQGV7GIUCMNO5clN/view
blueprint-version: 0.1
approval: pending-product-owner-review
pilot: english-only-drive-working-draft
---

# Page blueprint — Software installation & optimisation (EN)

> **Review-ready proposal, not Product Owner approval or a published page.** The page has its own 9-recipe-section composition and a separate production-shell enquiry, related-services navigation and final return link. Recipe pills below are manually maintained display snapshots; `section-recipes.ts` is the only lifecycle authority. All recipe instances use existing **Approved** entries. No Experimental production adoption is proposed or authorised.

## Page brief

| Concern | Direction |
| --- | --- |
| Reader | English-reading Berlin private customers and home-office workers with an installation request, broken program, troublesome application setting or software-related performance problem |
| Main job | Explain practical **software installation help in Berlin** and troubleshooting with a quick route to contact; teach what is checked and where work may stop |
| Search owner | `software-en` in `src/data/seo-keywords.yml`; **provisional-seed** primary `software installation help Berlin`, with software troubleshooting, Windows software problems, update help, program setup, PC optimisation and application conflicts as supporting intents |
| Research discipline | Local support queries were checked as a language/intent sanity check, not volume research. Microsoft's app-repair and compatibility guidance supports distinguishing repair, compatibility checking and reinstall. No new volume or ranking claim. Do not import German phrasing or pursue `computer repair Berlin` and data-recovery terms |
| Promise | Legitimate supported software installation/configuration, diagnosis of conflicting or unreliable programs, cautious update/startup clean-up, functional checks and handover |
| Fixed limits | Licence/source verified, system support assessed; no speed, hardware repair, unavailable access, full data recovery or universal software compatibility guarantee; no credentials in forms |
| Fees and transport | Initial conversation free; quotations individual, paid diagnostic visit explained before arrangement. Current production shell **prepares a mailto draft**, not direct submission. Phone/WhatsApp are real centrally sourced alternatives. |
| Journey | Quick decider: hero → symptoms → meaningful scope → contact. Writer: jump to #contact or complete the form after section 03. Researcher: continue into installation, conflicts, four working stages, performance, boundaries and four visible answers → return to contact. |
| Visual rhythm | Broad opening illustration; recognisable two-column table; concise scope and a substantial form; progressively deeper prose; one four-stage visual sequence; focused contrast and Q&A. No repeated situation-card galleries or required second gallery. |
| Depth | Approximately 1,150–1,450 visible editorial words plus the production form and related links. Roughly 340–430 words before the enquiry; no word quotas. |
| Implementation | `page.template: recipe-service`, with 9 Approved recipe instances. A small optional `composition.contactAfter` property places the **existing shell** after section 03 while leaving default other-page layout unchanged. A final content-driven shell return to `#contact` is shown only when that option is present. Existing service summary fields stay in the canonical EN locale record. |
| Unresolved | Product Owner editorial/design approval, representative responsive/browser review, local Astro validation, Git diff/status, media suitability, public identity/legal/contact verification and any eventual direct-submit backend/privacy. |

## Section-by-section authoring plan

### 01 · Introduction

**Instance:** `introduction` · **Recipe/implementation:** `hero.editorial-art` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader and stage:** Deciding / act now. **Purpose:** Recognise an installation failure, crash or cluttered PC; see the Berlin offer and reach #contact without reading the article.
- **Content depth:** 60–85 words approximately; vary to suit useful detail.
- **Key subjects:** Software installation help Berlin; legitimate apps; practical limits.
- **Structure, media and links:** One existing illustrative home-workspace image, P1; no claim of a photographed job. Two real anchor actions: #contact and #software-problems.
- **Content generator freedom:** Medium copy freedom. Hero actions, one image with alt text and single H1 remain fixed.

### 02 · Symptoms

**Instance:** `software-problems` · **Recipe/implementation:** `explanation.editorial-prose` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader and stage:** Recognise / considering. **Purpose:** Distinguish failed installation, post-update crashes, permissions and programme conflicts without pretending the error itself is the diagnosis.
- **Content depth:** 130–170 words approximately; vary to suit useful detail.
- **Key subjects:** Failed installers; versions; profiles; application conflicts; recent changes.
- **Structure, media and links:** One two-column symptom/check table and one short paragraph; no decorative icon collection.
- **Content generator freedom:** High example freedom; comparisons must remain plausible, and each symptom must suggest an investigation, not a certain cure.

### 03 · Practical scope

**Instance:** `practical-help` · **Recipe/implementation:** `explanation.editorial-prose` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader and stage:** Reassurance / ready to write. **Purpose:** Show that a single application is enough, give a meaningful account of installation vs diagnosis and explain individually agreed costs before the form.
- **Content depth:** 140–190 words approximately; vary to suit useful detail.
- **Key subjects:** Licences, suitable versions, targeted repair, clean-up, free first conversation, diagnostic visit charge disclosed in advance.
- **Structure, media and links:** One two-column editorial block and one quiet cost note; do not reproduce the symptom table.
- **Content generator freedom:** High editorial freedom, fixed contractual facts. The shell-owned enquiry follows this section.

### 04 · Written enquiry

**Instance:** `contact` · **Recipe/implementation:** `Production ContactSection shell (not a recipe instance)` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Production shell</span>

- **Reader and stage:** Prefer writing / conversion. **Purpose:** One prominent, honest contact section after real recognition and scope; provide phone/WhatsApp alongside the email-draft form.
- **Content depth:** 60–90 words of prompts approximately; vary to suit useful detail.
- **Key subjects:** Application and OS, error and recent change, legitimate access; no passwords, keys or security codes.
- **Structure, media and links:** Existing ContactSection only; uses its real #contact anchor, open desktop form and user-reviewed mailto draft. Mobile disclosure and accessible fields are existing behaviour. No new backend.
- **Content generator freedom:** Limited: wording comes from canonical `cta` and `composition.contact`; the shell interaction remains fixed. No Experimental contact recipe.

### 05 · Installation decisions

**Instance:** `installation-choices` · **Recipe/implementation:** `explanation.editorial-prose` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader and stage:** Investigating / planning. **Purpose:** Explain compatibility and licensing checks, dependencies, correct installer and making the installed app useful for a real task.
- **Content depth:** 150–200 words approximately; vary to suit useful detail.
- **Key subjects:** Windows support, system requirements, publisher/source, licence, default apps, account setup, realistic older-software limits.
- **Structure, media and links:** Two practical prose columns with one outlined compatibility note.
- **Content generator freedom:** High writing freedom; no claim that old/unsupported software is always recoverable.

### 06 · Failures after changes

**Instance:** `updates-conflicts` · **Recipe/implementation:** `explanation.editorial-prose` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader and stage:** Investigating / troubleshooting. **Purpose:** Explain why crashing after an update can have several causes, why repair/reset differs from reinstall, and what must be safeguarded.
- **Content depth:** 150–200 words approximately; vary to suit useful detail.
- **Key subjects:** Repair options, add-ons, profiles, settings, recent changes, account authorisation.
- **Structure, media and links:** Single substantial visible paragraph plus one preservation callout. Avoid a step-by-step how-to promising one fix.
- **Content generator freedom:** High writing freedom; factual repair/reset availability must remain qualified.

### 07 · Working method

**Instance:** `working-method` · **Recipe/implementation:** `process.staged-path` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader and stage:** Confidence / evaluating effort. **Purpose:** Make the four-stage logic tangible: establish symptom, suitability and safeguards, targeted work, test and handover.
- **Content depth:** 115–160 words approximately; vary to suit useful detail.
- **Key subjects:** Diagnosis, backup/recovery options where feasible, change agreement, testing real workflows.
- **Structure, media and links:** Exactly four named stages, fixed ordered contract; no invented instant turnaround.
- **Content generator freedom:** Medium wording freedom; fixed four-stage relationship.

### 08 · Performance

**Instance:** `pc-optimisation` · **Recipe/implementation:** `explanation.editorial-prose` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader and stage:** Investigating / realism. **Purpose:** Explain what is and is not within PC optimisation and why a software tidy-up may not remedy storage or hardware limitations.
- **Content depth:** 125–175 words approximately; vary to suit useful detail.
- **Key subjects:** Startup processes, old apps, extensions, storage, limitations, no guaranteed speed.
- **Structure, media and links:** One two-column block: inspectable software load versus hardware/performance boundaries.
- **Content generator freedom:** High editorial freedom; no universal fix, benchmark or guarantee.

### 09 · Service boundaries

**Instance:** `service-limits` · **Recipe/implementation:** `explanation.editorial-prose` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader and stage:** Scope check / selecting service. **Purpose:** Separate application work from whole-device faults, routine migration and specialist data recovery; point to relevant live services.
- **Content depth:** 95–135 words approximately; vary to suit useful detail.
- **Key subjects:** Supported/legitimate software, authorised accounts, no hardware repair, no recovery promise.
- **Structure, media and links:** One prose paragraph plus one outlined boundary note; actual Computer & Laptop Help and Setup & Data Transfer links are emitted by the following RelatedServices shell.
- **Content generator freedom:** Medium, with non-negotiable limits.

### 10 · Questions

**Instance:** `software-questions` · **Recipe/implementation:** `faq.editorial-answers` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Approved</span>

- **Reader and stage:** Final evaluation / resolving hesitation. **Purpose:** Answer remaining concrete questions without repeating entire chapters: one app, Windows reinstall, speed expectations and safe enquiry details.
- **Content depth:** 160–230 words approximately; vary to suit useful detail.
- **Key subjects:** Supported app, reset not default, performance limits, safe information.
- **Structure, media and links:** Four fully visible Q&As; no accordion, no mandatory images.
- **Content generator freedom:** High phrasing freedom; keep each answer distinct and fact-bound.

### 11 · Related services and return

**Instance:** `related-services → return-to-contact` · **Recipe/implementation:** `Production RelatedServices shell + page-local return anchor` <span style="display:inline-block;border:1px solid #adb5bd;border-radius:999px;padding:1px 8px;font-size:0.75em;white-space:nowrap">Production shell</span>

- **Reader and stage:** Routing / conversion. **Purpose:** Route broader PC faults and normal device migration correctly, then offer a final visible link back to the existing enquiry.
- **Content depth:** 65–100 words approximately; vary to suit useful detail.
- **Key subjects:** Computer & Laptop Help; Setup & Data Transfer; #contact.
- **Structure, media and links:** Two canonical internal service links and one compact content-driven return CTA. No second form.
- **Content generator freedom:** Limited: related IDs and final CTA copy live in `composition.related` and `cta`; existing site route resolver supplies the URLs.

## Distinct work and editorial safeguards

The early symptom table names plausible checks, **not diagnoses**. The following scope chapter explains the shape of a small or larger job, **not** the same symptom examples again. Installation choices concerns suitability **before** deployment; the conflict chapter concerns what to check **after** failure; the staged method is the customer-facing work sequence rather than another technical advice column. The late optimisation chapter explains performance limits; service boundaries route visitors to genuinely different service offers.

The real `software-optimisation-en` ID, `software-optimisation` translation ID, slug, audience and locale must not change. Neither the German YAML nor the normal Codex queue is in scope. Canonical path and German alternate must still be derived by the existing routing system. `RelatedServices` resolves the two known IDs `computer-laptop` and `setup-data-transfer` to real base-aware URLs rather than embedding invented links in prose.

The reused P1 home illustration is a **general environment illustration**, not evidence of an installation, customer or physical premises. Review its fit before release; if judged misleading, replace only with accepted suitable media through the existing media process, not a fabricated client photograph. No new Design Lab recipe is necessary: the existing approved editorial prose accommodates one table, one/two columns, optional notes and short chapters. No Workshop fixture, experimental registry status or other service consumer needs alteration.

## Verification and approval handoff

Drive readback of every edited file is necessary but is not equivalent to an Astro build. Repository QA must validate the schema's optional `contactAfter`, exact section IDs, one H1, single `#contact` anchor, real mailto-draft behaviour, no duplicate contact at page end, base-aware related links, unique headings, desktop/mobile reading rhythm and sticky/mobile contact behaviour. Check old default consumers still render their end-of-page contact as before. The new option does **not** authorise the Experimental email-draft recipe in production; it repositions the pre-existing shell contact only.

**Review status:** draft ready for Product Owner judgement after source verification; no approval, commit or publication inferred.
