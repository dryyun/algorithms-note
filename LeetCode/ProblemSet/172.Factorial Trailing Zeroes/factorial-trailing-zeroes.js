/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let zeros = 0;
    while (n) {
        zeros += ~~(n / 5);
        n /= 5;
        n = ~~n;
    }

    return zeros;
};

console.log(trailingZeroes(1)); // 0
console.log(trailingZeroes(5)); // 1
console.log(trailingZeroes(25));// 6
console.log(trailingZeroes(30));// 7
console.log(trailingZeroes(50));// 12 => 5,10,15,20,25,25,30,35,40,45,50,50
console.log(trailingZeroes(100));// 24
console.log(trailingZeroes(125));// 31
console.log(trailingZeroes(200));// 49
