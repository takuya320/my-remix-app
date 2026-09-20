# My Remix App - Project Guidelines

> **Note on the name**: the repository is still called `my-remix-app`, but it no
> longer runs on Remix. Remix v2 reached End of Life with the React Router v8
> release, so in September 2026 this project migrated to React Router v8
> Framework Mode — the direct continuation of Remix v2 by the same team. The
> site's _content_ is still about Remix; the _stack_ is React Router.

## Project Overview

This is a React Router (Framework Mode) application using:

- **React Router v8** (Framework Mode, Vite-based build)
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4** for styling (CSS-first config, no tailwind.config.ts)
- **pnpm** as package manager
- **Node.js >= 22.22.0** (required by React Router v8)
- **ESLint** for code quality

### Packages

| Purpose                                 | Package                   |
| --------------------------------------- | ------------------------- |
| Router, components, hooks, shared types | `react-router`            |
| Node runtime helpers                    | `@react-router/node`      |
| Production server (`pnpm start` only)   | `@react-router/serve`     |
| Vite plugin, CLI, route config types    | `@react-router/dev`       |
| Flat-file route convention              | `@react-router/fs-routes` |

Never import from `@remix-run/*` — those packages are no longer installed.

## Project-Specific Conventions

### Code Style

- **Prettier config**: Semi-colons disabled, single quotes, trailing commas
- **ESLint config**: TypeScript, React, JSX a11y, and import rules enabled
- **Language**: UI text is in Japanese, code/comments in English
- **Import alias**: Use `~/` for app directory imports (e.g., `import { foo } from '~/utils/foo'`)
- **File organization**: Routes in `app/routes/`, utilities in `app/utils/`

### Component Structure

```tsx
// Preferred pattern for route components
import type { MetaFunction, LoaderFunctionArgs } from 'react-router'
import { useLoaderData } from 'react-router'

export const meta: MetaFunction = () => [
  { title: 'Page Title' },
  { name: 'description', content: 'Description' },
]

export async function loader({ request }: LoaderFunctionArgs) {
  // Data loading logic here
  return { data: 'example' }
}

export default function ComponentName() {
  const data = useLoaderData<typeof loader>()
  return <div>{/* JSX here */}</div>
}
```

### Styling Guidelines

- Use Tailwind CSS utility classes
- Prefer semantic HTML elements
- Maintain responsive design (mobile-first approach)
- Use container classes for consistent layout: `container mx-auto px-4`

### File Naming

- Route files: Flat-file convention, unchanged from Remix v2 (`_index.tsx`, `about.tsx`, `posts.$id.tsx`). Wired up by `flatRoutes()` in `app/routes.ts`
- Components: PascalCase files (e.g., `UserProfile.tsx`)
- Utilities: camelCase files (e.g., `formatDate.ts`)
- Types: Use `.types.ts` suffix for shared types

## Development Workflow

### Running the App

```bash
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm start        # Run production build
pnpm typecheck    # Generate route types (react-router typegen) + tsc
pnpm lint         # Format code with Prettier
```

`pnpm typecheck` runs `react-router typegen` first, which writes generated route
types into `.react-router/types/` (gitignored). Run it after adding or renaming a
route file if your editor reports missing types.

### Before Committing

1. Run `pnpm typecheck` - ensure no TypeScript errors
2. Run `pnpm lint` - format code with Prettier
3. Run `pnpm exec eslint .` - ESLint is not wired into the npm scripts
4. Test changes in browser
5. Write descriptive commit messages (English, conventional commits format)

### Self-Review (required before finishing a task or opening a PR)

Automated checks only cover formatting, lint and types. Before you report a task
as done, and before you run `gh pr create`, review your own diff:

1. Always re-read the diff yourself (`git diff`) with these questions in mind:
   - Does the change stay inside the requested scope? No stray edits, no
     leftover debug code, no commented-out blocks.
   - Are error paths handled, and do loaders/actions fail with a clear message?
   - Is UI text in Japanese and are code/comments in English?
   - Does anything here belong in a loader/action rather than a component?
2. Then run the review depth that matches the risk of the change (see the table
   below), and resolve every finding — fix it, or state in the PR description
   why it is acceptable.

#### Which review to run

Two different commands share the name `code-review`, so always write the one
you mean:

