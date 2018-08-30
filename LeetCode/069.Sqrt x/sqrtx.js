/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let r = 1;
    while (true) {
        if (r * r > x) {
            r--;
            break;
        } else if (r * r === x) {
            break;
        }
        r++;
    }
    return r;
};

console.log(mySqrt(4));
console.log(mySqrt(8));

