class QNode  {
    value: number;
    next: QNode | null;
    prev: QNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class MyDeque {
    dummyHead: QNode;
    dummyTail: QNode; 

    constructor() {
        this.dummyHead = new QNode(-1);
        this.dummyTail = new QNode(-1);

        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
    }

    /**
     * @return {boolean}
     */
    isEmpty(): boolean {
        return this.dummyHead.next === this.dummyTail;
    }

    /**
     * @param {number} value
     */
    append(value: number): void {
        const newNode = new QNode(value);
        newNode.prev = this.dummyTail.prev
        newNode.next = this.dummyTail;
        this.dummyTail.prev.next = newNode;
        this.dummyTail.prev = newNode;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value: number): void {
        const newNode = new QNode(value);
        const newNextNode = this.dummyHead.next;

        newNextNode.prev = newNode;

        newNode.next = newNextNode;
        newNode.prev = this.dummyHead;

        this.dummyHead.next = newNode;
    }

    /**
     * @return {void}
     */
    pop(): number {
        if(this.isEmpty()) {
            return -1;
        }

       
        const targetNode = this.dummyTail.prev
        const value = targetNode.value
        const newTail = targetNode.prev;

        this.dummyTail.prev = newTail;
        newTail.next = this.dummyTail;
        
        return value;
    }

    /**
     * @return {number}
     */
    popleft(): number {
        if(this.isEmpty()) {
            return -1;
        }

        const targetNode = this.dummyHead.next
        const value = targetNode.value;

        const newNode = targetNode.next;


        this.dummyHead.next = newNode;
        newNode.prev = this.dummyHead;

        return value;
    }
}
