/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function (root) {
	if (!root) {
		return 0
	}
	let res = 0
	let stack = []
	stack.push(root)
	while (stack.length) {
		let node = stack.pop()
		if (node.left && !node.left.left && !node.left.right) {
			res += node.left.val
		}
		if (node.right) {
			stack.push(node.right)
		}
		if (node.left) {
			stack.push(node.left)
		}
	}
	return res
}




// @lc code=end

