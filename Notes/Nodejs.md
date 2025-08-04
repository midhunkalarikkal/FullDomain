# `Node.js`
================
- Node.js is a `cross-platform`, `open-source` JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. 
- Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside of a web browser.

installing using `nvm` is a node version manager

Node.js is embedded with the V8 JavaScript engine, which powers its ability to execute JavaScript outside of a browser. Additionally, Node.js provides "superpowers" such as APIs for server-side functionality and modules for better code organization and Event loops manages asynchronous tasks by coordinating execution of code. These features make Node.js highly suitable for building servers. This combination is referred to as the `JavaScript runtime`.

A `JavaScript runtime` is an environment that provides all the necessary components to execute JavaScript code outside of a web browser

Developer Ryan Dahl created Node.js in 2009. Joyent, a technology company, supported Ryan Dahl in the development of Node.js.

Initially, the project was named "WebJS" because Ryan believed he was creating it primarily for building web servers. However, he later realized that it could be used for much more than just web servers, so he renamed it to Node.js to reflect its broader capabilities.

At the time, most servers were blocking in nature, which led Ryan to start developing Node.js as a non-blocking, event-driven runtime to handle asynchronous operations efficiently.

So node.js is single threaded by default when there is only synchrnous code, but it is multi threaded when it have asynchrnous code because it will use libuv to run the asynchronous code and then libuv will use thread pool.

2009
------
Ryan Dahl developed Node.js, a cross-platform, open-source JavaScript runtime environment built on the V8 JavaScript engine.
Initially called WebJS because Ryan thought it would primarily be used for building web servers. Later, he realized its potential for broader use cases and renamed it Node.js.
Initally the nodejs is built for mac and linux then in 2011 they got support for windows

2010
-------
The npm package manager was introduced, making it easier to share and manage JavaScript packages.

2011
-----
Node.js added support for Windows. Until then, it primarily worked on macOS and Linux.

2012
-------
Ryan Dahl stepped down from the project.
Isaac Z. Schlueter, the creator of npm, took over the leadership of Node.js development under the company Joyent, which was supporting Node.js.

2014
-----
A developer named Fedor Indutny forked Node.js to create io.js, citing dissatisfaction with Joyent's governance model.
io.js aimed for more open governance and rapid feature development.

2015
-----
Node.js and io.js merged to unify the community under the Node.js Foundation.

2019
-------
The JS Foundation and the Node.js Foundation merged to form the OpenJS Foundation, which now governs Node.js along with other JavaScript-related projects.

2009 nodejs ----------> 2010 npm -----------> 2011 windows support -----------> 2012 isac took over -----> 2014 fedor forked --------> 2015  node.js and io.js merged ------------> 2019  openjs foundation took controll of node.js




## `Chrome v8 javascript engine`
===================================
V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js. It implements `ECMAScript` and `WebAssembly`, and runs on Windows, macOS, and Linux systems, `V8 can be embedded into any C++ application`.

`Whereever is javascript there is js engine`
v8 for chrome
spider monkey for firefox
chakra for edge

js code ---->  c++ code ------> assembly code --------> machine code ---------> binary

Steps inside the v8 engine
---------------------------
1. `Parsing`
  1. 1. `Lexical analysis or tokenization`
  In this step the `code` is converted in to `Tokens`, so the js engine is reading the code token by token

  1. 2. `Syntax analysis`
  The tokens then converted in to Abstract syntax tree `AST`
  `When we get a syntax error It means that our code cant create a proper abstract syntax tree`

2. `Interpreter`
  In v8 engine the interpreter is called `ignition interpreter` and the AST is passed to this interpreter and then converted to byte code.

3. So if there are codes that repeats like `HOT code` it will be passed to the compiler in the v8 engine called `Turbo fan compiler` and then it will optimize the hot code in to optimized machine code then it will be executed. In old days there were a compiler called `crank shaft` and it was deprecated.

`The whole process of interpreter and compiler is called Just in time compiler`

Javascript is neighther a interpreter language nor compiler language, but it uses both of them inside v8 engine.

## `JIT (Just in time)`
============================
Just-In-Time (JIT) Compilation: JavaScript is traditionally an interpreted language, meaning code is executed directly without a compilation step. However, modern JavaScript engines like V8 use JIT compilation to improve performance.

`Ignition` interpreter and `turbofan` compiler

JIT Compilation means that V8 doesn't compile the entire code upfront. Instead, it compiles JavaScript code just in time — as it runs. It first runs the code and collects runtime data. If it detects that certain parts of the code are used frequently, it compiles those parts into machine code for faster execution.

`deoptimization`
----------------
However, there are cases where the optimized machine code becomes invalid. This can happen if the assumptions made during optimization are violated. For instance, if a function is optimized for adding two numbers (e.g., integers) and later encounters inputs that are strings or characters, the optimized code might no longer be valid.

When such a mismatch occurs, de-optimization happens. The V8 engine discards the optimized hot code and falls back to the original bytecode, which is executed by the Ignition Interpreter. The engine can then adapt to the new input type, ensuring correct execution while trading off some performance.


## `Core Components of Node.js Architecture`
=====================================================
`Single Thread`
Node.js uses a single main thread for processing requests.
This is different from multi-threaded architectures (like Java or PHP).

`Event Loop`
It’s the heart of Node.js.
It listens for and handles incoming requests (events) asynchronously.

`Event Queue`
Stores the incoming requests (I/O tasks, API calls, etc.) that are waiting to be processed.

`Worker Threads / Thread Pool (via libuv)`
Node.js internally uses a thread pool (4 threads by default via libuv) to handle heavy asynchronous tasks (like file I/O, DNS lookups, cryptographic functions).

`Callback Queue`
Once an operation is done (e.g., file read), its callback is pushed here and eventually executed in the main thread.

`V8 Engine`
Node.js is built on Google Chrome’s V8 engine which compiles JavaScript to machine code.

`libuv`
A C library that provides Node.js the ability to perform asynchronous I/O operations.





## `Design Patterns`
==========================
- Design patterns in Node.js are proven solutions to common software design problems. They are structured approaches to solving challenges in coding, organization, architecture, and maintainability — especially for the larger applications.

They are not specific to Node.js, but many are commonly used within Node.js apps because of its event-driven, asynchronous nature.

`Use Cases`
Makes our code scalable, readable, and reusable
Encourages best practices and standardization
Helps with maintaining, extending, and testing code easily
Reduces bugs and technical debt

