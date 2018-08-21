/**
 *
 */
"use strict";

const _ = require('lodash');
const util = require('../../util.js');

// 找爹递归
function getf(v) {
    if (f[v] === v) {
        return v;
    }
    f[v] = getf(f[v]); //这步不赋值也行，赋值的话减少了递归的层级
    return f[v];
}

function merge(v, u) {
    let t1 = getf(v);
    let t2 = getf(u);
    if (t1 !== t2) {
        f[t2] = t1; // 靠左原则
        return true;
    }
    return false;
}

/**
 * 桶排序实现，书中是使用快排实现的排序
 * @param min
 * @param max
 * @param arr => {x:1,y:2,z:3}
 * @param objectKey ，根据 object 的这个 key 排序
 * @returns {Array}
 */
function bucketSort(min, max, arr, objectKey) {
    let book = util.fillArray(max - min + 1),
        result = [],
        tmp = [];
    for (let i = 0; i < arr.length; i++) {
        let index = arr[i][objectKey] - min;
        if (!tmp[index]) {
            tmp[index] = [arr[i]];
        } else {
            tmp[index].push(arr[i]);
        }

        book[index]++;
    }

    book.forEach((val, key) => {
        if (val > 0) {
            for (let i = 0; i < val; i++) {
                result = _.concat(result, tmp[key]);
            }
        }
    });
    return result;
}


var n = 6, m = 9;
var sides = [
    {x: 2, y: 4, z: 11},
    {x: 3, y: 5, z: 13},
    {x: 4, y: 6, z: 3},
    {x: 5, y: 6, z: 4},
    {x: 2, y: 3, z: 6},
    {x: 4, y: 5, z: 7},
    {x: 1, y: 2, z: 1},
    {x: 3, y: 4, z: 9},
    {x: 1, y: 3, z: 2},
];

var f = util.fillArray(n + 1).map((v, k) => {
    return k;
});


sides = bucketSort(1, 15, sides, 'z');

var sum = 0, count = 0;
for (let i = 0; i < sides.length; i++) {
    if (merge(sides[i]['x'], sides[i]['y'])) {
        count++;
        sum += sides[i]['z'];
    }
    if (count === n - 1) {
        break;
    }
}

console.log(sum);