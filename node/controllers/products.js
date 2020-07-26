const path = require('path');
const {validationResult} = require('express-validator');

const fs = require('fs');
const products = require('../models/products');



exports.getProducts = (req,res,next)=>
{
    products.find().then(
        result =>
        {
           res.status(200).json({message:'Featched posts successfully',Products:result});
        })  
        .catch(err =>
            {
                if(!err.statusCode)
                {
                    err.statusCode = 500
                }
                next(err);
            })
                
}
exports.createProducts = (req,res,next)=>
{
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        const error = new Error('Validation failed, entered data is incorrect');
        error.statusCode = 422;
        throw error;
    }
    const Products = new products({
        Product_Name : req.body.Product_Name,
        Product_price : req.body.Product_price,
        category1 : req.body.category1,
        category2 : req.body.category2,
        ImageUrl1 : req.body.ImageUrl1,
        ImageUrl2 : req.body.ImageUrl2,
        ImageUrl3 : req.body.ImageUrl3,
        ImageUrl4 : req.body.ImageUrl4,

    })
    Products.save().then(result=>
        {
            res.status(201).json({
                message:'Post created sucessfully',
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