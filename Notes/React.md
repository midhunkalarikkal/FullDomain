"DEVELOPERS CODE FASTER TAKE TOO MUCH TIME FOR DEBUGGING THE DEVS CODES SLOW EVEN DONT NEED TO DEBUG"

# `REACT` 
==========
React is a JavaScript library for building user interfaces (UIs), especially for single-page applications (SPAs).

##  Why is `React known as React`
------------------------------------
It's called `React` because it `reacts`. It was developed by Facebook to improve the user interface to effectively change (REACT to) what the user sees when they're doing things like mouse clicking, submitting and typing.





## `FRAMEWORK`
===============
A framework provides a structure and rules — it calls your code instead.
The framework is in control.
You fill in parts of it (hooks, lifecycle, routing).
It decides the flow and architecture of the application.





## `LIBRARY`
============
A library is a collection of pre-written code that you call to help with tasks.
You are in control of the application flow.
You pick when and how to use the library.





## `CDN LINKS FOR REACT`
=========================
"Using React via CDN is not an ideal approach for larger applications because multiple network calls may occur, which can impact performance. Additionally, we'll need to manually update the URL whenever a new version of React is released."

### How CDN Links for React Work
CDNs host popular libraries like React. When we include a React CDN link in our HTML file, the React JavaScript files (either the development or production version) are fetched from the CDN's global servers.

### Loading React via URL ###
we include the CDN links in the `<script>` tag in our HTML file, and the browser fetches the library from the closest CDN server, improving load time.





##  `What These Links Do`
=========================
### React and ReactDOM Inclusion
-------------------------------
- React CDN links include both React and ReactDOM.
- `react.development.js` or `react.production.min.js`: This is the React library.
- `react-dom.development.js` or `react-dom.production.min.js`: This is ReactDOM library, which is responsible for rendering the React components into the DOM.

`React`
A JavaScript library for building user interfaces.
Provides methods like`React.createElement()`, `React.Component`, `React.Children`
Contains core features like components, hooks, state, and lifecycle methods.
Focuses on how the UI should look and behave.
  Creating the Virtual DOM and comparing old and new virtual dom.
  Handling updates.
  Managing the component lifecycle.

`ReactDOM`
A package that connects React to the browser DOM.
Provides methods like `ReactDOM.createRoot()` and `ReactDOM.render()` to render the React components to the actual webpage.
  Rendering React elements to the actual browser DOM.
  Handling browser-specific tasks like mounting components.

`Development vs Production`
-----------------------------
- **Development version** (`development.js`): Includes helpful warnings and detailed error messages for developers.
- **Production version** (`production.min.js`): Optimized and minified, with debugging features removed for better performance in production.

`Development build` is several times (maybe 3-5x) `slower` than the `production build`.

`CORS (Cross-Origin Resource Sharing) in script tag`
----------------------------------------------------
The `crossorigin` attribute is used to handle CORS (Cross-Origin Resource Sharing) when loading scripts (like React or ReactDOM) from a CDN (different domain).

It tells the browser how to treat the request when fetching the script from another origin.

`Common values`
"anonymous" – No credentials (cookies, HTTP auth) sent.
"use-credentials" – Credentials are sent with the request.

`CORS` is a security feature implemented by web browsers to restrict web pages from making requests to a domain different from the one that served the web page.

React and ReactDOM CDNs are hosted on different origins (e.g., unpkg.com).
crossorigin ensures safe, controlled resource sharing.
Helps prevent errors or security warnings during resource loading.

`Avoiding Local Setup`
------------------------
- CDN links help you skip setting up a local environment (like Node.js), useful for small applications, demos, or prototypes.

`Advantages of Using React CDN Link`
-------------------------------------
- Faster Load Times
- Reduced Server Load
- Shared Caching
- Quick Prototyping

`Disadvantages of Using React CDN Link`
----------------------------------------
- No Local Development Environment
- Manual Version Management
- Limited Flexibility





## `Difference Between Actual DOM and Virtual DOM`
==================================================
`Actual DOM`
-------------
- The Actual DOM is the real representation of the UI components in a web application.
- Updating the Actual DOM is slow because it involves complex operations that require recalculating styles and re-rendering elements.
- Any change in the Actual DOM triggers a complete re-render of the entire UI, which can lead to performance issues.

`Virtual DOM`
--------------
- The Virtual DOM is an in-memory and light weight representation of the Actual DOM creating by react.
- Updating the Virtual DOM is faster because it minimizes direct interactions with the Actual DOM.
- When changes occur in react code, React create a new Virtual DOM using object tree data structure.

# Example
```js
const App = () => {
  return (
    <div className="container">
      <h1>Hello, Midhun!</h1>
      <p>Welcome to React.</p>
    </div>
  );
};
//  For this react code this will be the virtual dom representation
const virtualDOM = {
  type: 'div',
  props: {
    className: 'container',
    children: [
      {
        type: 'h1',
        props: {
          children: 'Hello, Midhun!'
        }
      },
      {
        type: 'p',
        props: {
          children: 'Welcome to React.'
        }
      }
    ]
  }
};
```





## `Difference Between Single Page and Multi Page Application`
===============================================================
`Single Page Application (SPA)`
--------------------------------
- An SPA loads a single HTML page from the server once, and then dynamically updates the page in the browser as the user interacts — without reloading the whole page.
- SPAs offer a smooth user experience with faster load times after the initial load.
- After the inital load only the data is tranfered between the server and client
- Uses client-side routing.
- Examples are Gmail, Facebook, X, Github

`Multi Page Application (MPA)`
-------------------------------
- An MPA consists of multiple HTML pages, each linked to different URLs. Each page reloads the entire application.
- Each link in the application leads to a different HTML page, causing the browser to request a new page from the server.
- PHP, Django, .Net
- Examples are Amzon, Wikipedia Banking portals etc





## `CSR` vs `SSR` vs `SSG` ##
=============================
`Client-Side Rendering (CSR)`
------------------------------
- In CSR, the rendering of the web application occurs in the browser, using JavaScript to fetch and display data.
- Initial loading can be slower since the browser must download the entire JavaScript bundle before rendering.
- SEO can be challenging as search engines may have difficulty in indexing content that is rendered client-side.
- Offers a more dynamic and interactive user experience after the initial load.

`Server-Side Rendering (SSR)`
------------------------------
- In SSR, the server renders the web application, generating HTML content on each request and sending it to the browser.
- The initial loading is faster as users receive a fully rendered page from the server.
- Better for SEO, as search engines can easily crawl and index the content.
- Can lead to a less interactive experience after initial load since subsequent navigation may require re-fetching from the server.

`Static Site Generation (SSG)`
-------------------------------
It’s a method where our HTML pages are generated at build time (not runtime) and saved as ready-to-serve static files.
When we build our website using for example Next.js
  - Fetches our data
  - Generate full HTML page
  - Save them as .html file





## `Static` vs `Dynamic` Rendering
==================================
`Static Rendering`
--------------------
- It involves generating the HTML web page at build time. This means that the content is fixed and does not change based on user interactions.
  - Pages are pre-rendered, so they load quickly.
  - Ideal for content that doesn’t change frequently, such as blogs or marketing sites.

`Dynamic Rendering`
------------------
- It generates the HTML web page on the real time, often based on user interaction, server data, or API calls. This means the content can change based on various factors, such as user input or current state.
  - Suitable for applications with frequently changing data.
  - May require more server resources, as content is generated with each request.





## `SEO`
=========
SEO stands for Search Engine Optimization.
It helps our website rank higher in Google and other search engines so more people can discover our content.

`Why SEO is Hard with Client-Side Rendering (like React)?`
In Client-Side Rendering (CSR):
  - Our browser downloads a blank HTML file.
  - Then React loads with JavaScript.
  - After that, it builds the UI in the browser (this is called rendering).
  - So initially, the HTML has no real content, only an empty div like the `root` div
  - Search engine bots (like Google’s crawler) often scan the initial HTML to decide what our page is about.

`Why Server-Side Rendering (SSR) Helps SEO`
In Server-Side Rendering, like in Next.js or EJS:
  - The server builds the entire HTML page — including our content.
  - Then it sends the complete HTML to the browser (and also to search engine bots).
  - So when the bot comes to crawl our page, it sees the content





