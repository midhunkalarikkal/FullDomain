const jsonString = '{"name": "John", "age": 30, "city": "New York"}';

console.log(JSON.parse(jsonString))

console.log(JSON.stringify(JSON.parse(jsonString)));