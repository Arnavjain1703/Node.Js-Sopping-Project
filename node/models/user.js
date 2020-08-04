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
    }
    
    


})

module.exports = mongoose.model('user',userSchema);