/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = nums[0], sum = nums[0];
    for (let i = 1, len = nums.length; i < len; i++) {
        max = Math.max(nums[i], nums[i] + max);
        sum = Math.max(sum, max)
    }
    return sum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-1, 1, 3]));
