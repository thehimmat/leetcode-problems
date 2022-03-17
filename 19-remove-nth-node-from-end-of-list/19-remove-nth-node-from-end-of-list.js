/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let nodeList = [];
    let current = head;
    while (current.next) {
        nodeList.push(current);
        current = current.next;
    }
    if (!nodeList.length) {
        return head.next;
    } else if (n === 1) {
        nodeList[nodeList.length - 1].next = null;
    } else if (n === nodeList.length + 1) {
        return head.next
    } else {
        for (let i = nodeList.length - 1; i >= 0; i--) {
            if (i + 1 === nodeList.length + 1 - n) {
                nodeList[i].next = nodeList[i].next.next;
                break;
            }
        }
    }
    return head;
};