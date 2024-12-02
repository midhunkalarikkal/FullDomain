// const { calculateSum } = require('./calculate/sum');
// import { calculateSum } from './sum.js';


const {calculateSum, calculateMultiply} = require('./calculate'); 

const data = require('./data.json');

var name = "Midhun";
var a = 10;
var b = 20;
console.log(name);

calculateSum(a,b);
calculateMultiply(a,b);
console.log("data.json : ",data);
// console.log(global);
// console.log(globalThis);
console.log(globalThis === global);

(
    function(){
        console.log("This is a IIFE function")
    }
)()