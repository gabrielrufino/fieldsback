const mongoose = require('mongoose')
const db = mongoose.connection

mongoose.connect('mongodb://localhost/fieldsback', (err) => {
	if (err)
		throw err
})

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
	const feedbackSchema = mongoose.Schema({
		name: String,
		email: String,
		rating: Number,
		message: String,
		sendAt: Date
	})

	exports.Feedback = mongoose.model('Feedback', feedbackSchema)
})