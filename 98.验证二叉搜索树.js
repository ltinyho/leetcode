/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
	if (!root) {
		return true
	}
	let stack = []
	stack.push(root)
	let prev = null
	while (stack.length) {
		let node = stack.pop()
		if (node) {
			if (node.right) {
				stack.push(node.right)
			}
			stack.push(node)
			stack.push(null)
			if (node.left) {
				stack.push(node.left)
			}
		} else {
			let node = stack.pop()
			if (prev && prev.val >= node.val) {
				return false
			}
			prev = node
		}
	}
	return true
};
// @lc code=end

