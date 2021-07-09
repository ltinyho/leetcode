/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function (root) {
	if (!root) {
		return 0
	}

	let left = root.left
	let right = root.right
	let lh = rh = 0
	while (left) {
		left = left.left
		lh += 1
	}
	while (right) {
		right = right.right
		rh + 1
	}
	if (lh === rh) {
		return Math.pow(2, lh + 1) - 1
	}

	return 1 + countNodes(root.left) + countNodes(root.right)
};
// @lc code=end

