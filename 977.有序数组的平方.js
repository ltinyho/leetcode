/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
	let left = 0
	let right = nums.length - 1
	let idx = right
	let res = new Array(idx)
	while (left <= right) {
		if (nums[left] * nums[left] < nums[right] * nums[right]) {
			res[idx] = nums[right] * nums[right]
			right--
			idx--
		} else {
			res[idx] = nums[left] * nums[left]
			idx--
			left++
		}
	}
	return res
};
// @lc code=end

