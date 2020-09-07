const Landingimages = require('../models/landingImages')
const path = require('path');
exports.addImage=(req,res,next)=>
{
    const landingImages=new Landingimages({
        image:req.body.image
    })
    landingImages.save().then(result=>
    {
        res.status(200).json({
            message:' Image Added Successfully',
        });
    }
    )
    .catch(err=>
        {
            if(!err.statusCode)
            {
                err.statusCode = 500;
            }
            throw(err);
        })
    
}
exports.getImage=(req,res,next)=>
{
    Landingimages.find()
    .then(images=>
        {
            res.status(200).json({message:'Featched posts successfully',images:images});
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