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
	help(root, "", res)
	return res
};


function help(root, path, res) {
	if (!root) {
		return
	}
	path += root.val
	if (!root.left && !root.right) {
		res.push(path)
		return
	}
	help(root.left, path + "->", res)
	help(root.right, path + "->", res)
	return
}
// @lc code=end