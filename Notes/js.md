## `JAVASCRIPT` ##
===================
JavaScript is a high-level, dynamic, interpreted programming language primarily used for adding interactivity and dynamic behavior to web pages. It is a single-threaded, synchronous, and event-driven language that supports both functional and object-oriented programming paradigms. JavaScript runs in the browser and server environments (like Node.js) using engines such as V8, which execute its code.

A `dynamic language` means we can define variables, objects, and functions without specifying their types beforehand. The type of a variable can change at runtime.

`Interpreted` means that the code is read and executed line by line by an interpreter, without the need for pre-compiling it into machine code.

`Synchronous`
JavaScript executes code line by line, in order. It waits for one task to complete before moving to the next.

`Single-Threaded`
JavaScript has only one main thread to execute code, meaning it can handle one task at a time.

An `event-driven` language means the flow of the program is determined by events, such as user actions (clicks, key presses), system messages, or other triggers. Instead of executing code sequentially, it waits for an event to occur and then runs the corresponding code (called an event handler).

Javascript is neighther a interpreter language nor compiler language, but it uses both of them inside v8 engine.
The compilation process inside the v8 engine is said to be the `JIT Compilation` that menas just in time compilation.





## `JIT (Just in time)` ##
============================
Just-In-Time (JIT) Compilation: JavaScript is traditionally an interpreted language, meaning code is executed directly without a compilation step. However, modern JavaScript engines like V8 use JIT compilation to improve performance.

`Ignition` interpreter and `turbofan` compiler

JIT Compilation means that V8 doesn't compile the entire code upfront. Instead, it compiles JavaScript code just in time — as it runs. It first runs the code and collects runtime data. If it detects that certain parts of the code are used frequently, it compiles those parts into machine code for faster execution.





## `Advantages of JavaScript` ##
==================================
- Versatility: Used for both client and server-side development.
- Asynchronous Programming: Supports non-blocking code for responsive applications.
- Rich Ecosystem: Abundance of libraries and frameworks for efficient development.
- Dynamic Typing: Flexible handling of variable types simplifies coding.
- Community Support: Large and active developer community for shared knowledge.





## `Disadvantages of JavaScript` ##
====================================
- Browser Compatibility: Inconsistencies in how browsers interpret JavaScript.
- Security Concerns: Vulnerable to issues like Cross-Site Scripting (XSS) attacks.
- Single Threaded: Limited to one operation at a time, potentially causing bottlenecks.
- Callback Hell: Nested callbacks can lead to complex and hard-to-read code.
- Lack of Strong Typing: Dynamic typing can result in runtime errors, requiring thorough testing.





## `Execution context` ##
=========================
Everything in javascript is happens inside the Executiom context and it have two components memory and code.
The execution context is created in the call stack

`Memory Component`:
Variables and functions are stored here as key-value pairs.
This component is also referred to as the Variable Environment.

`Code Component`:
The code is executed one line at a time.
This component is also known as the Thread of Execution.


When executing a program its first phase is memory creation

In this phase inside the memory component for variales is assigned to undefined and the functions are stored with the functions whole code

The second phase is code execution phase

In this phase the variables will asiign with thier actual value in the program

For the function in main memory component it will create a new execution context in the code component when the function is invoked and in the code component there will be a memory and code component its self

There will store the parameters and variables of the function of the program in the memory component in the first phase

In the second phase the parameters and variables will get the actual value

when it return the value the execution context of the function will be removed and the control will be returned to the function invoked line in the main execution context's main memory component

After the execution of the program the global execution context will be deleted

whenever an execution context is created , the memory component will get the access to the lexical environemnt of its parent

lexical environment means -> where is the code physically appear





## `Primitive data` ##
======================
Number
String
Boolean
`Null` - A value that explicitly represents "nothing" or an empty value.
```js
let y = null; // y is explicitly set to "no value"
```

`Undefined` - A variable or property that has been declared but not given a value yet
```js
let x; // x is undefined
```
`Symbol` -  unique and immutable data type that is often used as an identifier for object properties.
```js
const sym2 = Symbol('example');  // Symbol with a description
const sym3 = Symbol('example');  // Another Symbol with the same description
console.log(sym2 === sym3);      // false (they are unique)
```





## `Non primitive data` ##
===========================
Object
Array
Function
Date
Regex
`Map` - A Map is a collection of key-value pairs where keys can be of any data type.
`Weak map` - A WeakMap is a collection of key-value pairs where keys must be an objects, and the keys are weakly referenced.
`set` - Set is a built-in object that allows you to store unique values of any type.
`Weak set` - A WeakSet is a built-in object in JavaScript that can only store unique objects.
Error





## `Window` ##
===============
Window is a global object is created along with the execution context
Whatever we write in the global space it will attached to the window

`Scope`
----------
Scope means where you can access a specific variable or function in our code  
The lexical environment of Global execution context will point to null , because there is no parent for it anymore.

`Scope chain`
-------------
Chain of the lexical environment and its lexical environment of parent

If the js engine does not find any variable in the local memory it will move to the lexical scope , this continue until it find the value or null


`Block scope`
-----------------
{ from this to } is a block is used for grouping together the statements , it is also known as compund statement

it is used when javascript expect a single statement to run

if let and const are inside a block , then let and const are stored in separate memory space that is called block

let and const are block scoped and those are not accessed from outside

After executing the block in the program , the block scope will remove from the memory so thats why the let and const are not accessible from outside

=================================================
```js
var a = 100;  // Global scope			        
let b = 200;  // Script scope			        
const c = 300;  // Script scope			        
						                        
{						                        
 var a = 10;					                
 let b = 20;					                
 const c = 30;					                
						                        
console.log(a)  // 10  // Global scope		    
console.log(b)  // 20  // Block scope		    
console.log(c)  // 30  // Block scope		   
}						                        
						                        
console.log(a)  // 10  // Global scope		    
console.log(b)  // 200  // Script scope		    
console.log(c)  // 300  // Script scope		    
```
=================================================

`Global Scope`
---------------
Variables declared outside any function or block have global scope and can be accessed throughout the entire program.

`Local Scope`
-------------
Variables declared inside a function or block have local scope and are accessible only within that function or block.

`Function Scope`
-----------------
Each function creates its own scope, and variables declared inside that function are not accessible outside of it.

`Block Scope`
----------------
Introduced in ECMAScript 6 (ES6) with let and const, block scope defines variables within curly braces {}.

`Lexical scope`
------------------
Lexical scope, also known as static scope, is determined at the time of code writing and is based on the physical placement of functions within the code.

Lexical environment is the local memory + reference to the lexical environment of parent

`Outer and Inner Functions`
----------------------------
In lexical scope, inner functions have access to variables declared in their outer (enclosing) functions.

`Benefits`
----------
Lexical scope promotes encapsulation and helps in avoiding naming conflicts, as variables declared in different scopes remain independent.





## `Function` ##
==================

`Function statement`
---------------------
```js
function a(){
console.log("a called")
}
```

This is a function statement , in hoisted phase it will get the result because it is a  normal function

`Funtion expression`
---------------------
```js
var b = function(){
console.log("b called")
}
```

This is a function expression , in the hoisting phase it will get undefined because js engine treat it as a variable so that it wont be accessible before its definition


`Function declaration`
-----------------------
It is same as function statement

`Anonymous function`
---------------------
```js
function (){

}
```

This will cause a syntax error by using an anonymous function we need to assign it to a vaiable

The anonymous function is used as a value

it is used in callbacks and iife function 

example : setTimeout(function(){ conole.log("Javascript") },1000)

`Named function expression`
----------------------------
```js
var b = function xyz(){
console.log("xyz called");
xyz();
}
```

This is named function expression , which is nothing but a normal function statement is assinged to a variable

