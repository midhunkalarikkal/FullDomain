## `JAVASCRIPT` ##
===================
JavaScript is a high-level, dynamic, interpreted programming language primarily used for adding interactivity and dynamic behavior to web pages. It is a single-threaded, synchronous, and event-driven language that supports both functional and object-oriented programming paradigms. JavaScript runs in the browser and server environments (like Node.js) using engines such as V8, which execute its code.

A `dynamic language` means you can define variables, objects, and functions without specifying their types beforehand. The type of a variable can change at runtime.

`Interpreted` means that the code is read and executed line by line by an interpreter, without the need for pre-compiling it into machine code.

`Synchronous`
JavaScript executes code line by line, in order. It waits for one task to complete before moving to the next.

`Single-Threaded`
JavaScript has only one main thread to execute code, meaning it can handle one task at a time.

An `event-driven` language means the flow of the program is determined by events, such as user actions (clicks, key presses), system messages, or other triggers. Instead of executing code sequentially, it waits for an event to occur and then runs the corresponding code (called an event handler).

Javascript is neighther a interpreter language or compiler language, but it uses both of them inside v8 engine.
The compilation process inside the v8 engine is said to be the `JIT Compilation` that menas just in time compilation.

## `Execution context` ##
=========================
Everything in javascript is happens inside the Executiom context and it have two components memory and code.
The execution context is created in the call stack

`Memory Component`:
Variables and functions are stored here as key-value pairs.
This component is also referred to as the Variable Environment.

`Code Component`:
The code is executed here, one line at a time.
This component is also known as the Thread of Execution.


When executing a program its first phase is memory creation

In this phase inside the memory component for variales is assigned to undefined and the functions are stored with the functions whole code

The second phase is code execution phase

In this phase the variables will asiign with thier actual value in the program

For the function in main memory component it will create a new execution context in the code component when the function is invoked in the main memory component and in the code component there will be a memory and code component its self

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
Null
Undefined
Symbol

## `Non primitive data` ##
===========================
Object
Array
Function
Date
Regex
Map
set

`Set`
------
Set is a built-in object that allows you to store unique values of any type

`Weak set`
-----------
A WeakSet is a built-in object in JavaScript that can only store objects

## `Window` ##
===============
Window is a global object is created along with the execution context
Whatever we write in the global space it will attached to the global object

## `Scope` ##
=============
Scope means where you can access a specific variable or function in our code  
The lexical environment of Global execution context will point to null , because there is no parent for it anymore.

## `Scope chain` ##
====================
Chain of the lexical environment and its lexical environment of parent

If the js engine does not find any variable in the local memory it will move to the lexical scope , this continue until it find the value or null

## `Block scope` ##
====================
{ from this to } is a block is used for grouping together the statements , it is also known as compund statement

it is used when javascript expect a single statement to run

if let and const are inside a block , then let and const are stored in separate memory space that is called block

let and const are block scoped and those are not accessed from outside

After executing the block in the program , the block scope will remove from the memory so thats why the let and const are not accessible from outside

=================================================
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
=================================================

## `Scope` ##
==============
Scope refers to the context in which variables are declared and the accessibility of those variables.

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
function a(){
console.log("a called")
}

This is a function statement , in hoisted phase it will get the result because it is a  normal function

`Funtion expression`
---------------------
var b = function(){
console.log("b called")
}

This is a function expression , in the hoisting phase it will get undefined because js engine treat it as a variable so that it wont be accessible before its definition


`Function declaration`
-----------------------
It is same as function statement

`Anonymous function`
---------------------
function (){

}

This will cause a syntax error by using an anonymous function we need to assign it to a vaiable

The anonymous function is used as a value

it is used in callbacks and iife function 

example : setTimeout(function(){ conole.log("Javascript") },1000)

`Named function expression`
----------------------------
var b = function xyz(){
console.log("xyz called")
}

This is named function expression , which is nothing but a normal function is assinged to a variable

But we cant access the xyz() like this in outside , it will cause an reference error

So the xyz() is acting as a varibale of that function it is used to call that function inside that function itself

`Functional programming`
-------------------------
Functional programming is a programming paradigm where you build software by composing and applying pure functions, avoiding changing state and mutable data.

`Higher order function`
------------------------
A function that takes one or more functions as arguments or returns a function as a result. It enables functional programming concepts like mapping, filtering, and reducing.

`First class function`
------------------------
In JavaScript, functions are first-class citizens, which means they can be 
assigned to variable
Passed as arguments
Returned from other function
Stored in datastructure

`Assigned to a variable`
-------------------------
const greet = function(name) {
  return "Hello, " + name + "!";
};

`Passed as an argument`
------------------------
const square = function(x) {
  return x * x;
};

const applyOperation = function(func, operand) {
  return func(operand);
};

console.log(applyOperation(square, 4)); // 16


`Retrned from function`
--------------------------
const createMultiplier = function(factor) {
  return function(x) {
    return x * factor;
  };
};

const double = createMultiplier(2);
console.log(double(5)); // 10

`Stored in datastructure`
--------------------------
const functionsArray = [
  function(x) { return x + 1; },
  function(x) { return x * 2; }
];

console.log(functionsArray[0](3)); // 4

`Contructor function`
----------------------
function Dog(name) {
  this.name = name;
}

it uses new keyword to reate its instance

`Factory function`
-------------------
Factory function is a function in javascript it returns an object , use of it is encapsulates the object

`Pure function`
-----------------
it has no side effects, it always returns the same result for the same inputs, and it doesn't modify any external state.

`Impure function`
------------------
it modifies the external state (result variable) as a side effect.



## `Advantages of JavaScript` ##
==================================

Versatility: Used for both client and server-side development.

Asynchronous Programming: Supports non-blocking code for responsive applications.

