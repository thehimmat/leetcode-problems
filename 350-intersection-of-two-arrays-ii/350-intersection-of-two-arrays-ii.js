/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let obj = {};
    let result = [];
    for (let i of nums1) {
        obj[i] = obj[i] ? obj[i] + 1 : 1;
    }
    for (let i of nums2) {
        if (obj[i]) {
            obj[i]--
            result.push(i)
        }
    }
    return result;
};