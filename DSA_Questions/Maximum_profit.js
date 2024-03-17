//nums is an array of prices of a stock such that ith index tells the price of the stock on the (i+1)th day.
//Calculate maximum profit if you buy on some day and sell on same or later day.

function maximumProfit(nums){
    let max = -1;
    for(let i = 0; i<nums.length; i++){
        for(let j=i; j<nums.length; j++){
            max = Math.max(nums[j]-nums[i],max);
        }
    }
    return max;
}
// this method has complexcity of O(n2) which is not optimal
// console.log(maximumProfit([7,1,5,3,6,4]));

//more optimal solution
function maximumProfitOptimal(prices){
    let maxProfit = 0;
    let minPrice = Number.MAX_SAFE_INTEGER;

    for(let i=0; i<prices.length; i++){
        minPrice = Math.min(prices[i],minPrice);
        maxProfit = Math.max(maxProfit, prices[i]-minPrice);
    }
    return maxProfit;
}
console.log(maximumProfitOptimal([7,2,5,3,6,4,1,8]));