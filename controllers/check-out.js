const express  = require('express')
const router   = express.Router()
const mongoose = require('mongoose')
const Feedback = mongoose.model('Feedback')

router.get('/', (req, res) => {
  res.redirect('/')
})

router.post('/', (req, res) => {
  const { name, email, rating, message } = req.body

  const newFeedback = new Feedback({
    name,
    email,
    rating,
    message,
    sendDate: new Date()
  })

  newFeedback.save((err, feeedback) => {
    if (err) {
      res.render('error', {error: err})
    } else {
      res.render('check-out', {name: newFeedback.name})
    }
  })
})

module.exports = router
