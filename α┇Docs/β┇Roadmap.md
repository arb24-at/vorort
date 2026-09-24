# VorOrt repository roadmap

Last updated: 2026-09-24

Repository priorities and acceptance criteria live here; Aykhan's external Obsidian Chain remains the high-level roadmap. Stable contracts live in [α┇Project.md](α┇Project.md), current validation and handoff in [β┇Collaboration.md](β┇Collaboration.md).

## Completed foundation — v2.0.1

Page Workshop and Approved Sections share one governed registry, strict page fixtures and reusable Astro sections. Both private/business pages, existing artwork and responsive previews are available. Production remains separate. The foundation should be extended through the existing registry/contracts rather than rebuilt.

## Completed collaboration and authoring governance

Role-aware context loading, Design / Content & SEO / Implementation / QA role contracts, the live Collaboration handoff, Media Queue, canonical recipe lifecycle, Approved Sections authoring guidance and replacement rules are established. Aykhan remains the only product/design approval authority; section approval, production adoption and final page approval remain separate decisions.

The current Approved Sections library is already more mature than the original two-recipe foundation. Continue to use the canonical recipe registry and real Workshop consumers rather than creating a parallel approved-section catalogue or composition checklist.

## Current cycle — finish the Approved Sections library and full-site design system

The immediate priority is to finish a reusable section system that can support the full launch site without forcing every page into the same cards, bullet lists or checklist rhythm. The existing private home-network and business office-network Workshop pages are working design contexts, not the final scope of the design programme.

1. **Continue Design Lab section review.** Refine remaining experimental candidates in realistic private and business contexts, reuse approved recipes where they fit, and create a new recipe only when the information relationship genuinely needs a different structure.
2. **Approve useful section recipes explicitly.** Aykhan reviews each candidate in context, including its semantic/content contract, flexible versus fixed aspects, audience/page compatibility, responsive behaviour, interaction/accessibility and media needs. Promote only explicitly accepted recipes in the canonical registry.
3. **Cover the other launch-page needs.** Ensure the approved library can support homepage, audience landings, contact, trust/legal and other launch-page content without turning every surface into a service-page composition. Infrastructure-like patterns may remain tighter templates; content-led recipes may allow broader authoring variation.
4. **Review the library as one design system.** Remove, supersede or refine weak/redundant patterns; confirm shared typography, spacing, imagery direction, interaction states, navigation/chrome and mobile behaviour; keep recipe guidance as the primary composition reference rather than creating a duplicate manual catalogue.
5. **Close the Design Lab tooling/QA work needed for practical review.** Complete the useful section-identification/navigation/screenshot workflow and final Approved Sections QA when Aykhan is ready to close this design-library pass.

Acceptance: the Approved Sections library contains a useful, coherent set of explicitly accepted recipes for the launch-site information needs; authoring guidance clearly distinguishes fixed and flexible aspects; representative private/business/general contexts work on desktop and mobile; accessibility-visible behaviour is considered; and unresolved media or repository-verification work is tracked in the existing handoff/queue rather than hidden.

## Next cycle — create concise page blueprints, then rewrite the bilingual site

Page ownership and service boundaries are largely established, and the SEO routing source contains the current keyword/research status. Do not rewrite the old production pages section-by-section. Once the Approved Sections library is ready, first create a compact plan for every launch page so Aykhan can review the whole site before long-form copy is generated.

1. **Create one concise bilingual page-blueprint overview.** For every German and English launch page, record the page's job, main points/questions, important search intent and keywords, service boundaries, key internal links and the approved section recipes likely to express that material. Keep this close to a table of contents, not finished copy.
2. **Review the blueprints manually with Aykhan.** Adjust coverage, page relationships, section choice/order, information density and cross-page overlap until the complete site makes sense as one system. Surface genuine research gaps from `src/data/seo-keywords.yml` here instead of automatically reopening already completed research.
3. **Expand reviewed blueprints into full content.** Content & SEO may choose, order and adapt compatible approved recipes within their guidance, vary section rhythm between pages and use researched keywords naturally. Avoid recreating the current production pattern of repeated bullet lists, checkboxes or interchangeable card sections.
4. **Keep German and English independently authored.** Preserve shared service truth and route relationships while allowing each language to follow its own search intent, wording and useful content depth.
5. **Reconcile the whole site after drafting.** Review internal links, page ownership/cannibalisation, titles/descriptions, canonical/alternate-language relationships, contact paths and remaining metadata before Aykhan gives final substantive content approval.

Acceptance: every launch page has an Aykhan-reviewed concise blueprint before full copy is finalised; the resulting German and English pages are useful and distinct, use approved recipes without becoming template clones, preserve truthful service boundaries, cover their intended search topics naturally and form a coherent site-wide journey.

## Following cycle — adopt the approved page system in production

Production currently remains separate from the Workshop recipe-composition flow. Adoption is a controlled implementation step after the page blueprints and rewritten content are ready.

1. **Finish the validated content/page-composition model.** Extend the existing Markdown/content architecture only as needed to represent the approved production compositions while keeping layout/styling primitives in code and editable copy/data in validated records.
2. **Map reviewed content into production routes.** Preserve the established German/English URLs, route pairing, navigation, SEO foundations and service boundaries. Production consumers should use only approved recipes where the recipe system is adopted.
3. **Use Codex for implementation, not open-ended design.** Codex should implement the accepted compositions/content and surface unresolved decisions instead of inventing new visual patterns.
4. **Review implementation drift before launch.** Compare production against the reviewed blueprints and final content, including responsive composition, shared design language, contact flow, metadata and the intended Markdown editing workflow.

Acceptance: production routes implement the reviewed content/compositions without losing URL/SEO behaviour, approved design contracts or editable-content boundaries; appropriate repository validation and representative browser review pass before release work is considered complete.

## Deferred implementation and launch requirements

- **Navigation preference:** at the top, the navigation should appear docked into the hero, then detach into a persistent sticky/floating state on scroll. Revisit when the page system is mature; do not let this block section/content work.
- **Verified business facts:** final brand/domain; real phone, WhatsApp, email, address and legal operator details; exact qualifications; Berlin travel policy. Keep unsupported claims and placeholder badges out.
- **Trust and contact:** replace provisional certification treatment with truthful working methods, data handling, experience and verified qualifications, including bilingual coverage and deliberate redirects. Choose a reliable form backend, spam controls, delivery/error states and privacy/retention rules before production contact submission is enabled.
- **Production domain and measurement:** configure domain/HTTPS, redirects, canonicals, sitemap/indexing, Search Console and privacy-conscious measurement of phone/email/WhatsApp/form enquiries when the site is ready for the demand test.
- **Technical health:** review Astro/transitive dependency updates and current security findings; keep the working tree reproducible. Existing audit counts are historical, not a current assessment.
- **Release QA:** verify legal, accessibility, performance, error handling, contact delivery, responsive behaviour, links/assets, bilingual routing and indexing readiness before launch.
- **Demand test:** after launch, review search visibility, useful visits and genuine enquiry/contact behaviour at meaningful intervals; iterate from evidence rather than repeatedly redesigning between observations.
- **Future services:** independently research Windows Server/Active Directory, Linux server and Smart Home configuration/installation before creating dedicated pages. Data recovery remains a candidate requiring capability/referral boundaries and no-guarantee wording; normal migration and recovery should link where relevant. Account-access problems stay with computer support unless evidence warrants a separate journey.
- **Content expansion:** retain the independently researched service and audience content. Avoid thin district/technology/password pages; an About page or blog is not required for the first launch.
