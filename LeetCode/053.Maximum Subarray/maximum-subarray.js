/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let len = nums.length;

    let max = nums[0], sum = Math.max(max, 0);
    for (let i = 1; i < len; i++) {
        sum += nums[i];
        max = Math.max(max, sum);
        sum = Math.max(sum, 0);
    }
    return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-1, 1, 3]));
