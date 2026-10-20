# VorOrt collaboration handoff

Last updated: 2026-10-20

## Current handoff

- **Version and branch:** `2.2.31` in root `AGENTS.md`. The current local Git branch/status were not checked from this Drive-connected session. Tasks 2A, 2B and 2C were repository/browser verified in their earlier sessions; older visual requests below retain their broader scope.
- **v2.2.18 correction:** the private `hero-frosted` comparison now uses experimental `comparison.hero-banner` with `kind: comparison`, so the Workshop retains exactly one semantic opening hero while still rendering the same `HeroBanner.astro` experiment immediately after it. Hero action-target validation covers the comparison specimen too.
- **Private Workshop:** the English home-network prototype now has fifteen sections: editorial hero, a second blur-overlay hero comparison, five-topic index, Wi-Fi options, the new rich editorial-prose Wi-Fi chapter, refined Ethernet connection path, three editorial-media chapters, four-stage process, approved always-visible editorial Q&A, retained experimental accordion FAQ for comparison, a compact experimental direct-submit enquiry form with a four-field core, conditional reply channel and optional-details disclosure, and an approved, screenshot-capable `footer.site` Workshop section. Content uses the repository's English research and canonical service facts; scope boundaries sit beside their relevant topics.
- **Recipes:** `hero.editorial-art`, `scope.topic-index`, `process.staged-path`, `faq.editorial-answers`, `explanation.editorial-media`, `explanation.options-guide`, `explanation.editorial-prose`, `explanation.connection-path`, `contact.enquiry` and `footer.site` are approved. `faq.accordion` remains experimental and is superseded by the approved editorial Q&A recipe; it has not been deprecated because Workshop comparison/migration is still active. Remaining unapproved private recipes stay experimental; the now-approved enquiry recipe retains a tighter reusable-template contract: direct phone/WhatsApp/email actions remain visible, required and reply-channel-dependent fields validate inline, audience-known context is not redundantly asked, no default consent checkbox is used, and production delivery targets a configured direct endpoint rather than mailto. The options guide and rich editorial prose remain separate recipes that can be used independently or consecutively. `explanation.editorial-media` keeps its simpler one-image chapter contract, while the connection-path approval covers the full section composition and semantic path; its exact schematic artwork remains replaceable/refinable.
- **Media:** P1–P6 reused with explicit image dimensions and responsive WebP derivatives; masters unchanged. P1 remains the accepted working reference, P2–P6 await Aykhan's acceptance, P7–P9 are deferred. Placement notes remain in `ω┇Media-Queue.md`.
- **Verification:** Task 1C passed `npm run validate`: 31 HTML pages, 23 sitemap URLs, 46 invalid-content cases, 86 invalid approved-guidance cases, experimental guidance migration/promotion, replacement/lifecycle/compatibility and derived usage checks. Built approval count now matches the registry instead of a stale zero-approval assertion. Base-aware internal links resolve; Lab robots/sitemap separation passes. `git diff --check` passed and `git status --short` was reviewed.
- **Browser review:** Task 1C reviewed at 1440×1000 and 390×844 in collapsed and expanded states. Native guidance disclosures start closed, support Enter/Space with visible focus, preserve readable hierarchy and do not alter FAQ disclosure state. No horizontal overflow at either width. Desktop height is 3,056px collapsed versus 4,863px with both guidance panels open (about 37% shorter); specimen heights remain unchanged. All pre-existing authoring/usage markup was compared with HEAD and preserved apart from indentation.
- **Next action:** Aykhan has approved both the compact `contact.enquiry` and the shared `footer.site` blueprint for private/business Workshop pages. The footer is now the final recipe section after the enquiry, with its canonical ID and Copy screenshot control. Repository/build validation and the existing contact/footer interaction and responsiveness checks remain pending in RV-013/RV-014 before production adoption; `faq.accordion` remains experimental. Task 1D final library QA remains outstanding.

## Cross-role requests

None.

## Awaiting Aykhan

- Review/accept outstanding items in `ω┇Media-Queue.md` as they become relevant to page review.
- Review the v2.2.0 private prototype: hero balance, topic navigation, chapter rhythm, diagram clarity and mobile/contact composition. Remaining recipe approvals stay explicit, separate Aykhan decisions.
- Final brand/domain, production contact/legal facts, qualification evidence and Berlin travel policy remain future launch inputs tracked in `β┇Roadmap.md`.
- Choose/authorize the production form submission provider/endpoint (including its data-processing/privacy implications) before direct enquiry delivery can be enabled on GitHub Pages.

## Pending repository verification

### RV-014 — v2.2.31 footer-as-section and approval

