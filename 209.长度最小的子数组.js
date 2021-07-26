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
	for (let i = 0; i < nums.length; i++) {
		sum = 0
		for (let j = i; j < nums.length; j++) {
			sum += nums[j]
			if (sum >= target) {
				subLen = j - i + 1
				res = res < subLen ? res : subLen
				break
			}
		}
	}
	return res === Infinity ? 0 : res
};
// @lc code=end

