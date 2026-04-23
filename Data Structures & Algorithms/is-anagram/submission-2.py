class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        counts = {}

        for letter in s:
            counts[letter] = counts.get(letter, 0) + 1

        for letter in t:
            if not counts.get(letter):
                return False
            else:
                counts[letter] -= 1

        return True
