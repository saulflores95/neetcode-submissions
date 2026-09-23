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
    goodNodes(root: TreeNode | null): number {
        let goodNodes = 0;
        let maxVal = root.val;


        const dfs = (node, maxVal) => {
            if(!node) return;

            if(maxVal <= node.val) {
                maxVal = node.val;

                    goodNodes++;
            }

            dfs(node.left, maxVal);
            dfs(node.right, maxVal);
        }

        dfs(root, maxVal);

        return goodNodes;
    }
}
