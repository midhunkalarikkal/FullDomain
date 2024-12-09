## `Node.js` ##
================
- Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. 
- Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.

installing using `nvm` is a node version manager

Node.js is embedded with the V8 JavaScript engine, which powers its ability to execute JavaScript outside of a browser. Additionally, Node.js provides "superpowers" such as APIs for server-side functionality and modules for better code organization and Event loops manages asynchronous tasks by coordinating execution of code. These features make Node.js highly suitable for building servers. This combination is referred to as the `JavaScript runtime`.

A `JavaScript runtime` is an environment that provides all the necessary components to execute JavaScript code outside of a web browser

Developer Ryan Dahl created Node.js in 2009. Joyent, a technology company, supported Ryan Dahl in the development of Node.js.

Initially, the project was named "WebJS" because Ryan believed he was creating it primarily for building web servers. However, he later realized that it could be used for much more than just web servers, so he renamed it to Node.js to reflect its broader capabilities.

At the time, most servers were blocking in nature, which led Ryan to start developing Node.js as a non-blocking, event-driven runtime to handle asynchronous operations efficiently.

So node.js is single threaded by default when there is only synchrnous code, but it is multi threaded when it have asynchrnous code because  it will use libuv to run the asynchronous code and then libuv will use thread pool.

`Worker Threads` Starting with Node.js 10.5.0, we can explicitly create multiple threads using the worker_threads module if you need true multi-threading for JavaScript code execution.

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




## `Chrome v8 javascript engine` ##
===================================
V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. It implements `ECMAScript` and `WebAssembly`, and runs on Windows, macOS, and Linux systems that use x64, IA-32, or ARM processors. `V8 can be embedded into any C++ application`.

`Whereever is javascript there is js engine`

v8 for chrome
spider monkey for firefox
chakra for edge

js code ---->  c++ code ------> machine code --------> assembly code ---------> binary

`JavaScript` Engine: Your JavaScript code is run by a JavaScript engine, like V8 (used in Chrome and Node.js). This engine is written in a language like C++.

`Parsing`: The engine first parses your JavaScript code into an Abstract Syntax Tree (AST) to understand its structure.

`Compilation`: Then, the engine compiles the AST into machine code. This is where it translates your JavaScript into a lower-level language that the computer's hardware can understand.

`Execution`: Finally, this machine code is executed by your computer's processor. This is where the binary part comes in, as machine code consists of binary instructions that the processor can execute.


Steps inside the v8 engine
---------------------------
1. `Parsing`
  1. 1. Lexical analysis or tokenization
  In this step the `code` is converted in to `Tokens`, so the js engine is reading the code token by token

  1. 2. `Syntax analysis`
  The tokens then converted in to Abstract syntax tree `AST`
  `When we get a syntax error It means that our code cant create a proper abstract syntax tree`

2. `Interpreter`
  In v8 engine the interpreter is called `ignition interpreter` and the AST is passed to this interpreter and then converted to byte code.

3. So if there are codes that repeats like `HOT code` it will be passed to the compiler in the v8 engine called `Turbo compiler` and then it will optimize the hot code in to optimized machine code then it will be executed. In old days there were a compiler called crank `crank shaft` and it was deprecated.

`The whole rocess of interpreter and compiler is called Just in time compiler`

`deoptimization`
----------------
However, there are cases where the optimized machine code becomes invalid. This can happen if the assumptions made during optimization are violated. For instance, if a function is optimized for adding two numbers (e.g., integers) and later encounters inputs that are strings or characters, the optimized code might no longer be valid.

When such a mismatch occurs, de-optimization happens. The V8 engine discards the optimized code and falls back to the original bytecode, which is executed by the Ignition Interpreter. The engine can then adapt to the new input type, ensuring correct execution while trading off some performance.


## `Event driven architechture` ##
===================================
Event-driven architecture (EDA) is a design paradigm in which the flow of a program is determined by events such as user actions, sensor outputs, or messages from other programs. It is commonly used in systems where asynchronous and dynamic responses are needed.




## `Asynchronous i/o` vs `Non-blocking i/o` vs ``Synchronous i/o` ##
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

The main thread is the js engine running

