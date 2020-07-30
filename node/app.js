const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const app = express();

const productRoutes = require('./routes/products')
const authRoutes = require('./routes/auth')
const categoryRoutes = require('./routes/category')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();  
})

app.use(bodyParser.json());

app.use (productRoutes);
app.use (authRoutes);
app.use(categoryRoutes);

app.use((error,req,res,next)=>{
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