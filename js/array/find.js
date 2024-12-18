const arr = [1,2,3,4,5,6,7,8,9,10];
const resultEven = arr.find((cv,ci,arr) => {
    return cv % 2 === 0
});
console.log(resultEven);

let users = [
    { name: 'Alice', lastname: 'Smith', age: 22, grade: 'A' },
    { name: 'Bob', lastname: 'Johnson', age: 24, grade: 'B' },
    { name: 'Charlie', lastname: 'Brown', age: 21, grade: 'A' },
    { name: 'David', lastname: 'Williams', age: 22, grade: 'C' },
    { name: 'Eva', lastname: 'Davis', age: 24, grade: 'B' }
];

const resultUser = users.find((cv,ci,arr) => {
    return cv. age > 22
})

console.log(resultUser);