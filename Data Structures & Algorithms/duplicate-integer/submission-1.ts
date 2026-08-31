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
            if(!mapNum.has(num)) {
                mapNum.set(num, 1)
            } else {
                hasDuplicate = true;
            }
        })

        console.log("hasDuplicate: ", { mapNum, hasDuplicate })
        return hasDuplicate;
    }
}
