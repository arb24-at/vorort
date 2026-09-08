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

### Page: German private-services landing — `/leistungen/privatpersonen/`

**Status:** design exploring

**Audience and search intent**

- Primary audience: private customers and home-office users in Berlin who know they need IT help but may not know whether the cause is the computer, macOS/Windows, an application, an account, the home network, or a device change.
- Primary intent / commercial job: act as the broad private/home-office gateway, helping a visitor recognise their situation, understand that local professional help is available, and continue either to the correct detailed service or directly to an enquiry without having to diagnose the technology first.
- Search ownership: the landing itself is still `provisional-seed`; `computerhilfe privat berlin` is the current provisional owner, supported by phrases such as `IT Hilfe zuhause Berlin`, `Computer Hilfe vor Ort Berlin`, `PC Hilfe zuhause Berlin`, `Computer Service privat Berlin` and `Homeoffice IT Hilfe Berlin`. Do not treat that seed as a researched final H1 until landing-specific Keyword Planner research is completed.
- Important secondary intent: make “vor Ort in Berlin”, private/home-office context, understandable communication and cross-service competence clear enough that a visitor with a mixed or uncertain problem still sees a credible next step.
- Detailed-service ownership that the landing must not cannibalise: `PC Hilfe Berlin` belongs to Computer & Laptop Help; `Heimnetzwerk einrichten` belongs to Wi-Fi & Home Network; `neuen Computer einrichten` belongs to Setup & Data Transfer. Software installation/optimisation remains its own service intent and its current SEO seed is still provisional.
- Wrong or harmful intent to avoid: hardware-repair-shop positioning; cheap PC repair; phone repair; guaranteed data recovery; 24-hour/emergency claims; audience stereotypes such as a “senior computer help” identity; broad Smart-Home installation as if it were part of the present launch offer.

**What the visitor needs to understand or decide**

- They do not need to know the technical diagnosis. The useful starting point is what is happening now or what they want to achieve.
- Windows PCs/laptops and Macs are both supported for system, software, startup, performance and legitimate account-access problems.
- A computer that will not start, has become very slow, crashes, behaves suspiciously, or blocks access belongs naturally to Computer & Laptop Help; password/account and BitLocker recovery-key situations stay with that service rather than device setup.
- A program that needs installing, updating or untangling, or a software environment that has become unstable or confusing, belongs naturally to Software Installation & Optimisation.
- A home or Homeoffice network that needs to be planned, extended or made coherent — including WLAN, Mesh, Ethernet, NAS/shared storage, printers and connected devices — belongs naturally to Wi-Fi & Home Network.
- A new Windows PC, laptop or Mac that needs selection, procurement, setup, normal readable-data transfer, email/peripherals and a sensible backup belongs naturally to Setup & Data Transfer.
- These situations can overlap. A slow computer can be a system problem or a software problem; email, printers, backups and accounts can appear inside more than one service. The landing should preserve that relationship rather than forcing the visitor to classify the cause before contacting us.
- If the closest service is still unclear, the visitor can simply describe the problem. The initial conversation is free; when the request is clear enough, scope or a quotation can be discussed before the visit, while uncertain cases may require a paid diagnostic visit.
- On-site support across Berlin is the defining service model. Remote help is a supporting option when the task is suitable.

**Required content beats**

