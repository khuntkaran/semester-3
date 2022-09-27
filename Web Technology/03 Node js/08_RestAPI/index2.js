const express = require('express');
const mongoose = require('mongoose');
const bodyParser=require("body-parser");
const Products =require( './model/Products');

mongoose.connect("mongodb://localhost:27017/Shope").then(()=>{
    const app = express();
    app.use(bodyParser.urlencoded({extended:false}))
    app.listen(3030,()=>{
        console.log("server start at port no 3030");
    })

    app.get('/Product',async (req,res)=>{
        const data = await Products.find();
        res.send(data);
    })

    app.get('/Product/:id',async (req,res)=>{
        const data = await Products.findOne({PID:req.params.id});
        res.send(data)
    })

    app.delete('/Product/:id',async (req,res)=>{
        const data = await Products.deleteOne({PID:req.params.id});
        res.send(data);
    })

    app.post('/ProductAdd',async (req,res)=>{
        const newproduct=Products();
        newproduct.PID=req.body.PID;
        newproduct.PName=req.body.PName;
        newproduct.PPrice=req.body.PPrice;
        newproduct.PImage=req.body.PImage;
        newproduct.PCompany=req.body.PCompany;

        const data=await newproduct.save();
        res.send(data);
    })

    app.put('/ProductEdit/:id',async (req,res)=>{
        const data = await Products.findOne({PID:req.params.id});
        data.PName=req.body.PName;
        data.PPrice=req.body.PPrice;
        data.PImage=req.body.PImage;
        data.PCompany=req.body.PCompany;

        await data.save();
        res.send(data);
    })
})