- `/code-review <level>` — the built-in skill. Reviews the working-tree diff,
  a branch, or a PR. `--fix` applies findings, `--comment` posts them inline on
  the PR. **Always pass an explicit level**: with no level it silently reuses
  whatever level was typed last, which makes the depth non-deterministic.
  `low`/`medium` return fewer, high-confidence findings; `high`/`xhigh`/`max`
  cover more ground but include uncertain findings that need triage.
- `/code-review:code-review` — the plugin command. PR only. Runs independent
  agents that review the PR without the authoring context, scores each finding
  for confidence, drops anything below 80, and posts a comment on the PR.
  Slower and more expensive; the independent context is the point.

| Change                                  | Review                                                  |
| --------------------------------------- | ------------------------------------------------------- |
| Docs, CI, config only                   | The `git diff` re-read above. No agent review needed    |
| Presentational components, Tailwind     | `/code-review medium`                                   |
| `loader` / `action` / form handling     | `/code-review high` + the `silent-failure-hunter` agent |
| Sessions, env vars, user-supplied input | `/code-review high` + `/security-review`                |
| A real feature PR, before merge         | `/code-review:code-review`                              |

Self-review from the context that wrote the code checks the code against its
own intent, not against the requirement. For anything beyond the first two
rows, prefer a reviewer with a fresh context — that is what the plugin command
and the `pr-review-toolkit` agents give you.

CI (`.github/workflows/test.yml`) runs Prettier `--check`, ESLint and
`pnpm typecheck` on every pull request. A green CI is the floor, not the review.

## TypeScript Guidelines

- **Strict mode enabled** - fix type errors, don't use `any` or `@ts-ignore`
- **Type route data**: Always type loader/action data with `typeof loader`
- **Import types**: Use `import type` for type-only imports
- **Path aliases**: Use `~/` prefix for app imports

```tsx
// Good
import type { User } from '~/types/user.types'
import { getUser } from '~/utils/auth'

// Avoid
import { User } from '../../../types/user'
```

## React Router Best Practices

### Data Loading

- Use `loader` functions for GET requests
- Use `action` functions for mutations (POST, PUT, DELETE)
- **Return plain objects** from loaders/actions. `json()` and `defer()` were
  removed in v8 — single fetch serializes the return value for you
- Use `data()` from `react-router` only when you need a custom status or headers
- Always type loader data: `useLoaderData<typeof loader>()`
- Handle errors with error boundaries

### Forms

- Use the `<Form>` component from `react-router` for progressive enhancement
- Validate data on server-side in actions
- Return validation errors from actions
- Use `useActionData()` to display errors

### Performance

- Prefetch on hover for anticipated navigation
- Stream non-critical data with `Suspense` + `<Await>` (replaces `defer()`)
- Optimize images (consider using CDN)
- Minimize client-side JavaScript

### Error Handling

- Export `ErrorBoundary` for route-level errors
- Provide user-friendly error messages in Japanese
- Log errors appropriately (server-side)

## Project Structure

```
my-remix-app/
├── app/
│   ├── routes/          # Route components
│   ├── components/      # Reusable components (if needed)
│   ├── utils/           # Utility functions (if needed)
│   ├── types/           # Shared TypeScript types (if needed)
│   ├── routes.ts        # Route config (flatRoutes())
│   ├── root.tsx         # Root layout
│   ├── entry.client.tsx # Client entry
│   ├── entry.server.tsx # Server entry
│   └── tailwind.css     # Tailwind imports
├── public/              # Static assets
├── .claude/             # Claude Code configuration
├── .react-router/       # Generated route types (gitignored)
├── package.json
├── tsconfig.json
├── vite.config.ts
├── react-router.config.ts
├── eslint.config.js     # ESLint flat config
├── postcss.config.js    # @tailwindcss/postcss
└── .npmrc               # pnpm configuration
```

## Adding New Features

When adding features, follow this order:

1. **Plan the feature** - understand requirements and data flow
2. **Create types** - define TypeScript interfaces if needed
3. **Implement loader/action** - handle data fetching/mutations
4. **Build UI components** - implement React components
5. **Add styling** - use Tailwind classes
6. **Test thoroughly** - check all user flows
7. **Update meta tags** - ensure SEO is handled

## Common Patterns

### Creating a New Route

