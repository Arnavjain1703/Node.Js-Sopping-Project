const express = require('express');
const {body} = require('express-validator');

const productController = require('../controllers/products');
const isAuth = require('../middleware/is_auth');

const router = express.Router();

router.get('/getProducts',productController.getProducts);

router.post('/createProduct',productController.createProducts);

router.get('/addtocart',productController.addtoCart);

module.exports = router