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

    /**
     * 从前序与中序遍历序列构造二叉树
     * @param {Array} preorder
     * @param {Array} inorder
     * @return {TreeNode|*}
     */
    static buildTreeByPreAndInOrder(preorder, inorder) {
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
    }

    /**
     * 从中序与后序遍历序列构造二叉树
     * @param {Array} inorder
     * @param {Array} postorder
     * @return {TreeNode|*}
     */
    static buildTreeByInAndPostOrder(inorder, postorder) {
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

        rnode.left = LeetCode.buildTreeByInAndPostOrder(leftInOrder, leftPostOrder);
        rnode.right = LeetCode.buildTreeByInAndPostOrder(rightInOrder, rightPostOrder);
        return rnode;
    }


}

module.exports = BinaryTreeTraversal;
