# VorOrt media queue

This is Aykhan's operational queue for images and other media that must be produced or explicitly accepted before use. It is not a design source of truth and not an asset catalogue. Source/fixtures own actual media references; Design owns visual direction; Content Generator and Design record media needs when composing pages.

Checkbox meaning:

- `[ ]` — Aykhan still needs to produce, review, or accept the asset for current use.
- `[x]` — Aykhan has accepted the asset for current use and it exists at the stated target path. A checked asset does **not** mean its section is approved.

Keep completed items only while they are useful to the current page/design cycle; Git preserves older history. Every illustrator prompt must be standalone because the image-generation chat may not have access to project files.

## Working direction

The private hero is the accepted working art reference: premium tactile editorial illustration with deep petrol/navy evening tones, warm off-white interiors, restrained orange cable/routes and sparse mint connectivity cues. This establishes an art family, not approval of any section or authorization to migrate production pages.

- Use believable rooms, devices, furniture and cable connections at plausible scale. Prefer a few deliberate forms, one clear focal idea, consistent perspective/light and clean negative space.
- Supporting scope art is flatter than the hero: 2D/shallow 2.5D, matte surfaces, crisp silhouettes, restrained texture and soft ambient shadows. Use 2–4 major forms, distinct subjects/silhouettes and no cinematic glow or glossy 3D toy look.
- Keep private scenes softer and domestic; business scenes more structured and infrastructural. Maintain one family of materials, palette and illustration quality.
- Avoid impossible geometry, floating/duplicated objects, unterminated cables, random clutter, excessive symmetry, generic SaaS dashboards, cyber shields/hackers, server-room clichés and stock people. No embedded text, labels or fake UI.
- Keep important subjects readable through responsive crops. Reserve calm areas near copy; place busy visual detail away from text and frame edges. Hero art needs a broad quiet content zone; larger panels should support copy beside/below them or a restrained caption without heavy overlays.
- When available, reuse a stable image reference/style or seed across the set. Each prompt below must also state the relevant rules explicitly so it works without this document.

## Existing private file slots

Keep these exact paths until the planned application rename:

```text
ω┇Engine/public/images/concept-ii/private/
P1.png  — Whole-home editorial hero
P2.png  — Wi-Fi & Mesh coverage
P3.png  — Home-office connectivity
P4.png  — NAS & shared storage
P5.png  — Ethernet & cable routes
P6.png  — Moves, renovation & upgrades
```

Replacing these files updates the existing fixture without changing its content. The application resolves their URLs with the configured deployment base. Generated fallback art may remain visible when a scope image fails in the browser, but referenced missing files fail build-output validation; retain valid files. New P7–P9 and business images will need deliberate fixture media references when integrated, rather than automatically loading by filename.

## Source ratios versus rendered crops

Suggested ratios describe generation masters, not fixed layout settings. The private Workshop now uses a broad hero, an illustrated topic index and editorial chapters. Topic entries recompose from one featured image plus supporting entries on desktop to compact illustrated rows on mobile; the original portrait masters remain intact. Editorial images use taller desktop crops and landscape mobile crops, keeping the relevant device or room visible. Crop choices belong in reusable renderer styles, not fixture styling fields. Business image use is unchanged.

P1–P6 are reused in the current private pass. P2–P6 remain candidates pending Aykhan's acceptance. The former P7–P9 gallery requests are deferred, not needed for this composition; their standalone prompts remain below for a later decision.

## Current media tasks

### Private home-network page

- [x] **P1 — Private hero: whole-home network overview**
  - **Suggested source ratio:** `16:9` or `5:3`
  - **Use in page:** `hero.editorial-art`, in-flow environmental artwork
  - **Target path:** `ω┇Engine/public/images/concept-ii/private/P1.png`
  - **Status:** current hero test accepted as the working visual reference for the private Workshop page; no regeneration required before the next-section test.
  - **Prompt:**

