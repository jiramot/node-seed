'use strict'

const bodyParser = require('body-parser')
const logger = require(require('path').resolve('config/logger'))

module.exports = function (app) {
  app.disable('x-powered-by')
  logger.info('load express config')
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
}