Rich Ecosystem: Abundance of libraries and frameworks for efficient development.

Dynamic Typing: Flexible handling of variable types simplifies coding.

Community Support: Large and active developer community for shared knowledge.


## `Disadvantages of JavaScript` ##
====================================

Browser Compatibility: Inconsistencies in how browsers interpret JavaScript.

Security Concerns: Vulnerable to issues like Cross-Site Scripting (XSS) attacks.

Single Threaded: Limited to one operation at a time, potentially causing bottlenecks.

Callback Hell: Nested callbacks can lead to complex and hard-to-read code.

Lack of Strong Typing: Dynamic typing can result in runtime errors, requiring thorough testing.


## `Memoization` ##
====================
Memoization is a technique used in programming to optimize the performance of functions by caching the results of expensive function calls and reusing them when the same inputs occur again.

## `Prototype` ##
==================
In JavaScript, each object has an internal property called [[Prototype]] 

In JavaScript, the prototype is a fundamental concept that allows objects to inherit properties and methods from other objects. Every JavaScript object has a prototype, which is either null or references another object.

`Prototype Chain`
------------------
The prototype chain is a series of objects linked together by their prototypes. When you access a property or method on an object, JavaScript first checks if that property or method exists directly on the object. If it doesn't find it, JavaScript then looks at the object's prototype, and if it's not there, it continues up the prototype chain until it either finds the property/method or reaches the end of the chain (when the prototype is null).

arr or function or object
everything in javascript is an object

arr.__proto__     is an object
arr.__proto__.__proto__      is an object.prototype
arr.__proto__.__proto__.__proto__      is an  object.prototype.prototype == null

`Object creation`
-------------------
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log(`${this.name} says Woof!`);
};

const myDog = new Dog('Buddy');
myDog.bark(); // Outputs: Buddy says Woof!

`Inheritance`
--------------
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
memoize
maintaining state in async world
setTimeouts
Iterators


`Closure applications`
=======================
Creating private variables , factory functions , Event handlers

`Data encapsulation`
----------------------
Closures help in creating private variables and methods, allowing you to encapsulate data and restrict access to certain parts of your code.

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


`Factory Functions`
---------------------
Factory function is a function that returns an object
Closures are often used in factory functions to create objects with private state.

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

`Event Handlers`
------------------
Closures are useful in event handling to maintain the context in which a function was created.

`Closure disadvantages`
========================
`Memory Usage`
---------------
Closures can lead to memory leaks if not managed carefully. Since the inner function retains references to outer variables, it keeps them alive even when they are no longer needed.

