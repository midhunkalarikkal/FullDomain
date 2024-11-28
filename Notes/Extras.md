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









## Code Splitting with Dynamic Import
--------------------------------------
You can use dynamic routing along with code-splitting techniques to load only the necessary components for each route dynamically.

const ProductPage = React.lazy(() => import('./ProductPage'));





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




### Monolith Architecture ###
==============================
In **Monolith Architecture**, the entire application is built as a single, unified unit. All components (like user interface, business logic, and data access) are interconnected and managed in a single codebase.

- **Tightly Coupled**: All parts of the system are tightly connected, making the entire system dependent on each component.
- **Deployment**: The application is deployed as a single unit. If any part of the application is updated, the entire application needs to be redeployed.
- **Scalability**: Scaling a monolith often requires scaling the entire application, even if only one part needs more resources.

---

### Microservice Architecture ###
=================================
**Microservice Architecture** is an architectural style where an application is composed of small, loosely coupled services. Each service is responsible for a specific functionality and operates independently.

### Key Principles:
- **Separation of Concerns**: Each microservice is responsible for a distinct functionality and operates independently of the others.
- **Single Responsibility Principle**: Each microservice should focus on one specific task or business function, improving modularity and allowing easier updates.

### Deployment:
- Microservices are typically deployed independently and run on different ports or servers.
- Each service can be scaled independently, offering more flexibility and efficient use of resources.




### Rendering Approach ###
===========================

## 1st Approach
---------------
- **Page loads** → API request is sent → Render the page with the API response.
- In this approach, the page will wait for the API response before rendering anything.

### Pros:
- Ensures that the data is already available when the page renders.
  
### Cons:
- Slower initial load time, as the page waits for the API response before rendering.

---

## 2nd Approach
---------------
- **Page loads** → Render the structure → API request is sent → Render again with the API response.
- In this approach, the page structure is rendered first, and once the API response is received, the data is loaded into the already rendered structure.

### Pros:
- Faster initial load as the basic structure is displayed first.
  
### Cons:
- May result in a flicker or empty placeholders while waiting for the API data to load.




### Routing in Web Applications
===============================

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




### Single Responsibility Principle (SRP)
==========================================
The **Single Responsibility Principle (SRP)** is one of the five SOLID principles of object-oriented design. It states:

**A class or component should have only one reason to change.**

#### What it means:
- Each class, function, or module should focus on a single responsibility or task.
- If a class or function handles multiple responsibilities, it becomes harder to maintain and update.

#### Benefits:
- **Easier maintenance**: Changes in one area won’t affect unrelated functionality.
- **Improved readability**: Code is more organized and easier to understand.
- **Better reusability**: Components are focused and can be reused more easily.

#### Example:
If a component is responsible for both **fetching data** and **rendering UI**, it violates SRP. Instead, split the logic:
- One function handles **data fetching**.
- Another function or component manages **UI rendering**.

The Single Responsibility Principle helps keep code **clean**, **modular**, and **scalable**.





### Linting Process
=====================
**Linting** is the process of analyzing code to identify potential errors, style violations, or code that doesn't follow best practices. 

#### Key Points:
- Ensures **consistent code style** across a project.
- Detects **syntax errors** and **unused variables** early.
- Helps improve **readability** and maintainability.
- Popular tools: **ESLint**, **Prettier**, **JSLint**.

Linting is often integrated with code editors or during the build process to ensure clean and error-free code.

---

### Chunking / Code Splitting / Dynamic Bundling
================================================
These techniques involve breaking large bundles of JavaScript code into smaller, manageable pieces that can be loaded on-demand.

#### Key Points:
- **Chunking**: Splitting the code into smaller parts (chunks) to load only what is needed.
- **Code Splitting**: Dividing the application into multiple bundles that can be loaded dynamically when required, improving load time.
- **Dynamic Bundling**: Adjusts the loading of code based on the user’s interaction, such as loading a page component only when accessed.

These strategies improve the **performance** of web applications by **reducing initial load times** and **enhancing user experience**.



## onClick function
=====================

onClick = {handleAddItem}
--------------------------
This version passes the function reference to the onClick handler without invoking it immediately.
handleAddItem will only be executed when the button is clicked.
Use this when the function does not require parameters.

onClick = {handleAddItem(item)}
--------------------------------
This version immediately invokes the handleAddItem function as soon as the component renders, not when the button is clicked.
The function runs during the rendering phase, which is usually unintended in an event handler.
This may lead to unexpected behavior.

onClick = {() => handleAddItem(item)}
-------------------------------------
This version passes an arrow function that calls handleAddItem with the item argument when the button is clicked. 
The function is not invoked immediately.
It will only be called when the button is clicked.