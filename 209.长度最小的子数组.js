/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	let res = Infinity
	let subLen = 0
	let sum = 0
	let i = 0
	for (let j = 0; j < nums.length; j++) {
		sum += nums[j]
		while (sum >= target) {
			subLen = j - i + 1
			res = res < subLen ? res : subLen
			sum -= nums[i]
			i++
		}
	}
	return res === Infinity ? 0 : res
};
// @lc code=end

