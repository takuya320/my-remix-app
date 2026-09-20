# My Remix App

A modern web application built with React Router v8, React 19, and TypeScript.

> **About the name**: the repository is still called `my-remix-app`, but it no
> longer runs on Remix. Remix v2 reached End of Life with the React Router v8
> release, so in September 2026 this project migrated to React Router v8
> Framework Mode — the direct continuation of Remix v2 by the same team. The
> site's content is still about Remix; the stack is React Router.

## Tech Stack

- **[React Router v8](https://reactrouter.com)** - Full-stack web framework (Framework Mode)
- **[React 19](https://react.dev)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Vite](https://vitejs.dev/)** - Fast build tool
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

## Prerequisites

- **Node.js** >= 22.22.0 (required by React Router v8)
- **pnpm** >= 10.0.0

## Development

Install dependencies:

```sh
pnpm install
```

Run the development server:

```sh
pnpm dev
```

The app will be available at `http://localhost:5173`

## Available Scripts

- `pnpm dev` - Start development server with hot module replacement
- `pnpm build` - Build for production
- `pnpm start` - Run production build locally
- `pnpm typecheck` - Generate route types (`react-router typegen`) and type check
- `pnpm lint` - Format code with Prettier

ESLint is configured but not wired into the scripts; run it with `pnpm exec eslint .`

## Project Structure

```
my-remix-app/
├── app/
│   ├── routes/          # Route components
│   ├── components/      # Reusable components
│   ├── routes.ts        # Route config (flatRoutes())
│   ├── root.tsx         # Root layout
│   ├── entry.client.tsx # Client entry point
│   ├── entry.server.tsx # Server entry point
│   └── tailwind.css     # Tailwind imports
├── public/              # Static assets
├── .claude/             # Claude Code configuration
├── .react-router/       # Generated route types (gitignored)
├── package.json
├── tsconfig.json
├── vite.config.ts
├── react-router.config.ts
├── eslint.config.js     # ESLint flat config
├── postcss.config.js
└── vercel.json          # Vercel deployment config
```

## Deployment

This project is configured for [Vercel](https://vercel.com) deployment.

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [vercel.com](https://vercel.com)
3. Vercel will automatically detect React Router and configure the build settings
4. Deploy!

Alternatively, use the Vercel CLI:

```sh
pnpm add -g vercel
vercel
```

### Other Deployment Options

First, build your app for production:

```sh
pnpm build
```

This creates:

- `build/server` - Server-side code
- `build/client` - Client-side static assets

Then run the app in production mode:

```sh
pnpm start
```

You can deploy to any Node.js hosting platform:

- [Fly.io](https://fly.io)
- [Railway](https://railway.app)
- [AWS](https://aws.amazon.com)
- [DigitalOcean](https://www.digitalocean.com)

Make sure your hosting platform supports Node.js >= 22.22.0.

## Code Style

This project uses:

- **Prettier** for code formatting (no semicolons, single quotes, trailing commas)
- **ESLint** for code quality and consistency
- **TypeScript** in strict mode
- **Import alias**: `~/` for app directory imports

## Documentation

- [React Router Documentation](https://reactrouter.com)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Project Guidelines

See `.claude/CLAUDE.md` for detailed project-specific conventions and best practices.

## License

Private project - all rights reserved.
