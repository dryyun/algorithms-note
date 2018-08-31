/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const {LeetCode, ListNode} = require('../../leetcode.js');

var addTwoNumbers = function (l1, l2) {
    let list = null;
    let node = null;
    let val = null;
    let carry = 0;
    while (l1 || l2) {
        let l1v = l1 ? l1.val : 0;
        let l2v = l2 ? l2.val : 0;

        let sum = l1v + l2v + carry;
        if (sum >= 10) {
            carry = 1;
            val = sum - 10;
        } else {
            carry = 0;
            val = sum;
        }

        if (!list && !node) {
            node = new ListNode(val);
            list = node;
        } else {
            node.next = new ListNode(val);
            node = node.next;
        }

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    if (carry) {
        node.next = new ListNode(carry);
    }

    return list;
};

let l1 = LeetCode.arrToList([2, 4, 3]);
let l2 = LeetCode.arrToList([5, 6, 4]);

let list = addTwoNumbers(l1, l2);
LeetCode.showList(list);


