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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    if (!head) {
        return null;
    }
    let left = null, lnode = null;
    let right = null, rnode = null;
    while (head) {
        let node = new ListNode(head.val);
        if (head.val < x) {

            if (!left) {
                lnode = left = node;
            } else {
                lnode.next = node;
                lnode = lnode.next;
            }
        } else {
            if (!right) {
                rnode = right = node;
            } else {
                rnode.next = node;
                rnode = rnode.next;
            }
        }
        head = head.next;
    }
    left ? lnode.next = right : left = right;
    return left;
};


LeetCode.showList(partition(LeetCode.arrToList([1, 4, 3, 2, 5, 2]), 3));
LeetCode.showList(partition(LeetCode.arrToList([1]), 0));