module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'my app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,700' }
    ]
  },
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    // 'bulma',
    // CSS file in the project
    // '@/assets/css/main.css',
    // SCSS file in the project
    '@/assets/main.scss'
  ],
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/proxy',
  ],
  proxy: {
    '/_api': {
      target: 'http://alonn24.wixsite.com',
      pathRewrite: {'^/_api' : '/'},
      changeOrigin: true,
      logLevel: 'debug'
    }
    // Proxies /foo to http://example.com/foo
    // 'http://alonn24.wixsite.com/provider/_functions/data',
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.devtool = '#source-map';
    }
  }
}

