const fs = require('fs');

setImmediate(() => console.log("setImmediate"));

setTimeout(() => {
    console.log("Timer expired");
},0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt",'utf8',() => {
    
    setTimeout(() => {
        console.log("2nd Timer expired");
    },0);

    process.nextTick(() => console.log("2nd process nextTick"));

    setImmediate(() => console.log("2nd setImmediate"));

    console.log("File reading CB");
})


process.nextTick(() => console.log("process nextTick"));

console.log("Last line of the file.");


// Last line if the file.
// nextTick
// Promise
// Timer expired
// setImmediate
// File reading CB
// 2nd nextTick
// 2nd setImmediate
// 2nd Timer expired

// Here why the 2nd setImmediate is before the 2nd  Timer expired because once all the async functions done the eventloop will wait in the poll phase 
// and then the fs.readFile will be complete and callback will be in the poll callback queue and then event loop push it in to the call stack  then event loop starts from the poll phase
// so that from there first the priority queue then check phase and then close phase then timer phase.