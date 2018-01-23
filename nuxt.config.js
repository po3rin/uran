const { resolve } = require('path')
const uran = require('./uran.config.json')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'uran',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'uran airtist project' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@catch_top_dream" },
      { property: "og:url", content: "https://uran-artist-site.herokuapp.com/uran/home" },
      { property: "og:title", content: "シンガーソングライター「うらん。」" },
      { property: "og:description", content: "楽曲制作、WEB制作やってます。" },
      { property: "og:image", content: "https://uran-artist-site.herokuapp.com/uran/_nuxt/img/works1.834fe43.png" }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-touch-icon.png' },
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'manifest', href: '/manifest.json' },
      { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet' },
      { href: 'https://fonts.googleapis.com/css?family=Roboto:300,400', rel: 'stylesheet' }
    ]
  },
  css: [
    { src: 'material-design-lite/src/material-design-lite.scss', lang: 'scss' },
    { src: 'typicons.font/src/font/typicons.css' },
    { src: 'assets/main.css'}
  ],
  loading: { color: '#448aff' },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [ 'material-design-lite/material.min.js' ]
  },
  generate: {
    dir: resolve(__dirname, './dist' + uran.serverPath),
    routes: [
      '/blogs/test',
      '/blogs/music'
    ]
  },
  router: {
    base: process.env.NODE_ENV === 'dev' ? '/' : uran.serverPath,
  },
  modules: [
    ['@nuxtjs/apollo'],
    ['nuxt-vue-material']
  ],
  vueMaterial: {
    theme: 'default'
  },
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js',
    }
  }
}
