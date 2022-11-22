const express = require('express');
const app = express();
// require("./db/conn");
const Register = require("./models/register");
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");


    mongoose.connect('mongodb://localhost:27017/demoform')
    .then(()=>{
        console.log("Yes connection");
        app.use(express.json());
        app.use(express.urlencoded({extended:false}))
        const port = process.env.PORT ||5000;

        app.listen(port,()=>{
            console.log(`Your Port No : ${port}`);
        });
//--------
        const path = require("path");

        const staticPath=path.join(__dirname,"../views");
        console.log(staticPath);

        app.set("view engine", "hbs")
        
//---------
app.get('/',(req,res)=>{
       res.render(`${staticPath}`)
     })

        app.get('/register',(req,res)=>{
            res.render(`${staticPath}`+`/register`)
        })
        
        app.get('/login',(req,res)=>{
            res.render(`${staticPath}`+"/login")
        })

        
        app.post('/register', async (req,res)=>{
            try{
                const password =req.body.password;
                const confirmpassword=req.body.confirmpassword;

                if(password===confirmpassword){
                    const registeremp = new Register({
                        firstname: req.body.firstname,
                        lastname : req.body.lastname,
                        email: req.body.email,
                        gender: req.body.gender,
                        phone: req.body.phone,
                        age : req.body.age,
                        password: req.body.password
                    })
                    const registered = await registeremp.save();
                    res.status(200).render(`content`)
                }
                else{
                    res.send("password are not matching")
                }
            }
            catch(e){
                res.status(400).send(e);
            }
        })

        app.post('/login', async (req,res)=>{
            try{
                const data=await Register.findOne({email:req.body.email});

                const isMatch = await bcrypt.compare(req.body.password,data.password)
                if(isMatch){
                    res.status(200).render(`content`);
                }
                else{
                    res.send('password envalid')
                }
             
            }
            catch(e){
                res.status(400).send("not matched");
            }
        })
    })
    .catch((e)=>{
        console.log("no connection");
    })
    