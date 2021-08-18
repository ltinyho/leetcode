/*
 * @lc app=leetcode.cn id=77 lang=golang
 *
 * [77] 组合
 */

// @lc code=start
var res [][]int

func combine(n int, k int) [][]int {
	res = [][]int{}
	// 防卫代码,参数校验
	if n <= 0 || k <= 0 || k > n {
		return res
	}
	backtrack(n, k, 1, []int{})
	return res
}

func backtrack(n, k, start int, track []int) {
	if len(track) == k { // 组合等于k
		temp := make([]int, k)
		copy(temp, track)
		res = append(res, temp)
		return
	}

	// 如果当前开始的元素后续的个数已经不足需要的元素个数,就没必要搜索了
	// len(track) 表示当前放入的个数
	// left = k-len(track) 表示需要在放入多少个元素
	// n - (k-len(track)) + 1 表示合理的搜索范围
	// 比如:n=4,k=3 如果当前len(track)=0,那么
	// 4 - (3-0)+1 = 2 表示从 2(表示元素不是下标)开始都是合理的
	// 如果是3,肯定不合理,后面总共才[3,4]两个元素
	// +1 是需要包括起始位置
	maxIdx := n - (k - len(track)) + 1
	for i := start; i <= maxIdx; i++ {
		track = append(track, i)
		backtrack(n, k, i+1, track)  // i+1 往后遍历,防止重复计算
		track = track[:len(track)-1] // 回溯,弹出推入的值
	}
}

// @lc code=end

