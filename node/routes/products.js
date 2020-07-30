const express = require('express');
const {body} = require('express-validator');

const productController = require('../controllers/products');
const isAuth = require('../middleware/is_auth');

const router = express.Router();

router.get('/getProducts',isAuth,productController.getProducts);

router.post('/createProduct',productController.createProducts);

router.post('/addtocart',isAuth,productController.addtoCart);

module.exports = router