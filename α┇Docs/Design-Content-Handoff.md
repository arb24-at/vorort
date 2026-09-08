# VorOrt design–content handoff

Purpose: a narrow working bridge between the Content/SEO workspace and the Design workspace.

This file is **not** a project roadmap, implementation tracker, SEO source of truth, or replacement for `Project.md`, `Roadmap.md`, or `Collaboration.md`.

Canonical ownership remains:

- `Project.md` — stable product, architecture, website-map and source-of-truth decisions.
- `Roadmap.md` — implementation phases and acceptance criteria.
- `Collaboration.md` — chronological repository/session handoff.
- `ω┇Engine/src/content/services/**` — validated service-page content records.

This file exists only to coordinate how researched content becomes an authored web composition.

## Roles

### Content / SEO workspace

Owns:

- search intent and keyword research;
- what the page must sell or explain;
- customer questions, situations, scope, proof and boundaries;
- independently authored German/English content;
- validated YAML content records.

The content workspace should describe the **meaning and relationship** of information before assuming a presentation pattern. Do not default to “this becomes a card grid”, “this becomes bullets”, or “this becomes an accordion”.

### Design workspace

Owns:

- hierarchy and page narrative;
- section composition and visual rhythm;
- general/private/business visual modes;
- diagrams, imagery, spatial relationships and interaction;
- deciding which information should be shown as prose, comparison, sequence, diagram, annotated scene, index, proof block, question set or another appropriate form;
- Design Lab experiments and approved visual/compositional patterns.

The design workspace must preserve content meaning, SEO intent and factual boundaries. It should not rewrite substantial copy merely to make a layout convenient.

### Codex

Codex is the implementation specialist. It executes agreed design/content decisions in the Astro project, centralising genuine shared rules and preserving the existing content architecture. Codex is not the default place to rediscover page strategy or visual direction.

## Working sequence

1. Content workspace establishes page intent, commercial job, required facts, customer situations, proof and boundaries.
2. Content workspace adds or updates the active-page handoff below without prescribing arbitrary components.
3. Design workspace chooses the page narrative and representation of each information relationship.
4. Content is adjusted only where necessary to fit the agreed communication structure without losing researched intent or substance.
5. The agreed section/composition is tested with realistic content in the Design Lab where useful.
6. Aykhan approves the direction.
7. Codex receives a focused implementation brief containing decisions already made.
8. Production YAML remains content-oriented; arbitrary CSS/layout settings do not move into YAML.

## Representation vocabulary

Use these as prompts, not mandatory component names.

| Information relationship | Possible visual form |
| --- | --- |
| Symptoms / situations | situational scene, editorial list, dominant + supporting cases, annotated device/environment |
| Connected systems | topology, dependency map, spatial relationship, signal/path diagram |
| Sequence / method | progression, timeline, staged transformation, before → intervention → outcome |
| Comparison / choice | parallel columns, split field, decision matrix, paired states |
| Scope / capability | structured index, grouped field, system map, annotated cluster |
| Proof / trust | evidence strip, annotated proof, factual callout, measured/verified state |
| Boundaries / exclusions | restrained contrast band, boundary note, paired “we handle / specialist case” treatment |
| Questions | editorial Q&A, selected open answers, contextual question cluster; accordion only when genuinely useful |
| Related services | directional next-step list, contextual paths, relationship map; card grid only when it improves scanning |

A repeated data structure does **not** require a repeated card component.

## Page-level handoff template

Copy this block for the currently active page. Keep it concise.

### Page: [name / route]

**Status:** content defining / design exploring / direction agreed / ready for Codex

**Audience and search intent**

- Primary audience:
- Primary intent / commercial job:
- Important secondary intent:
- Wrong or harmful intent to avoid:

**What the visitor needs to understand or decide**

- 

**Required content beats**

| Beat | Communication job | Content available / needed | Relationship in the information | Design notes / constraints |
| --- | --- | --- | --- | --- |
| 1 |  |  |  |  |
| 2 |  |  |  |  |
| 3 |  |  |  |  |

**Proof and boundaries that must survive the design**

- Proof:
- Boundaries:

**Content-length constraints discovered through design**

- Heading limits or preferred range:
- Intro/body limits or preferred range:
- Diagram label limits:
- Other:

**Open questions between Content and Design**

- 

**Agreed decisions**

- 

## Active page

### Page: Private-services landing — `/leistungen/privatpersonen/` and `/en/services/private/`

**Status:** content defining / design exploring

**Audience and search intent**

- Primary audience: private customers and home-office users who need understandable local IT help in Berlin.
- Primary intent / commercial job: orient visitors from a broad private/home-office need to the most relevant service while building reassurance and trust.
- Important secondary intent: make the range of support tangible without turning the landing into a catalogue.
- Wrong or harmful intent to avoid: repair-shop positioning, generic technology catalogue, audience stereotypes, or a wall of technical categories.

**What the visitor needs to understand or decide**

- “This service recognises the kind of problem or setup I have.”
- “I can understand the next step without diagnosing the technology myself.”
- “There is real competence behind the approachable presentation.”
- “I can move into the right detailed service or make an enquiry.”

**Required content beats**

| Beat | Communication job | Content available / needed | Relationship in the information | Design notes / constraints |
| --- | --- | --- | --- | --- |
| Entrance | establish private/home-office context and Berlin on-site help | short promise + intro | context / recognition | should feel warmer and more situational than business mode; avoid a huge empty hero |
| Service discovery | help visitor recognise the closest situation | four core private service areas plus common entry situations | grouped situations leading to distinct services | do not default to four equal cards; allow one authored composition with hierarchy |
| Everyday scope | show that support connects across devices, software, network and setup | concise examples | related parts of one home/home-office environment | avoid a second consecutive card/list grid |
| How help works | reduce uncertainty about contact, diagnosis and on-site work | short process and expectations | sequence | preferably a simple progression, not another bullet list |
| Trust / Berlin | establish local coverage, experience and sensible boundaries | Berlin coverage + selected proof/boundary facts | evidence / reassurance | integrate into composition rather than isolated bordered boxes where possible |
| Next step | move to enquiry or detailed service | CTA + contextual service links | decision / continuation | maintain call/WhatsApp/form legitimacy without overwhelming the page |

**Proof and boundaries that must survive the design**

- Proof: IT experience since 2008, on-site Berlin context, real supported technology/service breadth.
- Boundaries: no repair-shop framing, no guaranteed data recovery, no unsupported response-time promises, no need for visitors to self-diagnose.

**Content-length constraints discovered through design**

- To be established in the Design Lab using realistic German first, then checked against independently authored English.

**Open questions between Content and Design**

- Which four or five customer situations best bridge from broad recognition into the existing private service pages?
- Which information currently written as lists can be combined into one coherent home/home-office system view?
- What proof belongs near the entrance versus deeper on the page?

**Agreed decisions**

- Private mode should be warmer, more situational and tangible than business mode while remaining professional.
- The page should reduce repeated card grids, bullet sections and accordion dependence.
- Design should support the content structure; content should be written with the approved section composition in mind.
