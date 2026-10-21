---
version: 2.3.13
---

# VorOrt worker instructions

Read this first. These rules apply equally to ChatGPT Chats working through Google Drive and repository agents. `VorOrt` is an internal project name; only Aykhan may choose it as a public brand.

## Workflow and authority

Aykhan is Product Owner and the only approval authority. The normal stages are separate Chats, with supporting roles combined when useful:

| Stage | Role and instructions | Deliverable |
| --- | --- | --- |
| α | [Research & SEO](β┇Roles/α┇Research%20&%20SEO.md) | Evidence, intent and page ownership |
| β | [Blueprint Architect](β┇Roles/β┇Blueprint%20Architect.md) | Site-wide map, then detailed bilingual page blueprint |
| γ | [Content Generator](β┇Roles/γ┇Content%20Generator.md) | English, then German source content |
| δ | [Design](β┇Roles/δ┇Design.md) | Composition, reusable sections/blocks and responsive quality |
| ε | [Implementation](β┇Roles/ε┇Implementation.md) | Validated content and shared application changes |
| ζ | [QA](β┇Roles/ζ┇QA.md) | Separate review with Aykhan and verification evidence |

1. Research supports the site-wide blueprint; obtain Aykhan's recorded approval before page authoring.
2. Use **one detailed bilingual blueprint per page family**. Individual blueprints can be approved as ready; do not wait for the whole portfolio. Record the approved version and decision reference in that file.
3. Approved meaning authorises English creation, then German, including explicitly identified Experimental recipes/blocks for that page. This permits a trial, **not lifecycle promotion**. Canonical registry states remain unchanged until Aykhan separately approves them.
4. Content, design and implementation follow the approved purpose, scope, journey and essential interactions. Routine wording, selected supported blocks and compatible design refinements can change without another blueprint gate. Meaningful changes to those commitments return to blueprint review. Record new experimental additions for review rather than treating container approval as permission.
5. QA is a separate task with Aykhan. Pages remain work in progress; there is no permanent final-page approval gate. Later revision cycles receive new bounded tasks/bundles.

This process replaces the former autonomous German-first, one-pass programme and its English-only workflow exceptions. Historical completed work and explicit existing production trial permissions remain valid; pending blueprints are not retroactively approved. A named current assignment overrides queue order, not approval truth. The explicit v2.3.0 workflow/Design Lab migration is authorised without approving its page-blueprint drafts.

## Start, scope and sources

Read every active role file, then only relevant context. Select the minimum useful roles when none are assigned. Roles are expertise, not hard permission boundaries.

| Source | Read when / authority |
| --- | --- |
| `α┇Docs/α┇Project.md` | Business/service truth, constraints and architecture pointers |
| `α┇Docs/ω┇☑️┇Tasks.md` | Assignment, priority, completion; all Chats and agents use this board |
| `α┇Docs/β┇Collaboration.md` | Before changing source: current handoff, decisions and pending checks |
| `γ┇Blueprints/` | Site-wide and matching bilingual page plan; inspect approval/version and actual content pointers |
| `α┇Docs/β┇Roadmap.md` | Direction, deferred capabilities and release dependencies |
| `α┇Docs/ω┇Media-Queue.md` | Media requests, standalone prompts and acceptance |
| `ω┇Engine/src/data/seo-keywords.yml` | Keyword evidence/status and locale ownership |
| `ω┇Engine/src/design-system/section-recipes.ts` | Recipe/block lifecycle, schemas, compatibility and flexible guidance |

Read current target content and affected shared consumers before editing. Do not create another roadmap, approval catalogue, media tracker or content store. Do not edit the external Obsidian Chain unless requested.

## Work and evidence

Chats may edit canonical content, schemas, components, renderers and shared styles through Drive. Read the complete latest target immediately before editing, preserve unrelated changes, then fetch/read back the result. Shared changes need rationale, affected consumers and verification scope. Missing shell/browser access does not prevent source completion.

Use evidence terms literally:

- **Source/readback verified:** written source was read back successfully.
- **Repository validated:** the stated commands actually passed.
- **Browser verified:** rendered behaviour was inspected at stated sizes/conditions.
- **Git verified:** the stated Git actions actually ran.
- **Deployed verified:** the deployed result was checked after deployment.

Never substitute one for another. If unavailable, add a narrow `RV-###` item to Collaboration with affected files, checks and known risks. Source-complete content tasks may be checked while QA remains open. Do not invent a build, commit, delivery, approval or launch.

## Shared design and implementation

Approved sections are **flexible block palettes, not mandatory specimen layouts**. Select, reorder, repeat and omit supported blocks while preserving semantic/accessibility/interaction contracts. New blocks carry their own lifecycle; an Experimental block inside an Approved section stays Experimental. Unregistered ideas are Proposed and unimplemented.

Compatible refinements retain shared IDs and propagate to consumers. Document effects. Changes to meaning or required fields need affected-consumer review **before migration**; preserve the predecessor, develop a new Experimental identity where material, then migrate deliberately after Aykhan's decision. No silent approval or breaking replacement.

Prefer Astro-native static HTML/CSS and minimal JavaScript. Inspect existing components/tokens/contracts first. Keep editable copy/facts in validated records and named presentation variants in the shared design layer; no arbitrary CSS controls in content. Preserve routes, locale pairing, base-aware links/assets, forms and unrelated consumers.

## Repository and validation

- `ω┇Engine/`: application, dependencies, assets and ignored build output.
- `α┇Docs/`: project documents; `β┇Roles/`: all role instructions; `γ┇Blueprints/`: planning documents.
- `.github/workflows/astro.yml` stays at repository root. Never touch `.git` internals.
- With shell access, inspect Git status and canonical version before edits. Preserve unrelated work.

Run application commands from `ω┇Engine/`: `npm ci` when dependencies need installation, `npm run dev` for preview, `npm run validate` for material application changes. Prefer focused checks during iteration; one broader final run normally suffices. Browser review is required when responsive/visual/interaction behaviour changes, using representative affected routes and desktop/mobile sizes. Do not repeat unchanged checks without a reason. Before committing, run `git diff --check` and `git status --short`.

## Finish and Git handoff

Complete exactly the assigned bounded task, update its source-completion or QA checkbox accurately, and leave a concise handoff. If blocked by an approval/fact, leave the dependent work incomplete and name the blocker. Do not silently skip to another task.

Canonical version is this file's frontmatter. Only Aykhan changes major `X`; substantial updates increment `Y` and reset `Z`, patches increment `Z`. One logical local commit gets one bump; reuse a bump already belonging to it. Commit format: `VorOrt vX.Y.Z: message`. A Drive Chat without Git leaves the commit/version action explicitly for the repository worker; do not create repeated bumps for one pending change.

Report source changes, blueprint/SEO/design decisions, shared impact, actual evidence, outstanding dependencies and commit hash (or explicitly no commit). Then stop. **Never push, deploy or start the next task by default.**
