const bodyParser = require('body-parser')
const express    = require('express')

const app = express()

// app settings
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false })) // Parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // Parse application/json

app.use('/', require('./controllers/index'))
app.use('/thanks', require('./controllers/check-out'))
app.use('/login', require('./controllers/login'))
app.use('/admin', require('./controllers/admin'))
app.use('/*', require('./controllers/notfound'))

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('fieldsback listening on', port)
})

module.exports = app
