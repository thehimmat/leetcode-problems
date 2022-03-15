/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let output = '';
    let word = '';
    for (let i of s) {
        if (i === ' ') {
            output += word + i;
            word = '';
        } else {
            word = i + word;
        }
    }
    return output + word;
};