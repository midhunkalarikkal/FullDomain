let strings = ["A", "Hello", "JavaScript", "Programming Language", "Hi", "Code"];

const resultLength = strings.sort((a,b) => a.length-b.length);
console.log(resultLength);

let users = [
    { name: 'Eva', lastname: 'Davis', age: 24, grade: 'B' },
    { name: 'Alice', lastname: 'Smith', age: 22, grade: 'A' },
    { name: 'Charlie', lastname: 'Brown', age: 21, grade: 'A' },
    { name: 'Bob', lastname: 'Johnson', age: 24, grade: 'B' },
    { name: 'David', lastname: 'Williams', age: 22, grade: 'C' },
];

const resultUsersName = users.sort((a,b) => {
    return a.name.length - b.name.length;
});

console.log(resultUsersName);

const resultUsersAge = users.sort((a,b) => {
    return b.age - a.age;
});

console.log(resultUsersAge);


const sortWithName = users.sort((a,b) => {
    return a.name.localeCompare(b.name);
});

console.log(sortWithName);

const customArr = [100,200,300];
const resultCustomArr = customArr.sort((a,b) => {
    const order = { 200 : 1, 100: 3, 300:2};
    return order[a] - order[b];
});

console.log(resultCustomArr);