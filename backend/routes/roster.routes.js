const express = require('express')
const router = express.Router()
const IndexController = require('../controllers/index.controller')
const {
	createItem,
	// deleteAgentsyId,
	getAllItems,
} = require('../controllers/items.controller')

const {
createAgent,
deleteAgentsyId,
getAllAgents,
deleteAgentsById
} = require('../controllers/roster.controller')


router.route('/').get(IndexController.index)

router.route('/admin').post(createAgent).get(getAllAgents)
// router.route('/admin').post(createItem).get(getAllItems)

router.route('/admin/:id').delete(deleteAgentsById)
// router.route('/shopping_list/:id').delete(deleteItemsById)



module.exports = router