```text
Use the VorOrt private-service art language: premium tactile editorial illustration; believable home/home-office architecture and devices at plausible scale; matte deep petrol/navy and warm off-white surfaces; restrained orange cable/route accents and sparse mint connectivity cues; consistent perspective and light; clean negative space; no embedded text, labels, fake UI, glossy toy-like 3D, cyber effects, stock people, or impossible geometry. Create a premium tactile editorial illustration of a Berlin apartment or home-office environment as one connected home network. Show a calm, design-led overview that brings together a home-office desk, a living area, shared storage or NAS, and a subtle Wi-Fi hub or router position. Suggest how the home network supports everyday work and living rather than focusing on technical hardware alone. Include one restrained orange cable route and subtle mint connectivity accents. Use elegant architectural forms, layered depth, deep petrol and navy shadows, off-white surfaces and soft lighting. The image should feel practical, trustworthy and modern, with generous negative space and no embedded text.
```

- [ ] **P2 — Private scope image: Wi-Fi and mesh coverage**
  - **Suggested source ratio:** `4:3`
  - **Use in page:** `scope.topic-index` lead entry and `explanation.options-guide` Wi-Fi illustration
  - **Target path:** `ω┇Engine/public/images/concept-ii/private/P2.png`
  - **DE production request — Task 3A:** `WLAN & Mesh` in `scope.topic-index`, section `themen`, linking to `#wlan-mesh` on `/leistungen/privatpersonen/wlan-heimnetz/`. Retain the Workshop placements above; the German detail chapter uses real text and no additional image.
  - **EN production reuse — Task 4A:** Same artwork in `scope.topic-index`, section `topics`, linking to `#wifi-coverage` on `/en/services/private/wifi-home-network/`. The English page follows the German composition and needs no separate artwork or generation request.
  - **Production crop:** lead topic image; broad desktop crop and compact mobile thumbnail. Supply a `4:3` master with the main subject near the centre, recognisable at 88px wide; allow generous crop-safe margins. Exact target remains `P2.png` above.
  - **Queue note:** The existing candidate is authorised for the current German and English working drafts. This unchecked request remains open for generation/replacement and explicit acceptance before publication; temporary integration is not media approval.
  - **Prompt:**

```text
Use the VorOrt private-service art language: premium tactile editorial illustration; believable home/home-office architecture and devices at plausible scale; matte deep petrol/navy and warm off-white surfaces; restrained orange cable/route accents and sparse mint connectivity cues; consistent perspective and light; clean negative space; no embedded text, labels, fake UI, glossy toy-like 3D, cyber effects, stock people, or impossible geometry. Create a **flat architectural editorial vignette** showing Wi-Fi coverage in a real home. Use two simplified room masses only — for example a home-office zone and a living zone — with one small router/access-point form and one or two thin mint signal arcs connecting the spaces. Keep the room geometry plausible and deliberately simplified. Use the same deep petrol/navy, warm off-white and muted material palette as the private hero, with no photographic depth of field and no glowing sci-fi effects. Use 3–4 major forms maximum, subtle matte texture, a consistent oblique/front perspective and generous negative space. It must still read clearly when shown very small. Generate a 4:3 master with the main subject near the centre and generous crop-safe margins. It must survive a shallow landscape strip and an 88px-wide mobile thumbnail; do not place essential detail or text at the edges.
```

- [ ] **P3 — Private scope image: home-office connectivity**
  - **Suggested source ratio:** `4:3`
  - **Use in page:** `scope.topic-index` and `explanation.editorial-media` home-office chapter
  - **Target path:** `ω┇Engine/public/images/concept-ii/private/P3.png`
  - **DE production request — Task 3A:** `Homeoffice & Geräte` in `scope.topic-index`, section `themen`, linking to `#homeoffice` on `/leistungen/privatpersonen/wlan-heimnetz/`. Retain the Workshop placements above; the German detail chapter uses real text and no additional image.
  - **EN production reuse — Task 4A:** Same artwork in `scope.topic-index`, section `topics`, linking to `#home-office` on `/en/services/private/wifi-home-network/`. The English page follows the German composition and needs no separate artwork or generation request.
  - **Production crop:** supporting topic image; wide desktop strip and compact mobile thumbnail. Supply a `4:3` master with the main subject near the centre, recognisable at 88px wide; allow generous crop-safe margins. Exact target remains `P3.png` above.
  - **Queue note:** The existing candidate is authorised for the current German and English working drafts. This unchecked request remains open for generation/replacement and explicit acceptance before publication; temporary integration is not media approval.
  - **Prompt:**

