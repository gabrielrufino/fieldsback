const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Feedback = mongoose.model('Feedback')

router.get('/', (req, res) => {
  Feedback.find((err, feedbacks) => {
    if (err) {
      res.send('Erro na captação dos feedbacks')
    } else {
      res.render('admin', { feedbacks })
    }
  })
})

module.exports = router
