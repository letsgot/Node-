const fs = require('fs');

console.log("Start");

const a = 100;

setTimeout(()=>{
   console.log("timer expired");
},0);

fs.readFile('text.txt',"utf-8",(data)=>{
    console.log("file read asynchronously",data)
})

setImmediate(()=>{
   console.log("Immediate");
});

function fun(){
    console.log("fun called a = ",a);
}

fun();

console.log("end of the file");


// start 
// fun called a = 100
// end of the File
// timer expired 
// immediated
// file read asynchronously