But we cant invoke ths function using xyz() like this in outside , it will cause an reference error

So the xyz() is acting as a varibale of that function it is used to call that function inside that function itself

`Functional programming`
-------------------------
Functional programming is a programming paradigm where you build software by composing and applying pure functions, avoiding changing state and mutable data.

`Higher order function`
------------------------
A function that takes one or more functions as arguments or returns a function as a result. It enables functional programming concepts like mapping, filtering, and reducing.

`IIFE`
======
Immediately Invoked Function Expression, is a JavaScript function that is defined and executed immediately after its creation. It is a common pattern used to create a new scope for variables to avoid polluting the global scope and to encapsulate code.

```js
(function(x){
	code
})()
```

It creates a new scope , avoid polluting global scope

Uses are :- Encapsulation , Data privacy , Avoiding Hoisting Issues , Creating modules

Inside an Immediately Invoked Function Expression (IIFE) in non-strict mode:
In a browser environment, this refers to the global object, which is window.
In Node.js, this refers to the global object, which is global.

If the IIFE is running in strict mode ('use strict';), the value of this inside the IIFE will be undefined.

Advantages are encapsulation and isolation

Wrapping the function in parentheses () makes it an expression rather than a declaration.
Only function expressions can be invoked immediately, making the use of parentheses crucial for IIFE syntax.

`Generator function`
--------------
Generators are a type of iterable in JavaScript that allow pausing and resuming the execution of a function. They are defined using the function* syntax, and they use the yield keyword to produce values one at a time. A generator function returns an iterator which can be used to traverse the yielded values.

Key Features :-
Defined using function* syntax.
Uses the yield keyword to yield values.
The function can be paused and resumed.
Can be used with for...of loops or manually using the iterator's next() method.

`First class function`
------------------------
In JavaScript, functions are first-class citizens, which means they can be 
assigned to variable
Passed as argument
Returned from other function
Stored in datastructure

`Assigned to a variable`
-------------------------
```js
const greet = function(name) {
  return "Hello, " + name + "!";
};
```

`Passed as an argument`
------------------------
```js
const square = function(x) {
  return x * x;
};

const applyOperation = function(func, operand) {
  return func(operand);
};

console.log(applyOperation(square, 4)); // 16
```

`Retrned from function`
--------------------------
```js
const createMultiplier = function(factor) {
  return function(x) {
    return x * factor;
  };
};

const double = createMultiplier(2);
console.log(double(5)); // 10
```

`Stored in datastructure`
--------------------------
```js
const functionsArray = [
  function(x) { return x + 1; },
  function(x) { return x * 2; }
];

console.log(functionsArray[0](3)); // 4
```

`Contructor function`
----------------------
```js
function Dog(name) {
  this.name = name;
}
```
it uses new keyword to create its instance

`Factory function`
-------------------
Factory function is a function in javascript it returns an object
use of it is encapsulates the object

`Pure function`
-----------------
it has no side effects, it always returns the same result for the same inputs, and it doesn't modify any external state.

`Impure function`
------------------
it modifies the external state (result variable) as a side effect.

`Default parameters`
---------------------
Default parameters in JavaScript allow you to assign default values to function parameters. If a parameter is not provided when the function is called, the default value will be used.





## `JavaScript Object` ##
===========================
A JavaScript Object is a data structure in JavaScript that stores data in the form of key-value pairs. It is versatile and dynamic, allowing for the representation of both simple and complex data structures.

`Key-Value Pair Structure`
--------------------------------
Each property (key) maps to a value.
```js
const obj = { name: "Midhun", age: 25 };
```
`Dynamic Nature`
---------------------
Properties can be added, updated, or deleted at runtime.
```js
obj.email = "midhun@example.com"; // Adds a property
delete obj.age; // Removes the 'age' property
```
`Support for Complex Values`
---------------------------------
Values can include primitives, arrays, objects, or functions.
```js
const obj = { 
    name: "Midhun", 
    details: { age: 25, city: "Kerala" }, 
    greet: () => "Hello!" 
};
```





## `JSON (JavaScript Object Notation)` ##
==========================================
JSON is a lightweight data-interchange format inspired by JavaScript object syntax. It is primarily used to transmit data between a server and a client and must follow strict formatting rules.

`Stringified Data Structure`
------------------------------
Keys and values are always enclosed in double quotes (except numbers, booleans, null).
```js
{
    "name": "Midhun",
    "age": 25
}
```
`No Methods or Undefined Values`
------------------------------------
JSON can only contain simple data types: objects, arrays, numbers, strings, booleans, and null.
```js
{
    "greet": () => "Hello!" // Invalid in JSON
}
```
`Static and Read-Only Format`
---------------------------------
Once parsed into an object in JavaScript, it can be manipulated. Otherwise, JSON itself is static.
`Conversion Example`
JavaScript Object:
```js
const obj = { name: "Midhun", age: 25 };

'{"name": "Midhun", "age": 25}'
```





## `Memoization` ##
====================
Memoization is a technique used in programming to optimize the performance of functions by caching the results of expensive function calls and reusing them when the same inputs occur again.

## `Prototype` ##
==================
In JavaScript, prototype refers to an internal property of an object that allows the object to inherit properties and methods from another object. Every object in JavaScript has a prototype (except for null, which has no prototype).

`Prototype Chain`
------------------
The prototype chain is a series of objects linked together by their prototypes. When you access a property or method on an object, JavaScript first checks if that property or method exists directly on the object. If it doesn't find it, JavaScript then looks at the object's prototype, and if it's not there, it continues up the prototype chain until it either finds the property/method or reaches the end of the chain that points to null.

The prototype chain allows for inheritance in JavaScript: an object can inherit properties and methods from another object.

arr.__proto__     is an object
arr.__proto__.__proto__      is an object.prototype
arr.__proto__.__proto__.__proto__      is an  object.prototype.prototype == null

`Object creation`
-------------------
```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log(`${this.name} says Woof!`);
};

const myDog = new Dog('Buddy');
myDog.bark(); // Outputs: Buddy says Woof!
```

`Inheritance`
--------------
```js
function Animal(voice) {
  this.voice = voice;
}

Animal.prototype.makeSound = function() {
  console.log(`Animal makes a ${this.voice} sound`);
};

function Cat(name) {
  this.name = name;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

const myCat = new Cat('Whiskers');
myCat.makeSound(); // Outputs: Animal makes a undefined sound
```

`Prototype` vs `Prototype Chain`
-------------------------------
The prototype is an object's direct reference, while the prototype chain is the series of prototypes leading to the root object, often Object.prototype.





## `Closure` ##
================
A closure is defined as a function is binded with its lexical environment

Closure is a common use case of lexical scope, where an inner function retains access to the variables of its outer function even after the outer function has finished execution.

Function bind together with its lexical environment creates a closure

`Uses`
------
Encapsulation
Information hiding
Private variables and functions
Currying
Functions like once
memoization
callbacks
maintaining state in asynchronous code
setTimeouts
Iterators
event handler


`Data encapsulation Example`
--------------------------------
```js
function counter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

const increment = counter();
increment(); // Outputs: 1
increment(); // Outputs: 2
```

`Factory Functions example`
---------------------------
```js
function createPerson(name) {
  let age = 0;

  return {
    getName: function() {
      return name;
    },
    getAge: function() {
      return age;
    },
    increaseAge: function() {
      age++;
    }
  };
}

const person = createPerson("Alice");
console.log(person.getName()); // Outputs: Alice
person.increaseAge();
console.log(person.getAge()); // Outputs: 1
```



`Closure disadvantages`
------------------------------
Memory leaks
Debugging complexity
Performance issue
overhead of variables





