### What is `Emmet` ###
===========================
A: `Emmet` is the essential toolkit for web-developers. It allows you to `type shortcuts` that are then expanded into full pieces of code for writing `HTML and CSS`, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules.





### What is `CDN`? Why do we use it ###
============================================
A: A `content delivery network (CDN)` refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content.
The goal is to provide high availability and performance by distributing the service spatially relative to end users.

### `ADVANTAGES OF CDN` ###
================================
## Faster content delivery
Servers are distributed globally, so users receive content from the server closest to their location, reducing latency.

## Improved Website Performance
By caching content such as images, videos, CSS, and JavaScript files, CDNs reduce the load on the origin server, improving site load times.

## Reduced Bandwidth Costs
CDNs reduce the amount of data your origin server must provide, lowering bandwidth consumption and costs.
Scalability
CDNs can handle high traffic volumes by distributing requests across multiple servers, making it easier to scale for traffic spikes.

## Improved Availability and Redundancy
If one CDN server goes down, others can take over, reducing the risk of downtime.

## DDoS Protection
Many CDNs offer security features, such as Distributed Denial of Service (DDoS) attack mitigation, by distributing traffic and providing firewalls.

## Better SEO Rankings
Faster website performance can positively impact SEO rankings, as search engines like Google favor faster-loading sites.

## Global Reach
With servers distributed across different regions, a CDN allows businesses to serve global users more effectively.

### `DISADVANTAGES OF CDN` ###
==================================
## Cost  
While CDNs can save bandwidth costs, they come with additional service fees, which can be expensive for smaller websites or businesses.

## Caching Issues  
Sometimes, content updates may take longer to propagate across all CDN servers, resulting in users seeing outdated content.

## Complexity  
Configuring and managing a CDN can be complex, especially for small teams or websites with limited technical expertise.

## Limited Control  
Once content is distributed across a CDN’s servers, you have less control over how it is cached or served.

## Geographical Limitations  
Although CDNs have global reach, certain regions may still have fewer servers, potentially affecting performance for users in those areas.

## Data Privacy Concerns  
CDNs are third-party services, which means your data will pass through external servers, raising privacy concerns, especially for sensitive content.

## Potential Latency in Dynamic Content  
While CDNs excel with static content, dynamic content (like real-time data or personalized information) might not benefit as much, and in some cases, could introduce slight delays.





### What are `async and differ` attributes in `<script>` tag ###
======================================================================
A: `Async` - The async attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed as soon` as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.

### _Syntax_
------------
```js
<script async src="demo_async.js"></script>
```

`Defer` - The defer attribute is a `boolean attribute`. The script is downloaded in `parallel(in the background)` to parsing the page, and `executed after the page` has finished parsing(when browser finished DOM construction). The `defer attribute` tells the browser `not to wait for the script`. Instead, the browser will continue to process the HTML, build DOM.

### _Syntax_
-------------

```js
<script defer src="demo_defer.js"></script>
```





### Role of `type` attribute in script tag? What options can I use there
=============================================================================
A: The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.

## `type` attribute can be of the following types
--------------------------------------------------
- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
  ### Syntax
  ```
  <script type="text/javascript"></script>
  ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.



### Good Practice ###
======================
## Components Folder Naming
- The file name should exactly match the component name.
- The extension of the file can be `.js`, `.jsx`, or `.tsx` — the extension doesn't matter as long as it matches your setup.

## Util / Common Folder in `src`
- This folder can contain files like `constants.js`, which will store hardcoded data and export it for use across the project.

## Named Export
- Named exports are used when we want to export multiple items from a single file.
- If we export multiple items using a default export inside an object, it may prevent the bundler from optimizing the code.
- When importing a named export, you need to wrap the names inside curly braces.





### Config driven UI ###
=========================
A config-driven UI (User Interface) is a design approach where the layout, appearance, and behavior of the user interface are determined by configuration data rather than hard-coded components. This allows for greater flexibility and adaptability in the UI, enabling changes based on various factors such as user roles, locations, or application states.

# Key Points about Config Driven UI:
--------------------------------------
Data-Driven: The UI components are rendered based on data provided in configuration files or objects, allowing dynamic adjustments without altering the codebase.

Flexibility: Changes to the UI can be made by simply updating the configuration, enabling rapid iterations and easier maintenance.

Reusable Components: Common components can be reused across different configurations, promoting code reusability and consistency.

Location-Based Rendering: The UI can adapt based on user locations or preferences, displaying relevant information or features accordingly.





### `Rendering Approach` ###
===========================
## 1st Approach
---------------
- **Page loads** → API request is sent → Render the page with the API response.
- In this approach, the page will wait for the API response before rendering anything.

### Pros:
- Ensures that the data is already available when the page renders.
  
### Cons:
- Slower initial load time, as the page waits for the API response before rendering.

