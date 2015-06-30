(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([root.document], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(root.document);
  } else {
    root.queryStyle = factory(root.document);
  }
}(this, function (document) {
  'use strict';

  function queryStyle(criteria, nodes) {
    var filter = Function.prototype.call.bind(Array.prototype.filter);

    nodes = nodes || document.querySelectorAll('*');
 
    return filter(nodes, function onEach(node) {
      var style = getComputedStyle(node);
      return match(style, criteria);
    });
  }

  function match(style, criteria) {
    var found = true;
    for (var property in criteria) {
      var value = criteria[property];
      if ('function' === typeof value) {
        found = found && value(style[property]);
      }
      else {
        found = found && (value === style[property]);
      }
    }
    return found;
  }

  return queryStyle;
}));
