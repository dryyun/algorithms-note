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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
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
        arr[level].push(node.val);
    }
    arr.shift(); //TODO 使用 arr.slice(1) 就会慢很多的感觉
    arr.reverse();
    return arr;
};

let nums = [3, 9, 20, null, null, 15, 7];
console.log(levelOrderBottom(LeetCode.arrToBinaryTree(nums)));