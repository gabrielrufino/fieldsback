const express  = require('express')
const router   = express.Router()
const mongoose = require('mongoose')
const Manager  = mongoose.model('Manager')

router.get('/', (req, res) => {
  res.render('login')
})

router.post('/', (req, res) => {
  const { username, password } = req.body

  Manager.findOne({
    username,
    password
  }, (err, manager) => {
    if (manager && !err) {
      res.redirect('/admin')
    } else {
      res.render('error', {error: 'Access denied'})
    }
  })
})

module.exports = router
