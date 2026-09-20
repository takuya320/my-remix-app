import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  // Rejected reusing vite.config.ts: the reactRouter() plugin builds the route
  // graph and expects the dev server, which these tests never start. Only the
  // `~/` alias is needed here.
  plugins: [tsconfigPaths()],
  test: {
    environment: 'node',
    include: ['app/**/*.test.{ts,tsx}'],
  },
})
