class Solution:
    def compress(self, chars: List[str]) -> int:
        i, r = 0, 0
        count = 0
        while i < len(chars):
            cur = chars[i]
            count = 0
            while i < len(chars) and chars[i] == cur:
                count += 1
                i += 1
            
            chars[r] = cur
            r += 1
            if count > 1:
                for c in str(count):
                    chars[r] = c
                    r += 1

        return r