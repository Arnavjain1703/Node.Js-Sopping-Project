const express = require('express');
const {body} = require('express-validator');

const orderproductController = require('../controllers/orderedProduct');
const isAuth = require('../middleware/is_auth');

const router = express.Router();

router.post('/order',isAuth,orderproductController.order);
// router.get('/getorder',isAuth,orderproductController.getorder);


module.exports = router