- **Source state:** Refined the Lab-only shared `WorkshopFooter.astro` and footer-specific rules in `contact-footer.css`. The descriptive, non-brand heading is more distinct without claiming a public name; service facts remain unchanged; primary navigation is still sourced from `mainNavigationEn`, legal routes from `legalNavigationEn`, and phone/WhatsApp/email from `siteConfig`. Contact links are visually scannable and the working-method note is concise. A further footer-only CSS refinement groups Explore and How we work in the desktop left column while contact links occupy the right, reduces unproductive vertical spacing, and uses a two-column Explore link grid with a compact source-ordered mobile stack. The previous page-chrome footer was then modelled as one final `footer.site` Workshop section with new `SiteFooter.astro` renderer, canonical registry entry, `site-footer` anchor and reusable SectionReview/Copy screenshot controls; both fixtures and schema now require it after `contact.enquiry`. Aykhan explicitly approved both recipes on 2026-10-20. No production `Footer.astro` or contact-form behaviour was changed.
- **Verify:** run Workshop/registry and `npm run validate` (including the repaired footer negative cases), plus `git diff --check` / `git status --short` on the synced repository. Confirm both fixtures render one final footer after contact, `footer.site` and `contact.enquiry` are derived as approved in the library, screenshot controls work, all base-aware navigation/legal links resolve, and production `Footer.astro` remains untouched.
- **Browser review:** inspect private and business Workshop footers at desktop and narrow mobile widths; check the new two-column desktop grouping and two-column Explore links on mobile, balance and compactness, line breaks, chips, contact and legal link hit areas/focus, email wrapping, accessible section headings and no horizontal overflow. Treat current contact details and public branding as provisional until independently verified.

### RV-013 — v2.2.30 compact enquiry form (approved in v2.2.31)

- **Source state:** Drive source/readback refinement of the shared experimental `ContactEnquiry.astro`, contact-only rules in `contact-footer.css`, private Workshop invitation copy and contact recipe authoring guidance. Replaces the three redundant reassurance rows with full-area Call/WhatsApp/Email actions; shows only the chosen required email/phone field, with inactive field disabled; puts optional service/location/appointment/company context in a native disclosure; retains direct endpoint submission, inline validation, privacy/safety notices, and fallback actions. A further contact-only CSS refinement restores equal-height dark/white panels in the desktop two-column layout, anchoring the direct-contact cards towards the bottom while keeping independently sized compact panels at tablet/mobile widths. A subsequent desktop-only three-stage enquiry journey fills the central gap with a concise, meaningful sequence (share situation → clarify details → discuss next steps); it stays hidden below 981px to preserve the compact mobile design. Footer and production form are unchanged.
- **Verify:** run Workshop/registry checks, `npm run validate`, `git diff --check` and `git status --short` against the synced local repository. Confirm both Workshop fixtures build, the footer styles are unchanged, contact form source fields are unchanged semantically, and production remains separate.
- **Browser review:** compare private/business desktop and mobile layouts; confirm equal-height panels above 980px (including the optional-details-expanded state), the new enquiry journey balances the middle space without crowded steps, and independent compact panel heights at/below 980px (without the journey), with no overflow; check contact card prominence, title wrapping, details toggle and keyboard focus, preferred contact switching (Email/Phone/WhatsApp), inactive reply fields hidden/disabled, missing/invalid inputs and error announcement, successful reset with a configured test endpoint or explicit unconfigured-endpoint state, and unchanged phone/WhatsApp/email links. Do not claim live delivery without an endpoint.


### RV-012 — v2.2.22 second-hero readability scrim

- **Source state:** Drive source/readback work changes only the private second `comparison.hero-banner` visual treatment: a subtle dark top-to-transparent scrim now sits between the artwork and overlay copy so the intro is readable before hover without whitening or desaturating the image. The scrim remains present during the existing stronger hover/focus blur. The third CTA-only comparison is intentionally unchanged.
- **Verify:** run Workshop/registry validation plus `git diff --check` and `git status --short`. Confirm the change is CSS-only for the second private comparison and does not affect the third comparison or production routes.
- **Browser review:** inspect the second private hero at desktop/mobile widths in normal, hover and keyboard-focus states. Check that normal-state artwork stays colourful, copy contrast is reliable, the scrim is not visibly box-like, and hover blur remains the dominant interaction rather than changing the scrim.

### RV-011 — v2.2.21 CTA-only hero comparison

- **Source state:** Drive source/readback work adds a third private hero comparison immediately after `hero-frosted`. New experimental `comparison.hero-banner-cta-overlay` reuses the same content schema and visual foundation but moves the introduction above the artwork with the main heading, leaving only the two CTA buttons centred over the image. The existing opening hero and second comparison remain unchanged.
- **Verify:** run Workshop/registry validation plus `git diff --check` and `git status --short`. Confirm `HeroBannerCtaOverlay.astro` resolves through the registry, the private fixture still contains exactly one semantic opening hero, and both CTA targets validate.
- **Browser review:** inspect the three private hero variants at representative desktop/mobile widths. Confirm the third keeps the same 8:3 desktop crop, blur/hover treatment, image inset/radius and gradient shell as the second while the intro sits cleanly above the image and the CTA pair remains centred over it without overflow.

### RV-010 — v2.2.20 hero hierarchy and image-edge refinement

- **Source state:** Drive source/readback work refines the shared experimental `HeroBanner.astro` / `hero.css` used by business `hero.banner-art` and private `comparison.hero-banner`. It removes the service-highlight tags from both the renderer and experimental hero content contract, left-aligns the eyebrow (mint for private), enlarges the main title and image-overlay intro, top-aligns that intro, moves the hero glow behind the centred title, reduces left/right/bottom image inset while keeping equal edge padding, and moves blur from a backdrop layer onto the image itself so the rounded frame remains intact during hover/focus. CTA text shadows are explicitly disabled and hover/focus motion/shadow/brightness are stronger.
- **Verify:** run Workshop/registry validation plus `git diff --check` and `git status --short`. Confirm the simplified experimental hero schema no longer requires the removed `highlights` field, both business/private comparison instances compile, and no production route is changed.
- **Browser review:** inspect the private comparison and business hero at representative desktop/mobile widths. Check eyebrow alignment/colour, title wrapping, intro top alignment, 8:3 crop width and equal edge padding, corner radius during blur transitions, CTA focus/hover prominence, mobile 4:5 composition and no horizontal overflow.

