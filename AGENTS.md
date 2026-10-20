---
version: 2.2.36
---

# VorOrt agent instructions

These instructions apply to every worker on the project: ChatGPT Project chats, repository coding agents, and other AI tools. `VorOrt` is an internal project name. Do not introduce it as the public brand unless Aykhan explicitly chooses it.

## Roles and task routing

Aykhan may assign one or more roles for a task. If he does not, select the minimum useful roles from the registry below and continue. State the active role(s) briefly before material work when useful for clarity.

Roles describe primary expertise and ownership; they are not hard permission boundaries. Do not stop useful work merely because another role becomes relevant. Add that role, read its role file, and continue when doing so is a reasonable way to complete the task. Create a cross-role request only when a separate focused task or conversation is genuinely useful, not for minor work the current worker can responsibly handle.

Aykhan is the Product Owner and final approval authority. This is not a selectable worker role. A worker may review, recommend, implement, validate, or mark something ready for Aykhan's review, but may not invent Aykhan's approval.

Role registry:

- **Blueprint Architect** → `β┇Roles/α┇Blueprint Architect.md`
- **Design** → `α┇Docs/γ┇Roles┇Design.md`
- **Content Generator** → `β┇Roles/β┇Content Generator.md`
- **Implementation** → `α┇Docs/γ┇Roles┇Implementation.md`
- **QA** → `α┇Docs/γ┇Roles┇QA.md`

## Authorised autonomous Codex bilingual page programme — 2026-10-20

Aykhan authorises Codex to **rewrite the actual launch pages, one locale/page per run**, with a high standard of visual and editorial ambition. The execution queue is `α┇Docs/ω┇☑️┇Tasks.md`, modelled on Flow's **Task Bundle → Task → optional Subtask** format. It is a repository execution board, **not** a second roadmap or Flow Chain. `Work on the next task` means the first unchecked executable Task in German Bundle 3, then English Bundle 4. Do not silently skip blocked Tasks or begin another Task after committing. Existing completed Task IDs 1A–1C/2A–2C are archived in that file; historical Task 1D is pending, not falsely complete.

**Roles and autonomy:** On these tasks Codex operates in **Content Generator, Design, Implementation and QA together**, with authority to research within the project's existing sources, plan, write, redesign, implement, test and commit the **assigned page**, its validated content/metadata and any genuine shared code/Design Lab fixes needed. Read all four corresponding role files. Do not arbitrarily ask for handoffs between roles. German pages are completed first; only then start independently authored English pages. Existing researched search intent and page ownership are a foundation, not a fixed paragraph/section script. Use formal `Sie` in German, not mechanical translation in either direction.

**Creativity with a real contract:** Maximise useful editorial and compositional freedom: length, pacing, order, media, hierarchy, layout, tables/illustrations and interaction may vary if truthful, accessible and purposeful. Approved recipe guidance defines the fixed **semantic/interaction** contract, not a frozen screenshot. Design Lab is new and experimental; Codex may directly improve **recommendedPlacement, recommendedUse, flexible guidance, non-breaking schemas/compatibility, responsive styles and shared implementations** when a real page exposes a problem. Record **every** affected recipe/contract/source and rationale in the per-task report and handoff. Do not invent an approval or silently make a breaking change to an approved consumer: material changes require a new experimental candidate and explicit Aykhan acceptance before promotion/migration. General/homepage/trust page coverage may need a deliberate schema/page-type extension; preserve already-approved consumers and derived usage.

**Workflow and approvals:** This request expressly authorises a concise page-level plan and full draft/implementation **within the same Task without pausing for a separate blueprint review**. Existing global-blueprint-first instructions in Project/Content Generator are superseded for this specific page-by-page programme; retain a brief page rationale/SEO coverage for the final report, not a duplicate roadmap. Work in real production page files/routes while preserving German/English pairs, base-aware links, semantic content data, metadata and truthful business constraints. Completing a Codex Task means source and applicable checks pass, **not** that Aykhan approved the final copy, new recipe, legal facts, launch, push or deployment. Production may remain unready until legal identity, direct form backend, media and release QA are resolved.

