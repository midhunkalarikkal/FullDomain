## `What is CSS?` ##
=====================
CSS stands for Cascading Style Sheets
CSS describes how HTML elements are to be displayed on screen, paper, or in other media
CSS saves a lot of work. It can control the layout of multiple web pages all at once
External stylesheets are stored in CSS files
CSS (Cascading Style Sheets) was invented by Håkon Wium Lie in 1994.


## `Selectors` ##
==================
`id Selector`
-------------
The id selector uses the id attribute of an HTML element to select a specific element.
The id of an element is unique within a page, so the id selector is used to select one unique element!
To select an element with a specific id, write a hash (#) character, followed by the id of the element.

## Example
----------
```css
#para1 {
  text-align: center;
  color: red;
}
```

`class Selector`
----------------
The class selector selects HTML elements with a specific class attribute.
To select elements with a specific class, write a period (.) character, followed by the class name.

```css
.center {
  text-align: center;
  color: red;
}
```

can also specify that only specific HTML elements should be affected by a class.

```css
p.center {
  text-align: center;
  color: red;
}
```

`Universal Selector`
--------------------
The universal selector (*) selects all HTML elements on the page.

```css
* {
  text-align: center;
  color: blue;
}
```

`Grouping Selector`
-------------------
The grouping selector selects all the HTML elements with the same style definitions.
Look at the following CSS code (the h1, h2, and p elements have the same style definitions)
```css
h1 {
  text-align: center;
  color: red;
}
```


## `css background attachment` ##
=================================
The background-attachment property specifies whether the background image should scroll or be fixed (will not scroll with the rest of the page)


## `order of the values` ##
===========================
top right bottom left


## `text transofrmation` ##
===========================
```css
text-transform : uppercase, lowercase, capitalize;
```


## `The position Property` ##
==============================
The position property specifies the type of positioning method used for an element.

There are five different position values:

static
relative
fixed
absolute
sticky
Elements are then positioned using the top, bottom, left, and right properties. However, these properties will not work unless the position property is set first. They also work differently depending on the position value.

`position: static;`
-------------------
HTML elements are positioned static by default.
Static positioned elements are not affected by the top, bottom, left, and right properties.
An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page

`position: relative;`
----------------------
An element with position: relative; is positioned relative to its normal position.
Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

`position: fixed;`
------------------
An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.
A fixed element does not leave a gap in the page where it would normally have been located.
Notice the fixed element in the lower-right corner of the page. Here is the CSS that is used

`position: absolute;`
---------------------
An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.
Note: Absolute positioned elements are removed from the normal flow, and can overlap elements.

`position: sticky;`
-------------------
An element with position: sticky; is positioned based on the user's scroll position.

A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).


## `CSS Overflow` ##
=====================
The overflow property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.

The overflow property has the following values:

visible - Default. The overflow is not clipped. The content renders outside the element's box
hidden - The overflow is clipped, and the rest of the content will be invisible
scroll - The overflow is clipped, and a scrollbar is added to see the rest of the content
auto - Similar to scroll, but it adds scrollbars only when necessary


## `The float Property` ##
==========================
The float property is used for positioning and formatting content e.g. let an image float left to the text in a container.

The float property can have one of the following values:

left - The element floats to the left of its container
right - The element floats to the right of its container
none - The element does not float (will be displayed just where it occurs in the text). This is default
inherit - The element inherits the float value of its parent


## `The clear Property` ##
===========================
When we use the float property, and we want the next element below (not on right or left), we will have to use the clear property.

The clear property specifies what should happen with the element that is next to a floating element.

The clear property can have one of the following values:

none - The element is not pushed below left or right floated elements. This is default
left - The element is pushed below left floated elements
right - The element is pushed below right floated elements
both - The element is pushed below both left and right floated elements
inherit - The element inherits the clear value from its parent


## `The display: inline-block Value` ##
========================================
Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.

Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not.

Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements.


## `Combinators` ##
====================
A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.

There are four different combinators in CSS:

`Descendant combinator (space)`
---------------------------------
The descendant combinator matches all elements that are descendants of a specified element.

The following example selects all <p> elements inside <div> elements: 

## Example
----------
```css
div p {
  background-color: yellow;
}
```

`Child combinator (>)`
----------------------
The child combinator selects all elements that are the children of a specified element.

The following example selects all <p> elements that are children of a <div> element:

## Example
----------
```css
div > p {
  background-color: yellow;
}
```

`Next sibling combinator (+)`
-----------------------------
The next sibling combinator is used to select an element that is directly after another specific element.

Sibling elements must have the same parent element, and "adjacent" means "immediately following".

The following example selects the first <p> element that are placed immediately after <div> elements:

## Example
-----------
```css
div + p {
  background-color: yellow;
}
```

`Subsequent-sibling combinator (~)`
------------------------------------
The subsequent-sibling combinator selects all elements that are next siblings of a specified element.

The following example selects all <p> elements that are next siblings of <div> elements: 

## Example
----------
```css
div ~ p {
  background-color: yellow;
}
```


## `What are Pseudo-classes?` ##
=================================
A pseudo-class is used to define a special state of an element.

For example, it can be used to:

Style an element when a user moves the mouse over it
Style visited and unvisited links differently
Style an element when it gets focus
Style valid/invalid/required/optional form elements

## Syntax
-----------
```css
selector:pseudo-class {
  property: value;
}
```


## `What are Pseudo-Elements?` ##
==================================
A CSS pseudo-element is used to style specific parts of an element.

For example, it can be used to:

Style the first letter or line, of an element
Insert content before or after an element
Style the markers of list items
Style the viewbox behind a dialog box

## Syntax
----------
```css
selector::pseudo-element {
  property: value;
}
```


## `CSS [attribute] Selector` ##
=================================
The [attribute] selector is used to select elements with a specified attribute.

The following example selects all <a> elements with a target attribute

## Syntax
---------
```css
Example
a[target] {
  background-color: yellow;
}
```


## `What is Specificity?` ##
============================

If there are two or more CSS rules that point to the same element, the selector with the highest specificity value will "win", and its style declaration will be applied to that HTML element.

Think of specificity as a score/rank that determines which style declaration is ultimately applied to an element.


## `What is !important?` ##
============================
The !important rule in CSS is used to add more importance to a property/value than normal.

In fact, if you use the !important rule, it will override ALL previous styling rules for that specific property on that element!


## `Math function` ##
======================
The CSS math functions allow mathematical expressions to be used as property values. Here, we will explain the calc(), max() and min() functions.


## `transform` ##
==================
The transform property is used to apply transformations like rotate, scale, translate, and skew to an element.
Example transformations:
Rotate: rotate(45deg)
Scale: scale(1.5)
Translate: translateX(50px)


## `transition` ##
==================
The transition property allows smooth changes between property values over time.
You can define:
Property to animate (e.g., transform, background-color).
Duration (e.g., 0.5s).
Timing function (e.g., ease, linear).


## `The CSS object-fit Property` ##
=====================================
The CSS object-fit property is used to specify how an <img> or <video> should be resized to fit its container.

This property tells the content to fill the container in a variety of ways; such as "preserve that aspect ratio" or "stretch up and take up as much space as possible".

The object-fit property can take one of the following values:

fill - This is default. The image is resized to fill the given dimension. If necessary, the image will be stretched or squished to fit
contain - The image keeps its aspect ratio, but is resized to fit within the given dimension
cover - The image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit
none - The image is not resized
scale-down - the image is scaled down to the smallest version of none or contain


## `CSS Media Queries` ##
=========================
The @media rule, introduced in CSS2, made it possible to define different style rules for different media types.

Media queries in CSS3 extended the CSS2 media types idea: Instead of looking for a type of device, they look at the capability of the device.

Media queries can be used to check many things, such as:

width and height of the viewport
orientation of the viewport (landscape or portrait)
resolution
Using media queries are a popular technique for delivering a tailored style sheet to desktops, laptops, tablets, and mobile phones (such as iPhone and Android phones).


## `CSS Flexbox Layout Module` ##
==================================
Before the Flexbox Layout module, there were four layout modes:

Block, for sections in a webpage
Inline, for text
Table, for two-dimensional table data
Positioned, for explicit position of an element

`The flex container properties are`

flex-direction
flex-wrap
flex-flow
justify-content
align-items
align-content

`The flex-wrap Property`

The flex-wrap property specifies whether the flex items should wrap or not.

The examples below have 12 flex items, to better demonstrate the flex-wrap property.

`The flex item properties are`

order
flex-grow
flex-shrink
flex-basis
flex
align-self