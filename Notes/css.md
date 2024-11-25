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