`Common Design Patterns `
---------------------------------
1. Module Pattern (most widely used in Node.js)
    Uses require() and module.exports to encapsulate functionality
    Promotes separation of concerns

2. Singleton Pattern
    Ensures only one instance of a class/module exists.

3. Factory Pattern
    Creates objects without exposing the logic to the client.
    Useful when multiple types of objects share a common interface.

4. Observer Pattern
    Used heavily in event-driven apps.
    Node’s EventEmitter is a built-in example.

5. Middleware Pattern (used in Express)
    Chains functions to handle requests/responses
    Each middleware can modify the req, res, or pass control
    




## `Event driven architechture`
===================================
Event-driven architecture (EDA) is a design paradigm in which the flow of a program is determined by events such as user actions, sensor outputs, or messages from other programs. It is commonly used in systems where asynchronous and dynamic responses are needed.





## `Asynchronous i/o` / `Non-blocking i/o` vs ``Synchronous i/o` ##
======================================================================
`Asynchronous` / `Non-blocking i/o`
------------------------------------
Asynchronous I/O (AIO) is a type of input/output processing that allows other tasks to continue while I/O operations run in the background. It’s also known as overlapped I/O and is ideal for optimizing efficiency in long-running tasks like database backups or large data transfers.

Efficient Resource Usage: Overlaps processing with I/O operations.
Reduced Wait Time: Minimizes process or thread waiting.
Immediate Service: Quickly responds to client requests.
Handles High Load: Effectively manages bursty applications.
Scalability: Supports large-scale operations efficiently.
Optimal for Large Data: Best suited for transferring large datasets.

`Synchronous i/o`
------------------
Synchronous I/O is a processing method where I/O operations block the execution of the program until the task is complete. The program waits for the I/O operation (such as reading from a file or querying a database) to finish before proceeding to the next operation.

Simplicity: Easier to implement as the program flow is straightforward.
Data Consistency: Guarantees that data is processed in order.
Debugging: Easier to debug, as there are fewer asynchronous tasks to manage.





## `Server`
==============
A server is a powerful computer or system that provides services, data, or resources to other computers, known as clients, over a network. When a client machine, such as a user's computer or smartphone, makes a request to access a website like google.com, it sends the request to the server. The server is identified by an IP address, for example, 114.126.123.8, which uniquely points to the server machine hosting the website or service. The server processes the client's request and responds with the required data, such as a webpage.





## `ECMA Script`
===================
ECMAScript is a standardized specification for scripting languages, which serves as the foundation for languages like JavaScript, JScript, and ActionScript. It defines the rules, guidelines, and features for scripting languages to ensure consistency and interoperability across different platforms and browsers.





## `WebAssembly`
===================
WebAssembly (Wasm) is a binary instruction format designed for efficient execution on web browsers. It enables high-performance execution of code written in languages like C, C++, Rust, and others, directly in the browser, alongside JavaScript. WebAssembly allows developers to run computationally intensive tasks faster and with lower overhead compared to traditional JavaScript.





## `REPL`
=============
Read, Evaluate, Print, Loop
Quickest way of runnig nodejs code
A REPL is an interactive programming environment that allows users to enter and execute code one line at a time.
type `node` in command line for activate repl





## `global`
==============
One of the superpowers of Node.js is its ability to work seamlessly with the V8 engine, making development faster and more efficient.

In Node.js, the `this` keyword in the global space refers to an empty object.
in a browser, the `this` keyword in the global space points to the window object.
In the browser, the global object can be accessed using multiple keywords:

`window`
`this`
`self` (used in Web Workers)
`frames`

To standardize how the global object is accessed across different runtimes (Node.js, browsers, and Web Workers), the OpenJS Foundation introduced `globalThis` in 2020. This provides a consistent way to reference the global object, regardless of the runtime environment.





## `Module`
==============
In Node.js, each module is wrapped in a function when executed.This is an IIFE function. 

This IIFE function makes the variables and functions private to the scope of the module itself and not accessible from other modules unless explicitly exported.

When a Node.js module is executed, it is wrapped in a function like this internally
```js
(function(exports, require, module, __filename, __dirname) {
  // Your module code here
});
```

`Advantages of This Design`
-----------------------------
Data Privacy: Keeps module internals hidden and secure.
Modularity: Encourages clean, reusable, and maintainable code.
No Global Pollution: Prevents accidental overwriting of global variables or functions.





## `require`
================
Used to include another modules in a module by using the require function and specifying the path inside it

we can access the varibales, functions and methods inside a module in aother module by just using the require function, because the modules are protecting their variables and functions from leaking

the protection will help to reuse the variable and function names in another modules if we need

We need to export the variables and function from a module import it in the another module for using it.

Whenever the require function will call a module it will wrap the module inside an IIFE function and then pass it to the v8 engine.

`Five steps for require('/path') to work`
-----------------------------------------
1. Resolving the module
  The file path is resolved based on the type of require used, such as:
    Local files (./module.js)
    JSON files
    Node.js core modules (e.g., fs, path)
    Modules from node_modules or custom module paths
2. Loading the module
  The file content is loaded based on its type:
    JavaScript files are read and parsed.
    JSON files are parsed into JavaScript objects.
    Native modules are loaded as compiled binaries.
3. Wrap inside IIFE
  This provides module-level scope and access to special variables like exports, module, and __dirname.
4. Code Evaluation
  module.expots happens like returns it
  The wrapped function is executed, and the module.exports object is populated with the module's public properties or methods.
5. Module caching
  The loaded module is cached to improve performance.
  If the module is required again, the cached version is returned instead of re-executing the module code.





## `CommonJs module (cjs)` common js module system
==========================================================
`Older Module System`
Used primarily in Node.js before ES6 modules were introduced.

`Synchronous Loading`
Modules are loaded synchronously, making it suitable for server-side but not ideal for the browser without bundlers.

`Non-strict Mode by Default`
Runs in non-strict mode, so:
We can accidentally declare variables without var, let, or const.

`File Extension Not Required`
When importing, .js extension is optional:
```js
const user = require('./user'); // no .js needed
```

`module.exports Defaults to Empty Object`
module.exports starts as an empty object, and we attach our exports to it:
```js
module.exports.name = 'Midhun';
```

`Default in Node.js`
If no module system is specified in package.json, Node.js treats files as CommonJS by default.
```js
module.exports = sum; // Single export
module.exports = {Sum, Multiply}; // Multiple export

const sum = require('./path'); // Single import
const {Sum, Multiply} = require('./path'); // Multiple import

// importing the whole object
const object = require('./path')  
// Using the exported things
object.Sum
object.Multiply
```




