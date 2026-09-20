# AGENTS.md

Instructions for any coding agent working in this repository. Claude Code
reads this file through an import in `.claude/CLAUDE.md`, which adds the
Claude-specific detail on top: route patterns, deployment, known issues, and
which review command to run.

## Stack

The repository is still called `my-remix-app`, but it no longer runs on Remix.
Remix v2 reached End of Life with the React Router v8 release, so in September
2026 this project migrated to React Router v8 Framework Mode — the direct
continuation of Remix v2 by the same team. The site's _content_ is still about
Remix; the _stack_ is React Router.

- **React Router v8** (Framework Mode, Vite-based build)
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4** for styling (CSS-first config, no tailwind.config.ts)
- **pnpm** as package manager
- **Node.js >= 22.22.0** (required by React Router v8)
- **ESLint** for code quality

Never import from `@remix-run/*` — those packages are no longer installed.

## Code style

- **Prettier config**: Semi-colons disabled, single quotes, trailing commas
- **ESLint config**: TypeScript, React, JSX a11y, and import rules enabled
- **Language**: UI text is in Japanese, code/comments in English
- **Import alias**: Use `~/` for app directory imports (e.g., `import { foo } from '~/utils/foo'`)
- **File organization**: Routes in `app/routes/`, utilities in `app/utils/`
- **Styling**: Tailwind utility classes, semantic HTML elements, mobile-first
  responsive design, `container mx-auto px-4` for consistent layout

### File naming

- Route files: Flat-file convention, unchanged from Remix v2 (`_index.tsx`, `about.tsx`, `posts.$id.tsx`). Wired up by `flatRoutes()` in `app/routes.ts`
- Components: PascalCase files (e.g., `UserProfile.tsx`)
- Utilities: camelCase files (e.g., `formatDate.ts`)
- Types: Use `.types.ts` suffix for shared types

## Comments

Write a comment only for what the code cannot show. The test is **"why not"**:
a comment earns its place when it names an alternative a reader would
reasonably reach for and the reason it was rejected. A plain "why" decays into
a restatement of the requirement; "why not" records the road not taken, which
is the one thing that leaves no trace in the code. An external constraint with
no alternative involved also qualifies.

```tsx
// Good - names the alternative and why it was not taken
// Inlined rather than fetched: the content API is not provisioned yet, so the
// loader returns this array unchanged.
const blogPosts = [...]

// Bad - a section label duplicating the heading it sits above
{/* 6. 適用ケース／どちらを選ぶか */}
<h2>6. 適用ケース／どちらを選ぶか</h2>
```

- **No comments inside JSX.** A `{/* … */}` section label repeats the heading
  under it and goes stale the moment that heading is edited. Express structure
  with the markup itself: `<section>`, headings, and extracted components.
- **No comment that restates the code**, including a label above an `export`
  that repeats the symbol name.
- **Future work is a `TODO`, not prose.** Write `// TODO(#123): …` against an
  issue, or leave it out.
- **Exempt:** `app/entry.client.tsx` and `app/entry.server.tsx` keep the
  comments React Router generates, so both stay diffable against
  `react-router reveal` and upgrade cleanly. Mechanical comments
  (`eslint-disable`, `@ts-expect-error` with a reason) are instructions to a
  tool, not documentation, and are always allowed.

The JSX ban is mechanical, so ESLint owns it rather than review:
`no-restricted-syntax` fails the build on `JSXExpressionContainer >
JSXEmptyExpression`. The rest of this section is covered by the self-review
checklist.

## Before committing

1. Run `pnpm typecheck` - ensure no TypeScript errors
2. Run `pnpm lint` - Prettier; it rewrites files in place, which is why
   CI runs `prettier --check` rather than this script
3. Run `pnpm exec eslint .` - ESLint is not wired into the npm scripts
4. Run `pnpm test` - Vitest; `pnpm test:watch` while working
5. Test changes in browser
6. Write descriptive commit messages (English, conventional commits format)

CI (`.github/workflows/test.yml`) runs Prettier `--check`, ESLint,
`pnpm typecheck`, `pnpm test` and `pnpm build` on every pull request.

## Self-review is required

Before reporting a task as done, and before opening a pull request, review your
own diff. The tests cover the helpers in `app/utils`, the two detail loaders,
the meta functions and the root error boundary; every other component is
rendered by nothing but the browser.

1. Re-read `git diff` and confirm:
   - the change stays inside what was asked — no stray edits, no leftover debug
     code, no commented-out blocks
   - error paths are handled and fail with a clear message
   - data loading lives in a `loader` or `action`, not in a component
   - it holds to Code style and Comments above
2. For anything under `app/`, also run whatever code review your tool offers
   over the diff, and resolve every finding — fix it, or say in the pull
   request description why it is acceptable. Docs, CI and config changes need
   step 1 only.

A review run from the context that wrote the code checks it against its own
intent, not against the requirement. Where your tool allows it, review from a
fresh context against the branch.
