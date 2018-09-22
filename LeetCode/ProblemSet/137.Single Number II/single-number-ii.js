/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    nums.sort((a, b) => a - b);
    let len = nums.length;

    if (nums[0] !== nums[1]) {
        return nums[0];
    }

    for (let i = 0; i < len - 1; i++) {
        if (nums[i] !== nums[i - 1] && nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }
    return nums[len - 1];
};

console.log(singleNumber([0, 0, 0, 1]));
console.log(singleNumber([0, 1, 1, 1]));
console.log(singleNumber([2, 2, 3, 2, 0, 3, 3]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));

