/*
 * @lc app=leetcode.cn id=344 lang=golang
 *
 * [344] 反转字符串
 */

// @lc code=start
func reverseString(s string, k int) string {
	if len(s) == 0 || k < 0 {
		return s
	}
	b := []byte(s)
	reverse(b[0:k])
	reverse(b[k:len(b)])
	reverse(b)
	return string(b)
}

func reverse(s []byte) {
	i := 0
	j := len(s) - 1
	for i < j {
		s[i], s[j] = s[j], s[i]
		i++
		j--
	}
	return
}

// @lc code=end