## `ES modules (mjs)` es module system
===============================================
`Newer, Modern Module System`
Introduced in ES6, now widely supported in browsers and Node.js (with configuration).

`Asynchronous Loading`
ES Modules are loaded asynchronously, making them suitable for both client-side and server-side.

`Strict Mode by Default`
All ES Modules run in strict mode, so:
You cannot declare variables without var, let, or const.

`File Extension is Required`
When importing, you must include the .js extension:
```js
import { sum } from './utils.js';
```
`Enable ESM in Node.js`
In Node.js, set the type to module in package.json:
```js
{
  "type" : "module"
}
```

`Exporting in ES Modules`
Named Export – export individual items:
```js
export function sum(a, b) {
  console.log("Sum is:", a + b);
}
```
Default Export – export one main item:
```js
const utils = { sum, multiply };
export default utils;
```

`Importing in ES Modules`
Named Import:
```js
import { sum } from './utils.js';
```
Default Import:
```js
import utils from './utils.js';
```

`Core Difference: Named Export vs Default Export`

| Feature                           | **Named Export**                                           | **Default Export**                                                    |
| --------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------- |
| **Name Binding**                  | Must use **exact same name** as exported                   | Can use **any name** while importing                                  |
| **Number of Exports per File**    | Can export **multiple named items**                        | Only **one default export** per file                                  |
| **Auto-import (in some editors)** | Suggests exact names                                       | May import with a generic name                                        |
| **Use Case**                      | Best when exporting **multiple things** (utils, constants) | Best when exporting **one main thing** (React component, class, etc.) |





## `Coomon file for importing and exporting` ##
====================================================
If we have a folder and inside it have multiple modules and each modules have mutiple exports, we can use an `index.js` file for importing all the modules things in to index.js file and then export all the things from the index.js file

So while importing these things outside of the folder we dont need to use the index.js file name in the path, by default it will take it from the index.js file of the folder

the main advantage of this method is that we can encapsulate the modules and the varibale and the functions so that the module which is importing these things will not need to worry about the location of these things





## `LIBUV` ##
==============
It is a cross platform  open source library written in c , handles asynchronous non blocking  operations in node js using thread pool and event loop

+------------------------------+
|            Node.js           |
|  (libuv + V8 + bindings)     |
+------------------------------+

`Synchronous means`
  JavaScript executes code line by line in the order it appears.
  It does not jump or skip tasks or lines during execution in the main thread.
  Each operation must complete before the next one begins, making it synchronous by default.

`Single threaded means`
  JavaScript uses a single thread from the processor to execute code.
  This single thread is managed by the v8 engine inside the JavaScript runtime environment..
  All tasks (like variable declarations, function calls, etc.) are handled sequentially in this single thread.

`Working synchronous`
------------------------
- js engine has only one call stack
- Everything, even a piece of code is executed inside the call stack

- Inside the heap memory it will keep the variables functions like that things
- Garbage collector will collect the varibales and functions which is not in use furthur. garbage collector is working with heap memory

- Other low level languages like c, c++ we have to handele the garbage collection, but languages like js all these things are put inside v8 engine.

`Working asynchronous`
-----------------------
- So js engine works only in synchronous format, and the node js need to gain access to file, db, web, timers and etc.... and these are controlled by OS itself So here we need a `super power` to make the js engine asynchronous and make access to these things here the `LIBUV` comes 

- So whatever asynchronous task the js engine need to do it will offload those tasks to the LIBUV and the LIBUV will make it possible
- libuv is a cross-platform C library that provides support for asynchronous I/O based on event loops.
- libuv is a dependency inside the nodejs like v8

## Example
===========
```js
const fs = require('fs');
const https = require('https');

var a = 100;
var b = 200;

https.get("https://dummyjson.com/products/1",
  (res) => {
    console.log("fetched data successfully");
  }
)

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
},5000)


fs.readFile("./file.txt","utf8",
  (err, data ) => {
    console.log("File data : ",data);
  }
)

function multiply(a,b){
  const result = a*b;
  return result;
}

var c = multiply(a,b);
console.log(c);
```

`Variables a and b`
The variables a and b, along with their primitive values (100 and 200), are stored in the stack because they are simple, fixed-size data types.

`HTTP Request (https.get)`
When the JavaScript engine encounters the asynchronous fetch request using https.get, it offloads this task to libuv 

libuv registers the HTTP request with its callback function (let’s call it Callback A) and continues executing other code.

The callback (Callback A) from the https.get (which internally uses libuv for I/O) is queued in the macrotask queue (also called the callback queue or task queue) once the I/O operation completes.

`setTimeout`
"The setTimeout callback (Callback B) is registered in libuv with the timer, and once the 5000ms delay elapses, libuv moves Callback B to the macrotask queue (part of the Event Loop), waiting to be executed."

`File Read (fs.readFile)`
The file-reading operation is offloaded to libuv, and its associated callback (Callback C) is registered. Once the file is read, libuv places Callback C into the macrotask queue.

`If we use readFileSync it will block the main thread`

`multiply Function`
When the JavaScript engine reaches the multiply(a, b) function:
The function itself is stored in the heap (functions and objects are stored in the heap).
A new execution context is created in the call stack for the multiply function.
The variable result (a primitive value) is allocated memory in the stack.
The function execution completes, returning result to the caller. The multiply function's execution context is removed from the call stack.
The variable c is assigned the value of result, and this assignment is stored in the stack. Once the function call is complete, any temporary memory (like result) is eligible for garbage collection.

`console.log(c)`
The value of c (stored in the stack) is printed to the console.

`Asynchronous Callbacks`
libuv finishes the async task (like fs.readFile or https.get) and pushes the corresponding callback (Callback A, Callback B, or Callback C) into the macrotask queue.
The Event Loop continuously checks if the call stack is empty. Once it is:
It removes one callback at a time from the macrotask queue.
For each callback, it creates a new Execution Context and pushes it onto the Call Stack.
Inside this new execution context:
The code of the callback function runs.
After execution is complete, the execution context is popped off the call stack.

`Inside Libuv`
--------------
+-----------------------------+
|           libuv             |
|  +-----------------------+  |
|  |      Event Loop       |  |
|  +-----------------------+  |
|                             |
|  +-----------------------+  |
|  |    Callback Queue     |  |
|  |    ---------------    |  |
|  |    ---------------    |  |
|  |    ---------------    |  |
|  |    ---------------    |  |
|  |    ---------------    |  |
|  |    ---------------    |  |
|  +-----------------------+  |
|                             |
|  +-----------------------+  |
|  |  +---+  +---+  +---+  |  |
|  |  |   |  |   |  |   |  |  |
|  |  +---+  +---+  +---+  |  |
|  |                       |  |
|  |      Thread Pool      |  |
|  +-----------------------+  |
+-----------------------------+

