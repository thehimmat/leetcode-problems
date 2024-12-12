/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    const maxHeap = [];
    for (const gift of gifts) {
        maxHeap.push(-gift);
    }
    maxHeap.sort((a, b) => a - b); 

    while (k > 0) {
        const maxGifts = -maxHeap.shift(); 
        const updatedGifts = Math.floor(Math.sqrt(maxGifts)); 
        maxHeap.push(-updatedGifts);
        maxHeap.sort((a, b) => a - b); 
        k--;
    }

    return maxHeap.reduce((sum, gift) => sum - gift, 0);
};