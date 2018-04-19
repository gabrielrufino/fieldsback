const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/fieldsback')

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

// Loading models
require('./models/feedback')

module.exports = db
