## Selector Expression
> Utilities for working with selector expressions.

## Install
```
$ npm install --save selector-expression
```

## Usage 
```
var extractClasses = require('selector-expression').extractClasses;
var extractIds = require('selector-expression').extractIds;
var extractElement = require('selector-expression').extractElement;

var selector = 'span.class1#id1.class2#id2'

extractClasses(selector) //=> ['.class1', 'class2']
extractIds(selector) //=> ['.id1', 'id2']
extractElement(selector) //=> 'span'
```