`Synchronous i/o`
------------------
Synchronous I/O is a processing method where I/O operations block the execution of the program until the task is complete. The program waits for the I/O operation (such as reading from a file or querying a database) to finish before proceeding to the next operation.

Simplicity: Easier to implement as the program flow is straightforward.
Data Consistency: Guarantees that data is processed in order.
Debugging: Easier to debug, as there are fewer asynchronous tasks to manage.




## `Server` ##
==============
A server is a powerful computer or system that provides services, data, or resources to other computers, known as clients, over a network. When a client machine, such as a user's computer or smartphone, makes a request to access a website like google.com, it sends the request to the server. The server is identified by an IP address, for example, 114.126.123.8, which uniquely points to the server machine hosting the website or service. The server processes the client's request and responds with the required data, such as a webpage.




## `ECMA Script` ##
===================
ECMAScript is a standardized specification for scripting languages, which serves as the foundation for languages like JavaScript, JScript, and ActionScript. It defines the rules, guidelines, and features for scripting languages to ensure consistency and interoperability across different platforms and browsers.




## `WebAssembly` ##
===================
WebAssembly (Wasm) is a binary instruction format designed for efficient execution on web browsers. It enables high-performance execution of code written in languages like C, C++, Rust, and others, directly in the browser, alongside JavaScript. WebAssembly allows developers to run computationally intensive tasks faster and with lower overhead compared to traditional JavaScript.




## `REPL` ##
=============
Read, Evaluate, Print, Loop
Quickest way of runnig nodejs code
A REPL is an interactive programming environment that allows users to enter and execute code one line at a time.

type node in command line for activate repl
special comands :- .help , .break , .clear
Auto completion :- Pressing the tab key can autocomplete the names of functions , varialbles and modules




## `global` ##
==============
One of the superpowers of Node.js is its ability to work seamlessly with the V8 engine, making development faster and more efficient.

In Node.js, the this keyword in the global space refers to an empty object.
In contrast, in a browser, the this keyword in the global space points to the window object.
In the browser, the global object can be accessed using multiple keywords:

`window`
`this`
`self` (used in Web Workers)
`frames`
To standardize how the global object is accessed across different runtimes (Node.js, browsers, and Web Workers), the OpenJS Foundation introduced globalThis in 2020. This provides a consistent way to reference the global object, regardless of the runtime environment.




## `Module` ##
==============
In Node.js, each module is wrapped in a function when executed.This is an IIFE function. This design ensures that the variables and functions defined inside the module are private to that module and not accessible from other modules unless explicitly exported.

When a Node.js module is executed, it is wrapped in a function like this internally

```js
(function(exports, require, module, __filename, __dirname) {
  // Your module code here
});
```

`Advantages of This Design`
--------------------------
Data Privacy: Keeps module internals hidden and secure.
Modularity: Encourages clean, reusable, and maintainable code.
No Global Pollution: Prevents accidental overwriting of global variables or functions.




## `require` ##
================
Used to include another modules in a module by using the require function and specifying the path inside it

we cant access the varibales, functions and methods inside a module in aother module by just using the require function, because the modules are protecting their variables and functions from leaking

the protection will help to reuse the variable and function names in another modules if we need

We need to export the variables and function from a module import it in the another module for using it.

Whenever the require function will call it will wrap the module inside a IIFE function and then pass it to the v8 engine.

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

## Example
===========
```js
module.exports = {variable, function}
```




## `CommonJs module (cjs)` common js module system ##
==============================
Older way, synchronous and the code is running in  non strict mode
in non strict mode we can declare variables without var, let or const
while importing a module it is not necessary to specifyt eh .js extension for the importing file in common js module

the moduel.exports is an empty object by default

By default the module is common js module it is  that the variables and functions are exporting using the 
```js
module.exports = sum; // Single export
module.export = {Sum, Multiply}; // Multiple export
```
and importing using the require function

```js
const sum = require('./path'); // Single import
const {Sum, Multiply} = require('./path'); // Multiple import

// importing the whole object
const object = require('./path')  
// Using the exported things
object.Sum
object.Multiply
```




