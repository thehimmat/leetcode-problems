/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // define variable for longest prefix, starting with an empty string
    let prefix = '';
    // iterate through all strings in the array by each letter
    letters:
    for (let i = 0; i < strs[0].length; i++) {
        // define variable to equal current letter of first word
        let letter = strs[0][i] || '';
        prefix += letter;
        words:
        for (let j = 0; j < strs.length; j++) {
            // if all letters are equal to first letter,
            if (strs[j][i] !== letter) {
                prefix = prefix.slice(0, prefix.length - 1);
                break letters;
            }
        }
    }
    // return prefix variable
    return prefix;
};