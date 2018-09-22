/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function (root) {
    stack = [];
    while (root) {
        stack.push(root);
        root = root.left;
    }
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function () {
    return stack.length > 0;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function () {
    let next = stack.pop();
    let node = next.right;
    while (node) {
        stack.push(node);
        node = node.left;
    }

    return next.val;
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

const {LeetCode, TreeNode} = require('../../leetcode.js');
const BinaryTreeTraversal = require('../../notes/binary-tree-traversal.js');

let root = LeetCode.arrToBinaryTree([4, 2, 5, 1, 3]);
console.log(BinaryTreeTraversal.inorderIteration(root));

let bst = new BSTIterator(root);
while (bst.hasNext()) {
    console.log(bst.next());
}



