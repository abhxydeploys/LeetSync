class Solution {
    fun longestMountain(arr: IntArray): Int {
    val n = arr.size
    if (n < 3) return 0

    var longest = 0
    var i = 1

    while (i < n - 1) {
        // Check if arr[i] is a peak
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            var left = i - 1
            var right = i + 1

            // Expand left
            while (left > 0 && arr[left] > arr[left - 1]) {
                left--
            }

            // Expand right
            while (right < n - 1 && arr[right] > arr[right + 1]) {
                right++
            }

            val length = right - left + 1
            longest = maxOf(longest, length)

            // Move i to the end of this mountain
            i = right
        } else {
            i++
        }
    }

    return longest
}

}