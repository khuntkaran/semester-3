 const EventEmitter = require('events');

 const event = new EventEmitter();

event.on('sayMyName',()=>{
    console.log("your name is khunt")
})
event.on('sayMyName',()=>{
    console.log("your name is karan")
})
event.on('sayMyName',()=>{
    console.log("your name is k")
})
event.on('checkpage',(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg} `)
})
// event.emit("sayMyName");
event.emit("checkpage",200,"ok");