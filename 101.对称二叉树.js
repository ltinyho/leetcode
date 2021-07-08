/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
	if (!root) {
		return true
	}
	let stack = []
	stack.push(root.left)
	stack.push(root.right)
	while (stack.length) {
		let right = stack.pop()
		let left = stack.pop()
		if (!left && !right) {
			continue
		}
		if (left && !right || !left && right || left.val != right.val) {
			return false
		}
		stack.push(left.left)
		stack.push(right.right)
		stack.push(right.left)
		stack.push(left.right)
	}
	return true
};




// @lc code=end

