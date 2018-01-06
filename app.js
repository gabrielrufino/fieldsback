const express = require('express')
const fs = require('fs')
const mongoose = require('mongoose')

const uri = 'mongodb://localhost/fieldsback'
mongoose.connect(uri, (err) => {
	if (err)
		console.log(err)
})

const app = express()
app.use(express.static('public'))

app.get('/', (req, res) => {
	fs.readFile('public/index.html', 'utf8', (err, data) => {
		if (err)
			res.send(err)
		else
			res.send(data)
	})
})

app.post('/thanks', (req, res) => {
	res.send(":D")
})

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log("fieldsback listening on " + port)
})
