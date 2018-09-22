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
var detectCycle = function (head) {
    if (!head) {
        return null;
    }
    while (head) {
        if (head.isScan) {
            return head;
        }
        head.isScan = true;
        head = head.next;
    }
    return null;
};

// var detectCycle = function (head) {
//     if (!head) {
//         return null;
//     }
//     let set = new Set();
//     while (head) {
//         if (set.has(head)) {
//             return head;
//         }
//         set.add(head);
//         head = head.next;
//     }
//     return null;
// };

console.log(detectCycle(LeetCode.arrToList([1, 2, 3])));

let head = LeetCode.arrToList([2, 3]);
head.next.next = head;
console.log(detectCycle(head));
