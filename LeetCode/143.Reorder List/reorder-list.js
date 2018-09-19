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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head) {
        return;
    }
    let nodes = [];
    while (head) {
        nodes.push(head);
        head = head.next;
    }

    let start = 0;
    let end = nodes.length - 1;

    let lstart = nodes[start++];
    while (start <= end) {
        let lend = nodes[end--];
        lstart.next = lend;
        lstart = nodes[start++];
        lend.next = lstart;
        if (lstart) {
            lstart.next = null;
        }
    }

};

let list = LeetCode.arrToList([1, 2, 3, 4]);
reorderList(list);
LeetCode.showList(list);

list = LeetCode.arrToList([1, 2, 3, 4, 5]);
reorderList(list);
LeetCode.showList(list);

