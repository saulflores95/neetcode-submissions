class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums: number[]): number {
        let map = new Map();

        nums.forEach(num => {
            if(map.has(num)) {
                map.set(num, Number(map.get(num)) + 1);
            } else {
                map.set(num, 1)
            }
        })


        for(let [key, value] of map.entries()) {
            if(value === 1) {
                return key;
            }
        }
    }
}
