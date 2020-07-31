const mongoose = require('mongoose');
const products = require('./products')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:
    {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:
    {
        type:String,
        required:true
    },
    cart_Products:
    [
       { 
       productId:{type:Schema.Types.ObjectId, ref:'products'},
       quantity:{type:Number, required:true}
       }
        
    ],
    ordered_Products:
    [
        {productId:{type:Schema.Types.ObjectId,ref:'products',required:true},
         quantity:{type:Number, required:true},
         date:{type:String,required:true}
        }
        
     ]
    
    


})

module.exports = mongoose.model('user',userSchema);