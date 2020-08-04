const user = require('../models/user');
const {
    validationResult
} = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendgrididTransport = require('nodemailer-sendgrid-transport');
const nodemailer = require('nodemailer');
require('dotenv').config();

// let transporter = nodemailer.createTransport({
//     service:'gmail',
//     auth:{
//             user:'shoppingelf1234@gmail.com',
//             pass:'shoppingElf@123'
//     }
// })

// let mailOption = {
//     from:'shoppingelf1234@gmail.com',
//     to:'11as1827000588@gmail.com',
//     subject:'testing',
//     text:'It works',
// }
// transporter.sendMail(mailOption, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });

exports.signup = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    bcrypt.hash(password, 12).then(
            hashpw => {
                const User = new user({
                    email: email,
                    password: hashpw,
                    name: name,
                });
                return User.save();
            }
        ).then(result => {
            const token = jwt.sign({
                email: result.email,
                userId: result._id.toString()
            }, "somesuperdoopersecret", {
                expiresIn: '24h'
            });
            res.status(200).json({
                message: "User Created",
                token: token,
                userId: result._id.toString()
            })

        })

        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;
    user.findOne({
            email: email
        }).populate("cart_Products.productId").populate("ordered_Products.productId")
        .then(user => {

            if (!user) {
                const error = new Error('A user with this email could not be found');
                error.statusCode = 401;
                throw error;
            }

            loadedUser = user;
            return bcrypt.compare(password, user.password);
        })
        .then(isEqual => {
            if (!isEqual) {
                const error = new Error('Wrong password');
                error.statusCode = 401;
                throw error;
            }
            const token = jwt.sign({
                email: loadedUser.email,
                userId: loadedUser._id.toString()
            }, "somesuperdoopersecret", {
                expiresIn: '24h'
            });
            res.status(200).json({
                token: token,
                user: loadedUser
            })
        })

        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
}