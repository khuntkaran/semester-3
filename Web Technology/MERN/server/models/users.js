const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const jwt=require('jsonwebtoken');

const schema = mongoose.Schema({
    firstname:String,
    lastname : String,
    email:{type:String,unique:true},
    gender:String,
    phone: {type:Number,unique:true},
    age : Number,
    password:String,
    tokens:[
        {
            token:{type:String}
        }
    ],
    balance:Number,
    transactions:[
        {
            from:Number,
            to:Number,
            balance:Number,
            date:{type:Date,default:Date.now}
        }
    ]
});

schema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await  bcrypt.hash(this.password,4);
    }
    next();
} );

schema.methods.generateAuthToken = async function (){
    try{
        let newtoken = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:newtoken});
        await this.save();
        return newtoken;
    }catch(e){
        res.status(401).send({...e,e:"error"});
    }
}

schema.methods.from = async function (from,to,balance){
    try{
        if(balance>this.balance){
            throw "balance not valid"
        }
        this.transactions=this.transactions.concat({from,to,balance});
        this.balance=this.balance-balance;
        
        await this.save();
        
    }catch(e){
        res.status(401).send({...e,e:"error"});
    }
}

schema.methods.to = async function (from,to,balance){
    try{
        this.transactions=this.transactions.concat({from,to,balance});
        this.balance+=parseInt(balance);
        await this.save();
        
    }catch(e){
        res.status(401).send({...e,e:"error"});
    }
}

module.exports = mongoose.model("users",schema);