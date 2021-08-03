/*
 * @lc app=leetcode.cn id=15 lang=golang
 *
 * [15] 三数之和
 */

// @lc code=start
func threeSum(nums []int) [][]int {
	// 排序+双指针
	sort.Ints(nums)
	var res [][]int
	for i := 0; i < len(nums)-2; i++ {
		n1 := nums[i]
		if n1 > 0 { // 大于0直接返回,后面的和不可能等于0了
			continue
		}
		if i > 0 && n1 == nums[i-1] { // 当前元素与前一个元素重复,跳过
			continue
		}
		l := i + 1         // 左指针,从i+1开始
		r := len(nums) - 1 // 从尾部开始
		for l < r {
			n2 := nums[l]
			n3 := nums[r]
			if n1+n2+n3 == 0 {
				res = append(res, []int{n1, n2, n3})
				for l < r && nums[l] == n2 { // 跳过重复元素
					l++
				}
				for l < r && nums[r] == n3 { // 跳过重复元素
					r--
				}
			} else if n1+n2+n3 < 0 {
				l++
			} else {
				r--
			}
		}
	}
	return res
}

// @lc code=end

