# My Remix App

A modern web application built with Remix v2, React 18, and TypeScript.

## Tech Stack

- **[Remix v2](https://remix.run)** - Full-stack web framework
- **[React 18](https://react.dev)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Vite](https://vitejs.dev/)** - Fast build tool
- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager

## Prerequisites

- **Node.js** >= 22.0.0
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
- `pnpm typecheck` - Type check without building
- `pnpm lint` - Format code with Prettier

## Project Structure

```
my-remix-app/
├── app/
│   ├── routes/          # Route components
│   ├── root.tsx         # Root layout with error boundary
│   ├── entry.client.tsx # Client entry point
│   ├── entry.server.tsx # Server entry point
│   └── tailwind.css     # Tailwind imports
├── public/              # Static assets
├── .claude/             # Claude Code configuration
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
└── vercel.json          # Vercel deployment config
```

## Deployment

This project is configured for [Vercel](https://vercel.com) deployment.

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [vercel.com](https://vercel.com)
3. Vercel will automatically detect Remix and configure the build settings
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

Make sure your hosting platform supports Node.js >= 22.0.0.

## Code Style

This project uses:

- **Prettier** for code formatting (no semicolons, single quotes, trailing commas)
- **ESLint** for code quality and consistency
- **TypeScript** in strict mode
- **Import alias**: `~/` for app directory imports

## Documentation

- [Remix Documentation](https://remix.run/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Project Guidelines

See `.claude/CLAUDE.md` for detailed project-specific conventions and best practices.

## License

Private project - all rights reserved.