### RV-009 — v2.2.19 blur-only ultra-wide hero refinement

- **Source state:** Drive source/readback work refines the shared experimental `HeroBanner.astro` styling used by business `hero.banner-art` and private `comparison.hero-banner`: removes the white frost/background treatment, preserves image colour, uses blur-only readability with a stronger hover/focus blur, enlarges and lightens overlay intro copy, strengthens the secondary CTA, reduces the centred desktop headline so long service titles can settle into roughly two lines, and switches the desktop visual to an ultra-wide 8:3 crop. New top-level CSS variables expose base/hover blur plus desktop/mobile vertical image position; mobile uses its own taller 4:5 crop.
- **Verify:** run Workshop/registry validation plus `git diff --check` and `git status --short`. Confirm both comparison and business hero renderers compile, action targets still resolve, and no production route is changed.
- **Browser review:** inspect private `hero-frosted` and business `hero` at representative desktop/mobile widths. Check title wrapping, 8:3 crop balance, top-biased image position, overlay copy contrast without colour wash, CTA readability/focus, stronger hover/focus blur, mobile 4:5 recomposition and no horizontal overflow.

### RV-008 — v2.2.18 frosted hero comparison

- **Source state:** Drive source/readback work changes experimental `hero.banner-art` so the image receives one nearly transparent full-surface white frost layer and the introduction/actions sit directly over that frosted image rather than in an opaque glass rectangle. The private home-network Workshop keeps its existing `hero.editorial-art` first and adds a second `hero-frosted` comparison instance immediately after it using the same P1 artwork and copy. The business Workshop continues to use `hero.banner-art`.
- **Verify:** run Workshop/registry validation plus `git diff --check` and `git status --short`. Confirm the extra private hero fixture validates, links still resolve, the frost overlay remains decorative, and the original private hero renderer/source is unchanged.
- **Browser review:** inspect both business `hero` and private `hero-frosted` at desktop/tablet/mobile widths. Tune the CSS variables at the top of `hero.css` for frost alpha, blur, saturation, copy width and mobile frost strength; check text contrast, image visibility, CTA focus/hover, headline wrapping and no overflow.

### RV-007 — v2.2.17 business hero composition experiment

- **Source state:** Drive source/readback work refines the experimental business `hero.banner-art` renderer and hero styles only. The centred eyebrow/headline remain above the visual inside the dark gradient hero surface; the introduction and two CTAs move into one translucent frosted panel overlapping the upper image edge; the artwork stays a separate semantic image region; highlights move into a quieter row below the image. Mobile switches to left-aligned heading copy, an in-flow frosted panel with full-width actions, then the image and compact highlights so no overlay collision is required. The private `hero.editorial-art` renderer is unchanged.
- **Verify:** run the Workshop/registry validation plus `git diff --check` and `git status --short`. Confirm `HeroBanner.astro` and `hero.css` compile, action links still target the intended section IDs, the artwork remains accessible as one labelled image region, and no production route is changed.
- **Browser review:** inspect the business Workshop hero at representative desktop/tablet/mobile widths. Check headline wrapping, frosted-panel readability over both placeholder art and a future real image, CTA focus/hover states, no overlap with the headline, no clipped highlights, and no horizontal overflow. Compare visually with the private hero but do not modify the private recipe as part of this verification.

### RV-006 — v2.2.15 direct enquiry UX

- **Source state:** Drive source/readback work removes the standard consent checkbox from the Workshop enquiry template, replaces it with a privacy notice/link, turns phone/WhatsApp/email into explicit button-like actions while retaining the real number/address, streamlines audience-specific fields, adds required/conditional validation and inline errors, and changes the intended form behaviour from mailto to direct endpoint submission through `PUBLIC_CONTACT_FORM_ENDPOINT`.
- **Verify:** run Workshop/registry validation plus `git diff --check` and `git status --short`. Confirm the new Astro client script compiles, conditional phone validity works for Phone/WhatsApp, name/request/preferred-contact requirements are enforced and the chosen reply channel requires the matching email or phone field, error/status messages are announced, and the form does not open a mail client.
- **Browser review:** test successful validation and representative invalid states at desktop/mobile widths. Because no production submission backend is installed yet, confirm the unconfigured-endpoint state is explicit and that phone/WhatsApp/email remain usable fallbacks. Once a provider is selected, verify a real successful request reaches the intended destination before production adoption.

### RV-005 — v2.2.14 contact and Workshop footer pass

- **Source state:** Drive source/readback work makes the Workshop `contact.enquiry` form always visible in a new split closing composition, adds explicit experimental authoring guidance, renders shared Workshop-only footer chrome after full page canvases (but not Approved Section specimens), and documents the global blueprint-not-template philosophy in Project plus the Approved Sections intro.
- **Verify:** run Workshop/registry validation plus `git diff --check` and `git status --short`. Confirm `WorkshopFooter.astro` and `contact-footer.css` resolve, `WorkshopCanvas` omits footer chrome when rendering subsection specimens, and no production component was modified. Current form submission behaviour is verified separately under RV-006.
- **Browser review:** inspect the home-network Workshop at representative desktop/mobile widths. Check form labels/focus, field wrapping, direct contact links, footer hierarchy/legal links, no horizontal overflow, and a clean transition from the form into the footer.

