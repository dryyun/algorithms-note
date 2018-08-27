/**
 * 旅游行程最优化
 */
"use strict";

const util = require('../../util.js');

let days = 2;
let step = 0.5;
let n = days / step + 1;

let locals = {
    'a': {'t': 0.5, 's': 7},
    'b': {'t': 0.5, 's': 6},
    'c': {'t': 1, 's': 9},
    'd': {'t': 2, 's': 9},
    'e': {'t': 0.5, 's': 8}
};

let result = {
    'undef': util.fillArray(n),
};

Object.keys(locals).forEach(k => {
    result[k] = util.fillArray(n);
});

let preK = 'undef';
Object.keys(locals).forEach(k => {
    for (let i = step; i <= days;) {
        let t = i / step;
        let last = result[preK][t];
        if (locals[k]['t'] <= i) {
            let lt = (i - locals[k]['t']) / step;
            let now = locals[k]['s'] + result[preK][lt];
            result[k][t] = Math.max(last, now);
        } else {
            result[k][t] = last;
        }
        i += step;
    }
    preK = k;
});

console.log(result);
