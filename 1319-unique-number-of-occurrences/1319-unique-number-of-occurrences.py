class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        tracker = {}
        for n in arr:
            if n not in tracker:
                tracker[n] = 1
            else:
                tracker[n] += 1
        return len(tracker.values()) == len(set(tracker.values()))