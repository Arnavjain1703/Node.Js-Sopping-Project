const express = require('express');
const landingImageController = require('../controllers/landingImage');
const router = express.Router();

router.post('/addImages',landingImageController.addImage);
router.get('/getImages',landingImageController.getImage);


module.exports = router