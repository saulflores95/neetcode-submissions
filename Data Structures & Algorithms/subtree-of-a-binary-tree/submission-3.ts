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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */

    isSameTree(root: TreeNode, subRoot: TreeNode ): boolean {
        if(root === null && subRoot || root && subRoot === null) {
            return false;
        }

        let leftEqual = false
        let rightEqual = false;


        if(root === null && subRoot === null) {
            return true;
        }
    
        if(root.val  === subRoot.val) {
            leftEqual = this.isSameTree(root.left, subRoot.left);
            rightEqual = this.isSameTree(root.right, subRoot.right);;
        }

        return leftEqual && rightEqual;
    }

    traverseTree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        let currNode = false;
        let rightTree = false
        let leftTree = false


        currNode = this.isSameTree(root, subRoot)

        if(root.right) {
             rightTree =  this.traverseTree(root.right, subRoot);
        }

        if(root.left) {
             leftTree = this.traverseTree(root.left, subRoot);
        }

        return currNode || rightTree || leftTree;
    }

    isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
        // Travese Tree Until We Find same Root
        return this.traverseTree(root, subRoot)
    }
}
