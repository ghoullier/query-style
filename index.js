((root, factory) => {
  if (typeof define === 'function' && define.amd) {
    define([root.document], factory)
  }
  else if (typeof exports === 'object') {
    module.exports = factory(root.document)
  }
  else {
    root.queryStyle = factory(root.document)
  }
})(this, (document) => {
  // Get all nodes in current document
  const all = () => [...document.querySelectorAll('*')]
  // Match criteria in computed style
  const match = (criteria) => (node) => {
    // Get node computed style
    const style = getComputedStyle(node)
    // Reduce criteria to match style
    return criteria.reduce((found, [ property, value ]) => {
      // Match style value to criteria
      return found && (('function' === typeof value) ? value(style[property]) : value === style[property])
    }, true)
  }
  // Get queryStyle function
  return (criteria = {}, nodes = all()) => nodes.filter(match(Object.entries(criteria)))
})
