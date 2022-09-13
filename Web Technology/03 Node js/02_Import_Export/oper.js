const add =(a,b)=>{
    return a + b;
};
const sub =(a,b)=>{
    return a - b;
};
//module.exports = add;  // single module export
module.exports.add25 = add;
module.exports.sub25 = sub;

module.exports={add,sub};