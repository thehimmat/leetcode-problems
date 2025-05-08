class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        l = r = max_ones = 0
        while r < len(nums):
            if nums[r] == 0:
                k -= 1
            
            while k < 0:
                if nums[l] == 0:
                    k += 1
                l += 1
            
            max_ones = max(max_ones, r - l + 1)
            r += 1

        return max_ones