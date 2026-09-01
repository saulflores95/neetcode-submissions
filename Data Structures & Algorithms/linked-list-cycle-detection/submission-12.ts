/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */


class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        let hasCycle = false;
        let L = head;
        let R = head;
        
        if(!L || !R)
            return hasCycle;

        while(R !== null && R.next !== null) {
            L = L.next;
            R = R.next.next
            if(L === R) {
                hasCycle = true;
                break;
            }
        }

        return hasCycle
    }
}
