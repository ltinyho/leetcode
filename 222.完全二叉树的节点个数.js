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

	let lh = 0
	let rh = 0
	let left = root.left
	let right = root.right

	while (left) {
		lh += 1
		left = left.left
	}
	while (right) {
		rh += 1
		right = right.right
	}
	if (lh === rh) {
		return Math.pow(2, lh + 1) - 1
	}

	return 1 + countNodes(root.left) + countNodes(root.right)
};
// @lc code=end

