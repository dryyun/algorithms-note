/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = Number.MIN_SAFE_INTEGER, sum = 0;

    nums.forEach(v => {
        sum += v;
        max = Math.max(max, sum);
        sum = Math.max(sum, 0);
    });
    return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-1, 1, 3]));
