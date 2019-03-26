/**
 * 背包问题
 */
"use strict";

const util = require('../../util.js');

let weights = 4;
let entities = {
    'a': {'p': 3000, 'w': 4}, // 音响，价值 3000，重量 4
    'b': {'p': 2000, 'w': 3}, // 笔记本电脑
    'c': {'p': 1500, 'w': 1}, // 吉他
    'd': {'p': 2000, 'w': 1}, // iPhone
};

let result = {
    'undef': util.fillArray(weights + 1)
};

let keys = Object.keys(entities);
let keysLen = keys.length;

keys.forEach(k => {
    result[k] = util.fillArray(weights + 1);
});

let preK = 'undef';
let max = 0;
for (let k = 0; k < keysLen; k++) {
    let key = keys[k];
    for (let w = 1; w <= weights; w++) {
        let last = result[preK][w];
        if (entities[key]['w'] <= w) {
            let now = entities[key]['p'] + result[preK][w - entities[key]['w']];
            result[key][w] = max = Math.max(now, last);
        } else {
            result[key][w] = last;
        }
    }
    preK = key;
}

console.log(result);
console.log('最大价值', max);