## `ISR` (Incremental Static Regeneration)
===========================================
- ISR is a feature used in frameworks like Next.js that allows you to update static content incrementally without needing to rebuild the entire site.
- Combines the benefits of static and dynamic rendering.
- Enables faster page loads while keeping content fresh.
- Pages can be statically generated and updated on demand, making it ideal for sites with frequently changing data.

`How React sites still do SEO?`
Even if we are using React, there are ways to improve SEO:
  - Use React Helmet or <Head> to set <title>, <meta>, etc.
  - Use tools like Google Search Console to check how Google views our site.





## Why React is `Fast`
=======================
`Reconciliation`
-----------------
When there are changes in the application React uses reconciliation to figure out the minimal number of updates needed to update the actual DOM.
- React compares the old virtual DOM and the new virtual DOM using a **Diff Algorithm** and find the minimal update and then update the actual DOM

`React Fiber`
--------------
React Fiber is the new reconciliation engine introduced in React 16. It’s designed to enable incremental rendering, meaning React can split the work of updating the UI into smaller tasks. This allows React to pause, prioritize, or stop work, making it more responsive during complex updates or when the user interacts with the application.`

`Diff Algorithm`
------------------
The **Diff Algorithm** is used by React to efficiently compare the old virtual DOM with the new virtual dom. Instead of comparing every single element, the diff algorithm identifies only the parts of the virtual DOM tree that have changed. These minimal changes are then applied to the actual DOM, reducing the performance impact of re-rendering.

`Hydration`
-------------
Hydration is the process where React attaches event listeners and makes the page interactive on the client side using the already-rendered HTML.

`Concurrent Mode`
------------------
Concurrent Mode is an advanced feature in React that allows React to interrupt and pause rendering so it can work on multiple tasks at the same time.

`useTransition`
----------------
useTransition is a React Hook that is used to mark certain state updates as non-urgent, so React can prioritize important UI updates.

`VirtualDom`
--------------
`Memoization`
---------------
`Lazy Loading`
---------------
`Code Splitting`
-----------------
`Avoiding Unnecessary rerender`
--------------------------------
`Event Deligation Synthetic events`
------------------------------------
`Batching Updates`
-------------------





## `HOW REACT WORKS`?
======================
`Component-Based Architecture`
-------------------------------
- React applications are built using reusable and independent components.
- Each component returns a piece of UI (usually HTML via JSX).
- Promotes modular and maintainable code.

`JSX (JavaScript XML)`
----------------------
- JSX allows writing HTML-like code in JavaScript.
- Makes UI creation easier and more readable.
- JSX is compiled to `React.createElement()` calls internally.
```js
const element = React.createElement('h1', null, 'Hello, React!');
```
'h1' → the type of HTML tag or component
null → the props (none in this case)
'Hello, React!' → the inner content (children)

`Unidirectional Data Flow`
----------------------------
- Data flows in one direction: from parent to child via props.

`State and Props`
------------------
- **State**: Components maintain internal data called state, which can change over time. When the state changes, the component re-renders to reflect the new data.
  
- **Props**: Short for "properties," props pass data from parent to child component. They are read-only and cannot be modified by the child component.





## `React 19 hooks
===================
1. `useActionState`
  Simplifies managing asynchronous form submissions by handling form state, validation, and error messages. It provides a pending state to indicate ongoing operations.
  ```js
  const [state, action, isPending] = useActionState(actionFunction, initialState);
  ```

2. `useFormStatus`
  gives us the status of a form submission
 ```js
const { pending, data, method, action } = useFormStatus();
```

3. `useOptimistic`
  Lets us optimistically update the UI before the server responds, creating a fast and responsive user experience.
```js
const [optimisticState, addOptimistic] = useOptimistic( actualState, (prevState, newData=> {});
```

4. `use`
  A new API that allows reading the value of a Promise or Context directly within a component.

`Main Update`
  Automatic Memoization
  Simplified Ref Handling

`Deprecated APIs Removed:`
propTypes and defaultProps for function components have been removed. Developers are encouraged to use TypeScript or default parameters instead.





## ADVANTAGES OF `REACT`
========================
`Component-Based Architecture`
-------------------------------
`Virtual DOM for Performance`
------------------------------
`JSX for Readability`
-----------------------
`One-Way Data Binding`
------------------------
`Rich Ecosystem`
-----------------
- React has a large community with many libraries, tools, and frameworks (like Next.js) that enhance its functionality, speeding up development.

`React Developer Tools`
------------------------
- Official Chrome and Firefox extensions assist in debugging React applications, providing insights into component hierarchies and states.

`React Native`
----------------
`SEO-Friendly (with SSR)`
--------------------------
- Server-side rendering (using tools like Next.js) improves SEO for React apps by rendering content on the server rather than just on the client side.





## DISADVANTAGES OF `REACT`
============================
`Rapidly Changing`
------------------
`Learning Curve`
-----------------
`JSX Syntax`
-------------
`Poor Documentation of External Libraries`
-------------------------------------------
`Not a Full Framework`
------------------------
- React is a library, not a full framework, so we need additional libraries for routing, form handling, and global state management (e.g., React Router, Redux).

`SEO Challenges (without SSR)`
------------------------------
- Fully client-rendered React apps can struggle with SEO, as search engines may have difficulty crawling JavaScript-heavy pages without server-side rendering.

`Heavy Initial Setup`
---------------------
- The initial setup with build tools (Webpack, Babel, etc.) can be overwhelming for beginners, although tools like create-react-app simplify this.

`State Management Complexity`
------------------------------
- Managing global state in large applications can become complex, requiring libraries like Redux, which adds to the learning curve.





## `REACT` ELEMENT
===================
A React element is a plain JavaScript object that represents a part of the user interface (UI). It describes what should appear on the screen.

`CLONE` element
---------------
cloneElement is a function provided by the React library that allows you to clone a React element and modify its props or children before rendering it.
```js
React.cloneElement(element, [props], [...children])
```





## `RENDER METHOD`
==================
The `ReactDOM.render()` method is responsible for rendering React elements into the actual browser DOM. It takes React elements (which are JavaScript objects) and translates them into HTML elements that the browser can understand.
```js
// Get the DOM element to mount on
const container = document.getElementById('root');
// Create a root using the new API
const root = ReactDOM.createRoot(container);
// Render the React app
root.render(<App />);
```





## `NPX`
=========
`npx` stands for `Node Package eXecute`. It is simply a `npm` package runner. It allows developers to execute any Javascript Package available on the npm registry without even installing it. npx is installed automatically with npm version 5.2.

Example: npx parcel index.html
This command runs Parcel with `index.html` as the entry point.





## `NPM`
=========
`npm` is the world's largest Software Registry. The registry contains over 800,000 code packages. Open-source developers use `npm` to share software.
- `npm` is the package registry for javascript. It was created in 2009 as an open source project to help JavaScript developers easily share packaged modules of code.
- `npm` alternative is `yarn`

`How to initialize npm`
-----------------------
npm init

`npm init -y` can be used to skip the setup step, `npm` takes care of it and creates the `package.json` file automatically , but without configurations.

- `npm` is the command line client that allows developers to install and publish those packages.





## `NODE MODULE FOLDER`
========================
The `node_modules` folder contains generated code. This is not code you've written and you should never make any updates to the files inside Node modules because there's a pretty good chance they'll get overwritten next time you install some modules.

It is better to not commit the `node_modules` folder, and instead add it to your `.gitignore` file.

Here are all the reasons why you shouldn't commit it: The node_modules folder has a massive size (up to Gigabytes). It is easy to recreate the node_modules folder via packages.json

- **Transitive Dependencies**  
  Packages can rely on other packages, which may also have their own dependencies. This nested relationship is known as transitive dependency.





## `PACKAGE.JSON`
===================
`package.json` is a configuration file that provides key details about our project, including its metadata, dependencies, and scripts for tasks like building or testing. It helps npm manage package installations and tracks the setup for our project.

# What is `browserlists` in package.json
------------------------------------------
Browserslist defines and shares the list of target browsers between various frontend build tools.





## `PACKAGE-LOCK.JSON`
========================
`package-lock.json` is generated by npm to lock the exact versions of installed dependencies, ensuring that every installation uses the same versions, even if the original packages are updated. This consistency helps prevent unexpected issues across different environments.

- **Integrity**  
  This field contains a hash value that ensures the downloaded package content hasn't been tampered with, offering security against malicious changes.

