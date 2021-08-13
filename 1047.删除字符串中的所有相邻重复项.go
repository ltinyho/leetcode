/*
 * @lc app=leetcode.cn id=1047 lang=golang
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
func removeDuplicates(s string) string {
	var res []byte
	for i := 0; i < len(s); i++ {
		if len(res) > 0 && res[len(res)-1] == s[i] {
			res = res[:len(res)-1]
		} else {
			res = append(res, s[i])
		}
	}
	return string(res)
}

// @lc code=end

