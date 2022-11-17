const mongoose = require("mongoose");

const schema = mongoose.Schema({
    Sid :  {
        type:String
    },
    Name : String,
    Age : Number,
    Sem : Number
});

module.exports = mongoose.model("Student",schema,"Students");