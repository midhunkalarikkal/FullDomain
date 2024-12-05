const fs = require('fs');
const crypto = require('crypto');

crypto.pbkdf2("password","salt",500000,50,"sha512", (err, key) => {
    console.log("1 - crypto pbkfd2 done")
})

crypto.pbkdf2("password","salt",500000,50,"sha512", (err, key) => {
    console.log("2 - crypto pbkfd2 done")
})

crypto.pbkdf2("password","salt",500000,50,"sha512", (err, key) => {
    console.log("3 - crypto pbkfd2 done")
})

crypto.pbkdf2("password","salt",500000,50,"sha512", (err, key) => {
    console.log("4 - crypto pbkfd2 done")
})

crypto.pbkdf2("password","salt",500000,50,"sha512", (err, key) => {
    console.log("5 - crypto pbkfd2 done")
})

// This all crypto tasks will complete at same time it is because the v8 engine offloads this tasks to the libuv 
// and libuv will use threadppool and thread pool will use 4 thread simultaneously

// The fifth one will take time because it is waiting for a thread to run because for the four crypto tasks the four threads are occupied