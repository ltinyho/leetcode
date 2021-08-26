/*
 * @lc app=leetcode.cn id=39 lang=golang
 *
 * [39] 组合总和
 */

// @lc code=start
func combinationSum(candidates []int, target int) [][]int {
	sort.Ints(candidates)
	var res [][]int
	backtrack(candidates, target, &res, 0, []int{})
	return res
}

func backtrack(candidates []int, sum int, res *[][]int, startIdx int, path []int) {
	if sum < 0 {
		return
	}
	if sum == 0 {
		tmp := make([]int, len(path))
		copy(tmp, path)
		*res = append(*res, tmp)
		return
	}
	for i := startIdx; i < len(candidates); i++ {
		path = append(path, candidates[i])
		backtrack(candidates, sum-candidates[i], res, i, path)
		path = path[:len(path)-1]
	}
}

// @lc code=end

curl -X POST \
  'http://bikecompute.sg-bs:8080/computeride' \
  -H 'Content-Type:application/json' \
  -d '{"bike_id":40000238,"type":4,"track_id":0,"ride_id":0,"being_ts":0,"end_ts":0,"date":"2021-08-25","need_raw":1}'