- **Dev**  
  The `dev`field indicates whether a package is a development dependency (used during development) or a regular one.

- **Resolved**  
  The `resolved`field shows the exact URL from which the package was downloaded.

- **version in 3 numbers**
  first number is the `major` version [ internally changing something, so the library need to update ]
  second number is the `minor` version [ a small featue updation, backward compatable it means we can still use the older version]
  third number is the `patch` version [ like a small change, bug fix ]

`DEPENDENCIES`
------------------
Dependencies are external libraries or packages that our project requires for specific features. There are two types:
- **Dev dependencies**: Needed only during development (e.g., testing, build tools).
- **Regular dependencies**: Needed in production (e.g., the main library or framework).

Symbols in dependency versions:
- **Caret `^`**: Automatically updates to a new **minor version** (e.g., from 2.1.0 to 2.2.x).
- **Tilde `~`**: Automatically updates to a new **patch version** (e.g., from 2.1.0 to 2.1.x).
- **No symbol**: Locks the version to the current one.





## `BUNDLERS`
=============
Bundlers are tools that combine all the files and dependencies in our project into a single (or a few smaller) bundle(s). This improves loading performance by reducing the number of HTTP requests and minimizing file sizes
- **Minification** (removing unnecessary characters or whitespace).
- **Code splitting** (splitting the code into chunks to load them as needed).

Example: **Create React App** uses `Webpack` as its default bundler.
**Vite** uses `esbuild` as the development bundler it is super fast because it’s written in Go. `Rollup` as the production bundler and it provides excellent tree-shaking and optimized output for production.

`Parcel`
Parcel is a fast, zero-config bundler used in frontend development to handle JavaScript, TypeScript, CSS, HTML, and other assets.

### **Features**  
- **Fast Dev Build**: Quick build process for development.  
- **Local Server**: Runs a development server locally.  
- **HMR (Hot Module Replacement)**: Automatically updates modules without full-page refresh.  
- **Image Optimization**: Compresses images for faster loading.  
- **Minification & Compression**: Reduces file size for better performance.  
- **Tree Shaking**: Eliminates unused code to reduce bundle size.  
- **Differential Bundling**: Generates optimized bundles for both modern and older browsers.  
- **HTTPS Support**: Enables secure development environments.  
- **Code Splitting**: Loads only necessary parts of the code, improving load times.  
- **File Watching Algorithm**: Written in C++ for efficiency.  
- **Caching**: Speeds up builds by reusing previously generated files.  
- **Consistent Hashing**: Ensures unique and stable file names across builds.  
- **Diagnostic & Error Handling**: Provides meaningful errors and diagnostics.  
- **Separate Dev and Prod Bundles**: Optimizes the build differently for development and production environments.  

`installation commands`
-----------------------
- Install:

npm install -D parcel

`-D` is used for development and as a development dependency.

- Parcel Commands :
  - For development build:
  ```
  npx parcel <entry_point>
  ```
  - For production build :
  ```
  npx parcel build <entry_point>

`Transpilation Process`
-----------------------
Tools like Parcel or other bundlers manage the transpilation process for JSX. They use Babel behind the scenes to transform JSX into JavaScript code.

`Babel`
-------
**Babel** is a JavaScript compiler that transpiles JSX into React elements and also converts newer ES versions to older versions for compatibility with older browsers.

`What is .parcel-cache folder`
------------------------------
`cache folder` (or `.parcel-cache in parcel v2`) stores information about our project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

`What is the dist folder`
--------------------------
The `/dist` stands for distributable. The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production of web applications.

Parcel's default directory for our output is named dist . The --dist-dir public tag defines the output folder for our production files and is named public to avoid confusion with the dist default directory.

`Logical Bundling -> Good for Performance`
------------------------------------------
Logical bundling refers to bundling the code by organizing it into different bundles, each containing a **single, full feature**.  
- Improves performance by **loading only what is required**.
- Helps maintain **modular code structure**.
- Reduces the initial load time by avoiding unnecessary bundles.

`Module Dependency Tree`
------------------------
Represents how different modules in a project depend on each other.
Helps the bundler to know which files need to be included and in what order.

`Compiling`
-----------
The process of converting code (e.g., from JSX or TypeScript) into browser-compatible JavaScript.

`Loader`
--------
Special plugins used by bundlers to transform files





## `Rendering Steps`
=======================
React follows specific steps during the rendering process to efficiently update the UI. 

1. Triggering
--------------
An event or state change, or props update that is what is a trigger.

2. Rendering
------------
React calls the render function to generate a virtual DOM based on the component's current state and props.
This phase doesn't interact with the actual DOM, only virtual DOM trees are prepared.

3. Reconciliation
------------------
The new virtual DOM is compared to the previos virtual DOM (using diff algorithm) to determine the minimal set of changes.

4. Committing
--------------
React updates the actual DOM based on the difference.

5. Rerendering
--------------
If an event occure or state or props change again, React triggers another render to reflect the updated data.

6. Batching Updates
-------------------
React batches multiple state or prop updates to avoid unnecessary renders.





## `JSX` 
===========
JSX (JavaScript XML) is a syntax extension for JavaScript. It allows us to write HTML-like code within JavaScript, making React components more readable and maintainable. Write both logic and UI markup in a single file, improving maintainability and debugging.

### Benifits of `JSX`.
------------------------
Improved Readability: Helps structure UI components more intuitively within JavaScript.
Easier Debugging: Combining logic and markup in one place makes it easier to debug.
Code Maintainability: Writing everything in one place ensures that UI changes are straightforward.

## `Rules` of JSX  
------------------
1. All JSX must be wrapped inside a single parent element, such as a `<div>` or `<React.Fragment>`.  

   - **Example:**  
     ```jsx
     return (
       <div>
         <h1>Hello</h1>
         <p>World</p>
       </div>
     );
     ```

2. Every tag in JSX must be self-closing or have an explicit closing tag.
   - **Correct:** `<img src="image.png" />`
   - **Incorrect:** `<img src="image.png">`

3. **Use `className` Instead of `class`:**  
-------------------------------------------
   - Since `class` is a reserved keyword in JavaScript, JSX uses `className` for CSS classes.

   - **Example:**  
     ```jsx
     <div className="container">Hello</div>
     ```

4. **JavaScript Expressions inside JSX:**  
------------------------------------------
   - We can embed JavaScript expressions inside JSX using curly braces `{}`.

   - **Example:**  
     ```jsx
     const name = "John";
     return <h1>Hello, {name}!</h1>;
     ```

5. **Use `camelCase` for HTML Attributes:**  
--------------------------------------------
   - In JSX, HTML attributes follow camelCase naming conventions (e.g., `onClick` instead of `onclick`).

   - **Example:**  
     ```jsx
     <button onClick={handleClick}>Click Me</button>
     ```

6. **JSX Elements Must Be Properly Indented and Structured:**  
--------------------------------------------------------------
   - Proper formatting and indentation improve readability.
7. **Fragments to Avoid Extra Nodes:**  
----------------------------------------
   - Use `<React.Fragment>` or shorthand `<>` to group elements without adding unnecessary nodes to the DOM.

   - **Example:**  
     ```jsx
     return (
       <>
         <h1>Title</h1>
         <p>Paragraph</p>
       </>
     );
     ```

8. **JSX Prevents Injection Attacks:**  
---------------------------------------
  - In React, JSX automatically escapes any values you insert into the UI (like variables).
  - This means if someone tries to add harmful code like a `<script>` tag React will not run it as code, but instead show it as plain text.
  - This helps keep our app safe from XSS (Cross-Site Scripting) attacks.

9. **Comments in JSX:**  
--------------------------
   - Comments in JSX must be wrapped inside curly braces `{}`.
   
   - **Example:**  
     ```jsx
     return (
       <div>
         {/* This is a comment */}
         <h1>Hello World</h1>
       </div>
     );
     ```

10. **Conditional Rendering**  
------------------------------
`Ternary Operator`
- You can use JavaScript ternary operators for conditional rendering.
```jsx
{isLoggedIn ? <h1>Welcome Back</h1> : <h1>Please Log In</h1>}
```

`if-else Statements (outside JSX)`
```js
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in</h1>;
  }
}
```
`&& Operator`
- Used when there's only one thing to render if the condition is true, and nothing otherwise.
```js
function Dashboard({ hasAccess }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {hasAccess && <p>You have full access.</p>}
    </div>
  );
}
```
`|| Operator`
- Used to provide a default value when the left-hand side is falsy.
```js
function Profile({ username }) {
  return <h2>{username || "Guest"}</h2>;
}
```
`return null to Render Nothing`
- If you want a component to render nothing, return null.
```js
function Notification({ show }) {
  if (!show) return null;
  return <p>You have new notifications!</p>;
}
```
`Using Immediately Invoked Function Expression (IIFE)`
```js
function Status({ status }) {
  return (
    <div>
      {(() => {
        if (status === "loading") return <p>Loading...</p>;
        if (status === "error") return <p>Error occurred</p>;
        return <p>Loaded successfully</p>;
      })()}
    </div>
  );
}
```

`JSX vs HTML` 
-----------------
`JSX`
-------
- **Definition**: JSX is a syntax extension for JavaScript, allowing you to write HTML-like code within JavaScript files.
- **Functionality**: Allows embedding JavaScript expressions within braces `{}`.
- **Usage**: Used primarily with React to describe the UI components.
- **Transpilation**: Needs to be transpiled to JavaScript (using tools like Babel) to run in the browser.

`HTML`
-------
- **Definition**: HTML (HyperText Markup Language) is the standard markup language for creating web pages.
- **Functionality**: Static markup that does not allow embedding JavaScript expressions directly.
- **Usage**: Used to structure content on the web.
- **Browser Interpretation**: Browsers natively understand and render HTML without any transpilation.


# `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
---------------------------------------------------------------------------------------------------

- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable.
  The `{}` can embed a javascript expression or a variable inside it.

- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
  A component is written inside the `{<  />}` expression.
  
- `<TitleComponent></TitleComponent>` : `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.

`Component Composition in JSX`
----------------------------------
We can use curly braces inside JSX elements to integrate other JSX elements or add JavaScript expressions. This allows for dynamic content rendering within JSX components.

`Cross-Site Scripting (XSS)`
-----------------------------
When using curly braces in JSX, we can embed JavaScript expressions. However, JSX automatically sanitizes any data received from an API or external source, helping to protect against Cross-Site Scripting (XSS) attacks. JSX escapes values by default, preventing malicious code from being executed unless we explicitly mark it as unsafe using methods like `dangerouslySetInnerHTML`.

`<> </>` in React (Fragment Syntax)
---------------------------------------
In React, `<> </>` is shorthand for **React Fragments**. A Fragment allows grouping multiple child elements without adding an extra node to the DOM, which is common when returning multiple elements from a component.

### Why Use Fragments?
- Avoids adding unnecessary DOM elements like extra `div` or `span` tags.
- Keeps the DOM clean and helps reduce extra styling and layout issues.

 **Example:**
```jsx
return (
  <>
    <h1>Hello, World!</h1>
    <p>This is a React fragment.</p>
  </>
);
```

## `Key` Property in Jsx element
--------------------------------
- Whenever we are looping and making data dynamic we need to set a key property to the JSX element like key = {value}

So these keys are very important for the app optimization 

Suppose if a new data came to the array we are looping , and if there is not unique key for the elements , The react will rerender all the elements again because react dont know which is the newly added data so this will make our app more complex in loading

So keeping a unique key for the element will help the react to identify the newly added data and then the react will only render that data

NOTE THAT :- never use the index of the looping as the unique key





## `DOM Concept in JavaScript`
=================================
The **Document Object Model (DOM)** is a programming interface api that provided by the browser for web documents, representing the structure of an HTML or XML document as a tree of objects. It allows JavaScript to interact with and manipulate the content, structure, and style of web pages dynamically.

`Key Concepts in the DOM`
--------------------------
- **Document object**: It is the root of the DOM, representing the entire HTML document, and providing access to all other nodes.
- **Nodes**: Everything in the document is represented as nodes—elements, attributes, text, and comments.

`Tree Structure of the DOM`
---------------------------
The DOM represents the HTML document as a tree, with the document object as the root. Each element becomes a node in this tree, and the relationships between elements are represented as parent-child relationships.





## Concept of `Reusability in React`
========================================
**Reusability** in React refers to creating modular, independent components that can be used across different parts of an application or even across multiple projects. React’s component-based architecture is designed to promote reusability, which makes it easier to build scalable and maintainable applications.

# `Component-Based Structure`
------------------------------
`Props for Customization`
--------------------------
Props allow components to be reusable with different data inputs, enabling developers to pass dynamic content to a single component without rewriting it. This promotes flexibility while maintaining a modular structure.

# `Higher-Order Components (HOCs)`
-----------------------------------
**HOCs** are functions that take a component and return a new component, allowing you to add reusable logic to multiple components without changing their implementations.

# `Render Props`
------------------
The **Render Props** pattern allows a component to share reusable logic by passing a function as a prop to decide what to render, providing flexibility in rendering logic while promoting reusability.

# `Custom Hooks`
------------------
React hooks like `useState`, `useEffect`, and `useReducer` promote the reuse of logic across different components. Custom hooks allows developers to extract reusable logic and share it between multiple components for consistency and modularity.

# `Component Libraries`
-------------------------
We can create libraries of reusable components, such as buttons, forms, or modals, and use them across multiple projects. Libraries like **Material-UI** or **Bootstrap** provide reusable UI components for rapid development.





## `Synthetic Events`
======================
- In React, when we use event handlers like onClick, onChange, or onSubmit, React doesn’t directly use the browser's native events.
- Instead, React uses a Synthetic Event, which is a wrapper around the browser’s native event.
- Why? This ensures that events behave the same way across all browsers (cross-browser consistency).

1. **Event Handling in React:**  
-------------------------------
   - Event handlers in React are added using camelCase syntax (e.g., `onClick` instead of `onclick`).
   - React follows the virtual DOM pattern, meaning event handlers are attached at the root of the DOM, not directly on individual nodes.

2. **Event Pooling:**  
---------------------
   - Event pooling is a performance optimization technique used by React.
   - React reuses the same synthetic event object for multiple events instead of creating a new object each time an event occurs.
   - Once the event handler finishes executing, React clears the event object’s properties (like event.type, event.target, etc.), making them unavailable for future use.

    `Why event.persist()?`
    - If we need to access the event's properties asynchronously (e.g., inside a setTimeout or a promise), the event's data might already be cleared due to pooling.
    - Calling event.persist() tells React not to recycle or clear the specific event object
    - This allows you to safely use the event’s properties later in async code.

   - **Example of Persisting an Event:**
     ```jsx
     function handleClick(event) {
        event.persist(); // Prevents React from clearing the event
        console.log(event.type); // Logs "click"

        setTimeout(() => {
          console.log(event.type); // Logs "click" because persist keeps the event data
        }, 1000);
      }

      export default function App() {
        return <button onClick={handleClick}>Click Me</button>;
      }

     ```

3. **Advantages of Synthetic Events:**  
---------------------------------------
   - **Cross-browser Compatibility:** Provides uniform behavior across different browsers.
   - **Performance:** Uses event delegation by attaching handlers to the root, reducing the need for multiple listeners.
   - **Abstraction:** Makes handling events simpler by wrapping the native browser events.





## `Memoization`
====================  
1. `What is Memoization?`
-------------------------
   - Memoization stores the results of function calls and reuses them if the same inputs are passed again, avoiding redundant computations.
   - It ensures that a function doesn’t run more than necessary by returning previously computed results.

2. `How Memoization Works?`
----------------------------
   - The first time a function is called with certain arguments, it computes the result and stores it in memory.
   - If the function is called again with the same arguments, the stored result is returned instead of recalculating it.

3. `Memoization in React`
--------------------------
   React provides built-in features for memoization to optimize rendering and avoid unnecessary re-renders.

   - **React.memo:**  
     - A higher-order component (HOC) that memoizes a functional component, preventing unnecessary re-renders if the props doesn’t change.
   
   - **useMemo:**  
     - A React hook that memoizes the result of a function to prevent expensive recalculations on every render.

   - **useCallback:**  
     - A React Hook that returns a memoized version of a callback function — meaning the function is recreated only when its dependencies change.

4. **Why Use Memoization?**  
-----------------------------
   - **Performance Optimization:**
   - **Avoids Redundant Logic:**
   - **Improves User Experience:**

5. **When to Use Memoization in React:**  
-----------------------------------------
   - **Expensive Calculations:** Use `useMemo` for computations that take significant time.
   - **Callback Functions Passed as Props:** Use `useCallback` to ensure that child components don’t re-render unnecessarily.
   - **Rendering Pure Components:** Use `React.memo` to memoize components that rely only on props, avoiding re-renders unless the props change.





## `Strict Mode`
===================
Strict Mode is a feature in react that helps identify and catch common programming errors, as well as enforce a stricter set of rules for react code.
```js
<React.StrictMode>
    <App />
