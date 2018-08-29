/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let len = nums.length;
    if (len <= 1) {
        return len;
    }

    let lastIndex = 0;
    let lastValue = nums[0];
    for (let i = 1, tlen = nums.length; i < tlen; i++) {
        if (nums[i] === lastValue) {
            len--;
        } else {
            lastIndex++;
            lastValue = nums[i];
            nums[lastIndex] = nums[i]
        }
    }

    return len;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
console.log(nums);