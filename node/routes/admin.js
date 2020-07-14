const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-products',(req, res, next)=>{
// res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">SUBMIT</button></form>')
res.sendFile(path.join(rootDir, '../','views','add-product.html'));
})


router.post('/product',(req, res, next)=>
{
     console.log(req.body)
    
});


module.exports = router;