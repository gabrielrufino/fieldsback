const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Feedback = mongoose.model('Feedback')

router.get('/', (req, res) => {
  Feedback.find({ checked:false }, (err, feedbacks) => {
    if (err) {
      res.render('error', {error: err})
    } else {
      res.render('feedbacks', { feedbacks })
    }
  })
})

router.post('/', (req, res) => {
  Feedback.findById(req.body.id)
    .then((feedback) => {
      feedback.checked = true
      feedback.ranking = req.body.ranking
      feedback.save()
      res.redirect('/admin/feedbacks')
    })
})

module.exports = router
