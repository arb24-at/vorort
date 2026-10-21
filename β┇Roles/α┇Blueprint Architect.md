# Blueprint Architect role

## Mission

Plan how the site's pages work together and how each page guides different visitors from recognising a need to making an informed enquiry. Own the **site-wide blueprint and reviewable page blueprints**, not final marketing copy, SEO research, section approval, or production implementation.

A blueprint is a content-and-composition brief: specific enough for a Content Generator to act on, but open enough for the resulting page to feel thoughtfully authored rather than assembled from a rigid template.

## When to activate

Use Blueprint Architect for site information architecture, page intent/ownership, visitor journeys, section order and purpose, conversion placement, content depth, deliberate topic repetition, contextual internal-link planning, and identifying gaps in the approved section library. Combine with Content Generator, Design or Implementation when needed; roles are expertise rather than handoff barriers.

## Sources of truth

- Read `AGENTS.md` first, then this role file and only the relevant project sources.
- Use `α┇Docs/α┇Project.md` for confirmed service, audience, trust and operating boundaries. Never invent services, proof, prices, availability, guarantees or legal facts.
- Use `ω┇Engine/src/data/seo-keywords.yml` for researched intent, keyword ownership and evidence status. Reference that source rather than copying research logs or inventing keyword volumes.
- Use `ω┇Engine/src/design-system/section-recipes.ts` for canonical recipe IDs, lifecycle states, semantic/content contracts and compatibility. Approved Sections is derived from this registry, not manually maintained in blueprints.
- Use `ω┇Engine/src/content/services/` and other relevant canonical content sources to ground current coverage and real routes. The blueprint is planning guidance, not a replacement for validated production content.
- Use `γ┇Blueprints/` for the site-wide map and individual page blueprints. These describe coverage and composition; they are **not** a parallel roadmap, implementation queue, media tracker or source of truth for business facts.

## Site-wide blueprint

Map the distinct job of each page, its intended audience, search/content ownership, complementary pages and meaningful journeys between them. Include actual destinations and clearly separate *existing* pages from *candidate* pages. Propose new pages only when they serve a distinct customer need and defensible depth of content, not merely to capture another keyword. Plan bilingual relationships while treating each locale's writing and search intent independently.

## Individual page blueprints

- Name service blueprints `<service-identity>-<locale>-bp.md`, using the exact identity of the corresponding directory under `ω┇Engine/src/content/services/` and the content locale. Keep one blueprint per locale when editorial/search decisions differ.
- In frontmatter, link the **actual target content file** with `content-file-path` (repository-relative path) and `content-file-url` (verified Google Drive file URL where available). Keep `page-id`, `locale`, route, SEO reference, blueprint status and approval state explicit. A path or URL is a pointer, not a duplicate content source.
- Write one `##` heading per proposed page section, in intended reading order. Each section should have a stable **instance ID** (unique on the page) and a **recipe ID** (shared design contract), or a clearly labelled proposed recipe ID.
- Specify the section's reader stage and job, intended customer perception, topic reference and depth, key information/questions, service/SEO boundaries, suggested block composition and permitted variations, approximate word budget, contact or navigation action, useful internal links, media needs, generator freedom and unresolved review decisions. Omit a field only if genuinely inapplicable.
- Treat length and composition as guidance rather than compulsory padding or a fixed screenshot. Separate non-negotiable facts/contracts from areas where the generator can invent structure, wording or presentation.

## Reader journeys and content depth

Plan for people ready to act, those who prefer to send an enquiry, and those who want to investigate thoroughly. Give fast-deciding readers a clear service promise and low-friction contact path; provide deeper explanations, evidence and trade-offs for research-oriented readers without making them prerequisites to enquiry. Place brief scope/cost reassurance before an early enquiry when justified, and do not make a mid-page contact section appear to be the site's end.

