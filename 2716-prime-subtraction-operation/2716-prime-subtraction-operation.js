/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function getNextPrime(prime) {
    let candidate = prime + 1;
    while (!isPrime(candidate)) {
        candidate++;
    }
    return candidate;
}

var primeSubOperation = function(nums) {
    let primes = [2, 3, 5];
    let currValue = 0;

    for (let i = 0; i < nums.length; i++) {
        let currentValue = nums[i];

        // Ensure primes array has enough primes up to current value
        while (primes[primes.length - 1] < currentValue) {
            primes.push(getNextPrime(primes[primes.length - 1]));
        }

        // If currentValue is not greater than currValue, adjust it by subtracting primes
        let adjusted = false;
        for (let j = primes.length - 1; j >= 0; j--) {
            if (currentValue - primes[j] > currValue) {
                currentValue -= primes[j];
                adjusted = true;
                break;
            }
        }

        // If no valid adjustment was possible and currentValue <= currValue, return false
        if (!adjusted && currentValue <= currValue) {
            return false;
        }

        // Update currValue to the adjusted currentValue
        currValue = currentValue;
    }

    return true;
};
