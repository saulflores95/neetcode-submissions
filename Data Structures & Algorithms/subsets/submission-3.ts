class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        let subSets = []
        let currArr = []
        let index = 0;
        this.helper(nums, currArr, subSets, index);
        return subSets;
    }


    helper(nums, currArr, subSets, index) {
        if(index >= nums.length) {
            subSets.push([...currArr])
            return;
        } 
        // case with num
        currArr.push(nums[index])
        this.helper(nums, currArr, subSets, index+1);

        // Case without num
        currArr.pop();
        this.helper(nums, currArr, subSets, index+1);
    }
}