`Readability and Maintainability`
----------------------------------`
Overusing closures can make code harder to read and maintain, especially if closures are deeply nested or if the scope chain becomes complex.

`Performance Impact`
----------------------
Closures may have a slight performance impact compared to non-closure alternatives, especially in situations where optimization is critical.

## `Garbage collection` ##
===========================
Garbage collection is the process by which the JavaScript engine automatically detects and frees up memory occupied by objects that are no longer reachable or referenced in the program. This helps prevent memory leaks and ensures efficient memory usage.

`How Garbage Collection Works`
==============================
`Mark and Sweep Algorithm`
---------------------------
The most common garbage collection algorithm used in JavaScript is the Mark and Sweep algorithm.

`Mark Phase`
-------------
During the mark phase, the garbage collector identifies and marks all objects that are reachable or in use by the program. It starts from the root objects, such as global variables and local variables in execution context, and traverses the object graph.

`Sweep Phase`
--------------
In the sweep phase, the garbage collector scans the entire heap and deallocates (frees up) memory occupied by objects that were not marked as reachable. These are considered garbage and are candidates for removal.

`Memory Reclamation`
---------------------
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

console.log(y); // undefined
var y = 10;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
let z = 20;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 20;

`Function` vs `Arrow Function`
-------------------------------
In the execution context in the first phase the function get its whole code thats why  it is accessible before the function definition

Function declarations are fully hoisted, meaning they are moved to the top of their containing scope and can be called before their declaration.

sample()  //Midhun
function sample(){
    console.log("Midhun");
}

In the execution context in the first phase the arrow function is allocated with the placeholder undefined , that's why it is showing  
the function name is not a function

Arrow functions, however, are not hoisted in the same way. They are part of an expression and are only assigned when that line of code is executed.

sample()  //Not a function because undefined
var sample = ()=>{
    console.log("Midhun");
}
sample2()  //Not a function because undefined
var sample2 = function(){}

In the arrow function in case of let or const instead of var the error will be reference error

## `This keyword` ##
=====================

1 . in global scope the this keyword is “window”

2 . inside a normal function the this keyword is “undefined” in strict mode and window in non strict mode

	2 . 1 . this is because the this substitution or if the value of this keyword is 		undefined or null this keyword will be replaced by javascipt with global 		object only in non strict mode

	2 . 2. if the normal  function is calling alone it is undefined  // x()  = undefined

	2 . 3 . if the normal function is calling along with an object the result will be that 		object  // window.x()  = window

3 . Inside an object method the this keyword is result in that object

`Global Context`
-----------------
In the global context, outside of any function, this refers to the global object, which is window in a browser environment.
console.log(this === window);

`Function Context`
-------------------
Inside a function, the value of this depends on how the function is invoked.

function showThis() {
  console.log(this);
}

showThis();

`Object Methods`
-----------------
When a function is a method of an object, this refers to the object on which the method is called.

const myObject = {
  greeting: 'Hello',
  sayHello: function() {
    console.log(this.greeting);
  }
};

myObject.sayHello();

`Constructor Functions`
------------------------
When a function is used as a constructor with the new keyword, this refers to the newly created instance.

function Person(name) {
  this.name = name;
}

const john = new Person('John');
console.log(john.name); // Outputs: John

`Event Handlers`
-----------------
In event handlers, this typically refers to the element that triggered the event.
<button onclick="console.log(this)">Click me</button>

`Arrow Functions`
------------------
Arrow functions do not have their own this. They inherit this from the enclosing scope. In other words, they do not have the concept of dynamic this.

const myFunction = () => {
  console.log(this); // 'this' is determined by the surrounding scope
};


## `Function methods` or `context changing methods` or `function binding methods`
==================================================================================

The three functions call(), apply(), and bind() are often referred to as "function methods" or "context-changing methods" in JavaScript. They are methods provided by the Function prototype in JavaScript and are used for manipulating the this value in functions.

`Call()`
---------
Function borrowing

The call method is used to invoke a function with a specified this value
The this value is referencing the object
In call method we can pass arguments by separating with commas

const person = { name: 'John' };

function sayHello(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

sayHello.call(person, 'Hello');

`Apply()`
----------
The call method is used to invoke a function with a specified this value
The this value is referencing the object
In call method we can pass arguments using an array

function greet(message1, message2) {
  console.log(`${message1}, ${message2}, ${this.name}`);
}

const person = { name: 'John' };

greet.apply(person, ['Hello', 'How are you?']); // Outputs: Hello, How are you?, John

`Bind()`
--------
The bind() method creates a new function that, when invoked, has its this value set to a specific value. It's useful when you want to create a function with a permanently bound this value.

This will not invoke the function at the bind method but it creates a ne function for using it later

function greet(message) {
  console.log(`${message}, ${this.name}`);
}

const person = { name: 'John' };

const greetJohn = greet.bind(person);
greetJohn('Hi'); // Outputs: Hi, John


## `String methods` ##
=======================

`Length`
---------
Used to get the length of a string

var str = "Midhun"
console.log(str.length) //6

`toUpperCase`
--------------
Used to covert all the characters in a string to uppercase

var str = "Midhun"
console.log(str.toUpperCase())  //MIDHUN

`toLowerCase`
--------------
Used to convert all the characters in a string to lowercase

var str = "MIDHUN"
console.log(str.toLowerCase())  //midhun

`Trim`
-------
Used to remove whitespace from both ends of a string

var str = " Hello Midhun "
console.log(str.trim())  // "Hello Midhun"

`PadStart / padEnd`
--------------------
Used to add characters in the starting or ending to achieve a desired length

var str = "Midhun"
console.log(str.padStart(10,"$"))  //$$$$Midhun
console.log(str.padEnd(10,"$"))  //Midhun$$$$

`charAt`
---------
Used to get the character on a specified index on a string

var str = "Midhun"
console.log(str.charAt(5))  //u

`split`
--------
Used to split a string to an array of substrings based on a specified delimiter

var str = "Hello midhun k paniker"
console.log(str.split(" "))  // ["Hello","midhun","k","paniker"]

`concat`
---------
Used to concatenate one or more strings

var str1 = "Midhun"
var str2 = "Good morning "
console.log(str2.concat(str1))

`substring`
------------
Used to extract a portion of a string based on a specified start and end indices

var str = "Midhun k paniker"
console.log(str.substr(9,13)) // pani  here end indices is ignored

`substr`
---------
Used to extract a substring from a string using the start indices and the desired length

var str4 = "Midhun k paniker"
console.log("Substr :",str4.substr(3,10))

## `Array methods` ##
=======================

1. `Map`
=========
The map() method is a built-in method in JavaScript that allows you to apply a function to each element of an array and create a new array with the results.

let newArray = array.map(function(currentValue, index, array) {
  
});

`Transforming Elements`
------------------------
let arr = [1,2,3,4,5,6]
let newarr = arr.map( (x) => x * 2 ) 
console.log(newarr)

// [ 2, 4, 6, 8, 10, 12 ]


`Extracting a property`
------------------------
let users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
  ];

  let newarr = users.map((x) => x.name)
  console.log(newarr)

// [ 'Alice', 'Bob', 'Charlie' ]


`Converting datatypes`
-----------------------
let arr = ["1","2","3"]
let newarr = arr.map((x) => parseInt(x))
console.log(newarr)

// [ 1, 2, 3 ]


2. `reduce`
============
used to reduce the elements of an array to a single value. It iterates over each element of the array, applying a callback function that you provide, and accumulates a result. The result could be of any type

array.reduce(function(accumulator, currentValue, currentIndex, array) {

}, initialAccumulator);

accumulator:  is a running total or an accumulated value that gets updated at each iteration of the array

`Summing an array`
-------------------
let arr = [1,2,3,4,5]
let sum = arr.reduce(function(accumulator , currentValue , currentIndex , array){
    return  accumulator + currentValue
},0)
console.log(sum)

// 15

`Finding the maximum value`
----------------------------
let arr = [1,5,2,7,9,10,44,77,88]
let highval = arr.reduce((accumulator,currentValue)=> Math.max(accumulator,currentValue),0)
console.log(highval)

// 88

`Flatering an array of arrays`
--------------------------------
let arr = [[1,2],[3,4],[5,6]]
let newarr = arr.reduce((accumuator,currentvalue)=> accumuator.concat(currentvalue),[])
console.log(newarr)

// [ 1, 2, 3, 4, 5, 6 ]

`Grouping objects by a property`
---------------------------------
let students = [
  { name: 'Alice', age: 22, grade: 'A' },
  { name: 'Bob', age: 24, grade: 'B' },
  { name: 'Charlie', age: 21, grade: 'A' }
];

let groupedByGrade = students.reduce(function(accumulator, currentValue) {
  (accumulator[currentValue.grade] = accumulator[currentValue.grade] || []).push(currentValue);
  return accumulator;
}, {});

// groupedByGrade is now { A: [{...}, {...}], B: [{...}] }

`Calculating average`
----------------------
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

3. `Filter`
=============
used to create a new array with elements that pass a certain condition defined by a provided function. 

let newArray = array.filter(function(curent value, index, array) {

});

`Filtering odd numbers`
------------------------
let arr = [1,2,3,4,5]
let newarr = arr.filter((element,index,arr)=>{
	return element % 2 == 1
})

console.log(newarr)  // [1,3,5]

`Filtering strings longer than a certain length`
------------------------------------------------
let arr = ["midhun","hello","programer","coding","passion","practice"]
let newarr = arr.filter((element,index,arr)=>{
    return element.length > 7
})

console.log(newarr)  //  ["programer","practice"]

`Filter objects based on a condition`
--------------------------------------
let students = [
    { name: 'Alice', age: 22, grade: 'A' },
    { name: 'Bob', age: 24, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'A' }
  ];

  let newarr = students.filter((element,index,arr)=>{
    return element.grade === "A"
  })

  console.log(newarr)

4. `Find`
==========
 used to retrieve the first element in an array that satisfies a specified condition.

let result = array.find(function(element, index, array) {
  
});

`Finding an element based on a condition`
------------------------------------------
let arr = [1,2,3,4,5,]
let num = arr.find((element,index,arr)=>{
    return element > 3
})

console.log(num)  // 4

`Finding an object based on a property`
----------------------------------------
let students = [
    { name: 'Alice', age: 22, grade: 'A' },
    { name: 'Bob', age: 24, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'A' }
  ];

  let std = students.find((element,index,arr)=>{
    return element.grade === "A"
  })

  console.log(std)

`Using find() with an external function`
-----------------------------------------
function check (element){
    return element > 10
}

let arr = [11,3,23,45,16,74,4,6,7,8,3,56,67]
let num = arr.find(check)

console.log(num) // 11

5. `Sort`
==========
used to sort the elements of an array. By default, it sorts the elements as strings in lexicographic (dictionary) order. However, you can provide a compare function to determine the sorting order based on numeric or custom criteria.

let newArray = array.sort([compareFunction]);

`Sorting numeric values`
-------------------------
let arr = [1,4,2,7,33,56,83,85,3,66]

let newarr = arr.sort((a,b) => a-b)

console.log(newarr)

`Sorting string`
-----------------
let arr = ["Banana","Pinapple","Apple","Grapes"]

let newarr = arr.sort()

console.log(newarr)

`Sorting string in reverse`
----------------------------
let arr = ["Grapes","Apple","Banana","Pineapple"]

let newarr = arr.sort().reverse()

console.log(newarr)

`Sorting the object based on th year property`
-----------------------------------------------
let cars = [
    { make: 'Toyota', model: 'Camry', year: 2019 },
    { make: 'Honda', model: 'Civic', year: 2020 },
    { make: 'Ford', model: 'Focus', year: 2018 }
  ];

  let newarr = cars.sort((a,b)=> a.year - b.year)

  console.log(newarr)

`Sorting the object based on the make property`
------------------------------------------------
let cars = [
    { make: 'Toyota', model: 'Camry', year: 2019 },
    { make: 'Honda', model: 'Civic', year: 2020 },
    { make: 'Ford', model: 'Focus', year: 2018 }
  ];

  let newarr = cars.sort((a,b) => a.make.localeCompare(b.make))

  console.log(newarr)

`Sorting strings in custom order`
----------------------------------
let arr = ["red","yellow","black","white"]
let newarr = arr.sort((a,b)=>{
    const order = {black : 1 , red : 2, yellow : 3, white : 4}
    return order[a] - order[b]
})
console.log(newarr)

6. `forEach`
==============
allows you to iterate over the elements of an array and perform a specified action for each element.

array.forEach(function(element, index, array) {
  
});

`Logging array elements`
------------------------
let arr = ["black","red","yello","orange"]
arr.forEach((element,index,arr)=>{
    console.log(element)
})

`Modifying the array elements`
-------------------------------
let arr = [1,2,3,4,5]
arr.forEach((element,index,arr)=>{
    arr[index] = element*2
})
console.log(arr)

`Summing array elements`
-------------------------
let arr = [1,2,3,4,5]
var sum = 0
arr.forEach((element,index,arr)=>{
    sum += element
})
console.log(sum)

7. `Push`
============
used to add one or more elements to the end of an array. It modifies the original array and returns the new length of the array.

`Adding element to an array`
-----------------------------
let arr = ["midhun","Jithin","goutham","thejus"]
arr.push("Lamborghini","porsche","jaguar","mclaren")
console.log(arr)

`Appending a new array`
------------------------
let arr = [1,2,3,4,5]
let newarr = [6,7,8,9,10,11,12]
arr.push(...newarr)
console.log(arr)

`Adding elements dynamically`
------------------------------
let arr = []

function addelement(element){
    arr.push(element)
}

addelement(10)
addelement(20)
addelement(30)

console.log(arr)

`Building an array incrementally`
----------------------------------
let arr = []

for(var i = 0; i < 10; i++){
    arr.push(i)
}
console.log(arr)

`Adding object to an array`
----------------------------
let arr = []

arr.push({name : "Midhun", age : 23, place : "Kerala"})

console.log(arr)

8. `Shift`
============
that removes the first element from an array and returns that element. It also shifts all remaining elements to a lower index, effectively reducing the length of the array by 1. If the array is empty, shift() returns undefined. The shift() method modifies the original array.

var shiftedElement = array.shift();

`Removing the first element`
-----------------------------
let arr = ["one","two","three","four","five"]
let currentelement = arr.shift()
console.log(currentelement)

`Processing elements one by one`
---------------------------------
let arr = [1,2,3,4,5]
while(arr.length > 0){
    let ce = arr.shift()
    console.log(ce)
}

`Implementing FIFO Data structure`
-----------------------------------
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

9. `Unshift`
=============
that adds one or more elements to the beginning of an array. It modifies the original array and returns the new length of the array.

var newLength = array.unshift(element1, element2, ..., elementN);

`Adding elements to the bigining`
----------------------------------
let arr = ["hi","hello","Namaste"]
arr.unshift("Good morning","Welcom")
console.log(arr)

`Implementing an array`
------------------------
let arr = []
for(var i = 1; i <= 5; i++){
    arr.unshift(i)
}
console.log(arr) // [5,4,3,2,1]

`Combining two arrays`
-----------------------
let arr1 = [1,2]
let arr2 = [3,4]
arr2.unshift(...arr1)
console.log(arr2) // [1,2,3,4]

`Adding elements dynamically`
------------------------------
let arr = ["hi"]
function add(element){
    arr.unshift(element)
}
add("Welcome")
console.log(arr) // ["welcome","hi"]

10. `Slice`
===========
that returns a shallow copy of a portion of an array. It does not modify the original array but instead creates a new array containing the elements from the specified start index to the specified end index (excluding the end index).

var newArray = array.slice(startIndex, endIndex);

startIndex - inclusive
endIndex - exclusive

`Extracting a subarray`
------------------------
let arr = ["one","two","three","four"]

let newarr = arr.slice(0,2)

console.log(newarr)  // ["one","two"]

`Extrating the last three elements from an array`
--------------------------------------------------
let arr = [ 1,2,3,4,5]

let newarr = arr.slice(-3)

console.log(newarr)  // [3,4,5]

`Extracting the remaining elements`
------------------------------------
let arr = [1,2,3,4,5]

let newarr = arr.slice(3)

console.log(newarr)  // [4,5]  the first three elements will be ignored

`Extracting the elements using negetive numbers`
-------------------------------------------------
let arr = [1,2,3,4,5]

let newarr = arr.slice(-3,-1)  // from -1 to -3 , -3rd element 

console.log(newarr)  //  [3,4]

`Extracting and modifying the subarray`
----------------------------------------
let arr = [1,2,3,4,5]

let newarr = arr.slice(1,4)  // [2,3,4]

newarr[0] = "first"

console.log(newarr)  // ["first",3,4]

11. `Splice`
=============
that is used for adding or removing elements from an array. It directly modifies the original array and returns an array containing the removed elements.

var removedElements = array.splice(startIndex, deleteCount, item1, item2, ...);  // item1 , item2 is the adding elements

`Deleting elements from an array`
----------------------------------
let arr = [1,2,3,4,5]
let newarr = arr.splice(2,2)
console.log(newarr) // [3,4]

`Adding elements to a specified index of an array without removing any elements`
---------------------------------------------------------------------------------
let arr = [1,2,3,4,5]
let newarr = arr.splice(1,0,111,222)
console.log(arr)  // [1,111,222,2,3,4,5]

`Replacing element`
--------------------
let arr = ["one","two","three","four"]
arr.splice(1,1,"add1","add2")
console.log(arr)  // ["one","add1","add2","three","four"]

`Removing element from end`
----------------------------
let arr = ["one","two","three","four"]
arr.splice(-1)
console.log(arr) // ["one","two","three"]

`Adding elements to an empty array`
------------------------------------
let arr = []
arr.splice(0,0,1,2,3,4,5)
console.log(arr)  // [1,2,3,4,5]




## `Object methods` ##
=======================

1. `Object.keys(ObjectName)`
==============================
Returns an array of a given object's own property names.

let ob = {name : "Midhun", age : 23}
let arr = Object.keys(ob)
console.log(arr)  // [name,age]

2. `Object.values(ObjectName)`
=================================
Returns an array of a given object's own property values.

let ob = {name : "midhun",age : 23}
let arr = Object.values(ob)
console.log(arr)  // [midhun,23]

3. `Object.entries(ObjectName)`
=================================
Returns an array of a given object's own enumerable property [key, value] pairs.

let ob = {name : "midhun", age : 23}
let arr = Object.entries(ob)
console.log(arr)  // [[name : "midhun"],[age : 23]]

4. `Object.assign(ObjectName)`
===============================
Copies the values of all enumerable own properties from one or more source objects to a target object.

Object.assign(target, source1, source2, ...);

let ob1 = {name : "Midhun", age : 23}
let ob2 = {age : 24, state : "kerala"}
let merge = Object.assign({},ob1,ob2)
console.log(merge)  // {name : "midhun",age : 24, state : "kerala"}

5. `Object.freeze(ObjectName)`
===============================
This method makes an object immutable by preventing any changes to the object's properties and preventing the addition or removal of properties.

It deeply freezes an object, meaning that not only the object itself but also its nested objects (if any) become immutable.

let ob = {name : "midhun", age : 23}
Object.freeze(ob)

6. `Object.seal(ObjectName)`
====================================
This method makes an object's properties non-extensible (i.e., prevents the addition of new properties), but allows the values of existing properties to be changed.

It does not affect the mutability of the values themselves, so you can still modify the contents of object properties or nested objects.

let ob = {name : "midhun",age : 23}
Object.seal(ob)

7. `Object.hasOwnProperty(key)`
=================================
Returns a boolean indicating whether the object has the specified property as its own property (not inherited).

let ob = {name : "midhun",age : 23}
const hasname = ob.hasOwnProperty("name")
console.log(hasname) // true

8. `Object.fromEntries(arrayName)`
====================================
Transforms a list of key-value pairs into an object.

let arr = [["name" , "midhun"],["age" , 23]]
let ob = Object.fromEntries(arr)
console.log(ob)  // {name : "midhun",age : 23}


## `Callback` ##
===================

A callback in JavaScript is a function that is passed as an argument to another function and is executed after the completion of a specific task. Callbacks are a crucial concept in asynchronous programming, allowing you to control the flow of the program and handle asynchronous operations such as fetching data, processing events, or performing I/O operations.

Used in setTimeout , setInterval , Promises , Event handling , Higherorder functions

`Disadvantages of callback`
----------------------------
Callback hell
Error handling
Readbility




## `Callback hell` ##
========================
Callback Hell refers to the situation where multiple nested callbacks are used in asynchronous JavaScript code, leading to code that is difficult to read, understand, and maintain.

`Solution for callbackhell`
----------------------------
Use promises and async await

## `Promises` ##
====================
A Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. It allows you to write more readable and manageable asynchronous code compared to traditional callback-based approaches.

Pending: The initial state; the promise is neither fulfilled nor rejected.
Fulfilled: The operation completed successfully, and the promise has a resulting value.
Rejected: The operation failed, and the promise has a reason for the failure.

`Creating a promise`
---------------------
const promise = new Promise((resolve,reject)=>{
	if(operation-Successfull){
		resolve(result)
	}else{
		reject(error)
	}
})

promise.then(		// pending
  result => {		// Fullfilled	
    console.log(result);
  },
  error => {		// Rejected
    console.error(error);
  }
);

`Advantages of Promises`
-------------------------

Readability: Promises provide a more readable and structured way to handle asynchronous code compared to callbacks.

Error Handling: Promises offer better error handling through the use of the catch method.

Chaining: Promises support chaining, making it easy to compose sequences of asynchronous operations.

State Management: Promises clearly define states (pending, fulfilled, rejected), making it easier to reason about asynchronous code.

`Promise chaining`
-------------------
Promise chaining is a technique in JavaScript where you chain multiple asynchronous operations using promises to make the code more readable and maintainable. This is achieved by returning a new promise from each then or catch block, allowing you to chain subsequent asynchronous operations or handle errors in a sequential and organized manner.

async1("Initial data")
  .then(result1 => async2(result1))
  .then(result2 => async3(result2))
  .then(result3 => {
    console.log("Final result = ", result3);
  })
  .catch(error => {
    console.log("Error occurred:", error);
  });

`Promise.all`
--------------
Promise.all is a method in JavaScript that takes an iterable (e.g., an array) of promises as input and returns a single promise. This new promise fulfills with an array of results when all the input promises have been fulfilled, or it rejects with the reason of the first promise that rejects.

`Promise.allSettled`
---------------------
Promise.allSettled is another method in JavaScript for handling multiple promises. It is similar to Promise.all, but it doesn't short-circuit when one of the promises is rejected. Instead, it waits for all promises to settle (either fulfill or reject) and then returns an array of objects, each representing the outcome of the corresponding promise.

result
Async 1 completed promise1
Async 2 completed promise2
Async 3 completed promise3
All promises fullfilled =   [
  { status: 'fulfilled', value: 'Result from async 1' },
  { status: 'rejected', reason: 'Error in async 2' },
  { status: 'fulfilled', value: 'Result from async 3' }
]

`Promise.race`
----------------
 that takes an iterable of promises and returns a new promise. This new promise settles (fulfills or rejects) as soon as one of the promises in the iterable settles, regardless of whether the other promises have settled.

 Uses are -: Timeout , race conditions , Load balancing , Parallel request , Real time updates

`Then`
--------
The then method is used to handle the fulfillment of a promise. It takes two callback functions: one for the fulfillment (onFulfilled) and another for the rejection (onRejected).

`Finally`
-----------
The finally method is used to specify a function to be executed when the promise is settled (either fulfilled or rejected). This function will be executed regardless of the promise's outcome.

`Catch`
---------
The catch method is a shorthand for handling only the rejection of a promise. It is equivalent to using then(undefined, onRejected).




## `Async Await` ##
=======================
async and await are keywords in JavaScript that simplify the handling of asynchronous code, making it more readable and easier to work with. The async keyword is used to define an asynchronous function, and the await keyword is used to wait for a promise to settle inside that function.




## `Spread and Rest` ##
==========================
The spread (...) and rest (...) operators are both introduced in JavaScript to work with arrays and objects in a concise and powerful way.

## `DOM` ##
==============
The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document, such as elements, attributes, and text.
Components are :- Nodes , methods , events

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




## `ES6 FUNCTIONS AND FEATURES` ##
=====================================
`VAR`
-----
Definition:

var was the original way to declare variables in JavaScript before the introduction of let and const.

Scope:

var variables are function-scoped, meaning they are only visible within the function where they are declared.

Hoisting:

Variables declared with var are hoisted to the top of their scope, allowing them to be used before the actual declaration in the code.

`LET`
------
Definition:

let allows you to declare block-scoped variables.

Scope:

Variables declared with let are block-scoped, meaning they are only visible within the block (statements inside curly braces) where they are declared.

Hoisting:

Like var, variables declared with let are hoisted to the top of their scope, but they are not initialized until the actual declaration in the code.

`CONST`
--------
Definition:

const is used to declare variables whose values should not be reassigned.

Scope:

Variables declared with const are block-scoped.

Hoisting:

Like let, variables declared with const are hoisted to the top of their scope, but they are not initialized until the actual declaration in the code.

`Ternary Operator`
-------------------
The ternary operator, also known as the conditional operator, is a concise way to write conditional statements in JavaScript. It is a shorthand form of the if...else statement.

example: 

const age = 25;
const message = age >= 18 ? 'You are an adult' : 'You are a minor';
console.log(message);

`Default parameters`
---------------------
Default parameters in JavaScript allow you to assign default values to function parameters. If a parameter is not provided when the function is called, the default value will be used.

`Object destructuring`
----------------------
Object destructuring is a feature in JavaScript that allows you to extract values from objects and assign them to variables in a more concise and readable way.

`Classes`
----------
Classes in JavaScript provide a more structured and intuitive way to work with object-oriented programming concepts. They are widely used in modern JavaScript development, especially in frameworks and libraries that leverage object-oriented patterns.

`Static methods`
-----------------
Static methods are methods that are called on the class itself, rather than on instances of the class.

`Super keyword`
----------------
In a derived class constructor, super() is used to call the constructor of the parent class. This is necessary when the child class has its own constructor, and you want to ensure that the initialization code in the parent class's constructor is also executed.

it is used inside the child class's constructor

it is also used in the child class's method to invoke the parent class method

super.parentclassmethodname()

super is not allowed to be used outside of a derived class.
When using super in a method, it must be used before this is used in the method.

`Modules`
------------
In JavaScript, modules are a way to organize code into separate files or modules, making it more maintainable, reusable, and easier to manage. Modules help break down a large codebase into smaller, more manageable pieces, and they provide a mechanism for encapsulation and abstraction.

for exporting :- export const add = (a,b) => a+b;
for importing :- import {add} from "./filename"

`Iterator`
----------
An iterator is an object that provides a standardized way to access the elements or members of a collection (such as an array or an object) one at a time. Iterators allow you to loop through the elements of a collection and perform actions on each element.

the iterator protocol, which consists of two main methods: next and symbol.iterator

The next method return an object with two propertiex  value and done
value is the current element in the collection
done is the boolean value representing whether the iteration is complete or not

symbol.iterator returns an iterator obbject for the collection

`Pass by value`
----------------
When a primitive data type (e.g., number, string, boolean) is passed as an argument to a function, a copy of the actual value is passed. Changes made to the parameter within the function do not affect the original variable outside the function.

function updatex(x){
	x = 42;
}

let num = 10
updatex(num)
console.log(num) //10  will not change the value

because the function received a copy of the value, not a reference to the original variable.

`Pass by reference`
--------------------
For objects (including arrays and functions), what is passed to the function is a reference to the object in memory, not a copy of the object itself.

function updateArray(arr) {
  arr.push(4);
}

let myArray = [1, 2, 3];
updateArray(myArray);
console.log(myArray);  //[1,2,3,4]

In the example above, the function updateArray receives a copy of the reference to the array myArray, and when the function modifies the array by pushing an element, the original array outside the function is also modified.

in the case of objects if we are reassigning the object with new key value pair , it will not modify the outside object

function updateReference(obj) {
    // obj.name = "newname"
    obj = {name : "newname"}
  }
  
  let myObject = { key: 'value' };
  updateReference(myObject);
  console.log(myObject); // {key : 'value'}

if we are modifying the object without reassigning , it will affect the outside object

function updateReference(obj) {
    // obj.name = "newname"
  }
  
  let myObject = { key: 'value' };
  updateReference(myObject);
  console.log(myObject); {key : 'value' , name : 'newname'}

`Message queue`
-----------------
The callback queue, also known as the message queue, holds messages or tasks that are ready to be processed. These tasks are typically generated as a result of asynchronous operations, such as timers, AJAX requests, or user interactions.

`Generator`
-------------
Generators are a type of iterable in JavaScript that allows pausing and resuming the execution of a function. They are defined using function* syntax and yield values one at a time.

`Javascript is dynamically typed`
----------------------------------
JavaScript is a dynamically typed language. This means that the type of a variable is not explicitly declared in the code; instead, it is determined at runtime. In a dynamically typed language like JavaScript, variables can hold values of any type, and their types can change during the execution of a program.

`Currying`
------------
Currying is a functional programming technique in which a function is transformed into a sequence of partially applied functions, each taking a single argument. The result is a chain of functions, each taking a single argument, until the final function in the chain produces the desired result.

function add(x){
    return function(y){
        return function(z){
            return x+y+z
        }
    }
}
console.log(add(1)(2)(3)) // 6

`Tasks`
--------
Micro tasks : - 
Microtasks are tasks with higher priority that are executed asynchronously as soon as the current execution context is emptied and before the event loop advances to the next macrotask.
promises , Mutation obeserver , callbacks

Macro tasks : - 
Macrotasks are tasks with lower priority that are executed asynchronously after the microtask queue has been emptied.

setTimeout , setInterval , eventListener , i/o op

`Message queue`
----------------
a queue where microtasks are enqueued for execution. Microtasks are a specific category of tasks that have higher priority than macrotasks
Microtasks are usually scheduled to run after the current execution context but before the next macrotask is processed.

`Shallow copy`
----------------
A shallow copy is a copy of an object where only the top-level structure of the original object is duplicated, while the nested objects and their references are shared between the original and the copied object.

using Object.assign

const originalObject = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, originalObject);

using spread operator

const originalObject = { a: 1, b: { c: 2 } };
const shallowCopy = { ...originalObject };

modification to the nested value in the shallow copy will affect in the original objhect

`Deep copy`
------------
A deep copy creates a completely independent copy of the original object along with all of its nested objects. Changes made to the nested objects within the copied structure do not affect the original object, and vice versa.

const originalObject = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(originalObject));

`structuredClone`
-------------------
The structuredClone function is a built-in method introduced in modern JavaScript to create a deep copy of a value. It is a reliable way to duplicate complex data structures, including objects, arrays, and other supported types, without sharing references.

`Json parse`
-------------
The JSON.parse() method is used to parse a JSON string and convert it into a JavaScript object. It takes a JSON-formatted string as its argument and returns the corresponding JavaScript object.

const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const parsedObject = JSON.parse(jsonString);

console.log(parsedObject); // Output: { name: 'John', age: 30, city: 'New York' }

`Json stringify`
------------------
The JSON.stringify() method is used to convert a JavaScript object into a JSON-formatted string. It takes an object as its first argument and an optional replacer function and space parameter.

const personObject = { name: 'Alice', age: 25, city: 'London' };
const jsonString = JSON.stringify(personObject);

console.log(jsonString); // Output: '{"name":"Alice","age":25,"city":"London"}'


`Immutabiity`
--------------
Immutability in JavaScript refers to the idea that once an object (or data structure) is created, it cannot be changed. Instead of modifying the existing object, you create a new object with the desired changes. 

`Implicit coercion`
--------------------
Implicit coercion happens automatically by the JavaScript engine when values of different types are used together. JavaScript tries to make sense of the operation and convert the values as needed.

const x = 5
const y = "10"
console.log(x+y) // "510"

`Explicit conversion`
------------------------
Explicit conversion involves intentionally converting a value from one type to another using functions or methods provided by the language.

const x = "123";
const y = Number(x);

const x = "5";
const y = parseInt(x);

`==`	or `Loose equality`
-------------------------
In JavaScript, the == (loose equality) operator performs type coercion if the operands are of different types. It tries to convert the operands to the same type before making the comparison.

`===` or `strict equality`
------------------------------
The === (strict equality) operator, on the other hand, does not perform type coercion. It checks both the value and the type.

`IIFE`
----------
Immediately Invoked Function Expression, is a JavaScript function that is defined and executed immediately after its creation. It is a common pattern used to create a new scope for variables to avoid polluting the global scope and to encapsulate code.

(function(x){
	code
})()

It creates a new scope , avoiding polluting global scope

Uses are :- Encapsulation , Data privacy , Avoiding Hoisting Issues , Creating modules

this keyword inside the iife is will be global object for nodejs and window for browser environment in non strcit mode

If the IIFE is running in strict mode ('use strict';), the value of this inside the IIFE will be undefined.

Advantages are encapsulation and isolation

Wrapping the function in parentheses () makes it an expression rather than a declaration.
Only function expressions can be invoked immediately, making the use of parentheses crucial for IIFE syntax.

## `Types of modules in Javascript` ##
======================================

1. `ES6 Modules`
==================
- **Environment**: Modern Browsers, Node.js  
- **Syntax Example**: `import/export`  
- **Key Features**: Standardized, strict mode, asynchronous  

2. `CommonJS Modules`
=======================
- **Environment**: Node.js  
- **Syntax Example**: `require/module.exports`  
- **Key Features**: Synchronous, widely used in Node.js  

3. `UMD Modules`
==================
- **Environment**: Browsers, Node.js  
- **Syntax Example**: Hybrid format  
- **Key Features**: Universal compatibility  

4. `AMD Modules`
================
- **Environment**: Browsers  
- **Syntax Example**: `define/require`  
- **Key Features**: Asynchronous, suited for front-end  

5. `IIFE Modules`
===================
- **Environment**: Any (Legacy)  
- **Syntax Example**: Self-executing  
- **Key Features**: Encapsulation, avoids global scope  

## `Event deligation` ##
=========================
Event delegation is a JavaScript programming pattern where a single event listener is attached to a common ancestor element of multiple child elements. Instead of attaching individual event listeners to each child element, you delegate the responsibility of handling events to a higher-level ancestor. When an event occurs on a child element, it bubbles up to the ancestor where a single event listener can respond to it.

## `Event propogation` ##
==========================
Event propagation refers to the process of an event traveling through the DOM hierarchy.

Capturing Phase (Trickling Phase): The event travels from the root of the document to the target element.
Bubbling Phase: The event travels from the target element back up to the root.

Event Bubbling:-
Definition: Event bubbling specifically refers to the bubbling phase of event propagation.

## `setInterval` ##
=====================
Definition: Executes a specified function repeatedly at a fixed time interval (in milliseconds) until explicitly stopped using clearInterval.
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
Definition: Executes a specified function once after a fixed delay (in milliseconds).
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
So the setTimeout will be offloaded to libuv and then the v8 engine finishes the synchronous code execution and empty the call stack that means removes the execution context from the call stack, then only the setTimeout will work after 0 seconds. That means the when the main thread is empty.

## `setImmediate (Node.js only)` ##
=====================================
Definition: Executes a specified function immediately after the current event loop phase. It’s faster than setTimeout(fn, 0) but still waits for I/O operations in the event loop.
Use Case: Running a task as soon as the current event loop finishes (micro-task level timing).

## Example
===========
```js
console.log("Before setImmediate");

setImmediate(() => {
    console.log("This runs immediately after the current event loop");
});

console.log("After setImmediate");

```









## `Polyfills` ##
=================
Polyfills are code snippets or scripts that provide modern functionality in older browsers.
For example, if a newer JavaScript method or API is not supported in older versions of a browser, a polyfill can be used to provide that functionality.

Process.nextTick()
------------------
After i/o and timer

## `Priority calling` ##
=========================
conosle.log()
process.nextTick()
promise
setTimeout
setImmediate
setInterval



## `JIT (Just in time)` ##
============================
Just-In-Time (JIT) compilation is a technique used in programming where code is dynamically translated into native machine code at runtime, instead of being compiled ahead of time (AOT). This approach allows for improved execution speed and efficiency during program execution.

`Working`
----------
Source Code Parsing:
The source code (e.g., JavaScript) is initially parsed into an intermediate representation like bytecode.

Runtime Compilation:
During execution, frequently used parts of the code (called "hot code") are identified and compiled into machine code.

Optimization:
The JIT compiler optimizes the machine code during this process to enhance performance.

Execution:
The machine code is then directly executed by the CPU, leading to faster execution compared to interpretation.






## `Topics` ##
================
Prefetch and Preload



