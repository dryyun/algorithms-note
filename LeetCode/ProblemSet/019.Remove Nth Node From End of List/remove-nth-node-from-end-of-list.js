/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const {LeetCode, ListNode} = require('../../leetcode.js');

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let first = head, second = head;

    while (n) {
        first = first.next;
        n--;
    }

    if (!first) {
        return head.next;
    }

    let remove = null;
    while (first) {
        first = first.next;
        if (first) {
            second = second.next;
        } else {
            remove = second.next;
        }
    }
    second.next = remove.next;
    return head;
};

LeetCode.showList(removeNthFromEnd(LeetCode.arrToList([1, 2, 3, 4, 5]), 1));
LeetCode.showList(removeNthFromEnd(LeetCode.arrToList([1, 2, 3, 4, 5]), 2));
LeetCode.showList(removeNthFromEnd(LeetCode.arrToList([1, 2, 3, 4, 5]), 3));
LeetCode.showList(removeNthFromEnd(LeetCode.arrToList([1, 2, 3, 4, 5]), 4));
LeetCode.showList(removeNthFromEnd(LeetCode.arrToList([1, 2, 3, 4, 5]), 5));
