/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let output = '';
    let word = '';
    let flipWord = str => {
        let l = 0, r = str.length - 1;
        const w = str.split(''); 
        while (l < r) [w[r--], w[l++]] = [w[l], w[r]];
        str = w.join('');
        output += str + ' ';
        word = '';
    }
    for (let i in s) {
        if (i == s.length - 1) {
            word += s[i];
            flipWord(word);
        }
        else if (s[i] !== ' ') word += s[i];
        else flipWord(word);
    }
    return output.trim();
};