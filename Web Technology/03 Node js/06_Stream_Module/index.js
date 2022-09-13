const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on('request',(req,res)=>{

   //1st way
  fs.readFile("index.txt",(err,data)=>{
    if(err)return console.log(err);
    res.end(data.toString()+'-----1st_complite-------');
  })

  //2nd way
  const rstream = fs.createReadStream('index.txt');
  rstream.on('data',(chunkdata)=>{
    res.write(chunkdata);
    rstream.on('end',()=>{
        res.end('-----2nd_complite-------');
    })
  })

  //3rd way
  rstream.pipe(res);
})

server.listen(8000,"127.0.0.1");