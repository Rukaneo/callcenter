require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
var session = require('express-session');
var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }))

// Routers
// const indexRouter = require('./routes/index.routes')
const rosterRouter = require('./routes/roster.routes')

// Routes
// app.use('/', indexRouter)
app.use('/', rosterRouter)

// Start Express App
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err) => {
	if (err) throw err

	console.log('MongoDB Connected')

	app.listen(PORT, () => {
		console.log(`Server listening on http://localhost:${PORT}`)
	})
})
