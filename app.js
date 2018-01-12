const bodyParser = require('body-parser')
const express = require('express')

const app = express()
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))	// parse application/x-www-form-urlencoded
app.use(bodyParser.json())	// parse application/json

module.exports = app