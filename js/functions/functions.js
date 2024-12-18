//  function statement
function a(){
    console.log("function statement");
}

// function expression
var a = function(){
    console.log("function expression");
}

// function passed as an argument
const square = function(x){
    return x*x;
}
const apply = function(fun,op){
    return fun(op);
}
console.log(apply(square,4));

//  returned from another function
const one = function(x){
    return function(y){
        return x * y
    }
}

const result = one(5);
const originalResult = result(10);
console.log(originalResult);

// funstions stored in datastructure
const arr = [
    function(x){return x*x},
    function(y){return y+y}
]
console.log(arr[0](5));

//  constructure function
function cf(n){
    this.name = n
}
let obj = new cf("midhun")
console.log(obj);
console.log(JSON.stringify(obj));

// Factory function
function factoryf(){
    var vlaue = "Midhun";
    return { name : vlaue}
}
console.log(factoryf());

// Pure function
function pure(x){
    return x*x;
}
console.log(pure(10));