| Queue/Type       | Description                         | Owner        |
| ---------------- | ----------------------------------- | ------------ |
| Macro Task Queue | setTimeout, I/O, setImmediate, etc. | libuv        |
| Microtask Queue  | Promises, `queueMicrotask`          | V8           |
| Next Tick Queue  | process.nextTick (Node.js-specific) | Node.js Core |


`Callback queue`
----------------
So when the js v8 engine that is main thread will offloads the asynchronous task to the libuv.

libuv assigns these tasks to either:
Thread Pool: For heavy I/O operations (e.g., file reading, database queries).
Event Loop Timer: For tasks like setTimeout or setInterval.
OS Kernels: For network requests and lightweight operations like DNS lookups.

Once the task is completed (e.g., file is read, a timer expires, or a network request is done), libuv does the following:
Registers the task's callback function.
Stores the callback in the `callback queue`.

- process.nextTick callbacks are handled in a special nextTickQueue, which has the highest priority. These are executed before the event loop proceeds to the next phase.
- Promise callbacks (e.g., .then, .catch, .finally) are stored in the Microtask Queue.
- Each pahse in the event loop will have their own callback queues
- and this is totally called as callback queue
- the timer callback queue is using a min-heap datastructure
The timer with the shortest delay is placed at the root of the heap.
This allows the event loop to efficiently determine which timers are ready to execute.

`Event loop`
------------
Event loop is a main hero inside the libuv it is continuesly running and checking the main thread that is js v8 engines call stack is empty or not and also checking the libuv's callback queues have any callbacks, If the call stack is empty and the callback queues have callbacks the event loop will pop a callback from the callback queue and push it to the call stack


                     +-------+
                ---> | Timer |
                |    +-------+
                |        |
                |        v
                |    +-------+                   +--------------------+
                |    |  Poll |                   | process.nextTick() |
                |    +-------+                   +--------------------+
                |        |                              ^     |  
                |        |                              |     |
                |        v                              |     v
                |    +-------+                   +--------------------+
                |    | Check |                   | promise.callback() | 
                |    +-------+                   +--------------------+
                |        |
                |        v
                |    +-------+
                |    | Close |
                |    +-------+
                |        |
                <--------v

So in this there are four phases timer, poll, check and close and when the event loop entering to the new phase it will first go through the process.nextTick() and promise.callback() like on starting of timer phase and then starting of poll phase and starting of check phase and also starting of the close phase

`timer` phase is for the `setTimeout` and `setInterval` callbacks
  ## In between the timer pahse and the poll pahse there is two pahses
  ## 1. Pending callbacks :- Execute i/o callbacks defered to the next loop iteration
  ## 2. idle, prepare :- only used internaly.
`poll` phase is for `i/o` callbacks like file reading/ writing, incoming connection, data, fs,crypto,https,util
`check` phase for the `setImmediate` callback
`close` phase for the `socket` callbacks like .on("close");

and this is the priority order of tasks in libuv

So if the callback queue in the libuv is empty and the call stack is empty in the v8 engine the event loop will wait at the poll phase so this is called `Semi infinite loop`.

One full cycle of the event loop is known as one `tick`

`Scenario`
if there is a process.nextTick the event loop is in the poll phase and it is having multiple I/O callbacks in the poll pahse -> After this single callback finishes, Node will pause the Poll queue, drain the process.nextTick() queue, and then go back to continue with the remaining callbacks in the Poll phase.

`Thread pool`
-------------
- Thread pool is a container of threads inside the libuv to run asynchronous code without blocking the main thread
- By default the thread pool have 4 threads
- This thead pool is known as uv_thread_pool
- whenever an asynchronous callback comes to  libuv it will offload to thread pool and thread pool will use a freely unoccupied thread to handle that callback and then this thread will communicate to the os for like example file system, web searching,DNS lookups, crypto tasks etc...
- so when more than 4 asynchronous code comes to thread pool the fifth asynchronus code need to wait for to gain a freely unoccupied thread to run.
- we can also update the thread pool size using
```js
process.env.UV_THREADPOOL_SIZE = size;
```

`Libuv -> os api connection`
------------------------------
`Socket Descriptor` All API connections require a socket from the OS, called a socket descriptor.

`Thread per Connection`
Each thread handling one socket descriptor is called thread-per-connection.
This approach is inefficient because thousands of connections would require thousands of threads.

`Epoll Mechanism`
epoll is a linux kernel system call
To solve this, the OS provides epoll (or similar mechanisms like kqueue on macOS/BSD or IOCP on Windows).
Epoll is a scalable I/O event notification system at the kernel level.
It can handle multiple socket descriptors at once efficiently.

`Epoll and Libuv`
epoll is a scalable I/O event notification mechanism used by Linux.
libuv uses epoll (on Linux) in its poll phase to efficiently monitor file descriptors for I/O readiness.
When an I/O event is detected (e.g., socket ready to read), epoll notifies libuv.
libuv then queues the corresponding callback.
The Node.js Event Loop picks up the callback and pushes it to the call stack for execution.
The code is then executed by the V8 JavaScript engine.
Internally, epoll uses a red-black tree to manage registered file descriptors and a linked list to track ready events.

`Like epoll in linux in windows it have i/o completion port iocp`





## `Server creation` ##
=======================
The node core module `http` is used to create a server and the `createServer` property of http. And the createServer function have a function and that function have two objects request and response

in production we dont use this native module, we will use express framework built on top of nodejs.

```js
const hppt = require('http');

const server = http.createServer(function(req, res){
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello! You are at the home route.');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route not found');
  }
})

server.listen(7777);
```

## `HTTP Response` ##
======================
Status line - http verion, status code, status message
Header - Additional information send by the server to client	
Response body - Actual data send by the server to client

`res.send()`
-----------
Used to send a complete response to the client.
It can be used to send various types of responses, including HTML, JSON, plain text, etc.
Automatic setting content-type

`res.write()`
-----------
Used to write a part of the response body.
It allows you to send chunks of data in a streaming fashion.
It can be called multiple times to send different parts of the response.
You need to end the response using res.end().
Manually setting content-type

