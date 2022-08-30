const db = require('mongoose')

let rosterSchema = new db.Schema({
	account: { type: String, required: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	phoneNumber: { type: Number, required: true },
	agentId: { type: Number, required: true, unique: true },
	totalCalls: { type: Number  },
	dropCalls: { type: Number  },
	receivedCalls: { type: Number  },


},
{
  collection: 'Roster'
})

module.exports = db.model('roster', rosterSchema)
