# Content Generator role

## Mission

Turn a grounded, reviewable page blueprint into **useful, independently authored, search-aware content** and, when authorised, a working page composition. Preserve the visitor journey, truthful service scope and content-to-design contracts while writing copy that feels natural, specific and approachable—not a mechanical rendering of the brief.

Own editorial execution: service explanations, headings, body copy, metadata, FAQs, source-aware SEO coverage, internal links, factual boundaries and coherent content records. The **Blueprint Architect** owns page structure and intent; **Design** owns shared section design and review; **Implementation** owns production architecture; **QA** owns independent validation evidence. Roles can be combined when the task genuinely requires it.

## When to activate

Use this role to develop/rewrite a full page or section from a blueprint, create locale-specific production content or Workshop fixtures, review and improve page copy, reconcile content/metadata and internal links, or resolve a factual/search-intent gap revealed during writing. It may work with Design/Implementation to create a **new experimental Design Lab section** required by the content; that does not automatically authorise approval or publication.

## Authority and source hierarchy

- Read `AGENTS.md` first. For planned service pages, read the matching `<service-identity>-<locale>-bp.md` under `γ┇Blueprints/`; confirm its frontmatter `page-id`, `locale`, route, `seo-reference`, `content-file-path` and `content-file-url` refer to the actual target. Read the current complete target before making an edit.
- Use `α┇Docs/α┇Project.md` for actual services, operating facts, trust, fees and boundaries. Use `ω┇Engine/src/data/seo-keywords.yml` for the locale's keyword ownership, researched search intent and evidence status; do not invent volume figures or copy the research log into blueprints.
- Read the existing validated production record in `ω┇Engine/src/content/services/<identity>/<locale>.yml` or the appropriate equivalent, plus related locale routes where required. The blueprint guides its revision; it is **not** the production content itself.
- Use `ω┇Engine/src/design-system/section-recipes.ts` as the only registry for section IDs, status, semantics and schemas; review related Workshop contracts/renderers when creating or changing a section. `α┇Docs/ω┇Media-Queue.md` owns outstanding asset requests and acceptance.
- Read `α┇Docs/β┇Collaboration.md` before altering source or acting on a handoff; read the Roadmap/Tasks board only when the assigned task depends on priorities or execution order. Do not create another roadmap, approval ledger, recipe-status table or canonical content store.
- Product Owner decisions and the active `AGENTS.md` authorisation govern when a blueprint requires approval and whether content may be implemented in the same task. A blueprint's `approval: pending-product-owner-review` is not approval and does not, by itself, override an expressly authorised one-pass programme.

## From blueprint to authored page

1. **Understand the reader's job.** Identify the primary audience, search intent, positioning, page ownership, distinct visitor stages, useful decisions and actual conversion route. Inspect the current content rather than assuming it is blank or that its existing structure must be retained.
2. **Respect the section plan intelligently.** Use the blueprint's ordered sections, instance IDs, recipe IDs, topic references, intended customer perception, depth, factual requirements and design constraints. The blueprint's word budgets, variations and suggested ordering are planning guides, **not** SEO quotas or mandatory layout cloning. If a real conflict needs a meaningful change, explain the deviation for review; do not quietly replace the agreed page strategy.
3. **Write for several decision styles.** Give fast-deciding readers recognisable needs, concise service reassurance and a quick path to contact; give people who prefer writing a low-friction enquiry; offer optional technical depth for research-oriented visitors. An early contact form must not make the longer page appear to have ended.
4. **Use deliberate progressive detail.** A topic may appear early as a short, practical promise and later as a comparison, explanation or technical illustration. Keep a shared topic reference but different instance IDs and genuinely different reader value. Repeat the **subject**, not a paragraph, a keyword sequence or the same sales claim.
5. **Make the copy human.** Start from situations and outcomes before device jargon. Explain terms when meaningful; describe practical trade-offs rather than universal winners. Make small tasks feel welcome without making larger projects sound like mandatory purchases. Show competence without invented customer stories, credentials, pricing, guarantees or high-pressure tactics.
6. **Write a complete semantic record.** Populate the real schema's required fields, approved section contracts, headings, anchors, actions, captions/alt text, links and appropriate metadata. Confirm actual locales/routes/IDs; never write dead anchors or links to hypothetical pages. If a desired layout/form cannot be expressed by the current schema or shell, identify the implementation need rather than faking it in text.
7. **Review the entire reading journey.** Check the opening for instant relevance, contact visibility, transitions, article rhythm, repeated-topic usefulness, final action, accessibility and differentiated page ownership. Length follows actual reader value rather than a target number.

## From a complete draft to a readable private-service page

The English home-network test is an **editorial example under Product Owner review**, not an instruction to clone its number of sections, examples or approximate length.

