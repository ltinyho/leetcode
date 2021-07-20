/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
var findMode = function (root) {
	if (!root) {
		return []
	}
	var maxCount = 0
	var count = 0
	var res = []
	var prev = null
	function help(root) {
		if (!root) {
			return
		}
		help(root.left)
		if (!prev) {
			count = 1
		} else if (prev.val === root.val) {
			count++
		} else {
			count = 1
		}
		prev = root
		if (count === maxCount) {
			res.push(root.val)
		} else if (count > maxCount) {
			maxCount = count
			res = []
			res.push(root.val)
		}

		help(root.right)

	}
	help(root)
	return res
};
// @lc code=end

