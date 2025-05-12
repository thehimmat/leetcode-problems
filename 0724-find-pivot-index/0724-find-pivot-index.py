class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        right_sum = total = sum(nums)
        left_sum = 0
        for i in range(len(nums)):
            curr = nums[i]
            right_sum -= curr
            if left_sum == right_sum:
                return i
            left_sum += curr
        return -1