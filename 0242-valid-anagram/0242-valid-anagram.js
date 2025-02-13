/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    const list = {}
    for (const char of s) {
        list[char] = (list[char] || 0) + 1
    }
    for (const char of t) {
        if (!list[char]) return false
        list[char] = list[char] - 1
        if (list[char] === 0) delete list[char]
    }
    return Object.keys(list).length ? false : true;
};