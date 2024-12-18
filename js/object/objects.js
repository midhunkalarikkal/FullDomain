// Sample object
const obj = {
    fname : " midun",
    lname : "Kalarikkal",
    age : 25,
    place : "ktpm",
    skills : {
        coding : ["c","c++","js"],
        lang : ["en","ml","tm","hi"]
    },
    fullname : function () {
        return this.fname + " " + this.lname
    }
}

console.log(obj);
console.log(obj.fullname());
console.log(delete(obj.age));
console.log(obj);
obj.age = 25;
console.log(obj);
obj.age = 20;
console.log(obj);

// Converting to json
ob = JSON.stringify(obj);
console.log(obj);
console.log(ob);
console.log(JSON.parse(ob));

function dog(name){
    this.name = name
}

dog.prototype.bark = function(){
    console.log(this.name + " says sound");
}

let myDog = new dog("buddy");
myDog.bark();

