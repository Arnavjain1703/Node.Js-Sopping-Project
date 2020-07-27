const user = require('../models/user');
const {validationResult} = require('express-validator/check');
const bcrypt = require('bcryptjs');
exports.signup = (req,res,next) =>
{
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        const error = new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    bcrypt.hash(password,12).then(
        hashpw=>
        {
            const User = new user(
                {
                    email:email,
                    password:hashpw,
                    name:name,
                }
            );
            return User.save();
        }
    ).then(result=>
        {
            res.status(201).json({message:'user created',userId:result._id});
        }).catch(err=>
        {
            if(!err.statusCode)
            {
                err.statusCode = 500;
            }
            next(err);
        });
};