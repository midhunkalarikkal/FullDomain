## `JAVASCRIPT` ##
===================
Created by `Brendan Ech` in 1995

- JavaScript is a high-level, dynamic, interpreted programming language.
- Used for adding interactivity and dynamic behavior to web pages. 
- It is a single-threaded, synchronous, and event-driven language.
- It supports both functional and object-oriented programming paradigms.
- It runs in the browser and server environments (like Node.js) using engines such as V8

Chrome, Opera, Edge (new) -> V8
Firefox -> SpiderMonkey 
Safari -> JavaScriptCore / Nitro 
Old Microsoft Edge (non-Chromium) -> Chakra

A `dynamic language` means we can define variables, objects, and functions without specifying their types beforehand. The type of a variable can change at runtime.

`Interpreted` means that the code is read and executed line by line by an interpreter, without the need for pre-compiling it into machine code.

`Synchronous`
JavaScript executes code line by line, in  an order. It waits for one task to complete before moving to the next.

`Single-Threaded`
JavaScript has only one main thread to execute code, meaning it can handle one task at a time.

`event-driven language` means the flow of the program is determined by events, such as user actions (clicks, key presses), system messages, or other triggers. Instead of executing code sequentially, it waits for an event to occur and then runs the corresponding code.

## `Advantages of JavaScript`
-----------------------------
- Versatility: Used for both client and server-side development.
- Asynchronous Programming: Supports non-blocking code for responsive applications.
- Rich Ecosystem: Lots of libraries and frameworks for efficient development.
- Dynamic Typing: Flexible handling of variable types simplifies coding.
- Community Support: Large and active developer community for shared knowledge.

## `Disadvantages of JavaScript`
------------------------------
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

`When executing a program its first phase is memory creation`
In this phase inside the memory component for variales is assigned to undefined and the functions are stored with the functions whole code ( only for normal function not for arrow function )

`The second phase is code execution phase`
In this phase the variables will assign with thier actual value in the program

For the function in main memory component it will create a new execution context in the code component when the function is invoked and in the code component there will be a memory and code component its self

There will store the parameters and variables of the function of the program in the memory component in the first phase

In the second phase the parameters and variables will get the actual value

when it return the value the execution context of the function will be removed and the control will be returned to the function invoked line in the main execution context's main memory component

After the execution of the program the global execution context will be deleted

whenever an execution context is created , the memory component will get the access to the lexical environemnt of its parent

lexical environment means -> where is the code physically appear





## `Primitive data` ##
======================
1. `Number`
The Number type in JavaScript is used to represent both integers and floating-point numbers. it can only store up to 64 bit.

2. `BigInt`
BigInt is a primitive data type introduced in ES2020 that allows us to work with integers of large bit length.

3. `String`
It is a sequence of Unicode characters, enclosed in:
Single quotes '...' or
Double quotes "...", or
Backticks `...` (for template literals)
Strings are made up of UTF-16 code units.
Each character is typically 16 bits (2 bytes).
JavaScript strings are immutable — once created, they cannot be changed (modifying creates a new string).

4. `Boolean`

5. `Null` - A value that explicitly represents "nothing" or an empty value.
typeof null returns "object"
```js
let y = null; // y is explicitly set to "no value"
```

6. `Undefined` - A variable or property that has been declared but not given a value yet
```js
let x; // x is undefined
```
7. `Symbol` -  It is used to create unique identifiers for object properties. introduced in ES6, To avoid property name collisions.
```js
const sym2 = Symbol('example');  // Symbol with a description
const sym3 = Symbol('example');  // Another Symbol with the same description
console.log(sym2 === sym3);      // false (they are unique)
```





## `Non primitive data` ##
===========================
1. `Object`
2. `Array`
3. `Function`
4. `Date`
5. `Regex`
A Regular Expression is a pattern used to match character combinations in strings. In JavaScript, it is used with methods like .test() and .match().

| Token | Description                        | Example | Matches         |
| ----- | ---------------------------------- | ------- | --------------- |
| `\d`  | Digit (0–9)                        | `/\d/`  | `"A1"` → `1`    |
| `\D`  | Non-digit                          | `/\D/`  | `"A1"` → `A`    |
| `\w`  | Word character (a–z, A–Z, 0–9, \_) | `/\w/`  | `"abc"` → `a`   |
| `\W`  | Non-word character                 | `/\W/`  | `"@"` → `@`     |
| `\s`  | Whitespace (space, tab, newline)   | `/\s/`  | `"a b"` → space |
| `\S`  | Non-whitespace                     | `/\S/`  | `"a b"` → `a`   |
| `.`   | Any character except newline       | `/./`   | `"abc"` → `a`   |

`🧱 Anchors`

| Anchor | Description         | Example      | Matches            |
| ------ | ------------------- | ------------ | ------------------ |
| `^`    | Start of string     | `/^a/`       | `"abc"` → `a`      |
| `$`    | End of string       | `/c$/`       | `"abc"` → `c`      |
| `\b`   | Word boundary       | `/\bword\b/` | `"word!"` → `word` |
| `\B`   | Not a word boundary | `/\Bend/`    | `"bend"` → `end`   |

by using `\b` the word should start or end with and vice versa for `\B`

Start of string
Space
Punctuation (e.g., ., ,, !, @, etc.)
Any non-word character

`Flags`

| Flag | Name        | Description                          | Example                | Matches      |
| ---- | ----------- | ------------------------------------ | ---------------------- | ------------ |
| `g`  | Global      | Match all occurrences                | `"abcabc".match(/a/g)` | `["a", "a"]` |
| `i`  | Ignore case | Case-insensitive match               | `/abc/i.test("ABC")`   | `true`       |
| `m`  | Multiline   | `^` and `$` match start/end of lines | `/^a/m.test("x\na")`   | `true`       |

`🔁 Quantifiers`

