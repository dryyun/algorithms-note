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
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head) {
        return false;
    }
    let set = new Set();
    while (head) {
        if (set.has(head)) {
            return true;
        }
        set.add(head);
        head = head.next;
    }
    return false;
};

console.log(hasCycle(LeetCode.arrToList([1, 2, 3])));

let head = LeetCode.arrToList([2, 3]);
head.next.next = head;
console.log(hasCycle(head));