## `ES modules (mjs)` es module system ##
===================
Newer way asynchronous and the code running in strict mode
in strict mode we cant decalre variable without var, let or const
while importing a module we need to specify the .js file extension of the file in es modules

For making the module ES module we need to specify the module in the package.json

```js
{
  "type" : "module"
}
```
and for exporting we can use the export keyword directly with variables and functions
```js
 export function sum(a,b){
  console.log("Sum is : ",a+b);
 }
```

and for importing we need to use the import keyword
```js
import {sum} from './path';
```




## `Coomon file for importinga and exporting` ##
=================================================
If we have a folder and inside it have multiple modules and each modules have mutiple exports, we can use an `index.js` file for importing all the modules things in to index.js file and then export all the things from the index.js file

So while importing these things outside of the folder we dont need to use the index.js file name in the path, by default it will take it from the index.js file of the folder

the main advantage of this method is that we can encapsulate the modules and the varibale and the functions so theat the module which is importing these things will not need to worry about the location of these things




## `LIBUV` ##
==============
It is a cross platform  open source library written in c , handles asynchronous non blocking  operations in node js using thread pool and event loop
js - synchronous ans single threaded language

+-----------node.js-----------+
| +-----------+   +---------+ |
| | V8 Engine |   |  libuv  | |
| +-----------+   +---------+ |
|  https fs crypto etc..      |
+-----------------------------+

`Synchronous means`
  JavaScript executes code line by line in the order it appears.
  It does not jump or skip tasks or lines during execution in the main thread.
  Each operation must complete before the next one begins, making it synchronous by default.

`Single threaded means`
  JavaScript uses a single thread from the processor to execute code.
  This single thread is managed by the JavaScript runtime environment, such as the V8 engine.
  All tasks (like variable declarations, function calls, etc.) are handled sequentially in this single thread.

`Working synchronous`
------------------------
- js engine has only one call stack
- Everything, even a piece of code is executed inside the call stack

- Inside the memory heap it will keep the variables functions like that things

- Garbage collector will collect the varibales and functions which is not in use furthur. garbage collector is working with heap memory

- Other low level languages like c, c++ we have to handele the garbage collection, but languages like js all these things are put inside v8 engine

`Working asynchronous`
-----------------------
- So js engine works only in synchronous format, and the node js need to gain access to file, db, web, timers and etc.... and these are controlled by OS itself So here we need a `super power` to make the js engined synchronous and make access to these things here the `LIBUV` comes 

- So whatever asynchronous task the js engine need to do it will offload to the LIBUV and the LIBUV will make it possible
- libuv is a multi-platform C library that provides support for asynchronous I/O based on event loops. It is writtten in c.
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
When the JavaScript engine encounters the asynchronous fetch request using https.get, it offloads this task to libuv (the underlying library for handling async I/O in Node.js).
libuv registers the HTTP request with its callback function (let’s call it Callback A) and continues executing other code. The Callback A is saved in the Node.js Event Loop queue, waiting for the request to complete.

`setTimeout`
The setTimeout function is also handed off to libuv with its delay timer of 5000 milliseconds. The callback (let’s call it Callback B) is registered in libuv, which will move it to the Event Loop queue once the timer completes.

`File Read (fs.readFile)`
The file-reading operation is offloaded to libuv, and its associated callback (let’s call it Callback C) is registered. Once the file is read, the data is passed back to the Event Loop.

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
When the file read or HTTP fetch operation is completed:
The Event Loop moves the corresponding callback (Callback A, Callback B, or Callback C) into the call stack.
A new execution context is created for that callback, and the code within the callback is executed.
After execution, the execution context is removed from the call stack.

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

`Callback queue`
----------------
So when the js v8 engine that is main thread will offloads the synchronous task to the libuv, it will register that task and register that tasks callback, and it will store the callback and keep inside in the callback queue. so like this all the asynchronous functions callbacks are keeping inside this callback queue

- For the proccess.nextTick and promise.callback funcitions it will have a priority queue like process.nextTick callback queue and process.callback callback queue
- and for the each pahse function it will have their own callback queues
- and this is totally called a s callback queue
- the timer callback queue is using a min-heap datastructure

