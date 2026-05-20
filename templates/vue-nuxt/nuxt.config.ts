export default defineNuxtConfig({
  compatibilityDate: '2026-05-19',
  modules: ['@tdesign-vue-next/nuxt'],
  tdesign: {
    resolveIcons: true,
  },
  css: ['~/assets/style.css'],
  typescript: {
    strict: true,
  },
})
