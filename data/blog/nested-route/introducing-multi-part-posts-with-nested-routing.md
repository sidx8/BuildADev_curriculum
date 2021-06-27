---
title: Data Types in JavaScript
date: '2021-05-02'
logo: '/static/images/web.png'
tags: ['JavaScript', 'Data Structure', 'Beginner']
draft: false
summary: 'We have all heard of this term somewhere or the other but what actually are Data types and why do we even need them in the first place?
'
---

# Basics

We have all heard of this term somewhere or the other but what actually are Data types and why do we even need them in the first place?

<div align="center">

![Thinking](https://www.fluentu.com/blog/wp-content/uploads/2016/09/thinking-in-a-foreign-language-e1479154410182.png)

</div>

A Data type or simply type is an attribute(property) of data that tells the compiler or interpreter how the programmers like us intend to use the data.
Basically, they convey what we want to the compiler or interpreter.
So, As we have a clear understanding of what data types actually are, let us look at Data Types in Javascript.

<iframe
  src="https://codesandbox.io/embed/new?codemirror=1&highlights=6,7,8,9"
  style={{ width : '100%', height : '600px'}}
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

In JavaScript data types are divided into two major categories -
Primitive Data Type
Non-Primitive(Reference) Data Type.
Both these categories are further divided into various categories and we will have a detailed study of each and every one of them.

![Data Types In Js](https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/datatypes-in-javascript/Images/Presentation20.jpg)

## Some Characteristics of Javascript

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeVghze86gBQaAZRHlNU8VEdGvSgjQyDeWmtt8QPALNhI5_7g/viewform?embedded=true"  style={{ width : '100%', height : '600px'}} frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>

But before understanding data type in detail, let us understand some major characteristics of Javascript.

- Javascript is a dynamic type language i.e we don’t need to specify the type of data that we will store in a variable or a constant because Javascript Engine takes care of it.
  Okay so what exactly does the above statement implies?
  It means that we can simply assign any value to a variable or a constant like string, number, or boolean.
  We can consider variables or constants as a box in which we can store any type of data. <br /> ![Data Types In Js](https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/datatypes-in-javascript/Images/Presentation20.jpg)

Let us have a look at how we will implement this in code.

```js:javascript
var temp1 = 100;
var temp2 = "hello"
```

In the example above temp is a variable and is holding a number and temp1 is also a variable but is holding a string. The point to notice is that we did not specify the type for any one of them. Javascript automatically identifies our choice and act accordingly.

- Javascript variables are loosely typed which means that you can assign any type of literal values to a variable e.g. string, integer, float, boolean, etc, and redeclare it later. That means we have the flexibility to change our minds anytime during the program and JavaScript will act accordingly. ![Data Types In Js](https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/datatypes-in-javascript/Images/Presentation20.jpg) <br /> Now let us look at our good friend box. Here it first contained a string value which was then replaced by a number and finally was replaced by a boolean value.
  Let us have a look at some code.

```js:javascript
var first = 1;
first = "one is a number"
```

In the example above we first declared the variable first as a number and then as a string.

<!-- ## Use Cases

Here's some reasons to use nested routes

- More logical content organisation (blogs will still be displayed based on the created date)
- Multi-part posts
- Different sub-routes for each author
- Internationalization (though it would be recommended to use [Next.js built in i8n routing](https://nextjs.org/docs/advanced-features/i18n-routing))

## Note

- The previous/next post links at bottom of the template is currently sorted by date. One could explore modifying the template to refer the reader to the previous/next post in the series, rather than by date. -->
