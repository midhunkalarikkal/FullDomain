console.log("Sum module");

// z = "New variable";

 function calculateSum(a,b){
    console.log("Sum is :",a+b);
}

module.exports = calculateSum;

// module.exports.calculateSum = calculateSum; valid one
// module.exports = {calculateSum};