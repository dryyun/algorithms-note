/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let len = nums.length;
    if (!len) {
        return 0;
    }
    let arr = [];
    arr[0] = [0, nums[0]];
    for (let i = 1; i < len; i++) {
        arr[i] = [
            Math.max(arr[i - 1][0], arr[i - 1][1]),
            arr[i - 1][0] + nums[i]
        ];
    }

    return Math.max(arr[len - 1][0], arr[len - 1][1]);
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([2, 1, 1, 2]));

