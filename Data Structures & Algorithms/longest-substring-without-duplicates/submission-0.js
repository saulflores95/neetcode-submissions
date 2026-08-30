class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set()
        let L = 0;
        let longest = 0;
        for(let R = 0; R < s.length; R++) {
            let rChar = s[R];
            while(set.has(rChar)) {
                set.delete(s[L])
                L++
            } 
            set.add(rChar)
            longest = Math.max(longest, R - L + 1)
        }
        return longest;
    }
}
