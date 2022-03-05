/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack += s[i];
        } else if (s[i] === ')' && stack[stack.length - 1] === '(' ||
                    s[i] === ']' && stack[stack.length - 1] === '[' ||
                    s[i] === '}' && stack[stack.length - 1] === '{'
                    ) {
            stack = stack.slice(0, stack.length - 1);
        } else {
            return false;
        }
    }
    return stack.length === 0 ?  true : false;
};