`Event loop`
------------
Event loop is a main hero inside the libuv it is continuesly running and checking the main thread that is js v8 engines call stack is empty or not and also checking the libuv's callback queue have any callbacks, If the call stack is empty and the callback queue have callbacks the event loop will pop a callback from the callback queue and push it to the call stack


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
`close` phase for the `socket` callbacks  like .on("close");

and this is the priority order of tasks in libuv

So if the callback queue in the libuv is empty and the call stack is empty in the v8 engine the event loop will wait at the poll phase so this is called `Semi infinite loop`.

One full cycle of the event loop is known as one `tick`

`Thread pool`
-------------
- Thread pool is a container of threads inside the libuv to run asynchronous code without blocking the main thread
- By defaukt the thread pool have 4 threads
- This thead pool is known as uv_thread_pool
- whenever an asynchronous callback comes to  libuv it will offload to thread pool and thread ppol will use a freely unoccupied thread to handle that callback and then this thread will communicate to the os for like example file system, web searching,DNS lookups, crypto tasks etc...
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
Epoll communicates with libuv, which monitors I/O events in its poll phase.
When an event occurs, libuv sends a callback to the event loop.
The event loop processes it, and the code runs using the V8 engine.
The epoll mechanism in Linux internally uses a red-black tree and a linked list as its primary data structures to manage and monitor file descriptors

`Like epoll in linux in windows it have i/o completion port iocp`
                        

## `Server creation` ##
=======================
The node core module http is used to create a server and this createServer is a property of http. And the createServer function have a function and that function have two objects request and response

in production we dont use this native module, we will use express framework built on top of nodejs.

```js
const hppt = require('http');

const server = http.createServer(function(req, res){

})

server.listen(7777);
```

## `HTTP Response` ##
======================
Status line - http verion , status code , status message
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

## `HTTP Request` ##
======================
Request line - Method , URI , http version
Header - Additonal information that send by the client to server
Request body - Data send by the client to server

`app.get('/ab?c')`
---------------------
Definition: Matches the path /abc or /ac. The ? indicates that the preceding character (b) is optional.
## Example
-----------
URL: /abc → Matched.
URL: /ac → Matched.
URL: /ab or /abcd → Not matched.

`app.get('/ab+c')`
---------------------
Definition: Matches the path where b appears one or more times, followed by c. The + indicates repetition of the preceding character (b).
## Example
------------
URL: /abc → Matched.
URL: /abbc → Matched.
URL: /ac or /abcd → Not matched.

`app.get('/ab*cd')`
--------------------
Definition: Matches the path where any number of characters (including none) replace the * between ab and cd.
## Example
--------------
URL: /abcd → Matched.
URL: /abxyzcd → Matched.
URL: /abx or /cd → Not matched.

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
Definition: Extracts route parameters defined by :placeholder in the URL path.
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
Definition: Extracts query string parameters from the URL, which appear after ?.
## Example
```js
app.get('/search', (req, res) => {
    console.log(req.query);
    // Output: { q: 'nodejs', sort: 'desc' } for `/search?q=nodejs&sort=desc`
});
```
Use Case: For optional parameters or filters.





## `Request handler` ##
========================
A Request Handler is the server-side code (typically a function) that processes an incoming HTTP request and generates an appropriate response.

`How It Works`

It receives an HTTP request (from the client), analyzes it, and decides what to do with it.
It can read the request's URI, headers, query parameters, route parameters, or body to take appropriate actions.
It sends back a response to the client.

`ORDER OF THE ROUTES MATTER`

`Generic Request Handler`
--------------------------
This sample request handler will always respond with the same message regardless of the incoming path

```js
app.use((req,res)=>{
    res.send("Hello from server");
})
```

`Explicit Path-Specific Handler`
---------------------------------
In Express, a route defined with / acts as a catch-all (or a default handler) for any path, because / matches every route as a prefix.

If this is the first handler in your server and you define more specific route handlers later (e.g., /about, /contact), they won’t execute.
This happens because the / path matches any route that begins with /, which includes all other routes.
```js
app.use("/",(req,res)=>{
    res.send('Hello from dashboard');
})
```

`How to Ensure Other Handlers Work`
------------------------------------
If you want other handlers to respond appropriately, make sure to
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

                    