`res.end()`
-----------
The res.end() method is part of the Response Object in Node.js (not specific to Express). It is used to end the response process and optionally send some data to the client as the final part of the response.

`res.locals`
----------------
res.locals is a temporary storage object in Express that is specific to a single HTTP request. It is available throughout the lifecycle of the request and is cleared once the response is sent.

It is often used in middleware to store data that we want to pass to templates (like EJS or Pug or Handlebars) or make available to the next middleware or route handler.

`res.json()` -> Sends a JSON response to the client.
`res.status()`-> Sets the HTTP status code for the response.
`res.writeHead()` -> Sets the HTTP status code and headers at the same time.
`res.cookie()` -> Sets a cookie on the client.
```js
res.cookie('token', '123abc', { httpOnly: true });
```
`res.clearCookie()` -> Clears a specific cookie on the client.
```js
res.clearCookie('token');
```
`res.type()` -> res.type('application/json').send({ message: "Hello!" });
`res.format()` -> Responds with different formats based on the client's Accept header.
`res.set() or res.header()` -> Sets a response header.
`res.get()` -> Retrieves a response header value.
`res.download()` -> Sends a file to the client for download.

`app.all`
--------------
app.all is a method in Express.js used to match all HTTP methods (e.g., GET, POST, PUT, DELETE, etc.) for a specific route or path.
It is commonly used for middleware or logging purposes.

## `HTTP Request` ##
======================
Request line - http version, Method, URI
Header - Additonal information that send by the client to server
Request body - Data send by the client to server

`app.get('/a(bc)?d')`
----------------------
Definition: Matches the path /ad or /abcd. The (bc)? makes bc an optional group.
## Example
-------------
URL: /ad → Matched.
URL: /abcd → Matched.
URL: /abcdx or /a → Not matched.

`app.get('/user/:userId/:name')`
----------------------------------
Definition: Matches a path with two dynamic segments, :userId and :name. These are placeholders for values extracted from the URL.
## Example
--------------
URL: /user/123/john → Matched. userId = 123, name = john.
URL: /user/456/jane → Matched. userId = 456, name = jane.
URL: /user/123 → Not matched.

`req.params`
--------------
Path parameters are segments of a URL path that are used to pass data to the server as part of the URL's path.
They are typically used to identify a specific resource or endpoint.

Extracts route parameters defined by :placeholder in the URL path.

  https://example.com/users/123/profile

## Example
-------------
```js
app.get('/user/:userId/:name', (req, res) => {
  console.log(req.params); 
    // Output: { userId: '123', name: 'john' } for `/user/123/john`
});
```
Use Case: For mandatory dynamic parts of the URL.

`req.query`
-------------
Query parameters are appended to the end of a URL after a question mark (?) and are used to send additional data to the server. They consist of key-value pairs separated by ampersands (&).
Query parameters are typically used for filtering, sorting, or specifying additional options.

Extracts query string parameters from the URL, which appear after ?.

  https://example.com/search?q=javascript&page=1&sort=asc
  
## Example
```js
app.get('/search', (req, res) => {
    console.log(req.query);
    // Output: { q: 'nodejs', sort: 'desc' } for `/search?q=nodejs&sort=desc`
});
```
Use Case: For optional parameters or filters.





## `Route handler` ##
========================
A Route Handler is the server-side code (typically a function) that processes an incoming HTTP request and generates an appropriate response.
if we not send any response back like example `res.send()` the request handler will be like a loop sending request

`How It Works`
It receives a HTTP request (from the client), analyzes it, and decides what to do with it.
It can read the request's URI, headers, query parameters, route parameters, or body to take appropriate actions.
It sends back a response to the client.

`ORDER OF THE ROUTES MATTER`

`Generic Route Handler`
--------------------------
This sample request handler will always respond with the same message regardless of the incoming path

```js
app.use((req,res)=>{
    res.send("Hello from server");
})
```

`Explicit Path-Specific Handler`
---------------------------------
In Express, a route defined with `/` acts as a catch-all (or a default handler) for any path, because `/` matches every route as a prefix.

If this is the first handler in our server and we define more specific route handlers later (e.g., /about, /contact), they won’t execute.
This happens because the `/` path matches any route that begins with `/`, which includes all other routes.
```js
app.use("/",(req,res)=>{
    res.send('Hello from dashboard');
})
```

`How to Ensure Other Handlers Work`
------------------------------------
If we want other handlers to respond appropriately, make sure to
Place more specific handlers before generic ones.

```js
app.use("/about", (req, res) => {
    res.send("Hello from about");
});

app.use("/", (req, res) => {
    res.send("Hello from dashboard");
});
```
In this case 
/about will match /about.
/ will act as a catch-all for any remaining unmatched paths.

`Route hanlder with multiple callback and next`
-------------------------------------------------
- In this the next function is called for trigger the next callback function
- here we have two response but only the first callback functions response will work and we will get an error because `The server can only send a single response to a single url then if we try to send a second response it will throw an error`
` Here the control will go to the next function after executing the first one but the second callback functions console will only work
- If there are multiple callback functions, we can wrap those callbacks inside an array, or we can wrap a specific set of callback functions.

`but in this the first route handler is sending the response with res.write it will also run the res.send method from the second route handler`

```js
app.get('/user',(err,req,res,next) => {
    console.log("First callback");
    res.send("Response from first callback");
    next();
},(err,req,res) => {
    console.log("Second callback");  // console will work but after this we will get an error
    res.send("Response from second callback");
})
```
or
```js
app.get('/user',
  (req, res, next) => {
    console.log("First callback");
    next();
  },
  (req, res) => {
    console.log("Second callback");
    res.send("Response from second callback");
  }
);
```

`So why there is this mutiple route handler code, the answer is middlewares`





## `Working of express` ##
=================================
If a request route comes to express js it will execute the code from top to bottom like it go through the middlewares and last it send the response back from the route handler

## `Middlewares` ##
=====================
In Express.js, a middleware is a function that executes during the request-response cycle. Middleware functions have access to the request (req), response (res), and the next() function, which passes control to the next middleware or route handler. They are used to perform operations such as logging, authentication, parsing request bodies, handling errors, or modifying requests and responses before they reach the final route handler.
```js
app.use((req, res, next) => {
    // Middleware logic
    next(); // Pass control to the next middleware
});
```

`Types of middlewares`
------------------------
1. Application level middleware
----------------------------------
That are bound to the entire application and are executed on every incoming request
Example :- Body parsing middleware

```js
// Body parsing middleware (application-level)
app.use(express.json()); // To parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded form data
```

2. Router level middleware
-----------------------------
 bound to a specific router instance using router.use().

 ```js
 // Router-level middleware
