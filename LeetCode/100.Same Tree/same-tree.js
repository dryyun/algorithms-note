/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const {LeetCode, BinaryTreeNode} = require('../../leetcode.js');

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    return binaryTreeToArr(p).toString() === binaryTreeToArr(q).toString();
};

function binaryTreeToArr(head) {
    if (!head) {
        return [];
    }

    let stack = [];
    stack.push([1, head]);

    let arr = Array(10).fill(null);
    let len = 10;
    let num;
    let node;
    while (stack.length) {
        [num, node] = stack.shift();

        if (node.left) {
            stack.push([num * 2, node.left]);
        }
        if (node.right) {
            stack.push([num * 2 + 1, node.right]);
        }
        if (num > len) {
            arr = arr.concat(Array(len).fill(null));
            len = len * 2;
        }
        arr[num] = node.val;
    }
    return arr.slice(1, num + 1);
}

let a = [1, 2, 3];
let at = LeetCode.arrToBinaryTree(a);
let b = [1, null, 3];
let bt = LeetCode.arrToBinaryTree(b);
console.log(isSameTree(at, bt));

let nums = [1, 2, 3, null, 5, null, 7, null, null, null, null, null, null, 14];
console.log(LeetCode.binaryTreeToArr(LeetCode.arrToBinaryTree(nums)));
