/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function (root) {
	if (!root) {
		return []
	}
	let q = []
	let res = []
	q.push(root)
	while (q.length) {
		let len = q.length;
		for (let i = len - 1; i >= 0; i--) {
			const node = q.shift();
			if (node.right) {
				q.push(node.right)
			}
			if (node.left) {
				q.push(node.left)
			}
			if (i == len - 1) {
				res.push(node.val)
			}
		}
	}
	return res;
};
// @lc code=end

