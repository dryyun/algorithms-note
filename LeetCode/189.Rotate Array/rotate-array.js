/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let len = nums.length;
    k = k % len;
    while (k > 0) {
        nums.unshift(nums.pop());
        k--;
    }
};
let nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums);

nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 10);
console.log(nums);

nums = [-1, -100, 3, 99];
rotate(nums, 2);
console.log(nums);
