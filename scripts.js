/*const interval =setInterval(()=>{
    console.log("running");
})
setTimeout(()=>{
    console.log("hello");
},2000);*/

/*console.log(__filename);
console.log(__dirname);*/

/*const path=require("path");
console.log(path.basename(__filename));*/

/*const path=require("path");
console.log(path.extname(__filename));*/

/*const path= require("path");
console.log(path.dirname(__filename));*/

const path=require("path");
// console.log(path.join(__dirname,"api","scripts.js"));

const fs=require("fs");
fs.mkdir(path.join(__dirname,"/api"),(err)=>{
    if(err) throw err;
});

console.log(fs)