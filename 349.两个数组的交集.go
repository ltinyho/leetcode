/*
 * @lc app=leetcode.cn id=349 lang=golang
 *
 * [349] 两个数组的交集
 */

// @lc code=start
func intersection(nums1 []int, nums2 []int) []int {
	m := make(map[int]int)
	for i := 0; i < len(nums1); i++ {
		_, ok := m[nums1[i]]
		m[nums1[i]] = 1
	}
	res := make([]int, 0)
	for i := 0; i < len(nums2); i++ {
		val, ok := m[nums2[i]]
		if ok && val == 1 {
			res = append(res, nums2[i])
			m[nums2[i]] += 1
		}
	}
	return res
}

// @lc code=end

