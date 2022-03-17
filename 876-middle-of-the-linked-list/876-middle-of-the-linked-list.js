/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let isEven = true;
    let middleNode = head;
    const iterateNodes = node => {
        isEven = !isEven;
        if (isEven) middleNode = middleNode.next
        if (node.next) iterateNodes(node.next);
    }
    iterateNodes(head);
    return middleNode;
};