# VorOrt repository roadmap

Last updated: 2026-09-03

This roadmap is subordinate to Aykhan's external Obsidian Chain. It records repository implementation phases and acceptance criteria without duplicating the Chain's high-level project-management state.

Status markers: `complete`, `next`, `planned`, `blocked`.

## 1. Repository organization and operating context — complete

- Isolate the Astro application in `ω┇Engine` while retaining GitHub-required root configuration.
- Establish three canonical documentation files and a root `AGENTS.md` contract.
- Add repeatable static-output validation and update GitHub Pages to build from the engine.
- Preserve the live `/vorort/` URL, German root, English subtree, 23 HTML pages, and 22 sitemap URLs.

Acceptance: a fresh dependency install and `npm run validate` pass from `ω┇Engine`; the `main` Pages workflow deploys successfully; future agents can orient themselves from root documentation alone.

## 2. Production truth and technical health — next

- Replace placeholder telephone and WhatsApp details as soon as the ready values are supplied; keep email, address, final operator presentation, privacy details, and certificate evidence configurable until verified replacements exist.
- Replace the provisional public working name `VorOrt` with a final brand when selected, and choose the production domain without coupling architecture to the temporary name.
- Complete the service audit begun on 2026-08-27: the operating model, experience-since-2008 wording, advertised technology groups, small-and-growing-business focus, availability boundaries, diagnostic model, and exclusions are confirmed; exact qualifications, travel policy, and remaining production facts are still required.
- Upgrade Astro and affected transitive dependencies, then rerun the security audit and static validation.
- Remove tracked or generated platform residue and keep the working tree reproducible.

Acceptance: no placeholder identity or unsupported operational claim is public; legal pages match the real hosting/contact stack; dependency audit findings are reviewed and production-relevant issues resolved.

## 3. Validated bilingual content architecture — next

Foundation and revised review slice completed on 2026-08-30: all service records live in a schema-validated bilingual content collection, organized as one independently editable locale record per stable service folder; translation pairs, routes, navigation labels, approved page templates, ordered four-state storyboards, thematic states, SEO intent, and related-service references are validated during the build. The dedicated German/English software installation and optimization service is the first fully expanded Technical Field pair. Broader page conversion remains intentionally paused for review.

- Lock the launch information architecture and page briefs before broad visual rollout. Every indexable service page must have a distinct audience/search intent, content-depth level, thematic state, proof level, and conversion path.
- Extend the current service collection pattern to localized landing-page copy and other appropriate page data; keep contact facts centralized until production values are supplied.
- Preserve separate German and English editorial content connected by stable translation IDs.
- Review the completed bilingual software installation/optimization service pair and its intent-led slugs before applying the expanded template to the remaining pages.
- Reframe the current security/certification route as working-methods/data-handling/experience/qualifications trust content, with a bilingual equivalent and no unverified credential marketing.
- Complete or deepen the remaining existing private services (English Wi-Fi/home network counterpart; setup/data transfer) and business services (Google Workspace) using the page-content contracts in `Project.md`. The German Wi-Fi/home-network page is now researched and expanded around home-network setup, cabling, Mesh, NAS and Homeoffice; the German/English network-infrastructure pair and German/English Microsoft 365 slices are already expanded.
- Normalize German typography and replace remaining transliterated copy such as `fuer` where it is customer-facing.
- Keep layout primitives and design tokens in code; expose only constrained page/theme choices to content files.
- Do not create thin district pages, technology-brand pages, or blog filler before search evidence demonstrates a distinct useful intent.
- Research Windows Server/Active Directory and Linux server services independently before creating their confirmed future dedicated pages; do not make the network page carry those separate intents.
- Research the confirmed future Smart Home configuration/installation service independently before creating its route; keep the Wi-Fi/home-network page focused on network foundation and device connectivity rather than absorbing the full smart-home offer.