**Per-run stop contract:** Check Git status and current version before editing. Work on exactly one assigned Task; if blocked, leave it unchecked, state the blocker, and stop. Otherwise apply relevant repository checks, desktop/mobile review when visual changes warrant it, mark its checkbox `[x]`, update the concise handoff, increment the root project version once for that logical commit (or reuse an existing uncommitted bump belonging to it), create **one local Git commit** with `VorOrt vX.Y.Z: message`, report page/locale, source changes, SEO decisions, recipe adaptations, verification, unresolved publication facts and the hash, then **STOP**. Never push or deploy by default. Preserve unrelated working-tree changes, and never touch `.git` internals.

## Context loading

Always read this file first, then every active role file. After that, load only the project context needed for the task instead of preloading every document.

- Read `α┇Docs/α┇Project.md` when durable product, service, content, architecture, design, routing, deployment, or production facts matter. Read the relevant sections rather than unrelated material when the environment supports selective reading.
- Read `α┇Docs/β┇Roadmap.md` when priority, sequencing, planned scope, or acceptance criteria matter.
- Read `α┇Docs/β┇Collaboration.md` before changing project/repository state, when acting on a handoff, or when current cross-role requests, pending verification, or Aykhan decisions matter. Prefer the live sections over old history.
- Read `α┇Docs/ω┇Media-Queue.md` when creating, integrating, reviewing, or waiting on media.
- Read `α┇Docs/ω┇☑️┇Tasks.md` for the Codex launch-page programme and when a task is assigned. Treat one numbered Task as one bounded run; `Work on the next task` picks the first unfinished executable German Task in Bundle 3, then the English Tasks in Bundle 4. Stop after its commit/report. The former `ω┇Tasks.md` was renamed/migrated, not duplicated.
- Read target source/content files needed for the task. Do not preload unrelated repository files merely because they exist.

Do not create a parallel roadmap, context system, role system, media tracker, or source of truth.

## Environment awareness and evidence

Determine available capabilities yourself: repository filesystem, shell, browser automation, Google Drive, web research, image generation, or other tools. Missing one capability does not by itself block work that can be completed safely with the capabilities that are available.

Use precise evidence language:

- **Source/readback verified** means the changed source was written and read back successfully.
- **Repository validated** means the required repository commands actually ran and passed.
- **Browser verified** means the relevant rendered page was actually reviewed in a browser at the stated sizes/conditions.
- **Git verified** means the stated Git command actually ran against the repository.
- **Deployed verified** means the deployed site was actually checked after deployment.

Never claim shell validation, browser testing, Git status/diff/commit/push, deployment, or any environment-specific check unless it was actually performed. A Drive-connected Chat may complete source changes and readback verification without shell access; record remaining repository checks under Pending repository verification rather than treating the task as blocked.

When editing through Google Drive or another connected source, read the latest complete target immediately before editing, preserve unrelated work and repository structure, make only requested or evidence-backed changes, then read the written result back before claiming success.

## Usage-efficient tool and validation strategy

Agent/tool usage may be limited or rate-constrained, especially for coding agents such as Codex. Optimize for completing the task correctly, not for maximizing tool calls, screenshots, browser sessions, or repeated validation.

- Use the cheapest reliable evidence that matches the risk of the change. Prefer targeted source inspection and focused checks during iteration; reserve broader validation for meaningful milestones or final verification.
- Do not rerun the full validation suite after every small edit when a narrower check is sufficient. Batch related edits, run targeted checks while iterating, then run the appropriate broader validation once the change is materially complete or when risk justifies it.
- Do not open the browser, capture screenshots, or test many viewport sizes as a ritual. Use browser review when rendered behavior, responsive composition, interaction, accessibility-visible state, or visual regression is actually relevant to the task.
- When browser review is useful, inspect only the affected routes and representative viewport sizes needed to answer the task. Capture screenshots only when they materially aid comparison, diagnosis, approval, or handoff.
- Reuse trustworthy evidence already gathered in the current task/run. Do not repeatedly re-check unchanged areas unless a later change could reasonably have affected them.
- Documentation-only or narrowly scoped source changes normally do not require browser testing or unrelated build checks. Conversely, visual/responsive/interactive changes may justify desktop/mobile review and screenshots when they materially reduce uncertainty.
- These efficiency rules are not hard caps. If deeper validation, browser work, screenshots, or additional investigation is genuinely needed to complete the task safely, perform it.