### RV-004 — v2.2.13 editorial explanation experiments

- **Source state:** Drive source/readback work adds and approves `explanation.editorial-prose`, approves `explanation.options-guide` and `explanation.connection-path`, refines the connection-path into intro → full-width path → practical planning composition, expands `explanation.editorial-media` guidance/callout variation, removes its visible image captions, and queues Design Lab recipe IDs/approval tint plus Workshop contents navigation as Tasks 2A/2B.
- **Verify:** run the Workshop/registry validation plus `git diff --check` and `git status --short`. Confirm the new block schema and renderer compile, new stylesheet import resolves, existing editorial-media fixtures still validate after caption removal, and note tones do not alter unrelated consumers.
- **Browser review:** inspect `wifi-coverage`, `wifi-planning-notes`, `ethernet-cabling`, `home-office`, `nas-storage` and `network-planning` at representative desktop/mobile widths. Check the connection section's new post-diagram planning layer feels complete, rich-prose tables stay contained, side media collapses cleanly, alternating editorial-media composition remains readable, and no visible image-caption line remains under those three chapter images.

### RV-003 — v2.2.10 editorial Q&A Workshop candidate

- **Source state:** new `faq.editorial-answers` recipe, renderer, stylesheet and home-network fixture instance were written and read back through Drive; the existing accordion remains immediately after it for side-by-side page review.
- **Verify:** run the appropriate Workshop validation plus `git diff --check` and `git status --short`. Confirm the new recipe/fixture schema compiles, its renderer is discovered, existing image paths resolve, and no production route changes.
- **Browser review:** inspect the home-network Workshop at representative desktop and mobile widths. Confirm every answer is visible without disclosure controls, question headings remain readable, optional illustrations do not dominate the prose, and the new section sits immediately before the accordion comparison section without overflow or broken spacing.

### RV-001 — v2.1.0 collaboration and Design Lab governance

- **Source state:** originally verified through Drive; subsequent repository checks are recorded below.
- **Repository checks resolved in Task 1A:** `npm run validate`, `git diff --check` and `git status --short` ran successfully. Browser review below remains pending.
- **Remaining review:** broader Page Workshop/tablet review and production visual regression checks remain pending. Approved Sections desktop/mobile review was completed in Task 1B; this does not close the wider historical request.
- **Contract checks resolved in Task 1A:** guidance builds successfully, `supersedes` rejects unknown/self/cross-kind/cyclic relationships, derived Workshop usage passes, and approval checks use the canonical registry rather than a fixed count. Browser confirmation of replacement-candidate presentation remains pending.
- **Scope:** validate the existing v2.1.0 change first. Do not redesign, rewrite content or refactor unrelated code unless an actual failure requires it.

## Recent work

### 2026-10-20 — ChatGPT — v2.2.31 enquiry/footer approval and footer section conversion

- On explicit product-owner approval, promoted `contact.enquiry` and `footer.site` in the canonical registry (10 approved recipes total). The footer is now a real closing Workshop section in both fixtures, with a stable anchor, recipe label and Copy screenshot control. Updated the schema/validator for contact-before-footer ordering and negative cases; production adoption and real form delivery remain separate.
- Kept the existing uncommitted `2.2.31` project version. Drive source/readback verification performed for changed files; repository/browser/Git checks are pending in RV-013/RV-014. No commit or push was performed.

### 2026-10-20 — ChatGPT — v2.2.31 Workshop footer finishing pass

- Refined shared Workshop footer typography, navigation hierarchy, source-driven contact links, restrained service signals and responsive spacing for closer visual coherence with the compact enquiry section. Kept the Workshop footer as chrome outside the Approved Sections registry; legal links remain explicitly German. Drive source/readback verification performed; repository and browser validation pending under RV-014.

### 2026-10-20 — ChatGPT — v2.2.30 compact experimental enquiry

- Shortened the private invitation and shared form introduction, replaced faint pill CTAs and repetitive text with clear full-card direct contact actions, switched to a single visible required reply field, and moved optional context into an accessible disclosure. Reinstated the pamphlet-style equal-height desktop panels with direct-contact cards towards the bottom, while keeping natural independent heights on tablet/mobile. Kept essential enquiry fields, privacy/safety guidance, direct submission/fallback behaviour, business-specific options and the experimental recipe status.
- Source changes were made through the connected Drive files with readback; local build, browser and Git checks remain pending as RV-013. Workshop footer and production code were not changed.


### 2026-10-19 — ChatGPT — v2.2.29 editorial hero and topic-index approval

- Aykhan explicitly accepted `hero.editorial-art` and `scope.topic-index` as reusable structural blueprints after reviewing their private Workshop desktop/mobile designs. The editorial hero was preferred over overlay variants; the topic index was considered acceptable for approval while its mobile card sizing/image strips remain open to refinement.
- Approved both recipes in the canonical registry with complete authoring guidance; their stable IDs, reusable renderers, schemas, supplied media and Workshop consumers are unchanged. Copy/artwork and non-breaking visual refinements remain flexible. Approval does not authorise production adoption.
- `faq.accordion` is deliberately unapproved, `contact.enquiry` remains experimental, and shared Workshop footer chrome still requires design work. Local application/readback and repository validation must be confirmed after applying this change; no commit, push or deployment is implied.

