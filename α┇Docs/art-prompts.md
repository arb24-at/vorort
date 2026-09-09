# VorOrt Concept II — Art prompts

Use these prompts to generate the illustration set for the two Concept II Astro pages:

- `office-network-ii`
- `wifi-home-network-ii`

These prompts assume **Option A** is the chosen direction: **premium tactile editorial illustration**.

---

## Shared art direction

Use this shared direction for **every image in the set** unless a prompt overrides it. The approved private hero test establishes the visual world: deep blue evening tones, warm off-white interiors, restrained orange cable/routes, mint connectivity cues, and a calm premium Berlin-home atmosphere. Supporting illustrations should belong to that same world without trying to imitate the hero's photographic depth.

**Core style**

- premium tactile editorial web illustration
- flatter than the hero: **2D / shallow 2.5D**, not full 3D rendering
- simplified architectural forms with deliberate, believable geometry
- matte surfaces, restrained highlights, minimal reflections
- crisp silhouettes and controlled line weight
- soft ambient shadows only where they help separate forms
- subtle evening-light cues borrowed from the hero, but no cinematic glow overload
- calm, sophisticated, design-forward rather than playful
- limited number of objects per image; every object should have a reason to be there
- clean negative space and one clear focal idea
- a very light editorial/print grain or surface texture is welcome so the result feels authored rather than perfectly synthetic
- no stock-photo look
- no generic SaaS vector-icon look
- no glossy isometric-dashboard look
- no 3D plastic toy look
- no cartoon characters
- no embedded interface text, labels or typography inside the final illustration

**Reduce the obvious AI-generated look**

- prefer **plausible real-world construction** over decorative invention
- keep furniture, outlets, routers, cables and devices at believable scale
- do not duplicate or mutate objects, plants, shelves, sockets, cables or furniture
- avoid impossible room geometry, floating objects, mysterious extra doors/windows and cables that begin or end nowhere
- avoid excessive symmetry and over-centred compositions; use deliberate editorial asymmetry
- avoid random decorative clutter added only to make the scene look 'rich'
- keep connectivity graphics precise and sparse: one or two mint signal arcs/lines are enough
- use one consistent light direction and one consistent perspective system per image
- prefer flat colour blocks plus restrained texture over hyper-detailed generated surfaces
- the result should feel like an illustrator simplified a real environment after observing it, not like an image model invented an elaborate room

**Palette logic**

- deep navy / petrol / slate base
- off-white / stone / mist neutrals
- restrained orange accents for cable paths or action cues
- restrained mint accents for connectivity, status or active nodes
- avoid loud rainbow colour usage
- avoid brown/yellow retro styling

**Composition rules for web use**

- keep one clear focal idea per image
- use **large simple forms**, not tiny busy details
- protect a **quiet zone** where text may sit nearby or where crops may happen
- make edges and corners less visually busy than the centre of interest
- build images so they still read when scaled down on mobile
- where relevant, show relationships between rooms, devices, routes, storage and people’s usage patterns through objects or spatial cues — not through text labels

**What not to do**

- no floating shield/lock cybersecurity clichés
- no hacker imagery
- no random server-room/datacentre imagery unless specifically requested
- no glossy isometric dashboards
- no emoji-style icons
- no excessive tiny callouts
- no fake UI text inside the art

---


## Scope-ribbon style — P2–P6 and B2–B6

### Drop-in filenames for the private Concept II page

The private page is wired to pick these files up automatically from:

```text
ω┇Engine/public/images/concept-ii/private/
```

Use these exact filenames:

```text
P2.png  — Wi-Fi & Mesh coverage
P3.png  — Home-office connectivity
P4.png  — NAS & shared storage
P5.png  — Ethernet & cable routes
P6.png  — Moves, renovation & upgrades
```

Each image is used as a **4:3 cover** inside its scope panel. If a file is missing or fails to load, the existing generated placeholder remains visible underneath, so images can be added one by one without editing the page source.

These five images on each page are **small visual identifiers**, not miniature hero scenes. They should be noticeably flatter and simpler than P1/B1 while keeping the same palette and material mood.

