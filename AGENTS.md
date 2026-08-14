# VorOrt agent instructions

These instructions apply to the entire repository.

## Read before working

Read these files in order before making material changes:

1. `α┇Docs/Project.md` — project purpose, decisions, architecture, website map, and source-of-truth boundaries.
2. `α┇Docs/Roadmap.md` — current implementation phases and acceptance criteria.
3. `α┇Docs/Collaboration.md` — current handoff, recent work, validation, and blockers.

`VorOrt` is an internal project name. Do not introduce it as the public brand unless Aykhan explicitly chooses it.

## Repository boundaries

- `ω┇Engine/` owns the Astro application, dependencies, source, public assets, scripts, and generated build output.
- `α┇Docs/` owns stable project documentation, the repository roadmap, and collaboration handoffs.
- `.github/workflows/astro.yml` must remain at the repository root for GitHub Actions.
- The external Obsidian Chain remains the high-level project roadmap. Do not edit it unless Aykhan explicitly requests it.
- Preserve unrelated user changes and inspect `git status` before editing.

## Product invariants

- The service is positioned as a normal local Berlin IT business. Do not mention a waitlist, Baku, or delayed availability.
- German is served at `/`; independently authored English content is served at `/en/`.
- English contact and technician support messaging is optional and controlled centrally in `ω┇Engine/src/data/site.ts`.
- Public branding, contact details, legal identity, and badges are provisional until Aykhan supplies verified replacements.
- Never publish unearned certification claims or invented customer, availability, pricing, or response-time facts.

## Commands and validation

Run application commands from the engine directory:

```bash
cd 'ω┇Engine'
npm ci
npm run dev
npm run validate
```

Before considering a material change complete:

- Run `npm run validate`.
- Confirm canonical URLs and internal assets retain the configured GitHub Pages base.
- Review `git diff --check` and `git status --short` from the repository root.
- For deployment changes, verify the live GitHub Pages URL after the `main` workflow completes.

## Collaboration contract

After material source, content, architecture, or deployment work, update `α┇Docs/Collaboration.md` with:

- objective and scope;
- files or systems changed;
- decisions made;
- validation performed and results;
- blockers or facts still requiring Aykhan;
- the recommended next action.

Keep stable decisions in `Project.md`, implementation priorities in `Roadmap.md`, and chronological session reporting in `Collaboration.md`. Do not duplicate the same evolving checklist across all three files.
