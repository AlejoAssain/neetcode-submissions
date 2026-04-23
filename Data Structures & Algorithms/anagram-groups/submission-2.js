class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramsMap = {};

        for (const word of strs) {
            const sortedWord = [...word].sort().join('');
            if (!anagramsMap[sortedWord]) {
                anagramsMap[sortedWord] = [];
            }
            anagramsMap[sortedWord].push(word);
            
        }

        return Object.values(anagramsMap)
    }
}
