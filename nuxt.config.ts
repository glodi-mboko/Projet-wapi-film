// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@pinia/nuxt', {
      autoImports: ['defineStore', 'accepHMRUpdate']
    }]
  ],
  imports: {
    dirs: ["stores"] // importe automatiquement le store
  },
  routeRules: {
    "/spa": { ssr: false },
    "/static": { static: true },
    "/swr": { swr: true }
  }
})
