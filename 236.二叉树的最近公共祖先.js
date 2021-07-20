/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	// 返回最近公共祖先

	// 当前节点等于p或者q或者未null时,返回当前节点
	if (root === p || root === q || !root) {
		return root
	}

	// 后序遍历
	let left = lowestCommonAncestor(root.left, p, q)
	let right = lowestCommonAncestor(root.right, p, q)
	// 如果left为null,right不能null,将right返回上去,left反之同理
	// left,right都为null时,返回null
	if (left && right) {
		return root
	} if (left && !right) {
		return left
	} else if (!left && right) {
		return right
	} else if (!left && !right) {
		return null
	}
};
// @lc code=end

