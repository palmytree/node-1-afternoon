const products = require('../products.json')

const getProduct = (req, res) => {
	const { id } = req.params

	const product = products.find(e => e.id === +id)

	product ? res.status(200).send(product) : res.status(500).send('Item not in list')
}

module.exports = getProduct
