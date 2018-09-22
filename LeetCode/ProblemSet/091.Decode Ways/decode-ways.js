/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let len = s.length;
    let ns = Number(s);
    if (0 === ns || s.substr(0, 1) === '0' || 0 === len) {
        return 0;
    }

    let prev = 0;
    let cur = 1;
    for (let i = 1; i <= len; i++) {
        if (s[i - 1] === '0') {
            cur = 0;
        }
        if (i < 2 || !(s[i - 2] === '1' || (s[i - 2] === '2' && s[i - 1] <= '6'))) {
            prev = 0;
        }
        [prev, cur] = [cur, prev + cur];
    }
    return cur;
};

// console.log(numDecodings('2')); // 1:   2
// console.log(numDecodings('12')); // 2:  1,2 || 12
// console.log(numDecodings('27')); // 1:  2,7
// console.log(numDecodings('226')); // 3: 2,2,6 || 22,6 || 2,26
// console.log(numDecodings('227')); // 2: 2,2,7 || 22,7
// console.log(numDecodings('333')); // 1: 3,3,3
// console.log(numDecodings('301'));//  1: 3,01    3,01 ||3 0 1
// console.log(numDecodings('0'));// 0:
// console.log(numDecodings('10'));// 1:
// console.log(numDecodings('00'));// 0
// console.log(numDecodings('01'));// 0
//
// console.log(numDecodings('012'));// 0
// console.log(numDecodings('272'));// 0
// console.log(numDecodings('230'));// 0
console.log(numDecodings('12120'));// 12120 // 3：    1，2，1，20 || 12，1，20 || 1，21，20


