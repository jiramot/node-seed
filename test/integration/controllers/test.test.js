/* eslint-env mocha */

'use strict'

const path = require('path')
const request = require('supertest')
const expect = require('chai').expect
const app = require(path.resolve('app'))
const sinon = require('sinon')
const winston = require('winston')

const mongoose = require('mongoose')
const Test = mongoose.model('Test')

describe('Test API', function () {
  before(function (done) {
    sinon.stub(winston)
    initTests(done)
  })

  it('should return all test list', function (done) {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (e, res) {
        expect(e).to.equal(null)
        expect(res.body.length).to.equal(10)
        done()
      })
  })
})

function initTests (callback) {
  var promises = []
  for (var i = 0; i < 10; i++) {
    promises.push(new Test({name: '1'}).save())
    promises.push(new Test({name: '2'}).save())
  }
  Promise.all(promises).then(function () {
    callback()
  })
}
