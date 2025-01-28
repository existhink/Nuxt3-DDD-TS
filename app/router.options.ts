// Interfaces
import type { RouterConfig } from '@nuxt/schema';

/**
 * @description List of routes
 * @note We will try to import automatically all routes from the modules later. Because, for right now nitro is not support to use import.meta.glob. Please check this out: https://github.com/nitrojs/nitro/issues/1671
 */
import authenticationRoutes from './src/modules/authentication/routes/authentication.route';

// Vue Router
import { createMemoryHistory } from 'vue-router';

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions.html
  history: base => (import.meta.client ? createMemoryHistory(base) : null) /* default */,
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: async _routes => [...authenticationRoutes] /* default */,
} satisfies RouterConfig;
