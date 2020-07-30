const path = require('path');


const fs = require('fs');
const category = require('../models/category');

exports.getCategory = (req,res,next)=>
{
    category.find().then(
        result =>
        {
           res.status(200).json({message:'categories',categories:result});
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
exports.addCategory = (req,res,next)=>
{   
    const Category = new category({
        category:req.body.category
    })
    Category.save().then(result=>{
        res.status(200).json({message:'added successfully',category:result});
    })
    .catch(
        err=>
        {
            console.log(err)
        }
    )
}
// exports.deleteCategroy=(req,res,next)=>
// {
//     category.deleteOne({category:req.category}).then(result=>
//         {
//             res.status(200).json({message:'deleted successfully',category:result});
//         })
//         .catch(err=>
//             {
//                 consolr.log(err);
//             })
// }