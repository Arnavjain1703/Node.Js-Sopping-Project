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
    category:
    {
        type:Schema.Types.ObjectId, ref:'categories',
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
    },
    sizes:
    [
        {type:String}
    ],
    description:{type:String,required:true},
    Product_brand:
    {
        type:String,
        required:true,
    }
    

},{timestamps:true});

module.exports = mongoose.model('products',ProductSchema)