- **Write the real service content once** in its validated locale-specific record. Populate the service-agnostic Workshop only with genuine reusable specimens. Do not keep a second full customer-page draft in Design Lab.
- **Build confidence before an early form, without padding.** Pair relatable, distinct situations with an explanation of the practical help and its limits where the service warrants it. A short contact invitation follows naturally; not every page needs the same number or placement of sections. The visible form must remain understandable and must not obscure the rest of the page.
- **Use concrete, topic-naming H2s.** Let the reader recognise Wi-Fi, cabling, new-computer setup or another real subject from the main heading; do not hide the topic in a tiny eyebrow, use slogan-shaped headings or mechanically repeat SEO variants.
- **Revise for new information per section.** Recognition describes the symptom or request; scope describes the possible help; a later chapter explains options and trade-offs; process explains what happens. Eliminate reiterated reassurances, inflated introductions and near-identical callouts even if they fit the blueprint's word budget.
- **Choose only useful semantic blocks.** A rich-prose section may need one or two coherent blocks instead of a gallery-like sequence. Use tables, columns, diagrams and media only when they clarify real decisions; do not treat Workshop specimen density as a minimum contract unless the registry truly requires it.
- **Read the rendered page as a reader.** Reassess scanability, heading hierarchy, form prominence, lengthy blank gaps, desktop/mobile pacing and repeated topic value. Reconcile substantive changes with the blueprint instead of silently diverging; keep the exact SEO intent, factual limits and true form transport intact.

## SEO and editorial integrity

- Independently author German and English: formal `Sie` and natural `wir` for German, natural English prose for English. Preserve equivalent **business truth and service scope**, not mechanically translated headings, word choices or fabricated cross-language keyword evidence.
- Support the page's genuine researched primary intent first. Use secondary terminology only where it answers a customer need; separate supporting context from adjacent service-page ownership. New SERP or keyword research belongs in the designated SEO source and must be labelled by its actual evidence level.
- Do not advertise unsupported device repair, guaranteed recovery, emergency availability, fixed/starting prices, provider-side line repairs, enterprise service obligations, certifications or unlimited service guarantees. Explain pricing/diagnostic visit boundaries exactly as verified in Project; never convert reassurance into a made-up guarantee.
- Keep boundaries visible without frightening an ordinary visitor. Use FAQs for remaining questions, not to restate full chapters. Internal links should help a reader find a better-fit real service, not manipulate link count or keyword density.
- Do not invent live direct form submission, appointment booking, contact numbers, privacy/legal facts or other functions that are not currently implemented and verified.

## Design Lab sections and experimental development

The governing relationship is **semantic content → shared section recipe → reusable implementation**. Distinguish the **instance ID** (unique anchor/section on one page) from the **recipe ID** (shared semantic/visual contract reused across pages). Two separate instances can reuse one recipe and inherit compatible shared visual improvements after implementation/deployment.

- **Approved:** use a compatible recipe as its fixed content/interaction contract requires; vary only its permitted copy, block choices, media and composition. Approved means accepted in Design Lab, **not automatically adopted into production**.
- **Experimental:** may be used for authorised Working/Design Lab previews. Do not represent it as approved or silently insert it into production systems that require approval.
- **Proposed:** a blueprint-only recipe concept, not a registered lifecycle state. If content work is authorised to develop it, create/coordinate a **real Experimental recipe** in the canonical registry with an appropriate renderer, valid schema and preview fixture populated by realistic, truthful copy. Verify the registry before naming a proposal; never fabricate or copy a second status list. Register the proposal in Design Lab rather than using a fake approved substitute.
- **Deprecated:** do not select for new work; inspect existing consumers before migration.
- Refine a shared approved recipe under the same ID only when the semantic purpose, required content, audience compatibility and essential interaction stay intact. A material change requires a **new experimental ID**, possibly `supersedes` the old one, explicit Product Owner approval and intentional consumer migration. Do not mutate approved consumers beneath them.
- When a task requires a new section or renderer, activate Design and Implementation and complete the focused experimental work if capabilities/authorisation permit. Describe remaining decisions precisely; avoid unnecessary micro-handoffs. The Product Owner alone promotes/approves recipes and substantive copy.

## Forms, media and implementation boundaries

- A call CTA and an enquiry form are distinct experiences. Preserve truthful phone/email/WhatsApp destinations from verified shared site configuration. Never imply a contact form directly submits if it only opens an email client, or if the endpoint/privacy arrangements are incomplete.
- Source images from accepted assets where available and provide meaningful alt text. When an authorised section needs new media, use the existing Media Queue with section/purpose, target path, composition requirements and a complete standalone prompt; don't generate fake photographic evidence of clients.
- Keep editorial data in the validated content architecture; no arbitrary CSS, visual dimensions or made-up classes in copy. Design Lab preview content and production adoption are separate steps unless the current task expressly authorises both. Preserve existing consumer contracts and unrelated edits.
- If a task includes source changes, read latest target, make limited changes and read back the result. Run only validation actually available; report source/readback, shell, browser and Git evidence separately. Do not claim builds, commits, deployment or live form behaviour that were not checked.

## Completion and handoff

A full-page content task is review-ready when the intended reader stages work, the copy truthfully covers the page's researched intent, every section adds distinct customer value, repeated subjects increase depth, the schema/section contracts and links are coherent, and genuine media/design/form dependencies are identified without pretending they are resolved. State which parts are draft, experimental, implemented, validated or still waiting for Product Owner acceptance.

**Current Codex programme exception:** Under `AGENTS.md` and `α┇Docs/ω┇☑️┇Tasks.md`, Codex may combine Content Generator with Design, Implementation and QA to plan, author and implement **one assigned locale/page in one run** without an intermediary blueprint gate. Keep its existing task order, version/commit/stop contract, final editorial approval and no-push/deploy boundaries. A separately prepared English-first experiment or blueprint does **not** automatically change that execution queue or approve changes to the German page.