| Quantifier | Description           | Example    | Matches            |
| ---------- | --------------------- | ---------- | ------------------ |
| `*`        | 0 or more times       | `/a*/`     | `"aaa"` → `aaa`    |
| `+`        | 1 or more times       | `/a+/`     | `"aaa"` → `aaa`    |
| `?`        | 0 or 1 time           | `/a?/`     | `"aa"` → `a`       |
| `{n}`      | Exactly n times       | `/a{2}/`   | `"aa"` → `aa`      |
| `{n,}`     | At least n times      | `/a{2,}/`  | `"aaa"` → `aaa`    |
| `{n,m}`    | Between n and m times | `/a{2,4}/` | `"aaaaa"` → `aaaa` |

`🧰 Groups & Alternation`

| Syntax    | Description         | Example     | Matches         |                      |
| --------- | ------------------- | ----------- | --------------- | -------------------- |
| `(abc)`   | Capturing group     | `/(abc)/`   | `"abc"` → `abc` |                      |


6. `Map`
A Map is a collection of key-value pairs, where:
Keys can be of any data type such as String, Number, Boolean, Object, Array, Function, Symbol
it is Faster for frequent additions and the insertion order is preserved
Methods are set(key, value) ,get(key) ,has(key) ,delete(key), clear()

7. `Weak map`
A WeakMap is a collection of key-value pairs, where:
Keys must be objects only (not primitive values).
Prevents memory leaks by allowing garbage collection of unused object keys.
Useful for storing private data related to DOM nodes or objects.
It does not preserve insertion order and is not iterable.
Methods are set(key, value), get(key), has(key), delete(key)
```js
const weakMap = new WeakMap();

const user = { name: "Alice" }; // key
const settings = { theme: "dark" }; // value

weakMap.set(user, settings);
```

8. `set`
A Set is a collection of unique values
Values can be of any data type such as: String, Number, Boolean, Object, Array, Function, Symbol.
Insertion order is preserved and it is iteratable.
Automatically removes duplicates.
Great for checking existence and storing unique items.
Methods are add(value), has(value), delete(value), clear()

9. `Weak set`
A WeakSet is a collection of unique objects
Objects are held weakly, allowing garbage collection if there are no other references.
It is not iterable and does not preserve insertion order.
Used to store temporary or private data tied to objects.
methods are add(value), has(value), delete(value)
```js
const weakSet = new WeakSet();

const user1 = { name: "Alice" };
const user2 = { name: "Bob" };

weakSet.add(user1);
```

10. `Error`




## `NaN`
=========
type of `NaN` is number
It shows up when we do an invalid mathematical operation
NaN is special because it’s the only value in JavaScript that is not equal to itself
To check if something is NaN, use Number.isNaN():
```js
console.log(NaN === NaN); //false
console.log("abc" * 5); // NaN
console.log(0 / 0);     // NaN
console.log(Number.isNaN(NaN)); // true
```





## `Window` ##
===============
Window is a global object is created along with the global execution context
Any variable or function declared in the global scope using var becomes a property of the window object.
```js
var a = 10;
console.log(window.a) this is what is  console.log(a);
```
`this` keyword in the global context also refers to the window object.
and we can call the window object by using `this` keyword
`var` is function scoped,`let` and `const` are block-scoped and not hoisted to window:

`Scope`
----------
Scope means where we can access a specific variable or function in our code  
The lexical environment of Global execution context will point to null , because there is no parent for it anymore.

`Scope chain`
-------------
The scope chain is the series of lexical environments used to resolve variable identifiers. When a variable is not found in the current (local) scope, the JavaScript engine looks up the outer (parent) lexical environments one by one, forming a chain — until it finds the variable or reaches the global scope.

`Block scope`
-----------------
{ from this to } is a block is used for grouping together the statements , it is also known as compund statement

it is used when javascript expect a single statement to run

if let and const are inside a block , then let and const are stored in separate memory space that is called block

let and const are block scoped and those are not accessed from outside

After executing the block in the program , the block scope will remove from the memory so thats why the let and const are not accessible from outside
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
```
`Global Scope`
---------------
Variables declared outside any function or block have global scope and can be accessed throughout the entire program.

`Local Scope`
-------------
Variables declared inside a function or block have local scope and are accessible only within that function or block.

`Function Scope`
-----------------
Each function creates its own scope, and variables declared inside that function are not accessible outside of it.

`Lexical scope`
------------------
Lexical environment is the local memory + reference to the lexical environment of parent

`Outer and Inner Functions`
----------------------------
In lexical scope, inner functions have access to variables declared in their outer (enclosing) functions.

`Benefits`
----------
Lexical scope promotes encapsulation and helps in avoiding naming conflicts, as variables declared in different scopes remain independent.





## `Function` ##
==================
`Function statement` / `Function declaration`
----------------------------------------------
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

`Anonymous function`
---------------------
```js
function (){ }
```
This will cause a syntax error by using an anonymous function we need to assign it to a vaiable. The anonymous function is used as a value.
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
Which is nothing but a normal function statement is assinged to a variable

But we cant invoke the function using xyz() like this in outside , it will cause an reference error

So the function name xyz() is acting as a varibale of that function it is used to call that function inside that function itself

`Functional programming`
-------------------------
Functional programming is a programming paradigm where we build software by composing and applying pure functions, avoiding changing state and mutable data.

`Higher order function`
------------------------
A function that takes one or more functions as arguments or returns a function as a result. It enables functional programming concepts like mapping, filtering, and reducing.

`IIFE`
------
Immediately Invoked Function Expression, is a JavaScript function that is defined and executed immediately after its creation. It is a common pattern used to create a new scope for variables to avoid polluting the global scope and to encapsulate code.
```js
(function(x){code})()
(() => {console.log("IIFE arrow function");})()
```
It creates a new scope , avoid polluting global scope

Uses are :- Encapsulation , Data privacy , Avoiding Hoisting Issues , Creating modules, avoid global scope pollution

Inside an Immediately Invoked Function Expression (IIFE) in `non-strict mode`:
1. In a browser environment, `this` keyword refers to the global object, which is window.
2. In Node.js, `this` keyword refers to the global object, which is global.

If the IIFE is running in `strict mode` ('use strict';), the value of `this` keyword refers to `undefined`.

`Wrapping the anonyms function in parentheses () makes it an expression rather than a declaration.`
Only function expressions can be invoked immediately, making the use of parentheses crucial for IIFE syntax.

`Generator function`
---------------------
Generators are a type of iterable in JavaScript that allow pausing and resuming the execution of a function. They are defined using the function* syntax, and they use the yield keyword to produce values one at a time. A generator function returns an iterator which can be used to traverse the yielded values.

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
Default parameters in JavaScript allow us to assign default values to function parameters. If a parameter is not provided when the function invokation, the default value will be used.

`Contructor or constructor function`
---------------------------------------
- A constructor is usually a regular function that is invoked with new keyword.
```js
function Dog(name) {
  this.name = name;
}
```
- By convention, constructor function names are written in PascalCase (capitalized).
- When you call a function with new keyword:
  - A new empty object {} is created.
  - `this` keyword inside the constructor is set to that new object.
  - Properties/methods are added to the object.
  - The new object is returned automatically (unless you explicitly return another object).
- With `new` keyword → acts as a constructor and creates an object.
- Without `new` keyword → acts as a normal function
- If you don’t return anything → the new object (this) is returned by default.
- If you return a primitive value → it’s ignored, and the object is returned.
- If you return an object → that object replaces this.
```js
function Test() {
  this.val = 10;
  return { override: true };
}
console.log(new Test()); // { override: true }
```
- Methods should be added to the constructor’s prototype to avoid duplication across instances.
```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function() {
  console.log("Hi " + this.name);
};

