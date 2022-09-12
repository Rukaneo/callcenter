const express = require('express')
const router = express.Router()
const IndexController = require('../controllers/index.controller')


const {
createAgent,
getAllAgents,
deleteAgentsById,
updateAgentById,
getAgentById
} = require('../controllers/roster.controller')
const rosterModel = require('../models/roster.model')


router.route('/').get(IndexController.index);

router.route('/roster').post(createAgent).get(getAllAgents);


router.route('/roster/:id').delete(deleteAgentsById).patch(updateAgentById).get(getAgentById);





module.exports = router
