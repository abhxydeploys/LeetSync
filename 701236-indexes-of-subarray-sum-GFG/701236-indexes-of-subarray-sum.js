/**
 * @param {number[]} arr
 * @param {number} target
 * @returns {number[]}
 */

class Solution {
    subarraySum(arr, target) {
        let start = 0;
        let currentSum = 0;

        for (let end = 0; end < arr.length; end++) {
            // Add the current element to the window sum
            currentSum += arr[end];

            // Shrink the window from the left if currentSum exceeds the target
            while (currentSum > target && start < end) {
                currentSum -= arr[start];
                start++;
            }

            // Check if we found the target sum
            if (currentSum === target) {
                // Return 1-based indices
                return [start + 1, end + 1];
            }
        }

        // Return [-1] if no such subarray is found
        return [-1];
    }
}

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna