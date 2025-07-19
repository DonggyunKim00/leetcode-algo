// 1. Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let answerNumbers;

  for (let i = 0; i < nums.length; i++) {
    const answerIdx = nums.findIndex((item, idx) => {
      return item === target - nums[i] && idx > i;
    });

    if (answerIdx !== -1 && answerIdx > i) {
      answerNumbers = [i, answerIdx];
      break;
    }
  }

  return answerNumbers;
};
