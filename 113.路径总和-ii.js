/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
	if (!root) {
		return []
	}
	let res = []
	let path = []
	path.push(root.val)
	help(root, path, targetSum, res)
	return res
};

function help(root, path, count, res) {
	count -= root.val
	if (!root.left && !root.right && count === 0) {
		res.push([...path]) // 复制path,防止里面的值变动 
		return
	}
	if (!root.left && !root.right) {
		return
	}
	if (root.left) {
		path.push(root.left.val)
		help(root.left, path, count, res)
		path.pop()
	}
	if (root.right) {
		path.push(root.right.val)
		help(root.right, path, count, res)
		path.pop()
	}
}
// @lc code=end

