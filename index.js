const app = require('./app.js')
const db = require('./db.js')
const fs = require('fs')

app.get('/', (req, res) => {
	fs.readFile('public/index.html', 'utf8', (err, data) => {
		if (err)
			res.send(err)
		else
			res.send(data)
	})
})

app.post('/thanks', (req, res) => {
	const newContact = new db.Contact({
		name: req.body.name,
		email: req.body.email,
		rating: req.body.rating,
		message: req.body.message,
		sendAt: new Date()
	})

	newContact.save((err) => {
		if (err)
			res.send(err)
		else
			fs.readFile('public/thanks.html', 'utf8', (err, data) => {
				if (err)
					res.send(err)
				else
					res.send(data)
			})
	})
})	// Tratar possível reenvio das mesmas informações ;)


const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log("fieldsback listening on " + port)
})
