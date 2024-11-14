/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let beg = 0, end = x < 16 ? x : Math.floor(x/4), ans = 0
    while (beg <= end) {
        const mid = Math.floor((beg+end)/2)
        if (mid * mid > x) {
            end = mid - 1
        } else {
            ans = mid
            beg = mid + 1
        }
    }
    return ans
};