```text
Use the VorOrt private-service art language: premium tactile editorial illustration; believable home/home-office architecture and devices at plausible scale; matte deep petrol/navy and warm off-white surfaces; restrained orange cable/route accents and sparse mint connectivity cues; consistent perspective and light; clean negative space; no embedded text, labels, fake UI, glossy toy-like 3D, cyber effects, stock people, or impossible geometry. Create a **flat editorial home-office vignette** with one desk, one laptop/monitor and one subtle network connection cue. The idea is dependable everyday work, not a showcase of computer hardware. Use shallow 2.5D geometry, matte deep-petrol and warm-neutral surfaces, restrained mint connectivity and a tiny orange routing accent only if useful. Keep the silhouette strong and the object count low. No screen text, no decorative gadgets, no plants or accessories unless they improve the composition. One consistent perspective, one consistent light direction, no glossy 3D render look. Generate a 4:3 master with the main subject near the centre and generous crop-safe margins. It must survive a shallow landscape strip and an 88px-wide mobile thumbnail; do not place essential detail or text at the edges.
```

- [ ] **P4 — Private scope image: NAS and shared storage**
  - **Suggested source ratio:** `4:3`
  - **Use in page:** `scope.topic-index` and `explanation.editorial-media` NAS chapter
  - **Target path:** `ω┇Engine/public/images/concept-ii/private/P4.png`
  - **DE production request — Task 3A:** `NAS & gemeinsame Dateien` in `scope.topic-index`, section `themen`, linking to `#nas-speicher` on `/leistungen/privatpersonen/wlan-heimnetz/`. Retain the Workshop placements above; the German detail chapter uses real text and no additional image.
  - **EN production reuse — Task 4A:** Same artwork in `scope.topic-index`, section `topics`, linking to `#nas-storage` on `/en/services/private/wifi-home-network/`. The English page follows the German composition and needs no separate artwork or generation request.
  - **Production crop:** supporting topic image; wide desktop strip and compact mobile thumbnail. Supply a `4:3` master with the main subject near the centre, recognisable at 88px wide; allow generous crop-safe margins. Exact target remains `P4.png` above.
  - **Queue note:** The existing candidate is authorised for the current German and English working drafts. This unchecked request remains open for generation/replacement and explicit acceptance before publication; temporary integration is not media approval.
  - **Prompt:**

```text
Use the VorOrt private-service art language: premium tactile editorial illustration; believable home/home-office architecture and devices at plausible scale; matte deep petrol/navy and warm off-white surfaces; restrained orange cable/route accents and sparse mint connectivity cues; consistent perspective and light; clean negative space; no embedded text, labels, fake UI, glossy toy-like 3D, cyber effects, stock people, or impossible geometry. Create a **flat tactile editorial vignette** centred on one compact NAS/shared-storage unit, with only two supporting device silhouettes indicating that the storage is shared. Use simple believable geometry, matte materials and a shallow perspective. Preserve the private hero palette: deep petrol/navy, warm off-white, one restrained mint connection cue and optionally one thin orange route. No cloud icons, no floating files, no dashboard UI, no server-room styling, and no extra decorative objects. Generate a 4:3 master with the main subject near the centre and generous crop-safe margins. It must survive a shallow landscape strip and an 88px-wide mobile thumbnail; do not place essential detail or text at the edges.
```

