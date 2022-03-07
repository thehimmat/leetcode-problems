/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let length = nums.length
    for (let i = 1; i < length; i++) {
        if (nums[i - 1] === nums[i]) {
            let value = nums[i];
            nums.splice(i, 1);
            nums.push(value);
            i--;
            length--;
        }
    }
    return length;
};