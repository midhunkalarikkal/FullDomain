## `What is HTML?` ##
=====================
HTML (HyperText Markup Language) is the standard markup language used to create the structure of web pages. It defines the content and layout of a webpage through a series of elements, which are represented by tags.

<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>

`<!DOCTYPE html>`
=================
Declaration defines that this document is an HTML5 document
It should be the very first thing in your HTML file, before the <html> tag.
It helps the browser know how to display the web page using HTML5 standards.
HTML5 uses the simple <!DOCTYPE html>. Previous versions had longer, more complex declarations.
This declaration ensures the page is rendered correctly in standards mode, avoiding old, inconsistent rendering methods (quirks mode).

`<html>`
========
Element is the root element of an HTML page.
It wraps all the content of the web page, including the head and body sections.
It defines the start and end of an HTML document. All HTML content must be inside this tag.
It is the container for all other HTML elements such as <head> and <body>.
The most common attribute used with the <html> tag is lang, which specifies the language of the document. For example, <html lang="en"> indicates the document is in English.

`<head>`
=========
The <head> tag is a container for metadata and links to resources used by the web page. Metadata includes information about the document that is not displayed directly on the page.
It provides essential information to the browser and search engines about the web page, such as its title, character set, styles, scripts, and more.

`````uses``
===========
    Defining the Document Title
    Character Encoding
    Linking Stylesheets
    Including JavaScript Files
    Specifying Metadata
    Favicon
    Responsive Design
    Loading Fonts and Other Resources
    External resources like fonts or APIs can be linked.

`<title>`
=========
Element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
It’s important for SEO (Search Engine Optimization) as the title is often used in search results.

The <body> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.

`favicon`
=========
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
A favicon image is displayed to the left of the page title in the browser tab, like this

`Introduction and History`
==========================
HTML was created by Tim Berners-Lee in 1991 as a way to share and link documents across the early internet.
It became the foundation of the World Wide Web and has undergone several revisions to adapt to modern web development needs.

`Versions of HTML`
==================
HTML 1.0 (1993): The first version, basic functionality for creating simple web pages.
HTML 2.0 (1995): Standardized existing practices, adding new elements for forms and interactive pages.
HTML 3.2 (1997): Added support for scripting languages (like JavaScript) and tables.
HTML 4.0 (1999): Introduced support for stylesheets (CSS) and improved accessibility features.
XHTML 1.0 (2000): A stricter, XML-based version of HTML 4.0.
HTML5 (2014): The most current version, focusing on multimedia (audio, video), better semantics, and support for modern web apps.

`Uses of HTML`
================
Structuring Web Pages: Defines the layout and organization of content (e.g., headings, paragraphs, lists).
Embedding Media: Supports multimedia like images, audio, and video.
Linking: Allows linking to other web pages and resources.
Cross-Platform Support: Works across all browsers and devices.
Foundation for Web Development: Serves as the base for integrating CSS (styling) and JavaScript (interactivity).

`Advantages of HTML`
====================
Easy to Learn and Use: Simple syntax with readable tags.
Free and Open Source: No costs or licensing required.
Cross-Browser Compatibility: Supported by all major browsers.
Search Engine Friendly: Semantics in HTML improve SEO (Search Engine Optimization).
Integration with Other Technologies: Works seamlessly with CSS, JavaScript, and server-side languages.

`Disadvantages of HTML`
=======================
Static Nature: HTML alone cannot create dynamic web applications; it requires CSS and JavaScript.
Lack of Security: HTML does not handle data security; vulnerabilities arise without backend safeguards.
Repetitive and Time-Consuming: Writing large-scale HTML can be tedious and repetitive.
Browser Differences: Some features may render differently in various browsers.
Limited Functionality: By itself, HTML cannot handle complex tasks like database interactions or server-side logic.

## `What is XML?` ##
====================
XML (eXtensible Markup Language) is a markup language used for storing and transporting data in a structured and readable format. Unlike HTML, which is used for displaying data, XML is designed to describe data and its structure. It is both human-readable and machine-readable, and is primarily used for data exchange between systems.

`Connection between HTML and XML`
==================================
While HTML and XML serve different purposes, they share some common characteristics because they are both markup languages. Here’s how they connect:

Both Use Tags: HTML and XML both use tags to describe data, making them similar in syntax.
Text-Based Format: Both are text-based and can be read by humans and machines.
Separation of Content and Presentation: Both technologies allow a separation of content (structure) and presentation (styling/logic). For example, HTML uses CSS for styling, and XML can be used alongside technologies like XSLT (Extensible Stylesheet Language Transformations) for displaying or transforming the data.


`What is XHTML?`
================
XHTML stands for EXtensible HyperText Markup Language
XHTML is a stricter, more XML-based version of HTML
XHTML is HTML defined as an XML application
XHTML is supported by all major browsers

`Why XHTML?`
==============
XML is a markup language where all documents must be marked up correctly (be "well-formed").

XHTML was developed to make HTML more extensible and flexible to work with other data formats (such as XML). In addition, browsers ignore errors in HTML pages, and try to display the website even if it has some errors in the markup. So XHTML comes with a much stricter error handling.

If you want to study XML, please read our XML Tutorial.



## `Nested HTML Elements` ##
============================
HTML elements can be nested (this means that elements can contain other elements).

## `HTML Attributes` ##
=======================
All HTML elements can have attributes
Attributes provide additional information about elements
Attributes are always specified in the start tag
Attributes usually come in name/value pairs like: name="value"

## `HTML Formatting Elements` ##
===================================
Formatting elements were designed to display special types of text:

<b> - Bold text
<strong> - Important text
<i> - Italic text
<em> - Emphasized text
<mark> - Marked text
<small> - Smaller text
<del> - Deleted text
<ins> - Inserted text
<sub> - Subscript text
<sup> - Superscript text

## `HTML Quotations` ##
=========================
The HTML <blockquote> element defines a section that is quoted from another source.
Browsers usually indent <blockquote> elements.
The HTML <q> tag defines a short quotation.
Browsers normally insert quotation marks around the quotation.

## `HTML Colors` ##
====================
HTML colors are specified with predefined color names, or with RGB, HEX, HSL, RGBA, or HSLA values.

`RGB`
=====
An RGB color value represents RED, GREEN, and BLUE light sources.
Each parameter (red, green, and blue) defines the intensity of the color with a value between 0 and 255.
This means that there are 256 x 256 x 256 = 16777216 possible colors!
 
RGBA color values are an extension of RGB color values with an Alpha channel - which specifies the opacity for a color.
An RGBA color value is specified with
rgba(red, green, blue, alpha)
The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all):

`Hex`
=====
In HTML, a color can be specified using a hexadecimal value in the form:
#rrggbb
Where rr (red), gg (green) and bb (blue) are hexadecimal values between 00 and ff (same as decimal 0-255).

`HSL`
=====
In HTML, a color can be specified using hue, saturation, and lightness (HSL) in the form:
hsl(hue, saturation, lightness)
Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, and 240 is blue.
Saturation is a percentage value. 0% means a shade of gray, and 100% is the full color.
Lightness is also a percentage value. 0% is black, and 100% is white.

## `HTML Links` ##
===================
You can click on a link and jump to another document.

By default, the linked page will be displayed in the current browser window. To change this, you must specify another target for the link.

The target attribute specifies where to open the linked document.

The target attribute can have one of the following values:

_self - Default. Opens the document in the same window/tab as it was clicked
_blank - Opens the document in a new window or tab
_parent - Opens the document in the parent frame
_top - Opens the document in the full body of the window

## Link color ##
------------------
a:link , a:visited , a:hover , a:active

## Link Bookmarks ##
---------------------
Bookmarks can be useful if a web page is very long.
To create a bookmark - first create the bookmark, then add a link to it.
When the link is clicked, the page will scroll down or up to the location with the bookmark.

First, use the id attribute to create a bookmark:
<h2 id="C4">Chapter 4</h2>


## `HTML Images` ##
===================
The HTML <img> tag is used to embed an image in a web page.

Images are not technically inserted into a web page; images are linked to web pages. The <img> tag creates a holding space for the referenced image.

The <img> tag is empty, it contains attributes only, and does not have a closing tag.

The <img> tag has two required attributes:

src - Specifies the path to the image
alt - Specifies an alternate text for the image

The width, height, and style attributes are all valid in HTML.


## `HTML Tables` ##
====================

`Primary Table Tags`
=====================
<table> - Define table itself
<thead> - Groups the header of the table
<tbody> - Groups the body of the table
<tfoot> - Groups the table footer
<tr> - Defining a row
<th> - Defining a table head
<td> - Defining a table data
<caption> - Add a title or description for the table before the <thead> tag
    
`Attributes for Tables`
=======================
border:
Specifies the border size of the table.
Example: <table border="1">

width and height:
Specifies the dimensions of the table or its cells.

rowspan:
Allows a cell to span multiple rows.

colspan:
Allows a cell to span multiple columns.

`colgroup`
==========
The <colgroup> element is used to style specific columns of a table.
The <colgroup> element should be used as a container for the column specifications.

Each group is specified with a <col> element.
The span attribute specifies how many columns that get the style.
The style attribute specifies the style to give the columns.

## Example ##
=============
<table>
    <colgroup>
        <col span="2" style="background-color: #D6EEEE">
    </colgroup>
    <thead>
        <tr>
            <th>MON</th>
            <th>TUE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>data1</td>
            <td>data2</td>
        </tr>
    </tbody>
</table>


## `HTML List` ##
==================
1. Unordered list <ul> <li>

2. Ordered list <ol> <li>

3. Description list
-------------------
<dl>	Defines a description list
<dt>	Defines a term in a description list
<dd>	Describes the term in a description list
 

## `HTML Block and Inline Elements` ##
=======================================
Every HTML element has a default display value, depending on what type of element it is.

`Block-level Elements`
=======================
A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.
A block-level element always takes up the full width available (stretches out to the left and right as far as it can).
Two commonly used block elements are: <p> and <div>.

<address><article><aside><blockquote><canvas><dd><div><dl><dt><fieldset><figcaption><figure><footer><form><h1>-<h6><header><hr><li><main><nav><noscript><ol><p><pre><section><table><tfoot><ul><video>


`Inline Elements`
===================
An inline element does not start on a new line.
An inline element only takes up as much width as necessary.

<a><abbr><acronym><b><bdo><big><br><button><cite><code><dfn><em><i><img><input><kbd><label><map><object><output><q><samp><script><select><small><span><strong><sub><sup><textarea><time><tt><var>



## `The <div> Element` ##
=========================
The <div> element is by default a block element, meaning that it takes all available width, and comes with line breaks before and after.
A <div> element takes up all available width:
The <div> element is often used to group sections of a web page together.


## `Attribute` ##
==================

`class`
=======
The HTML class attribute is used to specify a class for an HTML element.
Multiple HTML elements can share the same class.
The class attribute is often used to point to a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name.

`id`
====
The HTML id attribute is used to specify a unique id for an HTML element.
You cannot have more than one element with the same id in an HTML document.
The id attribute specifies a unique id for an HTML element. The value of the id attribute must be unique within the HTML document.
The id attribute is used to point to a specific style declaration in a style sheet. It is also used by JavaScript to access and manipulate the element with the specific id.

## `iframe` ##
===============
An HTML iframe is used to display a web page within a web page.
<iframe src="url" title="description"></iframe>


## `HTML JavaScript` ##
========================
The HTML <script> tag is used to define a client-side script JavaScript.
The <script> element either contains script statements, or it points to an external script file through the src attribute.
Common uses for JavaScript are image manipulation, form validation, and dynamic changes of content.


## `HTML Layout` ##
===================
<header> - Defines a header for a document or a section
<nav> - Defines a set of navigation links
<section> - Defines a section in a document
<article> - Defines an independent, self-contained content
<aside> - Defines content aside from the content (like a sidebar)
<footer> - Defines a footer for a document or a section
<details> - Defines additional details that the user can open and close on demand
<summary> - Defines a heading for the <details> element

## `HTML` <picture> `tag` ##
============================
The HTML <picture> element allows you to define different images for different browser window sizes.

## Example ##
=============

<picture>
  <source srcset="img_smallflower.jpg" media="(max-width: 600px)">
  <source srcset="img_flowers.jpg" media="(max-width: 1500px)">
  <source srcset="flowers.jpg">
  <img src="img_smallflower.jpg" alt="Flowers">
</picture>


## `HTML Computer code` ##
===========================
The <kbd> element defines keyboard input
The <samp> element defines sample output from a computer program
The <code> element defines a piece of computer code
The <var> element defines a variable in programming or in a mathematical expression
The <pre> element defines preformatted text


## `HTML Semantic elements` ##
==============================
<article>	
Defines independent, self-contained content

<aside>	
Defines content aside from the page content

<details>	
Defines additional details that the user can view or hide

<figcaption>	
Defines a caption for a <figure> element

<figure>	
Wraps an image (or other media) along with its caption or related content. Provides semantic grouping for media and its description.

<footer>	
Defines a footer for a document or section

<header>	
Specifies a header for a document or section

<main>	
Specifies the main content of a document

<mark>	
Defines marked/highlighted text

<nav>	
Defines navigation links

<section>	
Defines a section in a document

<summary>	
Defines a visible heading for a <details> element

<time>	
Defines a date/time


## `HTML Entities` ##
======================
Some characters are reserved in HTML.
If you use the less than (<) or greater than (>) signs in your HTML text, the browser might mix them with tags.

< (less than) = &lt;
> (greather than) = &gt;

A commonly used HTML entity is the non-breaking space: &nbsp;

<	less than	&lt;	&#60;	
>	greater than	&gt;	&#62;	
&	ampersand	&amp;	&#38;	
"	double quotation mark	&quot;	&#34;	
'	single quotation mark	&apos;	&#39;	
¢	cent	&cent;	&#162;	
£	pound	&pound;	&#163;	
¥	yen	&yen;	&#165;	
€	euro	&euro;	&#8364;	
©	copyright	&copy;	&#169;	
®	trademark	&reg;	&#174;

`Combining Diacritical Marks`
===============================
A diacritical mark is a "glyph" added to a letter.

à	á	â	ã	Ò	Ó	Ô	Õ


## `The HTML charset Attribute` ##
===================================
The character set is specified in the <meta> tag:
The HTML5 specification encourages web developers to use the UTF-8 character set.
UTF-8 covers almost all of the characters and symbols in the world!

`The ASCII Character Set`
ASCII was the first character encoding standard for the web. It defined 128 different characters that could be used on the internet:

English letters (A-Z)
Numbers (0-9)
Special characters like ! $ + - ( ) @ < >.

`The ANSI Character Set`
ANSI (Windows-1252) was the original Windows character set:

Identical to ASCII for the first 127 characters
Special characters from 128 to 159
Identical to UTF-8 from 160 to 255

`The ISO-8859-1 Character Set`
ISO-8859-1 was the default character set for HTML 4. This character set supported 256 different character codes. HTML 4 also supported UTF-8.

Identical to ASCII for the first 127 characters
Does not use the characters from 128 to 159
Identical to ANSI and UTF-8 from 160 to 255

`The UTF-8 Character Set`
is identical to ASCII for the values from 0 to 127
Does not use the characters from 128 to 159
Identical to ANSI and 8859-1 from 160 to 255
Continues from the value 256 to 10 000 characters


## `HTML Uniform Resource Locators` ##
========================================
A URL is another word for a web address.
A URL can be composed of words (e.g. w3schools.com), or an Internet Protocol (IP) address (e.g. 192.68.20.50).
Most people enter the name when surfing, because names are easier to remember than numbers.

A web address follows these syntax rules: `scheme://prefix.domain:port/path/filename`

