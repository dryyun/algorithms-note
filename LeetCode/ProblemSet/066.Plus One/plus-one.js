/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let plue = 1;
    let len = digits.length;
    let i = len - 1;
    for (; i >= 0; i--) {
        let r = digits[i] + plue;
        if (10 === r) {
            digits[i] = 0;
        } else {
            digits[i] = r;
            break;
        }
    }
    if (-1 === i) {
        digits.unshift(1);
    }
    return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([2, 9, 9]));
console.log(plusOne([9, 9, 9]));
