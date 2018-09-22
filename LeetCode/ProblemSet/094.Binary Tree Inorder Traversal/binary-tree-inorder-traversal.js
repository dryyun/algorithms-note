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
 * @return {number[]}
 */
var arr;
var inorderTraversal = function (root) {
    arr = [];
    recursion(root);
    return arr;
};

function recursion(root) {
    if (root) {
        recursion(root.left);
        arr.push(root.val);
        recursion(root.right);
    }
}

console.log(inorderTraversal(LeetCode.arrToBinaryTree([1, null, 2, 3])));
console.log(inorderTraversal(LeetCode.arrToBinaryTree(['a', 'b', 'c', 'd', 'f', null, null, null, 'e', 'g'])));

