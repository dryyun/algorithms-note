/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const {LeetCode, TreeNode} = require('../../leetcode.js');
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (preorder.length === 0) {
        return null;
    }
    let root = preorder[0];
    let rootIndex = inorder.indexOf(root);

    let leftInOrder = inorder.slice(0, rootIndex);
    let rightInOrder = inorder.slice(rootIndex + 1);
    let leftInOrderLen = leftInOrder.length;
    // let rightInOrderLen = rightInOrder.length;
    let leftPreOrder = preorder.slice(1, leftInOrderLen + 1);
    let rightPreOrder = preorder.slice(leftInOrderLen + 1);

    let rnode = new TreeNode(root);

    rnode.left = buildTree(leftPreOrder, leftInOrder);
    rnode.right = buildTree(rightPreOrder, rightInOrder);
    return rnode;
};

console.log(LeetCode.binaryTreeToArr(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])));
