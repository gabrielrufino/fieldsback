const mongoose = require('mongoose')
const Feedback = require('./models/feedback')

const db = mongoose.connection

mongoose.connect('mongodb://localhost/fieldsback', (err) => {
	if (err)
		throw err
})

db.on('error', console.error.bind(console, 'connection error:'))