/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    let recursion = function (prices) {
        if (!prices.length) {
            return 0;
        }
        let buy = prices.shift();
        let get = Math.max(...prices) - buy;

        return Math.max(get, recursion(prices));
    };
    return recursion(prices);
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));

