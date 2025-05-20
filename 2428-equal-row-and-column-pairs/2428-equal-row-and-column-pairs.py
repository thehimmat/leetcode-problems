from collections import Counter
class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        row_counter = Counter(tuple(row) for row in grid)
        pairs = 0
        for j in range(len(grid)):
            col = tuple(grid[i][j] for i in range(len(grid)))
            pairs += row_counter[col]
        return pairs