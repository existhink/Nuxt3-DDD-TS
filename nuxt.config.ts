// Path
import path from 'path';

// Tailwind CSS
import tailwindcss from '@tailwindcss/vite';

/**
 * @description Vite plugin to minify svg files
 * @see https://github.com/vbenjs/vite-plugin-svg-icons
 */
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

/**
 * @description Vite plugin to remove console.log and other console.* calls from your code.
 * @see https://github.com/xiaoxian521/vite-plugin-remove-console
 */
import removeConsole from 'vite-plugin-remove-console';

/**
 * @description Vite plugin to compress the build output using vite-plugin-compression.
 * @see https://github.com/vbenjs/vite-plugin-compression
 */
import viteCompression from 'vite-plugin-compression';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /**
   * @description Here's you can configure the app options
   */
  app: {
    head: {
      title: 'Nuxt3 DDD',
    },
  },

  /**
   * @description Here's you can configure the build options
   */
  build: {},

  /**
   * @description Specify a compatibility date for your app. This is used to control the behavior of presets in Nitro, Nuxt Image and other modules that may change behavior without a major version bump.
   */
  compatibilityDate: '2024-11-01',

  /**
   * @description Here's you can configure the components options
   */
  components: {
    dirs: [
      {
        path: 'app/src/core/components',
        pathPrefix: false,
      },
    ],
  },

  /**
   * @description Here's you can configure the list of css
   */
  css: ['./app/src/core/assets/styles/main.css'],

  /**
   * @description Here's you can configure the directory options
   */
  dir: {
    assets: 'app/src/core/assets',
    layouts: 'app/src/core/components/layouts',
    middleware: 'app/middlewares',
    plugins: 'app/src/plugins',
  },

  /**
   * @description Here's you can configure to turn on the dev tools
   */
  devtools: {
    enabled: true,
  },

  /**
   * @description Here's you can configure the features options
   * @note This is one of approach to enable us to migrate to Nuxt 4. For more information, please visit https://www.youtube.com/watch?v=r4wFKlcJK6c
   */
  future: {
    compatibilityVersion: 3, // Please set this to 4 when you are ready to migrate to Nuxt 4
  },

  /**
   * @description Here's you can configure the nuxt image options
   */
  image: {
    dir: 'app/src/core/assets',
    domains: [],
    format: ['webp'],
  },

  /**
   * @description Here's you can configure the auto import options
   */
  imports: {
    dirs: ['./app/src/core/composables', './app/src/core/constants'],
  },

  /**
   * @description Here's you can configure the modules
   */
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/test-utils/module',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-security',
    'pinia-plugin-persistedstate/nuxt',
  ],

  /**
   * @description Here's you can configure to turn on automatic route generation
   */
  pages: true,

  /**
   * @description Here's you can configure the router options
   */
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  /**
   * @description Here's you can configure runtime options
   */
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE_URL ?? 'https://api.example.com/',
    },
  },

  /**
   * @description Here's you can configure to use ssr or static site generation
   */
  ssr: false,

  /**
   * @description Here's you can configure the vite options
   */
  vite: {
    plugins: [
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'app/assets/icons')],

        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),
      removeConsole(),
      tailwindcss(),
      viteCompression(),
    ],
  },
});
