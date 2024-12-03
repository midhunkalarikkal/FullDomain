const fs = require('fs');
const https = require('https');
const crypto = require('crypto');

var a = 100;
var b = 200;

// async
crypto.pbkdf2("password","salt",50000,50,"sha512",(err,data) => {
    console.log("async crypto done");
});

// sync 
crypto.pbkdf2Sync("password","salt",50000,50,"sha512");
console.log("sync crypto done")

https.get("https://dummyjson.com/products/1",
  (res) => {
    console.log("fetched data successfully");
  }
)

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
},5000)

setTimeout(() => {
    console.log("setTomeout of 0 seconds");
},0);

fs.readFile("./file.txt","utf8",
  (err, data ) => {
    console.log("File data : ",data);
  }
)

function multiply(a,b){
  const result = a*b;
  return result;
}

var c = multiply(a,b);
console.log(c);