</React.StrictMode>
```





## `Components` in React
============================
`Functional Components`
-----------------------
Functional components are simpler and are written as JavaScript functions. Before React Hooks, functional components were stateless. However, with the introduction of hooks (like `useState`, `useEffect`), functional components can now manage state and lifecycle events just like class components.

It's nothing but a JavaScript function that returns a piece of JSX element.

When creating a functional component, we need to make its name start with a capital letter for React to understand that it's a functional component.

**Example:**
-------------
```js
const HeadingOne = () => {
    return <h1>This is a functional component</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingOne/>)
```

`Class Components (with Lifecycle Methods)`
-------------------------------------------
Class components were the standard way to create components in React before the introduction of hooks. They extend from `React.Component` and allow the use of lifecycle methods to manage state and behavior over time.

In essence, a class component is a JavaScript class with the name of the component, which inherits from React.Component (provided by React) and contains a render() method that returns some piece of JSX.

# Receiving Props in Class Components
-------------------------------------
To access props in a class component, we typically use a constructor method. Inside the constructor, we must call the parent class's constructor using super(props) to properly initialize the component.
```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props); // Call parent constructor to initialize 'this'
    console.log(this.props); // Now 'this.props' is accessible here
  }

  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

`Purpose of super()`
The super() function calls the constructor of the parent class (React.Component).
super(props) passes the props to the parent constructor, allowing React to set up this.props correctly.

`Why Pass props to super(props)`
Passing props to super() in the construcotr makes this.props available in class.
Without super(props), this.props inside the constructor will be undefined.

`Using props Directly`
Even without passing props to super(), we can still use the props parameter directly in the constructor.
However, this.props won’t work unless you pass props to super().

`Key Takeaway`
Use super(props) if you want to access this.props inside the constructor. Otherwise, rely on the props parameter directly.

`componentDidMount()`
----------------------
The componentDidMount lifecycle method is primarily used for handling side effects.

call constructor
call render
call compoenentDidMount

This method is called after the initial render, allowing you to fetch data and update the component's state with the fetched data, which will subsequently trigger a re-render of the component.

In functional components, this can be achieved using the useEffect hook, which allows you to perform side effects, such as fetching data.

`componentDidUpdate()`
-----------------------
The componentDidUpdate lifecycle method is called after every re-render, but only if the re-render was triggered by a change in props or state.
This method receives prevProps and prevState as arguments, enabling us to compare them with the current props and current state.

`componentWillUnmount()`
-------------------------
The componentWillUnmount lifecycle method is called just before a component is unmounted and destroyed. This is the appropriate place to clean up resources, such as removing event listeners, stopping timers, cancelling subscriptions, or aborting network requests, to prevent memory leaks.

For example, if you start a setInterval in componentDidMount, it will continue to run even if the component is no longer displayed. To prevent this, you should stop the interval in componentWillUnmount, ensuring it only operates while the specific component is mounted.

`Lifecycle of parent child class component`
--------------------------------------------
  - parent compoenent
    - Child-one compoenent
    - Child-two compoenent
    
parent constructor
parent render
child-one constructor
child-one render
child-two constructor
child-two render
child-one componentDidMount
child-two componentDidMount
parent componentDidMount 

First the parent class constructor and render function will call and then if there is any child class its constructor and then its render will call and then the child class componentDidMount will call and then parents componentDidMount will call





## `Life CYcle Methods Phases`
==================================
# Render phase
----------------
Constructor Calling: When a component is instantiated, the constructor is called. This is where you can initialize state and bind methods.

Rendering: After the constructor, the render method is invoked. This method returns the JSX that describes what should be rendered on the screen. React then constructs the Virtual DOM based on this returned JSX.

# Commit phase
----------------
React compares the virtual DOMs and determines the minimal difference

componentDidMount: Once the changes are determined, React updates the actual DOM.





## ` What is a Lifecycle Method`
=====================================
Lifecycle methods are special functions in class components that run at specific stages of a component's life — like when it's created, updated, or removed.

`Component Lifecycle Phases and Lifecycle Methods List`
1. Mounting :- when the component is being created and added to the DOM
- `constructor()` Initializes state and binds methods.
- `static getDerivedStateFromProps()` Syncs state with props before rendering.
- `render()` Returns JSX.
- `componentDidMount()` Called after the component is mounted.

2. Updating :- when the component is being re-rendered due to changes
- `static getDerivedStateFromProps()` Runs again if props change, to sync state.
- `shouldComponentUpdate()`
    Allows us to prevent unnecessary re-renders by returning false.
- `render()`
- `getSnapshotBeforeUpdate()`
    Captures some information from the DOM before it changes (e.g., scroll position).
- `componentDidUpdate()`
    Runs after the component updates; good for API calls based on state/prop change.

3. Unmounting :- when the component is being removed from the DOM
- `componentWillUnmount()`
    Cleanup tasks like clearing timers or removing listeners.

`Life cycle methods in Error Handling`
- static getDerivedStateFromError()
    Catches errors during rendering and updates state to show fallback UI.
- componentDidCatch()
    Logs error information (e.g., to an error reporting service).

`Why?`
-------
When we create a class component in React by extending React.Component, the parent class's constructor initializes the component's props. If you skip passing props to super(), React may not initialize them correctly within the instance.

Key Points:
Instance-specific Props: Each instance of the class (the component) maintains its own props. By passing props to super(), we ensure that the specific props are correctly initialized for that instance.

Accessing Props: Outside the constructor, we typically use this.props and this.state within class methods or event handlers. These methods need to refer to the current instance of the class to access the correct props and state.

Correct Method Functionality: If we do not call super(props) in the constructor, this.props will be undefined inside the constructor, which can lead to potential errors. Without it, the method wouldn't have access to the component’s props, potentially causing unexpected behavior in the application.

`state variable`
------------------
In React class components, state variables are managed using this.state, which is an object that holds the component's dynamic data.

# Declaring State Variables
State variables can be declared inside the constructor using this.state.

```js
constructor(props) {
    super(props);
    this.state = {
        variableName: initialValue,
        // other state variables
    };
}
```

# Updating State Variables
Avoid Direct Updates: Never update state variables directly using:
```js
this.state.variableName = this.state.variableName + 1;
```
Directly mutating the state can lead to unexpected behavior and bugs, as React relies on its internal mechanisms to manage re-renders.

Using this.setState(): Instead, use the this.setState() method provided by React to update state variables. This method accepts an object containing the state variables we want to update.
```js
this.setState({ variableName: this.state.variableName + 1 });
```
Reactivity: When we call this.setState(), React merges the provided object with the current state. React then compares the previous state object with the new state object to determine what has changed. If there are differences, React triggers a re-render of the component, ensuring the UI reflects the latest state.

## Eaxmple
-----------
```js
import React from 'react'

class Component extends React.component{

   constructor(props) {
    super(props); // Required to access `this.props`
    console.log(this.props); // Now accessible
    console.log(props) // accessible

    this.state = {
      count : 0,
      count2 : 1,
    }
  }

  render(
    return(
      <div>
      <h1>count : {this.state.count}</h1>
      <button onClick={() => {
        this.setState({
          count : this.state.count + 1
        })
      }}>count increment</button>
      <h1>Hello this is a class compoenent</h1>
      </div>
    )
  )
}
```





## React `Render Tree` and Component Concepts
================================================
1. `Top-level Components`
-------------------------
These are the main or parent components responsible for rendering sections or pages of the application. They often serve as containers for other components.

**Example:**
```jsx
function App() {
  return (
    <div>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}
```

2. `Leaf Components`
---------------------
Leaf components are the smallest building blocks of the UI. They do not contain other components but may receive props to configure their behavior.
```js
function Button({ label }) {
  return <button>{label}</button>;
}
```





