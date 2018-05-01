const express = require('express')
const router = express.Router()

router.use('/feedbacks', require('./feedbacks'))

router.get('/', (req, res) => {
  // For when, auth must be true.
  // Implement verification
  const auth = true
  if (auth) {
    res.render('admin')
  } else {
    res.redirect('/login')
  }
})

router.all('/', (req, res) => {
  res.redirect('/')
})

module.exports = router
