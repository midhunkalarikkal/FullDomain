// Encapsulation
function sample(){
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

let result = sample();
console.log(result());
console.log(result());
console.log(result());
