// const { environment } = require('@rails/webpacker')

// module.exports = environment

const { environment } = require('@rails/webpacker')
const less = require('./loaders/less')
environment.loaders.append('style', less)
module.exports = environment