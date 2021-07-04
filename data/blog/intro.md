---
title: Introduction to programming
date: '2021-09-08'
logo: '/static/images/computer.png'
tags: ['markdown', 'code', 'features']
draft: false
summary: Learn about programming languages and the tools that developers use to create software.
---

This module covers the basics of programming languages. The topics included here apply to today's most modern languages. You'll learn what programming is, what programming languages are available out there, and what developer tools to use.

## Inline Highlighting

Sample of inline highlighting `sum = parseInt(num1) + parseInt(num2)`

## Code Blocks

Some Javascript code

```javascript
var num1, num2, sum
num1 = prompt('Enter first number')
num2 = prompt('Enter second number')
sum = parseInt(num1) + parseInt(num2) // "+" means "add"
alert('Sum = ' + sum) // "+" means combine into a string
```

Some Python code 🐍

```python
def fib():
    a, b = 0, 1
    while True:            # First iteration:
        yield a            # yield 0 to start with and then
        a, b = b, a + b    # a will now be 1, and b will also be 1, (0 + 1)

for index, fibonacci_number in zip(range(10), fib()):
     print('{i:3}: {f:3}'.format(i=index, f=fibonacci_number))
```
