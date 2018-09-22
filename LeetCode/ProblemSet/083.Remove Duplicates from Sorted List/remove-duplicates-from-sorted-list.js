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
var deleteDuplicates = function (head) {
    if (!head) {
        return null;
    }
    let val = head.val;
    let node = new ListNode(val);
    let list = node;

    while (head) {
        if (head.val !== val) {
            val = head.val;
            node.next = new ListNode(val);
            node = node.next;
        }
        head = head.next;
    }
    return list;
};

LeetCode.showList(deleteDuplicates(LeetCode.arrToList([1, 1, 2])));
LeetCode.showList(deleteDuplicates(LeetCode.arrToList([1, 1, 2, 3, 3])));