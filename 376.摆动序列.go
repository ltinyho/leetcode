/*
 * @lc app=leetcode.cn id=376 lang=golang
 *
 * [376] 摆动序列
 */

// @lc code=start
func wiggleMaxLength(nums []int) int {
	if len(nums) <= 1 {
		return len(nums)
	}
	curDiff := 0
	prevDiff := 0
	res := 1
	for i := 0; i < len(nums)-1; i++ {
		curDiff = nums[i+1] - nums[i]
		if (curDiff > 0 && prevDiff <= 0) || (curDiff < 0 && prevDiff >= 0) {
			res++
			prevDiff = curDiff
		}

	}
	return res
}

// @lc code=end

