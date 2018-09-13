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

    let list = new ListNode();
    let node = list;
    let del;
    let last = head.val;
    head = head.next;
    while (head) {
        let val = head.val;
        head = head.next;
        if (val !== last && last !== del) {
            node.next = new ListNode(last);
            node = node.next;
            last = val;
        } else {
            del = last;
            last = val;
        }
    }
    if (last && last !== del) {
        node.next = new ListNode(last);
        node = node.next;
    }
    return list.next;
};

LeetCode.showList(deleteDuplicates(LeetCode.arrToList([1, 2, 3, 3, 4, 4, 5])));
LeetCode.showList(deleteDuplicates(LeetCode.arrToList([1, 1, 1, 2, 3])));
LeetCode.showList(deleteDuplicates(LeetCode.arrToList([2, 1]))); // 测试用例有这个，说好了的排序链表呢
