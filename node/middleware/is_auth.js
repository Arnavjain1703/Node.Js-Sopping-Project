const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>
{   const check  = req.get('Authorization')
    if(!check)
    {
        const error = new Error('Not Authenticated');
        error.ststusCode = 401;
        throw error;
    }
    const token  = check;
   
    let decodedToken;
    try{    
            console.log(token)
            decodedToken = jwt.verify(token,'somesuperdoopersecret');
            console.log(decodedToken)
    } catch(err)
    {
        err.statusCode = 500;
        throw err;
    }
    
    if(!decodedToken)
    {
        const error = new Error('Not authenticated');
        error.statusCode = 401;
        throw error;
    }
    req.userId = decodedToken.userId;
    next();
};