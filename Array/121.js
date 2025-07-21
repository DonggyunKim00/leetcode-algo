// 121. Best Time to Buy and Sell Stock

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    min = Math.min(prices[i - 1], min);
    profit = Math.max(prices[i] - min, profit);
  }

  return profit;
};
