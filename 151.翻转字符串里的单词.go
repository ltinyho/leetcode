/*
 * @lc app=leetcode.cn id=151 lang=golang
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
func reverseWords(s string) string {
	// 1.先去除空格
	b := []byte(s)
	slow := 0
	fast := 0
	// 去除头部空格
	for len(b) > 0 && fast < len(b) && b[fast] == ' ' {
		fast++
	}
	// 去除单词中间的空格
	for ; fast < len(b); fast++ {
		if fast-1 > 0 && b[fast-1] == b[fast] && b[fast] == ' ' {
			continue
		} else {
			b[slow] = b[fast]
			slow++
		}
	}
	if slow-1 > 0 && b[slow-1] == ' ' {
		b = b[:slow-1]
	} else {
		b = b[:slow]
	}
	// 2.翻转全部字符串
	reverse(b, 0, len(b)-1)
	i := 0
	// 3.翻转单词
	for i < len(b) {
		j := i
		// 找到单词位置
		for ; j < len(b) && b[j] != ' '; j++ {
		}
		reverse(b, i, j-1)
		i = j
		i++
	}

	return string(b)
}

func reverse(b []byte, l, r int) {
	for l < r {
		b[l], b[r] = b[r], b[l]
		l++
		r--
	}
}

// @lc code=end