- target look: high-end architectural/editorial vignette, shallow 2.5D or near-flat perspective
- **one focal object or one tiny spatial relationship** per image
- 2–4 major forms maximum; remove background decoration that will disappear at small sizes
- use a quiet off-white / mist / deep-petrol field rather than a fully furnished room
- preserve the hero family's deep navy/petrol, warm neutral, orange-route and mint-connectivity language
- no strong photographic depth of field, lens effects, bloom or cinematic haze
- no generic line-icon treatment; the images should still have material presence
- no tiny labels, diagrams or UI
- composition must remain legible when displayed at roughly icon-card size on desktop and mobile
- if people appear at all, use only simplified partial human presence; objects and environment are preferable
- make each image distinct by **subject and silhouette**, not by changing palette

## How the artwork will be used

**Private page**

- 1 hero artwork
- 5 small ribbon/service-scope artworks
- 3 gallery/panel artworks
- the first gallery artwork may also be reused in the outcome block if needed

**Business page**

- 1 hero artwork
- 5 small ribbon/service-scope artworks
- 3 gallery/panel artworks
- the first gallery artwork may also be reused in the outcome block if needed

To keep the system consistent, generate **12 master illustrations** total.
The smaller ribbon icons can be derived from the same visual ideas, but it is still best if each master image is strong enough to stand alone.

---

## Text-readability strategy for the art panels

The full-art panels should not rely on heavy text overlays.

Use this logic while generating:

- the art should carry the **main visual story**
- any nearby copy should sit **outside** the busiest part of the illustration whenever possible
- if an image may sit under or beside text, reserve a calmer area with lower contrast and fewer details
- hero artwork should allow for a broad readable content zone above it
- panel illustrations should look good with either:
  - copy below the image, or
  - copy beside the image, or
  - a small caption tag near an edge

---

## Checklist

### Private page — `wifi-home-network-ii`

- [x] **P1 — Private hero: whole-home network overview**
  - **Suggested ratio:** `16:9` or `5:3`
  - **Use in page:** hero banner artwork
  - **Status:** current hero test accepted as the working visual reference for the Concept II private page; no regeneration required before the next-section test.
  - **Prompt:**
    > Create a premium tactile editorial illustration of a Berlin apartment or home-office environment as one connected home network. Show a calm, design-led overview that brings together a home-office desk, a living area, shared storage or NAS, and a subtle Wi-Fi hub or router position. Suggest how the home network supports everyday work and living rather than focusing on technical hardware alone. Include one restrained orange cable route and subtle mint connectivity accents. Use elegant architectural forms, layered depth, deep petrol and navy shadows, off-white surfaces and soft lighting. The image should feel practical, trustworthy and modern, with generous negative space and no embedded text.

- [x] **P2 — Private scope image: Wi-Fi and mesh coverage**
  - **Suggested ratio:** `4:3`
  - **Use in page:** service-scope ribbon and/or small art panel
  - **Prompt:**
    > Create a **flat architectural editorial vignette** showing Wi-Fi coverage in a real home. Use two simplified room masses only — for example a home-office zone and a living zone — with one small router/access-point form and one or two thin mint signal arcs connecting the spaces. Keep the room geometry plausible and deliberately simplified. Use the same deep petrol/navy, warm off-white and muted material palette as the private hero, with no photographic depth of field and no glowing sci-fi effects. Use 3–4 major forms maximum, subtle matte texture, a consistent oblique/front perspective and generous negative space. It must still read clearly when shown very small.

- [x] **P3 — Private scope image: home-office connectivity**
  - **Suggested ratio:** `4:3`
  - **Use in page:** service-scope ribbon and/or small art panel
  - **Prompt:**
    > Create a **flat editorial home-office vignette** with one desk, one laptop/monitor and one subtle network connection cue. The idea is dependable everyday work, not a showcase of computer hardware. Use shallow 2.5D geometry, matte deep-petrol and warm-neutral surfaces, restrained mint connectivity and a tiny orange routing accent only if useful. Keep the silhouette strong and the object count low. No screen text, no decorative gadgets, no plants or accessories unless they improve the composition. One consistent perspective, one consistent light direction, no glossy 3D render look.

