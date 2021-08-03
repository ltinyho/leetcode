/*
 * @lc app=leetcode.cn id=202 lang=golang
 *
 * [202] 快乐数
 */

// @lc code=start
func isHappy(n int) bool {
	m := make(map[int]struct{})
	sum := 0
	for {
		sum = getSum(n)
		if _, ok := m[sum]; ok { // sum重复出现会一直循环,该跳出
			return false
		}
		if sum == 1 {
			return true
		}
		m[sum] = struct{}{}
		n = sum
	}
}

func getSum(n int) int {
	sum := 0
	for n > 0 {
		sum += (n % 10) * (n % 10)
		n = n / 10
	}
	return sum
}

// @lc code=end

