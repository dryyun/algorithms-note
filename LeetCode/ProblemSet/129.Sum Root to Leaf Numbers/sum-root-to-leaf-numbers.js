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
 * @return {number}
 */
var sumNumbers = function (root) {
    if (!root) {
        return 0;
    }

    let sum = 0;
    let queue = [];
    queue.push([root, root.val]);
    while (queue.length) {
        let [node, val] = queue.shift();
        if (node.left) {
            queue.push([node.left, `${val}${node.left.val}`]);
        }
        if (node.right) {
            queue.push([node.right, `${val}${node.right.val}`]);
        }
        if (!node.left && !node.right) {
            sum += Number(val);
        }
    }
    return sum;
};

console.log(sumNumbers(LeetCode.arrToBinaryTree([])));
console.log(sumNumbers(LeetCode.arrToBinaryTree([1])));
console.log(sumNumbers(LeetCode.arrToBinaryTree([1, 2, 3])));
console.log(sumNumbers(LeetCode.arrToBinaryTree([4, 9, 0, 5, 1])));
