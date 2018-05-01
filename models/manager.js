const mongoose = require('mongoose')

const managerScheme = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    default: 'Manager'
  }
})

const Manager = mongoose.model('Manager', managerScheme)
module.exports = Manager
