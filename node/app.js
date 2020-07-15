const path = require('path');

const express  =require('express');
const bodyParser  =require('body-parser');

const dp = require('./util/database');

const app = express();

const adminRoutes= require('./routes/admin');
const shopRoutes = require('./routes/shop');

dp.execute('SELECT * FROM products')
.then(result =>
{
   console.log(result[0],result[1]);
})
.catch(err=>{
    console.log(err);
});

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>
{
   res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})


app.listen(3000);

