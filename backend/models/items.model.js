const db = require('mongoose')

let AdminSchema = new db.Schema({
	name: { type: String, required: true },
	password: { type: String, required: true },
})

module.exports = db.model('admin', AdminSchema)
