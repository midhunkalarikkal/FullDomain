const arr = [1,2,3,4,5,6];
const arr2 = [1,2,3];
function update(a, b){
    a.push(10);
    b = 10;
    console.log(b);
    return a;
}
console.log(update(arr, arr2));
console.log(arr2)

const obj = { name : "Midhun" };
const obj2 = { place : "kochi" };

function updateObj(a, b){
    b = { pin : 3};
    console.log(b);
    a.age = 10;
    return a;
}
console.log(updateObj(obj,obj2));
console.log(obj2);