## `Garbage collection` ##
===========================
Garbage collection is the process by which the JavaScript engine automatically detects and frees up memory occupied by objects that are no longer reachable or not referenced in the program. This helps prevent memory leaks and ensures efficient memory usage.
examples: orinaco, oilfan, scavenger, `Mark compact` -> v8

`How Garbage Collection Works`
-----------------------------
`Mark and Sweep Algorithm`
The most common garbage collection algorithm used in JavaScript is the Mark and Sweep algorithm.

`Mark Phase`
During the mark phase, the garbage collector identifies and marks all objects that are reachable or in use by the program. It starts from the root objects, such as global variables and local variables in execution context, and traverses the object graph.

`Sweep Phase`
In the sweep phase, the garbage collector scans the entire heap and deallocates (frees up) memory occupied by objects that were not marked. These are considered garbage and are candidates for removal.

`Memory Reclamation`
After the sweep phase, the memory occupied by the unreferenced objects is reclaimed and made available for future use.





## `Hoisting` ##
==================
`Temporal Dead Zone` (TDZ)
---------------------------
The time from the hoisting to the time when the let or conts get assinged or initialized

Whenever we are accessing a variable in Temporal Dead Zone it gives us the Reference error

The Temporal Dead Zone (TDZ) is a period during the execution of a program where a variable exists but cannot be accessed due to its uncompleted initialization. This occurs with variables declared using let and const before their declaration.

Variables declared with var are hoisted to the top of their scope and initialized with undefined. On the other hand, variables declared with let and const are also hoisted but are not initialized until their declaration. This leads to the TDZ concept.

Let and Const are memory allocated in the script , these are not attached to the window object

Redeclaration of let will give us the Syntax error so no code will run

let variable cant redeclare with var or const again in the same scope

const need to initialize with its declaration

```js
console.log(y); // undefined
var y = 10;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
let z = 20;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 20;
```

`Function` vs `Arrow Function`
-------------------------------
In the execution context in the first phase the function get its whole code thats why  it is accessible before the function definition

Function declarations are fully hoisted, meaning they are moved to the top of their containing scope and can be called before their declaration.

```js
sample()  //Midhun
function sample(){
    console.log("Midhun");
}
```

In the execution context in the first phase the arrow function is allocated with the placeholder undefined , that's why it is showing  
the function name is not a function

Arrow functions, however, are not hoisted in the same way. They are part of an expression and are only assigned when that line of code is executed.

```js
sample()  //Not a function because undefined
var sample = ()=>{
    console.log("Midhun");
}
sample2()  //Not a function because undefined
var sample2 = function(){}
```

In the arrow function in case of let or const instead of var the error will be reference error





## `This keyword` ##
=====================

1 . in global scope the this keyword is “window”

2 . inside a normal function the this keyword is “undefined” in strict mode and window in non strict mode

	2 . 1 . this is because the this substitution or if the value of this keyword is  undefined or null this keyword will be replaced by javascipt with global object only in non strict mode

	2 . 2. if the normal  function is calling alone it is undefined  // x()  = undefined

	2 . 3 . if the normal function is calling along with an object the result will be that object  // window.x()  = window

3 . Inside an object method the this keyword is result in that object

`Function Context`
-------------------
Inside a function, the value of this depends on how the function is invoked.
```js
function showThis() {
  console.log(this);
}

showThis();
```

`Object Methods`
-----------------
When a function is a method of an object, `this` refers to the object on which the method is called.
```js
const myObject = {
  greeting: 'Hello',
  sayHello: function() {
    console.log(this.greeting);
  }
};

myObject.sayHello();
```

`Constructor Functions`
------------------------
When a function is used as a constructor with the new keyword, `this` refers to the newly created instance.
```js
function Person(name) {
  this.name = name;
}

const john = new Person('John');
console.log(john.name); // Outputs: John
```

`Event Handlers`
-----------------
In event handlers, `this` typically refers to the element that triggered the event.
<button onclick="console.log(this)">Click me</button>

`Arrow Functions`
------------------
Arrow functions do not have their own this. They inherit this from the enclosing scope. In other words, they do not have the concept of dynamic this.
```js
const myFunction = () => {
  console.log(this); // 'this' is determined by the surrounding scope
};
```




## `Function methods` or `context changing methods` or `function binding methods`
==================================================================================
The three functions call(), apply(), and bind() are often referred to as "function methods" or "context-changing methods" in JavaScript. They are methods provided by the Function prototype in JavaScript and are used for manipulating the this value in functions.

`Call()`   
---------
`function borrowing`
The call method is used to invoke a function immediately with a specified this context and arguments passed individually by seperated by commas..
```js
const person = { name: 'John' };

function sayHello(greeting, home) {
  console.log(`${greeting}, ${this.name}!, ${home}`);
}

sayHello.call(person, 'Hello',"homename");
```

`Apply()`
----------
The apply method is similar to call, but arguments are passed as a single array or an array-like object.
```js
function greet(message1, message2) {
  console.log(`${message1}, ${message2}, ${this.name}`);
}

const person = { name: 'John' };

greet.apply(person, ['Hello', 'How are you?']); // Outputs: Hello, How are you?, John
```

`Bind()`
--------
The bind method is similar to the call method in that both are used to explicitly set the value of this for a function.
bind does not immediately invoke the function. Instead, it returns a new copy of the function

```js
function greet(message) {
  console.log(`${message}, ${this.name}`);
}

const person = { name: 'John' };

const greetJohn = greet.bind(person);
greetJohn('Hi'); // Outputs: Hi, John
```




## `String methods` ##
=======================

`Length`
---------
Used to get the length of a string
```js
var str = "Midhun"
console.log(str.length) //6
```

`toUpperCase`
--------------
Used to covert all the characters in a string to uppercase
```js
var str = "Midhun"
console.log(str.toUpperCase())  //MIDHUN
```

`toLowerCase`
--------------
Used to convert all the characters in a string to lowercase
```js
var str = "MIDHUN"
console.log(str.toLowerCase())  //midhun
```

`Trim`, `trimEnd`, `trimStart`
--------------------------------
Used to remove whitespace from both ends of a string
```js
var str = " Hello Midhun "
console.log(str.trim())  // "Hello Midhun"
```

`PadStart / padEnd`
--------------------
Used to add characters in the starting or ending to achieve a desired length
```js
var str = "Midhun"
console.log(str.padStart(10,"$"))  //$$$$Midhun
console.log(str.padEnd(10,"$"))  //Midhun$$$$
```

`charAt`
---------
Used to get the character on a specified index on a string
```js
var str = "Midhun"
console.log(str.charAt(5))  //u
```

`split`
--------
Used to split a string to an array of substrings based on a specified delimiter
```js
var str = "Hello midhun k paniker"
console.log(str.split(" "))  // ["Hello","midhun","k","paniker"]
```

`concat`
---------
Used to concatenate one or more strings
```js
var str1 = "Midhun"
var str2 = "Good morning "
console.log(str2.concat(str1))
```

`substring`
------------
Used to extract a portion of a string based on a specified start and end indices
```js
var str = "Midhun k paniker"
console.log(str.substr(9,13)) // pani  here end indices is ignored
```

`substr`
---------
Used to extract a substring from a string using the start indices and the desired length
```js
var str4 = "Midhun k paniker"
console.log("Substr :",str4.substr(3,10))
```





## `Array methods` ##
=======================
`Map`
-----
The map() method is a built-in method in JavaScript that allows you to apply a function to each element of an array and return a new array with the results.

```js
let newArray = array.map(function(currentValue, currentIndex, array) {
  
});
```

`Transforming Elements`
------------------------
```js
let arr = [1,2,3,4,5,6]
let newarr = arr.map( (x) => x * 2 ) 
console.log(newarr)

// [ 2, 4, 6, 8, 10, 12 ]
```

