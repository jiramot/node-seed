'use strict'

const fs = require('fs')
const envFile = require('path').join(__dirname, 'env.json')

let env = {}

if (fs.existsSync(envFile)) {
  env = fs.readFileSync(envFile, 'utf-8')
  env = JSON.parse(env)
  Object.keys(env).forEach(key => process.env[key] = env[key])
}

module.exports = {
  logger: {
    level: 'debug'
  },
  redis: {
    port: 6379,
    host: 'localhost'
  },
  db: {
    uri: 'mongodb://localhost:27017/node-seed',
    options: {
      server: {
        socketOptions: { keepAlive: 1 }
      }
    }
  }
}
