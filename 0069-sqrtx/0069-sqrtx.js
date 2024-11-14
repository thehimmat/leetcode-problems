/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let guess = x
    while (guess * guess > x) {
        guess = Math.floor((guess + Math.floor(x / guess)) / 2);
    }
    return guess
};