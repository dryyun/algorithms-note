/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    nums.sort();
    let i;
    let len = nums.length;
    for (i = 0; i < len - 1;) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i];
        }
        i += 2;
    }
    return nums[i];
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