```tsx
// app/routes/posts.$id.tsx
import type { LoaderFunctionArgs, MetaFunction } from 'react-router'
import { useLoaderData } from 'react-router'

export async function loader({ params }: LoaderFunctionArgs) {
  const post = await getPost(params.id)
  if (!post) {
    throw new Response('Not Found', { status: 404 })
  }
  return { post }
}

// v8 renamed the meta argument from `data` to `loaderData`
export const meta: MetaFunction<typeof loader> = ({ loaderData }) => [
  { title: loaderData?.post.title },
]

export default function Post() {
  const { post } = useLoaderData<typeof loader>()
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}
```

### Form Handling with Validation

```tsx
import type { ActionFunctionArgs } from 'react-router'
import { Form, useActionData, data, redirect } from 'react-router'

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const email = formData.get('email')

  if (!email || typeof email !== 'string') {
    // data() sets a custom status; a plain object would return 200
    return data({ error: 'メールアドレスを入力してください' }, { status: 400 })
  }

  await subscribeUser(email)
  return redirect('/thanks')
}

export default function Subscribe() {
  const actionData = useActionData<typeof action>()

  return (
    <Form method="post" className="space-y-4">
      <input
        type="email"
        name="email"
        className="border px-4 py-2 rounded"
        placeholder="メールアドレス"
      />
      {actionData?.error && <p className="text-red-600">{actionData.error}</p>}
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        登録
      </button>
    </Form>
  )
}
```

## Dependencies Management

- **Check before adding**: Evaluate necessity, bundle size, and maintenance status
- **Keep updated**: Run `pnpm update` regularly for security patches
- **Audit security**: Run `pnpm audit` periodically
- **Lock file**: Always commit `pnpm-lock.yaml`

## Testing Strategy

Currently no testing setup. When adding tests, prioritize:

1. Loader/action business logic
2. Form validation
3. Error boundaries
4. Critical user flows

Consider adding:

- Vitest for unit tests
- Playwright or Cypress for E2E tests
- Testing Library for component tests

## Deployment Notes

### Vercel Deployment

This project is configured for Vercel deployment. Configuration files:

- `vercel.json`: Build and framework configuration (`"framework": "react-router"`)
- `.vercelignore`: Files to exclude from deployment

The optional `@vercel/react-router` preset is **deliberately not installed**. It
relocates the server bundle to `build/server/nodejs_<hash>/index.js`, which
breaks `pnpm start`. Zero-config deployment works without it; add it only if you
need per-route function config or bundle splitting, and fix the `start` script at
the same time.

**Deployment Steps:**

1. Install Vercel CLI (optional): `pnpm add -g vercel`
2. Connect to Vercel:
   - Push to GitHub and import on [vercel.com](https://vercel.com)
   - Or use CLI: `vercel` (first time) or `vercel --prod` (production)
3. Configure environment variables in Vercel dashboard if needed
4. Automatic deployments on push to main branch

**Build Configuration:**

- Build command: `pnpm build`
- Output directory: `build/client`
- Install command: `pnpm install`
- Node.js version: >= 22.22.0 (automatically detected from `engines` field)

### General Deployment Info

- Build output: `build/client` and `build/server`
- Environment variables: Use `.env` file locally (not committed), configure in hosting platform
- Other hosting options: Fly.io, Railway, AWS, etc.
- Ensure Node.js version matches `engines` field (>= 22.22.0)

## Known Issues / Technical Debt

- No root-level error boundary. `blog.$slug` and `projects.$id` export their
  own `ErrorBoundary`, but `app/root.tsx` does not
- No testing infrastructure set up
- ESLint is configured but not integrated into npm scripts; run
  `pnpm exec eslint .` (CI runs it directly)
- ESLint is on v9. v10 is blocked on eslint-plugin-react (peers up to ^9.7)
  and eslint-plugin-jsx-a11y (up to ^9), and CI installs with
  --strict-peer-dependencies
- Footer still reads `© 2024`

## Questions to Ask When Uncertain

- Should this be a loader or client-side fetch?
- Does this need progressive enhancement?
- What's the error handling strategy here?
- Should this validation be client-side, server-side, or both?
- Is this data critical for initial render or can it be deferred?

## Resources

- [React Router Documentation](https://reactrouter.com)
- [Upgrading from Remix](https://reactrouter.com/upgrading/remix)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