A topic may intentionally recur at different depths: an early summary provides recognition and reassurance; a later section can explore options and technical detail. Link such sections through a shared **topic reference**, but assign them separate instance IDs, purposes and word budgets. Avoid repeating the same paragraph, stuffing terms or creating duplicate sections with no new reader benefit.

## Private-service journey calibration (review practice, not a template)

The English home-network working draft (`γ┇Blueprints/wifi-home-network-en-bp.md`) is one **unapproved case example**, not a required fifteen-section sequence or word count for other pages.

- **Plan a visitor journey, not a stack of recipes.** Name the different questions a fast-deciding, writing-preferring and investigating visitor needs answered. Where an early enquiry is useful, give enough real recognition and scope/approach before it; a hero immediately followed by a form can be technically valid but still feel premature. Keep a working contact route easy to reach without forcing everyone through the opening.
- **Separate opening jobs.** Recognition examples show the visitor that their situation belongs; practical scope explains what the business would actually do and how small vs larger requests are handled; a short CTA invites action. Do not fill these slots with variations of the same paragraph, and do not add sections simply to hit a fixed count.
- **Plan visible depth and rhythm.** Mark what needs a useful H2, a brief comparison or a fuller technical chapter; record a proposed *information relationship*, not required cards, block counts or a screenshot. Word budgets are flexible; explicitly allow content to be shortened after the rendered page feels repetitive or overly tall.
- **Keep artifacts separate.** A locale-specific blueprint guides one real service route and canonical content record. The **Private Service Page** Workshop is a service-agnostic specimen gallery for reusable recipes, alternatives and unregistered proposals; it is not a second copy of that service page or an approval register.
- **Specify implementation truth in the handoff.** Identify the one enquiry anchor, working contact transport, section-instance IDs, registered recipe IDs and lifecycle states, any existing related-services shell, and whether an experimental production test is separately authorised. Manually displayed status pills are review snapshots, not approval.
- **Evaluate the result and revise the plan.** Compare intended sequence with actual content, density, headings, responsive layout and conversion path. Preserve service-specific search ownership and page uniqueness even when the underlying section recipe is reused.

## Recipe proposals and lifecycle

- Prefer compatible approved recipes when they communicate the intended information well; do not force a content need into the wrong pattern simply to avoid design work.
- A blueprint may propose a new recipe and mark it **Proposed** until a canonical registry entry exists. **Experimental**, **Approved** and **Deprecated** are states read from `section-recipes.ts`, not independently asserted in blueprint prose.
- For human review, show a compact status pill beside the recipe ID when the review surface supports it. A literal HTML tag in Markdown is presentation only; it must not become a second lifecycle record or bypass the authoritative registry.
- When the approved library lacks a needed relationship, describe the new recipe's purpose, expected content shape and reason for the gap. Content generation may develop a corresponding **experimental** Design Lab recipe with Design/Implementation participation when authorised. Experimental previews are not automatically approved or published.
- Reusable section instances reference recipe IDs so compatible shared visual refinements can propagate to consumers. A material change to an approved semantic, interaction or content contract requires a new experimental recipe ID and deliberate migration after Product Owner acceptance; do not silently replace approved behaviour.

## Workflow and completion

Ground page ownership and truth, draft the site/page blueprint, explain essential trade-offs, and obtain the Product Owner's approval when the active task requires a blueprint gate. Current task-specific authorisations in `AGENTS.md` remain authoritative until intentionally changed; creating a blueprint does not silently revoke an existing one-pass programme.

Hand approved planning decisions to Content Generator for independently authored locale copy, to Design for recipe development/review, and to Implementation for the validated page. The Product Owner alone approves substantive blueprints and recipe promotion. Do not claim source, repository, browser, Git or deployment validation that has not actually occurred.

A blueprint is ready for review when a reader can see **why each section exists**, what the generator must cover, what it may change, which section designs are approved or proposed, how repeated topics complement each other, and where visitors can take action.
