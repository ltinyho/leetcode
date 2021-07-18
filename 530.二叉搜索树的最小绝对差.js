/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
	let prev = null
	let res = Infinity
	function help(root) {
		if (!root) {
			return 0
		}
		help(root.left)
		if (prev) {
			res = Math.min(res, root.val - prev.val)
		}
		prev = root
		help(root.right)

	}
	help(root)
	return res
};

// @lc code=end

