const express = require('express');
const {body} = require('express-validator');

const cartproductController = require('../controllers/cartProduct');
const isAuth = require('../middleware/is_auth');

const router = express.Router();

router.post('/addtocart',isAuth,cartproductController.addtoCart);
router.get('/getcartproduct',isAuth,cartproductController.getProduct);


module.exports = router