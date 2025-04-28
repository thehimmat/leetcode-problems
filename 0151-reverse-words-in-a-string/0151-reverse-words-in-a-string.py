class Solution:
    def reverseWords(self, s: str) -> str:
        # assign empty list
        result = collections.deque()
        # assign empty word
        word = ''
        # iterate through list
        for char in s:
            # add letters to word
            if char != ' ':
                word += char
            # if space is found
            elif word and char == ' ':
                # add str to front of list
                result.appendleft(word)
                # reset word to empty
                word = ''
        if word:
            result.appendleft(word)
        # return joined list with spaces
        return ' '.join(result)