`Extracting a property`
------------------------
```js
let users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
  ];

  let newarr = users.map((x) => x.name)
  console.log(newarr)

// [ 'Alice', 'Bob', 'Charlie' ]
```

`Converting datatypes`
-----------------------
```js
let arr = ["1","2","3"]
let newarr = arr.map((x) => parseInt(x))
console.log(newarr)

// [ 1, 2, 3 ]
```


2. `reduce`
============
The reduce is used to reduce the elements of an array to a single value. It iterates over each element of the array, applying a callback function, and accumulates a result. The result could be of any type.

```js
array.reduce(function(accumulator, currentValue, currentIndex, array) {

}, initialAccumulator);
```
accumulator:  is a running total or an accumulated value that gets updated at each iteration of the array

`Summing an array`
-------------------
```js
let arr = [1,2,3,4,5]
let sum = arr.reduce(function(accumulator , currentValue , currentIndex , array){
    return  accumulator + currentValue
},0)
console.log(sum) // 15
```

`Finding the maximum value`
----------------------------
```js
let arr = [1,5,2,7,9,10,44,77,88]
let highval = arr.reduce((accumulator,currentValue)=> Math.max(accumulator,currentValue),0)
console.log(highval) // 88
```

`Flatering an array of arrays`
--------------------------------
```js
let arr = [[1,2],[3,4],[5,6]]
let newarr = arr.reduce((accumuator,currentvalue)=> accumuator.concat(currentvalue),[])
console.log(newarr) // [ 1, 2, 3, 4, 5, 6 ]
```

`Grouping objects by a property`
---------------------------------
```js
let students = [
  { name: 'Alice', age: 22, grade: 'A' },
  { name: 'Bob', age: 24, grade: 'B' },
  { name: 'Charlie', age: 21, grade: 'A' }
];

let groupedByGrade = students.reduce(function(accumulator, currentValue) {
  (accumulator[currentValue.grade] = accumulator[currentValue.grade] || []).push(currentValue);
  return accumulator;
}, {}); // groupedByGrade is now { A: [{...}, {...}], B: [{...}] }
```

`Calculating average`
----------------------
```js
let arr = [1,2,3,4,5]

let avg = arr.reduce((acc,cv,ci,arr)=>{
    acc = acc+cv
    if(ci === arr.length-1){  // for checking the index is in the last element in the array
        return acc / arr.length
    }else{
        return acc 
    }
})

console.log(avg)
```

3. `Filter`
=============
used to create a new array with elements that pass a certain condition defined by a provided function. 
```js
let newArray = array.filter(function(curentvalue, currentIndex, array) {

});
```

`Filtering odd numbers`
------------------------
```js
let arr = [1,2,3,4,5]
let newarr = arr.filter((element,index,arr)=>{
	return element % 2 == 1
})

console.log(newarr)  // [1,3,5]
```

`Filtering strings longer than a certain length`
------------------------------------------------
```js
let arr = ["midhun","hello","programer","coding","passion","practice"]
let newarr = arr.filter((element,index,arr)=>{
    return element.length > 7
})

console.log(newarr)  //  ["programer","practice"]
```

`Filter objects based on a condition`
--------------------------------------
```js
let students = [
    { name: 'Alice', age: 22, grade: 'A' },
    { name: 'Bob', age: 24, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'A' }
  ];

  let newarr = students.filter((element,index,arr)=>{
    return element.grade === "A"
  })

  console.log(newarr);
  ```

4. `Find`
==========
used to retrieve the first element in an array that satisfies a specified condition.
```js
let result = array.find(function(currentValue, currentIndex, array) {
  
});
```

`Finding an element based on a condition`
------------------------------------------
```js
let arr = [1,2,3,4,5,]
let num = arr.find((element,index,arr)=>{
    return element > 3
})

console.log(num);  // 4
```

`Finding an object based on a property`
----------------------------------------
```js
let students = [
    { name: 'Alice', age: 22, grade: 'A' },
    { name: 'Bob', age: 24, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'A' }
  ];

  let std = students.find((element,index,arr)=>{
    return element.grade === "A"
  })

  console.log(std);
  ```

`Using find() with an external function`
-----------------------------------------
```js
function check (element){
    return element > 10
}

let arr = [11,3,23,45,16,74,4,6,7,8,3,56,67]
let num = arr.find(check)

console.log(num); // 11
```

5. `Sort`
==========
used to sort the elements of an array. By default, it sorts the elements as strings in ascending order. However, you can provide a compare function to determine the sorting order based on numeric or custom criteria.
```js
let newArray = array.sort([compareFunction]);
```

`Sorting numeric values`
-------------------------
```js
let arr = [1,4,2,7,33,56,83,85,3,66];
let newarr = arr.sort((a,b) => a-b);
console.log(newarr);
```

`Sorting string`
-----------------
```js
let arr = ["Banana","Pinapple","Apple","Grapes"];
let newarr = arr.sort();
console.log(newarr);
```

`Sorting string in reverse`
----------------------------
```js
let arr = ["Grapes","Apple","Banana","Pineapple"];
let newarr = arr.sort().reverse();
console.log(newarr);
```

`Sorting the object based on th year property`
-----------------------------------------------
```js
let cars = [
    { make: 'Toyota', model: 'Camry', year: 2019 },
    { make: 'Honda', model: 'Civic', year: 2020 },
    { make: 'Ford', model: 'Focus', year: 2018 }
  ];

  let newarr = cars.sort((a,b)=> a.year - b.year);
  console.log(newarr);
  ```

`Sorting the object based on the make property`
------------------------------------------------
```js
let cars = [
    { make: 'Toyota', model: 'Camry', year: 2019 },
    { make: 'Honda', model: 'Civic', year: 2020 },
    { make: 'Ford', model: 'Focus', year: 2018 }
  ];

  let newarr = cars.sort((a,b) => a.make.localeCompare(b.make));
  console.log(newarr);
  ```

`Sorting strings in custom order`
----------------------------------
```js
let arr = ["red","yellow","black","white"]
let newarr = arr.sort((a,b)=>{
    const order = {black : 1 , red : 2, yellow : 3, white : 4}
    return order[a] - order[b]
})
console.log(newarr)
```

6. `forEach`
==============
allows us to iterate over the elements of an array and perform a specified action for each element.
```js
array.forEach(function(element, index, array) {
  
});
```

`Modifying the array elements`
-------------------------------
```js
let arr = [1,2,3,4,5];
arr.forEach((element,index,arr)=>{
    return arr[index] = element*2;
})
console.log(arr);
```

7. `Push`
============
The push method used to add one or more elements to the end of an array. It modifies the original array and returns the new length of the array.

`Adding element to an array`
-----------------------------
```js
let arr = ["midhun","Jithin","goutham","thejus"];
arr.push("Lamborghini","porsche","jaguar","mclaren");
console.log(arr);
```

`Appending a new array`
------------------------
```js
let arr = [1,2,3,4,5]
let newarr = [6,7,8,9,10,11,12]
arr.push(...newarr)
console.log(arr)
```

8. `Shift`
============
that removes the first element from an array and returns that element. It also shifts all remaining elements to a lower index, effectively reducing the length of the array by 1. If the array is empty, shift() returns undefined. The shift() method modifies the original array.

var shiftedElement = array.shift();

`Removing the first element`
-----------------------------
```js
let arr = ["one","two","three","four","five"];
let currentelement = arr.shift();
console.log(currentelement);  // ["two","three","four","five"]
```

`Implementing FIFO Data structure`
-----------------------------------
```js
let arr = []
function add(event){
    arr.push(event)
    if(arr.length > 5){
        arr.shift()
    }
}
add(1)
add(2)
add(3)
add(4)
add(5)
add(6)
console.log(arr)  // [2,3,4,5,6]    // 1 will be removed
```

