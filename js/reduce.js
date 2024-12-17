const arr = [1,2,3,4,5,6,7,8,9,10];

// Find sum
const resultSum = arr.reduce((acc,cv,ci,arr) => {
    return acc + cv
},0)
console.log("Sum : ",resultSum);

//  Find max
function findMax(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max
}
console.log("Max : ",findMax(arr));

const resultMax = arr.reduce((acc,cv) => {
    return cv > acc ? cv : acc
},0)
console.log("Max : ",resultMax)

// Find the largest odd element
const resultLOddEl = function(arr){
    let loe = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            if(loe < arr[i]){
                loe = arr[i]
            }
        }
    }
    return loe;
}
console.log("Largest odd element : ",resultLOddEl(arr));

const resultLargestOddElement = arr.reduce((acc,cv) => {
    if(cv % 2 !== 0){
        if(acc < cv){
            acc = cv
        }
    }
    return acc
},0)

console.log("largestOddElement : ",resultLargestOddElement);











// object
let users = [
    { name: 'Alice', lastname: 'Smith', age: 22, grade: 'A' },
    { name: 'Bob', lastname: 'Johnson', age: 24, grade: 'B' },
    { name: 'Charlie', lastname: 'Brown', age: 21, grade: 'A' },
    { name: 'David', lastname: 'Williams', age: 22, grade: 'C' },
    { name: 'Eva', lastname: 'Davis', age: 24, grade: 'B' }
];

// 1. list fullnames of all these users
function fullName(users){
    let result = [];
    for(let i = 0; i < users.length; i++){
        result.push(users[i].name+ " " + users[i].lastname )
    }
    return result
}

console.log(fullName(users));

const fullNameOut = users.reduce((acc,cv) => {
    acc.push(cv.name + " " + cv.lastname)
    return acc
},[])

console.log(fullNameOut);


// users with particular age : { 22 : 2, 24: 2, 21 : 1 }
const resultOne = users.reduce((acc,cv) => {
    if(acc[cv.age]){
        acc[cv.age] = ++acc[cv.age];
    }else{
        acc[cv.age] = 1;
    }
    return acc;
},{})

console.log(resultOne)