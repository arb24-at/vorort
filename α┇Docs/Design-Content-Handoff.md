# VorOrt design–content handoff

Purpose: a **small working bridge** between the Content/SEO workspace and the Design workspace. Keep it concise. Detailed copy belongs in the production content source; project state belongs in the canonical project documents.

## Canonical ownership

- `ω┇Engine/src/content/services/**` — researched service-page copy, SEO intent, facts, proof and boundaries.
- `α┇Docs/Project.md` — stable product, architecture and website-map decisions.
- `α┇Docs/Roadmap.md` — implementation phases and acceptance criteria.
- `α┇Docs/Collaboration.md` — chronological work/session handoff.
- `/design-lab/` — Page Workshop experiments and the explicitly Approved Sections registry view.

Do **not** duplicate full YAML content, keyword research, service truth, recipe catalogues or implementation logs here.

## Roles

**Content / SEO** owns what must be said: search intent, commercial job, factual copy, proof, boundaries and independently authored German/English content.

**Design** owns how that meaning is experienced: hierarchy, page narrative, section composition, imagery/diagrams, visual rhythm and the General / Private / Business page-family language.

**Codex** implements approved Design + Content decisions in Astro when required. It should not be asked to rediscover page strategy or visual direction.

## Collaboration rule

Content describes the **relationship** in the information, not a UI component. Design may then choose a scene, diagram, sequence, paragraph, list, cards, Q&A or another form. Lists/cards/accordions remain valid, but they are not the default representation for every repeated data structure.

If a composition genuinely needs different wording, Design records a targeted request here; Content then updates the real source only when the change is truthful and SEO-safe.

## Current experiment — Concept II service pages

**Status:** both Concept II designs now live as validated Page Workshop fixtures. All eight section recipes are experimental; Approved Sections is empty. Researched production pages and YAML remain unchanged.

- Private: `/design-lab/workshop/wifi-home-network-concept-ii/`
- Business: `/design-lab/workshop/office-network-concept-ii/`
- Shared implementation: `src/design-system/section-recipes.ts`, `src/content/workshop/*.yml`, small Astro renderers under `src/components/design-lab/sections/`, and recipe styles under `src/styles/design-lab/`
- Both routes are `noindex, nofollow` and intentionally absent from the sitemap while the design system is being established.

### Direction under test

- Hero is a full-width dark banner with title, short copy, CTA and integrated panoramic art area — not a left-text/right-image split.
- Private uses a lighter petrol/navy dark; Business uses a deeper dark. This is a supporting cue, not the sole audience distinction.
- The first post-hero section is a high-visibility horizontal visual scope ribbon: five large custom art/icon marks with very short service labels and no paragraph burden inside each item.
- Deeper page rhythm uses full-art panels, recognisable situations/project triggers, a genuine four-stage process, outcome/proof, boundaries, concise FAQ and the existing contact section.
- Private composition is softer, room/device-scale and situation-led. Business composition is stricter, workplace/infrastructure-scale and system-led.

### Art direction

Approved working direction: **tactile illustrated panels** — premium editorial web illustration with semi-flat depth, soft shadows, restrained navy/off-white surfaces, orange route/cable accents and mint connectivity/status accents. Avoid photorealism, childish vector icons, SaaS dashboards and generic stock imagery.

Private P1–P6 use the existing fixed artwork files. Other panels and Business retain their existing designed placeholders. An accepted working art direction does not approve a section recipe or authorize production migration.

## Targeted Content requests

None yet. The Concept II pages use design-stage rewrites grounded in existing service truth. Do not modify the production YAML until Aykhan approves the page architecture and asks for content migration.

## Decisions ready for implementation

None in production yet. Review the two complete Workshop pages first. After explicit approval, a recipe ID can enter Approved Sections; production migration remains a separate requested step.
