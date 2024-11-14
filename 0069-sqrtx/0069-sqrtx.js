/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    const lookup = [0,1,1,1,2,2,2,2,2,3,3,3,3,3,3,3,4]
    if (x <= 16) return lookup[x]

    let guess;
    if (x > 1048576) {
        guess = x >> 20
    } else if (x > 1024) {
        guess = x >> 10
    } else {
        guess = x >> 2
    }
    do {
        guess = (guess + Math.floor(x / guess)) >> 1;
    } while (guess * guess > x)
    return guess
};