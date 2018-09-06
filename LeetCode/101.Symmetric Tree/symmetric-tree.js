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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) {
        return true;
    }
    let stack = [];
    stack.push(root.left);
    stack.push(root.right);

    while (stack.length) {
        let l = stack.pop();
        let r = stack.pop();
        if (!l && !r) {
            continue;
        }
        if (!l || !r) {
            return false;
        }

        if (l.val !== r.val) {
            return false;
        }

        stack.push(l.left);
        stack.push(r.right);

        stack.push(l.right);
        stack.push(r.left);

    }
    return true;
};

console.log(isSymmetric(LeetCode.arrToBinaryTree([1, 2, 2, 3, 4, 4, 3])));
console.log(isSymmetric(LeetCode.arrToBinaryTree([1, 2, 2, null, 3, null, 3])));
console.log(isSymmetric(LeetCode.arrToBinaryTree([1, 2, 2, 3, 4, 4, 3, 5, 6, 7, 8, 8, 7, 6, 5])));

