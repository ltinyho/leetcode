/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
	if (!root) {
		return true
	}
	let stack = []
	stack.push(root)
	while (stack.length) {
		let node = stack.pop()
		if (!node) {
			continue
		}
		let left = getDepth(node.left)
		let right = getDepth(node.right)
		if (Math.abs(left - right) > 1) {
			return false
		}
		stack.push(node.right)
		stack.push(node.left)
	}
	return true
};


function getDepth(root) {
	if (!root) {
		return 0
	}
	let left = getDepth(root.left)
	let right = getDepth(root.right)
	return 1 + Math.max(left, right)
}

// @lc code=end

