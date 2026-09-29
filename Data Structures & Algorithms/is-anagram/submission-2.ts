class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        if (s === t) return true;
        const a = s.split("").sort().join("");
        const b = t.split("").sort().join("");
        if (a === b) {
            return true;
        } else {
            return false;
        }
        
    }
}
