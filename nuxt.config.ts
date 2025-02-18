// https://nuxt.com/docs/api/configuration/nuxt-config
import Lara from '@primevue/themes/lara';
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from '@primevue/auto-import-resolver';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],
  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: Lara,
      
      }
    }
  },
  icon: {
    provider: 'iconify',
    serverBundle: false,
  },
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    config: {},
    viewer: true,
  },
  vite: {
    plugins: [
      Components({
        resolvers: [
          PrimeVueResolver(),
        ]
      })]
  },


})