const p1 = new Person("Alice");
const p2 = new Person("Bob");

p1.sayHi(); // Hi Alice
p2.sayHi(); // Hi Bob
```
- ES6 class is just a cleaner way to write constructor functions + prototypes.
```js
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(`Hi, ${this.name}`);
  }
}

const p1 = new Person("Alice");
p1.sayHi(); // Hi, Alice
```
- instanceof operator Used to check if an object was created by a constructor.
- Static methods defined on the constructor itself (not on its prototype).
```js
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}
console.log(MathUtil.add(2, 3)); // 5
```
- Arrow functions cannot be used as constructors
  `Why arrow functions cannot be constructors`

    1. No [[Construct]] internal method
   - Regular functions (declared with function) have two internal methods:
     [[Call]] → lets them be invoked normally (fn()).
     [[Construct]] → lets them be called with new.
   - Arrow functions only have [[Call]], not [[Construct]].
   👉 That’s why new (() => {}) throws a TypeError.

    2. No prototype property
      - Regular functions used as constructors have a prototype object,
        where methods are shared between instances.
      - Arrow functions do not have a prototype property.
      👉 So they cannot create instances with shared methods.

    3. Lexical this binding
      - Arrow functions do not have their own this.
      - They inherit this from their surrounding scope.
      👉 This makes them unsuitable for object initialization,
          where each new instance should have its own this.

`type of constructor`
Default constructor 
Parameterized constructor
Constructor in ES6 class syntax

`Difference between Arrow function and Regular function`
---------------------------------------------------------
- Arrow function shorter and cleaner. Regular function longer.
```js
const add = (a, b) => a + b;

function add(a, b) {
  return a + b;
}
```
- this binding
  - Arrow function does not have its own this. It lexically inherits this from the surrounding scope.
  - Regular function this depends on how the function is called.

    Non–strict mode (default)
    In the browser → this refers to the global object, which is window.
    In Node.js → this refers to the global object, which is global.

    Strict mode ('use strict')
    `Undefined`
```js
const obj = {
  value: 10,
  regular: function () {
    console.log(this.value); // 10
  },
  arrow: () => {
    console.log(this.value); // undefined (or from outer scope)
  }
};

obj.regular();
obj.arrow();
```
- arguments object
  - Arrow function has no `arguments` object.
  - Regular function: gets its own `arguments` object.
```js
function regularFn(a, b) {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }
}
regularFn(1, 2, 3);

const arrowFn = (a, b) => {
  console.log(arguments); // ❌ ReferenceError
};
arrowFn(1, 2, 3);
```
- new keyword (constructor usage)
  - Arrow function: ❌ Cannot be used as constructors (new ArrowFn() throws error).
  - Regular function: ✅ Can be used as constructors.
- Prototype
  - Arrow function: does not have a prototype property.
  - Regular function: has a prototype property.
- super and new.target
  - Arrow function: inherits super and new.target from enclosing scope.
  - Regular function: defines its own.
- Hoisting
  - Regular function declarations are hoisted (you can call them before definition).
  - Arrow functions (when assigned to variables) are not hoisted — they behave like variables



## `JavaScript Object` ##
===========================
A JavaScript Object is a data structure in JavaScript that stores data in the form of key-value pairs. It is versatile and dynamic, allowing for the representation of both simple and complex data structures.
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
JSON cannot contain methods or undefined values
```js
{
    "greet": () => "Hello!" // Invalid in JSON
    "name" : undefined // Invalid in JSON
}
```
`Static and Read-Only Format`
---------------------------------
Once JSON is parsed into an object in JavaScript, it can be manipulated. Otherwise, JSON itself is static.





## `Prototype` ##
==================
In JavaScript, prototype refers to an internal property of an object that allows the object to inherit properties and methods from another object. 

Every object in JavaScript has a prototype (except for null, which has no prototype).

Whatever we create in the program like varibale or function or object, the js engine will automatically attach an object to the user created objects, user created objects means, everything like the varibales, functions or objects, so the attaching objects is `__proto__`, and this attachment is giving the power of prototype calling with the objects created by the user with `.`

`Prototype Chain`
------------------
The prototype chain is a series of objects linked together by their prototypes.

When we try to use a property or method on an object:
JavaScript first looks inside the object itself.
If it doesn’t find it, it looks in the object’s prototype.
If it’s still not found, it keeps looking up the chain of prototypes.
This continues until it finds it or reaches the end of the chain, which is null.

for example if we take an arr as an array then :
arr.__proto__     is an object
arr.__proto__.__proto__      is an object.prototype
arr.__proto__.__proto__.__proto__      is an  object.prototype.prototype == null





## `Closure` ##
================
When a function "remembers" the variables and function (basically anything in the outer function) from its lexical scope, even after the outer function has finished execution.

it is because the function is binded with its local memory and the lexical environment of its parents memory

`Function bind together with its lexical environment creates a closure`
```js
function one {
  var a = 10;
  return function two () {
    console.log("a : ",a);
  }
}

