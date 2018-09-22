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
        if (pop.left) {
            pop.left.next = pop.right;
            if (pop.next) {
                pop.right.next = pop.next.left;
            } else {
                pop.right.next = null;
            }
            stack.push(pop.left);
            stack.push(pop.right);
        }
    }
};


