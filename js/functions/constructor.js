function Person (name, age) {
    this.name = name;
    this.age = age;

    this.fullname = function () {
        console.log(`${this.name}`)
    }
}

const userOne = new Person("Tom", 22);
console.log(userOne)
userOne.fullname();