- [ ] **P5 — Private scope image: Ethernet and cable routes**
  - **Suggested source ratio:** `4:3`
  - **Use in page:** `scope.topic-index` Ethernet entry; the detailed chapter uses a code-native connection diagram
  - **Target path:** `ω┇Engine/public/images/concept-ii/private/P5.png`
  - **DE production request — Task 3A:** `Ethernet & Kabelwege` in `scope.topic-index`, section `themen`, linking to `#netzwerkverkabelung` on `/leistungen/privatpersonen/wlan-heimnetz/`. Retain the Workshop placements above; the German detail chapter uses real text and no additional image.
  - **EN production reuse — Task 4A:** Same artwork in `scope.topic-index`, section `topics`, linking to `#ethernet-cabling` on `/en/services/private/wifi-home-network/`. The English page follows the German composition and needs no separate artwork or generation request.
  - **Production crop:** supporting topic image; wide desktop strip and compact mobile thumbnail. Supply a `4:3` master with the main subject near the centre, recognisable at 88px wide; allow generous crop-safe margins. Exact target remains `P5.png` above.
  - **Queue note:** The existing candidate is authorised for the current German and English working drafts. This unchecked request remains open for generation/replacement and explicit acceptance before publication; temporary integration is not media approval.
  - **Prompt:**

```text
Use the VorOrt private-service art language: premium tactile editorial illustration; believable home/home-office architecture and devices at plausible scale; matte deep petrol/navy and warm off-white surfaces; restrained orange cable/route accents and sparse mint connectivity cues; consistent perspective and light; clean negative space; no embedded text, labels, fake UI, glossy toy-like 3D, cyber effects, stock people, or impossible geometry. Create a **flat architectural detail vignette** of home Ethernet and cable routing. Show one simplified wall/surface, one network outlet, one router or access point, and a single clean orange cable route connecting them. The route must be physically plausible and terminate correctly. Use shallow perspective, matte off-white/petrol surfaces and restrained shadowing. No blueprint labels, no floating connectors, no extra cables, no glossy render effects. The orange path should be the dominant visual cue and remain readable at small size. Generate a 4:3 master with the main subject near the centre and generous crop-safe margins. It must survive a shallow landscape strip and an 88px-wide mobile thumbnail; do not place essential detail or text at the edges.
```

- [ ] **P6 — Private scope image: moves, renovations and upgrades**
  - **Suggested source ratio:** `4:3`
  - **Use in page:** `scope.topic-index` and `explanation.editorial-media` planning chapter
  - **Target path:** `ω┇Engine/public/images/concept-ii/private/P6.png`
  - **DE production request — Task 3A:** `Umzug & Modernisierung` in `scope.topic-index`, section `themen`, linking to `#heimnetz-planen` on `/leistungen/privatpersonen/wlan-heimnetz/`. Retain the Workshop placements above; the German detail chapter uses real text and no additional image.
  - **EN production reuse — Task 4A:** Same artwork in `scope.topic-index`, section `topics`, linking to `#network-planning` on `/en/services/private/wifi-home-network/`. The English page follows the German composition and needs no separate artwork or generation request.
  - **Production crop:** supporting topic image; wide desktop strip and compact mobile thumbnail. Supply a `4:3` master with the main subject near the centre, recognisable at 88px wide; allow generous crop-safe margins. Exact target remains `P6.png` above.
  - **Queue note:** The existing candidate is authorised for the current German and English working drafts. This unchecked request remains open for generation/replacement and explicit acceptance before publication; temporary integration is not media approval.
  - **Prompt:**

```text
Use the VorOrt private-service art language: premium tactile editorial illustration; believable home/home-office architecture and devices at plausible scale; matte deep petrol/navy and warm off-white surfaces; restrained orange cable/route accents and sparse mint connectivity cues; consistent perspective and light; clean negative space; no embedded text, labels, fake UI, glossy toy-like 3D, cyber effects, stock people, or impossible geometry. Create a **flat editorial vignette** of a home in transition for a move, renovation or network upgrade. Use a simple room corner with one desk/furniture mass, one moving box or renovation cue, and one clearly planned outlet/cable/network position. Keep the scene orderly rather than chaotic. Use shallow 2.5D geometry, matte surfaces, the same deep-petrol/warm-neutral palette as the hero, and one restrained orange planning route. Avoid random construction clutter, tools, decorative props or impossible architecture. Generate a 4:3 master with the main subject near the centre and generous crop-safe margins. It must survive a shallow landscape strip and an 88px-wide mobile thumbnail; do not place essential detail or text at the edges.
```