scheme - defines the type of Internet service (most common is http or https)
prefix - defines a domain prefix (default for http is www)
domain - defines the Internet domain name (like w3schools.com)
port - defines the port number at the host (default for http is 80)
path - defines a path at the server (If omitted: the root directory of the site)
filename - defines the name of a document or resource

Common url schemes : http, https, ftp, file


## `HTML FORM` ##
==================
The HTML <form> element is used to create an HTML form for user input:
The action attribute defines the action to be performed when the form is submitted.

The HTML <input> element is the most used form element.
form tags : input, label

`Input types`
------------
<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">


`target`
The target attribute specifies where to display the response that is received after submitting the form.
The target attribute can have one of the following values:

_blank	The response is displayed in a new window or tab
_self	The response is displayed in the current window
_parent	The response is displayed in the parent frame
_top	The response is displayed in the full body of the window
framename	The response is displayed in a named iframe

`method`
<form action="/action_page.php" method="get">
The method attribute specifies the HTTP method to be used when submitting the form data.
The form-data can be sent as URL variables (with method="get") or as HTTP post transaction (with method="post").

`autocomplete`
<form action="/action_page.php" autocomplete="on">
The autocomplete attribute specifies whether a form should have autocomplete on or off.
When autocomplete is on, the browser automatically complete values based on values that the user has entered before.

