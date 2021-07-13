/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
	if (!root) {
		return 0
	}
	let left = minDepth(root.left)
	let right = minDepth(root.right)
	if (!root.left && root.right) {
		return 1 + left
	}
	if (root.left && !root.right) {
		return 1 + right
	}
	return 1 + Math.min(left, right)
};

// @lc code=end

