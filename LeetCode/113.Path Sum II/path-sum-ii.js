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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    if (!root) {
        return [];
    }

    let result = [];
    let tmp = [];
    let dfs = function (node, now) {
        if (node.val + now === sum && node.left == null && node.right == null) {
            result.push(tmp.concat([node.val]));
            return;
        }

        if (node.left) {
            tmp.push(node.val);
            dfs(node.left, now + node.val);
            tmp.pop();
        }
        if (node.right) {
            tmp.push(node.val);
            dfs(node.right, now + node.val);
            tmp.pop();
        }
    };
    dfs(root, 0);

    return result;
};

console.log(pathSum(LeetCode.arrToBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, 5, 1]), 22));
