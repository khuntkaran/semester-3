console.log("hello world ");
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

//fs.writeFile('read.txt','i am karan',()=>{console.log('successful');})

//fs.appendFile('read.txt',"\ni am software engineer",()=>{console.log("updated")})

//fs.readFile('read.txt','UTF-8',(err,data)=>{console.log(data)});

//fs.rename("read.txt","read_write.txt",()=>{console.log("rename successfuly")});

//fs.unlink('read_write.txt',()=>{console.log("deleted successfuly")}); //Delete File
