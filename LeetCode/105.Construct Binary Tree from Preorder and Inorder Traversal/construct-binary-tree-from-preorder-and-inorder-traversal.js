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

    let bt = function (preorder, pres, preend, inorder, ins, inend) {
        if (pres > preend) {
            return null;
        }

        let root = preorder[pres];
        let rootIndex = inorder.indexOf(root);
        let leftInOrderLen = rootIndex - ins;

        let rnode = new TreeNode(root);
        rnode.left = bt(preorder, pres + 1, pres + leftInOrderLen, inorder, ins, ins + leftInOrderLen - 1);
        rnode.right = bt(preorder, pres + leftInOrderLen + 1, preend, inorder, ins + leftInOrderLen + 1, inend);
        return rnode;
    };

    return bt(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};

console.log(LeetCode.binaryTreeToArr(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])));