- [x] **P4 — Private scope image: NAS and shared storage**
  - **Suggested ratio:** `4:3`
  - **Use in page:** service-scope ribbon and/or small art panel
  - **Prompt:**
    > Create a **flat tactile editorial vignette** centred on one compact NAS/shared-storage unit, with only two supporting device silhouettes indicating that the storage is shared. Use simple believable geometry, matte materials and a shallow perspective. Preserve the private hero palette: deep petrol/navy, warm off-white, one restrained mint connection cue and optionally one thin orange route. No cloud icons, no floating files, no dashboard UI, no server-room styling, and no extra decorative objects.

- [x] **P5 — Private scope image: Ethernet and cable routes**
  - **Suggested ratio:** `4:3`
  - **Use in page:** service-scope ribbon and/or small art panel
  - **Prompt:**
    > Create a **flat architectural detail vignette** of home Ethernet and cable routing. Show one simplified wall/surface, one network outlet, one router or access point, and a single clean orange cable route connecting them. The route must be physically plausible and terminate correctly. Use shallow perspective, matte off-white/petrol surfaces and restrained shadowing. No blueprint labels, no floating connectors, no extra cables, no glossy render effects. The orange path should be the dominant visual cue and remain readable at small size.

- [x] **P6 — Private scope image: moves, renovations and upgrades**
  - **Suggested ratio:** `4:3`
  - **Use in page:** service-scope ribbon and/or small art panel
  - **Prompt:**
    > Create a **flat editorial vignette** of a home in transition for a move, renovation or network upgrade. Use a simple room corner with one desk/furniture mass, one moving box or renovation cue, and one clearly planned outlet/cable/network position. Keep the scene orderly rather than chaotic. Use shallow 2.5D geometry, matte surfaces, the same deep-petrol/warm-neutral palette as the hero, and one restrained orange planning route. Avoid random construction clutter, tools, decorative props or impossible architecture.

- [ ] **P7 — Private feature panel: plan the network around rooms and routines**
  - **Suggested ratio:** `4:3`
  - **Use in page:** main large feature panel in the gallery
  - **Prompt:**
    > Create a large premium tactile editorial illustration showing how a home network should be planned around rooms, routines and real usage. The composition should show a believable home layout with one or two larger spatial masses, a subtle Wi-Fi focal point, and a carefully integrated cable route. The scene should communicate that the network belongs to the home environment, not to a single router box. Use large calm forms, strong composition, deep petrol and navy atmosphere, off-white surfaces, a small mint connectivity glow and restrained orange routing. Make the image visually rich enough for a large panel, but still calm enough to sit with nearby text.

- [ ] **P8 — Private secondary panel: give files a sensible home**
  - **Suggested ratio:** `4:3`
  - **Use in page:** secondary gallery panel
  - **Prompt:**
    > Create a premium tactile editorial illustration about giving files, backups and shared storage a sensible place in the home network. Show a small storage hub or NAS connected naturally into the environment, with a calm sense of structure and order. Avoid software-dashboard tropes. The image should feel domestic, capable and quietly reassuring.

- [ ] **P9 — Private secondary panel: use cable where reliability matters**
  - **Suggested ratio:** `4:3`
  - **Use in page:** secondary gallery panel
  - **Prompt:**
    > Create a premium tactile editorial illustration showing that wired connections can still matter in a home network. Show a home-office or key device benefiting from a stable physical connection, expressed through elegant spatial composition and one restrained cable route. The image should communicate reliability and clarity, not complexity.

### Business page — `office-network-ii`

- [ ] **B1 — Business hero: office infrastructure overview**
  - **Suggested ratio:** `16:9` or `5:3`
  - **Use in page:** hero banner artwork
  - **Prompt:**
    > Create a premium tactile editorial illustration of a small Berlin business environment as one connected workplace infrastructure system. Show a structured office or studio with work areas, a meeting or shared area, network hardware or core infrastructure, and subtle relationships between cabling, Wi-Fi coverage, shared services and secure access. The feeling should be organised, architectural and operational rather than domestic. Use deeper navy and slate tones than the private illustrations, off-white surfaces, mint status accents and restrained orange route details. Avoid datacentre imagery and avoid embedded text.