`novalidate`
<form action="/action_page.php" novalidate>
The novalidate attribute is a boolean attribute.
When present, it specifies that the form-data (input) should not be validated when submitted.

`Form elements`
----------------
<input>
<label>
<button>
<option>
<output> - The <output> element represents the result of a calculation (like one performed by a script).
<optgroup> - Defines a group of related options in a drop-down list

<select>
---------
For dropdown
Use the size attribute to specify the number of visible values
Use the multiple attribute to allow the user to select more than one value:

<select id="cars" name="cars" size="3" multiple>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>

<textarea>
-----------
The <textarea> element defines a multi-line input field (a text area):

<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>

<fieldset> & <legend>
----------------------
The <fieldset> element is used to group related data in a form.
The <legend> element defines a caption for the <fieldset> element.

<fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </fieldset>

<datalist>
----------
The <datalist> element specifies a list of pre-defined options for an <input> element.
Users will see a drop-down list of the pre-defined options as they input data.
The list attribute of the <input> element, must refer to the id attribute of the <datalist> element.

<datalist id="browsers">
    <option value="Edge">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>


## `HTML Canvas` ##
====================
The input formaction attribute specifies the URL of the file that will process the input when the form is submitted.
Note: This attribute overrides the action attribute of the <form> element.
The formaction attribute works with the following input types: submit and image.

