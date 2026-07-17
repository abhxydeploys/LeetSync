
function gcdValues(nums: number[], queries: number[]): number[] {
    const maxVal = Math.max(...nums);
    const freq = new Array(maxVal + 1).fill(0);

    // Count frequency of each number
    for (const x of nums) freq[x]++;

    // Count multiples to know how many numbers divisible by g
    const multiples = new Array(maxVal + 1).fill(0);
    for (let g = 1; g <= maxVal; g++) {
        for (let k = g; k <= maxVal; k += g) {
            multiples[g] += freq[k];
        }
    }

    // Count pairs with gcd = g using inclusion-exclusion
    const gcdPairsCount = new Array(maxVal + 1).fill(0);
    for (let g = maxVal; g >= 1; g--) {
        const totalPairs = multiples[g] * (multiples[g] - 1) / 2;
        gcdPairsCount[g] = totalPairs;
        for (let k = 2 * g; k <= maxVal; k += g) {
            gcdPairsCount[g] -= gcdPairsCount[k];
        }
    }

    // Build sorted list of gcds (conceptually)
    const prefixCounts: number[] = [];
    let cumulative = 0;
    for (let g = 1; g <= maxVal; g++) {
        cumulative += gcdPairsCount[g];
        prefixCounts[g] = cumulative;
    }

    // Answer queries
    const result: number[] = [];
    for (const q of queries) {
        // Binary search for smallest g with prefixCounts[g] > q
        let lo = 1, hi = maxVal;
        while (lo < hi) {
            const mid = Math.floor((lo + hi) / 2);
            if (prefixCounts[mid] > q) hi = mid;
            else lo = mid + 1;
        }
        result.push(lo);
    }

    return result;
}