9. `Unshift`
=============
that adds one or more elements to the beginning of an array. It modifies the original array and returns the new length of the array.
```js
var newLength = array.unshift(element1, element2, ..., elementN);
```

`Combining two arrays`
-----------------------
```js
let arr1 = [1,2]
let arr2 = [3,4]
arr2.unshift(...arr1)
console.log(arr2) // [1,2,3,4]
```

10. `Slice`
===========
that returns a shallow copy of a portion of an array. It does not modify the original array but instead creates a new array containing the elements from the specified start index to the specified end index (excluding the end index).

```js
var newArray = array.slice(startIndex, endIndex);
```
startIndex - inclusive
endIndex - exclusive

`Extracting a subarray`
------------------------
```js
let arr = ["one","two","three","four"];
let newarr = arr.slice(0,2);
console.log(newarr);  // ["one","two"]
```

`Extrating the last three elements from an array`
--------------------------------------------------
```js
let arr = [ 1,2,3,4,5];
let newarr = arr.slice(-3);
console.log(newarr);  // [3,4,5]
```

`Extracting the remaining elements`
------------------------------------
```js
let arr = [1,2,3,4,5];
let newarr = arr.slice(3);
console.log(newarr);  // [4,5]  the first three elements will be ignored
```

`Extracting the elements using negetive numbers`
-------------------------------------------------
```js
let arr = [1,2,3,4,5];
let newarr = arr.slice(-3,-1);  // from -1 to -3 , -3rd element 
console.log(newarr);  //  [3,4]
```

11. `Splice`
=============
that is used for adding or removing elements from an array. It directly modifies the original array and returns an array containing the removed elements.
```js
var removedElements = array.splice(startIndex, deleteCount, item1, item2, ...);  // item1 , item2 is the adding elements
```

`Deleting elements from an array`
----------------------------------
```js
let arr = [1,2,3,4,5];
let newarr = arr.splice(2,2);
console.log(newarr); // [3,4]
```

`Adding elements to a specified index of an array without removing any elements`
---------------------------------------------------------------------------------
```js
let arr = [1,2,3,4,5];
let newarr = arr.splice(1,0,111,222);
console.log(arr);  // [1,111,222,2,3,4,5]
```

`Replacing element`
--------------------
```js
let arr = ["one","two","three","four"];
arr.splice(1,1,"add1","add2");
console.log(arr);  // ["one","add1","add2","three","four"]
```

`Removing element from end`
----------------------------
```js
let arr = ["one","two","three","four"];
arr.splice(-1);
console.log(arr); // ["one","two","three"]
```

12. `for...in loop`
=======================
The for...in loop iterates over the enumerable properties (keys) of an object or array.
```js
let obj = { name: "Alice", age: 25, grade: "A" };
for (let key in obj) {
    console.log(key, obj[key]); // Logs keys and values
}
```

13. `for...of loop`
=======================
The for...of loop iterates over the values of iterable objects like arrays, strings, or maps.
```js
let arr = [10, 20, 30];
for (let value of arr) {
    console.log(value); // Outputs 10, 20, 30
}
```

14. `reduceRight()`
======================
The reduceRight() method applies a function to reduce an array from right-to-left to a single value.
```js
let arr = [1, 2, 3, 4];
let sum = arr.reduceRight((acc, curr) => acc + curr, 0);
console.log(sum); // Outputs 10
```

15. `some()`
===============
The some() method checks if at least one element in the array passes the given condition.
```js
let arr = [1, 3, 5, 8];
let hasEven = arr.some((value) => value % 2 === 0);
console.log(hasEven); // Outputs true
```

16. `every()`
===============
The every() method checks if all elements in the array pass the given condition.
```js
let arr = [2, 4, 6];
let allEven = arr.every((value) => value % 2 === 0);
console.log(allEven); // Outputs true
```

17. `findIndex()`
=====================
The findIndex() method returns the index of the first element that satisfies the condition.
```js
let arr = [10, 20, 30, 40];
let index = arr.findIndex((value) => value > 25);
console.log(index); // Outputs 2
```

18. `entries()`
===================
The entries() method returns an iterator for key-value pairs of the array.
```js
let arr = ['a', 'b', 'c'];
for (let [index, value] of arr.entries()) {
    console.log(index, value);
}
// Outputs:
// 0 'a'
// 1 'b'
// 2 'c'
```

19. `keys()`
================
The keys() method returns an iterator for the keys (indexes) of an array.
```js
let arr = ['x', 'y', 'z'];
for (let key of arr.keys()) {
    console.log(key); // Outputs 0, 1, 2
}
```

20. `values()`
==================
The values() method returns an iterator for the values of an array.
```js
let arr = [100, 200, 300];
for (let value of arr.values()) {
    console.log(value); // Outputs 100, 200, 300
}
```





## `Object methods` ##
=======================

1. `Object.keys(ObjectName)`
==============================
Returns an array of a given object's property names.

```js
let ob = {name : "Midhun", age : 23};
let arr = Object.keys(ob);
console.log(arr);  // [name,age]
```

2. `Object.values(ObjectName)`
==================================
Returns an array of a given object's own property values.

```js
let ob = {name : "midhun",age : 23};
let arr = Object.values(ob);
console.log(arr);  // [midhun,23]
```

3. `Object.entries(ObjectName)`
==================================
Returns an array of a given object's own enumerable property [key, value] pairs.

```js
let ob = {name : "midhun", age : 23};
let arr = Object.entries(ob);
console.log(arr);  // [[name : "midhun"],[age : 23]]
```

4. `Object.assign(target, source1, source2)`
============================================
Copies the values of all enumerable own properties from one or more source objects to a target object.

```js
Object.assign(target, source1, source2, ...);

let ob1 = {name : "Midhun", age : 23};
let ob2 = {age : 24, state : "kerala"};
let merge = Object.assign({},ob1,ob2);
console.log(merge);  // {name : "midhun",age : 24, state : "kerala"}
```

5. `Object.freeze(ObjectName)`
==============================
This method makes an object immutable by preventing any changes to the object's properties and preventing the addition or removal of properties.

It deeply freezes an object, meaning that not only the object itself but also its nested objects (if any) become immutable.

```js
let ob = {name : "midhun", age : 23};
Object.freeze(ob);
```

6. `Object.seal(ObjectName)`
==============================
This method makes an object's properties non-extensible (i.e., prevents the addition of new properties), but allows the values of existing properties to be changed.

It does not affect the mutability of the values themselves, so you can still modify the contents of object properties or nested objects.

```js
let ob = {name : "midhun",age : 23};
Object.seal(ob);
```

7. `object.hasOwnProperty(property)`
=====================================
Returns a boolean indicating whether the object has the specified property as its own property (not inherited).

```js
let ob = {name : "midhun",age : 23};
const hasname = ob.hasOwnProperty("name");
console.log(hasname); // true
```

8. `Object.fromEntries(arrayName)`
====================================
Transforms a list of key-value pairs into an object.

```js
let arr = [["name" , "midhun"],["age" , 23]];
let ob = Object.fromEntries(arr);
console.log(ob);  // {name : "midhun",age : 23}
```





## `Shallow copy` ##
========================
A shallow copy means we copy only the outer layer of an object. If the object has other objects inside it (nested objects), those are not fully copied. Instead, the shallow copy just points to the same nested object of the original object.
 
 - if you change something inside the nested object, it will also change in the original because both are sharing the same inner object.

 - But if we change the outer layer property value it will not effect on both.
```js
`using` Object.assign

const originalObject = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, originalObject);

`using` spread operator

const originalObject = { a: 1, b: { c: 2 } };
const shallowCopy = { ...originalObject };
```





