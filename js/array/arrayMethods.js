const arr = [1,2,3,4,5,6,7,8,9,10];
const resultOne = arr.some((cv) => cv >= 10);
console.log(resultOne)

const resultTwo = arr.every((cv) => cv >= 1);
console.log(resultTwo);

const findINdex = arr.findIndex(cv => cv - 7 === 2);
console.log(findINdex)

for(let [key,value] of arr.entries()){
    console.log(key + " -> " + value);
}