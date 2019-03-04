const express   = require('express')
const router    = express.Router()
const mongoose  = require('mongoose')
const Feedback  = mongoose.model('Feedback')

router.use('/feedbacks', require('./feedbacks'))

router.get('/', (req, res) => {
  // For when, auth must be true.
  // Implement verification
  const auth = true
  if (auth) {
    Feedback.find((err, feedbacks) => {
      if (err) {
        res.render('dashboard', {data: {}})
      } else {
        const data = {
          total: feedbacks.length
        }
        res.render('dashboard', {data: data})
      }
    })
  } else {
    res.redirect('/login')
  }
})

router.all('/', (req, res) => {
  res.redirect('/')
})

module.exports = router
