class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        l = zero_count = max_ones = 0
        for r in range(len(nums)):
            if nums[r] == 0:
                zero_count += 1
            while zero_count > 1:
                if nums[l] == 0:
                    zero_count -= 1
                l += 1
            max_ones = max(max_ones, r - l + 1 - zero_count)
        return max_ones if zero_count else max_ones - 1