const express = require('express');
const {body} = require('express-validator');

const productController = require('../controllers/products');

const router = express.Router();

router.get('/getProducts',productController.getProducts);

router.post('/createProduct',productController.createProducts);

module.exports = router