/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
    if (!root) return 0;
    return findDepth(root, 0);
};

const findDepth = (root, level) => {
    if (!root) return level;
    let leftDepth = findDepth(root.left, level+1)
    let rightDepth = findDepth(root.right, level+1)
    return Math.max(leftDepth, rightDepth)
}