/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let len = nums.length;
    if (1 === len) {
        return;
    }
    if (2 === len) {
        [nums[0], nums[1]] = [nums[1], nums[0]];
        return;
    }

    let i = 0;
    for (i = nums.length - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            break;
        }
    }
    if (0 === i) {
        nums.sort((a, b) => a - b);
        return;
    }

    let ai = i - 1; // 待交换的 index
    let an = nums[ai];

    let j = 0;
    for (j = i; j < len - 1; j++) {
        if (nums[j] > an && nums[j + 1] <= an) {
            break;
        }
    }
    [nums[ai], nums[j]] = [nums[j], nums[ai]];

    let last = nums.slice(i).sort((a, b) => a - b);
    nums.length = i; // 巧妙
    nums.push(...last);
};

nums = [1, 2];
nextPermutation(nums);
console.log(nums);

nums = [3, 2, 1];
nextPermutation(nums);
console.log(nums);

nums = [1, 1, 5];
nextPermutation(nums);
console.log(nums);

nums = [1, 5, 8, 4, 7, 6, 5, 4, 1];
nextPermutation(nums);
console.log(nums);
