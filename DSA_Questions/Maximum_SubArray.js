function getMaximumSubarray(arr){
    let maxSum = Number.MIN_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
        max = Math.max(max, sum);
        maxSum = Math.max(max, maxSum);
        if(sum<0){
            sum = 0 ;
        }
    }
    return maxSum;
}

console.log(getMaximumSubarray([-2,1,-3,4,-1,2,1,-5,4]));