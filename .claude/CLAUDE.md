# My Remix App - Project Guidelines

@../AGENTS.md

`AGENTS.md` above is the single copy of every rule that is not specific to one
tool: the stack, code style, the comment convention, the before-committing
checks and the self-review requirement. Claude Code expands that import at
launch, and agents that read `AGENTS.md` directly get the same rules. Change a
shared rule there, not here. This file adds what only applies to Claude Code
or needs more depth than another agent would want.

## Packages

| Purpose                                 | Package                   |
| --------------------------------------- | ------------------------- |
| Router, components, hooks, shared types | `react-router`            |
| Node runtime helpers                    | `@react-router/node`      |
| Production server (`pnpm start` only)   | `@react-router/serve`     |
| Vite plugin, CLI, route config types    | `@react-router/dev`       |
| Flat-file route convention              | `@react-router/fs-routes` |

## Component Structure

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

## Self-review: which review to run

| Change                | Review                                                      |
| --------------------- | ----------------------------------------------------------- |
| Docs, CI, config only | The `git diff` re-read in AGENTS.md. No agent review needed |
| Anything under `app/` | `/code-review medium`                                       |

Always pass `/code-review` an explicit level: with no level it reuses whatever
level was typed last. `low`/`medium` return fewer, high-confidence findings;
`high` and above cover more ground but include uncertain findings that need
triage. `--fix` applies findings, `--comment` posts them on the PR.

Today every route renders static content from hardcoded arrays in its loader:
the site has no `action`, no `<Form>`, no session storage and no `process.env`
usage. Once a change introduces any of those, raise it to `/code-review high`
and run `/security-review` alongside it.

Self-review from the context that wrote the code checks it against its own
intent, not against the requirement. For anything beyond a docs or config
change, run the review from a fresh session against the branch or PR, so the
reviewer reads the code instead of remembering why it was written that way.

A green CI is the floor, not the review.

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
│   ├── components/      # Reusable components
│   ├── data/            # Content collections (posts, projects)
│   ├── utils/           # Pure helpers, with colocated *.test.ts
│   ├── types/           # Shared TypeScript types (*.types.ts)
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

## Dependencies Management

- **Check before adding**: Evaluate necessity, bundle size, and maintenance status
- **Keep updated**: Run `pnpm update` regularly for security patches
- **Audit security**: Run `pnpm audit` periodically
- **Lock file**: Always commit `pnpm-lock.yaml`

## Testing Strategy

Vitest runs in Node, configured in `vitest.config.ts`. It deliberately leaves
out the `reactRouter()` plugin, which builds the route graph and expects a dev
server the tests never start. `pnpm test` runs once, `pnpm test:watch` watches.

Tests live next to what they cover, as `*.test.ts` or, when they render
something, `*.test.tsx`. `app/routes.ts` passes
`ignoredRouteFiles: ['**/*.test.*']`, without which `flatRoutes()` registers a
colocated test as a route and the client build fails on its server-only
imports.

Covered today: the helpers in `app/utils`, the `blog.$slug` and `projects.$id`
loaders including their 404 paths, the meta functions, and the rendering of
the navigation, the blog and project listings and details, and all three error
boundaries. Not covered: the static content pages, which have no behaviour to
get wrong — `_index`, `about`, `features`, `tech-stack` and the three
comparison pages.

Write tests that take their data as an argument, the way the lookups do, so
editing a blog post does not break them.

A test that renders a component opts into jsdom with `// @vitest-environment
jsdom` on its first line, rather than the whole suite paying for a DOM it does
not use. Render through `createRoutesStub` from `react-router` when the
component needs router context — the root `ErrorBoundary` reads
`useRouteError()`, which is only populated by a router, and a route's
`ErrorBoundary` only renders when its loader throws.

Check a new test by breaking the code it covers and watching it fail. A
component test can pass for the wrong reason: asserting that a listing does
not show an article body proves nothing, because the listing never renders
that field whatever the loader returns. No E2E layer yet; Playwright is the
next step if one is needed.

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

- ESLint is configured but not integrated into npm scripts; run
  `pnpm exec eslint .` (CI runs it directly)
- ESLint is on v9. v10 is blocked on eslint-plugin-react (peers up to ^9.7)
  and eslint-plugin-jsx-a11y (up to ^9), and CI installs with
  --strict-peer-dependencies

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