Query Parameters
----------------
Query parameters are appended to the end of a URL after a question mark (?) and are used to send additional data to the server. They consist of key-value pairs separated by ampersands (&). Query parameters are typically used for filtering, sorting, or specifying additional options.

https://example.com/search?q=javascript&page=1&sort=asc

Path Parameters (Params)
------------------------
Path parameters are segments of a URL path that are used to pass data to the server as part of the URL's path. They are typically used to identify a specific resource or endpoint.

https://example.com/users/123/profile



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

Thread pool
-----------
The thread pool is used for executing heavy or blocking tasks outside the event loop, ensuring that these operations don't block the execution of other code. For example, file I/O operations or cryptographic tasks might be performed in the thread pool.

Event loop
----------
It checks the callback queue for the callbacks and if the call stack is empty it will push the call back from the callback queue to the call stack

Types of middlewares
=====================

Application level middleware
----------------------------
that are bound to the entire application and are executed on every incoming request
Example :- Body parsing middleware

Router level middleware
-----------------------
 bound to a specific router instance using router.use().

Error handling middleware
-------------------------
Middleware functions with four parameters (err, req, res, next) are considered error-handling middleware.

Third party middleware
----------------------
Developers often use third-party middleware to add additional functionality to their applications.
Example :- morgan , helmet

Built in middleware
-------------------
Express, a popular Node.js web framework, comes with built-in middleware functions that perform common tasks, such as serving static files 

express.static
express.JSON
express.urlencoded

express.json()
--------------
This middleware is used to parse incoming requests with JSON payloads. It automatically parses the JSON body of incoming requests and makes it available in req.body.

express.json() is for JSON data

express.urlencoded()
--------------------
This middleware is used to parse incoming requests with URL-encoded payloads, typically used for parsing form data.

express.urlencoded() is for URL-encoded form data.

Dynamic routing
---------------
dynamic routing in Node.js allows you to handle different kinds of requests by capturing and using values from the URL. 

app.get('/profile/:username', (req, res) => {
  const username = req.params.username;
  res.send(`User Profile for ${username}`);
});


CORS
-----
Cross origin resource sharing
CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers to control how web pages in one domain can request and interact with resources hosted on another domain.

first preflight request from client to server
then a option acknowledgment from server to client

The preflight request is an OPTIONS request that includes information about the actual request the browser wants to make.

write head
----------
writeHead is a method provided by the http module, which is used to send an HTTP response header to the client.

Parameter
---------
A parameter is a variable that is used in the declaration of a function or method.
Parameters are part of the function's signature and act as local variables within the function's scope.

Argument
--------
An argument is the actual value that is passed to a function or method when it is invoked or called.
They are the values that the function uses when it executes.

Cookie
------
Cookies are small pieces of data stored on the client-side
They are primarily used for tracking user information, session management, and storing user preferences.
Cookies are sent from the server and stored on the client side.
They are included in the HTTP headers of requests and responses.
Cookies are limited in size and have an expiration time 

Cache
-----
Caching is a mechanism used to store copies of resources (like web pages, images, or stylesheets) on either the client side or intermediary servers (such as proxies or content delivery networks) to reduce latency and server load.
Cache's have a various size and the lifespan is depends upon the cache control headers

client side
server side
application
cdn
object
database

npm
---
npm is the default package manager for Node.js.
It is used for installing, managing, and publishing Node.js packages (libraries and tools).
It allows you to declare project dependencies in a package.json file and then install those dependencies using the npm install command.

npx
---
npx is a tool that comes with npm to execute Node.js binaries that are not globally installed. used to execute Node.js packages directly from the command line.

Modules
-------
-------
A module in Node.js is a self-contained piece of code that encapsulates specific functionality.
Each file in Node.js is treated as a separate module.

require function
----------------
Used to import modules in node js

module.exports
--------------
used to export the functions , objets or values from a module

const myfunction = () => {}

module.exports = myfunction

exporting multiple modules
--------------------------

const functionone = () => {}
const functiontwo = () => {}

module.exports = {functionone , functiontwo}

Built in modules
----------------
fs , os , http , path

Core modules
------------
Core modules are comes bundled with node js
util , events , crypto , net

