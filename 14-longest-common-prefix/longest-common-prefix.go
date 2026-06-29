func longestCommonPrefix(strs []string) string {
    if len(strs) == 0 {
        return ""
    }

    for charIndex := 0; charIndex < len(strs[0]); charIndex++ {
        for stringIndex := 1; stringIndex < len(strs); stringIndex++ {
            // Check if current string is too short or mismatch occurs
            if charIndex >= len(strs[stringIndex]) || strs[stringIndex][charIndex] != strs[0][charIndex] {
                return strs[0][:charIndex]
            }
        }
    }
    return strs[0]
}