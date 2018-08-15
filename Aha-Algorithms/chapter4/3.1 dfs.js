/**
 * 3.1 的 dfs 实现，快多了
 * [][][] * [][][] = [][][]
 */
"use strict";

const util = require('../../util.js');
const _ = require('lodash');

var cards = [],
    result = [],
    book = util.fillArray(10);

dfs(1);

function dfs(step) {

    if (10 === step) {
        if ((cards[1] * 100 + cards[2] * 10 + cards[3] + cards[4] * 100 + cards[5] * 10 + cards[6]) === (cards[7] * 100 + cards[8] * 10 + cards[9])) {
            result.push(_.slice(cards));
        }
        return;
    }

    for (let i = 1; i <= 9; i++) {
        if (!book[i]) {
            book[i] = 1;
            cards[step] = i;
            dfs(step + 1);
            book[i] = 0;
        }
    }
    return;
}


result.forEach(value => {
    console.log(`${value[1]}${value[2]}${value[3]} + ${value[4]}${value[5]}${value[6]} = ${value[7]}${value[8]}${value[9]}`);
});

console.log('total', result.length / 2);