### 2026-09-25 — Codex — v2.2.28 Task 2C section screenshots

- Added Copy screenshot and live status to the shared Lab wrapper, with lazy-loaded `html-to-image@1.11.13`, image/font readiness checks, explicit missing-resource failure and bounded PNG resolution. Clipboard writes begin within the activation gesture; unsupported/rejected writes download the same PNG and retain a Download PNG link. Reusable section renderers remain untouched.
- Browser verified in the Codex in-app browser: process, illustrated hero, long editorial chapter and expanded accordion at full 1440px and 390px iframe widths; Approved options-guide specimen also passed. Each PNG was pasted from the actual browser clipboard into a temporary local contenteditable editor using its Paste image control and visually inspected. Recipe ID/tint remain, capture controls/library chrome are absent, full chapter/table content is retained and the expanded FAQ state is preserved. The mobile chapter export is 780×7515px; the desktop chapter stays within 8 megapixels.
- Isolated unsupported and rejected clipboard cases produced real PNG downloads; downloaded output was inspected. A missing image produced a clear error with the button re-enabled. Temporary test pages were removed before final validation. Browser automation’s separate virtual clipboard was not used as clipboard proof.
- Full `npm run validate` passed (31 HTML pages, 23 sitemap URLs, existing 46 content/258 guidance rejection cases plus capture resolution limits). All 25 production HTML files remain byte-identical to the pre-change build, capture entry assets are absent from production pages, and every Lab wrapper has exactly one capture button. Git diff/status checks passed; unrelated temporary Chain files remain untracked.

### 2026-09-25 — Codex — v2.2.27 Task 2B contents navigator

- Added a separate native Sections disclosure to the Workshop toolbar. Ordered links derive from each fixture and canonical registry, show recipe IDs with live titles (or the registry name when absent), and wrap inside a bounded scrolling menu. Normal anchors work without JavaScript; a small shell enhancement supports the visible constrained preview while preserving hash/history behavior.
- Verified all 22 built links against ordered fixture IDs, unique rendered anchors and titles; browser-checked both fixture menus and link activation, desktop/mobile presentation (1440×1000 and 390×844), Enter operation, private/business 390px preview jumps and browser Back. Business contact honestly falls back to the registry name because its fixture omits the optional title.
- `npm run validate` passes (31 HTML pages, 23 sitemap URLs, 46 invalid-content and 258 invalid-guidance cases). All 25 production HTML files are byte-identical to the pre-2B build; navigator markup is absent from preview and Approved pages, and production asset/sitemap exclusion checks include the new class. Git diff/status checks passed. Task 2C remains untouched.

### 2026-09-25 — Codex — v2.2.26 Task 2A completion

- Completed verification of the already tracked shared recipe-label wrapper: 14 private sections, 8 business sections and 6 Approved Sections specimens use canonical recipe IDs and registry-derived mint/neutral styling. Reviewed Workshop pages at 1440×1000 and 390×844 and Approved specimens at desktop width; labels remain outside content, mobile private label/text bounds do not intersect, and editorial-media alternation/borders are preserved.
- Fixed a pre-existing validation test that assumed the scope section always occupied the second fixture position; it now finds the semantic scope section after the added hero comparisons. Full `npm run validate` passes, including production HTML/linked asset and sitemap exclusion checks for review chrome. Git diff/status checks passed. Historical RV browser requests remain open.

### 2026-09-22 — ChatGPT — v2.2.22 second-hero readability scrim

- Kept the second private hero comparison as the preferred structure and added a local dark top scrim only to that variant. The scrim fades to fully transparent through the image rather than washing the whole artwork, and remains in place while the existing hover/focus blur increases.
- Added three top-level tuning variables for scrim strength/fade plus slightly stronger mobile values. The third CTA-only comparison remains untouched for side-by-side review. Repository/browser/Git verification remains pending under RV-012.

### 2026-09-22 — ChatGPT — v2.2.21 third hero comparison

- Added a third private Workshop hero comparison as experimental `comparison.hero-banner-cta-overlay`, preserving the second variant's gradient shell, ultra-wide image, blur interaction, crop and CTA styling.
- The new variant moves the introduction above the image beneath the main heading and keeps only the CTA pair centred over the artwork, allowing direct comparison of overlay-copy density without replacing either earlier version.
- Repository/browser/Git verification remains pending under RV-011.

### 2026-09-22 — ChatGPT — v2.2.20 hero hierarchy and image-edge refinement

- Refined the centred banner from Aykhan's screenshot notes: private eyebrow now uses the previous mint accent and is left-aligned; main title and image-overlay intro are larger; the intro sits at the top of the image rather than vertically centred; and the service-highlight tag row/content field is removed entirely.
- Tightened the hero frame so the ultra-wide 8:3 image extends much closer to the outer rectangle, with one shared left/right/bottom inset. Repositioned the private/business radial glow behind the title centre.
- Replaced the full overlay/backdrop blur with direct image filtering, preserving rounded corners via clipping while still increasing blur on hover/focus. CTA labels explicitly have no text shadow and buttons receive stronger lift/brightness/shadow feedback. Repository/browser/Git verification remains pending under RV-010.

### 2026-09-22 — ChatGPT — v2.2.19 blur-only ultra-wide hero refinement