- [ ] **B2 — Business scope image: office Wi-Fi and work areas**
  - **Suggested ratio:** `4:3`
  - **Use in page:** service-scope ribbon and/or small art panel
  - **Prompt:**
    > Create a premium tactile editorial illustration showing office Wi-Fi as part of real workplace use. Show multiple work areas or zones in a small office, with calm spatial logic and subtle connectivity. The emphasis should be on how people use the space, not on abstract wireless symbols. Keep the composition structured and architectural.

- [ ] **B3 — Business scope image: cabling, outlets and routes**
  - **Suggested ratio:** `4:3`
  - **Use in page:** service-scope ribbon and/or small art panel
  - **Prompt:**
    > Create a premium tactile editorial illustration focused on business cabling, network outlets and cable routes. Show the physical infrastructure of a small office in an understandable way: wall or desk outlets, route logic, and the idea of a coherent underlying system. The image should feel technical but approachable, clean and organised.

- [ ] **B4 — Business scope image: managed network hardware**
  - **Suggested ratio:** `4:3`
  - **Use in page:** service-scope ribbon and/or small art panel
  - **Prompt:**
    > Create a premium tactile editorial illustration of managed network hardware for a small business. Show a compact cabinet, rack, switch or related core infrastructure in a refined, simplified way. It should read instantly as organised infrastructure, not as a complicated server room. Use strong geometry, subtle lighting and disciplined composition.

- [ ] **B5 — Business scope image: shared storage and services**
  - **Suggested ratio:** `4:3`
  - **Use in page:** service-scope ribbon and/or small art panel
  - **Prompt:**
    > Create a premium tactile editorial illustration showing shared storage and internal services as part of a business network. Show how shared resources belong to the office system: connected work areas, a central resource and a clear sense of structure. Keep it architectural and calm. Avoid cloud-app clichés and avoid fake dashboard interfaces.

- [ ] **B6 — Business scope image: secure access and connectivity**
  - **Suggested ratio:** `4:3`
  - **Use in page:** service-scope ribbon and/or small art panel
  - **Prompt:**
    > Create a premium tactile editorial illustration representing secure access and business connectivity. Show the idea of a workplace network connecting to an authorised off-site user or another controlled point of access, using subtle visual relationships rather than security clichés. No shields, padlocks or hacker imagery. The result should feel professional, structured and trustworthy.

- [ ] **B7 — Business feature panel: start with the workplace, not a shopping list**
  - **Suggested ratio:** `4:3`
  - **Use in page:** main large feature panel in the gallery
  - **Prompt:**
    > Create a large premium tactile editorial illustration showing that office network planning starts with the workplace itself: rooms, desks, users, cable routes and work zones. The composition should feel more architectural and system-oriented than the private version, with stronger rectilinear structure and a clear sense of premises-based planning. Use large calm forms, deep navy and slate atmosphere, off-white surfaces, mint focal accents and a restrained orange route. Make it rich enough for a large featured panel but calm enough to support nearby text.

- [ ] **B8 — Business secondary panel: make cabling and equipment understandable**
  - **Suggested ratio:** `4:3`
  - **Use in page:** secondary gallery panel
  - **Prompt:**
    > Create a premium tactile editorial illustration about making business network infrastructure understandable. Show cabling, outlets, patching or compact managed hardware as part of one coherent office system. The image should communicate traceability and order, not just pieces of equipment.

- [ ] **B9 — Business secondary panel: connect storage and access to the way people work**
  - **Suggested ratio:** `4:3`
  - **Use in page:** secondary gallery panel
  - **Prompt:**
    > Create a premium tactile editorial illustration showing how shared storage, internal resources and access fit into day-to-day office work. Show a few workplace zones in relationship with a central shared resource. The focus should be on organised business use rather than abstract networking.

---

## Optional consistency note for the image model

If the generator supports a reusable seed or a consistent reference style, keep it as stable as possible across the full set so that:

- the material feel stays consistent
- line weight and geometry stay consistent
- the same world seems to exist across private and business pages
- private feels softer and more domestic
- business feels more structured and infrastructural

---

## Progress tracker

- [ ] Private set complete
- [ ] Business set complete
- [ ] Hero images placed in page
- [ ] Scope ribbon images placed in page
- [ ] Gallery images placed in page
- [ ] Mobile crops checked
- [ ] Desktop crops checked
- [ ] Text readability checked against live layouts

