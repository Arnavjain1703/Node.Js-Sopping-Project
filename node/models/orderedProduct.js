const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    productId:
    {
        type:Schema.Types.ObjectId, ref:'products',
        required:true
    },
    userId:
    {
        type:String,
        required:true,
    },
    size:
    {
       type:String,
       required:true,
    },
    quantity:
    {
        type:Number,
        required:true,
    }
   

});

module.exports = mongoose.model('orders',OrderSchema)