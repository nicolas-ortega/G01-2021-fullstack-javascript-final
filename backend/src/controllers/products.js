const Models = require('../models');
const Product = Models.Product;

module.exports = {
	async index(request, response) {
		let statusCode = 200

		try {
			const products = await Product.findAll()

			console.log(`GET with status code ${statusCode} in /api/products endpoint`)

			return response
				.status(statusCode)
				.json(products)

		} catch (error) {
			const { message } = error
			statusCode = 500

			console.error(`GET with status code ${statusCode} in /api/products endpoint. Error: ${message}`)

			return response
				.status(statusCode)
				.json({ message })
		}
	},
	async createProducts(request, response){
		try{
			const {body} = request
			const products = await Product.create(body)
			return response
				.status(201)
				.json(products)
		}catch (error) {
			const { message } = error
			console.error(`POST with status code 500 in /api/products endpoint. Error: ${message}`)
			return response
				.status(500)
				.json({ message })
		}
	}

}
