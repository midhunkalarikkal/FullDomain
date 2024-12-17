let users = [
    { name: 'Alice', lastname: 'Smith', age: 22, grade: 'A' },
    { name: 'Bob', lastname: 'Johnson', age: 24, grade: 'B' },
    { name: 'Charlie', lastname: 'Brown', age: 21, grade: 'A' },
    { name: 'David', lastname: 'Williams', age: 22, grade: 'C' },
    { name: 'Eva', lastname: 'Davis', age: 24, grade: 'B' }
];


// Find users age <= 22
const resultAge = users.filter((cv) => {
    return cv.age <= 22
});

console.log(resultAge)

// Find users name their age <= 22
const resultName = users.filter((cv) => {
    if(cv.age <= 22){
        return cv
    }
}).map((cv) => cv.name);

console.log(resultName)