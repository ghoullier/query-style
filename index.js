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
  const match = (criteria = {}) => (node) => {
    const style = getComputedStyle(node)
    let found = true
    for (const [property, value] of Object.entries(criteria)) {
      if ('function' === typeof value) {
        found = found && value(style[property])
      }
      else {
        found = found && (value === style[property])
      }
    }
    return found
  }

  return (criteria, nodes = all()) => nodes.filter(match(criteria))
})
