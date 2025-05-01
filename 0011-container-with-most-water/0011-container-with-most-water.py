class Solution:
    def maxArea(self, height: List[int]) -> int:
        # store areas
        maxArea = 0
        l, r = 0, len(height) - 1
        # iterate through heights
        while l < r:
            # calculate volume and store in volumes
            area = min(height[l], height[r]) * (r - l)
            maxArea = max(maxArea, area)
            # compare height with starting
            if height[l] < height[r]:
                l += 1
            else:
                r -= 1
        return maxArea