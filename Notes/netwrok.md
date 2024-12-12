## `WEB` ##
===========
The web is like a giant network where every device (node) is connected through unique IP addresses. These IP addresses allow devices to find and communicate with each other, forming a web-like structure.

## `Protocols` ##
=================
Protocols are rules that define how data is sent and received over the internet. Here are some key ones:

HTTP (Hypertext Transfer Protocol): Used for accessing and sharing web pages on the internet.
FTP (File Transfer Protocol): Allows uploading and downloading files between computers.
SMTP (Simple Mail Transfer Protocol): Used for sending emails.
TCP/IP (Transmission Control Protocol/Internet Protocol): Ensures data is broken into packets and delivered to the right destination over the internet.

## `Server` ##
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

## `API` ##
=============
An API (Application Programming Interface) allows different software applications to communicate and exchange data with each other.

`REST api`
-------------
A REST (Representational State Transfer) API is a web service that follows principles for creating scalable, stateless, and resource-based interactions over the web using HTTP methods.

## `HTTP methods` ##
======================
GET	Retrieves data from the server.	Fetching a list of users or a specific user.
POST	Sends new data to the server to create a resource.	Creating a new user or submitting a form.
PUT	Updates an entire resource with new data.	Replacing a user's details entirely.
PATCH	Partially updates a resource with specific data.	Changing just a user's email address.
DELETE	Removes a resource from the server.	Deleting a user or removing a record.

## `Authentication` ##
========================
Once a use login the server will create a jwt token and wrap inside a cookie and send baxk to client then the client browser will store it and whenever a request go to the server the cookie will send alogn with that request and then validate that token and if the token is valid then only the next thing will work otherwise redirect to.

JWT stands for `JSON web token` and it have header, payload and signature.