const result = one();
console.log("result : ", result());
```

`Uses`
------
Encapsulation
Information hiding
Private variables and functions
Currying
memoization
callbacks
Functions like once
maintaining state in asynchronous code
setTimeouts
Iterators
event handler

`Closure disadvantages`
------------------------------
Memory leaks
Debugging complexity
Performance issue
unexpected behaviour in loops





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
In the sweep phase, the garbage collector scans the entire heap and deallocates (frees up) memory occupied by objects that were not marked. These are considered as garbage and are candidates for removal.

`Memory Reclamation`
After the sweep phase, the memory occupied by the unreferenced objects are reclaimed and made available for future use.





## `Hoisting` ##
==================
Hoisting is JavaScript's default behavior of moving declarations (not initializations) to the top of their scope — before code execution.

`Temporal Dead Zone` (TDZ)
---------------------------
The Temporal Dead Zone (TDZ) is the time between the creation of a let or const variable in memory and its actual initialization in the code.
The time from the hoisting to the time when the let or const get assinged or initialized

Whenever we are accessing a variable in Temporal Dead Zone it gives us the Reference error

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
In the execution context in the first phase the function get its whole code thats why it is accessible before the function definition

Function declarations are fully hoisted, meaning they are moved to the top of their containing scope and can be called before their declaration.
```js
sample()  //Midhun
function sample(){
    console.log("Midhun");
}
```
In the execution context in the first phase the arrow function is allocated with the placeholder undefined , that's why it is showing  
`the function name is not a function`
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
1 . in global scope the `this` keyword is “window”

2 . inside a normal function the `this` keyword is undefined in strict mode and window in non strict mode

	2 . 1 . this is because the this substitution or if the value of this keyword is  undefined or null this keyword will be replaced by javascipt with global object only in non strict mode

	2 . 2. if the normal  function is calling alone it is undefined  // x()  = undefined

	2 . 3 . if the normal function is calling along with an object the result will be that object  // window.x()  = window

3 . Inside an object method the this keyword is result in that object

`Function Context`
-------------------
Inside a function, the value of `this` depends on how the function is invoked.
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

`Event Handlers`
-----------------
In event handlers, `this` typically refers to the element that triggered the event.
<button onclick="console.log(this)">Click me</button>

`Arrow Functions`
------------------
Arrow functions do not have their own `this`.
They use `lexical` this — meaning they take this from the scope in which they were defined, not from where they are called.

obj.arrow() →
- in browser
  - Arrow functions don’t have their own this.
  - They use this from where they were created (the outer scope).
  - Since obj is created in the top-level browser scope,
  → this = window (or undefined in strict mode / ES modules).
- in node js
  - In Node.js top-level, `this` is {} (empty object in CommonJS) or undefined (in ES modules).

obj.normal() →
- browser and nodejs
  - Normal functions bind this to the caller.
  - → Caller is obj, so this = obj.





## `Function methods` or `context changing methods` or `function binding methods`
==================================================================================
The three functions call(), apply(), and bind() are often referred to as "function methods" or "context-changing methods" in JavaScript. They are methods provided by the Function prototype in JavaScript and are used for manipulating the this value in functions.

`Call()`   
---------
`function borrowing`
The call method is used to invoke a function immediately with a specified this context and arguments passed individually seperated by commas.

`Apply()`
----------
The apply method is similar to call, but arguments are passed as a single array or an array-like object.

`Bind()`
--------
The bind method is similar to the call method it does not immediately invoke the function. Instead, it returns a new copy of the function with `this` permanently bound to the object we pass. we can optionally pass arguments, just like call().





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

`padStart / padEnd`
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

`join`
----------
The join() method creates a string by concatenating all elements of an array, separated by whatever separator you give it.
```js
const arr = ["Hello", "World", "!"];
console.log(arr.join());        // "Hello,World,!"
console.log(arr.join(" "));     // "Hello World !"
console.log(arr.join("-"));     // "Hello-World-!"
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
Extracts characters between start and end index (excluding end index).
If start > end, it swaps the values of the index.
Negative values are treated as 0.
```js
var str = "Midhun k paniker"
console.log(str.substring(9,13)) // pani  here end indices is ignored
```

`substr`
---------
Extracts characters starting from start, for the given length.
start can be negative, which counts from the end.
Deprecated but still works in most environments.
```js
var str4 = "Midhun k paniker"
console.log("Substr :",str4.substr(3,10))
```





## `Array methods` ##
=======================
`Map`
-----
The map() method is a built-in method in JavaScript that allows we to apply a function to each element of an array and return a new array with the results.
```js
let newArray = array.map(function(currentValue, currentIndex, array) { });
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
The reduce is used to reduce the elements of an array to a single value. It iterates over each element of the array from left to right, applying a callback function, and accumulates a result. The result could be of any type.

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
},0)

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
let result = array.find(function(currentValue, currentIndex, array) { });
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
used to sort the elements of an array. By default, it sorts the elements as strings in ascending order. However, we can provide a compare function to determine the sorting order based on numeric or custom criteria.
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
array.forEach(function(currentValue, currentIndex, array) {});
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
That removes the first element from an array and returns that element. It also shifts all remaining elements to a lower index, effectively reducing the length of the array by 1. If the array is empty, shift() returns undefined. The shift() method modifies the original array.

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
That adds one or more elements to the beginning of an array. It modifies the original array and returns the new length of the array.
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
That returns a portion of an array. It does not modify the original array but instead creates a new array containing the elements from the specified start index to the specified end index (excluding the end index).
```js
var newArray = array.slice(startIndex, endIndex);
```
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
That splice method is used for adding or removing elements from an array. It directly modifies the original array and returns an array containing the removed elements.
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

21. `flat()`
============
flat method is used to flattern an array, we need to specify the level of the flattering 
```js
let arr = [1,2,[3,4],[5,6,7]];
const result1 = arr.flat(2);
const result2 = arr.flat(Infinity);
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
We cant add or delete a new key value to or from the object but we can modify the existing properties
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

