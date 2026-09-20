# AGENTS.md

Instructions for any coding agent working in this repository. Claude Code also
reads `.claude/CLAUDE.md`, which covers the same ground in much more detail —
stack, conventions, route patterns, deployment. Read that file too if your tool
can; this one is the part that applies to every agent.

## Stack

React Router v8 (Framework Mode), React 19, TypeScript (strict mode),
Tailwind CSS v4, Vite, pnpm, Node.js >= 22.22.0.

The repository is named `my-remix-app` and the site's content is about Remix,
but the stack is React Router: Remix v2 reached End of Life and this project
migrated in September 2026. Never import from `@remix-run/*` — those packages
are not installed.

## Before committing

1. `pnpm typecheck`
2. `pnpm lint` — Prettier, rewrites files in place
3. `pnpm exec eslint .` — ESLint is not wired into the npm scripts
4. Check the change in a browser
5. Write the commit message in English, Conventional Commits format

CI runs `prettier --check`, `eslint` and `pnpm typecheck` on every pull request.

## Self-review is required

Before reporting a task as done, and before opening a pull request, review your
own diff. CI only covers formatting, lint and types — nothing checks behaviour,
because the project has no tests yet.

1. Re-read `git diff` and confirm:
   - the change stays inside what was asked — no stray edits, no leftover debug
     code, no commented-out blocks
   - error paths are handled and fail with a clear message
   - UI text is in Japanese; code, comments and commit messages are in English
   - data loading lives in a `loader` or `action`, not in a component
   - every comment passes the "why not" test below
2. For anything under `app/`, also run whatever code review your tool offers
   over the diff, and resolve every finding — fix it, or say in the pull
   request description why it is acceptable. Docs, CI and config changes need
   step 1 only.

A review run from the context that wrote the code checks it against its own
intent, not against the requirement. Where your tool allows it, review from a
fresh context against the branch.

## Comments

Write a comment only for what the code cannot show. The test is **"why not"**:
name the alternative a reader would reasonably reach for and the reason it was
rejected. A plain "why" comment decays into a restatement of the requirement;
"why not" records the road not taken, which leaves no trace in the code. An
external constraint with no alternative involved also qualifies.

- **No comments inside JSX.** A `{/* … */}` section label repeats the heading
  under it and goes stale as soon as that heading is edited. Express structure
  with `<section>`, headings and extracted components instead.
- No comment that restates the code, including a label above an `export` that
  repeats the symbol name.
- Future work is `// TODO(#123): …` against an issue, or nothing.
- Comments are in English. Only UI text is Japanese.
- Exempt: `app/entry.client.tsx` and `app/entry.server.tsx` keep the comments
  React Router generates, so they stay diffable against `react-router reveal`.
  Mechanical comments (`eslint-disable`, `@ts-expect-error` with a reason) are
  instructions to a tool, not documentation, and are always allowed.
