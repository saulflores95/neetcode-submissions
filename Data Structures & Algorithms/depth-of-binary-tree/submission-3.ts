/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        let leftTree = 0;
        let rightTree = 0;

        if (!root)
            return 0;

        if(root.left) {
             leftTree++
             leftTree = +this.maxDepth(root.left)
        }

        if(root.right) {
            rightTree++
            rightTree = +this.maxDepth(root.right);
        }


        return 1 + Math.max(leftTree, rightTree);
    }
}
