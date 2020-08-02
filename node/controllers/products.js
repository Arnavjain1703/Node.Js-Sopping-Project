const path = require('path');
const {validationResult} = require('express-validator');

const fs = require('fs');
const products = require('../models/products');
const user = require('../models/user');
const category = require('../models/category');
const { clear } = require('console');


exports.getProducts = (req,res,next)=>
{
    products.find({"category":req.body.category}).populate("products.category").then(
        products =>
        {  
           res.status(200).json({message:'Featched posts successfully',Products:products});
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
exports.addtoCart = (req,res,next)=>
{
    user.findById(req.userId).then(
        result =>
        {  
           const User = result;
           const productId = req.body.productId;
           const size = req.body.size;
           const Index = User.cart_Products.findIndex(cp=>
            {
                return cp.productId.toString() === productId.toString()
            })   
       User.cart_Products.push({productId:productId,size:size})
       User.save().then(result=>
            {   
                res.status(200).json({message:'product added to cart',Products:result});
            })
        })
        .catch(err=>
            {
                console.log(err);
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
        category : req.body.category,
        ImageUrl1 : req.body.ImageUrl1,
        ImageUrl2 : req.body.ImageUrl2,
        ImageUrl3 : req.body.ImageUrl3,
        ImageUrl4 : req.body.ImageUrl4,
        sizes     :req.body.sizes,
        Product_brand:req.body.Product_brand,
        description:req.body.description

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
exports.orderProduct = (req,res,next)=>
{
    user.findById(req.userId).then(
        result =>
        { const User = result;
            User.ordered_Products=User.ordered_Products.concat(req.body.orders) 
          User.cart_Products=[];
        User.save().then(result=>
            {   
                res.status(200).json({message:'product ordered Successfully',Products:result});
            })
            .catch(err=>
                {
                    console.log(err)
                })
        })
        .catch(err=>
            {
                console.log(err)
            })
   

}
