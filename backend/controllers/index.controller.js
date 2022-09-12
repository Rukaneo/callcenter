class IndexController {
	static index = (req, res) => {
		res.json({
			name: 'Call Center',
			version: 'v0.0.1',
		})
	}
}

module.exports = IndexController
