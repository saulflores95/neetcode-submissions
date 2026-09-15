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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        let arr = []

        const bst = (node, level=0) => {
            if (node === null) {
                return
            }

            let currArr = level in arr ?  arr[level] : []

            currArr.push(node.val)

            bst(node.left, level+1);
            bst(node.right, level+1);

            arr[level] = currArr;
        }

        bst(root);
        return arr;

    }
}
