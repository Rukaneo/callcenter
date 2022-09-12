const express = require('express')
const router = express.Router()
const IndexController = require('../controllers/index.controller')
const {
	createItem,
	deleteItemsById,
	getAllItems,
} = require('../controllers/admin.controller')

router.route('/').get(IndexController.index)

router.route('/admin').post(createItem).get(getAllItems)
// router.route('/admin').post(createItem).get(getAllItems)

router.route('/admin/:id').delete(deleteItemsById)
// router.route('/shopping_list/:id').delete(deleteItemsById)

module.exports = router
