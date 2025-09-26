## `WEB`
===========
The web is like a giant network where every device (node) is connected through unique IP addresses. These IP addresses allow devices to find and communicate with each other, forming a web-like structure.


## `Protocols`
=================
Protocols are rules that define how data is sent and received over the internet. Here are some key ones:

HTTP (Hypertext Transfer Protocol): Used for accessing and sharing web pages on the internet.
FTP (File Transfer Protocol): Allows uploading and downloading files between computers.
SMTP (Simple Mail Transfer Protocol): Used for sending emails.
TCP/IP (Transmission Control Protocol/Internet Protocol): Ensures data is broken into packets and delivered to the right destination over the internet.


## `HTTP`
================
A protocol used for communication between web browsers and servers over the Internet.
It defines how messages are formatted and transmitted and the actions that web servers and browsers should take in response to various commands.
Mthods :- Get ,  post , put , delete , patch 

Get :-  The GET method is used to request data from a specified resource.
Post :- The POST method is used to submit data to be processed to a specified resource.
Put :- The PUT method is used to update a resource or create a new resource if it does not exist.
Delete :- The DELETE method is used to request that a specified resource be removed or deleted.
Patch :- The PATCH method is used to apply partial modifications to a resource.


## `Server` 
===============
`Hardware Server`
----------------
A hardware server is a powerful computer or machine specifically designed to store, manage, and process data. It is built to handle multiple requests from clients over a network.

`Software Server`
----------------
A software server is a program or application that provides specific services to clients. It runs on a physical or virtual machine and listens for client requests to deliver the required data or service.

`Application Server`
-------------------
An application server is a platform or software framework that provides an environment for running specific applications and connecting them to databases, user interfaces, or other services.

`Client Server architechture`
------------------------------
The client computer makes an HTTP request to the server. The server analyzes the request, prepares a response, and sends it back to the client.

- For sending requests and responses, the communication uses the TCP/IP protocol.
- The data is sent in the form of packets, which are small chunks of the original data.
- Each packet has its own buffer to ensure it is received and reassembled in the correct order at both ends (client and server).
- The connection between the client and the server is established using a socket.
- the HTTP request is also sent as packets over the TCP/IP protocol.

Inside the hardware server we can create multiple server application which are listening, and the port number is that the thing is differencing these multiple servers

`DNS Server`
-------------
This is a server that converts the domain name in to ip address

`Proxy Server`
--------------



## `Socket` ##
===============



## `Web Socket` ##
=====================



## `API`
=============
An API (Application Programming Interface) is a way for one system to interact with another by using a set of defined rules. It allows clients (like web browsers or mobile apps) to communicate with a server to access its data or services.
Examples are  :- Web api, library api, os api

`REST api`
-------------
A RESTful API (Representational State Transfer API) is an architectural style for designing networked applications, particularly web services. It consists of a set of principles and constraints that, when followed, lead to the development of scalable, flexible, and maintainable APIs.


## `HTTP methods`
======================
GET	Retrieves data from the server.	Fetching a list of users or a specific user.
POST	Sends new data to the server to create a resource.	Creating a new user or submitting a form.
PUT	Updates an entire resource with new data.	Replacing a user's details entirely.
PATCH	Partially updates a resource with specific data.	Changing just a user's email address.
DELETE	Removes a resource from the server.	Deleting a user or removing a record.


## `TCP (Transmission Control Protocol)`
=============================================
Connection-oriented protocol (needs a connection before data transfer)
Ensures reliable, ordered, error-checked delivery
Slower but accurate
Used in: HTTP, HTTPS, FTP, Email (SMTP/IMAP/POP)


## `UDP (User Datagram Protocol)`
=====================================
Connectionless, fast, no guarantee of delivery or order


## `TCP/IP (Internet Protocol Suite)`
==========================================
Real-world networking modelPractical model used on the internet
Has 4 layers (sometimes seen as 5)
Protocol suite = TCP, UDP, IP, etc.
Lightweight, no acknowledgment
Used in: Streaming (video/audio), gaming, DNS, VoIP


## `OSI Model (Open Systems Interconnection)`
===============================================
Theoretical model, not used directly
Has 7 layers
Helps to understand and design network systems

| Layer # | Name             | Function                               | Example Protocols     |
| ------: | ---------------- | -------------------------------------- | --------------------- |
|       7 | **Application**  | User interface, app-level protocols    | HTTP, FTP, DNS, SMTP  |
|       6 | **Presentation** | Data translation, encryption, encoding | SSL, TLS, JPEG        |
|       5 | **Session**      | Session control (start/end sessions)   | NetBIOS, PPTP         |
|       4 | **Transport**    | Reliable/unreliable delivery (TCP/UDP) | TCP, UDP              |
|       3 | **Network**      | Routing, addressing                    | IP, ICMP, IGMP        |
|       2 | **Data Link**    | MAC addressing, error detection        | Ethernet, PPP, Switch |
|       1 | **Physical**     | Transmission over cables, signals      | Cables, NIC, Hubs     |


## `Throttling`
=================
 -> A technique to limit the number of times a function is executed within a given timeframe. 
Used to control traffic (e.g., user input or server load).
 

 ## ``Rate Limiting`
=====================
A technique to limit the number of requests a client can make to a server within a specific timeframe.
use of this is to prevent abuse, like spamming APIs.


## `Authentication`
==================
Authentication is the process of verifying the identity of a user or  an entity trying to access a system or resource.


## `Authorization`
====================
Authorization is the process of determining what actions or resources a user or entity is allowed to access within a system.


## `Axios`
==============
A promise-based HTTP client for the browser and Node.js used to make HTTP requests.
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

## `URI`
=========
A URI (Uniform Resource Identifier) is a string that uniquely identifies a resource on the Internet


## `URL`
========
A URL (Uniform Resource Locator) is a type of URI (Uniform Resource Identifier) that specifies the location of a resource on a network and how to retrieve it.


## `URN`
========
A URN (Uniform Resource Name) is a type of URI (Uniform Resource Identifier) that uniquely identifies a resource by name within a specific namespace, without providing information on how to locate or access it.


## `SSL`
=========
SSL (Secure Sockets Layer) is a cryptographic protocol designed to provide secure communication over a computer network. It was created to ensure the confidentiality and integrity of data transmitted between a client (e.g., a web browser) and a server.


## `TLS`
========
TLS (Transport Layer Security) is the successor to SSL (Secure Sockets Layer) and provides an updated, more secure version of the cryptographic protocol. TLS ensures the confidentiality and integrity of data transmitted between a client (e.g., a web browser) and a server, safeguarding the communication from potential threats.


## `CORS`
==============
Cross origin resource sharing
CORS is a security feature implemented by web browsers to control how web pages in one domain can request and interact with resources hosted on another domain.

first preflight request from client to server
then a optional acknowledgment from server to client

The preflight request is an OPTIONS request that includes information about the actual request the browser wants to make.


## `Status Codes`
==================
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