'use strict'

const path = require('path')

const test = require(path.resolve('app/controllers/test'))
const redisOptions = require(path.resolve('config/config')).redis
const cache = require('redis-api-cache').options(redisOptions).middlewares
const express = require('express')

module.exports = function (app) {
  var cacheRouter = express.Router()
  if (process.env.NODE_ENV === 'production') {
    cacheRouter.use(cache({ttl: 900}))
  }
  cacheRouter.get('/', test.index)
  app.use('/', cacheRouter)
  app.post('/', test.create)
}
