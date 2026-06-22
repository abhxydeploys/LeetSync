class Solution {
    public int singleNumber(int[] nums) {
        int result = 0;
        for(int bitposition = 0; bitposition < 32; bitposition++){
            int bitcount = 0;

            // for how many nos. we have 1 at the currnet bit posiion
            for(int num: nums){
                bitcount += (num >> bitposition) & 1;
            }
            bitcount %= 3;
            result |= (bitcount << bitposition);
        }
        return result;
    }
}