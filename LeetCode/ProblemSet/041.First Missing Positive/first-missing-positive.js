/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let len = nums.length;
    if (0 === len) {
        return 1;
    }

    nums.sort((a, b) => a - b);
    if (nums[0] > 1 || nums[len - 1] <= 0) {
        return 1;
    }

    for (let i = 0; i < len; i++) {
        if (nums[i] <= 0) {
            continue;
        }
        if (i && nums[i] > 1 && nums[i - 1] <= 0) {
            return 1;
        }
        if (i && nums[i - 1] >= 1 && nums[i] - nums[i - 1] > 1) {
            return nums[i - 1] + 1;
        }

    }

    return nums[len - 1] + 1;
};

console.log(firstMissingPositive([]));
console.log(firstMissingPositive([1000, -1]));
console.log(firstMissingPositive([1, 2, 0]));
console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([7, 8, 9, 11, 12]));
