'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TestSchema = new Schema({
  name: { type: String, required: true }
}, { collection: 'test_collection' })

mongoose.model('Test', TestSchema)
