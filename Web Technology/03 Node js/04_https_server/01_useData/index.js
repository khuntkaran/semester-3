const fs = require("fs");
const bio ={
    name : "karan",
    age : 19,
    work : "node"
}

const jsondata = JSON.stringify(bio);

fs.writeFile("myjson.json",jsondata,(err)=>{
    console.log("done");
})

fs.readFile("myjson.json","utf-8",(err,data)=>{
    const orgdata=JSON.parse(data)
    console.log(orgdata); 
})


