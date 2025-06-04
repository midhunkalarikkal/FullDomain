// Example 1
var sample = function(a,b) {
    console.log(`${a} ${b} ${this.c}`);
};

const obj = {
    c : "SDE",
};

const result = sample.bind(obj);
result(1,2);

//  Example two
const object1 = {
    name: "Midhun",
    question: "How Are You ?",
    greet: () => {
        return `Hi ${this.name} ${this.question}`;
    }
};

const object2 = {
    name: "Tom",
    question: "Where are you?",
};

const bindResult = object1.greet.bind(object2);
console.log(bindResult());