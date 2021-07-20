/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function (root) {
	let maxDepth = -Infinity
	let maxVal = -Infinity
	function help(root, leftLen) {
		if (!root.left && !root.right) {
			if (leftLen > maxDepth) {
				maxDepth = leftLen
				maxVal = root.val
			}
		}
		if (root.left) {
			help(root.left, leftLen + 1)
		}
		if (root.right) {
			help(root.right, leftLen + 1)
		}
		return
	}
	help(root, 0)
	return maxVal
};


// @lc code=end

