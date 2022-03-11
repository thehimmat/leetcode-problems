/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let list = new Set();
    for (let i = 0; i < nums.length; i++) {
        list.add(nums[i]);
    }
    return list.size < nums.length ? true : false;
};