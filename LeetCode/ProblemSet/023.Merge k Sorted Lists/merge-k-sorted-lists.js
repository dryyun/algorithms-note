/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const {LeetCode, ListNode} = require('../../leetcode.js');

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (!lists.length) {
        return [];
    }
    if (1 === lists.length) {
        return lists[0];
    }

    let arr = [];
    lists.forEach(l => {
        while (l) {
            arr.push(l);
            l = l.next;
        }
    });
    if (!arr.length) {
        return [];
    }

    arr.sort((a, b) => a.val - b.val);

    let head = node = arr[0];
    for (let i = 1, len = arr.length; i < len; i++) {
        node.next = arr[i];
        arr[i].next = null;
        node = node.next;
    }
    return head;
};


let a = LeetCode.arrToList([1, 4, 5]);
let b = LeetCode.arrToList([1, 3, 4]);
let c = LeetCode.arrToList([2, 6]);

LeetCode.showList(mergeKLists([]));
LeetCode.showList(mergeKLists([]));
LeetCode.showList(mergeKLists([a, b, c]));