| Beat | Communication job | Content available / needed | Relationship in the information | Design notes / constraints |
| --- | --- | --- | --- | --- |
| Recognition | establish “this is for my home or Homeoffice problem” before asking for a category choice | Berlin on-site promise; private/home-office context; Windows + Mac; important line that the visitor does not need to diagnose the cause | broad situation → reassurance → willingness to continue | Preserve meaning only. Composition is for Design to decide. |
| Situation-to-service routing | let recognisable real-life situations reveal the four detailed service paths | non-starting/slow/crashing or locked computer; software/install/update/conflict; planned WLAN/Homeoffice/NAS; new device/setup/data transfer/backup | customer symptom or intended outcome → most likely detailed service | Situations are not four isolated product buckets: overlap and uncertainty are part of the content model. |
| Cross-service environment | show why the service can follow a problem across the boundaries of one device or product | accounts, email, printers/peripherals, backups, cloud/NAS and connected devices as contextual supporting capabilities | one home/Homeoffice environment → several dependent technologies → one understandable support conversation | Do not promote these supporting capabilities into extra headline services merely because they recur across pages. |
| Working relationship | reduce uncertainty about what happens after contact | free initial conversation; collect problem/location/device; decide on-site vs suitable remote help; scope/quote when responsible; diagnosis if needed; agree additional work before proceeding | unclear problem → assessment → agreed scope → work → understandable handover | The process should communicate responsibility and consent, not speed or emergency response. |
| Proof | turn the approachable tone into credible professional competence | IT experience since 2008; Windows + macOS; software, networks/WLAN, NAS/backups, email/accounts, printers/peripherals, device setup and migration | recognised situation → relevant breadth → confidence that dependencies can be followed | No invented customer counts, response statistics, badges or qualifications. Exact qualification evidence is still unresolved. |
| Boundaries in context | prevent broad “IT help” wording from promising unsupported work | hardware-workshop exclusions; data-recovery separation; legitimate access only; ISP-line boundary; no universal WLAN guarantee; licensed/supported software; no sensitive credentials through enquiry | supported situation → point where another service/provider/specialist boundary begins | Boundaries should remain understandable customer information, not be reduced to generic legal small print. |
| Continuation | give a useful next step whether the visitor knows the service or not | detailed service paths plus call/WhatsApp/enquiry route | recognised service → deeper detail; uncertain/mixed problem → enquiry | The landing must support both routes; it should not require a service choice before contact. |

**Customer situations that must remain recognisable**

- “Der PC oder Mac startet nicht richtig, ist sehr langsam, stürzt ab oder zeigt nach Änderungen neue Fehler.”
- “Ich komme wegen Passwort, PIN, Microsoft-/Apple-Account oder BitLocker nicht mehr wie erwartet an mein Gerät oder meine Daten.”
- “Ein Programm muss installiert werden, funktioniert nach einem Update nicht mehr oder der Software-Arbeitsplatz ist über Jahre unübersichtlich geworden.”
- “WLAN und Heimnetz sollen nicht nur notdürftig repariert, sondern für Wohnung, Haus oder Homeoffice sinnvoll aufgebaut oder verbessert werden.”
- “NAS, gemeinsamer Speicher, Drucker oder weitere Netzwerkgeräte sollen als Teil eines verständlichen Heimnetzes funktionieren.”
- “Ich brauche einen neuen Windows-PC, Laptop oder Mac und möchte Auswahl, Einrichtung, Datenübernahme, E-Mail, Zubehör und Backup als zusammenhängenden Gerätewechsel erledigen.”
- “Ich weiß noch nicht, welches dieser Themen die Ursache ist; ich kann einfach schildern, was nicht funktioniert.”

**Relationships and ownership that must survive the design**

- Computer & Laptop Help owns symptom-led device/system problems and legitimate access recovery. It is the destination for startup failures, slow/unstable computers, malware, Windows/macOS problems, passwords/accounts and BitLocker.
- Software Installation & Optimisation owns application installation, update/configuration conflicts and software-environment cleanup. It may overlap with “slow computer”, but the landing must not force the user to decide whether the root cause is Windows or an application.
- Wi-Fi & Home Network owns planned network setup/build and improvement: rooms, WLAN/Mesh, Ethernet, NAS/shared storage, Homeoffice connectivity and networked devices. Provider-line faults remain outside the service.
- Setup & Data Transfer owns the device-change journey: needs-based purchase advice and optional procurement, complete setup, normal readable-data migration, email/peripherals and backup. It does not own forgotten-password/BitLocker access or damaged-media recovery.
- Data recovery is a separate adjacent future intent when a drive is damaged, unstable or unreadable. It is not a hidden promise of this landing.
- Broader Smart-Home configuration/installation is a separate future service intent. Connecting compatible devices to the home network may fit the Wi-Fi service; the current landing must not repeat the old generic “Smart-Home-Fehlerbehebung” promise.
- Email, accounts, printers/peripherals and backup are cross-service supporting capabilities. Their presence should strengthen the sense of one coherent home/Homeoffice environment rather than create duplicate service ownership.

