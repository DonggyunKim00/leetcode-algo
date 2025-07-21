// 70. Climbing Stairs

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  const arr = [1, 2];
  for (let i = 2; i <= n - 1; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[arr.length - 1];
};
