const { JSONResponse } = require('../lib/helper')

const Agents = require('../models/roster.model')

/**
 * ### Description
 * Get all items
 */
exports.getAllAgents = async (req, res) => {
  
	try {
        res.render('login',
        {
            page_title: "You are not logged in"
        });
		const agents = await Agents.find()
        JSONResponse.success(res, 'Success.', agents, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling admin model.", error, 500)
	}
}

/**
 * ### Description
 * Creating an item
 */
exports.createAgent = async (req, res) => {
	try {
		const agents = await Agents.create(req.body)
		JSONResponse.success(res, 'Success.', agents, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling admin model.", error, 500)
	}
}

/**
 * ### Description
 * Deletiadmins from list
 */
exports.deleteAgentsyId = async (req, res) => {
	try {
		const agents = await  Agents.findById(req.params.id)
		if (agents) await agents.delete()
		JSONResponse.success(res, 'Success.', agents, 200)
	} catch (error) {
		JSONResponse.error(res, 'Failure handling admin model.', error, 500)
	}
}