## `SVG` ##
============
SVG stands for Scalable Vector Graphics
SVG is used to define vector-based graphics for the Web
SVG defines graphics in XML format
Each element and attribute in SVG files can be animated
SVG is a W3C recommendation
SVG integrates with other standards, such as CSS, DOM, XSL and JavaScript
The HTML <svg> element is a container for SVG graphics.
SVG has several methods for drawing paths, rectangles, circles, polygons, text, and much more.

## `Multimedia tags` ##
=======================

`video`
-------
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>

`audio`
-------
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>

`object`
---------
The <object> element is supported by all browsers.
The <object> element defines an embedded object within an HTML document.

<object width="100%" height="500px" data="snippet.html"></object>

`yt video`
----------
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>


## `Web Storage` ##
===================
With web storage, web applications can store data locally within the user's browser.

Before HTML5, application data had to be stored in cookies, included in every server request. Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance.

Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.

Web storage is per origin (per domain and protocol). All pages, from one origin, can store and access the same data.

HTML web storage provides two objects for storing data on the client:

window.localStorage - stores data with no expiration date
window.sessionStorage - stores data for one session (data is lost when the browser tab is closed)

`The localStorage Object`
---------------------------
Local Storage is a Web Storage API feature that allows you to store data in the browser with no expiration. Data persists even after the browser is closed and reopened.

