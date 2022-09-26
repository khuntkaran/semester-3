const express = require('express');
 
const mongoose = require('mongoose');
const Student = require('./model/Student');
const bodyParser = require('body-parser');
const cors = require('cors')
mongoose.connect('mongodb://localhost:27017/Colleges').then(()=>{
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cors());
    app.get('/studentname',async (req,res)=>{
       const data=await Student.find();
       res.send(data);
    })

    app.get('/:id',async (req,res)=>{
        const data=await Student.findOne({SID:req.params.id});
        res.send(data);
     })

     app.delete('/:id',async (req,res)=>{
        const data=await Student.deleteOne({SID:req.params.id});
        res.send(data);
     })

     app.post('/studentadd',async (req,res)=>{
        const stu = new Student();

        stu.SID=req.body.SID;
        stu.Name=req.body.SN;
        stu.Age=req.body.SA;
        stu.Sem=req.body.SS;

        const data = await stu.save();
        res.send(data);
     })

     app.put('/student/:id',async (req,res)=>{
      const data=await Student.findOne({SID:req.params.id});
      data.Name=req.body.SN;
      data.Age=req.body.SA;
      data.Sem=req.body.SS;

      await data.save()
      res.send(data);
     })

    app.listen(3003,()=>{
        console.log("server started at @ 3003");
    })
});
