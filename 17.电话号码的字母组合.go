/*
 * @lc app=leetcode.cn id=17 lang=golang
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
var n = []string{
	"",
	"",
	"abc",
	"def",
	"ghi",
	"jkl",
	"mno",
	"pqrs",
	"tuv",
	"wxyz",
}
var res []string
var s []byte

func letterCombinations(digits string) []string {
	if len(digits) == 0 {
		return nil
	}
	res = []string{}
	s = []byte{}
	backtrack(digits, 0)
	return res
}

func backtrack(digits string, index int) {
	if len(digits) == index {
		res = append(res, string(s))
		return
	}
	digit := digits[index] - '0'
	letter := n[digit]
	for i := 0; i < len(letter); i++ {
		s = append(s, letter[i])
		backtrack(digits, index+1)
		s = s[:len(s)-1]
	}

}

// @lc code=end

