const express = require('express')

const IndexController = require('../controllers/index.controller');
const {protect, restrictTo} = require('../controllers/admin.controller');
const app = express()

const {
createAgent,
getAllAgents,
deleteAgentsById,
updateAgentById,
getAgentById
} = require('../controllers/roster.controller')
const rosterModel = require('../models/roster.model')
const router = express.Router();






router.use(protect)
router.use(restrictTo(['admin']))

router.route('/roster').post(createAgent).get(getAllAgents);



router.route('/roster/:id').delete(deleteAgentsById).patch(updateAgentById).get(getAgentById);





module.exports = router
