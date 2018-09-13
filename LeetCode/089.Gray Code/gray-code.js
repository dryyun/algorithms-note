/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    let arr = [];
    for (var i = 0; i < (1 << n); i++) {
        arr[i] = i ^ (i >> 1);
    }
    return arr
};


console.log(grayCode(0));
console.log(grayCode(1));
console.log(grayCode(2));
console.log(grayCode(3));