- Refined the experimental centred banner after Aykhan's screenshot review: removed all white frost and saturation treatment so artwork colours stay intact; the overlay now uses blur only, with a stronger blur on visual hover/focus.
- Increased overlay intro size/weight, switched it to high-contrast light text with a controlled dark shadow, strengthened the secondary CTA, reduced desktop headline scale to better support two-line service titles, and restored the desired ultra-wide desktop banner proportion at 8:3.
- Added quick tuning variables for base/hover blur and vertical image crop position (`--hero-image-y`, with a separate mobile value). Mobile uses a taller 4:5 frame and retains centred content while keeping the overlay readable. Repository/browser/Git verification remains pending under RV-009.

### 2026-09-22 — ChatGPT — v2.2.18 hero comparison schema correction

- Corrected the private frost comparison after Astro rejected the fixture for having two `kind: hero` sections. Added experimental `comparison.hero-banner`, which reuses the same HeroBanner content schema and renderer but is explicitly Design-Lab comparison content rather than a second page hero.
- Updated the Workshop action-target validation to cover that comparison recipe. The real `hero.editorial-art` remains the one semantic opening hero, while `hero-frosted` can still render immediately after it for visual comparison.
- This is a corrective change within the same uncommitted v2.2.18 logical patch, so the project version was not bumped again. Drive source/readback verification is required; repository/browser/Git verification remains pending.


### 2026-09-22 — ChatGPT — v2.2.18 frosted hero comparison

- Corrected the hero experiment to match Aykhan's intended treatment: `hero.banner-art` now uses a nearly transparent white frost layer across the entire artwork and places the introduction plus CTAs directly over that image, while the large headline stays above inside the dark gradient hero shell.
- Added a second private Workshop hero (`hero-frosted`) immediately after the existing polished editorial hero, reusing the same home-network copy and P1 artwork so both approaches can be judged side by side without overwriting the original.
- Grouped the main visual tuning controls as CSS custom properties at the top of `hero.css`, including desktop/mobile frost alpha and blur, saturation, copy width and copy colour. Repository/browser/Git verification remains pending under RV-008.

### 2026-09-22 — ChatGPT — v2.2.17 centred business hero experiment

- Reworked experimental `hero.banner-art` toward the chosen centred Option A: the headline remains fully above the image within the existing dark gradient hero surface, while one controlled light/frosted introduction + CTA panel overlaps only the image edge instead of layering multiple translucent boxes across the content.
- Moved service highlights below the image into a quieter supporting row and reduced the artwork-placeholder caption footprint. On mobile the heading becomes left-aligned, the frosted content panel stays in normal flow with full-width actions, the image follows underneath, and highlights recompose into compact rows rather than clipping horizontally.
- The private `hero.editorial-art` reference was intentionally left unchanged. Drive source/readback verification is required; repository/browser/Git verification remains pending under RV-007.

### 2026-09-22 — ChatGPT — v2.2.16 Design Lab section screenshot task

- Expanded Task 2 into the broader Design Lab section-review workflow and added **2C** for a Lab-only per-section screenshot control. The intended interaction captures only the current rendered section at its active preview width, includes the useful recipe-ID/approval context from 2A, excludes the capture button and Lab toolbar, and writes a PNG to the clipboard when supported.
- The task requires browser feature detection, accessible success/error feedback, a download fallback when image clipboard writing is unavailable, and strict isolation from production renderer/output code. This is task-board/handoff work only; no screenshot implementation, browser verification, Git commit, push or deployment is claimed.

### 2026-09-22 — ChatGPT — v2.2.15 direct enquiry UX

- Refined the experimental `contact.enquiry` template after desktop/mobile review: direct phone, WhatsApp and email rows now expose the actual contact value plus explicit action affordances; the form no longer uses a default consent checkbox and instead shows a privacy notice/link.
- Reworked form semantics around a small required core (name, preferred contact and request), a reply-channel-dependent email/phone requirement, audience-specific field reduction, inline validation/error states and announced submit status. The intended submit path is now a configured direct endpoint via `PUBLIC_CONTACT_FORM_ENDPOINT`, never a mailto action.
- GitHub Pages still has no submission backend. The Design Lab therefore reports the missing endpoint on submit rather than faking delivery; provider/endpoint selection remains an explicit production dependency. Footer copy received only minor wording/placeholder-brand cleanup.
- Drive source changes require repository/browser verification under RV-006; no Git commit, push or deployment is claimed.

### 2026-09-22 — ChatGPT — v2.2.14 contact/footer Workshop pass

- Documented approved recipes as structural blueprints rather than frozen specimens: only explicitly fixed semantic/design constraints are mandatory; copy, imagery, density, treatments and element order may vary where guidance allows so Content & SEO can shape sections around meaning without cloning pages.
- Rebuilt the experimental Workshop `contact.enquiry` renderer as an always-visible closing form with direct phone/WhatsApp/email routes, safety/consent guidance and service-specific prompt overrides; production `ContactSection.astro` remains untouched.
- Added Workshop-only shared footer chrome after full page canvases. It is intentionally not a section recipe and is suppressed for Approved Sections specimen canvases. Added dedicated contact/footer styles and queued repository/browser verification under RV-005.

- 2026-09-22 — Design: approved the options guide, rich editorial prose and connection-path recipes after Aykhan review; strengthened the connection-path lower planning composition and clarified that options-guide/editorial-prose are separate recipes that may be paired.

### 2026-09-22 — ChatGPT — v2.2.13 editorial prose polish and editorial-media approval

