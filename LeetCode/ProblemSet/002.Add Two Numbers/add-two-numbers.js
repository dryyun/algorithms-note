/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const {LeetCode, ListNode} = require('../../leetcode.js');

var addTwoNumbers = function (l1, l2) {
    let head = l1, node = null;
    let cur = 0, carry = 0;
    while (l1 || l2) {
        let l1v = l1 ? l1.val : 0;
        let l2v = l2 ? l2.val : 0;

        cur = l1v + l2v + carry;
        carry = 0;
        if (cur >= 10) {
            carry = 1;
            cur -= 10;
        }

        if (l1) {
            l1.val = cur;
            node = l1;
        } else {
            node.next = new ListNode(cur);
            node = node.next;
        }

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    if (carry) {
        node.next = new ListNode(carry);
    }

    return head;
};

let l1 = LeetCode.arrToList([2, 4, 3]);
let l2 = LeetCode.arrToList([5, 6, 4]);

let list = addTwoNumbers(l1, l2); // 342 + 465 = 807
LeetCode.showList(list);

l1 = LeetCode.arrToList([5]);
l2 = LeetCode.arrToList([5]);

list = addTwoNumbers(l1, l2); // 5 + 5 = 10
LeetCode.showList(list);

l1 = LeetCode.arrToList([2, 4, 6]);
l2 = LeetCode.arrToList([5, 6, 4]);

list = addTwoNumbers(l1, l2); // 642 + 465 = 1107
LeetCode.showList(list);