9. `Object.Create(object)`
==========================
It allows you to create an object and directly set its prototype, instead of using a constructor function or class.
```js
Object.create(proto, propertiesObject?)
```
proto → The object that should be the prototype of the new object.
propertiesObject (optional) → Additional properties for the new object (same format as Object.defineProperties).





## `Proxy Object` ##
====================
- A Proxy is an object that wraps another object and allows us to intercept and customize operations on that object, such as:
reading (get)
writing (set)
function calls
property deletion
enumeration, etc.

Vue.js 3’s reactivity is built entirely on Proxies.

- Target - The object that we are passing to the proxy
- Trap - Handler functions (get, set, deleteProperty, ownKeys, has, defineProperty, getOwnPropertyDescriptions)
- Handler - Defined which operations can be intercepted and redefined,
  here:- 
    get(target, key);
    set(target, key, value);
```js
const user = { name: "Alice", age: 25 };

const proxyUser = new Proxy(user, {
  get(target, key) {
    console.log(`Accessed: ${key}`);
    return target[key];
  },
  set(target, key, value) {
    console.log(`Updated: ${key} → ${value}`);
    target[key] = value;
    return true;
  }
});

console.log(proxyUser.name);   // Logs: Accessed: name
proxyUser.age = 26;            // Logs: Updated: age → 26
```
`Benefits`
--------------
- Logging / debugging — know when a property is read or written.
- Validation — check values before assignment.
- Reactivity — frameworks like Vue 3 use Proxy to auto-update the UI when a property changes.
- Virtual properties — you can generate values on-the-fly, without storing them.
- Access control — hide or restrict certain properties.





## `Shallow copy` ##
========================
A shallow copy means we copy only the outer layer of an object. If the object has other objects inside it (nested objects), those are not fully copied. Instead, the shallow copy just points to the same nested object of the original object.

 - if we change something inside the nested object, it will also change in the original because both are sharing the same inner object.

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
A callback in JavaScript is a function that is passed as an argument to another function and is executed after the completion of a specific task. Callbacks are a crucial concept in asynchronous programming, allowing us to control the flow of the program and handle asynchronous operations such as fetching data, processing events, or performing I/O operations.

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
Use promises or async await





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

`What if the time is 0 seconds`
------------------------------
- When the delay for setTimeout or setInterval is set to 0 seconds, the callback function is not executed immediately. Instead
- The setTimeout is registered with the Web API (provided by the browser).
- The browser offloads the timer task and waits for the specified delay (0 seconds in this case).
- Meanwhile, the JavaScript engine (V8) continues executing the synchronous code.
Once the call stack is empty (all synchronous tasks have finished), the browser’s event loop moves the setTimeout callback from the task queue (macrotask queue) to the call stack for execution.





## `Currying` ##
======================
Currying is a functional programming technique in which a function is transformed into a sequence of partially applied functions, each taking a single argument. The result is a chain of functions until the final function in the chain produces the desired result.
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
- A Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. 
- It allows us to write more readable and manageable asynchronous code compared to traditional callback-based approaches.

`parameters`
resolve: a function we call when the async task succeeds
reject: a function we call when the async task fails

`states`
Pending: The initial state; the promise is neither resolved nor rejected.
Resolved: The operation completed successfully, and the promise has a resulting value.
Rejected: The operation failed, and the promise has a reason for the failure.

It returns a Promise object. we can use :
.then() — to handle success
.catch() — to handle error
.finally() — to run after either success or failure

Or use async await with try catch blocks

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
- Readability
- Error Handling
- Promise chaining
- State Management

`Promise chaining`
-------------------
Promise chaining in JavaScript is a technique where we chain multiple asynchronous operations using promises to make the code more readable and maintainable. Each .then() or .catch() block returns a new promise

`Promise.all`
--------------
- Promise.all() takes an iterable (usually an array) of promises 
- If all the input promises resolve, returns a single promise
- That single Promise resolves to an array of results (in the same order input promise).
- Rejects immediately with reason, if any one of the input promises is rejected.
- Other promises continue running, but their results are ignored.

`Promise.allSettled`
---------------------
- Promise.allSettled() takes an iterable (usually an array) of promises 
- But it doesn't short-circuit when one of the promises is rejected. 
- Instead, it waits for all promises to settle (either fulfill or reject) 
- And then returns an array of objects, each representing the outcome of the corresponding promise with status and value.

`Promise.race`
----------------
- Promise.race() takes an iterable (usually an array) of promises 
- Immediately returns a new promise if any one of the promise settles (fulfills or rejects)
- Regardless of whether the other promises have settled.

 Uses are -: Timeout , race conditions , Load balancing , Parallel request , Real time updates

 `Promise.any(iterable)`
-------------------------
- Promise.any() takes an iterable (usually an array) of promises 
- Immediately returns a single promise that Resolves as soon as the any input promise resolves.
- Rejects only if all promises are rejected, and it throws an AggregateError containing all rejection reasons.

`Then`
--------
The then method is used to handle the fulfillment of a promise.
The then() method has two optional parameters:
```js
promise.then(onFulfilled, onRejected)
```
onFulfilled → called if the promise is resolved.
onRejected → called if the promise is rejected.

`Finally`
-----------
The finally method is used to execute something after the settling of a promise. This function will be executed regardless of the promise's outcome.

`Catch`
---------
The catch method is a shorthand for handling only the rejection of a promise. It is equivalent to using then(undefined, onRejected).





## `Async Await` ##
=======================
async and await are keywords in JavaScript that simplify handling the asynchronous code, making it more readable and easier to work with. The async keyword is used to define an asynchronous function, and the await keyword is used to wait for a promise to settle inside that function.





## `Observable` ##
====================
An Observable is a design pattern in JavaScript used to manage asynchronous data streams. Observables can emit multiple values over time, and subscribers can react to each emitted value.





