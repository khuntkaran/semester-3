const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("helow from the home side."+req.url);
    }
    else if(req.url == "/about"){
        res.end("hello from about");
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 error </h1>"+req.url);
    }
}); 

server.listen(8261,"127.0.0.1",()=>{
    console.log("listing to the port no : 8261")
});