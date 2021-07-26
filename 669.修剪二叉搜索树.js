/*
 * @lc app=leetcode.cn id=669 lang=javascript
 *
 * [669] 修剪二叉搜索树
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
	if (!root) {
		return null
	}
	if (root.val < low) {
		let right = trimBST(root.right,low,high)
		return right
	} else if (root.val > high) {
		let left = trimBST(root.left,low,high)
		return left
	}
	let left = trimBST(root.left,low,high)
	let right = trimBST(root.right, low, high)
	root.left = left
	root.right = right
	return root
};
// @lc code=end

