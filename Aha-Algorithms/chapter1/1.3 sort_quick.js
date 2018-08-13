/**
 * 快速排序
 */
"use strict";

const util = require('../../util.js')

let arr = util.rangArray(4, 99, 10);

console.log('随机数组', arr);

arr = quickSort(arr);

console.log('排序数组', arr);


/**
 * 快速排序，从小到大排序
 * @param arr
 */
function quickSort(arr) {
    return quickSortDo(arr, 0, arr.length - 1)
}

function quickSortDo(arr, left, right) {

    if (left > right) {
        return arr;
    }

    let base = arr[left],
        i = left,
        j = right;

    while (i !== j) {
        // 从右开始左找小于基准的数，一定要先从右往左找
        // 为什么呢？j 先走，确保最后 j 在的位置肯定 小于等于 基数，万一与 i 重合，那么这个位置交换到开头即可
        while (arr[j] >= base && i < j) {
            j--;
        }
        // 从左开始往右找大于基准的数
        while (arr[i] <= base && i < j) {
            i++;
        }

        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[left], arr[i]] = [arr[i], arr[left]];

    arr = quickSortDo(arr, left, i - 1);
    arr = quickSortDo(arr, i + 1, right);

    return arr;
}
