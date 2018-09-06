/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let arr = [];
    let por = function (node) {
        if (node) {
            por(node.left);
            por(node.right);
            arr.push(node.val);
        }
    };
    por(root);
    return arr;
};