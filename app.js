const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.send('fieldsback ON!')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log("fieldsback listening on ", port)
})