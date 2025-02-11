/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) return null

    const clonedNodes = new Map();

    const cloneNode = (originalNode) => {
        if (clonedNodes.has(originalNode)) {
            return clonedNodes.get(originalNode);
        }

        const copy = new _Node(originalNode.val);
        clonedNodes.set(originalNode, copy);

        for (const neighbor of originalNode.neighbors) {
            copy.neighbors.push(cloneNode(neighbor))
        }

        return copy
    }
    return cloneNode(node);
};