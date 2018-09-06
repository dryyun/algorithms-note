/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    let arr = [1, 1, 2];

    for (let i = 3; i <= n; i++) {
        arr[i] = 0;
        for (let j = 1; j <= i; j++) {
            arr[i] += arr[j - 1] * arr[i - j];
        }
    }
    return arr[n];
};


console.log(numTrees(3));
