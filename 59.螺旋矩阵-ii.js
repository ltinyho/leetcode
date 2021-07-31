/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
	let res = new Array(n).fill(0).map(() => new Array(n).fill(0))
	let i = j = 0;
	let count = 1
	res[i][j] = count++
	while (res[i][j] != n * n) {
		// 判断是否超出边界,超出边界就往下走
		while (j + 1 < n && res[i][j + 1] == 0) {
			res[i][j + 1] = count++
			j++
		}
		while (i + 1 < n && res[i + 1][j] == 0) {
			res[i + 1][j] = count++
			i++
		}
		while (j - 1 >= 0 && res[i][j - 1] == 0) {
			res[i][j - 1] = count++
			j--
		}
		while (i - 1 >= 0 && res[i - 1][j] == 0) {
			res[i - 1][j] = count++
			i--
		}
	}
	return res
};
// @lc code=end

