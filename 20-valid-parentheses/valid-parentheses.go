func isValid(s string) bool {
    stack := []rune{}
	matching := map[rune]rune{
		')': '(',
		'}': '{',
		']': '[',
	}
	for _, char := range s {
		switch char {
			case '(', '{', '[':
				stack = append(stack, char) // push
			case ')', '}', ']':
				if len(stack) == 0 || stack[len(stack)-1] != matching[char] {
					return false
				}
				stack = stack[:len(stack)-1] // pop
		}
	}
	return len(stack) == 0
}