## `DOM` (Document Object Model)
=================================
- Represents the **HTML document structure** as a tree of objects.
- Each HTML element (like <div>, <p>, <img>) is a **node** in this tree.
- Allows JavaScript to **access, modify, or delete** HTML and CSS content.
- Browser creates the DOM when the page loads.
- Belongs to the document (not the window).
- Part of the **Web API** defined by the W3C.
- Example: document.getElementById(), document.querySelector(), etc.

📘 Example:
-----------
document.title = "New Title";
document.body.style.background = "lightblue";


## `BOM` (Browser Object Model)
=================================
- Represents the **browser environment** outside the webpage content.
- Allows JavaScript to interact with the browser itself.
- Includes objects like **window**, **navigator**, **screen**, **location**, and **history**.
- The `window` object is the **global object** in browsers.
- Not standardized by W3C — implementation may vary between browsers.
- DOM is part of the BOM (`window.document`).

📘 Example:
-----------
window.alert("Hello!");
console.log(window.location.href);
window.history.back();





## `Call stack` ##
=====================
Call stack keeps track of the execution context (or frames) of functions in a program. When a function is called, a new frame is added to the top of the call stack, and when a function is completed, its frame is removed from the stack.

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
- Asynchronous operations like setTimeout, AJAX requests, and event listeners are handled outside the call stack, by the browser or server environment like Node.js.
- When an asynchronous task finishes, its callback function is sent to the callback queue.
- The callback queue holds functions that are waiting to be executed.
- A callback from the queue is moved to the call stack only when the stack is empty — this is managed by the event loop.





## `Event Loop` ##
===================
- The event loop is a crucial part of JavaScript's concurrency model.
- The event loop constantly checks the callback queue for completed asynchronous callback operations.
- If the call stack is empty, the event loop takes the first callback from the queue and pushes it to the call stack for execution.

- The browser’s JavaScript engine like V8 doesn’t have a thread pool like Node.js. Instead, the browser uses Web APIs to handle asynchronous task
- Once the tasks are completed the callback function is stored in the callback queue for the execution
- example apis
  1. Timers API
   - setTimeout()
   - setInterval()
   - clearTimeout(), clearInterval()
  2. DOM Events API
   - addEventListener()
   - click, input, submit, keypress events, etc.
  3. Network / HTTP API
   - XMLHttpRequest (XHR)
   - fetch()
   - WebSockets
  4. Storage APIs
   - localStorage
   - sessionStorage
   - IndexedDB
   - Cache API
  5.  Worker APIs
   - Web Workers
   - Service Workers
  6.  History & Navigation
    - window.history
    - window.location





## `Operators` ##
===================
`Destructuring`
---------------------
Destructuring in JavaScript is a feature that allows us to unpack values from arrays or properties from objects into distinct variables. It simplifies extracting data from complex structures.
```js
const obj = {
  name: "a",
  place: "b"
};
const { name, place } = obj;

console.log(name);  // "a"
console.log(place); // "b"
```

`Ternary Operator`
--------------------
The ternary operator, also known as the conditional operator, is a concise way to write conditional statements in JavaScript. It is a shorthand form of the if...else statement.
```js
const age = 25;
const message = age >= 18 ? 'we are an adult' : 'we are a minor';
console.log(message);
```

`Rest Operator`
----------------
It allows us to collect multiple values to a single argument
```js
const fruits = ['apple', 'banana', 'cherry', 'mango'];

// Destructuring with rest
const [firstFruit, secondFruit, ...restFruits] = fruits;

console.log(firstFruit); // Output: apple
console.log(secondFruit);// Output: banana
console.log(restFruits); // Output: ['cherry', 'mango']
```

`Spread Operator`
------------------
It is used to expand an array, object, or iterable into individual elements or properties.
```js
const nums = [1, 2, 3];

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...nums)); // 6

```

`Arithmetic Operators`
=============================
+ (Addition)
- (Subtraction)
* (Multiplication)
/ (Division)
% (Remainder/Modulus)
** (Exponentiation)
++ (Increment)
-- (Decrement)

`Comparison Operators`
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
The nullish coalescing operator (??) helps us to provide a default value when the left-hand side is null or undefined. It’s like a more precise version of || (logical OR), but it only works with null or undefined, not other "falsy" values like 0, false, or an empty string ('').

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
- Variable shadowing happens when a variable declared within a certain scope 
  (local/block) has the same name as a variable in an outer scope.  
- The inner variable "shadows" (hides) the outer variable within its scope.  
```js
`using var shadowing in function scope`
var name = "Alice";

function greet() {
  var name = "Bob"; // shadows outer 'name'
  console.log(name); // Bob
}

greet();
console.log(name);

`ussing var not really shadowing in normal scope`
var x = 10;

if (true) {
  var x = 20; // overwrites outer x (not really shadowing)
  console.log(x); // 20
}

console.log(x); // 20

`using let shadowing in function scope`
let age = 25;

function showAge() {
  let age = 30; // shadows outer 'age'
  console.log(age); // 30
}

showAge();
console.log(age); // 25 (outer variable unchanged)

`using let and const shadowing in normal block`
let x = 10;
const city = "Kochi";

if (true) {
  let x = 20; // shadows outer x safely
  const city = "Bangalore"; // shadows outer 'city'
  console.log(x); // 20
}

console.log(x); // 10

```

| Keyword | Scope    | Shadowing          | Notes                                         |
| ------- | -------- | ------------------ | --------------------------------------------- |
| `var`   | Function | Yes, but not block | Can accidentally overwrite outer var in block |
| `let`   | Block    | Yes                | Safer shadowing, outer variable safe          |
| `const` | Block    | Yes                | Same as let, but cannot reassign              |






## `Illegal shadowing` ##
===========================
- Illegal shadowing occurs when a variable declared with `let` or `const`
  is shadowed by a `var` in the same or inner scope.  
- This happens because `var` is function-scoped and `let`/`const` are block-scoped,
  which creates a conflict.  
  - whenever a block scpoed varibale is again declared with function scope
```js
let x = 10;

{
  var x = 20;  // ❌ Illegal shadowing
  console.log(x);
}
// SyntaxError: Identifier 'x' has already been declared
```





## `Classes` ##
=====================
Classes in JavaScript provide a more structured and intuitive way to work with object-oriented programming concepts.
Classes are the cleaner way to create constructor function and prototype

