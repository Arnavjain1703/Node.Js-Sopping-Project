const mongoose = require('mongoose');
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
            type:Schema.Types.ObjectId,
            ref:'products'
        }
    ]
    


})

module.exports = mongoose.model('user',userSchema);