/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	if (s.length != t.length) {
		return false
	}
	let m = {}
	for (let i = 0; i < s.length; i++) {
		let val = m[s[i]]
		if (val === undefined) {
			m[s[i]] = 1
		} else {
			m[s[i]] += 1
		}
	}

	for (let i = 0; i < t.length; i++) {
		let val = m[t[i]]
		if (val === undefined) { // s中不存在的元素,false
			return false
		}
		m[t[i]] -= 1
	}
	for (const key in m) {
		if (m[key] > 0) {
			return false
		}
	}
	return true
};
// @lc code=end

