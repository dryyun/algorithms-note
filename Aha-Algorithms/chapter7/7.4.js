/**
 * 擒贼先擒王 - 并查集
 */
"use strict";

const util = require('../../util.js');

var [n, m] = util.split(util.readline("input n & m ?\n")); // n 强盗人数，m 条线索

// 初始化
var f = util.fillArray(n + 1).map((v, k) => {
    return k;
});

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
    }
}

for (let i = 1; i <= m; i++) {
    let [x, y] = util.split(util.readline());
    merge(x, y);
}

let sum = 0;
for (let i = 1; i <= n; i++) {
    if (f[i] === i) {
        sum++;
    }
}

console.log('几伙强盗？', sum);

