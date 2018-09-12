/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    quickSort(nums, 0, nums.length - 1)
};

function quickSort(arr, left, right) {
    if (left > right) {
        return arr;
    }

    let base = arr[left],
        i = left,
        j = right;

    while (i !== j) {
        while (arr[j] >= base && i < j) {
            j--;
        }
        while (arr[i] <= base && i < j) {
            i++;
        }

        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[left], arr[i]] = [arr[i], arr[left]];

    arr = quickSort(arr, left, i - 1);
    arr = quickSort(arr, i + 1, right);

    return arr;
}

let nums = [2, 0, 2, 1, 1, 0];
let a = sortColors(nums);
console.log(nums);
