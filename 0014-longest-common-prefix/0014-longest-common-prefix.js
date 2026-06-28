function longestCommonPrefix(strs) {
    for (let charIndex = 0; charIndex < strs[0].length; charIndex++) {
        for (let stringIndex = 1; stringIndex < strs.length; stringIndex++) {
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

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna