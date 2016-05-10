'use strict'

const mongoose = require('mongoose')
const Test = mongoose.model('Test')
const path = require('path')
const logger = require(path.resolve('config/logger'))
const _ = require('underscore')
const uuid = require('node-uuid')

exports.index = function(req, res, next){
  var filter = {
    skip: 0,
    limit: 10,
    order: '-_id',
    where: {}
  }

  var promise = Test.find(filter.where)
    .limit(parseInt(filter.limit))
    .skip(parseInt(filter.skip))
    .sort(filter.order)
    .exec()

  promise.then(function (tests) {
    if (tests) {
      res.json(tests)
      next()
    } else {
      res.status(404).json({})
    }
  }).catch(function (error) {
    res.status(404).json(error)
  })
}

exports.create = function(req, res, next){
  var test = new Test({name: uuid.v1()})
  var promise = test.save()
  promise.then(function(saved){
    res.json(saved)
  }).catch(function(error){
    res.status(300).json(error)
  })
}
