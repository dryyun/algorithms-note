/**
 * 桶排序
 */
"use strict";

const util = require('../../util.js');

let min = 10,
    max = 99,
    size = 20;
let arr = util.randomArray(min, max, size);

console.log('随机数组', arr);

arr = bucketSort(min, max, arr);

console.log('排序数组', arr);


/**
 * 桶排序，从小到大排序
 * @param min
 * @param max
 * @param arr
 * @returns {Array}
 */
function bucketSort(min, max, arr) {
    let book = util.fillArray(max - min + 1), result = [];
    for (let i = 0; i < arr.length; i++) {
        let index = arr[i] - min;
        book[index]++;
    }

    book.forEach((val, key) => {
        if (val > 0) {
            for (let i = 0; i < val; i++) {
                result.push(key + min)
            }
        }
    });
    return result;
}

