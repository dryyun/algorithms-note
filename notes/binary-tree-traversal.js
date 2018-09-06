/**
 * 二叉树遍历的实现
 */
const {LeetCode, TreeNode} = require('../leetcode.js');

class BinaryTreeTraversal {
    /**
     * 二叉树前序遍历 - 递归
     * @param {TreeNode} root
     * @return {Array}
     */
    static preorderRecursion(root) {
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
    }

    /**
     * 二叉树前序遍历 - 迭代
     * @param {TreeNode} root
     * @return {Array}
     */
    static preorderIteration(root) {
        let arr = [];
        let stack = [];
        let node = root;
        while (node || stack.length) {
            if (node) {
                arr.push(node.val);
                stack.push(node);
                node = node.left;
            } else {
                node = stack.pop();
                node = node.right;
            }
        }
        return arr;
    }


    /**
     * 二叉树中序遍历 - 递归实现
     * @param {TreeNode} root
     * @return {Array}
     */
    static inorderRecursion(root) {
        let arr = [];
        let ior = function (node) {
            if (node) {
                ior(node.left);
                arr.push(node.val);
                ior(node.right);
            }
        };
        ior(root);
        return arr;
    }

    /**
     * 二叉树中序遍历 - 迭代实现
     * @param {TreeNode} root
     * @return {Array}
     */
    static inorderIteration(root) {
        let arr = [];
        let stack = [];
        let node = root;
        while (node || stack.length) {
            if (node) {
                stack.push(node);
                node = node.left;
            } else {
                node = stack.pop();
                arr.push(node.val);
                node = node.right;
            }
        }
        return arr;
    }

    /**
     * 二叉树后序遍历 - 递归实现
     * @param {TreeNode} root
     * @return {Array}
     */
    static postorderRecursion(root) {
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
    }

}

module.exports = BinaryTreeTraversal;
