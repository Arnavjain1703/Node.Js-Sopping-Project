
const carts = require('../models/cartProduct')
const path = require('path');
const {validationResult} = require('express-validator');

const fs = require('fs');
const { clear } = require('console');
exports.addtoCart = (req,res,next)=>
{
  const Cart = new carts({
      productId:req.body.productId,
      userId:req.userId,
      size:req.body.size

  })
  Cart.save().then(result=>
    {
        res.status(201).json({
            message:'Product saved to cart successfully',
            Products:result,
            creatAt:new Date()
        });
    })
    .catch(err=>
        {
            if(!err.statusCode)
            {
                err.statusCode = 500;
            }
            throw(err);
        })

}
exports.getProduct=(req,res,next)=>
{
    carts.find({"userId":req.userId}).populate("productId")  
    .then(carts=>
        {
            res.status(200).json({message:'Featched posts successfully',Products:carts});
        })
     .catch(err=>
        {
            if(!err.statusCode)
                {
                    err.statusCode = 500;
                }
                throw(err);
        })   
                
}
