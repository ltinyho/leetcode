/*
 * @lc app=leetcode.cn id=216 lang=golang
 *
 * [216] 组合总和 III
 */

// @lc code=start

var res [][]int

func combinationSum3(k int, n int) [][]int {
	res = [][]int{} // 重置结果
	backtrack(k, n, 1, []int{})
	return res
}

func backtrack(k, n, start int, path []int) {
	if len(path) == k {
		if n == 0 {
			temp := make([]int, k)
			copy(temp, path)
			res = append(res, temp)
		}
		return
	}

	for i := start; i <= 9; i++ {
		path = append(path, i)
		backtrack(k, n-i, i+1, path)
		path = path[:len(path)-1]
	}
}

// @lc code=end

