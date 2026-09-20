import { type RouteConfig } from '@react-router/dev/routes'
import { flatRoutes } from '@react-router/fs-routes'

// Without this, a colocated `*.test.ts` is registered as a route module and
// the client build fails on its server-only imports.
export default flatRoutes({
  ignoredRouteFiles: ['**/*.test.*'],
}) satisfies RouteConfig
