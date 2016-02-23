var extractClasses = require('../index.js').extractClasses;
var extractIds = require('../index.js').extractIds;
var extractElement = require('../index.js').extractElement;

var selector = 'span.class1#id1.class2#id2'

console.log(extractClasses(selector))
console.log(extractIds(selector))
console.log(extractElement(selector))
