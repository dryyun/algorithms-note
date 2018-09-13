/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let len = nums.length;
    if (len <= 1) {
        return len;
    }

    let times = 1;
    let lastIndex = 0;
    let lastValue = nums[0];
    for (let i = 1, tlen = nums.length; i < tlen; i++) {
        if (nums[i] === lastValue && 2 === times) {
            len--;
            times = 2;
        } else if (nums[i] === lastValue) {
            times++;
            lastIndex++;
            nums[lastIndex] = nums[i]
        } else {
            times = 1;
            lastIndex++;
            lastValue = nums[i];
            nums[lastIndex] = nums[i]
        }
    }

    return len;
};

let nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums));
console.log(nums);
//
nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums));
console.log(nums);

nums = [1, 1, 1, 1];
console.log(removeDuplicates(nums));
console.log(nums);
