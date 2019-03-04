const mongoose = require('mongoose')
const db       = mongoose.connection

const database = process.env.DATABASE || 'mongodb://localhost/fieldsback'
mongoose.connect(database)

db.on('error', console.error.bind(console, 'connection error:'))

// Loading models
require('./models/feedback')
require('./models/manager')

module.exports = db
