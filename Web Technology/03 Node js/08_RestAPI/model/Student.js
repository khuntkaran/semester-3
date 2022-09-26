const mongoose = require("mongoose");

const schema = mongoose.Schema({
    SID:Number,
    Name : String,
    Age : Number,
    Sem : Number
});

module.exports = mongoose.model("Student",schema,"Students");