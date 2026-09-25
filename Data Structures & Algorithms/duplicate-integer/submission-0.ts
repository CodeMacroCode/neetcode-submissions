class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = new Map<number, null>();
        for (let num of nums) {
            if (map.has(num)) {
                return true;
            }
            map.set(num, null);
        }
        return false;
    }
}
