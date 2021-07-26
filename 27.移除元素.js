/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	if (!nums.length) {
		return 0
	}
	let left = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== val) {
			nums[left] = nums[i]
			left++
		}
	}
	return left
};
// @lc code=end