External modules
----------------
External modules are third party modules that we can install using npm

ESM
----
----
export
-------
const myfunction = () => {}

export default myfunction

import
-------
import myfunction from "./module.js"

CLI
---
A CLI is a text-based interface that allows users to interact with a computer or software by typing commands into a terminal or console.
You can execute Node.js scripts, run server applications, and perform various tasks using the command line.

Global
------
------
Global variables

global
------
Any variable or function declared without the var, let, or const keyword becomes a property of the global object.

_dirname
--------
is a global variable that represents the current working directory of the script.
It provides the full path to the directory containing the currently executing script.

_filename
---------
is a global variable that represents the full path to the current module's file.
it includes the filename

Module
------
is an object that represents the current module.
It is part of the CommonJS module system and includes information about the module, exports, and other module-related properties.

Process
-------
is a global object that provides information about the current Node.js process.

fs
--
the fs (File System) module provides both synchronous and asynchronous methods for interacting with the file system.

existsSync
----------
The existsSync method checks whether a file or directory exists synchronously.

unlinksync
----------
The unlinkSync method is used to delete a file synchronously.

Synchronous file operation
--------------------------
--------------------------

readfilesync(path , option)
---------------------------
Reads a file and returns its content synchronously.

const fs = require('fs');

try {
  const data = fs.readFileSync('example.txt', 'utf-8');
  console.log(data);
} catch (error) {
  console.error('Error reading file:', error);
}

writefilesync(path , data , option)
-----------------------------------
Writes data to a file synchronously.
Creates the file if it doesn't exist, overwrites its content if it does.

const fs = require('fs');

try {
  fs.writeFileSync('example.txt', 'Hello, World!', 'utf-8');
  console.log('File written successfully.');
} catch (error) {
  console.error('Error writing file:', error);
}

Asynchronous file operation
---------------------------
---------------------------

readfile(path , option,callback)    //callback = data , error
-------------------------------------------------------------
Reads a file asynchronously and calls a callback function with the result.

const fs = require('fs');

fs.readFile('example.txt', 'utf-8', (error, data) => {
  if (error) {
    console.error('Error reading file:', error);
  } else {
    console.log(data);
  }
});

writefile(path , data , option , callback)  //callback = data , error
---------------------------------------------------------------------
Writes data to a file asynchronously.
Creates the file if it doesn't exist, overwrites its content if it does.
Calls a callback function once the operation is complete.

const fs = require('fs');

fs.writeFile('example.txt', 'Hello, World!', 'utf-8', (error) => {
  if (error) {
    console.error('Error writing file:', error);
  } else {
    console.log('File written successfully.');
  }
});

Util
----
Util is a module that provides utility functions

util.inspect , util.format , util.promisfy

inspect
-------
Used to inspect JavaScript objects.

const util = require('util');

const obj = { name: 'John', age: 30 };
console.log(util.inspect(obj));

format
------
is used for formatting strings similarly to printf in C.

util.format('%s is %d years old', 'John', 30);

promisfy
--------
converts functions that use the traditional callback style (error-first) into Promise-based functions.

const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);

readFileAsync('example.txt', 'utf-8')
  .then(data => console.log(data))
  .catch(error => console.error('Error reading file:', error));

Event
-----
events module provides an EventEmitter class that allows you to work with events and event listeners.

on() method to register event listeners for a specific event.

emit() method to trigger the event and invoke the registered event listeners.

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('myEvent', (arg1, arg2) => {
  console.log('Event emitted with arguments:', arg1, arg2);
});

myEmitter.emit('myEvent', 'Argument 1', 'Argument 2');


Path
----
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

API
---
a set of rules and tools that allows different software applications to communicate with each other.

APIs enable the integration of different software systems by providing a standardized way for them to interact.

Examples :- Web api , library api , OS api

HTTP
----
a protocol used for communication between web browsers and servers over the Internet.
It defines how messages are formatted and transmitted and the actions that web servers and browsers should take in response to various commands.
Mthods :- Get ,  post , put , delete , patch , update

