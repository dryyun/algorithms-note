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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    if (!head || m === n) {
        return head;
    }

    let first = head, nodes = [], i = 1;
    while (head) {
        nodes[i] = head;
        head = head.next;
        i++;
    }
    let ns = nodes.slice(m, n + 1);

    let left = nodes[m - 1], right = nodes[n].next;

    if (1 === m) {
        left = first = ns.pop();
    }
    for (let i = ns.length - 1; i >= 0; i--) {
        left.next = ns[i];
        left = left.next;
    }
    left.next = right;
    return first;
};

LeetCode.showList(reverseBetween(LeetCode.arrToList([1, 2, 3, 4, 5,]), 2, 4));
LeetCode.showList(reverseBetween(LeetCode.arrToList([1, 2, 3, 4, 5,]), 2, 2));
LeetCode.showList(reverseBetween(LeetCode.arrToList([1, 2, 3, 4, 5,]), 2, 3));
LeetCode.showList(reverseBetween(LeetCode.arrToList([1, 2, 3, 4, 5,]), 2, 5));
LeetCode.showList(reverseBetween(LeetCode.arrToList([1, 2, 3, 4, 5,]), 1, 3));
LeetCode.showList(reverseBetween(LeetCode.arrToList([1, 2, 3, 4, 5,]), 1, 5));