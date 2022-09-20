const express = require('express');
const app = express();

app.listen(4000,()=>{
    console.log("Your Port No : 4000");
});

app.all('/',(req,res,next)=>{
    res.send("all time");
    next();
})
app.get('/',(req,res)=>{
    console.log("Home Page");
})
app.get('/about',(req,res)=>{
    res.send("about Page");
})
app.delete("/delete",(req,res)=>{
    res.send("delete successfuly")
})