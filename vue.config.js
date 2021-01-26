// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack')
module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        Vue: ['vue/dist/vue.esm.js', 'default'],
        jQuery: 'jquery',
        $: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    disableHostCheck: true,
    port: 8080,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, Authorization, x-id, Content-Length, X-Requested-With, Cookie'
    },
    proxy: {
      '/api': {
        target: {
          // host: '46.217.82.127',
          host: '127.0.0.1',
          protocol: 'https:',
          port: 8080
        },
        onProxyReq: proxyReq => {
          // proxyReq.setHeader('origin', 'http://46.217.82.127:8080')
          proxyReq.setHeader('origin', 'https://127.0.0.1:8080')
          proxyReq.setHeader('sec-fetch-mode', 'no-cors')
          proxyReq.setHeader('Sec-Fetch-Site', 'none')
          console.log(proxyReq)
        },
        changeOrigin: true
      },
      '/administrationms/socket': {
        target: {
          // host: '46.217.82.127',
          host: '127.0.0.1',
          protocol: 'https:',
          port: 8080
        },
        onProxyReq: proxyReq => {
          // proxyReq.setHeader('origin', 'http://46.217.82.127:180801')
          proxyReq.setHeader('origin', 'https://127.0.0.1:8080/administrationms/socket')
          proxyReq.setHeader('sec-fetch-mode', 'no-cors')
          proxyReq.setHeader('Sec-Fetch-Site', 'none')
        },
        ws: false,
        changeOrigin: true
      },
      '/relationms/socket': {
        target: {
          // host: '46.217.82.127',
          host: '127.0.0.1',
          protocol: 'https:',
          port: 8080
        },
        onProxyReq: proxyReq => {
          // proxyReq.setHeader('origin', 'http://46.217.82.127:180801')
          proxyReq.setHeader('origin', 'https://127.0.0.1:8080/relationms/socket')
          proxyReq.setHeader('sec-fetch-mode', 'no-cors')
          proxyReq.setHeader('Sec-Fetch-Site', 'none')
        },
        ws: false,
        changeOrigin: true
      },
      '/productms/socket': {
        target: {
          // host: '46.217.82.127',
          host: '127.0.0.1',
          protocol: 'https:',
          port: 8080
        },
        onProxyReq: proxyReq => {
          proxyReq.setHeader('origin', 'https://127.0.0.1:8080/productms/socket')
          proxyReq.setHeader('sec-fetch-mode', 'no-cors')
          proxyReq.setHeader('Sec-Fetch-Site', 'none')
        },
        ws: false,
        changeOrigin: true
      },
      '/orderms/socket': {
        target: {
          // host: '46.217.82.127',
          host: '127.0.0.1',
          protocol: 'https:',
          port: 8080
        },
        onProxyReq: proxyReq => {
          proxyReq.setHeader('origin', 'https://127.0.0.1:8080/orderms/socket')
          proxyReq.setHeader('sec-fetch-mode', 'no-cors')
          proxyReq.setHeader('Sec-Fetch-Site', 'none')
        },
        ws: false,
        changeOrigin: true
      },
      '/render': {
        target: 'https://api.mjml.io/v1',
        pathRewrite: {
          '^/render': '/render'
        },
        onProxyReq: proxyReq => {
          const token = Buffer.from('1a336b03-7c52-49a5-9f5f-b669dbf13c06:dfd53576-0500-4694-904f-1b8b526ac1ee', 'utf8').toString('base64')
          proxyReq.setHeader('Authorization', `Basic ${token}`)
          console.log(proxyReq)
        },
        changeOrigin: true
      },
      '/getFromCloud': {
        target: 'https://storage.googleapis.com',
        pathRewrite: {
          '^/getFromCloud': ''
        },
        changeOrigin: true
      }
    }
  }
}
