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
     * @return {boolean}
     */



    isBalanced(root: TreeNode | null): boolean {
        let isBal = true;

        const dfs = (root) => {
            if(root === null) {
                return 0;
            };
            let left = dfs(root.left);
            let right = dfs(root.right);
            
            if(1 < Math.abs(left - right)){
                isBal = false;
            }

            return 1 + Math.max(left, right);
        }

        dfs(root)

        return isBal;
    }
}
