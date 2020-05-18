const products = require('../products.json')

const getProducts = (req, res) => {
	const { price } = req.query

	if (price) {
		const filtered = products.filter(e => e.price > +price)
		if (filtered.length === 0) {
			res.status(404).send('No products matched your query, please try again')
		} else {
			res.status(200).send(filtered)
		}
	} else {
		res.status(200).send(products)
	}
}

module.exports = getProducts
