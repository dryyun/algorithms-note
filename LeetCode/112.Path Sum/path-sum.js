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
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    if (!root) {
        return false;
    }

    let has = false;
    let dfs = function (node, now) {
        if (has) {
            return;
        }
        if (node.val + now === sum && node.left == null && node.right == null) {
            has = true;
            return;
        }

        if (node.left) {
            dfs(node.left, now + node.val);
        }
        if (node.right) {
            dfs(node.right, now + node.val);
        }
    };
    dfs(root, 0);

    return has;
};

console.log(hasPathSum(LeetCode.arrToBinaryTree([1]), 0));
console.log(hasPathSum(LeetCode.arrToBinaryTree([1, 2, 10, 4]), 3));
console.log(hasPathSum(LeetCode.arrToBinaryTree([-2, null, -3]), -2));
console.log(hasPathSum(LeetCode.arrToBinaryTree([-2, null, -3]), -5));
console.log(hasPathSum(LeetCode.arrToBinaryTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, null, 1]), 22));
