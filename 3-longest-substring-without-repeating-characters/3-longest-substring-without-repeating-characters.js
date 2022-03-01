/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    for (let i = 0; i < s.length - longest; i++) {
        let letters = new Set();
        let current = 0;
        for (let pointer = i; pointer < s.length; pointer++) {
            let setSize = letters.size;
            letters.add(s[pointer]);
            if (setSize === letters.size) {
                letters = new Set();
                break;
            } else {
                current++;
            }
        }
        if (current > longest) {
            longest = current;
        }
    }
    return longest;
};