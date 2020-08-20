const orders = require('../models/orderedProduct')
const path = require('path');
const {
    validationResult
} = require('express-validator');

const fs = require('fs');
const {
    clear, Console
} = require('console');
exports.order = (req, res, next) => {

    orders.find({
                "userId": req.userId
            }).then((order) => {
                
                      console.log(order.length)
                        if(!order.length)
                        {       
                        const Order = new orders({
                            products: req.body.orders,
                            userId: req.userId
                        })
                        Order.save().then(result => {
                                res.status(201).json({
                                    message: 'Product Ordered',
                                    Products: result,
                                });
                            })
                            .catch(err => {
                                if (!err.statusCode) {
                                    err.statusCode = 500;
                                }
                                throw (err);
                            })
                        }
                        else{
                            for(let i=0;i<req.body.orders.length;i++)
                        {
                            order[0].products.push(req.body.orders[i]);
                        }
                        return order[0].save()
                        }
                        })
                        .then(result => {
                            res.status(201).json({
                                message: 'Product Ordered',
                                Products: result,
                            });
                        })
                        .catch(err => {
                            if (!err.statusCode) {
                                err.statusCode = 500;
                            }
                            throw (err);
                        })
                    
           
    }
        
    


 //         }
            //     }

            // ).catch(err => {
            //     if (!err.statusCode) {
            //         err.statusCode = 500;
            //     }
            //     throw (err);
            // })



        

        // orders.find({
        //         "userId": req.userId
        //     }).then((orders) => {
                   
        //            console.log(orders.length)     
        //             if (orders.length) {
                       
        //                 for(let i=0;i<req.body.orders.length;i++)
        //                 {
        //                     orders[0].products.push(req.body.orders[i]);
                            
        //                 }
        //                 console.log(orders)
        //                 orders.save().then(result => {
        //                     res.status(201).json({
        //                         message: 'Product Ordered',
        //                         Products: result,
        //                     });
        //                 })
        //                 .catch(err => {
        //                     if (!err.statusCode) {
        //                         err.statusCode = 500;
        //                     }
        //                     throw (err);
        //                 })
                        
        //             } else {

        // exports.getorder = (req, res, next) => {
        //     orders.find({
        //             "userId": req.userId
        //         }).populate("productId")
        //         .then(orders => {
        //             res.status(200).json({
        //                 message: 'Featched posts successfully',
        //                 Products: orders
        //             });
        //         })
        //         .catch(err => {
        //             if (!err.statusCode) {
        //                 err.statusCode = 500;
        //             }
        //             throw (err);
        //         })

        // }