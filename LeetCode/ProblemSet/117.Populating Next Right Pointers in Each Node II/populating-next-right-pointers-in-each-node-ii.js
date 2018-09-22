/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */
const {LeetCode, TreeLinkNode, TreeNode} = require('../../leetcode.js');

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function (root) {
    if (!root) {
        return;
    }
    let stack = [];
    root.next = null;
    stack.push(root);

    while (stack.length) {
        let pop = stack.pop();
        if (!pop) {
            continue;
        }

        let left = pop.left;
        let right = pop.right;
        let next = pop.next;

        let dirNext = null;
        if (left && right) {
            left.next = right;
            dirNext = right;
        } else if (left) {
            dirNext = left;
        } else if (right) {
            dirNext = right;
        }
        stack.push(left);
        stack.push(right);

        if (dirNext && next) {
            while (next) {
                if (next.left) {
                    dirNext.next = next.left;
                    break;
                } else if (next.right) {
                    dirNext.next = next.right;
                    break;
                } else {
                    next = next.next;
                }
            }
        } else if (dirNext) {
            dirNext.next = null;
        }
    }
};
