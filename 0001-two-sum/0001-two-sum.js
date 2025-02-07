/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];
        if (map.has(compliment)) {
            return [map.get(compliment), i];
        }
        map.set(nums[i], i);
    }
    return []
};