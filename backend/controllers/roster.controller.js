const { JSONResponse } = require('../lib/helper')
const { findById } = require('../models/roster.model')

const Agents = require('../models/roster.model')

/**
 * ### Description
 * Get all Agents
 */
exports.getAllAgents = async (req, res) => {
	try {
		const agents = await Agents.find().sort( { lastName: 1, firstName: 1 });
        JSONResponse.success(res, 'Success.', agents, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling roster model.", error, 500)
	}
}

/**
 * ### Description
 * Creating an agent
 */
exports.createAgent = async (req, res) => {
	try {
		const agents = await Agents.create(req.body)
		JSONResponse.success(res, 'Success.', agents, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling roster model.", error, 500)
	}
}

/**
 * ### Description
 * Delete adm from list
 */
exports.deleteAgentsById = async (req, res) => {
	try {
		const agents = await  Agents.findById(req.params.id)
		if (agents) await agents.delete()
		JSONResponse.success(res, 'Success.', agents, 200)
	} catch (error) {
		JSONResponse.error(res, 'Failure handling roster model.', error, 500)
	}
}

exports.updateAgentById = async (req,res) => {
  try {

     const agents = await Agents.findByIdAndUpdate(req.params.id, req.body, )
    JSONResponse.success(res, 'Success.', agents, 200, {$set: req.body})
    } catch(error) {
      JSONResponse.error(res, 'Failure handling roster model.', error, 500)
    }

};

//get agent by ID
exports.getAgentById = async (req, res) => {
  try {
    const agent = await Agents.findById(req.params.id)

    JSONResponse.success(res, 'Success', agent, 200)


  } catch (error) {
    JSONResponse.error(res, 'Failure handling roster model.', error, 500)
  }


};
