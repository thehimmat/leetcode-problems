/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let output = new ListNode(0);
    let current = output;
    while (l1 !== null || l2 !== null || carry !== 0) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2 + carry
        carry = Math.floor(sum/10)
        current.next = new ListNode(sum % 10)
        current = current.next
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return output.next
};