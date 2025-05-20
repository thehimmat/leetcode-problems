class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        pairs = 0
        for i in range(len(grid)):
            row = grid[i]
            for j in range(len(grid)):
                col = [row[j] for row in grid]
                if row == col:
                    pairs += 1
        return pairs