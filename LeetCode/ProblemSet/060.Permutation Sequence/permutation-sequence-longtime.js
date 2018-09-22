/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let result;
    let sum = 0;
    let book = [];
    let dfs = function (t, step) {
        if (result) {
            return;
        }
        if (step > n) {
            sum++;
            if (sum === k) {
                result = t;
            }
            return;
        }
        for (let i = 0; i < n; i++) {
            if (book[i] === 1) {

            } else {
                book[i] = 1;
                dfs(`${t}${i+1}`, step + 1);
                book[i] = 0;
            }
        }
    };
    dfs('', 1);
    return result;
};


console.log(getPermutation(3, 3));
console.log(getPermutation(4, 9));