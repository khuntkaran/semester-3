const jwt=require('jsonwebtoken');
const user = require("../models/users");

const authenticate = async (req,res,next)=>{

    try{
        const token = req.cookies.kkkBank;
        const verifytoken = jwt.verify(token,process.env.SECRET_KEY);
        
        const rootUser = await user.findOne({_id:verifytoken._id,"tokens.token":token});

        if(!rootUser){throw new Error('user not found')}

        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser._id;

        next();
    }
    catch(e){
        res.status(401).send({...e,e:"error"});
    }
}

module.exports = authenticate;