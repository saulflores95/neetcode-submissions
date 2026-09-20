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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        const arr = [];
        
        const trav = (node, level = 0) => {
            if (node === null) return;
            const currArr = level in arr ? arr[level] : []
            trav(node.left, level+1);
            trav(node.right, level+1);
            currArr.push(node.val);
            arr[level] = currArr;
        }

        trav(root)

        return arr.map((tr) => {
           return tr.pop();
        });
    }
}
