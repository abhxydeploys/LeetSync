function arrayRankTransform(arr: number[]): number[] {
    // Step 1: Create a sorted list of unique values
    const uniqueSorted = Array.from(new Set(arr)).sort((a, b) => a - b);

    // Step 2: Map each value to its rank
    const rankMap = new Map<number, number>();
    uniqueSorted.forEach((val, idx) => {
        rankMap.set(val, idx + 1); // rank starts at 1
    });

    // Step 3: Replace each element in arr with its rank
    return arr.map(val => rankMap.get(val)!);
}
