/**
 * 堆
 */
"use strict";

const _ = require('lodash');

function siftdown(i, h) {
    let n = h.length - 1, // 有 n 个节点
        t = i,
        flag = 0;

    while (i * 2 <= n && 0 === flag) {
        // 判断左子节点，满足 i * 2 <= n 这个判断，就说明一定有左子节点
        let left = i * 2;
        if (h[i] > h[left]) { // 大于左子节点
            t = left;
        } else {
            t = i;
        }

        //判断是否有右子节点
        let right = i * 2 + 1;
        if (right <= n) {
            if (h[t] > h[right]) { // 如果右子节点的值更小，就选择右边
                t = right;
            }
        }
        if (t !== i) {
            [h[i], h[t]] = [h[t], h[i]]; // 交换
            i = t;
        } else {
            flag = 1;
        }
    }
    return h;
}

function siftup(i, h) {
    let flag = 0;
    if (1 === i) {
        return h;
    }

    while (1 !== i && 0 === flag) {
        let parent = Math.floor(i / 2);
        if (h[i] < h[parent]) {
            [h[i], h[parent]] = [h[parent], h[i]];
            i = parent;
        } else {
            flag = 1;
        }
    }
    return h;
}


let h = [0, 99, 5, 36, 7, 22, 17, 46, 12, 2, 19, 25, 28, 1, 92]; // 待排序数据
let n = h.length - 1;
// 建立最小堆
for (let i = Math.floor(n / 2); i >= 1; i--) {
    h = siftdown(i, h);
}

let ascOrder = [];
let num = n;
for (let i = 1; i <= num; i++) {
    ascOrder.push(h[1]);
    h[1] = h[n];
    h = siftdown(1, _.slice(h, 0, n));
    n--;
}
console.log(ascOrder);
