const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>
{   const check  = req.get('Authorization');
    if(!check)
    {
        const error = new Error('Not Authenticated');
        error.ststusCode = 401;
        throw error;
    }
    const token  = check.split(' ')[0];
    console.log(token);
    let decodedToken;
    try{
            decodedToken = jwt.verify(token,'somesuperdoopersecret');
    }catch(err)
    {
        err.ststusCode = 500;
        throw err;
    }
    if(!decodedToken)
    {
        const error =new Error('Not authenticated');
        error.ststusCode = 401;
        throw error;
    }
    req.userId = decodedToken.userId;
    next();
};