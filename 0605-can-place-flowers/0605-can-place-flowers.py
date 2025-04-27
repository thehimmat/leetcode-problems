class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        validPlots = 0
        i = 0
        while i < len(flowerbed):
            if i+1 < len(flowerbed) and flowerbed[i+1]:
                i += 3
                continue
            elif flowerbed[i]:
                i += 2
                continue
            elif i - 1 >= 0 and flowerbed[i - 1]:
                i += 1
                continue
            else:
                validPlots += 1
                i += 2
        
        return validPlots >= n