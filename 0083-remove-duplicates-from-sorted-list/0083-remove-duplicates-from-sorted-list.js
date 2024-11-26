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
var deleteDuplicates = function(head) {
    if (!head || !head.next) return head;
    let result = new ListNode(0);
    let currentResult = result;
    let current = head

    while (current) {
        if (currentResult === result || current.val !== currentResult.val) {
            currentResult.next = new ListNode(current.val)
            currentResult = currentResult.next
        }
        current = current.next
    }
    return result.next
};