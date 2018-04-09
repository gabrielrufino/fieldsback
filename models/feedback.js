const mongoose = require('mongoose')

const feedbackSchema = mongoose.Schema({
  name: String,
  email: String,
  rating: Number,
  message: String,
  sendDate: Date
})

const Feedback = mongoose.model('Feedback', feedbackSchema)
module.exports = Feedback
