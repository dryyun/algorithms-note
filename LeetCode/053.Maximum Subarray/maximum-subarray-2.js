/**
 * @param {number[]} nums
 * @return {number}
 */
var max;

var maxSubArray = function (nums) {
    max = Number.MIN_SAFE_INTEGER;
    msa(nums);
    return max;
};

var msa = function (nums) {
    if (0 === nums.length) {
        return 0;
    }

    let sum = nums.pop() + msa(nums);
    max = Math.max(max, sum);

    return Math.max(sum, 0);
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-1, 1, 3]));
