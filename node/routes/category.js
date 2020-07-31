const express = require('express');


const categoryController = require('../controllers/category');
const isAuth = require('../middleware/is_auth');

const router = express.Router();

// router.get('/deleteCategory',categoryController.deleteCategory);

router.post('/addCategory',categoryController.addCategory);

router.get('/getCategory',categoryController.getCategory);

module.exports = router