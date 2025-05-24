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