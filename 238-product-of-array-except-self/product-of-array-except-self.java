class Solution {
    public int[] productExceptSelf(int[] nums) {
        int len = nums.length;
        int[] result = new int[len];

        int leftProd = 1;
        for (int i = 0; i < len; i++) {
            result[i] = leftProd;
            leftProd *= nums[i];
        }
        int rightProd = 1;
        for (int i = len - 1; i >= 0; i--) {
            result[i] *= rightProd;
            rightProd *= nums[i];
        }
        return result;
    }
}