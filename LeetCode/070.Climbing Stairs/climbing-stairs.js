/**
 * TODO 其他解法
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let r = [1, 1];
    for (let i = 2; i <= n; i++) {
        r[i] = r[i - 1] + r[i - 2];
    }
    return r[n];
};

console.log(climbStairs(0));
console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));

