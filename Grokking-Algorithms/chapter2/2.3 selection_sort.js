/**
 * 选择排序
 */
"use strict";

/**
 * 找到数组中最小的元素 index
 * @param arr
 * @returns {number}
 */
function findSmallestIndex(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;
    arr.forEach((v, k) => {
        if (smallest > v) {
            smallest = v;
            smallestIndex = k;
        }
    });
    return smallestIndex;
}

/**
 * 选择排序
 * @param arr
 * @returns {Array}
 */
function selectionSort(arr) {
    let newArr = [];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let index = findSmallestIndex(arr);
        [arr[0], arr[index]] = [arr[index], arr[0]];

        newArr.push(arr.shift());
    }
    return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));