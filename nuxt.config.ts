export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],

  postcss: {
      plugins: {
          tailwindcss: {},
          autoprefixer: {}
      }
  },

  modules: [
      "@nuxt/icon",
      '@pinia/nuxt',
      '@nuxtjs/tailwindcss',
      'shadcn-nuxt',
      'nuxt-snackbar',
      'nuxt-headlessui',

  ],

  shadcn: {
      componentDir: './components/ui'
  },

  snackbar: {
      bottom: true,
      duration: 3000
  },

  headlessui: {
      prefix: 'Headless'
  },

  app: {
      head: {
          title: 'OpenRport',

          link: [

          ],
          bodyAttrs: {
              class: 'min-h-screen h-full bg-gray-50 dark:bg-gray-800'
          },
      }
  },

  plugins: [
      // { src: '~/node_modules/@tabler/core/dist/js/tabler.min.js', mode: 'client' }
  ],

  alias: {
      assets: "/<rootDir>/assets"
  },

  routeRules: {
      // '/': { redirect: '/dashboard' }
  },

  router: {
      options: {
          linkActiveClass: 'bg-sky-700',
          linkExactActiveClass: 'bg-sky-700'
      }
  },

  runtimeConfig: {
      public: {
          appEnv: process.env.NUXT_APP_ENV,
          apiUrl: process.env.NUXT_API_URL,
      }
  },

  ssr: false,
})