/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let r = 10;
    return ms(x, 0, r);
};

var ms = function (x, min, max) {
    if (min === max) {
        return max;
    }
    if (max * max > x) {
        max = Math.floor((min + max) / 2);
        return ms(x, min, max);
    } else if (max * max === x) {
        return max;
    } else {
        return ms(x, max, max * 2);
    }
};

console.log(mySqrt(4));
console.log(mySqrt(17));

