# VorOrt design–content handoff

Purpose: a **small working bridge** between the Content/SEO workspace and the Design workspace. Keep it concise. Detailed copy belongs in the production content source; project state belongs in the canonical project documents.

## Canonical ownership

- `ω┇Engine/src/content/services/**` — researched service-page copy, SEO intent, facts, proof and boundaries.
- `α┇Docs/Project.md` — stable product, architecture and website-map decisions.
- `α┇Docs/Roadmap.md` — implementation phases and acceptance criteria.
- `α┇Docs/Collaboration.md` — chronological work/session handoff.
- `/design-lab/` — visual composition experiments and recipe reference.

Do **not** duplicate full YAML content, keyword research, service truth, the recipe catalogue or implementation logs here.

## Roles

**Content / SEO** owns what must be said: search intent, commercial job, factual copy, proof, boundaries and independently authored German/English content.

**Design** owns how that meaning is experienced: hierarchy, page narrative, section composition, imagery/diagrams, visual rhythm and the General / Private / Business page-family language.

**Codex** implements approved Design + Content decisions in Astro. It should not be asked to rediscover page strategy or visual direction.

## Collaboration rule

Content describes the **relationship** in the information, not a UI component. Useful descriptions are: chronological stages; overlapping situations; one system with dependent parts; a genuine either/or choice; independent facts; one dominant item with supporting items; or nuanced prose that should remain prose.

Design may then choose a diagram, scene, comparison, sequence, paragraph, list, cards, Q&A or another form. Lists/cards/accordions remain valid, but they are not the default representation for every repeated data structure.

If a composition genuinely needs different wording, Design records a **targeted request** here (for example: merge two paragraphs, supply three short labels, confirm whether an order is chronological). Content then updates the real source if the change is truthful and SEO-safe.

## Current experiment — service-page openings

**Status:** design exploring; no production content rewrite requested.

**English reference content**

- Business: `ω┇Engine/src/content/services/office-network/en.yml`
- Private: `ω┇Engine/src/content/services/wifi-home-network/en.yml`

**Question being tested**

Can the first two movements establish a recognisable page-family language without creating two unrelated brands?

### Business hypothesis

- **Dark hero → light first section.** Avoid a dark hero followed by another dark section, which visually merges into one oversized opening.
- Hero language: architectural, rectilinear, system-led and somewhat denser; show rooms/workspaces/infrastructure as an organised whole.
- First section language: move onto a light planning surface; use requirements, dependencies and spatial organisation rather than another bullet list.
- Colour may vary by shade, but palette is **not** the primary differentiator.

### Private hypothesis

- **Light hero → dark first section.** The light entrance stays approachable; the first dark section marks the move from familiar situation into deeper technical explanation.
- Hero language: recognisable home/home-office space, everyday objects, softer geometry and lower information density.
- First section language: spatial/environmental explanation of rooms, walls, wireless path, cable route and storage rather than a generic technical panel.
- Keep the same VorOrt typography, tokens and core interaction language as Business.

### Shared rules under test

- The surface transition must signal a **narrative change**, not merely decoration.
- Private and Business differ primarily through composition, density, geometry, visual subject and information hierarchy — not by swapping brand colours.
- The hero and first section may use the same researched copy with different visual treatment; do not rewrite content simply to fit the experiment.
- German equivalents should inherit the approved page-family principle later, while retaining independently authored German copy.
- No production YAML layout controls or recipe IDs should be added.

## Targeted Content requests

None currently. The existing English reference copy is sufficient for this design experiment.

## Decisions ready for implementation

None yet. Aykhan should first review the two Design Lab opening studies. Once a direction is approved, record only the final principle and any specific Content change required here; implementation details belong in `Collaboration.md` / code.
