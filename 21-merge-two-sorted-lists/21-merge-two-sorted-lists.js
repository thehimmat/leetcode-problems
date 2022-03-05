/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let mergedList;
    let mergedListPointer;
    let pointer1 = list1;
    let pointer2 = list2;
    while (pointer1 !== null || pointer2 !== null) {
        if (pointer2 === null) {
            if (mergedList !== undefined) {
                mergedListPointer.next = new ListNode(pointer1.val);
                mergedListPointer = mergedListPointer.next;
            } else {
                mergedList = new ListNode(pointer1.val);
                mergedListPointer = mergedList;
            }
            pointer1 = pointer1.next;
        } else if (pointer1 === null) {
            if (mergedList !== undefined) {
                mergedListPointer.next = new ListNode(pointer2.val);
                mergedListPointer = mergedListPointer.next;
            } else {
                mergedList = new ListNode(pointer2.val);
                mergedListPointer = mergedList;
            }
            pointer2 = pointer2.next;
        } else if (pointer1.val <= pointer2.val) {
            if (mergedList !== undefined) {
                mergedListPointer.next = new ListNode(pointer1.val);
                mergedListPointer = mergedListPointer.next;
            } else {
                mergedList = new ListNode(pointer1.val);
                mergedListPointer = mergedList;
            }
            pointer1 = pointer1.next;
        } else if (pointer1.val >= pointer2.val) {
            if (mergedList !== undefined) {
                mergedListPointer.next = new ListNode(pointer2.val);
                mergedListPointer = mergedListPointer.next;
            } else {
                mergedList = new ListNode(pointer2.val);
                mergedListPointer = mergedList;
            }
            pointer2 = pointer2.next;
        }
    }
    return mergedList ? mergedList : list1;
};