/**
 * 背包问题
 */
"use strict";

const util = require('../../util.js');

let weights = 4;
let entities = {
    'a': {'p': 3000, 'w': 4},
    'b': {'p': 2000, 'w': 3},
    'c': {'p': 1500, 'w': 1},
    'd': {'p': 2000, 'w': 1},
};

let result = {
    'undef': util.fillArray(weights + 1)
};

Object.keys(entities).forEach(k => {
    result[k] = util.fillArray(weights + 1);
});

let keys = Object.keys(entities);

let preK = 'undef';
for (let k = 0; k < keys.length; k++) {
    let key = keys[k];
    for (let w = 1; w <= weights; w++) {
        let last = result[preK][w];
        if (entities[key]['w'] <= w) {
            let now = entities[key]['p'] + result[preK][w - entities[key]['w']];
            result[key][w] = Math.max(now, last);
        } else {
            result[key][w] = last;
        }
    }
    preK = key;
}

console.log(result);