**Proof and boundaries that must survive the design**

- Proof: IT experience since 2008; active support for Windows and macOS; practical breadth across operating systems, workplace software, WLAN/LAN, NAS/shared storage, backups/cloud storage, email/accounts, printers/peripherals, device selection/setup and normal data migration; on-site work throughout Berlin.
- Proof must remain factual. Current contact identity, legal details and qualification evidence are provisional; do not invent badges, customer counts, ratings, response metrics or certifications.
- Boundary: no advertised hardware-repair workshop or component-level electronics work. Obvious/simple component replacement may be agreed selectively, but display, hinge, charging-port, mainboard and liquid-damage repair are not part of the advertised standard offer.
- Boundary: damaged/unreadable media is a separate recovery assessment and successful data recovery is never guaranteed.
- Boundary: BitLocker cannot be bypassed; protected access depends on a suitable existing recovery key. Account/password recovery uses legitimate available recovery paths only.
- Boundary: passwords, PINs, authentication/recovery codes and recovery keys must not be requested through the website enquiry.
- Boundary: ISP/line faults remain the provider's responsibility; a specific WLAN speed or universal coverage cannot be guaranteed without assessing the building.
- Boundary: no pirated/unlicensed software, no guaranteed 24-hour/same-day response, and no public response-time promise.

**Important copy / language to preserve**

- Core reassurance: **“Sie müssen die Ursache nicht selbst diagnostizieren.”**
- Useful follow-through: **“Beschreiben Sie einfach, was nicht funktioniert oder was Sie erreichen möchten.”**
- Service-model message: **“IT-Hilfe vor Ort in Berlin für Zuhause und Homeoffice.”** Treat this as communication language, not a locked SEO H1.
- Platform breadth should be explicit in natural copy: **Windows-PCs, Laptops und Macs**.
- The four service meanings should stay plain-language and outcome-led: **Computerprobleme lösen; Software einrichten und ordnen; Heimnetz/WLAN sinnvoll aufbauen; neuen Computer auswählen, einrichten und Daten übernehmen.**
- Trust language should prefer the durable factual phrase **“IT-Erfahrung seit 2008”**.
- Do not carry forward the existing transliterated `fuer/Geraete/...` copy or the current generic `Smart-Home-Fehlerbehebung` promise.
- Do not use “Reparatur” as the broad landing identity; where system repair/reinstallation is genuinely in scope, explain that inside the relevant detailed service rather than implying a physical repair workshop.

**Content-length constraints discovered through design**

- Not yet established. Use realistic German source content in the Design workspace first; Design may report heading/body/label pressure back here without deleting required meaning.
- The landing should remain materially shorter and broader than the four detailed service pages. It needs enough specificity for recognition and trust, but should not duplicate their diagnostic explanations, FAQs or complete scope.

**Open questions between Content and Design**

- How should overlapping situations be represented so a visitor can recognise “slow computer”, “email problem” or “printer problem” without being forced into a false technical diagnosis?
- How much cross-service breadth is needed before the landing feels credible, while still keeping the detailed pages responsible for depth?
- Where should the “you do not need to diagnose this yourself” reassurance recur, if anywhere, so it supports both service discovery and direct enquiry without becoming repetitive?
- The exact German landing SEO owner/H1 remains provisional pending landing-specific Keyword Planner research. Design should therefore preserve semantic flexibility rather than treating the current seed phrase as immutable display copy.

**Agreed decisions**

- This handoff covers the German landing only. The English landing remains independently authored and should receive its own search/content pass.
- The landing is a private/home-office orientation and conversion page, not a fifth detailed service and not a catalogue of technologies.
- Content starts from customer situations and intended outcomes; technical categories are supporting context.
- The visitor may continue to a detailed service or enquire without choosing one first.
- Private mode should feel approachable and tangible without demographic stereotypes or loss of professional credibility.
- No page composition, card system, accordion behaviour, grid, diagram type or other UI pattern is prescribed here. The Design workspace owns representation.
