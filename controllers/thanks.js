const mongoose = require('mongoose')
const Feedback = mongoose.model('Feedback')

module.exports = (req, res) => {
    const newFeedback = new Feedback({
		name: req.body.name,
		email: req.body.email,
		rating: req.body.rating,
		message: req.body.message,
		sendDate: new Date()
	})

	newFeedback.save((err) => {
		if (err)
			res.send(err)
		else
			res.render('thanks')
	})
}
