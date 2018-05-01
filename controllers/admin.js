const express = require('express')
const router = express.Router()

router.use('/feedbacks', require('./feedbacks'))

router.get('/', (req, res) => {
  res.render('admin')
})

router.all('/', (req, res) => {
  res.redirect('/')
})

module.exports = router