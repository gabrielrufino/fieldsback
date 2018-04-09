const bodyParser = require('body-parser')
const express = require('express')

const app = express()

// -------------- app settings --------------
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false })) // Parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // Parse application/json

app.get('/', require('./controllers/index'))
app.post('/thanks', require('./controllers/thanks'))
app.get('/admin', require('./controllers/admin'))

module.exports = app
