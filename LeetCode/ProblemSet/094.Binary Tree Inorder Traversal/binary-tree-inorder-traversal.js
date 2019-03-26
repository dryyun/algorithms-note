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
var inorderTraversal = function (root) {
    let arr = [];

    let ior = function (root) {
        if (root) {
            ior(root.left);
            arr.push(root.val);
            ior(root.right);
        }
    };
    ior(root);
    return arr;
};

console.log(inorderTraversal(LeetCode.arrToBinaryTree([1, null, 2, 3])));
console.log(inorderTraversal(LeetCode.arrToBinaryTree(['a', 'b', 'c', 'd', 'f', null, null, null, 'e', 'g'])));

