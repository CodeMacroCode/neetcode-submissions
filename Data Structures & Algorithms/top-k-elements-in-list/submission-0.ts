class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();
        const result: number[] = [];
        
        for (let num of nums) {
            if (map.has(num)) {
                map.set(num, map.get(num)! + 1)
            } else {
                map.set(num, 1)
            }
        }

        const bucket: number[][] = Array.from({length: nums.length + 1}, () => []);

        for (let [num, frequency] of map.entries()) {
            bucket[frequency].push(num);
        }
        
        for(let i = bucket.length - 1; i >=0; i--) {
            for (let num of bucket[i]) {
                result.push(num)

                if (result.length === k) {
                    return result
                }
            }
        }
        return result;
    }
}