## `Deep copy` ##
====================
A deep copy creates a completely independent copy of the original object along with all of its nested objects. Changes made to the nested objects within the copied structure do not affect the original object, and vice versa.

```js
const originalObject = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(originalObject));
```

`structuredClone`
-------------------
The structuredClone function is a built-in method introduced in modern JavaScript to create a deep copy of a value.
```js
const copy = structuredClone(original);
```





## `Callback` ##
===================
A callback in JavaScript is a function that is passed as an argument to another function and is executed after the completion of a specific task. Callbacks are a crucial concept in asynchronous programming, allowing you to control the flow of the program and handle asynchronous operations such as fetching data, processing events, or performing I/O operations.

Used in setTimeout , setInterval , Promises , Event handling , Higherorder functions

`Disadvantages of callback`
----------------------------
Callback hell
Error handling
Readbility
`Inversion of control` - means that we loose the control over the code
Unmaintainable code





## `Callback hell` ##
========================
Callback Hell refers to the situation where multiple nested callbacks are used in asynchronous code, leading to code that is difficult to read, understand, and maintain.

The structure is known as pyramid of doom

`Solution for callbackhell`
----------------------------
Use promises and async await





## `setInterval` ##
=====================
Executes a specified function repeatedly at a fixed time interval (in milliseconds) until explicitly stopped using clearInterval.
Use Case: Periodically running a task, like updating a timer.

## Example
==========
```js
const intervalId = setInterval(() => {
    console.log("This runs every 2 seconds");
}, 2000);

// To stop the interval
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped the interval");
}, 10000); // Stops after 10 seconds

```

## `setTimeout` ##
====================
Executes a specified function once after a fixed delay (in milliseconds).
Use Case: Scheduling a one-time task, like showing a notification after a delay.

## Example
============
```js
setTimeout(() => {
    console.log("This runs once after 3 seconds");
}, 3000);

```

`Whatif the time is 0 seconds`
------------------------------
When the delay for setTimeout or setInterval is set to 0 seconds, the callback function is not executed immediately. Instead:

The setTimeout is registered with the Web API (provided by the browser).
The browser offloads the timer task and waits for the specified delay (0 seconds in this case).
Meanwhile, the JavaScript engine (V8) continues executing the synchronous code.
Once the call stack is empty (all synchronous tasks have finished), the browser’s event loop moves the setTimeout callback from the task queue (macrotask queue) to the call stack for execution.





## `Currying` ##
======================
Currying is a functional programming technique in which a function is transformed into a sequence of partially applied functions, each taking a single argument. The result is a chain of functions, each taking a single argument, until the final function in the chain produces the desired result.

```js
function add(x){
    return function(y){
        return function(z){
            return x+y+z
        }
    }
}
console.log(add(1)(2)(3)) // 6
```





## `Promises` ##
====================
A Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. It allows you to write more readable and manageable asynchronous code compared to traditional callback-based approaches.

Pending: The initial state; the promise is neither fulfilled nor rejected.
Resolved: The operation completed successfully, and the promise has a resulting value.
Rejected: The operation failed, and the promise has a reason for the failure.

`Creating a promise`
---------------------
```js
const myPromise = new Promise((resolve, reject) => {
  let success = true;  // Change this to false to see the rejection

  if (success) {
    resolve("The operation was successful!");
  } else {
    reject("The operation failed!");
  }
});

// Using .then() to handle the successful resolution
myPromise
  .then((result) => {
    console.log(result);  // This will run if the promise is resolved
  })
  .catch((error) => {
    console.log(error);   // This will run if the promise is rejected
  });
```

`Advantages of Promises`
-------------------------
Readability: Promises provide a more readable and structured way to handle asynchronous code compared to callbacks.

Error Handling: Promises offer better error handling through the use of the catch method.

Promise chaining: Promises support chaining, making it easy to compose sequences of asynchronous operations.

State Management: Promises clearly define states (pending, resolved, rejected), making it easier to reason about asynchronous code.

`Promise chaining`
-------------------
Promise chaining in JavaScript is a technique where you chain multiple asynchronous operations using promises to make the code more readable and maintainable. Each .then() or .catch() block returns a new promise, allowing subsequent asynchronous operations to be executed in a sequence

`Promise.all`
--------------
Promise.all is a method in JavaScript that takes an iterable (e.g., an array) of promises as input and returns a single promise. This new promise fulfills with an array of results when all the input promises have been fulfilled, or it rejects with the reason of the first promise that rejects.

`Promise.allSettled`
---------------------
Promise.allSettled is another method in JavaScript for handling multiple promises. It is similar to Promise.all, but it doesn't short-circuit when one of the promises is rejected. Instead, it waits for all promises to settle (either fulfill or reject) and then returns an array of objects, each representing the outcome of the corresponding promise with status and value.

`Promise.race`
----------------
 this method takes an iterable of promises and returns a new promise. This new promise settles (fulfills or rejects) as soon as one of the promises in the iterable settles, regardless of whether the other promises have settled.

 Uses are -: Timeout , race conditions , Load balancing , Parallel request , Real time updates

`Then`
--------
The then method is used to handle the fulfillment of a promise.

`Finally`
-----------
The finally method is used to specify a function to be executed when the promise is settled (either fulfilled or rejected). This function will be executed regardless of the promise's outcome.

`Catch`
---------
The catch method is a shorthand for handling only the rejection of a promise. It is equivalent to using then(undefined, onRejected).

`Promise.any(iterable)`
-------------------------




## `Async Await` ##
=======================
async and await are keywords in JavaScript that simplify the handling of asynchronous code, making it more readable and easier to work with. The async keyword is used to define an asynchronous function, and the await keyword is used to wait for a promise to settle inside that function.





## `Observable` ##
====================
An Observable is a design pattern in JavaScript used to manage asynchronous data streams. It allows you to work with data that can change over time, such as user inputs, server responses, or other events. Unlike promises, Observables can emit multiple values over time, and subscribers can react to each emitted value.





## `DOM` ##
==============
The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document, such as elements, attributes, or text. The DOM allows developers to manipulate the structure, style, and content of a webpage dynamically.

`Nodes`
Nodes are the building blocks of the DOM.

Document node (document),
Element nodes (e.g., <div>),
Text nodes (e.g., text inside an element),
Attribute nodes.

`Methods`
Methods are functions provided by the DOM to interact with or manipulate nodes.
getElementById(),
querySelector(),
createElement(),
appendChild(),
removeChild().

`Events`
Events are actions or occurrences that happen in the document and can be handled using JavaScript.
onclick,
onmouseover,
onkeydown,
onload.





## `BOM` ##
===========
The Browser Object Model (BOM) is a set of objects provided by the browser, separate from the document, that allows interaction with the browser itself and the user's environment.
Components are :- Window , navigator , location , history





## `Call stack` ##
=====================
It keeps track of the execution context (or frames) of functions in a program. When a function is called, a new frame is added to the top of the call stack, and when a function is completed, its frame is removed from the stack.

`Function Invocation`
----------------------
When a function is called, a new frame is created and pushed onto the top of the call stack.
This frame contains information about the function, such as its parameters and local variables.

`Execution`
-------------
The JavaScript engine executes the code within the function frame by frame, from top to bottom.

`Function Completion`
----------------------
When the function completes, its frame is popped off the stack, and the control returns to the previous frame.





## `Call back queue` ##
========================
Asynchronous operations, such as setTimeout, AJAX requests, and event listeners, are handled outside the call stack.
When an asynchronous operation completes, its callback function is placed in the callback queue.
The callback queue stores callback functions that are ready to be executed.
Callback functions are moved from the callback queue to the call stack only when the call stack is empty.




