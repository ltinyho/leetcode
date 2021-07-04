/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function(root) {
	if (!root) {
		return []
	}
	let res = []
	let q = []
	q.push(root)
	while (q.length) {
		let sum = 0.0
		let len = q.length
		for (let i = 0; i < len; i++) {
			const item = q.shift();
			sum += item.val
			if (item.left) {
				q.push(item.left)
			}
			if (item.right) {
				q.push(item.right)
			}
		}
		res.push(sum/len)
	}
	return res
};
// @lc code=end