userRouter.use((req, res, next) => {
  console.log('Router middleware called for /users');
  next(); // Move to next middleware or route
});
 ```

3. Error handling middleware
-------------------------------
Middleware functions with four parameters (err, req, res, next) are considered error-handling middleware.

3. Third party middleware
----------------------------
Developers often use third-party middleware to add additional functionality to their applications.
Example :- morgan , helmet

4. Built in middleware
-------------------------
Express, a popular Node.js web framework, comes with built-in middleware functions that perform common tasks, such as serving static files 

express.static
express.JSON
express.urlencoded

5. express.json()
---------------------
- This middleware is used to parse incoming requests with JSON payloads. 
- The request suppose contains a JSON body it is not readable by the server so the express middleware `express.json` is used to parse JSON body and convert it in to a javascript object.

6. express.urlencoded()
--------------------------
This middleware is used to parse incoming requests with URL-encoded payloads, typically used for parsing form data.
express.urlencoded() is for URL-encoded form data.





## `Dynamic routing` ##
==========================
Dynamic routing refers to defining routes where part of the URL is a variable, allowing you to handle requests for multiple resources using a single route handler.
```js
app.get('/profile/:username', (req, res) => {
  const username = req.params.username;
  res.send(`User Profile for ${username}`);
});
```





Status code
-----------
Informational
100 - server has recieved inital part and expect the client to continue

Success
200 - Request was successfull and the server returned the data
201 - request fullfilled and new resource has been created

Redirection
301 - requested resourse are permenantly moved to a new location
302 - requested resourse are temporarly moved to a new location

Client 
400 - server didnot understand the request
401 - unauthorised
402 - payment required
403 - Understood but server refused to autherise

Server
500 - Internal server error
502 - Bad gateway
503 - service unavailable





## `CORS` ##
==============
Cross origin resource sharing
CORS is a security feature implemented by web browsers to control how web pages in one domain can request and interact with resources hosted on another domain.

first preflight request from client to server
then a option acknowledgment from server to client

The preflight request is an OPTIONS request that includes information about the actual request the browser wants to make.





## `Cookie` ##
================
- Cookies are small pieces of data stored on the client-side
- managed by `cookie-parser`
- They are primarily used for tracking user information, session management, and storing - user preferences.
- Cookies are sent from the server and stored on the client side.
- They are included in the HTTP headers of requests and responses.
- Cookies do not have an expiration time by default unless we explicitly set it using the expires or maxAge field.
- If no expiration time is set, the cookie is considered a session cookie and will be deleted when the browser or tab is closed.
- Cookies are limited in size to 4kb.
- Most browsers limit a site to around 20–50 cookies.





## `Session` ##
==================
- A session is a way to store user-specific data on the server between multiple requests from the same client.
- Managed using libraries like `express-session`
- It helps in maintaining state in stateless HTTP protocol (e.g., tracking logged-in users).
- Session data is stored on the server, while the session ID is stored on the client (usually in a cookie).
- On every request, the client sends the session ID, allowing the server to fetch the corresponding session data.
- Sessions can store any kind of user-related information — like login status, cart contents, preferences, etc.
- By default, sessions are stored in server memory, but in production they are usually stored in databases (Redis, MongoDB, etc.) for scalability and persistence.
- Sessions have an expiration time and can be configured to expire after a period of inactivity.
- Sessions are more secure than cookies alone, as sensitive data is not exposed to the client.
```js
app.use(session(
  {
  secret: 'your-secret-key',           // used to sign the session ID cookie
  resave: false,                       // don't save session if unmodified
  saveUninitialized: true,            // save new sessions that are uninitialized
  cookie: { maxAge: 60000 }           // session expires after 1 minute (in ms)
},
rolling: true // Resets the cookie maxAge on every request (i.e., tracks inactivity)
));
```
- The `secret` A session secret is a cryptographic key used to sign and verify the session ID stored in the cookie. It ensures that the session ID cookie hasn't been tampered with by malicious users.
- The `resave`, if it is `false` If the session was not changed during the request, do not save it again to the session store.
- The `saveUninitialized`,  A new session will not be saved to the session store unless something is added to req.session





## `Cache` ##
==============
Caching is a mechanism used to store copies of resources (like web pages, images, or stylesheets) on either the client side or intermediary servers (such as proxies or content delivery networks) to reduce latency and server load.

- Cache's have a various size and the lifespan is depends upon the cache control headers
- Types are :- client side, server side, application, proxy, cdn, object, database





## `Modules` ##
================
`Core modules`
---------------
These are modules that come pre-installed with Node.js and are part of its core. They are tightly integrated into Node.js and do not require installation.
Examples: fs, path, http, os, url

`External modules`
-------------------
External modules are third party modules that we can install using npm

## `CLI` ##
==============
A CLI (Command Line Interface) is a text-based tool where we can type commands to interact with our computer or software. In Node.js, we can use the CLI to run scripts, start server applications, and perform tasks directly in the terminal or console.
Used for:

- Running full programs.
- Managing packages.
- Interacting with tools like Git, Node.js, etc.



global
------
If we declare a variable or function without var, let, or const, and not in strict mode, it becomes a property of the global object.

`_dirname` -> is a global variable that Represents the absolute directory path of the current module.
`_filename` -> is a global variable that Represents the absolute file path of the current module.
`export` -> A shorthand for module.exports, used to export objects, functions, or variables from a module.
`module` -> Represents the current module and provides details about it (e.g., module.exports).
`require` -> Used to import modules or files.
`global` -> Represents the global object in Node.js, similar to window in browsers.
`buffer` -> Used to handle binary data.
`Process` -> It is a global object that provides information about the current Node.js process.




## `Synchronous file operation` ##
=======================================
fs operations
-----------------
`existsSync` -> The existsSync method checks whether a file or directory exists synchronously.
`unlinksync` -> The unlinkSync method is used to delete a file synchronously.

readfilesync(path , option)
---------------------------
Reads a file and returns its content synchronously.

```js
const fs = require('fs');

try {
  const data = fs.readFileSync('example.txt', 'utf-8');
  console.log(data);
} catch (error) {
  console.error('Error reading file:', error);
}
```

writefilesync(path , data , option)
-----------------------------------
Writes data to a file synchronously.
Creates the file if it doesn't exist, overwrites its content if it does.

```js
const fs = require('fs');

