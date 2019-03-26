/**
 * 最长公共子串
 */
"use strict";

const util = require('../../util.js');

function lcs(wordA, wordB) {
    let lcs = 0;
    let lastSubIndex = 0;
    let lenA = wordA.length;
    let lenB = wordB.length;
    let table = util.fillTwoArray(lenA, lenB);

    for (let i = 0; i < lenA; i++) {
        for (let j = 0; j < lenB; j++) {
            if (wordB[i] === wordA[j]) {
                if (0 === i || 0 === j) {
                    table[i][j] = 1;
                } else {
                    table[i][j] = table[i - 1][j - 1] + 1;
                }
                if (lcs < table[i][j]) {
                    lcs = table[i][j];
                    lastSubIndex = i;
                }
            }
        }
    }
    return {
        lcs,
        offset: lastSubIndex - lcs + 1,
        sequence: wordA.slice(lastSubIndex - lcs + 1, lastSubIndex + 1)
    };
}

console.log(lcs('fish', 'bhish'));
console.log(lcs('vista', 'hish'));