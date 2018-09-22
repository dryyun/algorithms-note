/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let cache = {};
    let recursion = function (s) {
        let ns = Number(s);
        if (0 === ns || s.substr(0, 1) === '0') {
            return 0;
        }

        let len = s.length;
        if (0 === len || 1 === len) {
            return len;
        }

        if (2 === len) {
            if (ns < 10 || (ns >= 30 && ns % 10 === 0)) {
                return 0;
            }
            if (ns > 26 || ns === 10 || ns === 20) {
                return 1;
            }
            return 2;
        }

        let s1 = s.substr(1);
        let s2 = s.substr(2);
        if (s.substr(0, 2) <= 26) {
            if (!cache[s1]) {
                cache[s1] = recursion(s1);
            }
            if (!cache[s2]) {
                cache[s2] = recursion(s2);
            }
            return cache[s1] + cache[s2];
        } else {
            if (!cache[s1]) {
                cache[s1] = recursion(s1);
            }
            return cache[s1];
        }
    };
    return recursion(s);
};


console.log(numDecodings('2')); // 1:   2
console.log(numDecodings('12')); // 2:  1,2 || 12
console.log(numDecodings('27')); // 1:  2,7
console.log(numDecodings('226')); // 3: 2,2,6 || 22,6 || 2,26
console.log(numDecodings('227')); // 2: 2,2,7 || 22,7
console.log(numDecodings('333')); // 1: 3,3,3
console.log(numDecodings('301'));//  1: 3,01    3,01 ||3 0 1
console.log(numDecodings('0'));// 0:
console.log(numDecodings('10'));// 1:
console.log(numDecodings('00'));// 0
console.log(numDecodings('01'));// 0

console.log(numDecodings('012'));// 0
console.log(numDecodings('272'));// 0
console.log(numDecodings('230'));// 0
console.log(numDecodings('12120'));// 3：    1，2，1，20 || 12，1，20 || 1，21，20



