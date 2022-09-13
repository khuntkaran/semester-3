console.log("hello world ");



//------------------------fs-------------------//
const fs= require("fs");



//----------Synchronous---------//

//fs.mkdirSync('thapa');

//fs.writeFileSync("thapa/bio.txt","i am karan");
//fs.writeFileSync("thapa/bio.txt","i am karan from rajkot"); //Data Override

//fs.appendFileSync("thapa/bio.txt","\ni am software engineer"); //Data added

// const data=fs.readFileSync('thapa/bio.txt');
// console.log(data);
// const org_data=data.toString();
// console.log(org_data);
// const data=fs.readFileSync('thapa/bio.txt','utf8');
// console.log(data)

//fs.renameSync("thapa/bio.txt","thapa/myBio.txt");

//fs.unlinkSync('thapa/myBio.txt'); //Delete File 
//fs.rmdirSync('thapa'); //Delete Folder



//-------Asynchronous-----------//

//fs.mkdir("thapa",()=>{})

//fs.writeFile('read.txt','i am karan',()=>{console.log('successful');})

//fs.appendFile('read.txt',"\ni am software engineer",()=>{console.log("updated")})

//fs.readFile('read.txt','UTF-8',(err,data)=>{console.log(data)});

//fs.rename("read.txt","read_write.txt",()=>{console.log("rename successfuly")});

//fs.unlink('read_write.txt',()=>{console.log("deleted successfuly")}); //Delete File
//fs.rmdir("thapa",()=>{}) //Delete Folder





//------------------os--------------------//
const os = require("os");

// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.tmpdir());
// console.log(os.type());

// const fm = os.freemem();
// console.log(((fm/1024)/1024)/1024);

// const tm = os.totalmem();
// console.log(((tm/1024)/1024)/1024);





//----------------path-------------//
  const path = require("path");

// console.log(path.dirname("E:/semester-3/Web Technology/03 Node js/01_First/index.js"));
// console.log(path.extname("E:/semester-3/Web Technology/03 Node js/01_First/index.js"));
// console.log(path.basename("E:/semester-3/Web Technology/03 Node js/01_First/index.js"));
// console.log(path.parse("E:/semester-3/Web Technology/03 Node js/01_First/index.js"));
// const objpath=path.parse("E:/semester-3/Web Technology/03 Node js/01_First/index.js");
// console.log(objpath.name);
