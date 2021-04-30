/**
 * @typedef {{ [property in keyof CSSStyleDeclaration]: string | ((value: string) => boolean) }} Criteria
 */

/**
 * Get all nodes in current document
 * @returns {Element[]}
 */
const all = () => [...document.querySelectorAll("*")]

/**
 * Match criteria in computed style
 * @param {Criteria} criteria
 * @returns {(node: Element) => boolean}
 */
const match = (criteria) => (node) => {
  // Get node computed style
  const style = getComputedStyle(node)
  // Reduce criteria to match style
  return criteria.reduce((found, [property, value]) => {
    // Match style value to criteria
    return found && ("function" === typeof value ? value(style[property]) : value === style[property])
  }, true)
}
/**
 * Return a subset of element list according to given criteria
 * @param {Criteria} [criteria]
 * @param {Element[]} [nodes]
 */
export default function queryStyle(criteria = {}, nodes = all()) {
  return nodes.filter(match(Object.entries(criteria)))
}
