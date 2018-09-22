/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let max = Math.pow(2, 31) - 1;
    let min = Math.pow(-2, 31);
    let symbol = x >= 0;
    let s = Math.abs(x).toString();
    let r = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        r += s[i] * Math.pow(10, i);
    }
    r = symbol ? r : 0 - r;
    return r >= min && r <= max ? r : 0;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));

