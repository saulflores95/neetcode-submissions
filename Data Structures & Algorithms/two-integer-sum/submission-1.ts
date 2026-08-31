class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        console.log("twoSums", { nums, target })
        let L = 0
        let R = 1


        do {
            for (let i = 0; i < nums.length - 1; i++) {
                if(nums[L] + nums[R] === target)
                    break;
                R++
            }

            if(nums[L] + nums[R] !== target) {
                L++
                R = L + 1   
            }
        } while (nums[L] + nums[R] !== target)



        return [L, R]
    }
}
