## `Node.js` ##
================
Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.

Developer Ryan Dahl in 2009

Whereever is javascript there is js engine

Joyent is a company that helped ryan dahl for developing nodejs

Earlier the nodejs name was webjs because ryan thoughts he was developing it for building web server, later henrealised that it is not only used for building web serve also we can use build something else, so he changed the name from webjs to nodejs

## `Spider monkey` ##
======================

## `Javascript runtime` ##
===========================


## `Chrome v8 javascript engine` ##
===================================

## `vent driven architechture` ##
===================================

## `Asynchronous i/o` or `Non-blocking i/o` ##
=================================================

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

REPL
----
A REPL is an interactive programming environment that allows users to enter and execute code one line at a time.

type node in command line for activate repl
special comands :- .help , .break , .clear
Auto completion :- Pressing the tab key can autocomplete the names of functions , varialbles and modules

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