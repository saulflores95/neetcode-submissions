class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n: number, k: number): number[][] {
        let combs = [];
        this.helper(1, [], combs, n, k);
        return combs;
    }

    helper(i, currCombs, combs, n, k) {
        if(k === currCombs.length) {
            combs.push([...currCombs]);
            return;
        }

        for (let j = i; j <= n; j++) {
            currCombs.push(j)
            this.helper(j + 1, currCombs, combs, n, k);
            currCombs.pop();
        }
    }
}
