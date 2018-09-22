/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const {LeetCode} = require('../../leetcode.js');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var max = 0;
var tmp = 0;
var maxDepth = function (root) {
    if (!root) {
        return 0;
    }
    max = tmp = 0;
    dfs(root);
    return max;
};

function dfs(node) {
    if (!node) {
        max = Math.max(max, tmp);
        return;
    }

    tmp++;
    dfs(node.left);
    tmp--;

    tmp++;
    dfs(node.right);
    tmp--;
}

let nums = [3, 9, 20, null, null, 15, 7];
console.log(maxDepth(LeetCode.arrToBinaryTree(nums)));


