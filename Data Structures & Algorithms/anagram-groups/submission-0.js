class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramsMap = {};

        for (const word of strs) {
            const sortedWord = [...word].sort().join('');
            if (anagramsMap[sortedWord]) {
                anagramsMap[sortedWord] = [...anagramsMap[sortedWord], word];
            } else {
                anagramsMap[sortedWord] = [word];
            }
        }

        let anagrams = [];

        for (const key in anagramsMap) {
            anagrams = [...anagrams, anagramsMap[key]]
        }

        return anagrams;
    }
}
