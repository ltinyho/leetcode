/*
 * @lc app=leetcode.cn id=1 lang=golang
 *
 * [1] 两数之和
 */

// @lc code=start
func twoSum(nums []int, target int) []int {
	m := make(map[int]int)
	for i, v := range nums {
		if prevIdx, ok := m[v]; ok {
			return []int{prevIdx, i}
		} else {
			m[target-v] = i // key 为当前v期望的值,val 为前一个下标
		}
	}
	return nil
}

// @lc code=end

