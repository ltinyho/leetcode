/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
	if (!root) {
		return root;
	}
	let stack = [];
	let prev = null
	let cur = root
	while (stack.length || cur) {
		while (cur) {
			stack.push(cur)
			cur = cur.left
		}

		if (stack.length) {
			cur = stack.pop()
			if (cur.right === null || cur.right === prev) {
				let left = cur.left
				cur.left = cur.right
				cur.right = left
				prev = cur
				cur = null
			} else {
				stack.push(cur)
				cur = cur.right
			}
		}

	}
	return root;
};
// @lc code=end

