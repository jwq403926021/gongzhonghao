const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  configureWebpack: {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log']
            }
          }
        })
      ]
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
  devServer: {
    open: true,
    port: 8080,
    useLocalIp: true,
    // proxy: {
    //   '/mobile-stream': {
    //     target: 'http://10.34.163.173:27070'
    //   },
    //   '/mobile-socket': {
    //     target: 'http://10.34.163.173:27070',
    //     changeOrigin: true,
    //     ws: true
    //   },
    //   '/pt': {
    //     target: 'https://quaty4console.game.line-dev.me/' //  dev
    //     // target: 'https://quaty4console.game.line-alpha.me' // alpha
    //   },
    //   '/pstream': {
    //     target: 'https://quaty4console.game.line-dev.me/'
    //   },
    //   '/api': {
    //     target: 'http://10.34.163.173:28080' // dev
    //     // target: 'http://10.34.163.58:28080' // alpha
    //     // target: 'http://127.0.0.1:28080'
    //   },
    //   '/doc': {
    //     target: 'http://10.34.163.173:28080' // dev
    //     // target: 'http://10.34.163.58:28080' // alpha
    //     // target: 'http://127.0.0.1:28080'
    //   },
    //   '/socket': {
    //     target: 'http://10.34.163.173:27070',
    //     // target: 'http://10.34.163.173:27070',
    //     changeOrigin: true,
    //     ws: true
    //   },
    //   '/stream': {
    //     target: 'http://10.34.163.173:27070',
    //     // target: 'http://10.34.163.173:27070',
    //     changeOrigin: true,
    //     ws: true
    //   },
    //   '/logs-api': {
    //     target: 'http://watchdog-logs.game.line-alpha.me'
    //   },
    //   '/tm': {
    //     target: 'http://10.127.122.12',
    //     changeOrigin: true,
    //     ws: true
    //   }
    // }
  },
  css: {
    extract: true
  }
}