## `Event Loop` ##
===================
The event loop is a crucial part of JavaScript's concurrency model, responsible for handling asynchronous operations and ensuring that the program remains responsive to user interactions

The event loop constantly checks the callback queue for completed asynchronous operations.
If the call stack is empty, the event loop takes the first callback from the queue and pushes it to the call stack for execution.





## `Operators` ##
===================
## `Destructuring`
========================
Destructuring in JavaScript is a feature that allows you to unpack values from arrays or properties from objects into distinct variables. It simplifies extracting data from complex structures.

## `Ternary Operator`
====================
The ternary operator, also known as the conditional operator, is a concise way to write conditional statements in JavaScript. It is a shorthand form of the if...else statement.
```js
const age = 25;
const message = age >= 18 ? 'You are an adult' : 'You are a minor';
console.log(message);
```

## `Rest Operator`
====================
```js
const fruits = ['apple', 'banana', 'cherry', 'mango'];

// Destructuring with rest
const [firstFruit, secondFruit, ...restFruits] = fruits;

console.log(firstFruit); // Output: apple
console.log(secondFruit);// Output: banana
console.log(restFruits); // Output: ['cherry', 'mango']
```

## `Arithmetic Operators`
=============================
+ (Addition)
- (Subtraction)
* (Multiplication)
/ (Division)
% (Remainder/Modulus)
** (Exponentiation)
++ (Increment)
-- (Decrement)

## `Comparison Operators`
==========================
== (Equal to)
=== (Strict equal to)
!= (Not equal to)
!== (Strict not equal to)
> (Greater than)
< (Less than)
>= (Greater than or equal to)
<= (Less than or equal to)

## `Logical Operators`
========================
&& (Logical AND)
|| (Logical OR)
! (Logical NOT)

## `Bitwise Operators`
========================
`& (AND)` -> This operator compares each bit of two numbers and returns 1 if both bits are 1; otherwise, it returns 0.

`| (OR) `-> This operator compares each bit of two numbers and returns 1 if at least one of the bits is 1.

`^ (XOR)` -> This operator compares each bit of two numbers and returns 1 if the bits are different, and 0 if they are the same.

`~ (NOT)` -> This operator inverts all bits of a number (i.e., changes 1 to 0 and 0 to 1).

`<< (Left shift)` -> The left shift operator shifts bits to the left by the specified number of positions, filling with zeros on the right.

`>> (Right shift)` -> The signed right shift operator shifts bits to the right by the specified number of positions, preserving the sign (leftmost bit).

`>>> (Zero fill right shift)` -> The unsigned right shift operator shifts bits to the right, filling zeros from the left. The sign bit is not preserved, treating the number as unsigned.

## `Assignment Operators`
==========================
= (Assignment)
+= (Addition assignment)
-= (Subtraction assignment)
*= (Multiplication assignment)
/= (Division assignment)
%= (Modulus assignment)
**= (Exponentiation assignment)
<<= (Left shift assignment)
>>= (Right shift assignment)
>>>= (Zero fill right shift assignment)
&= (AND assignment)
^= (XOR assignment)
|= (OR assignment)

## `Optional Chaining Operator (?.)`
=======================================
The optional chaining operator (?.) makes it easy to access properties of an object, even if some parts of the object don’t exist. If anything in the chain is null or undefined, it stops and returns undefined instead of throwing an error.

```js
const user = {
  profile: {
    name: "Alice",
    address: {
      city: "Wonderland"
    }
  }
};

console.log(user.profile?.name); // "Alice" (accesses name property safely)
console.log(user.profile?.address?.city); // "Wonderland" (accesses city property safely)
console.log(user.profile?.phone); // undefined (phone doesn't exist, no error)
```

## `Nullish Coalescing Operator (??)`
=======================================
The nullish coalescing operator (??) helps us provide a default value when the left-hand side is null or undefined. It’s like a more precise version of || (logical OR), but it only works with null or undefined, not other "falsy" values like 0, false, or an empty string ('').

```js
const value1 = null;
const value2 = undefined;
const value3 = 0;
const value4 = 'Hello';

console.log(value1 ?? 'Default'); // "Default" (value1 is null)
console.log(value2 ?? 'Default'); // "Default" (value2 is undefined)
console.log(value3 ?? 'Default'); // 0 (value3 is 0, but it's not null or undefined)
console.log(value4 ?? 'Default'); // 'Hello' (value4 is a non-null value)
```





## `Variable Shadowing` ##
==============================
Variable shadowing occurs when a variable declared in a certain scope (e.g., inside a function or block) has the same name as a variable declared in an outer scope. The inner variable "shadows" or overrides the outer variable within its own scope, meaning the inner variable takes precedence when accessed in that scope.
```js
let name = "Alice";  // Outer variable

function greet() {
  let name = "Bob";  // Inner variable shadows the outer variable
  console.log(name);  // Bob, because the inner variable 'name' is in scope
}

greet();  // Output: Bob
console.log(name);  // Output: Alice, because the outer variable is still in scope outside the function
```





## `Illegal shadowing` ##
===========================
Illegal shadowing in JavaScript occurs when a variable in a scope is declared using the same name as a variable from an outer scope, but the declaration is done in a way that violates the rules of variable scoping, especially with let, const, and class.
```js
let name = "Alice";
let name = "Bob";  // Error: Identifier 'name' has already been declared

function greet() {
  const name = "Alice";

  function greet() {  // Error: Function 'greet' has already been declared
    console.log("Hello");
  }
}
```





## `Classes` ##
=====================
Classes in JavaScript provide a more structured and intuitive way to work with object-oriented programming concepts. They are widely used in modern JavaScript development, especially in frameworks and libraries that leverage object-oriented patterns.

`Static methods`
-----------------
Static methods are methods that are called on the class itself, rather than on instances of the class.

`Super keyword`
----------------
In a derived class constructor, super() keyword is used to call the constructor of the parent class. This is necessary when the child class has its own constructor, and you want to ensure that the initialization code in the parent class's constructor is also executed.

it is used inside the child class's constructor
it is also used in the child class's method to invoke the parent class method

super.parentclassmethodname()

super is not allowed to be used outside of a derived class.
When using super in a method, it must be used before this is used in the method.

`Encapsulation`
---------------
Encapsulation means combining data variables and methods into one unit, such as a class or object. It also hides unnecessary details and only shows the important parts, making the object easier to use and safer.

`Abstraction`
-----------------
Abstraction is the process of hiding the complex reality and showing only the necessary parts of an object or function. It helps reduce complexity by focusing only on the relevant details and ignoring unnecessary ones. Abstraction is often implemented using classes, functions, or modules in

`Access Modifiers`
--------------------
`Public`
Public members are accessible from anywhere. By default, all properties and methods in a JavaScript class are public.

`Private`
Private members can only be accessed within the class they are defined in. In JavaScript, private fields are denoted with # before the property or method name.

`Protected (Not natively in JavaScript, but can be simulated)`
Protected members are intended to be accessible only within the class and its subclasses. JavaScript does not natively support protected, but it can be simulated by convention (using an underscore _) or by extending the class.

`Static`
Static members belong to the class itself, rather than to instances of the class. Static methods or properties are accessed directly from the class, not an instance.





## `Iterator` ##
===================
An iterator is an object that provides a standardized way to access the elements or members of a collection (such as an array or an object) one at a time. Iterators allow you to loop through the elements of a collection and perform actions on each element.

the iterator protocol, which consists of two main methods: next and symbol.iterator

The next method return an object with two propertiex  value and done
value is the current element in the collection
done is the boolean value representing whether the iteration is complete or not

symbol.iterator returns an iterator object for the collection





## `Pass by value` ##
=========================
When a primitive data type (e.g., number, string, boolean) is passed as an argument to a function, a copy of the actual value is passed. Changes made to the parameter within the function do not affect the original variable outside the function.