Acceptance: the launch page inventory is explicit; the five primary service pillars are represented coherently; representative content and SEO changes require no Astro component edit; invalid or incomplete content fails the build; every translated page has correct canonical and alternate-language metadata; every new indexable page has substantial distinct content rather than keyword duplication.

## 4. Thematic visual and interaction system — planned

Prototype foundation completed on 2026-08-27, the first Technical Field proof slice completed on 2026-08-30, and the final shared-design refinement completed on 2026-08-30. The grouped bilingual header, condensed homepage, controlled vertical rhythm, selective environmental artwork, customer-readable diagrams, four-state software journey, contact behavior, and responsive foundation are now stable. Content work is the immediate priority; the business-mode proof, controlled page migration, and release-level accessibility/performance verification remain planned implementation work rather than another design-concept phase.

- Establish typography, color, spacing, icon, illustration, diagram, and motion rules for the provisional or chosen brand.
- Prototype one coherent, state-changing Berlin home/home-office/office visual world across the homepage, one private service, and one business service.
- Use computer and laptop troubleshooting as the private prototype and office networks and workplace IT as the business prototype.
- Carry each page theme beyond its hero through section composition, diagrams, icons, interface details, and restrained interaction, with technical depth increasing as visitors move deeper into the site.
- Use the expanded German network/infrastructure page as the professional business-mode reference and review it visually before broader rollout. Then continue with Wi-Fi/home network, setup/data transfer, Google Workspace, the English network/infrastructure counterpart, the private landing, and the trust/capability treatment. Do not redesign every route in parallel before both private and business modes are accepted.
- Let each service use a related environment/state rather than forcing one literal camera view everywhere; consistency comes from the shared visual universe, perspective/material/motion rules, and recurring devices/system language.
- Add only high-value generated or commissioned imagery with documented consistency rules and accessible alternatives.
- Review navigation, contact surfaces, responsive behavior, keyboard use, focus treatment, reduced motion, contrast, and performance.

Acceptance: page topics are visually understandable and distinguishable without unrelated stock imagery; the theme remains present below the hero; private and business contexts show appropriate progressive technical depth inside one recognizable system; each converted service page fulfils its content contract and remains useful without the visual layer; accessibility and performance checks meet the agreed release baseline.

## 5. Conversion and demand measurement — planned

- Choose and implement a static-compatible form backend with spam protection, error/success states, privacy disclosure, retention policy, and reliable delivery.
- Create a dedicated German/English contact route once the real backend and privacy behavior are known, while keeping the global contact section and mobile contact dock available throughout the site.
- Keep the form approachable: minimal first-step fields, progressive optional detail, context-sensitive private/business prompts, and no collection of passwords, authentication/recovery codes, payment-card data, or remote-access credentials.
- Instrument phone, email, WhatsApp, and form interactions as distinct conversion events.
- Configure Search Console and privacy-conscious traffic measurement that separates impressions, visits, service intent, and genuine enquiries.
- Define a lightweight review cadence and avoid redesigning between observation windows without evidence.

Acceptance: every contact method is functional and measurable; the dedicated contact destination and embedded/global contact surfaces use the same truthful enquiry model; a test enquiry is delivered and observable; the site can distinguish vanity traffic from meaningful Berlin service demand.

## 6. Launch, observe, and iterate — planned

- Complete production-domain, HTTPS, redirect, canonical, sitemap, indexing, legal, accessibility, and contact-flow checks.
- Launch the agreed German and English demand-test pages.
- Review search visibility, relevant visits, service-page behavior, calls, emails, WhatsApp conversations, and form enquiries at useful intervals.
- Improve copy, internal linking, service positioning, and conversion friction based on evidence.
- Add new district, technology, advice, or service-intent pages only when Search Console, enquiry patterns, or a genuine customer-information need justifies substantial distinct content; do not expand the sitemap for keyword count alone.
- Decide whether evidence supports further investment in content, paid acquisition, booking, staffing, or broader Berlin operations.

Acceptance: the demand test is live on the production domain, measurement is reliable, and investment decisions reference accumulated enquiry and search evidence rather than raw traffic alone.
