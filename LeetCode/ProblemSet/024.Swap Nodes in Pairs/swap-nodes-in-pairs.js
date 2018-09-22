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
 * @return {ListNode}
 */
var swapPairs = function (head) {
    let th = new ListNode(0);
    th.next = head;
    let first = th, second = th, parent = th;

    while (first && second) {
        first = first.next;
        if (!first) {
            break;
        }
        first = first.next;
        if (!first) {
            break;
        }

        second = second.next;

        let last = first.next;
        parent.next = first;
        first.next = second;
        second.next = last;

        first = second;
        parent = second;

    }
    return th.next;

};

let list = LeetCode.arrToList([1, 2, 3, 4, 5, 6]);
LeetCode.showList(swapPairs(list));