- [ ] **P7 — Private feature panel: plan the network around rooms and routines**
  - **Queue note:** Deferred. The v2.2.0 private composition uses P1–P6 and a code-native diagram; this asset is not required for the current review.
  - **Suggested source ratio:** `4:3`
  - **Use in page:** main large feature panel in the gallery
  - **Target path:** `ω┇Engine/public/images/concept-ii/private/P7.png`
  - **Prompt:**

```text
Use the VorOrt private-service art language: premium tactile editorial illustration; believable home/home-office architecture and devices at plausible scale; matte deep petrol/navy and warm off-white surfaces; restrained orange cable/route accents and sparse mint connectivity cues; consistent perspective and light; clean negative space; no embedded text, labels, fake UI, glossy toy-like 3D, cyber effects, stock people, or impossible geometry. Create a large premium tactile editorial illustration showing how a home network should be planned around rooms, routines and real usage. The composition should show a believable home layout with one or two larger spatial masses, a subtle Wi-Fi focal point, and a carefully integrated cable route. The scene should communicate that the network belongs to the home environment, not to a single router box. Use large calm forms, strong composition, deep petrol and navy atmosphere, off-white surfaces, a small mint connectivity glow and restrained orange routing. Make the image visually rich enough for a large panel, but still calm enough to sit with nearby text.
```

- [ ] **P8 — Private secondary panel: give files a sensible home**
  - **Queue note:** Deferred. The v2.2.0 private composition uses P1–P6 and a code-native diagram; this asset is not required for the current review.
  - **Suggested source ratio:** `4:3`
  - **Use in page:** secondary gallery panel
  - **Target path:** `ω┇Engine/public/images/concept-ii/private/P8.png`
  - **Prompt:**

```text
Use the VorOrt private-service art language: premium tactile editorial illustration; believable home/home-office architecture and devices at plausible scale; matte deep petrol/navy and warm off-white surfaces; restrained orange cable/route accents and sparse mint connectivity cues; consistent perspective and light; clean negative space; no embedded text, labels, fake UI, glossy toy-like 3D, cyber effects, stock people, or impossible geometry. Create a premium tactile editorial illustration about giving files, backups and shared storage a sensible place in the home network. Show a small storage hub or NAS connected naturally into the environment, with a calm sense of structure and order. Avoid software-dashboard tropes. The image should feel domestic, capable and quietly reassuring.
```

- [ ] **P9 — Private secondary panel: use cable where reliability matters**
  - **Queue note:** Deferred. The v2.2.0 private composition uses P1–P6 and a code-native diagram; this asset is not required for the current review.
  - **Suggested source ratio:** `4:3`
  - **Use in page:** secondary gallery panel
  - **Target path:** `ω┇Engine/public/images/concept-ii/private/P9.png`
  - **Prompt:**

```text
Use the VorOrt private-service art language: premium tactile editorial illustration; believable home/home-office architecture and devices at plausible scale; matte deep petrol/navy and warm off-white surfaces; restrained orange cable/route accents and sparse mint connectivity cues; consistent perspective and light; clean negative space; no embedded text, labels, fake UI, glossy toy-like 3D, cyber effects, stock people, or impossible geometry. Create a premium tactile editorial illustration showing that wired connections can still matter in a home network. Show a home-office or key device benefiting from a stable physical connection, expressed through elegant spatial composition and one restrained cable route. The image should communicate reliability and clarity, not complexity.
```

### Business office-network page

- [ ] **B1 — Business hero: office infrastructure overview**
  - **Suggested source ratio:** `16:9` or `5:3`
  - **Use in page:** hero banner artwork
  - **Target path:** `ω┇Engine/public/images/concept-ii/business/B1.png`
  - **Prompt:**

```text
Use the VorOrt business-service art language: premium tactile editorial illustration; believable small-office/studio architecture and infrastructure at plausible scale; structured rectilinear composition; matte deep navy/slate and warm off-white surfaces; restrained orange route accents and sparse mint status/connectivity cues; consistent perspective and light; clean negative space; no embedded text, labels, fake UI, datacentre clichés, cyber/security symbols, stock people, glossy toy-like 3D, or impossible geometry. Create a premium tactile editorial illustration of a small Berlin business environment as one connected workplace infrastructure system. Show a structured office or studio with work areas, a meeting or shared area, network hardware or core infrastructure, and subtle relationships between cabling, Wi-Fi coverage, shared services and secure access. The feeling should be organised, architectural and operational rather than domestic. Use deeper navy and slate tones than the private illustrations, off-white surfaces, mint status accents and restrained orange route details. Avoid datacentre imagery and avoid embedded text.
```

