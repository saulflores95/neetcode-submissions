class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */

    capacity: number;
    arr: any[];
    currIndex = 0

    constructor(capacity: number) {
        this.capacity = capacity;
        this.arr = Array(this.capacity).fill(null)
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        console.log("Set: ", {
            arr: this.arr,
            index: i,
            n
        })
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        console.log("pushback", { arr: this.arr, n, capacity: this.capacity, currIndex: this.currIndex  })
        if(this.capacity === this.currIndex) {
            this.resize()
        }

        this.arr[this.currIndex] = n;
        this.currIndex++
    }

    /**
     * @returns {number}
     */
    popback(): number {
        this.currIndex--;
        const currIndex = this.currIndex;
        const value = this.arr[currIndex]
        console.log("popBack: ", { arr: this.arr, value, currIndex})
        this.arr[currIndex] = undefined;
        return value
    }

    /**
     * @returns {void}
     */
    resize(): void {
        const newCapacity = this.capacity * 2;
        this.capacity = newCapacity;
        
        for(let i=0; i < newCapacity - 1;i++) {
            this.arr[i] = this.arr[i] ?? null;
        }
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.currIndex
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity;
    }
}