because the function received a copy of the value, not a reference to the original variable.





## `Pass by reference` ##
=============================
For objects (including arrays and functions), what is passed to the function is a reference to the object in memory, not a copy of the object itself.

function updateArray(arr) {
  arr.push(4);
}

let myArray = [1, 2, 3];
updateArray(myArray);
console.log(myArray);  //[1,2,3,4]

In the above example, the function updateArray receives a reference to the array myArray, and when the function modifies the array by pushing an element, the original array outside the function is also modified.

in the case of objects if we are reassigning the object with new key value pair , it will not modify the outside object





## `Message Queue (Macrotask Queue)` ##
===========================================
This queue holds macrotasks (regular tasks) that are ready to be executed.

setTimeout
setInterval
I/O tasks like network or file operations
Event listeners (clicks, scrolls, etc.)

These tasks are executed after the micro tasks are completed.





## `Microtask Queue` ##
========================
This queue holds microtasks that have higher priority than macrotasks.

Promises (e.g., .then() or .catch())
MutationObserver
queueMicrotask()

Microtasks are executed immediately after the current execution context and before the message queue (macrotasks).





## `Tasks` ##
=================
`Macro tasks`
--------------
Macrotasks are tasks with lower priority that are executed asynchronously after the microtask queue has been emptied.
setTimeout , setInterval , eventListener , i/o op

`Micro tasks`
----------------
Microtasks are tasks with higher priority that are executed asynchronously as soon as the current execution context is emptied and before the event loop advances to the next macrotask.
promises , Mutation obeserver , callbacks






## `Coercion & Convertion` ##
=================================
`Implicit coercion`
--------------------
Implicit coercion occurs automatically when the JavaScript engine converts values from one type to another during an operation, attempting to make sense of the context without explicit instructions from the programmer.

`Explicit conversion` or `Type casting`
----------------------------------------
Explicit conversion is the deliberate transformation of a value from one type to another, performed using built-in functions or methods provided by JavaScript.





## `Storage` ##
==================
`localStorage`
---------------
`Persistence`
Data in localStorage persists even after the browser is closed and reopened.
The data will remain until it is manually removed by the user or through JavaScript.

`Scope`
Data is accessible across all tabs and windows from the same origin (same protocol, domain, and port).

`Storage Limit`
Typically allows up to 5-10 MB of data per origin, depending on the browser.

`Expiration`
There is no expiration by default. Data stays indefinitely unless it is explicitly cleared.

`Use Cases`
Storing data that needs to persist across sessions, such as user preferences, application settings, or cached data.

```js
// Set an item
localStorage.setItem('username', 'Alice');

// Retrieve an item
console.log(localStorage.getItem('username')); // 'Alice'

// Remove an item
localStorage.removeItem('username');
```

`sessionStorage`
------------------
`Persistence`
Data in sessionStorage is only stored for the duration of the page session.
The data is automatically cleared when the tab or browser is closed.

`Scope`
Data is only accessible within the same tab or window. Different tabs or windows will not share the sessionStorage data.

`Storage Limit`
Typically allows up to 5 MB of data per session, similar to localStorage.

`Expiration`
Data is cleared automatically once the browser session ends (i.e., when the tab or browser is closed).

`Use Cases`
Storing data that is only needed for a single session, such as temporary form data or data related to a particular page interaction.

```js
// Set an item
sessionStorage.setItem('sessionData', 'active');

// Retrieve an item
console.log(sessionStorage.getItem('sessionData')); // 'active'

// Remove an item
sessionStorage.removeItem('sessionData');
```




## `Modules` ##
================
In JavaScript, modules are a way to organize code into separate files or modules, making it more maintainable, reusable, and easier to manage. Modules help break down a large codebase into smaller, more manageable pieces, and they provide a mechanism for encapsulation and abstraction.

for exporting :- export const add = (a,b) => a+b;
for importing :- import {add} from "./filename"

## `Types of modules in Javascript`
====================================

1. `ES6 Modules`
-------------------
ES6 introduced a native module system, allowing developers to split code into separate files and import/export functionalities between them.

import and export statements are used.
Modules are lexically scoped, meaning the variables or functions inside them are scoped to the module.
Strict mode is automatically enabled.

2. `CommonJS Modules`
-----------------------
CommonJS is the module system used primarily in Node.js. It uses require to import modules and module.exports to export functionality.

require for importing.
module.exports for exporting.
Synchronous loading (not suitable for browsers without bundlers like Webpack or Browserify).

3. `UMD Modules`
---------------------
UMD is a module format designed to work in both browser and Node.js environments. It is a combination of the best parts of AMD, CommonJS, and Global definitions.

It works in both Node.js and the browser.
Uses define or module.exports depending on the environment.

4. `AMD Modules`
--------------------
AMD is a module format used primarily for browser environments. It defines modules asynchronously, making it suitable for applications that need to load modules in parallel (e.g., using the RequireJS library). 

Modules are loaded asynchronously.
Uses the define function to define modules.

5. `SystemJS Modules`
---------------------
SystemJS is a module loader that supports loading ES6, CommonJS, and AMD modules, allowing you to use multiple module formats in the same application.

Compatible with multiple module formats.
Can be used in both client-side and server-side applications.





## `Event deligation` ##
=========================
Event delegation is a JavaScript programming pattern where a single event listener is attached to a common ancestor element of multiple child elements. Instead of attaching individual event listeners to each child element, you delegate the responsibility of handling events to a higher-level ancestor. When an event occurs on a child element, it bubbles up to the ancestor where a single event listener can respond to it.





## `Event propogation` ##
==========================
Event propagation refers to the process by which an event moves through the DOM tree. It consists of three phases:

Capturing Phase: The event starts at the root of the DOM and moves down to the target element.
Target Phase: The event reaches the target element.
Bubbling Phase: The event bubbles back up from the target element to the root.





## `Event Bubbling` ##
=======================
Event bubbling is a part of event propagation where the event starts at the target element and propagates upward through its ancestors in the DOM tree. It allows parent elements to react to events triggered by their child elements.





## `Polyfills` ##
====================
Polyfills are code snippets or scripts that implement modern functionality in older browsers that do not natively support certain features. If a newer JavaScript method, API, or feature is not available in an older browser, a polyfill can be used to mimic or "polyfill" that functionality, ensuring compatibility across different browser versions.





## `use strict` ##
=====================
use strict is a directive in JavaScript that enforces a stricter set of rules on our code. It helps us write cleaner and less error-prone code by catching common mistakes and preventing the use of unsafe features.

Helps in catching silent errors early.
Encourages better coding practices.
Improves performance by enabling optimizations in JavaScript engines.



## `Extras` ##
===============

`Priority calling`
--------------------
conosle.log()
process.nextTick()
promise
setTimeout
setImmediate
setInterval

`==`	or `Loose equality`
-------------------------
In JavaScript, the == (loose equality) operator performs type coercion if the operands are of different types. It tries to convert the operands to the same type before making the comparison.

`===` or `strict equality`
------------------------------
The === (strict equality) operator, on the other hand, does not perform type coercion. It checks both the value and the type.

`Json parse`
-------------
The JSON.parse() method is used to parse a JSON string and convert it into a JavaScript object. It takes a JSON-formatted string as its argument and returns the corresponding JavaScript object.

`Json stringify`
------------------
The JSON.stringify() method is used to convert a JavaScript object into a JSON-formatted string. It takes an object as its first argument and an optional replacer function and space parameter.

`break`
--------
The break statement is used to exit a loop or a switch statement immediately, regardless of whether the loop condition is still true or not.

`continue`
----------
The continue statement is used to skip the current iteration of a loop and proceed with the next iteration.