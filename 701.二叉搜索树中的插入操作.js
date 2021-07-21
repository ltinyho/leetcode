/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
	if (!root) {
		return new TreeNode(val)
	}
	let cur = root
	let parent = root
	while (cur) {
		parent = cur
		if (cur.val > val) {
			cur = cur.left
		} else {
			cur = cur.right
		}
	}
	let node = new TreeNode(val)
	if (parent.val > val) {
		parent.left = node
	} else {
		parent.right = node
	}
	return root
};
// @lc code=end

