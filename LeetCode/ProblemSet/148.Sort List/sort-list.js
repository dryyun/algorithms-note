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
var sortList = function (head) {
    if (!head || head.next == null) {
        return head;
    }
    let nodes = [];
    while (head) {
        nodes.push(head);
        head = head.next;
    }
    nodes.sort((a, b) => a.val - b.val);
    let first = node = nodes[0];
    for (let i = 1, len = nodes.length; i < len; i++) {
        node.next = nodes[i];
        nodes[i].next = null;
        node = nodes[i];
    }
    return first;

};

let list = LeetCode.arrToList([4, 2, 1, 3]);
LeetCode.showList(sortList(list));

list = LeetCode.arrToList([-1, 5, 3, 4, 0]);
LeetCode.showList(sortList(list));
