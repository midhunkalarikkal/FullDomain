let arr = [1,2,3,4,5,6,7,8,9,10];
const resultOne = arr.map((cv,ci,arr) => cv*2 );
const resultTwo = arr.map((cv,ci,arr) => { return cv*2 } );
console.log(resultOne);
console.log(resultTwo);

let users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

const resultThree = users.map((cv,ci,arr) => {
    return cv.name
})
console.log(resultThree);


let strArr = ["1","2","3"];
  const resultFour = strArr.map((cv,ci,arr) => {
    return parseInt(cv);
  })
  console.log(resultFour);

  const resultFive = arr.map((cv,ci,arr) => {
    return cv.toString();
  })
  console.log(resultFive);