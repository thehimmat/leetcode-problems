class Solution:
    def largestAltitude(self, gain: List[int]) -> int:
        highest = current = 0
        for g in gain:
            current += g
            highest = max(current, highest)
        return highest