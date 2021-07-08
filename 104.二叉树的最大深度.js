/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function (root) {
	if (!root) {
		return 0
	}
	let q = []
	q.push(root)
	let max = 0
	while (q.length) {
		max += 1
		let len = q.length
		for (let i = 0; i < len; i++) {
			let node = q.shift()
			if (node.left) {
				q.push(node.left)
			}
			if (node.right) {
				q.push(node.right)
			}
		}
	}
	return max 
};



// @lc code=end

