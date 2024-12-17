// Remove the last property from an object
const obj = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
const keys = Object.keys(obj);
const lastKey = keys[keys.length - 1];
console.log(keys);
console.log(lastKey);
delete(obj[lastKey]);
console.log(obj);