const colors = ['red', 'blue', 'green', 'yellow', ["dark","contrast","saturation"], "sample","example"];

// destructuring
// skipping
// destructuring the nested array
// rest operator
const [one, two,,,[three, four], ...rm] = colors;

console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(rm);

let ob = {
    name : "Midhun", age : 20, place : "ktpm", address : {
        city : "Ktpm",
        state : "Kerala",
        pin :  679571
    },
    car : "Mercedes",
}


console.log(ob.name);

const { a, b} = ob;
console.log(a) // undefined
console.log(b) // undefined


// name destrcuturing
// age destructuring with renameing
// destrcutturing the nested object address
// new field with default value
// rest operator
const { age : personage,name, address : { pin : pinNumber },excavator = "jcb", ...rem} = ob;
console.log(name);
console.log(personage);
console.log(rem);
console.log(pinNumber);
console.log(excavator);


// combined destructure
const Sample = {
    user : "Midhun",
    hobbies : [
        "Coding","Cycling","Gaming"
    ]
}

const {user : personName, hobbies : [hobbie1, hobbie2]} = Sample;

console.log(personName);
console.log(hobbie1);
console.log(hobbie2);