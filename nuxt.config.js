export default {
  head: {
    title: 'MyPlusInfo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/less/style.less'],

  pageTransition: {
    name: 'tweakOpacity',
  },

  layoutTransition: {
    name: 'tweakOpacity',
  },

  plugins: ['~/plugins/uikit.client.js'],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    'nuxt-font-loader',
  ],

  styleResources: {
    less: './assets/less/uikit/variables.less',
  },

  fontLoader: {
    url: '/assets/fonts/font-face.css',
  },

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  axios: {
    baseURL: '/',
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {},
}
