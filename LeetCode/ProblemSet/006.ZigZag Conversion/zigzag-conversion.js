/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (1 === numRows) {
        return s;
    }

    let array = new Array(numRows);

    let num = 0, d = 1; //d = 1 =》 向下，d = -1 =》 斜上
    for (let i = 0, len = s.length; i < len; i++) {
        array[num] = (array[num] ? array[num] : '') + s[i]
        num += d
        if (num === numRows - 1) {
            d = -1
        } else if (num === 0) {
            d = 1
        }
    }
    return array.join('')
};

console.log(convert('LEETCODEISHIRING', 3));
console.log(convert('LEETCODEISHIRING', 4));
console.log(convert('PAYPALISHIRING', 3));
// console.log(convert('PAYPALISHIRING', 4));

