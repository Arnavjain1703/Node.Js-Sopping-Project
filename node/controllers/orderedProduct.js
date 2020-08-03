
const orders = require('../models/orderedProduct')
const path = require('path');
const {validationResult} = require('express-validator');

const fs = require('fs');
const { clear } = require('console');
exports.order= (req,res,next)=>
{
  const Order = new orders({
      productId:req.body.productId,
      userId:req.userId,
      size:req.body.size,
      quantity:req.body.quantity

  })
  Order.save().then(result=>
    {
        res.status(201).json({
            message:'Product Ordered',
            Products:result,
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
exports.getorder=(req,res,next)=>
{
    orders.find({"userId":req.userId}).populate("orders.productId")
    .then(orders=>
        {
            res.status(200).json({message:'Featched posts successfully',Products:orders});
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
