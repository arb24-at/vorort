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

## Current experiment — useful first section after the hero

**Status:** design exploring; production content and production service pages remain unchanged.

**English references**

- Business: `ω┇Engine/src/content/services/office-network/en.yml`
- Private: `ω┇Engine/src/content/services/wifi-home-network/en.yml`

### Review result from P01 / P02

The first opening experiment was rejected. Both first sections repeated the hero grammar: oversized heading + explanatory paragraph + large diagram. A surface change alone did not create a new narrative movement.

The first section after a hero should therefore become **smaller in typographic scale, denser in useful information and different in information form**. It should answer a new visitor question rather than restate the service proposition.

### P03 — Business project brief

- Keep the current dark, architectural hero as the business opening hypothesis.
- Move to a light first section, but make the centrepiece a **project brief / planning artefact**, not another diagram.
- Use the existing Planning content as four ruled rows: planning input → what needs to be clarified before equipment selection.
- Business page-family cue under test: operational, structured, artefact-led, denser and visibly methodical.

### P04 — Private observation correspondence

- Keep the current light, environmental hero as the private opening hypothesis.
- Move to a dark first section, but make the centrepiece an **observation → investigation correspondence**, not another room map.
- Start from recognisable household observations and pair them with what VorOrt would inspect.
- Private page-family cue under test: situational, plain-language, reassuring, lower-density and rooted in what the customer notices rather than technical categories.

### Shared rules under test

- Surface contrast supports the narrative change; it is not the audience identity by itself.
- The first post-hero H2 should not compete with the H1 in scale.
- Avoid a second hero composition immediately after the hero.
- Lists, tables, diagrams, prose and media are all valid when they fit the information relationship; no form is the default.
- No recipe IDs or arbitrary visual controls go into production YAML.

## Targeted Content requests

**Do not rewrite production content yet.** If P03/P04 are approved visually, Content should then refine only:

- Business: 4–5 short **planning input → what it changes / what we clarify** pairs, grounded in the existing network-planning content.
- Private: 4 short **what the customer notices → what we inspect** pairs, avoiding false diagnosis and preserving the current Wi-Fi/Ethernet/NAS scope.

## Decisions ready for implementation

None yet. Aykhan should review P03/P04 first.
