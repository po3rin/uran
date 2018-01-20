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
      { name: 'format-detection', content: 'telephone=no' }

    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet' },
      { href: 'https://fonts.googleapis.com/css?family=Roboto:300,400', rel: 'stylesheet' },
      { rel: 'prefetch', href: '~assets/Believe.mp4'},
      { rel: 'prefetch', href: '~assets/RainyDay.mp4'},
      { rel: 'prefetch', href: '~assets/anatanomotohe.mp4'},
      { rel: 'prefetch', href: '~assets/energy.mp4'}
    ]
  },
  css: [
    { src: 'material-design-lite/src/material-design-lite.scss', lang: 'scss' },
    { src: 'typicons.font/src/font/typicons.css' },
    { src: 'assets/main.css'}
  ],
  loading: { color: '#3B8070' },
  build: {
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
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
