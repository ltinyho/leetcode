/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
var levelOrderBottom = function (root) {
	if (!root) {
		return []
	}
	let q = []
	let res = []
	q.push(root)
	while (q.length) {
		let len = q.length
		let level = []
		for (let i = 0; i < len; i++) {
			const item = q.shift()
			level.push(item.val);
			if (item.left) {
				q.push(item.left)
			}
			if (item.right) {
				q.push(item.right)
			}
		}
		res.unshift(level)
	}
	return res;
};
// @lc code=end

