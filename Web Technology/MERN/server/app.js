const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const users = require("./models/users");
const bcrypt = require("bcryptjs");
const jwt=require('jsonwebtoken');
const authenticate=require("./middleware/authenticate");
const cookieParser=require("cookie-parser");




mongoose.connect(process.env.DATABASE)
.then(()=>{
    const app = express();
    console.log('yes connction');
    app.use(express.json());
    app.use(express.urlencoded({extended:false}));
    app.use(cookieParser());

    app.use(express.static("../client/build"));
    app.use('/login',express.static("../client/build"));
    app.use('/register',express.static("../client/build"));
    app.use('/login/*',express.static("../client/build"));

    app.get('/authenticate',authenticate,(req,res)=>{
        res.status(200).send(req.rootUser);
    })

    app.get('/logout',(req,res)=>{
        res.clearCookie('kkkBank');
        res.status(200).send("user logout");
    })

    app.post('/register', async (req,res)=>{
        try{
            const password =req.body.password;
            const confirmpassword=req.body.confirmpassword;

            if(password===confirmpassword){
                const registeremp = new users()
                    registeremp.firstname   = req.body.firstname,
                    registeremp.lastname    = req.body.lastname,
                    registeremp.email       = req.body.email,
                    registeremp.gender      = req.body.gender,
                    registeremp.phone       = req.body.phone,
                    registeremp.age         = req.body.age,
                    registeremp.password    = req.body.password,
                    registeremp.balance     = 5000
                await registeremp.save();
                res.status(200).send({e:"success"})
            }
            else{res.status(401).send({e:"unmatch"});}
        }
        catch(e){
            res.status(401).send({...e,e:"error"});
        }
    })

    app.post('/login', async (req,res)=>{
        try{
            const data=await users.findOne({email:req.body.email});

            const isMatch = await bcrypt.compare(req.body.password,data.password)
            if(isMatch){
                const token= await data.generateAuthToken();
                res.cookie("kkkBank",token,{
                    expires:new Date(Date.now()+25892000000),
                    httpOnly:true
                });
                res.status(200).send({e:"success"});
            }
            else{
                res.status(401).send({e:"unmatch"});
            }
        }
        catch(e){
            res.status(401).send({...e,e:"error"});
        }
    })

    app.post('/pay', async (req,res)=>{
        
        try{
            const From=await users.findOne({phone:req.body.from});
            const To=await users.findOne({phone:req.body.to});
            
            if(From && To){
                
                const from2= await From.from(req.body.from,req.body.to,req.body.balance);
                const to2= await To.to(req.body.from,req.body.to,req.body.balance);
                res.status(200).send({e:"success"});
            }
            else{
                res.status(401).send({e:"not fiend"});
            }
        }
        catch(e){
            res.status(401).send({...e,e:"transaction failed!!"});
        }
    })

    if(process.env.NODE_ENV=="production"){
        app.use(express.static("client/build"));
    }
    const port = process.env.PORT ||3003;
    app.listen(port,()=>{});
})
.catch((e)=>{
    console.log("no connection"+e);
    res.status(400).send({...e,e:"server"})
})


