/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const {LeetCode, TreeNode} = require('../../leetcode.js');

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
let isEqual = true;
var isSameTree = function (p, q) {
    isEqual = true;
    dfs(p, q);
    return isEqual;
};

function dfs(p, q) {
    if (!isEqual) {
        return;
    }

    if ((p === null || q === null)) {
        isEqual = p === q;
        return;
    }
    if (p.val !== q.val) {
        isEqual = false;
        return;
    }
    if (p.left !== undefined && q.left !== undefined) {
        dfs(p.left, q.left);
    }

    if (p.right !== undefined && q.right !== undefined) {
        dfs(p.right, q.right);
    }
}

let a = [1, 2, 1];
let at = LeetCode.arrToBinaryTree(a);
let b = [1, 1, 2];
let bt = LeetCode.arrToBinaryTree(b);
console.log(isSameTree(at, bt));