## `Props`
=============
In React, "props" (short for properties) are a mechanism for passing data from a parent component to a child component. They are read-only and should not be modified within the child component. Props are essentially arguments passed to components, allowing them to be dynamic and reusable. 

`Key Points about Props`
------------------------
Data Transfer: Props are used to pass data and event handlers down to child components.
Immutable: Props are read-only. A child component cannot modify its own props.
Function Components: In functional components, props are received as arguments.
Class Components: In class components, props are accessed using this.props.
Default Props: You can define default values for props using the defaultProps property in class components or default parameters in functional components.

# Example
---------
```js
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage
<Greeting name="Midhun" />

// Default props
const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// Set default props
Greeting.defaultProps = {
  name: "Guest",
};
```





## `Immutable` Props
=======================
Props are immutable, meaning the child component cannot modify them directly. This ensures predictable behavior and maintains React’s unidirectional data flow.
```js
function DisplayNumber({ number }) {
  // Trying to modify props will cause an error.
  // number = number + 1; ❌
  return <p>{number}</p>;
}
```





## `Forwarding` Props
=========================
Prop forwarding occurs when an intermediate component takes in props from a parent and directly passes them down to its child component, usually without modification. This is useful for components that act as "wrappers" or intermediaries.
```js
function Input(props) {
  return <input {...props} />;
}

function Form() {
  return <Input placeholder="Enter text" />;
}
```





## `Children` Prop
=====================
The children prop allows you to pass elements or components between the opening and closing tags of another component.
```js
function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}
<Wrapper>
  <h1>Title</h1>
  <p>This is some content.</p>
</Wrapper>;
```





## Importance of `Pure Components`
======================================
A pure component behaves predictably by rendering the same output for the same input (props or state). Avoiding side effects helps ensure the component's integrity.
```js
function PureGreeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
```





## `Local Mutation` and Why to Avoid It
==========================================
Directly modifying state or props can lead to unpredictable behavior. React promotes immutability by encouraging controlled updates using setState or hooks.
```js
this.state.count = this.state.count + 1; // ❌ Avoid direct mutation.
this.setState({ count: this.state.count + 1 }); // ✅ Use setState instead.
```





# React Functional Component Snippets: `rafce` and `tsrafce`
=================================================================
## 1. `rafce` (React Arrow Function Component Export)
-----------------------------------------------------------
This snippet quickly generates a React functional component with an arrow function and exports it by default.

## 2. `tsrafce` (TypeScript React Arrow Function Component Export)
--------------------------------------------------------------------
This snippet is similar to rafce but used for TypeScript projects. It adds type annotations to ensure type safety.





## `DYNAMIC ROUTING`
========================
Dynamic routing in React.js refers to the ability to render different components or pages based on the current URL or user input. This is often achieved using React Router, which is a popular library for handling routing in React applications.

`Dynamic Route Parameters`
-----------------------------
We can create routes that accept parameters, making the route dynamic. For example, `/user/:id` will match `/user/1`, `/user/2`, etc., where `:id` is a dynamic segment.
```js
<Route path="/user/:id" component={UserComponent} />
```

`Accessing Route Parameter`
-----------------------------
We can access dynamic route parameters using the `useParams` hook in the component:
```js
const { id } = useParams();
```

`Nested Routes`
----------------
Dynamic routing also supports nested routes where a route can have sub-routes based on the URL.
```js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CategoryPage from "./CategoryPage";
import ProductPage from "./ProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Dynamic Category Route */}
        <Route path="/category/:categoryId" element={<CategoryPage />}>
          
          {/* Nested Product Route */}
          <Route path="product/:productId" element={<ProductPage />} />
          
        </Route>
      </Routes>
    </Router>
  );
}
```

## `Old Way Routing` (React Router v5 and below)
-------------------------------------------------
`BrowserRouter` ( as alias `Router`)
----------------------------------------
The Router component is a high-level component that keeps the UI in sync with the URL. It uses the browser's history API to enable navigation without page reloads.

`Routes`
---------
The Routes component is a container for all the Route components. It looks through its children Route elements and matches the current location to one of them. It renders the first Route that matches the location.

`Route`
--------
The Route component is used to define a mapping between a URL path and a component. When the app's location matches the path defined in a Route, the corresponding component will render.

`<Switch>`
-------------------
A control flow component that renders only the first matching <Route>. Ensures that only one route is rendered at a time
```js
<Switch>
  <Route path="/user/:id" component={UserComponent} />
  <Route path="/home" component={HomeComponent} />
</Switch>
```





## `New Routing`
===================
`createBrowserRouter`
----------------------
This function is used to create a router instance with the routes of a application.

`RouterProvider`
----------------
This component provides the router context to our application. It is used to wrap our application and pass the router instance created by createBrowserRouter. This makes routing functionalities available throughout our app.

`Outlet`
--------
This component act as a placeholder for nested routes. It allows you to render child routes inside a parent route component, enabling you to build complex layouts where specific components change based on the current route.

`Link`
-------
This component is used to create navigational links to different routes in our application. It allows users to navigate without causing a full page reload.

`NavLink`
---------
Similar to Link, but it provides additional styling capabilities for the active link.
```js
import { NavLink } from 'react-router-dom';

<NavLink
  to="/about"
  className={({ isActive }) => (isActive ? "text-blue-500 font-bold" : "")}
>
  About
</NavLink>
```

# Example
---------
```js
// App.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  useParams
} from 'react-router-dom';

// Layout component
function AppLayout() {
  return (
    <div>
      <h1>My Application</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user/1">User 1</Link>
        <Link to="/user/2">User 2</Link>
      </nav>
      <Outlet /> {/* Renders the matched child route component */}
    </div>
  );
}

// Home component
function Home() {
  return <h2>Home Page</h2>;
}

// About component
function About() {
  return <h2>About Page</h2>;
}

// User component
function User() {
  const { id } = useParams(); // Access the dynamic route parameter
  return <h2>User ID: {id}</h2>;
}

// Create the router instance with dynamic routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Layout component with Outlet
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "user/:id", element: <User /> },
    ],
  },
]);

// Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
```





## `REACT HOOKS`
====================
- Hooks are special functions in React that let us "hook into" React features (like state, lifecycle methods, context, etc.) without writing a class component.
- Introduced in React 16.8

`Why Hooks`
Before hooks, only class components could use state and lifecycle methods. 
With hooks we can use state and lifecycle methods in functional components.

1 . `useState`
------------------
**Purpose:** `useState` is a hook that is used to add state to our functional components.
**Usage:** we can define a state variable and a function to update that state.

Whenever a state variable changed the react will trigger a reconcilation cycle (re-render)
Never declare a useState outside of a component, inside a if else statement, for loops and functions

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Initial state is 0

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
2. `useEffect`
------------------
UseEffect is a hook that lets us to perform side effects in our functional components, such as data fetching, subscriptions, or manual DOM manipulation.

useEffect have two arguments one is a call back function and another one is the dependency array
So if we are using useEffect inside a functional component when we render the compoenent will load first and then the useEffect callback function will call

Usage: we can specify when the useEffect should run by providing a dependency array.

If no dependency array is assigned, useEffect is called on every render
If the dependency array is an empty array, useEffect is called on inital render (just once)
If the dependency array have value like eg: a stateVariable, the useEffect is called whenever the stateVariable updated

Like in the class component we use componentWillUnmount there is no method in functional compoenent but we can use a
return inside the useEffect and this returns a an arrow function inside this arrow function we can control the whatever we need to stop like compoenentWillUnmount
```js
import React, { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));

      return (() => clearInterval()) // unMounting
  }, []); // Empty array means it runs once after the first render

  return <div>{JSON.stringify(data)}</div>;
}
```

3. `useRef`
---------------
useRef is a React hook that allows us to create a mutable object with a .current property. 
- Access a DOM element directly.
- Hold a value that doesn't cause re-renders when changed.
- Changing ref.current does not trigger re-renders, making it suitable for performance optimization.
- Helps us to interact directly with DOM elements (e.g., focusing an input field).
- The value stored in .current persists between re-renders.
- Perfect for use cases where the value is not directly rendered in the UI.
```js
import React, { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Focus the input element
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

3. 1. `forwardRef`
------------------
forwardRef is a React hook that is used to pass a ref from a parent component to a child component, allowing the parent to directly access the child’s DOM elements or methods.
```js
import React, { forwardRef, useRef } from 'react';

