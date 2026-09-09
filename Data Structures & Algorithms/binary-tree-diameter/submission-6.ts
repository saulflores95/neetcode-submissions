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


    constructor() {}



    diameterOfBinaryTree(root: TreeNode | null): number {
            let maxDiamater = 0;

            const dfs = (curr) => {
                if(curr === null) {
                    return 0;
                }

                let left = dfs(curr.left);
                let right = dfs(curr.right);

                maxDiamater = Math.max(maxDiamater, left + right);
                return 1 + Math.max(left, right);
            }

            dfs(root);

            console.log("diameterOfBinaryTree: ", {
                maxDiamater
            })
            return maxDiamater;

    }
}
