/*
 * @lc app=leetcode.cn id=78 lang=golang
 *
 * [78] 子集
 */

// @lc code=start
func subsets(nums []int) [][]int {
	var res [][]int
	backtrack(nums, &res, 0, []int{})
	return res
}

func backtrack(nums []int, res *[][]int, startIdx int, path []int) {
	tmp := make([]int, len(path))
	copy(tmp, path)
	*res = append(*res, tmp)
	if startIdx >= len(nums) {
		return
	}
	for i := startIdx; i < len(nums); i++ {
		path = append(path, nums[i])
		backtrack(nums, res, i+1, path)
		path = path[:len(path)-1]
	}
}

// @lc code=end
