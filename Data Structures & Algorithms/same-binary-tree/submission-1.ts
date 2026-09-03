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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */

    traverseTree(root: TreeNode | null, arr = []) {
        if(root === null ) {
            arr.push(null);
            return null;
        }

        if(root.left === null) {
            arr.push(null)
        }

        if(root.left) {
            this.traverseTree(root.left, arr)
        }

        if(root.right) {
            this.traverseTree(root.right, arr)
        }


        if(root.right === null) {
            arr.push(null)
        }

        arr.push(root.val)
        return arr;
    }

    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        // Lets traverse the right tree
        const tp = this.traverseTree(p) ?? []
        console.log("tp: ", tp)

        const tq = this.traverseTree(q) ?? []
        console.log("tq: ", tq)

        let isSame = tp.length === tq.length && tp.every((val, index) => val === tq[index]); 

        return isSame;
    }
}
