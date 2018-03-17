const bodyParser = require('body-parser')
const express = require('express')

const app = express()

// -------------- app settings -------------- 
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))	// parse application/x-www-form-urlencoded
app.use(bodyParser.json())	// parse application/json

app.get('/', require('./controllers/index'))
app.post('/thanks', require('./controllers/thanks'))

module.exports = app