- On Aykhan's explicit approval, promoted `explanation.editorial-media` to `approved`. Its contract remains intentionally simple: one focused prose chapter, one informative image with no visible caption, optional callout, and automatic left/right rhythm across repeated uses.
- Polished the experimental `explanation.editorial-prose` renderer/styles after screenshot review: internal headings now share a clear visual family while banded headings read as major chapter breaks and soft-filled headings as quieter subsection transitions; subheading numbering is sequential rather than inherited from block positions.
- Reduced dead space by using a 12-column editorial grid and allowing a callout followed by right-positioned media to share one row on desktop. Changed the filled callout away from the same dark treatment used by banded headings, tightened vertical rhythm and table spacing, and kept tablet/mobile layouts in a single readable source order.
- Drive source changes were read back after writing. Repository validation, browser verification, Git commit, push and deployment remain pending under RV-004.

### 2026-09-22 — ChatGPT — v2.2.13 completion audit

- Audited the full request after the initial Drive pass. Confirmed Task 2B exists, the three editorial-media instances have no visible image captions, optional quiet/solid callouts are part of the recipe guidance, the connection-path renderer was materially refined, and the new rich editorial-prose experiment sits directly after `wifi-coverage`.
- Corrected one fragility found in the audit: editorial-media left/right alternation now counts only editorial-media siblings, so inserting unrelated sections earlier in the Workshop does not unexpectedly flip the intended right/left/right rhythm. Added a quiet/transparent callout to `wifi-planning-notes` so the Workshop now demonstrates quiet, solid and outline callout treatments alongside banded/plain subheads, two-column prose, two images and a compact table.
- These remain Drive source/readback changes under the same uncommitted v2.2.13 logical patch. Repository validation, browser verification, Git commit, push and deployment are still pending under RV-004.

### 2026-09-22 — ChatGPT — v2.2.13 editorial explanation experiments

- Added Task 2B for a live Workshop contents dropdown using `recipe.id — “Visible section heading”` entries derived from the current fixture/registry.
- Refined `explanation.connection-path` into a more complete source → route → destinations path map with clearer stages, connector logic and destination cards.
- Added experimental `explanation.editorial-prose` and a substantial `wifi-planning-notes` Workshop instance demonstrating normal prose, two-column text, styled subheads, quiet/solid/outline callouts, left/right media and a compact table.
- Expanded `explanation.editorial-media` authoring guidance: repeated uses should alternate image/text sides, callouts are optional and may be quiet or solid, richer block structures should move to editorial-prose, and the standard recipe no longer shows a visible caption under its image.
- These are Drive source/readback changes only; repository validation, browser verification, Git commit, push and deployment remain pending under RV-004.

### 2026-09-22 — ChatGPT — v2.2.12 Design Lab recipe identifiers task

- Added **Task 2A** to the universal task board: every rendered Design Lab section should expose a subtle top-left label with its canonical recipe ID so Aykhan can identify/search candidates directly in Page Workshop and section specimens.
- The task explicitly requires a shared Lab-only decorator/wrapper and forbids leaking the identifier into reusable production renderer markup, customer-facing styles, accessibility text or production output.
- This is a Drive documentation/task-board change only; no Astro implementation, repository validation, browser verification, Git commit, push or deployment is claimed.

### 2026-09-22 — ChatGPT — v2.2.11 editorial Q&A approved

- On Aykhan's explicit approval, promoted `faq.editorial-answers` to `approved` in the canonical recipe registry. Its approved contract keeps all questions/answers visible, supports three to six article-style Q&A chapters, and allows optional explanatory media without disclosure controls.
- `faq.accordion` remains experimental and superseded but not deprecated while Workshop comparison/migration is still active. Task 1D expectations were updated to the new approval state.
- Drive source changes were read back after writing. Repository validation, browser verification, Git commit, push and deployment have not been run for this approval patch.


### 2026-09-22 — ChatGPT — v2.2.10 editorial Q&A layout refinement

- Refined the experimental `faq.editorial-answers` renderer/styles after Aykhan review: removed the repeated question-left/answer-right composition, reduced heading scale and vertical spacing, and varied optional illustration placement across media-bearing answers while keeping all content always visible.
- This remains part of the same uncommitted v2.2.10 Workshop candidate. Source edits are Drive/readback work only until repository/browser validation is run.

### 2026-09-22 — ChatGPT — v2.2.10 editorial Q&A Workshop candidate

- Added experimental `faq.editorial-answers` as an always-visible article-style Q&A recipe that supersedes the accordion candidate without deprecating it. The section supports three to six substantial visible question chapters, one to three prose paragraphs per answer and optional explanatory media; no answer is collapsible.
- Added `EditorialAnswers.astro` and dedicated editorial-Q&A styling, then inserted a six-question home-network instance immediately before the retained accordion. The candidate reuses existing P2, P5 and P4 Workshop artwork for selected answers so Aykhan can compare an authored long-form rhythm against the accordion in the same page.
- Drive source changes were read back. Repository validation, browser verification, Git commit, push and deployment remain pending under RV-003.

### 2026-09-22 — ChatGPT — v2.2.9 FAQ approval withdrawn

- On Aykhan's explicit review, returned `faq.accordion` from `approved` to its default experimental lifecycle state. The recipe and its authoring guidance remain available in Workshop contexts, but it must no longer appear in Approved Sections or be eligible for future approved-only production use.
- Updated Task 1D expectations to the current approval state and left final QA pending while Design explores an editorial, article-style Q&A replacement. This Drive-connected change is source/readback work only; no repository validation, browser review, Git commit, push or deployment is claimed.

