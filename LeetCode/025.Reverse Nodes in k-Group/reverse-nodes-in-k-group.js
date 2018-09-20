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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (!head || 1 === k) {
        return head;
    }

    let arr = [];
    while (head) {
        arr.push(head);
        head = head.next;
    }
    if (arr.length < k) {
        return arr[0];
    }

    let first, end, tmp = [], i = 0;

    arr.forEach(l => {
        i++;
        tmp.push(l);
        if (i === k) {
            if (!first) {
                [first, end] = reverseList(tmp, k);
            } else {
                let [tf, te] = reverseList(tmp, k);
                end.next = tf;
                end = te;
            }
            i = 0;
            tmp = [];
        }
    });

    if (tmp.length) {
        end.next = tmp[0];
    }
    return first;
};

/**
 * 倒序
 * @param {ListNode[]} nodes
 * @param len
 * @return {ListNode[]}
 */
let reverseList = function (nodes, len) {
    let first = node = nodes[len - 1], end;
    for (let i = len - 2; i >= 0; i--) {
        nodes[i].next = null;
        node.next = nodes[i];
        node = node.next;
        if (0 === i) {
            end = node;
        }
    }
    return [first, end];
};

let a = LeetCode.arrToList([1, 2, 3, 4, 5]);
let b = LeetCode.arrToList([1]);
let c = LeetCode.arrToList([1, 2, 3, 4, 5]);
let d = LeetCode.arrToList([1, 2, 3, 4, 5]);
let e = LeetCode.arrToList([1, 2, 3, 4, 5]);

// LeetCode.showList(reverseKGroup(a, 1));
LeetCode.showList(reverseKGroup(b, 2));
// LeetCode.showList(reverseKGroup(c, 3));
// LeetCode.showList(reverseKGroup(d, 4));
// LeetCode.showList(reverseKGroup(e, 5));