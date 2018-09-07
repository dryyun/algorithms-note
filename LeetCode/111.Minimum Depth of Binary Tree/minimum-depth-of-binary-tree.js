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
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) {
        return 0;
    }
    let min = Number.MAX_SAFE_INTEGER;

    let tmp = 1;
    let dfs = function (node) {
        if (tmp >= min) { // 如果这一分支已经更长了， 那就别走到底了 
            return;
        }
        if (!node.left && !node.right) {
            min = Math.min(min, tmp);
            return;
        }
        if (node.left) {
            tmp++;
            dfs(node.left);
            tmp--;
        }
        if (node.right) {
            tmp++;
            dfs(node.right);
            tmp--;
        }
    };

    dfs(root);
    return min;
};
console.log(minDepth(LeetCode.arrToBinaryTree([3, 9, 20, null, null, 15, 7])));
