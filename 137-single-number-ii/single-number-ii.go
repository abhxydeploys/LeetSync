func singleNumber(nums []int) int {
    result := 0
    for bitposition := 0; bitposition < 32; bitposition++ {
        bitcount := 0
        for _, num := range nums {
            bitcount += (num >> bitposition) & 1
        }
        if bitcount % 3 != 0 {
            result |= (1 << bitposition)
        }
    }
    return int(int32(result))
}