Persistence: Data remains until explicitly removed using code or browser settings.
Scope: Data is accessible across all tabs and windows from the same origin (domain).
Capacity: Typically allows up to 5-10 MB of data, depending on the browser.
Data Format: Stores data as key-value pairs in string format.
Security: Accessible only within the same origin (domain) for security reasons.
Use Case: Ideal for storing user preferences, themes, or offline data.

## Example 
===========
```js
// Setting an item in Local Storage
localStorage.setItem("username", "Midhun");

// Getting an item from Local Storage
const username = localStorage.getItem("username");
console.log(username); // Output: Midhun

// Removing an item from Local Storage
localStorage.removeItem("username");

// Clearing all items in Local Storage
localStorage.clear();

```

`The sessionStorage Object`
----------------------------
Session Storage is a Web Storage API feature that stores data only for the duration of a browser session. Data is cleared as soon as the browser tab is closed.

Temporary Storage: Data is deleted when the browser tab is closed.
Scope: Data is accessible only within the same tab and origin (domain).
Capacity: Similar to Local Storage, typically allows up to 5-10 MB.
Data Format: Stores key-value pairs in string format.
Isolation: Each browser tab has its own session storage; data is not shared across tabs.
Use Case: Useful for temporary data, like form inputs or session-specific configurations.

