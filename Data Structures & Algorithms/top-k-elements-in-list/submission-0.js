class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = {}

        for (const value of nums) {
            if (!freqMap[value]) {
                freqMap[value] = 0;
            }
            freqMap[value] += 1;
        }

        const orderedFreq = Object.entries(freqMap);
        orderedFreq.sort((a, b) => a[1] - b[1])

        return orderedFreq.slice(-k).map(freq => Number(freq[0]));
    }
}
