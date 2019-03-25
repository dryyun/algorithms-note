/**
 * 选择排序
 */
"use strict";

const util = require('../../util.js');

let arr = util.randomArray(4, 99, 20);

console.log('随机数组', arr);

arr = selectionSort(arr);

console.log('排序数组', arr);

/**
 * 选择排序，从小到大排序，把最小的数先提到开头
 * @param arr
 * @returns {Array}
 */
function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr;
}


