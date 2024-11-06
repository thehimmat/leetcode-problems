/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var l=0
    for (i=s.length-1; i>=0; i--) {
        if (s[i] !== ' ') {
            l++;
        } else {
            if (!l) {
                continue;
            } else {
                return l
            }
        }
    }
    return l;
};