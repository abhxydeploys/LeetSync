function sequentialDigits(low: number, high: number): number[] {
    const digits = "123456789";
    const result: number[] = [];

    // Range of lengths to consider
    const minLen = String(low).length;
    const maxLen = String(high).length;

    for (let length = minLen; length <= maxLen; length++) {
        for (let start = 0; start <= 9 - length; start++) {
            const num = parseInt(digits.substring(start, start + length));
            if (num >= low && num <= high) {
                result.push(num);
            }
        }
    }

    return result;
}

// Example usage:
console.log(sequentialDigits(100, 300)); 
// Output: [123, 234]
