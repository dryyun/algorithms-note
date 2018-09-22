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
    let bool = true;
    let last = Number.MIN_SAFE_INTEGER;
    let ior = function (node) {
        if (node && bool) {
            ior(node.left);
            if (node.val <= last) {
                bool = false;
                return;
            } else {
                last = node.val;
            }
            ior(node.right);
        }
    };
    ior(root);
    return bool;
};

console.log(isValidBST(LeetCode.arrToBinaryTree([2, 1, 3]))); // true

console.log(isValidBST(LeetCode.arrToBinaryTree([5, 1, 4, null, null, 3, 6]))); // false

console.log(isValidBST(LeetCode.arrToBinaryTree([1, 1]))); // false

console.log(isValidBST(LeetCode.arrToBinaryTree([10, 5, 15, null, null, 6, 20]))); // false
