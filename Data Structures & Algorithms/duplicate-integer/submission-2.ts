class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const mapNum = new Map();
        let hasDuplicate = false;
        nums.forEach(num => {
            if(!mapNum.has(num)) {
                mapNum.set(num, 1)
            } else {
                hasDuplicate = true;
            }
        })
        return hasDuplicate;
    }
}
