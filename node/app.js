const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const app = express();

const productRoutes = require('./routes/products')
const authRoutes = require('./routes/auth')

app.use(bodyParser.json());

app.use (productRoutes);
app.use (authRoutes);

app.use((error,req,res,next)=>{
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data =error.data;
    res.status(status).json({message:message,data:data});
})

mongoose.connect('mongodb+srv://Aj:1234567890@shoppingelf.g9ogi.mongodb.net/ShoppingElf?retryWrites=true&w=majority')
.then((result)=>
{
    app.listen(8080);
})
.catch(err=>
{
    console.log(err);
})