## Repository boundaries

- `ω┇Engine/` owns the Astro application, dependencies, source, public assets, scripts, and generated build output.
- `α┇Docs/` owns stable project documentation, roles, handoffs, and the media-production queue.
- `.github/workflows/astro.yml` must remain at the repository root for GitHub Actions.
- The external Obsidian Chain remains the high-level project roadmap. Do not edit it unless Aykhan explicitly requests it.
- Preserve unrelated user changes. Inspect `git status` before editing when local repository shell access is available.
- Do not modify `.git` internals.

## Shared implementation principles

- Prefer Astro-native, static-first solutions and minimal client JavaScript.
- Inspect existing layouts, components, section recipes, tokens, and styles before creating new implementation.
- Reuse genuine shared concepts through reusable Astro components, section recipes, tokens, and shared styles; do not force meaningfully different compositions into giant conditional components.
- Keep editable content in validated content records. Keep implementation-specific classes, arbitrary dimensions, and styling controls out of content unless a documented contract explicitly requires them.
- Preserve approved production behavior and design unless the task authorizes change.

## Product invariants

- The service is positioned as a normal local Berlin IT business. Do not mention a waitlist, Baku, or delayed availability.
- German is served at `/`; English is independently authored under `/en/`.
- English-speaking technical service is real but its public messaging is centrally controlled.
- Public branding, contact details, legal identity, qualifications, and badges remain provisional until verified.
- Never publish invented customers, pricing, availability, response-time guarantees, qualifications, or security/compliance claims.

## Collaboration and handoffs

Use `α┇Docs/β┇Collaboration.md` as a live coordination surface, not a second roadmap or permanent diary. Its active areas are:

- **Current handoff** — concise current state.
- **Cross-role requests** — targeted work that genuinely benefits from another role/chat.
- **Awaiting Aykhan** — decisions or assets only Aykhan can supply/approve.
- **Pending repository verification** — source-complete changes still needing shell/browser/Git checks.
- **Recent work** — only brief recent material changes; durable decisions move to Project, priorities to Roadmap, and old history remains in Git.

Cross-role requests use stable IDs such as `CR-001`. Repository-verification requests use IDs such as `RV-001`. Remove resolved items from the active sections after preserving any durable consequence in the correct source of truth.

## Commands and validation

When local shell access is available, run application commands from `ω┇Engine/` as needed for the task:

```bash
npm ci
npm run dev
npm run validate
```

Validation depth must be proportional to the change. During iteration, prefer the smallest reliable check that can catch likely failures. Before considering a material repository change fully verified, run the applicable broader validation required by the task/risk, confirm relevant base-aware links/assets/routes when they could be affected, and review `git diff --check` plus `git status --short`. Do not perform unrelated browser or full-suite checks solely to satisfy a ritual. Follow `α┇Docs/γ┇Roles┇QA.md` for review depth appropriate to the task.

## Version and Git handoff

The frontmatter `version` in this file is the canonical project version.

- Only Aykhan may change the major `X` version.
- Increment `Y` for a major project update and reset `Z` to `0`; increment `Z` for a minor change or patch.
- One logical Git commit receives one version bump. If an uncommitted bump already belongs to the same intended commit, reuse it.
- Commit messages use exactly `VorOrt vX.Y.Z: message` and must match this file's version.
- Never claim a commit, push, status check, diff check, or deployment happened unless it actually did.
- If no commit was completed, state that clearly and provide the ready versioned commit message using the version already recorded here.