- [ ] **B2 — Business scope image: office Wi-Fi and work areas**
  - **Suggested source ratio:** `4:3`
  - **Use in page:** service-scope art panel
  - **Target path:** `ω┇Engine/public/images/concept-ii/business/B2.png`
  - **Prompt:**

```text
Use the VorOrt business-service art language: premium tactile editorial illustration; believable small-office/studio architecture and infrastructure at plausible scale; structured rectilinear composition; matte deep navy/slate and warm off-white surfaces; restrained orange route accents and sparse mint status/connectivity cues; consistent perspective and light; clean negative space; no embedded text, labels, fake UI, datacentre clichés, cyber/security symbols, stock people, glossy toy-like 3D, or impossible geometry. Create a premium tactile editorial illustration showing office Wi-Fi as part of real workplace use. Show multiple work areas or zones in a small office, with calm spatial logic and subtle connectivity. The emphasis should be on how people use the space, not on abstract wireless symbols. Keep the composition structured and architectural.
```

- [ ] **B3 — Business scope image: cabling, outlets and routes**
  - **Suggested source ratio:** `4:3`
  - **Use in page:** service-scope art panel
  - **Target path:** `ω┇Engine/public/images/concept-ii/business/B3.png`
  - **Prompt:**

```text
Use the VorOrt business-service art language: premium tactile editorial illustration; believable small-office/studio architecture and infrastructure at plausible scale; structured rectilinear composition; matte deep navy/slate and warm off-white surfaces; restrained orange route accents and sparse mint status/connectivity cues; consistent perspective and light; clean negative space; no embedded text, labels, fake UI, datacentre clichés, cyber/security symbols, stock people, glossy toy-like 3D, or impossible geometry. Create a premium tactile editorial illustration focused on business cabling, network outlets and cable routes. Show the physical infrastructure of a small office in an understandable way: wall or desk outlets, route logic, and the idea of a coherent underlying system. The image should feel technical but approachable, clean and organised.
```

- [ ] **B4 — Business scope image: managed network hardware**
  - **Suggested source ratio:** `4:3`
  - **Use in page:** service-scope art panel
  - **Target path:** `ω┇Engine/public/images/concept-ii/business/B4.png`
  - **Prompt:**

```text
Use the VorOrt business-service art language: premium tactile editorial illustration; believable small-office/studio architecture and infrastructure at plausible scale; structured rectilinear composition; matte deep navy/slate and warm off-white surfaces; restrained orange route accents and sparse mint status/connectivity cues; consistent perspective and light; clean negative space; no embedded text, labels, fake UI, datacentre clichés, cyber/security symbols, stock people, glossy toy-like 3D, or impossible geometry. Create a premium tactile editorial illustration of managed network hardware for a small business. Show a compact cabinet, rack, switch or related core infrastructure in a refined, simplified way. It should read instantly as organised infrastructure, not as a complicated server room. Use strong geometry, subtle lighting and disciplined composition.
```

- [ ] **B5 — Business scope image: shared storage and services**
  - **Suggested source ratio:** `4:3`
  - **Use in page:** service-scope art panel
  - **Target path:** `ω┇Engine/public/images/concept-ii/business/B5.png`
  - **Prompt:**

```text
Use the VorOrt business-service art language: premium tactile editorial illustration; believable small-office/studio architecture and infrastructure at plausible scale; structured rectilinear composition; matte deep navy/slate and warm off-white surfaces; restrained orange route accents and sparse mint status/connectivity cues; consistent perspective and light; clean negative space; no embedded text, labels, fake UI, datacentre clichés, cyber/security symbols, stock people, glossy toy-like 3D, or impossible geometry. Create a premium tactile editorial illustration showing shared storage and internal services as part of a business network. Show how shared resources belong to the office system: connected work areas, a central resource and a clear sense of structure. Keep it architectural and calm. Avoid cloud-app clichés and avoid fake dashboard interfaces.
```

