/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 3) { 
        return n
    }
    return 2 * climbStairs(n - 2) + climbStairs(n - 3);
};