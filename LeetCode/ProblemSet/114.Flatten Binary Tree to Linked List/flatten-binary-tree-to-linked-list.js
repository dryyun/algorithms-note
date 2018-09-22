/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const {LeetCode, TreeNode, ListNode} = require('../../leetcode.js');

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (!root) {
        return;
    }
    let arr = [];
    let por = function (node) {
        if (node) {
            arr.push(node);
            por(node.left);
            por(node.right);
        }
    };
    por(root);

    let head = root;
    for (let i = 1, len = arr.length; i < len; i++) {
        head.left = null;
        head.right = arr[i];
        head = head.right;
    }
};

let root = LeetCode.arrToBinaryTree([1, 2, 5, 3, 4, null, 6]);
flatten(root);
console.log(LeetCode.binaryTreeToArr(root));

