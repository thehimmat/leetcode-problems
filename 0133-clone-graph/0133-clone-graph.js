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
    const clonedNodes = [];

    const cloneNode = (originalNode) => {
        const clonedNode = new _Node(originalNode.val);
        clonedNodes[clonedNode.val] = clonedNode
        for (let neighbor of originalNode.neighbors) {
            if (clonedNodes[neighbor.val]) {
                clonedNode.neighbors.push(clonedNodes[neighbor.val]);
            } else {
                clonedNode.neighbors.push(cloneNode(neighbor));
            }
        }
        return clonedNode;
    }
    return node ? cloneNode(node) : null;
};