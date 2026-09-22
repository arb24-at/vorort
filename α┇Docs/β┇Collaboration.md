# VorOrt collaboration handoff

Last updated: 2026-09-22

## Current handoff

- **Version and branch:** `2.2.4` in root `AGENTS.md`; local branch `main` was previously verified. No new Git verification, commit, push or deployment is claimed for this Drive-only documentation/worklist patch.
- **Private Workshop:** the English home-network prototype now has ten sections: editorial hero, five-topic index, Wi-Fi options, Ethernet connection diagram, home office, NAS, planning/troubleshooting, four-stage process, eight native FAQs and enquiry. Content uses the repository's English research and canonical service facts; scope boundaries sit beside their relevant topics.
- **Recipes:** `process.staged-path` and `faq.accordion` are now explicitly approved for service pages across private and business Workshop contexts. The newer private recipes, `contact.enquiry`, and retained predecessor recipes remain experimental; nothing is deprecated.
- **Media:** P1–P6 reused with explicit image dimensions and responsive WebP derivatives; masters unchanged. P1 remains the accepted working reference, P2–P6 await Aykhan's acceptance, P7–P9 are deferred. Placement notes remain in `ω┇Media-Queue.md`.
- **Verification:** full repository validation previously passed for the v2.2.0 private Workshop implementation (31 HTML pages, 23 sitemap URLs, 46 invalid-content cases, registry/lifecycle/usage checks). The v2.2.2 approval/status change is source/readback verified only; repository validation has not been rerun in this Chat.
- **Browser review:** the v2.2.0 private canvas was previously reviewed at 1440, 768, 390 and 320px. No browser review was run for the v2.2.2 lifecycle-status change; Aykhan is using this approval as an Approved Sections UI check.
- **Next action:** use the universal `ω┇Tasks.md` board. The next bounded coding stage is **Task 1A**; later stages 1B and 1C should only start when Aykhan explicitly assigns them.

## Cross-role requests

None.

## Awaiting Aykhan

- Review/accept outstanding items in `ω┇Media-Queue.md` as they become relevant to page review.
- Review the v2.2.0 private prototype: hero balance, topic navigation, chapter rhythm, diagram clarity and mobile/contact composition. Remaining recipe approvals stay explicit, separate Aykhan decisions.
- Final brand/domain, production contact/legal facts, qualification evidence and Berlin travel policy remain future launch inputs tracked in `β┇Roadmap.md`.

## Pending repository verification

### RV-001 — v2.1.0 collaboration and Design Lab governance

- **Source state:** Drive changes were read back after writing; repository-shell evidence is not available in this Chat.
- **Verify:** run `npm run validate` from `ω┇Engine/`, then `git diff --check` and `git status --short` from the repository root.
- **Review:** open Page Workshop and Approved Sections in the local browser; confirm the Lab still renders at representative desktop/tablet/mobile widths and that no production route or visual output changed unexpectedly.
- **Contract checks:** confirm recipe guidance fields compile, `supersedes` rejects unknown/self/cross-kind/cyclic relationships, Approved Sections exposes pending replacement candidates, derived Workshop usage still works, and changing a recipe to `approved` no longer requires editing a fixed-count assertion.
- **Scope:** validate the existing v2.1.0 change first. Do not redesign, rewrite content or refactor unrelated code unless an actual failure requires it.

### RV-002 — v2.2.2 first Approved Sections lifecycle test

- **Source state:** `process.staged-path` and `faq.accordion` were promoted to `approved` in the canonical recipe registry and read back successfully from Drive.
- **Verify:** run `npm run validate` from `ω┇Engine/`, then `git diff --check` and `git status --short` from the repository root.
- **Design Lab check:** open `/design-lab/approved/` and confirm exactly these two recipes appear as approved, with active usage derived from both current Workshop fixtures and no manually maintained approval list.

## Recent work

### 2026-09-22 — ChatGPT — v2.2.4 universal staged task board

- Replaced the job-specific Approved Sections worklist with universal `ω┇Tasks.md`, using stable numbered tasks and substantial lettered stages so Aykhan can assign work such as **Task 1A** without asking Codex to consume a whole multi-stage job at once.
- Task 1 now has three commit-sized stages: 1A canonical authoring contract, 1B visual Approved Sections library, and 1C final QA/refinement. Only roles with actual future work are populated; unrelated role fields are left blank.
- Root agent guidance now tells workers to load the task board only when a numbered stage is assigned or the handoff points there. Drive source changes were read back; no repository validation, browser review, Git commit, push or deployment is claimed.

### 2026-09-22 — ChatGPT — v2.2.2 first Approved Sections lifecycle test

- On Aykhan's explicit request, approved `process.staged-path` and `faq.accordion`; both are media-independent, already used in the private and business Workshop fixtures, and keep the existing semantic/content contracts unchanged.
- Updated only lifecycle status in the canonical recipe registry plus project version/handoff metadata. No production adoption, copy migration, browser verification, Git verification, commit, push or deployment is claimed.

### 2026-09-22 — ChatGPT — v2.2.1 usage-efficient agent/tool policy

- Added proportional validation and tool-use guidance to `AGENTS.md` for rate-limited agents such as Codex: targeted checks during iteration, broader validation at meaningful milestones, browser/screenshots only when they materially reduce uncertainty, and explicit permission to use deeper testing whenever the task genuinely requires it.
- This was a documentation-only governance patch. Source/readback verification is expected; no application/browser/Git validation is implied by the change itself.

### 2026-09-11 — Codex — v2.2.0 private home-network Workshop

- Combined Design, Content & SEO, Implementation and QA pass. Replaced the private gallery, repeated situations and outcome/tag panel with substantial service chapters, a linked visual index and a labelled connection diagram.
- Added strict semantic contracts and negative cases for topic targets, paragraph blocks, labelled media, comparisons, connection labels and contact copy; usage remains derived from fixtures. Production contact defaults and email-preparation behavior remain unchanged.
- Completed repository and browser checks described above, corrected the discovered private disclosure resize failure, and handed the experimental result back for visual review. Historical RV-001 is not claimed resolved by this implementation pass.

## Maintenance

Keep this file live and small. Cross-role and repository-verification items exist only while open; remove resolved entries after preserving any durable consequence in `α┇Project.md`, priority in `β┇Roadmap.md`, or implementation source. Keep only brief recent work here; Git is the historical record.
