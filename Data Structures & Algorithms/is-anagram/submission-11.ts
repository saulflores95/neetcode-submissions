class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sMap = new Map();
        const tMap = new Map();
        let isAna = true;

        s.split("").forEach(chr => {
            if(!sMap.has(chr)) {
                sMap.set(chr, 1);
            } else {
                let currValue = sMap.get(chr) + 1;
                sMap.set(chr, currValue);
                currValue = sMap.get(chr);
            }
        })

        t.split("").forEach(chr => {
            if(!tMap.has(chr)) {
                tMap.set(chr, 1);
            } else {
                let currValue = tMap.get(chr) + 1
                tMap.set(chr, currValue);
                currValue = tMap.get(chr);
            }
        })

        sMap.forEach((value, key, map) => {
            if(!tMap.has(key)) {
                isAna = false;
            } else {
                const tVal = tMap.get(key)
                if(tVal !== value) {
                    isAna = false;
                }
            }

        })


        tMap.forEach((value, key, map) => {
            if(!sMap.has(key)) {
                isAna = false;
            } else {
                const sVal = sMap.get(key)
                if(sVal !== value) {
                    isAna = false;
                }
            }

        })
        return isAna;
    }
}
