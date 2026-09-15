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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(
        root: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    ) {        

        const traverseTree = (node) => {
            if(p.val > node.val && node.val < q.val) {
                return traverseTree(node.right);
            } 
            
            if(p.val < node.val && node.val > q.val) {
                return traverseTree(node.left)
            }

            return node;
        }

        return traverseTree(root);;
    }
}
