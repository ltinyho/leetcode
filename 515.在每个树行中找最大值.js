/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
 * @return {number[]}
 */
var largestValues = function (root) {
	if (!root) {
		return []
	}
	let q = []
	let res = []
	q.push(root)
	while (q.length) {
		let len = q.length
		let max = -Infinity
		for (let i = 0; i < len; i++) {
			const node = q.shift()
			if (node.val > max) {
				max = node.val
			}
			if (node.left) {
				q.push(node.left)
			}
			if (node.right) {
				q.push(node.right)
			}
		}
		res.push(max)
	}
	return res;
};
// @lc code=end

