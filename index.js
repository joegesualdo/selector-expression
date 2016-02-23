function extractClasses(selector){
  var selectorArray = selector.split(/([\.#]?[^\s#.]+)/).filter(Boolean)
  var classes = selectorArray.filter(function(s){
    return s[0] === '.'
  });
  return classes;
}

function extractIds(selector){
  var selectorArray = selector.split(/([\.#]?[^\s#.]+)/).filter(Boolean)
  var ids = selectorArray.filter(function(s){
    return s[0] === '#'
  });
  return ids;
}

function extractElement(selector){
  var selectorArray = selector.split(/([\.#]?[^\s#.]+)/).filter(Boolean)
  var elements = selectorArray.filter(function(s){
    return s[0] !== '#' && s[0] !== '.';
  });
  return elements[0];
}

module.exports = {
  extractClasses: extractClasses,
  extractIds: extractIds,
  extractElement: extractElement
}