## 2nd Approach
---------------
- **Page loads** → Render the structure → API request is sent → Render again with the API response.
- In this approach, the page structure is rendered first, and once the API response is received, the data is loaded into the already rendered structure.

### Pros:
- Faster initial load as the basic structure is displayed first.
  
### Cons:
- May result in a flicker or empty placeholders while waiting for the API data to load.





### `Routing in Web Applications` ###
========================================
Routing is how users navigate between different pages or components in a web application. There are two main types of routing: **client-side routing** and **server-side routing**.

## Client-Side Routing
--------------------------
- **What it is**: Handles navigation in the browser without reloading the entire page.
- **How it works**: When you click a link, the current component is replaced with another component, making the transition smooth.
- **Benefits**:
  - Faster navigation since only parts of the page change.
  - Improved performance because the whole page doesn’t reload.
  - Better user experience with animations and transitions.

## Server-Side Routing
-------------------------
- **What it is**: The server manages navigation requests and sends back entire pages.
- **How it works**: Clicking a link sends a request to the server, which then returns a new HTML page, resulting in a full page reload.
- **Benefits**:
  - Better for SEO (search engines can easily crawl the whole page).
  - Good for traditional multi-page applications where each page is separate.

### Summary
- **Client-Side Routing**: Changes components without reloading, offering a dynamic experience.
- **Server-Side Routing**: Loads new pages from the server, causing full page reloads and potentially longer load times.



## `Linting Process` ##
========================
**Linting** is the process of analyzing code to identify potential errors, style violations, or code that doesn't follow best practices. 

#### Key Points:
- Ensures **consistent code style** across a project.
- Detects **syntax errors** and **unused variables** early.
- Helps improve **readability** and maintainability.
- Popular tools: **ESLint**, **Prettier**, **JSLint**.

Linting is often integrated with code editors or during the build process to ensure clean and error-free code.





## `Chunking / Code Splitting / Dynamic Bundling` ##
=====================================================
These techniques involve breaking large bundles of JavaScript code into smaller, manageable pieces that can be loaded on-demand.

#### Key Points:
- **Chunking**: Splitting the code into smaller parts (chunks) to load only what is needed.
- **Code Splitting**: Dividing the application into multiple bundles that can be loaded dynamically when required, improving load time.
- **Dynamic Bundling**: Adjusts the loading of code based on the user’s interaction, such as loading a page component only when accessed.

These strategies improve the **performance** of web applications by **reducing initial load times** and **enhancing user experience**.






### `onClick function in three types` ###
===========================================
# 1. `onClick = {handleAddItem}`
--------------------------------
This version passes the function reference to the onClick handler without invoking it immediately.
handleAddItem will only be executed when the button is clicked.
Use this when the function does not require parameters.

# 2. `onClick = {handleAddItem(item)}`
---------------------------------------
This version immediately invokes the handleAddItem function as soon as the component renders, not when the button is clicked.
The function runs during the rendering phase, which is usually unintended in an event handler.
This may lead to unexpected behavior.

# 3. `onClick = {() => handleAddItem(item)}`
--------------------------------------------
This version passes an arrow function that calls handleAddItem with the item argument when the button is clicked. 
The function is not invoked immediately.
It will only be called when the button is clicked.




### `Web socket` ###
======================
Web socket is a two way connection, it created a handshare between the ui and server, so that can send data by directional, there is no regular interval,
Iniital connection will take time, and also can send data whenever we want to send





### `Long polling / Api polling` ###
=========================================
In this the data connection is unidirectional and there will be a interval for checking the data, the data direction is from server to ui

like the data is updating in cric bus

like if we need to update data on each interval we can use api polling

Youtube is using API POLLING for the live chat





### `SOLID PRINCIPLES` ###
================================
The SOLID principles are five design principles that help developers create maintainable, scalable, and flexible software. They were introduced by Robert C. Martin (Uncle Bob) and are widely used in Object-Oriented Programming (OOP).

1️⃣ Single Responsibility Principle (SRP)
📌 A class should have only one reason to change.
Each class should only do one job to keep it focused and easy to maintain.

2️⃣ Open/Closed Principle (OCP)
📌 Software entities (classes, functions, modules) should be open for extension but closed for modification.
Instead of modifying existing code, we should extend it to add new features.

3️⃣ Liskov Substitution Principle (LSP)
📌 Subclasses should be substitutable for their base classes.
A derived class should work without breaking the functionality of the parent class.

4️⃣ Interface Segregation Principle (ISP)
📌 A class should not be forced to implement interfaces it does not use.
Instead of one large interface, split it into smaller, more specific ones.

5️⃣ Dependency Inversion Principle (DIP)
📌 High-level modules should not depend on low-level modules. Both should depend on abstractions.
Instead of directly using concrete implementations, use interfaces or abstractions to make the code more flexible.





### `MODELS` ###
==================

