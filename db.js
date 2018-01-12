const mongoose = require('mongoose')
const db = mongoose.connection

const uri = 'mongodb://localhost/fieldsback'
mongoose.connect(uri, (err) => {
	if (err)
		console.log(err)
})

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
	const contactSchema = mongoose.Schema({
		name: String,
		email: String,
		rating: Number,
		message: String,
		sendAt: Date
	})

	exports.Contact = mongoose.model('Contact', contactSchema)
})