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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let curr = head;
        let nxt = null;

        while(curr) {
            console.log({
                curr
            })
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        }

        console.log({prev})
        return prev
    }
}
