/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const {LeetCode, TreeNode, ListNode} = require('../../leetcode.js');

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    let nums = [];
    while (head) {
        nums.push(head.val);
        head = head.next;
    }
    return sortedArrayToBST(nums);
};

var sortedArrayToBST = function (nums) {
    let len = nums.length;
    if (0 === len) {
        return null;
    }
    if (1 === len) {
        return new TreeNode(nums[0]);
    }

    let mid = Math.ceil((len - 1) / 2);
    let head = new TreeNode(nums[mid]);

    let recursion = function (nums, start, end) {
        if (start > end) {
            return null;
        }
        if (start === end) {
            return new TreeNode(nums[start]);
        }

        let mid = Math.ceil((start + end) / 2);
        let node = new TreeNode(nums[mid]);
        node.left = recursion(nums, start, mid - 1);
        node.right = recursion(nums, mid + 1, end);
        return node;
    };

    head.left = recursion(nums, 0, mid - 1);
    head.right = recursion(nums, mid + 1, len - 1);
    return head;
};

console.log(LeetCode.binaryTreeToArr(sortedListToBST(LeetCode.arrToList([-10, -3, 0, 5, 9]))));

