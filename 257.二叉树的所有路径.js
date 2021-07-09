/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
	if (!root) {
		return []
	}
	let res = []
	let stack = []
	let pathSt = []
	stack.push(root)
	pathSt.push(String(root.val))
	while (stack.length) {
		let node = stack.pop()
		let path = pathSt.pop()
		if (!node.left && !node.right) {
			res.push(path)
		}
		if (node.right) {
			stack.push(node.right)
			pathSt.push(path + "->" + String(node.right.val))
		}
		if (node.left) {
			stack.push(node.left)
			pathSt.push(path + "->" + String(node.left.val))
		}
	}
	return res
};
// @lc code=end