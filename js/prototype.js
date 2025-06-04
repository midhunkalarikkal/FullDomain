// Prototype and Prototype chaining
const object1 = {
    country: "India"
}

const object2 = {
    name: "midhun",
    city: "banglore",
    job: "SDE1"
};

object2.__proto__ = object1;

const object3 = {
    name: "Midhun K Paniker"
}

object3.__proto__ = object2;

console.log(object3.name);
console.log(object3.city);
console.log(object3.job);
console.log(object3.country);

function Sample (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

function Person (firstName, lastName) {
    var firstName = firstName;
    var lastName = lastName;
    return { firstName, lastName }
}


var fullname = function () {
    return `${this.firstName} ${this.lastName}`;
}

Sample.prototype.fullname = fullname;

const userOne = new Sample("Midhun","Kalarikkal");
console.log(userOne);
console.log(userOne.fullname());

Person.prototype.fullname = fullname;
const userTwo = Person("Mdihun", "Kalarikkal");
console.log(userTwo);
console.log(userTwo.fullname());