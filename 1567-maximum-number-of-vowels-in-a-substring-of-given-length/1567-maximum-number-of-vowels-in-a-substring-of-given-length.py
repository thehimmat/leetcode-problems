class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = set('aeiou')
        maxCount = count = l = r = 0
        while r < len(s):
            if s[r] in vowels:
                count += 1
            if r - l + 1 > k:
                count -= 1 if s[l] in vowels else 0
                l += 1
            maxCount = max(count, maxCount)
            r += 1
        return maxCount