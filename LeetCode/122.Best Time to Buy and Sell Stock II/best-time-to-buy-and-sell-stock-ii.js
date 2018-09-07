/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let sum = 0;
    for (let i = 1, len = prices.length; i < len; i++) {
        if (prices[i] > prices[i - 1]) {
            sum += prices[i] - prices[i - 1];
        }
    }
    return sum;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));
