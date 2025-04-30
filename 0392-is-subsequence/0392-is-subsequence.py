class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        if len(s) == 0 or s == t:
            return True
        if len(s) > len(t):
            return False

        l = 0
        for r in range(len(t)):
            # check if chars match
            if s[l] == t[r]:
                # increment l
                l += 1
                # if l goes greater than len(s), return True
                if l > len(s) - 1:
                    return True
        return False