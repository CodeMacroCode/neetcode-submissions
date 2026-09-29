class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();
        for (let str of strs) {
            const key = str.split("").sort().join("");
            if (map.has(key)) {
                map.get(key)!.push(str)
            } else {
                map.set(key, [str])
            }
        }
        return [...map.values()];
    }
}
