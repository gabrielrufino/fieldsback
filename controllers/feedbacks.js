const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Feedback = mongoose.model('Feedback')

router.get('/', (req, res) => {
  Feedback.find((err, feedbacks) => {
    if (err) {
      res.render('error', {error: err})
    } else {
      res.render('feedbacks', { feedbacks })
    }
  })
})

module.exports = router
