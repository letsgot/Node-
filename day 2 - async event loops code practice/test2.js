const fs = require('fs');

setImmediate(()=>{
    console.log("Immediate 1");
})

setTimeout(() => {
    console.log("timer expired 1");
}, 0);

// process.nextTick() is a special function in Node.js that allows you to schedule a callback function to be executed immediately after the current operation (i.e., before the event loop continues with the next phase). It is part of the Node.js event-driven architecture and is crucial for handling asynchronous operations.
process.nextTick(()=>{
    console.log("nextTick1");
})

// example of process.nextTick()
// const fs = require('fs');

// fs.readFile('nonexistentfile.txt', 'utf8', (err, data) => {
//   if (err) {
//     process.nextTick(() => {
//       console.error('Error occurred:', err.message);
//     });
//   } else {
//     console.log('File data:', data);
//   }
// });

Promise.resolve("resolved").then((value)=>{
    console.log(value,"promise");
})

const a = 10;

console.log(a);

fs.readFile('text.txt',"utf-8",(data)=>{
    console.log(data,"start");

    process.nextTick(()=>{
        console.log("nextTick 2");
    })

    setTimeout(()=>{
      console.log("timer expired 2");
    },0)

    setImmediate(()=>{
        console.log("immediate 2");
    })

    Promise.resolve("resolved").then((value)=>{
        console.log("promise 2");
    })

    console.log(data,"end");
})

console.log("end of file");


// a = 10
// end of file
// nextTick1
// resolved promise
// timer expired 1
// immediate 1

// start 
// end
// nextTick 2
// promise 2
// timer expired 2
// immediate 2