// Child component using forwardRef
const InputField = forwardRef((props, ref) => {
  return <input type="text" ref={ref} {...props} />;
});

// Parent component
function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Focus the input field directly
  };

  return (
    <div>
      <InputField ref={inputRef} placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default App;
```

3. 2. `useImperativeHandle`
----------------------------
It is used to customizes what is exposed via the ref to a parent component. Instead of exposing the entire DOM element of the child compoenent, we can limit access to only specific methods or properties.
```js
import React, { useImperativeHandle, forwardRef, useRef } from 'react';

// Child component with useImperativeHandle
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(), // Only expose the focus method
    clear: () => inputRef.current.value = "", // Expose a clear method
  }));

  return <input ref={inputRef} {...props} />;
});

// Parent component
function App() {
  const inputRef = useRef();

  const handleFocus = () => inputRef.current.focus();
  const handleClear = () => inputRef.current.clear();

  return (
    <div>
      <CustomInput ref={inputRef} placeholder="Type here..." />
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default App;
```

3. 3. `flushSync`
--------------------
flushSync is a function from react-dom that forces synchronous DOM updates, breaking React’s default behavior of batching updates asynchronously for performance.
```js
import { useState } from 'react';
import { flushSync } from 'react-dom';

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    flushSync(() => {
      setCount(count + 1); // Immediate update in the DOM
    });
    console.log('Count updated:', count);
  };

  return <button onClick={handleClick}>Increment</button>;
}
```

4. `useRouterError`
-------------------
The useRouteError hook is used inside an error boundary route element to retrieve the error that occurred during: 
- A loader() or action() function,
- A thrown error from a component rendered by a route,
- A redirect that failed,
- Or any uncaught exception during routing.

```js
import { useRouterError } from 'react-router-dom';

const Component = () => {
  const err = useRouterError()
  return (
    <div>
      <h1>{err}</h1>
    </div>
  )
}
```

5. `usePaarams`
-------------------
useParams is a hook provided by React Router dom that allows us to access the dynamic parameters of the current route. This is particularly useful for extracting values from the URL, such as IDs or slugs.

we typically use useParams inside a functional component to retrieve the parameters defined in our route configuration.

Assuming we have a route defined like this:
```js
<Route path="/user/:id" element={<UserComponent />} />
```
In our UserComponent, we can access the id parameter using useParams
```js
import React from 'react';
import { useParams } from 'react-router-dom';

const UserComponent = () => {
  const { id } = useParams(); // Accessing the 'id' parameter from the URL

  return (
    <div>
      <h1>User ID: {id}</h1>
      {/* You can use the id to fetch user data or display user information */}
    </div>
  );
};

export default UserComponent;
```

6. `useLayoutEffect`
------------------------
useLayoutEffect is a hook provided by react that runs synchronously after the DOM updates but before the browser paints the screen. It blocks the rendering process until the effect completes, ensuring that DOM updates are applied before the browser performs any visual painting.
```js
import React, { useLayoutEffect, useRef } from 'react';

function Example() {
  const divRef = useRef();

  useLayoutEffect(() => {
    console.log(divRef.current.offsetHeight); // Measure height before painting.
  }, []);

  return <div ref={divRef}>Hello World</div>;
}
```

7. `useMemo`
--------------
usMemo is a react hook that lets us cache a result of an expensive calculation between re-renders.
It ensures that a function’s return value is only recomputed if its dependencies change.
Use useMemo only when we notice performance issues.
If the dependencies are complex objects or arrays that change frequently, the memoization might not help much.
```js
const memoizedValue = useMemo(() => {
  computeExpensiveValue(a, b)
  ,[a, b]});
```

8. `useCallback`
------------------
useCallback is a React Hook that returns a memoized version of a callback function. This means that React will only re-create the function when one of its specified dependencies changes. This optimization is primarily useful for preventing unnecessary re-renders of child components that receive functions as props, 
```js
 const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
```

9. `useReducer`
----------------
- Its a react hook that is used for state management, alternative to useState
- useState is built using useReducer
- useReducer have two parameters one is reducer function and another is initial value
- The reducer function will have two parameters currentState and action and it returns a newState
- useReducer returns a pair of values newState and dispatch
```js
import React, { useReducer } from 'react';

// 1. Define the reducer function
function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
}

// 2. Component
function Counter() {
  // 3. useReducer hook
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
```

10. `useContext`
----------------------
- The react is providing the `createContext` method
- The Context API in React allows us to share state and data globally across components without the need to pass props down the component tree manually. It is useful when multiple components need access to the same data.
- We access the context inside components using the `useContext()` react hook.

`Using Context Without a Provider`
```js
const UserContext = createContext({ userName: "Midhun Kalarikkal" });
```
If we don't use <UserContext.Provider>, then components using useContext(UserContext) will receive this default value.

`Using Context With a Provider`
```js
<UserContext.Provider value={{ userName: "Midhun Paniker" }}>
  <App />
</UserContext.Provider>
```
Now, all components inside this provider get this provided value, overriding the default.

11. `React.memo`
------------------
React.memo is a higher-order component (HOC) in React that optimizes functional components by preventing unnecessary re-renders. It does this by memoizing the component—that is, it only re-renders the component if the props have changed.
When you wrap a component with React.memo, React will compare the new props with the previous ones.
If the props are the same, React skips rendering of the component.
If the props are different, the component will re-render as usual.





## `useHistory vs useNavigate`
=================================
`useHistory`
------------
- React Router (v5 and earlier).
- Used to access the history instance, allowing us to programmatically navigate between routes.

```jsx
import { useHistory } from 'react-router-dom';

function GoHomeButton() {
  const history = useHistory();

  const goHome = () => {
    history.push('/home'); // Navigate to the home route
  };

  return <button onClick={goHome}>Go Home</button>;
}
```

| Method                     | Purpose                                    |
| -------------------------- | ------------------------------------------ |
| `history.push("/path")`    | Navigate to a new route (adds to history)  |
| `history.replace("/path")` | Navigate and replace current history entry |
| `history.go(n)`            | Go forward/backward `n` steps in history   |
| `history.goBack()`         | Go back one step                           |
| `history.goForward()`      | Go forward one step                        |

`useNavigate`
---------------
- Introduced in React Router (v6).
- A replacement for useHistory. It provides a simpler API for navigating to different routes.

```js
import { useNavigate } from 'react-router-dom';

function GoHomeButton() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/home'); // Navigate to the home route
  };

  return <button onClick={goHome}>Go Home</button>;
}
```
| Equivalent to                          | What it does                               |
| -------------------------------------- | ------------------------------------------ |
| `navigate("/path")`                    | Same as `history.push()`                   |
| `navigate("/path", { replace: true })` | Same as `history.replace()`                |
| `navigate(-1)`                         | Go back one step (like `history.goBack()`) |
| `navigate(+1)`                         | Go forward one step                        |





## `Event Handlers` in React
================================
Event handlers are functions that respond to specific events (like clicks, changes, etc.) triggered by the user interacting with a component. In React, these handlers are usually passed as props to the respective components.

`onClick Event Handler`
-----------------------
The onClick event handler is used to handle click events on elements such as buttons, links, or any clickable element.

```js
import React from 'react';

function App() {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <button onClick={handleClick}>Click Me</button>
    );
}

export default App;
```

## onChange Event Handler
-------------------------
Usage: The onChange event handler is used to handle changes to form elements such as <input>, <textarea>, and <select>. It is typically used to capture user input in forms.

```js
import React, { useState } from 'react';

function App() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input type="text" onChange={handleChange} />
            <p>You typed: {inputValue}</p>
        </div>
    );
}

export default App;
```





## `Shadow DOM`
==================
- A hidden mini-DOM inside an element
- Isolate styles and structure
- Avoid style conflicts, reusable components                             





## `Lazy Loading` / On-Demand Loading / Dynamic Import
==========================================================
Lazy loading means **splitting the components** into separate bundles that load only when needed. When the application initially loads, only the required bundles are sent, and other components are loaded **on-demand** when the user navigates to them.

`Benefits`
- **Reduces the initial load** time by keeping the main bundle small.
- **Improves performance** by loading only the necessary components dynamically.
  
- However, because React **renders quickly**, the bundle might not load immediately, causing React to throw an **error or display a fallback page**.

`Handling Loading State with Suspense`
- To avoid rendering errors, we use React's **`Suspense`** component to wrap lazy-loaded components.
- The **`fallback` prop** of `Suspense component` can display a loading UI (like a **shimmer effect**) while the component bundle is being fetched.

This approach ensures smooth **lazy loading** and avoids disrupting the user experience.

```js
const ProductPage = React.lazy(() => import('./ProductPage'));