### 2026-09-22 — Codex — v2.2.8 Task 1C authoring disclosures

- Wrapped each dense authoring/usage area in one native disclosure, closed by default, with a labelled summary, native triangle and explicit focus styling. Recipe identity, context and full rendered examples stay visible; all contract, lifecycle/replacement and usage information remains inside the expanded panel. No JavaScript was added.
- Full `npm run validate` and Git diff/status checks passed. Desktop/mobile collapsed and expanded states, keyboard activation/focus, specimen sizing and independence from FAQ disclosure state were verified as recorded above. Task 1C is checked complete; 1D remains unstarted.

### 2026-09-22 — ChatGPT — v2.2.7 Approved Sections density follow-up

- After Aykhan reviewed the completed Task 1B screen, inserted a new **Task 1C** before QA: keep live section specimens visible while collapsing the dense authoring/usage contract by default using an accessible native disclosure.
- Renumbered final QA/refinement to **Task 1D** and updated role allocation accordingly. This change only refines the universal task board/handoff; no Astro source, browser output, repository validation, Git commit, push or deployment is claimed.

### 2026-09-22 — Codex — v2.2.6 Task 1B visual section library

- Rebuilt Approved Sections around bounded real examples, canonical authoring guidance, compatibility, lifecycle/replacement state and derived Workshop usage. Each specimen uses the existing `WorkshopCanvas` renderer path with content from the first actual consumer in stable loader order; no duplicated samples, renderer markup or client framework were added.
- Full `npm run validate` and Git diff/status checks passed. Browser verified at 1440×1000 and 390×844, including readable specimens/guidance, no horizontal overflow and mobile FAQ keyboard/focus behaviour. No production content, section implementation or approval state changed.
- RV-002 is resolved: both approved recipes appear, each with derived private/business usage. Task 1B is checked complete; final QA/refinement in 1C remains unstarted. Current approved recipes both have consumers; future unused approvals fail with an explicit example requirement rather than silently inventing fallback content.

### 2026-09-22 — Codex — v2.2.5 Task 1A authoring contract

- Added canonical `authoringGuidance` with all eight requested guidance dimensions and concrete process/FAQ guidance. Approved recipes require complete, non-blank guidance; experimental recipes may remain incomplete. Existing content schemas, lifecycle, compatibility, replacement rules and production-adoption policy are preserved.
- Added rejection and migration/promotion coverage; replaced the obsolete zero-approved assertion with a registry-derived built-count check. Full validation and Git diff/status checks passed as recorded above. Task 1A is checked complete; no library UI, renderer, fixture or production-page changes were made, and 1B/1C remain unstarted.

### 2026-09-22 — ChatGPT — v2.2.4 universal staged task board

- Replaced the job-specific Approved Sections worklist with universal `ω┇Tasks.md`, using stable numbered tasks and substantial lettered stages so Aykhan can assign work such as **Task 1A** without asking Codex to consume a whole multi-stage job at once.
- Task 1 now has three commit-sized stages: 1A canonical authoring contract, 1B visual Approved Sections library, and 1C final QA/refinement. Only roles with actual future work are populated; unrelated role fields are left blank.
- Root agent guidance now tells workers to load the task board only when a numbered stage is assigned or the handoff points there. Drive source changes were read back; no repository validation, browser review, Git commit, push or deployment is claimed.

### 2026-09-22 — ChatGPT — v2.2.2 first Approved Sections lifecycle test

- On Aykhan's explicit request, approved `process.staged-path` and `faq.accordion`; both are media-independent, already used in the private and business Workshop fixtures, and keep the existing semantic/content contracts unchanged.
- Updated only lifecycle status in the canonical recipe registry plus project version/handoff metadata. No production adoption, copy migration, browser verification, Git verification, commit, push or deployment is claimed.

### 2026-09-22 — ChatGPT — v2.2.1 usage-efficient agent/tool policy

- Added proportional validation and tool-use guidance to `AGENTS.md` for rate-limited agents such as Codex: targeted checks during iteration, broader validation at meaningful milestones, browser/screenshots only when they materially reduce uncertainty, and explicit permission to use deeper testing whenever the task genuinely requires it.
- This was a documentation-only governance patch. Source/readback verification is expected; no application/browser/Git validation is implied by the change itself.

### 2026-09-11 — Codex — v2.2.0 private home-network Workshop

- Combined Design, Content & SEO, Implementation and QA pass. Replaced the private gallery, repeated situations and outcome/tag panel with substantial service chapters, a linked visual index and a labelled connection diagram.
- Added strict semantic contracts and negative cases for topic targets, paragraph blocks, labelled media, comparisons, connection labels and contact copy; usage remains derived from fixtures. Production contact defaults and email-preparation behavior remain unchanged.
- Completed repository and browser checks described above, corrected the discovered private disclosure resize failure, and handed the experimental result back for visual review. Historical RV-001 is not claimed resolved by this implementation pass.

## Maintenance

Keep this file live and small. Cross-role and repository-verification items exist only while open; remove resolved entries after preserving any durable consequence in `α┇Project.md`, priority in `β┇Roadmap.md`, or implementation source. Keep only brief recent work here; Git is the historical record.
