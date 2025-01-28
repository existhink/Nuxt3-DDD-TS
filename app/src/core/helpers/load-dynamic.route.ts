// Vue Router
import type { RouteRecordRaw } from 'vue-router';

/**
 * Autoload route
 * Will read file with prefix .route.js
 */
const loadAllRoutes = async (): Promise<RouteRecordRaw[]> => {
  const routes = [];
  const modules: Record<string, () => Promise<unknown>> = import.meta.glob('/**/*.route.ts');

  for (const path in modules) {
    const module = await modules[path]();
    routes.push(...(module as { default: RouteRecordRaw[] }).default);
  }

  return [
    {
      path: '/',
      redirect: { name: 'dashboard' },
    },
    ...routes,
  ];
};

export default loadAllRoutes;
