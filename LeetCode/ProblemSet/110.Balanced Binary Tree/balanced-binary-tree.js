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
var isBalanced = function (root) {
    let isBal = true;

    let dfs = function (node) {
        if (!root || !isBal) {
            return;
        }
        let ll = node.left ? dfs(node.left) : 0;
        let rl = node.right ? dfs(node.right) : 0;
        if (Math.abs(ll - rl) > 1) {
            isBal = false;
            return;
        }
        return Math.max(ll, rl) + 1;
    };
    dfs(root);
    return isBal;
};

console.log(isBalanced(LeetCode.arrToBinaryTree([])));
console.log(isBalanced(LeetCode.arrToBinaryTree([1, null, 2, null, 3])));
console.log(isBalanced(LeetCode.arrToBinaryTree([3, 9, 20, null, null, 15, 7])));
console.log(isBalanced(LeetCode.arrToBinaryTree([1, 2, 2, 3, 3, null, null, null, null, null, 5])));