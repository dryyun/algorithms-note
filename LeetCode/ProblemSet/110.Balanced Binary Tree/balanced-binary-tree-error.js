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
var isBalanced = function (root) {
    if (!root) {
        return true;
    }
    let stack = [];
    stack.push(root);
    while (stack.length) {
        let node = stack.pop();
        let ll = 0;
        if (node.left) {
            ll = 1;
            stack.push(node.left);
            let left = node.left;
            if (left.left || left.right) {
                ll = 2;
                if ((left.left && (left.left.left || left.left.right)) || (left.right && (left.right.left || left.right.right))) {
                    ll = 3;
                }
            }
        }
        let rl = 0;
        if (node.right) {
            rl = 1;
            stack.push(node.right);
            let right = node.right;
            if (right.left || right.right) {
                rl = 2;
                if ((right.left && (right.left.left || right.left.right)) || (right.right && (right.right.left || right.right.right))) {
                    rl = 3;
                }
            }
        }

        if (Math.abs(ll - rl) > 1) {
            return false;
        }
    }
    return true;
};


console.log(isBalanced(LeetCode.arrToBinaryTree([])));
console.log(isBalanced(LeetCode.arrToBinaryTree([1, null, 2, null, 3])));
console.log(isBalanced(LeetCode.arrToBinaryTree([3, 9, 20, null, null, 15, 7])));
console.log(isBalanced(LeetCode.arrToBinaryTree([1, 2, 2, 3, 3, null, null, null, null, null, 5])));
