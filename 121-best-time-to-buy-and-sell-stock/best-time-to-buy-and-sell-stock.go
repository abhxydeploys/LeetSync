func maxProfit(prices []int) int {
    minPrice := prices[0]
    maxProfit := 0
    for _, currentPrice := range prices {
        maxProfit = max(maxProfit, currentPrice - minPrice)
        minPrice = min(minPrice, currentPrice)
    }
    return maxProfit
}