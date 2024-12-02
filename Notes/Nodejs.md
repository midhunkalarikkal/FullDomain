## `Node.js` ##
================
Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.

installing using `nvm` is a node version manager

`Whereever is javascript there is js engine`

Node.js is embedded with the V8 JavaScript engine, which powers its ability to execute JavaScript outside of a browser. Additionally, Node.js provides "superpowers" such as APIs for server-side functionality and modules for better code organization and Event loops manages asynchronous tasks by coordinating execution of code. These features make Node.js highly suitable for building servers. This combination is referred to as the `JavaScript runtime`.

A `JavaScript runtime` is an environment that provides all the necessary components to execute JavaScript code outside of a web browser

Developer Ryan Dahl created Node.js in 2009. Joyent, a technology company, supported Ryan Dahl in the development of Node.js.

Initially, the project was named "WebJS" because Ryan believed he was creating it primarily for building web servers. However, he later realized that it could be used for much more than just web servers, so he renamed it to Node.js to reflect its broader capabilities.

At the time, most servers were blocking in nature, which led Ryan to start developing Node.js as a non-blocking, event-driven runtime to handle asynchronous operations efficiently.

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

v8 for chrome
spider monkey for firefox
chakra for edge

js code ---->  c++ code ------> machine code --------> assembly code ---------> binary

`JavaScript` Engine: Your JavaScript code is run by a JavaScript engine, like V8 (used in Chrome and Node.js). This engine is written in a language like C++.

`Parsing`: The engine first parses your JavaScript code into an Abstract Syntax Tree (AST) to understand its structure.

`Compilation`: Then, the engine compiles the AST into machine code. This is where it translates your JavaScript into a lower-level language that the computer's hardware can understand.

`Execution`: Finally, this machine code is executed by your computer's processor. This is where the binary part comes in, as machine code consists of binary instructions that the processor can execute.


## `Event driven architechture` ##
===================================
Event-driven architecture (EDA) is a design paradigm in which the flow of a program is determined by events such as user actions, sensor outputs, or messages from other programs. It is commonly used in systems where asynchronous and dynamic responses are needed.

## `Asynchronous i/o` vs `Non-blocking i/o` vs ``Synchronous i/o` ##
======================================================================
`Asynchronous`
--------------
Asynchronous I/O (AIO) is a type of input/output processing that allows other tasks to continue while I/O operations run in the background. It’s also known as overlapped I/O and is ideal for optimizing efficiency in long-running tasks like database backups or large data transfers.

Efficient Resource Usage: Overlaps processing with I/O operations.
Reduced Wait Time: Minimizes process or thread waiting.
Immediate Service: Quickly responds to client requests.
Handles High Load: Effectively manages bursty applications.
Scalability: Supports large-scale operations efficiently.
Optimal for Large Data: Best suited for transferring large datasets.

`Non-blocking i/o`
-------------------
Non-blocking I/O is a processing method where I/O operations return immediately without waiting for the operation to complete. Instead, the system continues executing other tasks and revisits the I/O operation later when the result is ready.
Advantages of nonblocking can handle multiple number of request with small number of threads

No Waiting: The system doesn’t halt while performing I/O tasks.
Improved Efficiency: Frees up resources for other operations during I/O processing.
Supports Concurrency: Handles multiple tasks simultaneously without thread blocking.
Scalability: Ideal for applications with high I/O demands, like servers managing multiple connections.

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










Query Parameters
----------------
Query parameters are appended to the end of a URL after a question mark (?) and are used to send additional data to the server. They consist of key-value pairs separated by ampersands (&). Query parameters are typically used for filtering, sorting, or specifying additional options.

https://example.com/search?q=javascript&page=1&sort=asc

Path Parameters (Params)
------------------------
Path parameters are segments of a URL path that are used to pass data to the server as part of the URL's path. They are typically used to identify a specific resource or endpoint.

https://example.com/users/123/profile

res.send()
-----------
Used to send a complete response to the client.
It can be used to send various types of responses, including HTML, JSON, plain text, etc.
Automatic setting content-type

res.write()
-----------
Used to write a part of the response body.
It allows you to send chunks of data in a streaming fashion.
It can be called multiple times to send different parts of the response.
You need to end the response using res.end().
Manually setting content-type

HTTP Request
---------------
Request line - Method , URI , http version
Header - Additonal information that send by the client to server
Request body - Data send by the client to server

HTTP Response
--------------
Status line - http verion , status code , status message
Header - Additional information send by the server to client	
Response body - Actual data send by the server to client

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

LIBUV
-----
It is a cross platform  open source library written in c , handles asynchronous non blocking  operations in node js using thread pool and event loop

Thread pool
-----------
The thread pool is used for executing heavy or blocking tasks outside the event loop, ensuring that these operations don't block the execution of other code. For example, file I/O operations or cryptographic tasks might be performed in the thread pool.

Event loop
----------
It checks the callback queue for the callbacks and if the call stack is empty it will push the call back from the callback queue to the call stack

Types of middlewares
--------------------

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