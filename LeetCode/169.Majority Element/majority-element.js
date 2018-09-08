/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let arr = [];
    for (let i = 0, len = nums.length; i < len; i++) {
        let v = nums[i];
        arr[v] = arr[v] === undefined ? 1 : arr[v] + 1;
        if (arr[v] > len / 2) {
            return v;
        }
    }

};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2, 2, 2, 1]));
