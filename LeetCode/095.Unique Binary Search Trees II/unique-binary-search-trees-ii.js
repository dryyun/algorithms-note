/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const {LeetCode, TreeNode} = require('../../leetcode.js');
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    if (!n) {
        return [];
    }

    let dfs = function (start, end) {
        if (start > end) {
            return [null];
        }
        let arr = [];
        for (let i = start; i <= end; i++) {
            let left = dfs(start, i - 1);
            let right = dfs(i + 1, end);

            left.forEach(function (a) {
                right.forEach(function (b) {
                    var node = new TreeNode(i);
                    node.left = a;
                    node.right = b;
                    arr.push(node);
                });
            });
        }

        return arr;
    };
    return dfs(1, n);
};

let trees = generateTrees(3);
trees.forEach(t => {
    console.log(LeetCode.binaryTreeToArr(t, false));
});

