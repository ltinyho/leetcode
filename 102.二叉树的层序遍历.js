/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
	let res = []
	let q = []
	if (!root) {
		return res;
	}
	q.push(root)
	while (q.length) {
		let len = q.length
		let level = []
		for (let i = 0; i < len; i++) {
			const node = q.shift()
			level.push(node.val)
			if (node.left) {
				q.push(node.left)
			}
			if (node.right) {
				q.push(node.right)
			}
		}
		res.push(level)
	}
	return res;
};
// @lc code=end

