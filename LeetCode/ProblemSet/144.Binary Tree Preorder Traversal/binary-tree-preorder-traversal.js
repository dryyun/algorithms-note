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
var preorderTraversal = function(root) {
    let arr = [];
    let por = function (node) {
        if (node) {
            arr.push(node.val);
            por(node.left);
            por(node.right);
        }
    };
    por(root);
    return arr;
};