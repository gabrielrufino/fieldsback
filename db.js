const mongoose = require('mongoose')
const db       = mongoose.connection

const {
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_PORT,
  DB_NAME
} = process.env

const databaseUrl = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
mongoose.connect(databaseUrl)

db.on('error', console.error.bind(console, 'connection error:'))

// Loading models
require('./models/feedback')
require('./models/manager')

module.exports = db
