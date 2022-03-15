/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let p1 = 0;
    let p2 = 1;  
    while (p1 < numbers.length || p2 <= numbers.length) {
        if (numbers[p1] + numbers[p2] === target) {
            return [p1 + 1, p2 + 1];
        } else if (p2 === numbers.length || numbers[p1] + numbers[p2] > target || numbers[p1] === numbers[p1 + 1]) {
            p1++;
            p2 = p1 + 1;
        } else {
            p2++;
        }
    }
};