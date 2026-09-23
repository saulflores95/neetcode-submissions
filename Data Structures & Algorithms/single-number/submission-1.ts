class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums: number[]): number {
        let map = new Map();

        nums.forEach(num => {
            if(map.has(num)) {
                let val = Number(map.get(num)) + 1;
                map.set(num, val);
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
