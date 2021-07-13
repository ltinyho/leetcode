/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
	return help(p, q);
};

// 返回两棵树是否相同
function help(p, q) {
	if (!p && !q) {
		return true
	} else if (p && !q || !p && q || p.val != q.val) {
		return false
	}
	let left = help(p.left, q.left)
	let right = help(p.right, q.right)
	return left && right
}
// @lc code=end