`Static methods`
-----------------
Static methods are methods that are called on the class itself, rather than on instances of the class.
Belong to the class itself, not to the instances.
we cannot call them using an instance like `instance.method()`.
we must call them using the class name, like `classname.method()`.

`Super keyword`
----------------
In a derived class constructor, super() keyword is used to call the constructor of the parent class. This is necessary when the child class has its own constructor, and we want to ensure that the initialization code in the parent class's constructor is also executed.

it is used inside the child class's constructor
it is also used in the child class's method to invoke the parent class method

`super.parentclassmethodname()`

super is not allowed to be used outside of a derived class.
When using super in a method, it must be used before this is used in the method.

`Encapsulation`
---------------
Encapsulation means combining or bundling data variables and methods into one unit, such as a class or object. It also hides unnecessary details and only shows the important parts, making the object easier to use and safer.

`Abstraction`
-----------------
Abstraction is the process of hiding the complex reality and showing only the necessary parts of an object or function. It helps reduce complexity by focusing only on the relevant details and ignoring unnecessary ones. Abstraction is often implemented using classes, functions, or modules.

`Access Modifiers`
--------------------
`Public`
Public members are accessible from anywhere. By default, all properties and methods in a JavaScript class are public.

`Private`
Private members can only be accessed within the class they are defined in. In JavaScript, private fields are denoted with # before the property or method name.

`Protected (Not natively in JavaScript, but can be simulated)`
Protected members are intended to be accessible only within the class and its subclasses. JavaScript does not natively support protected, but it can be simulated by convention (using an underscore _) or by extending the class.

`Static`
Static members belong to the class itself, rather than to instances of the class. Static methods or properties are accessed directly from the class, not by an instance.





## `Iterator` ##
===================
An iterator is an object that provides a standardized way to access the elements or members of a collection (such as an array or an object) one at a time. Iterators allow us to loop through the elements of a collection and perform actions on each element.

the iterator protocol, which consists of two main methods: next and symbol.iterator

The next method return an object with two properties : value and done
value is the current element in the collection
done is the boolean value representing whether the iteration is complete or not

symbol.iterator returns an iterator object for the collection





## `Pass by value` ##
=========================
When a primitive data type (e.g., number, string, boolean) is passed as an argument to a function, a copy of the actual value is passed. Changes made to the argument within the function do not affect the original variable outside the function.
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





## `Microtask Queue` ##
========================
This queue holds microtasks that have higher priority than macrotasks.

Promises (e.g., .then() or .catch())
MutationObserver
queueMicrotask()

Microtasks are executed immediately after the current execution context and before the message queue (macrotasks).





## `Message Queue (Macrotask Queue)` ##
===========================================
This queue holds macrotasks (regular tasks) that are ready to be executed.

setTimeout
setInterval
I/O tasks like network or file operations
Event listeners (clicks, scrolls, etc.)

These tasks are executed after the micro tasks are completed.





## `Tasks` ##
=================
`Micro tasks`
----------------
Microtasks are tasks with higher priority that are executed asynchronously as soon as the current execution context is emptied and before the event loop advances to the next macrotask.
promises , Mutation obeserver , callbacks

`Macro tasks`
--------------
Macrotasks are tasks with lower priority that are executed asynchronously after the microtask queue has been emptied.
setTimeout , setInterval , eventListener , i/o operations





## `Coercion & Convertion OR Type Casring` ##
=================================
`Implicit coercion`
--------------------
Implicit coercion occurs automatically when the JavaScript engine converts values from one type to another during an operation, attempting to make sense of the context without explicit instructions from the programmer.

`Explicit conversion`
----------------------
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

`Cookies`
--------------
A cookie is a small piece of data (usually a key-value pair) stored on the user's browser by a website to remember information about the user across sessions or page loads.

`Persistance`
Without an expiration date, the cookie is deleted when the browser is closed.
With an expiration date, cookies can persist for days, months, or even years.

`Scope`
Cookies are sent to the server with every HTTP request, which makes them useful for server-side session tracking.
They are accessible within the same domain (and optionally specific paths within the domain).
Can be made inaccessible to JavaScript (using the HttpOnly flag).

`Storage Limit`
Each cookie is limited to around 4 KB in size.
Browsers typically allow about 20 cookies per domain.

`Expires`
Set using the expires or max-age attribute.
If no expiration is set, cookies are deleted when the browser is closed (session cookie).

`Use Cases`
Storing authentication tokens, user preferences, tracking IDs, and small bits of information that need to be sent to the server.
Useful for both client-side and server-side operations.

```js
res.cookie('token', 'abc123', {
    maxAge: 3600000,    // 1 hour in milliseconds
    httpOnly: true,     // can't access in frontend JS
    secure: true,       // only sent over HTTPS
    sameSite: 'strict'  // CSRF protection
});
```
SameSite: Strict → only works if frontend & backend are on exactly the same site.
SameSite: Lax → works for most normal navigation, but not AJAX cross-site.
SameSite: None → needed for different domains (e.g. frontend.com → api.com).





## `Modules` ##
================
In JavaScript, modules are a way to organize code into separate files, making it more maintainable, reusable, and easier to manage. Modules help break down a large codebase into smaller, more manageable pieces, and they provide a mechanism for encapsulation and abstraction.

for exporting :- export const add = (a,b) => a+b;
for importing :- import {add} from "./filename"

## `Types of modules in Javascript`
--------------------------------------
1. `ES6 Modules`
-------------------
Introduced in ES6 (2015) and now standard in modern browsers and Node.js.
Uses import and export.
Supports tree-shaking (removes unused code in bundlers like Webpack).
Modules are lexically scoped.
Strict mode is always enabled.
```js
// math.js
export function add(a, b) { return a + b; }

// main.js
import { add } from './math.js';
```

2. `CommonJS Modules CJS`
--------------------------
Primary format used in Node.js (especially before v13).
Uses require() method to import and module.exports to export.
Synchronous loading (not suitable for browser without bundlers).
```js
// math.js
module.exports = {
  add: (a, b) => a + b
};

// main.js
const math = require('./math');
```

