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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head) {
        return [];
    }

    let len = 0, ls = [];
    while (head) {
        len++;
        ls.push(head);
        head = head.next;
    }
    k = k % len;
    if (0 === k) {
        return ls[0];
    }

    let right = len - k - 1;
    console.log(right);
    ls[right].next = null;
    ls[len - 1].next = ls[0];
    return ls[right + 1];
};

LeetCode.showList(rotateRight(LeetCode.arrToList([1, 2, 3, 4, 5]), 2));
LeetCode.showList(rotateRight(LeetCode.arrToList([0, 1, 2]), 3));
LeetCode.showList(rotateRight(LeetCode.arrToList([]), 0));