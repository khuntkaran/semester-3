const mongoose = require("mongoose");

const schema = mongoose.Schema({
    PID:Number,
    PName:String,
    PPrice:Number,
    PImage:String,
    PCompany:String
})

module.exports = mongoose.model("Products",schema,"Products");