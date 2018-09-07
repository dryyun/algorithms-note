/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const {LeetCode, TreeNode} = require('../../leetcode.js');

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    let last = Number.MIN_SAFE_INTEGER;
    let stack = [];
    let node = root;
    while (node || stack.length) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            node = stack.pop();
            if (node.val > last) {
                last = node.val;
            } else {
                return false;
            }
            node = node.right;
        }
    }
    return true;
};

console.log(isValidBST(LeetCode.arrToBinaryTree([2, 1, 3]))); // true

console.log(isValidBST(LeetCode.arrToBinaryTree([5, 1, 4, null, null, 3, 6]))); // false

console.log(isValidBST(LeetCode.arrToBinaryTree([1, 1]))); // false

console.log(isValidBST(LeetCode.arrToBinaryTree([10, 5, 15, null, null, 6, 20]))); // false
