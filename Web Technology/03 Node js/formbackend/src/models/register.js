const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const schema = mongoose.Schema({
    firstname:String,
    lastname : String,
    email:{
        type:String,
        unique:true
    },
    gender:String,
    phone: {
        type:Number,
        unique:true
    },
    age : Number,
    password:String
});

schema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,5);
    }
    next();
} )

module.exports = mongoose.model("Register",schema,"Registers");