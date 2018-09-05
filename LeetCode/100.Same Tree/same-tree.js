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

    let arr = [];
    let num;
    let node;
    while (stack.length) {
        [num, node] = stack.shift();

        arr[num] = node.val;
        if (node.left) {
            stack.push([num * 2, node.left]);
        }
        if (node.right) {
            stack.push([num * 2 + 1, node.right]);
        }
    }
    arr = arr.slice(1);
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === undefined) {
            arr[i] = null;
        }
    }
    return arr;
}

let nums = [1, 2, 3, null, 5, null, 7, null, null, null, null, null, null, 14];
// let nums = [1, null, 3];
console.log(nums);
let tree = LeetCode.arrToBinaryTree(nums);
// console.log(tree);

let arr = LeetCode.binaryTreeToArr(tree);
console.log(arr);