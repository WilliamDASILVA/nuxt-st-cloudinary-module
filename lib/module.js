const { resolve } = require('path')

function nuxtModule () {
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-st-cloudinary-module.js',
    ssr: false
  })

  this.extendBuild((config, { isClient }) => {
    if (isClient) {
      /**
       * Fix issue with toposort, by removing the chunks sort mode.
       */
      for (let plugin of config.plugins) {
        if (plugin.constructor.name === 'HtmlWebpackPlugin') {
          plugin.options = Object.assign(plugin.options, { chunksSortMode: 'none' })
        }
      }
    }
  })
}

module.exports = nuxtModule
module.exports.meta = require('../package.json')
