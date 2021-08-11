/*
 * @lc app=leetcode.cn id=20 lang=golang
 *
 * [20] 有效的括号
 */

// @lc code=start
func isValid(s string) bool {
	if len(s)%2 == 1 {
		return false
	}
	hash := map[byte]byte{')': '(', ']': '[', '}': '{'}
	key := map[byte]bool{'(': true, '[': true, '{': true}
	stack := make([]byte, 0)
	for i := 0; i < len(s); i++ {
		_, ok := key[s[i]]
		if ok { // 左括号入栈
			stack = append(stack, s[i])
			// 遇到右括号,跟栈顶比较,看是不是左括号
		} else if len(stack) > 0 && stack[len(stack)-1] == hash[s[i]] {
			// 栈顶元素比较后出栈
			stack = stack[:len(stack)-1]
		} else { // 不相同,直接返回false
			return false
		}
	}
	return len(stack) == 0
}

// @lc code=end