Get :-  The GET method is used to request data from a specified resource.
Post :- The POST method is used to submit data to be processed to a specified resource.
Put :- The PUT method is used to update a resource or create a new resource if it does not exist.
Delete :- The DELETE method is used to request that a specified resource be removed or deleted.
Patch :- The PATCH method is used to apply partial modifications to a resource.

SSR
---
SSR stands for Server-Side Rendering, and it is a technique used in web development to render web pages on the server before sending them to the client's browser.
Features :- Improved SEO , Faster inital page load , Better performance

URI
---
A URI (Uniform Resource Identifier) is a string that identifies a name or a resource on the Internet

URL
---
A URL (Uniform Resource Locator) is a specific type of URI that provides the means to locate and retrieve the resource over the network. It includes the information needed to access the resource

URN
---
A URN (Uniform Resource Name) is a specific type of URI that is used to uniquely identify a resource by name in a particular namespace.

SSL
---
SSL, or Secure Sockets Layer, was a cryptographic protocol designed to provide secure communication over a computer network.
SSL was designed to ensure the confidentiality and integrity of data transmitted between a client (e.g., a web browser) and a server.

TLS
---
TLS, or Transport Layer Security, is the successor to SSL and represents an updated and more secure version of the cryptographic protocol.
TLS is used to ensure the confidentiality and integrity of data transmitted between a client and a server.

View engines
------------
View engines are components in web development frameworks that manage the rendering of dynamic content on the server side before sending it to the client's browser.
Examples :- Ejs , Handlebars , Pug , Twing , Mustache , React jsx

Restful api
-----------
A RESTful API (Representational State Transfer API) is an architectural style for designing networked applications, particularly web services.
a set of principles and constraints that, when applied, lead to the development of scalable, flexible, and maintainable APIs.

Session
-------
-------

express-session
---------------
This middleware manages sessions in Express.js applications.

secret
------
A session secret is a key used to sign the session ID cookie.

resave
------
When set to true, it forces the session to be saved back to the session store, even if the session data was not modified during the request.

saveuninitialized
-----------------
If set to true, it forces a session that is "uninitialized" to be saved to the store. An uninitialized session is a new and unmodified session.

Streams
-------
Streams are instances of EventEmitter class in Node.js and are designed to handle large amounts of data by breaking it into smaller, more manageable chunks.

Readable stream
---------------
Streams from which data can be read. Examples include reading data from a file or receiving an HTTP request body

const fs = require('fs');
const readableStream = fs.createReadStream('example.txt');

Writable stream
---------------
Streams to which data can be written. Examples include writing data to a file or sending an HTTP response.

Duplex stream
-------------
Streams that are both readable and writable. Examples include TCP sockets.

const net = require('net');
const duplexStream = net.createConnection({ port: 8080 });

Transform stream
----------------
These are a type of duplex streams, commonly used for data transformation tasks, such as compressing or decompressing data, encoding or decoding data, or performing other types of data manipulation.

Pipe()
------
The pipe() method is used to connect the output of one stream to the input of another. It simplifies the process of transferring data from one stream to another.

Process.nextTick()
------------------
process.nextTick() is a Node.js method that allows you to schedule a callback function to be invoked in the next iteration of the event loop

Origin module
-------------
The origin module in Node.js represents the starting point or root directory of the application.
It provides information about the current working directory of the Node.js process.

Authentication
--------------
Authentication is the process of verifying the identity of a user or entity trying to access a system or resource.

Authorization
-------------
Authorization is the process of determining what actions or resources a user or entity is allowed to access within a system.

app.set
-------
app.set() method is used to assign or modify application-level settings. 

app.local
---------
object is available throughout the entire lifecycle of the application.

res.local
---------
object is specific to the current request-response cycle.

Expires
-------
The Expires header specifies an absolute expiration time for the cached content.
with date and time

MaxAge
------
The max-age directive specifies the maximum amount of time (in seconds) for which the cached content remains valid relative to the time of the response.

Wroker thread
-------------
Worker threads in Node.js provide a way to run JavaScript code in separate threads

Thread
------
A thread is a sequence of instructions that can be executed independently by the CPU.




Router chaining
---------------
to sequentially process incoming HTTP requests through a series of middleware functions.





Event emitter , streams, pipes, buffers