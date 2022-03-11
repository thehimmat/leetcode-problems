/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let output = [];
    let left = 0;
    let right = nums.length - 1;
    let pointer = right;
    while (left <= right) {
        if (nums[left] ** 2 > nums[right] ** 2) {
            output.unshift(nums[left] ** 2);
            left++;
        } else {
            output.unshift(nums[right] ** 2);
            right --;
        }
    }
    return output;
};