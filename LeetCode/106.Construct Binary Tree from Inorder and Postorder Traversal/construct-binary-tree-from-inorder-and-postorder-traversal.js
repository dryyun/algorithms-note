/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const {LeetCode, TreeNode} = require('../../leetcode.js');

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    if (inorder.length === 0) {
        return null;
    }
    let postOrderLen = postorder.length;
    let rootVal = postorder[postOrderLen - 1];

    let rootIndex = inorder.indexOf(rootVal);
    let leftInOrder = inorder.slice(0, rootIndex);
    let rightInOrder = inorder.slice(rootIndex + 1);
    let leftInOrderLen = leftInOrder.length;

    let leftPostOrder = postorder.slice(0, leftInOrderLen);
    let rightPostOrder = postorder.slice(leftInOrderLen, -1);

    let rnode = new TreeNode(rootVal);

    rnode.left = buildTree(leftInOrder, leftPostOrder);
    rnode.right = buildTree(rightInOrder, rightPostOrder);
    return rnode;
};

console.log(LeetCode.binaryTreeToArr(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])));
