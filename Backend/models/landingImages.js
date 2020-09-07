const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LandingImages = new Schema({
image:{type:String,required:true}
});

module.exports = mongoose.model('Landingimages',LandingImages)