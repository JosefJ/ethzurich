// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  ssr: false,
  srcDir: 'src/',
  app: {
    head: {
      charset: 'utf-16',
      title: 'Ethereum Zürich',
      meta: [
        { name: 'Ethereum Zürich', content: 'Ethereum Zürich' }
      ]
    }
  }
})
