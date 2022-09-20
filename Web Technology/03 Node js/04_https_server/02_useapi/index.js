const http = require("http");
const fs = require('fs');
const data =fs.readFileSync(`${__dirname}/userapi.json`,'utf-8')
        console.log(data); 
        const objdata =JSON.parse(data);
       
const server = http.createServer((req,res)=>{
     
    console.log(req.url);
    if(req.url == "/"){
        res.end("helow from the home side."+req.url);
    }
    else if(req.url == "/about"){
        res.end("hello from about");
    }
    else if(req.url == "/userapi"){
        res.writeHead(200,{"Content-type":"application/json"})
        res.end("hello from usrerapi"+"\n"+`\n${objdata.karan}`);
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 error </h1>"+req.url);
    }
}); 

server.listen(8261,"127.0.0.1",()=>{
    console.log("listing to the port no : 8261")
});