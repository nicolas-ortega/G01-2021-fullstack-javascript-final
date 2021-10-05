const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products')

router.get('/products', productsController.index);
router.post('/products', productsController.createProducts);

module.exports = router
