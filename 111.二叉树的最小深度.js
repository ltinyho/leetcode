/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
	if (!root) {
		return 0
	}
	let q = []
	q.push(root)
	let min =0
	while (q.length) {
		min += 1
		let len = q.length
		for (let i = 0; i < len; i++) {
			const node = q.shift();
			if (!node.left && !node.right) {
				return  min
			}

			if (node.left) {
				q.push(node.left)
			}
			if (node.right) {
				q.push(node.right)
			}
			
		}
	}
	return min
};
// @lc code=end

