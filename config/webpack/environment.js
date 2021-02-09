// const { environment } = require('@rails/webpacker')

// module.exports = environment

const { environment } = require('@rails/webpacker')
const less = require('./loaders/less')
environment.loaders.append('style', less)
const webpack = require('webpack')
environment.plugins.append('Provide', new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
}))
module.exports = environment