## Example
===========
```js
// Setting an item in Session Storage
sessionStorage.setItem("sessionID", "12345");

// Getting an item from Session Storage
const sessionID = sessionStorage.getItem("sessionID");
console.log(sessionID); // Output: 12345

// Removing an item from Session Storage
sessionStorage.removeItem("sessionID");

// Clearing all items in Session Storage
sessionStorage.clear();

```

## `What is a Web Worker?` ##
===============================
A Web Worker is a JavaScript feature that allows you to run scripts in the background, separate from the main execution thread of a web page. This helps avoid blocking the UI or causing the browser to freeze when performing computationally intensive tasks.

Background Processing: Run heavy computations (e.g., mathematical operations or data parsing) without freezing the user interface.
Thread-like Behavior: Enables multithreading-like functionality in JavaScript, which is traditionally single-threaded.
Asynchronous Tasks: Perfect for tasks like data fetching, image processing, or large file manipulations.
Improved Performance: Frees up the main thread for smoother user interactions.

## Example
==========
```js
// worker.js
self.onmessage = function (e) {
  console.log("Message received from main thread:", e.data);

  // Perform a computation (e.g., calculating factorial)
  const result = factorial(e.data);

  // Send result back to the main thread
  postMessage(result);
};

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

```

## `HTML SSE` ##
================
Server-Sent Events (SSE) is a mechanism that allows servers to send real-time updates to the browser over a single HTTP connection. SSE uses the EventSource API in the browser to receive these updates.

One-Way Communication:
The server can push updates to the client, but the client cannot send data back over the same connection.

Persistent Connection:
Uses a single HTTP connection, which remains open as long as the client and server need to communicate.

Text-Based Format:
SSE messages are plain text and easy to parse.

Browser Support:
Supported by most modern browsers, except for Internet Explorer.

Lightweight:
Suitable for real-time updates like notifications, news feeds, or stock prices.

`How SSE Works`
---------------
The browser creates an EventSource object and establishes a connection to the server.
The server sends data streams in the form of text messages.
The browser listens for events and updates the UI accordingly.

## `HTML drag and Drop` ##
===========================
`Make an Element Draggable`
<img draggable="true">

`What to Drag - ondragstart and setData()`
Then, specify what should happen when the element is dragged.
In the example above, the ondragstart attribute calls a function, drag(event), that specifies what data to be dragged.
The dataTransfer.setData() method sets the data type and the value of the dragged data

`Where to Drop - ondragover`
The ondragover event specifies where the dragged data can be dropped.
By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element.
This is done by calling the event.preventDefault() method for the ondragover event

## `Some tags` ##
==================
1. <area>
----------
 Defines an area inside an image map (an image map is an image with clickable areas).<area> elements are always nested inside a <map> tag.

2. <aside>
-----------
The <aside> tag defines some content aside from the content it is placed in.
The aside content should be indirectly related to the surrounding content.

## `HTML Canvas` ##
====================
The HTML <canvas> element is used to draw graphics, on the fly, via JavaScript.
The <canvas> element is only a container for graphics. You must use JavaScript to actually draw the graphics.
Canvas has several methods for drawing paths, boxes, circles, text, and adding images.

<canvas id="myCanvas" width="200" height="100"></canvas>

use the script tag and javascript to draw in the canvas