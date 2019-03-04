const express  = require('express')
const router   = express.Router()
const mongoose = require('mongoose')
const Feedback = mongoose.model('Feedback')

router.get('/', (req, res) => {
  res.redirect('/')
})

router.post('/', (req, res) => {
  const newFeedback = new Feedback({
    name: req.body.name,
    email: req.body.email,
    rating: req.body.rating,
    message: req.body.message,
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