try {
  fs.writeFileSync('example.txt', 'Hello, World!', 'utf-8');
  console.log('File written successfully.');
} catch (error) {
  console.error('Error writing file:', error);
}

```
## `Asynchronous file operation` ##
========================================
readfile(path , option , callback)    //callback = data , error
-----------------------------------------------------------------
Reads a file asynchronously and calls a callback function with the result.

```js
const fs = require('fs');

fs.readFile('example.txt', 'utf-8', (error, data) => {
  if (error) {
    console.error('Error reading file:', error);
  } else {
    console.log(data);
  }
});
```

writefile(path , data , option , callback)  //callback = data , error
---------------------------------------------------------------------
Writes data to a file asynchronously.
Creates the file if it doesn't exist, overwrites its content if it does.
Calls a callback function once the operation is complete.

```js
const fs = require('fs');

fs.writeFile('example.txt', 'Hello, World!', 'utf-8', (error) => {
  if (error) {
    console.error('Error writing file:', error);
  } else {
    console.log('File written successfully.');
  }
});
```





## `Util` ##
=============
Util is a module that provides utility functions

inspect
-------
util.inspect is a method in Node.js provided by the util module. It is used to convert objects into a readable string format, mainly for debugging purposes.
```js
const util = require('util');

const obj = { name: 'John', age: 30 };
console.log(util.inspect(obj));
```

format
------
util.format is a method in the Node.js util module that formats strings by replacing placeholders with their corresponding values. It is useful for creating dynamic strings with variables.
```js
const util = require('util');

// Using format
const name = 'Midhun';
const age = 25;
const formatted = util.format('Hello, my name is %s and I am %d years old.', name, age);

console.log(formatted); // Output: Hello, my name is Midhun and I am 25 years old.
```

promisfy
--------
util.promisify is a method in the Node.js util module that converts callback-based functions into Promise-based functions. This is especially useful for working with asynchronous code in a modern way using async/await.
```js
const util = require('util');
const fs = require('fs');

// Convert callback-based `fs.readFile` to a Promise-based function
const readFile = util.promisify(fs.readFile);

// Using the promisified function with async/await
(async () => {
  try {
    const data = await readFile('example.txt', 'utf-8');
    console.log(data); // Outputs file content
  } catch (error) {
    console.error('Error reading file:', error);
  }
})();
```





## `Event` ##
====================
The events module in Node.js provides an EventEmitter class, which helps us handle events and event listeners.

on(): Used to register an event listener for a specific event.
emit(): Used to trigger an event and call the registered listeners.

```js
// Import the EventEmitter class from the 'events' module
const EventEmitter = require('events');

// Create an EventEmitter instance
const myEmitter = new EventEmitter();

// Register an event listener for the 'myEvent' event
myEmitter.on('myEvent', (arg1, arg2) => {
  console.log('Event triggered with arguments:', arg1, arg2);
});

// Trigger the 'myEvent' event with two arguments
myEmitter.emit('myEvent', 'First Argument', 'Second Argument');
```





## `Path` ##
===================
join
----
The join() method joins all the path segments provided as arguments and returns the resulting path.

path.join('/path', 'to', 'directory', 'file.txt');

basename
--------
The basename() method returns the last portion of a path, similar to the base name of a file.
If the ext argument is provided, it removes that extension from the result.

path.basename('/path/to/file.txt');

resolve
-------
The resolve() method resolves a sequence of path segments into an absolute path starting from the current working directory.

path.resolve('folder', 'subfolder', 'file.txt');





## `API` ##
=============
An API (Application Programming Interface) is a way for one system to interact with another by using a set of defined rules. It allows clients (like web browsers or mobile apps) to communicate with a server to access its data or services.

In Node.js, APIs are often created using frameworks like Express or the core http module.
APIs use protocols like HTTP/HTTPS to send and receive data.

Examples are  :- Web api, library api, os api





## `HTTP` ##
================
A protocol used for communication between web browsers and servers over the Internet.
It defines how messages are formatted and transmitted and the actions that web servers and browsers should take in response to various commands.
Mthods :- Get ,  post , put , delete , patch 

Get :-  The GET method is used to request data from a specified resource.
Post :- The POST method is used to submit data to be processed to a specified resource.
Put :- The PUT method is used to update a resource or create a new resource if it does not exist.
Delete :- The DELETE method is used to request that a specified resource be removed or deleted.
Patch :- The PATCH method is used to apply partial modifications to a resource.

`SSR` -> SSR stands for Server-Side Rendering, and it is a technique used in web development to render web pages on the server before sending them to the client's browser.
Features :- Improved SEO , Faster inital page load , Better performance

`URI` -> A URI (Uniform Resource Identifier) is a string that uniquely identifies a name or a resource on the Internet

`URL` -> A URL (Uniform Resource Locator) is a type of URI (Uniform Resource Identifier) that specifies the location of a resource on a network and how to retrieve it.

`URN` -> A URN (Uniform Resource Name) is a type of URI (Uniform Resource Identifier) that uniquely identifies a resource by name within a specific namespace, without providing information on how to locate or access it.

`SSL` -> SSL (Secure Sockets Layer) is a cryptographic protocol designed to provide secure communication over a computer network. It was created to ensure the confidentiality and integrity of data transmitted between a client (e.g., a web browser) and a server.

`TLS` -> TLS (Transport Layer Security) is the successor to SSL (Secure Sockets Layer) and provides an updated, more secure version of the cryptographic protocol. TLS ensures the confidentiality and integrity of data transmitted between a client (e.g., a web browser) and a server, safeguarding the communication from potential threats.

`View engines` -> View engines are components in web development frameworks that manage the rendering of dynamic content on the server side before sending it to the client's browser.
Examples :- Ejs , Handlebars , Pug , Twing , Mustache

`REST-API` -> A RESTful API (Representational State Transfer API) is an architectural style for designing networked applications, particularly web services. It consists of a set of principles and constraints that, when followed, lead to the development of scalable, flexible, and maintainable APIs.

`Streams` -> Streams are instances of EventEmitter class in Node.js and are designed to handle large amounts of data by breaking it into smaller, more manageable chunks.

`Readable stream` -> A readable stream is a type of stream from which data can be read. Examples include reading data from a file or receiving an HTTP request body.

```js
const fs = require('fs');
const readableStream = fs.createReadStream('example.txt');

// Reading data from the stream
readableStream.on('data', (chunk) => {
  console.log('Received chunk:', chunk);
});

readableStream.on('end', () => {
  console.log('Reading complete');
});

