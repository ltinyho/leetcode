/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
	while (root) {
		// BST有序,只要保证 cur在[p,q]之间
		if (root.val > p.val && root.val > q.val) {
			root = root.left
		} else if (root.val < p.val && root.val < q.val) {
			root = root.right
		} else {
			return root
		}
	}
	return null
};
// @lc code=end

