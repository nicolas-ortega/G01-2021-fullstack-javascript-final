const supertest = require('supertest')
const admin = require('firebase-admin')
const app = require('../src/app')
const Models = require('../src/models')
const productsFixture = require('../../fixtures/products.json')

jest.mock('firebase-admin', () => ({
	auth: jest.fn().mockReturnValue({ verifyIdToken: jest.fn() }),
	credential: {
		applicationDefault: jest.fn(),
	},
	initializeApp: jest.fn()
}))

describe('/api/products', () =>{

	beforeAll(async () => {
		await Models.sequelize.sync({ force: true })
		admin.auth().verifyIdToken.mockResolvedValue(true)
	})

	it('returns an array of products', async () => {
		await Models.Product.bulkCreate(productsFixture)

		const response = await supertest(app)
			.get('/api/products')
			.set('Authorization', 'Bearer valid-token')
			.expect(200)
		expect(response.body).toMatchObject(productsFixture)
	})

	it('add a new product', async () => {
		const totalProduct = await Models.Product.count();
		const newProduct = {
			name: 'Supertest product',
			code: '000',
			description: 'Producto agregado con prueba usando supertest',
			image: 'a',
		}
		const response = await supertest(app)
			.post('/api/products')
			.set('Authorization', 'Bearer valid-token')
			.send(newProduct)
			.expect(201)

		const product = await Models.Product.findOne({
			where:{
				id: response.body.id
			},
			raw: true
		})
		const newTotal = await Models.Product.count();

		expect(response.body.id).toEqual(product.id)
		expect(newTotal).toBeGreaterThan(totalProduct)
	})

	it('returns 500 when the database throws error', async () => {
		await Models.Product.drop()

		const response = await supertest(app)
			.get('/api/products')
			.set('Authorization', 'Bearer valid-token')
			.expect(500)
		expect(response.body).toMatchObject({ message: 'SQLITE_ERROR: no such table: Products' })
	})

	afterAll(async () => {
		await Models.sequelize.close()
	})
})