<Suspense fallback={<h3>Loading Product Page...</h3>}>
  <ProductPage />
</Suspense>
```





## `React context`
======================
It is used to avoid props drilling
we can make an context file and import it in any module

so in functional component for using the context react is giving a hook that is `useContext` and we can pass the specific context we have created to that useContext hook and extract the data inside the context

Class components don’t support hooks like useContext.
Instead, React gives us a special component: <ContextName.Consumer>.
```js
<MyContext.Consumer>
  {value => (
    <div>Hello {value.userName}</div>
  )}
</MyContext.Consumer>
```
It uses a callback function inside curly braces {}.
That function receives the context value as a parameter.

`.Provider in Class or Functional Components`
```js
<MyContext.Provider value={{ userName: "Midhun Kalarikkal" }}>
  <App />
</MyContext.Provider>
```
Use .Provider to wrap components that need access to shared data.
We must pass a value prop this is the data we want to share.
We can Wrap the entire app (for global data)
Wrap a single component (for localized data)





## `Redux`
==============
Redux is not Mandotory
Redux is a seperate library
Redux is not only the one library for state management eg: Zustand
Easy to debug
Predictable state container for js application

Redux store is a big javascript object that kept in a global central place
Any component can read and write data in redux store

So that keeping the redux store as a big javascript oject is fine but we logically divide the redux store in to different slices so that each slice can hold a specific data that is responsible for a specific operation examples are cart , userInfo etc...

We cant directly edit the slice inside the redux store for that we need to do some steps

Example scenario
----------------
If we need to modify cart that is writing
when we click the button

1. we need to **dispatch** an **Action**
2. This action calls a **function**. This function is known as **reducer**
3. This function modifies the slice data

Reading the data from cart slice

1. We need a **selector** to read data from the slice. This is known as **subscribing** to the store
2. This selector will have the access to the entire store or to a specific slice
3. now we can destructure the store or the slice , or the data in slice and use it in our component
4. Now the component is synced with the store , whenever the store updates the react component will get that data

`Reducers`
This is used inside a slice to handle synchronous state updates triggered by actions defined within that slice.

`ExtraReducers`
This is used to handle Actions from other slices or Async actions like createAsyncThunk
	
  `useSelector` is the react-redux hook that is used to subscribe to the store
  Whenever we are using useSelector to subscribing the store not subscribe the entire store make it only for the portion of store, subscribing the entire store will make performance loss

  ```js
  // subscribing the entire store
  const store = useSelector((store) => store)
  const cartItems = store.cart.items

  // subscribing to the portion of the store
  const cartItems = useSelectr((store) => store.cart.items)
  ```
  
# Steps
--------
- Install @reduxjs/toolkit and react redux library
- Build our store
- Connect our store to our app
- Slice
- Dispatch (action)
- Selector (subscribe)

`Vnila Redux`
-------------
- Vanilla Redux is the core version of Redux where we manage the state manually using:
- reducers
- action creator
- store
- middleware (optional)
- `Important Rule` : we should never mutate the state directly.
- `Why?` : Redux expects pure functions, and mutating state directly will cause bugs in time-travel debugging and unexpected UI behavior.

`How do we handle state in Vanilla Redux?`
```js
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 }; // not mutating
    default:
      return state;
  }
}
```

`Redux Toolkit (RTK)`
-----------------------
- Redux Toolkit is the official, modern way to write Redux logic, introduced by the Redux team.
- Less boilerplate
- Includes createSlice, configureStore
- Built-in middleware
- Supports createAsyncThunk and RTK Query
- Allowed to mutate the state directly inside createSlice. why because Redux Toolkit uses a internal library called Immer. Immer lets us to write mutating code but it produces a new immutable copy behind the scene.

```js
// Creating a slice

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state, action) => { state.value += 1 },
    decrement: (state, action) => { state.value -= 1 },
    reset: (state, action) => { state.value = 0 }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;

// creating a store
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

// how to subscribe to the store and dispatch an action
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./features/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
      <button onClick={() => dispatch(reset())}> Reset </button>
    </div>
  );
};

export default Counter;

// Providing the store to the app 

import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Counter from "./Counter";

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
```

`Middleware in Redux`
----------------------
A middleware in Redux is a function that runs between dispatching an action and the reducer receiving it.
Use Case are :- Logging, Async handling, Error catching, Analytics

`Thunk (redux-thunk)`
----------------------
Thunk is a middleware that lets us to write action creators that return a function instead of an action object.
Use Case :- Useful for making API calls and then dispatching actions based on the result.

```js
// productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
});

const productSlice = createSlice({
  name: "products",
  initialState: { data: [], status: "idle" },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.status = "loading" })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      });
      .addCase(fetchProducts.rejected, (state) => { state.status = "Rejected" })
  }
});

export default productSlice.reducer;
```

`RTK Query`
------------
RTK Query is a built-in tool in Redux Toolkit that handles data fetching, caching, and re-fetching.
Use Case :- Replace useEffect + fetch + dispatch, Automatic caching and re-fetching, API-based state management

`Redux Hooks`
----------------
1. useSelector : - A hook to access data from the Redux store in a functional component.
2. useDispatch : - A hook to dispatch actions to the Redux store from a functional component.
3. useStore : - A hook to access the entire Redux store instance.
```js
const store = useStore();
```
4. useQuery (RTK Query) : - Hook provided by RTK Query to fetch data automatically when a component mounts.
```js
const { data, isLoading } = useGetProductsQuery();
```
5. useLazyQuery (RTK Query) : -  Same as useQuery, but it only runs when we manually call the trigger function.
```js
const [trigger, result] = useLazyGetProductsQuery();
trigger(); // to run the query manually
```
6. useMutation (RTK Query) : - A hook used to send data or perform mutations like POST, PUT, DELETE requests.
```js
const [addUser] = useAddUserMutation();
addUser(newUserData);
```
7. usePrefetch (RTK Query) : - A hook used to preload data before a component mounts
```js
const prefetch = usePrefetch("getProducts");
```

`Redux principles`
------------------
1. Single Source of Truth
- The entire application's state's are stored in a single JavaScript object called the store.
- This ensures consistency and makes it easier to debug,

2. State is Read-Only
- We cannot directly modify the state; instead must dispatch an action to make changes.
- Actions are plain objects describing what happened, not how to update the state.

3. Changes are Made with Pure Reducers
- A reducer is a pure function that takes the current state and an action as input, then returns a new state.
- Reducers must not mutate the state but instead return a copy with the necessary updates.

4. Unidirectional Data Flow
- State flows in one direction:
- Action → Reducer → New State → UI Update
- This makes the data flow predictable and easy to debug.

5. Centralized Logic
- All state and logic are managed centrally in the store, making the application easier to maintain and scale.





## `Controlled and Uncontrolled component`
==============================================
`Controlled Component`
- The form element's value is controlled by React state variables.
- The component renders based on the state and updates the state using event handlers.

```js
import React, { useState } from 'react';

function ControlledInput() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

`Uncontrolled Component`
- The form element's value is managed by the DOM itself, not React state.
- We use a ref to access the value.

```js
import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef();

  const handleClick = () => {
    console.log(inputRef.current.value);
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Get Value</button>
    </>
  );
}
```
Controlled: React manages the value via state, State drives the UI..
Uncontrolled: The DOM manages the value via refs.





## `Error Boundary`
=======================
An Error Boundary is a React component that catches JavaScript errors anywhere in its child component tree, logs those errors, and displays a fallback UI instead of crashing the whole app.

`They catch errors:`
During rendering
In lifecycle methods
In constructors of child components

`They do NOT catch:`
Event handlers (we must use try-catch in those)
Asynchronous code (e.g., setTimeout, Promises)
Server-side rendering errors

as of now (React 18 and React 19 Alpha), Error Boundaries can only be created using class components.

`The reason is`
Error boundaries rely on two class lifecycle methods:
static getDerivedStateFromError(error)
componentDidCatch(error, info)





