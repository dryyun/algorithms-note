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
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) {
        return [];
    }
    let stack = [];
    stack.push([0, root]); // level = 1

    let arr = [];
    let level;
    let node;
    while (stack.length) {
        [level, node] = stack.shift();
        if (!node) {
            continue;
        }

        stack.push([level + 1, node.left]);

        stack.push([level + 1, node.right]);

        arr[level] = node.val;
    }
    return arr;
};

console.log(rightSideView(LeetCode.arrToBinaryTree([1, 2, 3, null, 5, null, 4])));
