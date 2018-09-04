/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let min = -Math.pow(2, 31);
    let max = Math.pow(2, 31) - 1;
    if (divisor === 0 || dividend > max || dividend < min || (dividend < -max && divisor === -1)) {
        return max;
    }

    let flag = ((dividend >= 0 && divisor > 0) || (dividend <= 0 && divisor < 0));

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let r = 0;
    let t = 0;
    let tdivisor = divisor;
    while (dividend >= tdivisor) {
        dividend -= tdivisor;
        r += 1 << t;
        tdivisor += tdivisor;
        t++;

        if (t > 0 && dividend < tdivisor) {
            t = 0;
            tdivisor = divisor;
        }

    }
    return flag ? r : -r;
};
console.log(divide(10, 3));
console.log(divide(1, -1));
console.log(divide(7, -3));
console.log(divide(2147483647, 1));

