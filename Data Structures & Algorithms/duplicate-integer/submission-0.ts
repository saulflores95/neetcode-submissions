class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const mapNum = new Map();
        let hasDuplicate = false;

        console.log("hasDuplicate: ", { mapNum, hasDuplicate })

        nums.forEach(num => {
            const numStr = num.toString()
            console.log({ numStr })
            if(!mapNum.has(numStr)) {
                mapNum.set(numStr, 1)
            } else {
                hasDuplicate = true;
            }
        })

        console.log("hasDuplicate: ", { mapNum, hasDuplicate })
        return hasDuplicate;
    }
}
