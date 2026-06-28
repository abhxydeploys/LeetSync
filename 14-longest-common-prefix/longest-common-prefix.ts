function longestCommonPrefix(strs: string[]): string {
    for (let charIndex: number = 0; charIndex < strs[0].length; charIndex++) {
        for (let stringIndex: number = 1; stringIndex < strs.length; stringIndex++) {
            if (
                strs[stringIndex].length <= charIndex ||
                strs[stringIndex][charIndex] !== strs[0][charIndex]
            ) {
                return strs[0].slice(0, charIndex);
            }
        }
    }
    return strs[0];
}
