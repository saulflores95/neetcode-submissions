class ListNode {
    val: number;
    next: ListNode;

    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}


class LinkedList {
    
    head: ListNode;
    tail: ListNode;

    constructor() {
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        let currIndex = 0;
        let currNode = this.head.next;

        while(currNode && currIndex !== index) {
            currNode = currNode.next;
            currIndex++;
        }

        if(!currNode) {
            return -1
        }

        return currNode.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        console.log("inserhead", { val })
        let tmpHead = new ListNode(val);
        tmpHead.next = this.head.next;
        this.head.next = tmpHead;
        if(!tmpHead.next) {
            this.tail = tmpHead;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        this.tail.next = new ListNode(val);;
        this.tail = this.tail.next
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        let currIndex = 0;
        let currNode = this.head;

        while(currIndex < index && currNode) {
            currIndex++
            currNode = currNode.next;
        }


        if(currNode && currNode.next) {
            if(currNode.next == this.tail) {
                this.tail = currNode;
            }

            currNode.next = currNode.next.next;
            return true;
        }

        return false;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        const arr = []
        let currNode = this.head.next;
        console.log("currNode:", {currNode});
        while(currNode) {
            let currValue = currNode.val;
            console.log({currValue})
            arr.push(currValue)
            currNode = currNode.next;
        }

        return arr;
    }
}
