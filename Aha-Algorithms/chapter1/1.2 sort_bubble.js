/**
 * 冒泡排序
 */
"use strict";

const util = require('../../util.js');

let arr = util.randomArray(4, 99, 10);

console.log('随机数组', arr);

arr = bubbleSort(arr);

console.log('排序数组', arr);

/**
 * 冒泡排序，从小到大排序，把最小的数先提到开头
 * @param arr
 * @returns {Array}
 */
function bubbleSort(arr) {
    let length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) { // 修改这判断，可以改成从大到小排序
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

