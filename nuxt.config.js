const pkg = require('./package');
const webpack = require('webpack');

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/pf/'
  }
} : {}

module.exports = {
  ...routerBase,
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'joy\'s portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    script: [
      { type: 'text/javascript', src: 'https://code.jquery.com/jquery-1.12.4.min.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      'window.jQuery': 'jquery'
    })
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  vender: [
    'jquery'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
  
    extend(config, ctx) {
    }
  }
}