3. `UMD Modules -> Universal Module Definition`
-----------------------------------------------
Designed to work in all environments.
Useful for publishing libraries that work everywhere.

4. `AMD Modules -> Asynchronous Module Definition`
--------------------------------------------------------
Used in browsers to load modules asynchronously.
Common in older apps with RequireJS.
Largely replaced by ES6 Modules.

5. `SystemJS Modules -> (Meta/Loader Polyfill) ❄️ (Rarely Used Today)`
------------------------------------------------------------------------------
A dynamic module loader that supports ES6, AMD, CommonJS.
Used in advanced scenarios or when combining multiple module systems.





## `Event deligation` ##
=========================
Event delegation is a JavaScript programming pattern where a single event listener is attached to a common ancestor element of multiple child elements. Instead of attaching individual event listeners to each child element, we delegate the responsibility of handling events to a higher-level ancestor. When an event occurs on a child element, it bubbles up to the ancestor where a single event listener can respond to it.





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
use strict is a directive in JavaScript that enforces a stricter set of rules on our code. It helps us to write cleaner and less error-prone code by catching common mistakes and preventing the use of unsafe features.
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
The JSON.parse() method is used to parse a JSON string and convert it into a JavaScript object.

`Json stringify`
------------------
The JSON.stringify() method is used to convert a JavaScript object into a JSON-formatted string. It takes an object as its first argument and an optional replacer function and space parameter.

`value`: The JavaScript value (usually an object or array) to convert.

`replacer` (optional):
Can be a function or an array.
If it is a function, it's called for each key-value pair and can modify or filter values.
If it is an array, it specifies a list of properties to include in the JSON string.

`space` (optional):
Adds indentation, white space, and line breaks to the output string for readability.
Can be a number (number of spaces) or a string (e.g., '\t' for tabs).

```js
JSON.stringify(value, replacer, space);

// jus using the replacer array
const obj = { name: "Midhun", age: 20, place: "Ktpm" };
const json = JSON.stringify(obj, ["name", "place"]);
console.log(json); // '{"name":"Midhun","place":"Ktpm"}'

// using both replacer and space
const user = {
  name: "Midhun",
  age: 20,
  password: "secret",
  place: "Ktpm"
};

// Replacer function: exclude "password"
const replacer = (key, value) => {
  if (key === "password") return undefined;
  return value;
};

// Space: indent with 4 spaces
const jsonString = JSON.stringify(user, replacer, 4);

console.log(jsonString);
```

`break`
--------
The break statement is used to exit from a loop or a switch statement immediately, regardless of whether the loop condition is still true or not.

`continue`
----------
The continue statement is used to skip the current iteration of a loop and proceed with the next iteration.





## `Exceptions` ##
=====================
An exception is an error that occurs during the execution of a program and disrupts the normal flow of the code.

`Types of Errors in JavaScript:`

`Syntax Error` – Mistakes in the structure of the code
E.g.: Missing parentheses, unexpected tokens

`Runtime Error (Exception)` – Errors that occur during code execution
E.g.: Accessing undefined variables, null references

`Logical Error` – Code runs, but gives incorrect output (not technically an exception)

`How to Handle Exceptions`
JavaScript provides try...catch...finally blocks to handle exceptions.
```js
try {
  // Code that might throw an error
} catch (error) {
  // Code that runs if there’s an error
} finally {
  // Optional: runs always, error or not
}
```
`When an exception is thrown`, JavaScript creates an Error object containing:
  name (type of error)
  message (details of the error)
  stack (where the error is occurred)
`we can create and throw custom errors using the throw keyword.`





## `typeof vs instanceof` ##
===============================
`typeof`
typeof returns a string indicating the type of a given operand.
It works best for primitive types and functions.

`instanceof`
It is used to check wether the object is an instance of the specific constructor function or class
```js
object instanceof ConstructorFunction;

function Person(name) {
  this.name = name;
}
const user = new Person("Midhun");

console.log(user instanceof Person); // true
console.log(user instanceof Object); // true
```





## `jwt` ##
=============
- JWT (JSON Web Token) is an open standard (RFC 7519) used to securely transmit information between client and server as a JSON object.
- This information can be verified and trusted because it's digitally signed.
- Size of the data is maximum 8kb, Recommended 1kb to 3kb
- JWTs are commonly used for authentication and authorization in web applications.

`JWT Structure`
xxxxx.yyyyy.zzzzz
 ↑      ↑      ↑
Header Payload Signature

1. `Header`
The header typically consists of two parts
```js
{
  "alg": "HS256",       // algorithm used (e.g., HMAC SHA256)
  "typ": "JWT"          // token type
}
```
2. `Payload`
The payload contains the actual data or claims. Claims are statements about an entity (usually the user) and additional metadata.
```js
{
  "sub": "1234567890",  // Id
  "name": "Midhun",
  "role": "admin",
  "iat": 1717000000,  // issued at (timestamp)
  "exp": 1717003600  // expires at (timestamp)
}
```
3. `Signature`
This part is used to verify that the token was not changed.
If the token is modified, the signature won't match, and the token will be rejected.
```js
HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)
```

## Examples ##

`JWT Sign`
```js
const jwt = require('jsonwebtoken');

const payload = { userId: 123 };
const secret = 'werSecretKey';
const token = jwt.sign(payload, secret, { expiresIn: '1h' });

console.log("Token:", token);
```

```js
try {
  const decoded = jwt.verify(token, secret);
  console.log("Decoded Payload:", decoded);
} catch (err) {
  console.error("Invalid token:", err.message);
}
```





## `Prototype Pollution`
========================
Prototype pollution happens when an attacker modifies the prototype of built-in objects like Object.prototype, affecting all objects in the app.
It usually occurs in:
- Insecure merge or extend logic
- Unsafe JSON.parse() usage
Always validate object keys before merging.
Avoid setting properties from untrusted sources directly on objects.
Use libraries with prototype pollution protection.
```js
const malicious = JSON.parse('{"__proto__": {"isAdmin": true}}');
console.log({}.isAdmin); // true — because Object.prototype was polluted
```