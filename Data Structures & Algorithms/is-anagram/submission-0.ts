class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        const a = s.split("");
        const b = t.split("");
        const map = new Map<string, number>();
        for (let char of a) {
            if (map.has(char)) {
                map.set(char, map.get(char)! + 1);
            } else {
            map.set(char, 1);
            }
        }
        for (let char of b) {
            if (!map.has(char)) return false;
            map.set(char, map.get(char)! - 1);
            if (map.get(char) === 0) {
                map.delete(char);
            }
        }
        if (map.size === 0){
            return true;
        } else {
            return false
        }
    }
}
