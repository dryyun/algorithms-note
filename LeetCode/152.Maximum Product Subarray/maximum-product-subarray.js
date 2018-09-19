/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let max = nums[0],
        min = nums[0],
        product = nums[0];

    for (let i = 1, len = nums.length; i < len; i++) {
        let tmp = max;
        max = Math.max(Math.max(nums[i] * max, nums[i]), nums[i] * min);
        min = Math.min(Math.min(nums[i] * tmp, nums[i]), nums[i] * min);

        product = Math.max(product, max);
    }
    return product;
};

console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([2, 3, -2, -4]));
console.log(maxProduct([-2, 0, -1]));

