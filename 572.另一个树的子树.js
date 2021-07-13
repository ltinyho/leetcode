/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一个树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
	if (!root) {
		return false
	}
	return compare(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

// 返回两棵树是否相同
function compare(p, q) {
	if (!p && !q) {
		return true
	} else if (p && !q || !p && q || p.val != q.val) {
		return false
	}
	let left = compare(p.left, q.left)
	let right = compare(p.right, q.right)
	return left && right
}
// @lc code=end

