/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
	if (!root) {
		return 0
	}
	let q = []
	q.push(root)
	let max = 0
	while (q.length) {
		let len = q.length
		max += 1
		for (let i = 0; i < len; i++) {
			const node = q.shift()
			for (let j = 0; j < node.children.length; j++) {
				const element = node.children[j];
				q.push(element)
			}
		}
	}
	return max
};
// @lc code=end

