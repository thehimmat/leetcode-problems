/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = {}) {
    if (n <= 2) return n // base cases
    if (memo[n]) return memo[n] // check if solution already found

    memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo) // store previous result 
    return memo[n] // exit recursion or return final solution
};
