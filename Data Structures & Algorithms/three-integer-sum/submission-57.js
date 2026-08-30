class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let results = []
        console.log({nums})
        const sortedNums = nums.sort((a,b)=> a - b);
        console.log({sortedNums})

        for(let i = 0; i < sortedNums.length; i++) {
            const currNum = sortedNums[i]
            let L = i + 1;
            let R = sortedNums.length - 1
            while (L < R) {
                const leftValue = sortedNums[L]
                const rightValue = sortedNums[R]
                const sum = currNum + leftValue + rightValue
                console.log({
                    values: [currNum, leftValue, rightValue],
                    indexes: [i, L, R],
                    sum
                })
                if(sum === 0) {
                    results.push([currNum, leftValue, rightValue])
                    L++
                }

                if(sum > 0) {
                    R--
                }

                if(sum < 0) {
                    L++
                }
            }
        }

        const uniqueArrays = Array.from(new Set(results.map(JSON.stringify)), JSON.parse)

        console.log({ results, uniqueArrays })
        return uniqueArrays;
    }
}
