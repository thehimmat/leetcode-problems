/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let digits = [];
    let isPalindrome = true;
    if (x < 0) {
        return false;
    }
    while (x !== 0) {
        let digit = x % 10;
        digits.push(digit);
        x = Math.floor(x / 10);
    }
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] !== digits[digits.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
};


    // create empty array to store digits
    // create boolean, assigned to true
    // handle edge case if number is zero
    // extract each digit into an array
    // use a while loop to store each digit in an array
    // while number isn't zero
    // use modulo 10 to find last digit
    // then divide by 10 and floor number until zero
    
    // iterate through array to check if palindrome