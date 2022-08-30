class IndexController {
	static index = (req, res) => {
		res.json({
			name: 'CalL Center',
			version: 'v0.1.0',
		})
	}
}

module.exports = IndexController
