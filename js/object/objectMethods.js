const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
    },
    hobbies: ["reading", "traveling", "cycling"],
    education: {
        highSchool: "Springfield High",
        college: "New York University",
        degree: "Bachelor of Science"
    },
    contact: {
        email: "john.doe@example.com",
        phone: "+1-123-456-7890"
    },
    greet: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
};

// const objectKeys = Object.keys(person);
// console.log(objectKeys);
// const objectValues =  Object.values(person);
// console.log(objectValues);

// const sample = {};
// const example = {car : "PoloGT", colour : "Gray"};
// Object.assign(sample,person,example);
// console.log(sample);

console.log("person : ",person);

//  shallow copy
const newObOne = {...person};
console.log("newObOne :",newObOne);
const newObTwo = Object.assign({},person);
console.log("newObTwo : ",newObTwo);

newObTwo.address.state = "Kochi";
console.log("person : ",person);
console.log("newObOne :",newObOne);
console.log("newObTwo : ",newObTwo);

// deep copy
const deepCopy = JSON.parse(JSON.stringify(person));
deepCopy.address.state = "Banglore";
console.log("deep copy :",deepCopy);
console.log("person : ",person);

