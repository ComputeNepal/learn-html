---
sidebar_position: 11
---

# HTML Lists

HTML list is the HTML version of related items in a list like in real life. 

## Unordered List 

An unordered list is a list that is not ordered. `<ul>` tag is used to define an unordered list and `<li>` tag is used to define each item in the list.

By default, an unordered list renders out bulleted list with small black circles.

The following is the example of an unordered list:

```html title="unordered-list.html"
<ul>
  <li>First</li>
  <li>Second</li>
</ul>
```

The output for the above code is as follows:

***
+ First 
+ Second 
***

:::tip tip 
- You can change the bullets to be either *disc*, *circle*, *square* or *none* using **CSS**.
- You can nest lists.
- `<li>` can also contain other HTML elements.
:::

## Ordered List 

An ordered list is a list that is ordered. `<ol>` tag is used to define an ordered list and `<li>` tag is used to define each item in the list.

By default, an ordered list renders numbers before each list items.

The following is the example of an unordered list:

```html title="ordered-list.html"
<ol>
  <li>computenepal.com</li>
  <li>facebook.com/computenepal</li>
</ol>
```

The output for the above code is as follows:

***
1. computenepal.com 
2. facebook.com/computenepal 
***

## `type` Attribute 

You can use the type attribute to change the type of list. 

Example is as follows:

```html title="type-attribute.html"
<!-- use type="1" || "A" || "a" || "I" || "i" -->
<ol type="a">
  <li>computenepal.com</li>
  <li>facebook.com/computenepal</li>
</ol>
```

The output is as follows.

***
<ol type="a">
  <li>computenepal.com</li>
  <li>facebook.com/computenepal</li>
</ol>

***

:::tip tip 
You can control the counting of list by using the attribute `start`. Example `start="10"` will start the counting of list from 10 instead of 1.
:::

## Description List 

A description list contains the list of terms with description of each item.

The `<dl>` tag defines a description list, `<dt>` defines the term, `<dd>` describes each term.
