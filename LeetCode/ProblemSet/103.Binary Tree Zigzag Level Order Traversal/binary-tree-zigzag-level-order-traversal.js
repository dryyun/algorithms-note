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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) {
        return [];
    }
    let stack = [];
    stack.push([1, root]); // level = 1

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
        if (!arr[level]) {
            arr[level] = [];
        }
        if (level % 2) {
            arr[level].push(node.val);
        } else {
            arr[level].unshift(node.val);
        }
    }
    arr.shift();
    return arr;
};

console.log(zigzagLevelOrder(LeetCode.arrToBinaryTree([3, 9, 20, null, null, 15, 7])));
