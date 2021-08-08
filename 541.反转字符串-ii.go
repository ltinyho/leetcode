/*
 * @lc app=leetcode.cn id=541 lang=golang
 *
 * [541] 反转字符串 II
 */

// @lc code=start
func reverseStr(s string, k int) string {
	str := []byte(s)
	length := len(s)
	for i := 0; i < length; i += 2 * k {
		if i+k < length {
			reverseString(str[i:i+k])
		}else{
			reverseString(str[i:length])
		}
	}
	return string(str)
}

func reverseString(s []byte) {
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

