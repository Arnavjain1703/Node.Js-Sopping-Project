const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    Product_Name:
    {
        type:String,
        required:true,
    },
    Product_price:{
        type:Number,
        required:true,
    },
    category1:
    {
        type:String,
        required:true
    },
    category2:
    {
        type:String,
        required:true
    },
    ImageUrl1:
    {
        type:String,
        required:true,
    },
    ImageUrl2:
    {
        type:String,
        required:true,
    },
    ImageUrl3:
    {
        type:String,
        required:true,
    },
    ImageUrl4:
    {
        type:String,
        required:true,
    }
    

},{timestamps:true});

module.exports = mongoose.model('products',ProductSchema)