class Solution {
    /**
     * @param {number} prices
     * @return {number}
     */
    maxProfit(prices) {
        console.log({prices})
        let minVal = prices[0]
        let L = 0;
        let R = L + 1
        let profit = 0

        while(R !== prices.length) {
            let leftValue = prices[L]
            let rightValue = prices[R]
            let tmpProfit = rightValue - leftValue
            profit = Math.max(profit, tmpProfit)

            console.log({
                leftValue,
                rightValue,
                minVal,
                profit
            })

            if(rightValue < minVal) {
                minVal = rightValue
                L = R
            }
            R++
        }


        return profit;
    }
}
