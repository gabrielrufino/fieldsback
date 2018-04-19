const mongoose = require('mongoose')

const feedbackSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  message: {
    type: String,
    required: true
  },
  sendDate: {
    type: Date,
    default: new Date()
  }
})

const Feedback = mongoose.model('Feedback', feedbackSchema)
module.exports = Feedback