# 1.  `Waterfall` model
-------------------------------
Requirements
    Design
        Development
            Testing
                Deployment
                    Maintainance

`Requirement` :- This will be decided by the project manager and also takes helps with designers.
`Design`      :- Tech team like enior engineers and engineering manager defineing the architechture and discussing about the tech stack like all the things High  level design and Low level design. 
`Development` :- SDE1 and SDE2 developing the product or service
`Testing`     :- SDET team will test the product or service
`Deployment`  :- Devs / devops team  managing this thing
`Maintainance`:- Repeat these stages like the way





### `PATTERNS / ARCHITECHTURES` ###
====================================

# 1. `Monolith` Architecture
--------------------------------
In **Monolith Architecture**, the entire application is built as a single, unified unit. All components (like user interface, business logic, and data access) are interconnected and managed in a single codebase.

- **Tightly Coupled**: All parts of the system are tightly connected, making the entire system dependent on each component.
- **Deployment**: The application is deployed as a single unit. If any part of the application is updated, the entire application needs to be redeployed.
- **Scalability**: Scaling a monolith often requires scaling the entire application, even if only one part needs more resources.

One big repo for the whole project and all the services are in that and so many developers are working on that single big project

`Dev speed` - slower
`Code repo` - single
`Scalability` - tough to scale, because scaling a repo which have million lines of code is very hetic
`Deployment` - Single deployment
`Tech stack` - single tech stack
`Infra const` - easier infra cost
`Complexity` - complexity will be heigher
`Fault isolation` - small error will crash thw whole project
`Testing` - easy to write test case, end to end test case
`Ownership` - central ownership
`Maintainance` - tough
`Rewamps` - tough
`Debugging` - slightly easier


# 2. `Microservice` Architecture
----------------------------------
**Microservice Architecture** is an architectural style where an application is composed of small, loosely coupled services. Each service is responsible for a specific functionality and operates independently.

### Key Principles:
- **Separation of Concerns**: Each microservice is responsible for a distinct functionality and operates independently of the others.
- **Single Responsibility Principle**: Each microservice should focus on one specific task or business function, improving modularity and allowing easier updates.

### Deployment:
- Microservices are typically deployed independently and run on different ports or servers.
- Each service can be scaled independently, offering more flexibility and efficient use of resources.

For a big project split in to small small projects that handles only one single job and then connecting these services to work together.

`Dev speed` - faster
`Code repo` - multiple
`Scalability` - easy to scale because of the different repos
`Deployment` - Multiple deployment
`Tech stack` - multiple tech stack can be used for different services that are siutable for that particular service
`Infra cost` - Slightly heigher
`Complexity` - easy complexity
`Fault isolation` - error will be only effect that specific service
`Testing` - tough to write test case for end to end
`Ownership` - small team for respective services
`Maintainance` - easy
`Rewamps` - easy
`Debugging` - tough


# 3. `Clean` Architechture
--------------------------
Clean Architecture is a way of organizing code so that core business logic is independent of external systems like databases, UI, or frameworks.

Think of it like a layered onion:

1️⃣ Core Business Rules (Entities) – The heart of the system, defining core logic and rules.
2️⃣ Application Logic (Use Cases) – What the app does (e.g., "process order," "apply discount").
3️⃣ Interface Adapters – Bridges between business logic and external systems (e.g., controllers, API handlers).
4️⃣ External Systems – Things like databases, UI, and frameworks (React, MongoDB, etc.).

🛠 Key Idea: The inner layers don’t depend on the outer layers. This makes the system more scalable, maintainable, and testable.

layers are : -

`Domain layer` 
The core layer of the application that contains the business logic, entities, and business rules
Also known as the entities layer, it governs the core concepts and behavior of the domain

`Application layer`
Contains application-specific logic that controls the flow of data to and from business entities 
Orchestrates how the domain objects are used to perform specific tasks 
Handles interactions with external systems through interfaces defined in the domain layer 

`Infrastructure layer`
Contains the implementation of the infrastructure and services that the other layers depend on 
The Repository design pattern is a crucial design pattern in this layer 

`Presentation layer `
Contains the user interface or web API


# 4. `Unit Of Work`
---------------------
The Unit of Work (UoW) pattern is a design pattern used to manage transactions and maintain consistency when working with multiple operations in a database. It ensures that all changes (like inserts, updates, and deletes) are applied as a single transaction.

 Why Use Unit of Work?
✅ Prevents inconsistent data – Ensures all database operations are committed together.
✅ Reduces database calls – Groups multiple operations into a single transaction.
✅ Simplifies rollback handling – If one operation fails, all changes can be undone.
✅ Improves performance – Minimizes the number of database commits.

🔹 How It Works?
1️⃣ Begins a transaction
2️⃣ Tracks changes (insert, update, delete)
3️⃣ Commits all changes together if everything is successful
4️⃣ Rolls back if any error occurs