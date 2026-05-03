# My Remix App - Project Guidelines

## Project Overview

This is a Remix application using:

- **Remix v2** (Vite-based build)
- **React 18**
- **TypeScript** (strict mode)
- **Tailwind CSS** for styling
- **pnpm** as package manager
- **Node.js >= 22.0.0**
- **ESLint** for code quality

## Project-Specific Conventions

### Code Style

- **Prettier config**: Semi-colons disabled, single quotes, trailing commas
- **ESLint config**: TypeScript, React, JSX a11y, and import rules enabled
- **Language**: UI text is in Japanese, code/comments in English
- **Import alias**: Use `~/` for app directory imports (e.g., `import { foo } from '~/utils/foo'`)
- **File organization**: Follow Remix conventions (routes in `app/routes/`, utilities in `app/utils/`)

### Component Structure

```tsx
// Preferred pattern for route components
import type { MetaFunction, LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

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

- Route files: Use Remix conventions (`_index.tsx`, `about.tsx`, `posts.$id.tsx`)
- Components: PascalCase files (e.g., `UserProfile.tsx`)
- Utilities: camelCase files (e.g., `formatDate.ts`)
- Types: Use `.types.ts` suffix for shared types

## Development Workflow

### Running the App

```bash
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm start        # Run production build
pnpm typecheck    # Type check without building
pnpm lint         # Format code with Prettier
```

### Before Committing

1. Run `pnpm typecheck` - ensure no TypeScript errors
2. Run `pnpm lint` - format code with Prettier
3. Test changes in browser
4. Write descriptive commit messages (English, conventional commits format)

Note: ESLint is configured but not included in the npm scripts. You can run it manually with `pnpm eslint .` if needed.

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

## Remix-Specific Best Practices

### Data Loading

- Use `loader` functions for GET requests
- Use `action` functions for mutations (POST, PUT, DELETE)
- Always type loader data: `useLoaderData<typeof loader>()`
- Handle errors with error boundaries

### Forms

- Use Remix `<Form>` component for progressive enhancement
- Validate data on server-side in actions
- Return validation errors from actions
- Use `useActionData()` to display errors

### Performance

- Prefetch on hover for anticipated navigation
- Use `defer()` for non-critical data
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
│   ├── root.tsx         # Root layout
│   ├── entry.client.tsx # Client entry
│   ├── entry.server.tsx # Server entry
│   └── tailwind.css     # Tailwind imports
├── public/              # Static assets
├── .claude/             # Claude Code configuration
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
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
import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'

export async function loader({ params }: LoaderFunctionArgs) {
  const post = await getPost(params.id)
  if (!post) {
    throw new Response('Not Found', { status: 404 })
  }
  return json({ post })
}

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  { title: data?.post.title },
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
import type { ActionFunctionArgs } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import { json, redirect } from '@remix-run/node'

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData()
  const email = formData.get('email')

  if (!email || typeof email !== 'string') {
    return json({ error: 'メールアドレスを入力してください' }, { status: 400 })
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

- `vercel.json`: Build and framework configuration
- `.vercelignore`: Files to exclude from deployment

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
- Node.js version: >= 22.0.0 (automatically detected from `engines` field)

### General Deployment Info

- Build output: `build/client` and `build/server`
- Environment variables: Use `.env` file locally (not committed), configure in hosting platform
- Other hosting options: Fly.io, Railway, AWS, etc.
- Ensure Node.js version matches `engines` field (>= 22.0.0)

## Known Issues / Technical Debt

- No error boundaries implemented yet
- No testing infrastructure set up
- ESLint is configured but not integrated into npm scripts

## Questions to Ask When Uncertain

- Should this be a loader or client-side fetch?
- Does this need progressive enhancement?
- What's the error handling strategy here?
- Should this validation be client-side, server-side, or both?
- Is this data critical for initial render or can it be deferred?

## Resources

- [Remix Documentation](https://remix.run/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