- [ ] **B6 — Business scope image: secure access and connectivity**
  - **Suggested source ratio:** `4:3`
  - **Use in page:** service-scope art panel
  - **Target path:** `ω┇Engine/public/images/concept-ii/business/B6.png`
  - **Prompt:**

```text
Use the VorOrt business-service art language: premium tactile editorial illustration; believable small-office/studio architecture and infrastructure at plausible scale; structured rectilinear composition; matte deep navy/slate and warm off-white surfaces; restrained orange route accents and sparse mint status/connectivity cues; consistent perspective and light; clean negative space; no embedded text, labels, fake UI, datacentre clichés, cyber/security symbols, stock people, glossy toy-like 3D, or impossible geometry. Create a premium tactile editorial illustration representing secure access and business connectivity. Show the idea of a workplace network connecting to an authorised off-site user or another controlled point of access, using subtle visual relationships rather than security clichés. No shields, padlocks or hacker imagery. The result should feel professional, structured and trustworthy.
```

- [ ] **B7 — Business feature panel: start with the workplace, not a shopping list**
  - **Suggested source ratio:** `4:3`
  - **Use in page:** main large feature panel in the gallery
  - **Target path:** `ω┇Engine/public/images/concept-ii/business/B7.png`
  - **Prompt:**

```text
Use the VorOrt business-service art language: premium tactile editorial illustration; believable small-office/studio architecture and infrastructure at plausible scale; structured rectilinear composition; matte deep navy/slate and warm off-white surfaces; restrained orange route accents and sparse mint status/connectivity cues; consistent perspective and light; clean negative space; no embedded text, labels, fake UI, datacentre clichés, cyber/security symbols, stock people, glossy toy-like 3D, or impossible geometry. Create a large premium tactile editorial illustration showing that office network planning starts with the workplace itself: rooms, desks, users, cable routes and work zones. The composition should feel more architectural and system-oriented than the private version, with stronger rectilinear structure and a clear sense of premises-based planning. Use large calm forms, deep navy and slate atmosphere, off-white surfaces, mint focal accents and a restrained orange route. Make it rich enough for a large featured panel but calm enough to support nearby text.
```

- [ ] **B8 — Business secondary panel: make cabling and equipment understandable**
  - **Suggested source ratio:** `4:3`
  - **Use in page:** secondary gallery panel
  - **Target path:** `ω┇Engine/public/images/concept-ii/business/B8.png`
  - **Prompt:**

```text
Use the VorOrt business-service art language: premium tactile editorial illustration; believable small-office/studio architecture and infrastructure at plausible scale; structured rectilinear composition; matte deep navy/slate and warm off-white surfaces; restrained orange route accents and sparse mint status/connectivity cues; consistent perspective and light; clean negative space; no embedded text, labels, fake UI, datacentre clichés, cyber/security symbols, stock people, glossy toy-like 3D, or impossible geometry. Create a premium tactile editorial illustration about making business network infrastructure understandable. Show cabling, outlets, patching or compact managed hardware as part of one coherent office system. The image should communicate traceability and order, not just pieces of equipment.
```

- [ ] **B9 — Business secondary panel: connect storage and access to the way people work**
  - **Suggested source ratio:** `4:3`
  - **Use in page:** secondary gallery panel
  - **Target path:** `ω┇Engine/public/images/concept-ii/business/B9.png`
  - **Prompt:**

```text
Use the VorOrt business-service art language: premium tactile editorial illustration; believable small-office/studio architecture and infrastructure at plausible scale; structured rectilinear composition; matte deep navy/slate and warm off-white surfaces; restrained orange route accents and sparse mint status/connectivity cues; consistent perspective and light; clean negative space; no embedded text, labels, fake UI, datacentre clichés, cyber/security symbols, stock people, glossy toy-like 3D, or impossible geometry. Create a premium tactile editorial illustration showing how shared storage, internal resources and access fit into day-to-day office work. Show a few workplace zones in relationship with a central shared resource. The focus should be on organised business use rather than abstract networking.
```
