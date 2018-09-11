/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    let num = x ** n;
    return Number(num.toFixed(5))
};
console.log(myPow(2.000, 10));
console.log(myPow(2.100, 3));
console.log(myPow(2.00000, -2));
console.log(myPow(0.44894, -5));
console.log(Math.pow(0.44894,-5));
