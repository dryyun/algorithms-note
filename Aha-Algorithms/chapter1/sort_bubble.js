/**
 * 冒泡排序
 */
"use strict";

const util = require('../../util.js')

let arr = util.rangArray(4, 99, 10);

console.log('随机数组', arr);

arr = bubbleSort(arr);

console.log('排序数组', arr);

/**
 * 冒泡排序，从小到大排序，把最小的数先提到开头
 * @param arr
 * @returns {Array}
 */
function bubbleSort(arr) {
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

/**
 * 冒泡排序，从小到大排序，把最大的数放到末尾
 * @param arr
 * @returns {Array}
 */
function bubbleSort2(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}

