# function-apply
Allows to apply functions to hash-maps of arguments

## Features
- Binds argument object keys to function argument names
- Works with objects and arrays

## Motivation
A lot of requests and configurations for JavaScript apps come in form of JSON objects. Yet, we usually prefer to write our functions in classical manner: lising and naming all the required parameters. Mapping incoming objects to function parameters might become repetitive and make the code harder to read. Especially, when dealing with higher-order functions that don't necessarily know their products' arguments.

One more thing: naming arguments in function calls can sometimes make them easier to understand:
```javascript
var result = myFunction({data: 100, callback: myCallback})
```

## Installation

```
npm install function-apply
```

## Usage

```javascript
var apply = require('function-apply');

// Argument name binding
var multiply = apply(function (number, multiplier) {
    return number * multiplier;
});

var result = multiply({
    number: 100,
    multiplier: 2
})


// Object application
var config = [{
    url: 'http://my.url',
    method: 'get'
}, {
    url: 'http://my.url',
    method: 'get'
}];

function createRoute(url, method) {
    ......
}

var routes = config.map(apply(createRoute));
```