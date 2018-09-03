/**
 * @param {string} digits
 * @return {string[]}
 */
var map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
};
var dig = null;
var tmp = [], result = [];

var letterCombinations = function (digits) {
    if (digits === '') {
        return [];
    }
    dig = digits;
    tmp = [];
    result = [];
    dfs(0);
    return result;
};

function dfs(numStep) {
    let len = dig.length;
    if (numStep >= len) {
        result.push(tmp.join(""));
        return;
    }
    let strs = map[dig[numStep]];
    for (let s = 0; s < strs.length; s++) {
        tmp[numStep] = strs[s];
        dfs(numStep + 1);
    }
}

console.log(letterCombinations('23'));
console.log(letterCombinations('45'));
console.log(letterCombinations(''));


