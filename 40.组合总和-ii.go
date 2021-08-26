/*
 * @lc app=leetcode.cn id=40 lang=golang
 *
 * [40] 组合总和 II
 */

// @lc code=start
func combinationSum2(candidates []int, target int) [][]int {
	var res [][]int
	sort.Ints(candidates)
	backtrack(candidates, target, &res, 0, []int{})
	return res
}

func backtrack(candidates []int, target int, res *[][]int, startIdx int, path []int) {
	if target == 0 {
		tmp := make([]int, len(path))
		copy(tmp, path)
		*res = append(*res, tmp)
		return
	}

	for i := startIdx; i < len(candidates)&&target-candidates[i]>=0;i++ {
		if i > startIdx && candidates[i] == candidates[i-1] {
			continue
		}
		path = append(path, candidates[i])
		backtrack(candidates, target-candidates[i], res, i+1, path)
		path = path[:len(path)-1]
	}
}

// @lc code=end