```

`Writable stream` -> A writable stream is a type of stream to which data can be written. Examples include writing data to a file or sending an HTTP response.

```js
const fs = require('fs');
const writableStream = fs.createWriteStream('output.txt');

// Writing data to the stream
writableStream.write('Hello, this is some text data!\n');
writableStream.write('This is another line of text.\n');

// Ending the writable stream
writableStream.end(() => {
  console.log('Data written to file successfully');
});
```

`Duplex stream` -> Streams that are both readable and writable. Examples include TCP sockets.

`Transform stream` -> These are a type of duplex streams, commonly used for data transformation tasks, such as compressing or decompressing data, encoding or decoding data, or performing other types of data manipulation.

`Pipe()` -> The pipe() method is used to connect the output of one stream to the input of another. It simplifies the process of transferring data from one stream to another.
```js
const fs = require('fs');

// Create a readable stream
const readableStream = fs.createReadStream('example.txt');

// Create a writable stream
const writableStream = fs.createWriteStream('output.txt');

// Use pipe() to transfer data from readableStream to writableStream
readableStream.pipe(writableStream);

readableStream.on('end', () => {
  console.log('Data has been successfully copied to output.txt');
});
```

`Process.nextTick()` -> process.nextTick() is a Node.js method that allows you to schedule a callback function to be invoked when the event lopp is entering to the next phase
```js
console.log('Start');

process.nextTick(() => {
  console.log('This runs after the current event loop cycle, but before any I/O tasks');
});

console.log('End');
```

`Origin module` -> The origin module in Node.js represents the starting point or root directory of the application.
It provides information about the current working directory of the Node.js process.

`Authentication` -> Authentication is the process of verifying the identity of a user or  an entity trying to access a system or resource.

`Authorization` -> Authorization is the process of determining what actions or resources a user or entity is allowed to access within a system.

`Thread` -> A thread is a sequence of instructions that can be executed independently by the CPU.

`app.local` -> object is available throughout the entire lifecycle of the application.
```js
app.locals.title = 'My App';
```
`res.local` -> object is specific to the current request-response cycle.
```js
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
```
`app.set` -> app.set() method is used to assign or modify application-level settings. 
```js
app.set('appName', 'My Express App');
```





## `Router chaining` ##
=========================
Router chaining allows you to chain multiple HTTP method handlers using router.route() method

```js
router.route('/user')
  .get((req, res) => {
    res.send('GET request to /user');
  })
  .post((req, res) => {
    res.send('POST request to /user');
  })
  .put((req, res) => {
    res.send('PUT request to /user');
  })
  .delete((req, res) => {
    res.send('DELETE request to /user');
  });
```





## `setImmediate (Node.js only)` ##
=====================================
The setImmediate function is used to schedule a task to execute after a specified delay (in milliseconds) and executes after only the i/o functions like after the poll phase of the event loop.

## Example
===========
```js
console.log("Before setImmediate");

setImmediate(() => {
    console.log("This runs immediately after the current event loop");
});

console.log("After setImmediate");
```

`What is Concurrency in Node.js?` -> Concurrency in Node.js refers to its ability to manage multiple tasks simultaneously without waiting for one task to finish before starting another. Even though Node.js is single-threaded, it can handle numerous tasks concurrently using its event-driven, non-blocking I/O model.

`Partials` -> Partials are related to templating engines (e.g., EJS, Pug, Handlebars) in Express.js, not Node.js directly.
They are reusable pieces of HTML code, like headers, footers, or navigation bars, that can be included in multiple views.
```js
<!-- Include a partial file -->
<%- include('header') %>
```

`Option methods` -> The OPTIONS method is an HTTP request method that is used to:
Ask the server which HTTP methods are allowed for a specific resource

Think of it as a way for a client (e.g., a browser) to ask the server:
"Hey, what can I do with this resource?"
```js
app.options('/example', (req, res) => {
  res.set('Allow', 'GET, POST, PUT').send(); // Send allowed methods
});
```

`Rate Limiting` -> A technique to limit the number of requests a client can make to a server within a specific timeframe.
use of this is to prevent abuse, like spamming APIs.

`Content Negotiation` -> A process where the client and server agree on the best content format (e.g., JSON, XML, HTML) for the response. Used to make APIs more flexible and user-friendly.
```js
app.get('/data', (req, res) => {
  if (req.headers.accept === 'application/json') {
    res.json({ message: 'Hello, JSON!' });
  } else {
    res.send('<p>Hello, HTML!</p>');
  }
});
```

`Event Pooling` -> A technique used to efficiently reuse event objects in memory instead of creating new ones for every event. Used to optimize performance in event-driven systems.





## `Axios` ##
==============

`Axios` -> A promise-based HTTP client for the browser and Node.js. Used to make HTTP requests. mostly used in the frontend and also can use in backend for api calling.
 ```js
 import axios from 'axios';
  axios.get('/api/data').then((response) => {
    console.log(response.data);
  });
 ```

`Axios interceptor` -> A way to modify requests or responses before they are sent or received. Used to add headers (like tokens) or handle errors globally.
```js
axios.interceptors.request.use((config) => {
  config.headers.Authorization = 'Bearer token';
  return config;
});
axios.interceptors.response.use((config) => {
  config.headers.Authorization = 'Bearer token';
  return config;
});
```

`Axios CancelToken` -> A feature to cancel an ongoing Axios request. Used to avoid processing unnecessary or outdated requests, like when navigating between pages.
```js
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/api/data', { cancelToken: source.token });
source.cancel('Request canceled!');
```
Use case :-
Search Autocomplete (Live Search)
  When a user types quickly, old API requests should be canceled to prevent outdated results.
Navigation Changes
  If a user navigates to another page before the response comes back, cancel the request to avoid side-effects.
Form Submissions
  If the user submits the form multiple times, cancel the previous request and only keep the latest.





## `Throttling`
===================
A technique to limit the number of times a function is executed within a given timeframe. 
Used to control traffic (e.g., user input or server load).
 




## `fs.link()`
===============
 fs.link() is a method in Node.js's fs module that creates a hard link between two files.

 A hard link is like creating a second name (path) for the same file data on disk. Both links point to the same underlying data (inode), so changes to one will be reflected in the other. Deleting one does not delete the actual file unless all hard links are removed.
 ```js
 const fs = require('fs');

fs.link('original.txt', 'hardlink.txt', (err) => {
  if (err) throw err;
  console.log('Hard link created: hardlink.txt');
});
 ```