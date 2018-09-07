/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max = 0;
    let buyMin = Number.MAX_SAFE_INTEGER;
    for (let i = 0, len = prices.length; i < len; i++) {
        if (buyMin === prices[i]) {
            continue;
        }
        buyMin = Math.min(buyMin, prices[i]);
        if (buyMin === prices[i]) {
            continue;
        }
        max = Math.max(max, prices[i] - buyMin);
    }
    return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));

