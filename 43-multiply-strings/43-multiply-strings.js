/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';
    let m = num1.length;
    let n = num2.length;
    let result = new Array(m+n).fill(0)
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const p1 = i + j;
            const p2 = p1 + 1;
            let sum = result[p2] + num1[i] * num2[j];
            result[p2] = sum % 10;
            result[p1] += Math.floor(sum / 10);
        }
    }
    if (result[0] === 0) result.shift();
    return result.join('');
};