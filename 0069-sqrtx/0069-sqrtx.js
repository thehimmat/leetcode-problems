/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    const lookup = [0,1,1,1,2,2,2,2,2,3,3,3,3,3,3,3,4]
    if (x <= 16) return lookup[x]

    let guess = x
    while (guess * guess > x) {
        guess = Math.floor((guess + Math.floor(x / guess)) / 2);
    }
    return guess
};