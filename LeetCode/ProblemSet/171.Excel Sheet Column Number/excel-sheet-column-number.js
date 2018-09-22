/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    let n = 0;
    for (let i = 0, len = s.length; i < len; i++) {
        n += Math.pow(26, len - i - 1) * (s[i].charCodeAt(0) - 64);
    }
    return n;
};
console.log(titleToNumber('A'));  // 1 =>1
console.log(titleToNumber('AB')); // 26+2 => 28
console.log(titleToNumber('BA')); // 26*2+1 =>53
console.log(titleToNumber('ZY')); // 26*26+25 => 701
console.log(titleToNumber('AAA')); // 1*26*26+1*26+1 => 703
