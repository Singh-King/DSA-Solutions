//Brute force
function getRepeatAndMissingNumber(arr){
    let result = [];
    for(let i=1; i<=arr.length; i++){
        let count = 0;
        for(let j = 0; j<arr.length; j++){
            if(arr[j] === i){
                count++;
            }
        }
        if(count === 2){
            result.push(i);
        } else if(count === 0){
            result.push(i);
        }
    }
    return result;
}

//console.log(getRepeatAndMissingNumber([3,1,2,5,4,6,7,5]));

//optimal approach
// the idea is to use mathematical expressions such as sum of first n number and sum of squares of first n numbers

function getRepeatAndMissingNumberOptimal(arr){
    let result = []
    let sumOfNNumbers = arr.length*(arr.length+1)/2;
    let sumOfSquaresOfNNumbers = arr.length*(arr.length+1)*(2*arr.length+1)/6;
    let sum = 0;
    let sumOfSquares = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
        sumOfSquares += arr[i]*arr[i];
    }
    const differenceOfSumOfSquares =  sumOfSquaresOfNNumbers-sumOfSquares;
    const differenceOfSum = sumOfNNumbers-sum;
    result.push(((differenceOfSumOfSquares)/(differenceOfSum)-differenceOfSum)/2);
    result.push(((differenceOfSumOfSquares)/(differenceOfSum)+differenceOfSum)/2);
    return result;
}

// console.log(getRepeatAndMissingNumberOptimal([3,1,2,5,4,6,7,5]));

// Third approach is through bit manipulation using XOR
// XOR of 0,0 is 0, XOR of 1,1 is 0 and XOR of 0,1 is 1 and XOR of 1,0 is 1
// Only if the bits are different the XOR is 1 otherwise it is 0
// So XOR of same numbers a^a is always 0 and XOR of a number with 0 is always the number itself i.e. a;

function getRepeatAndMissingNumberUsingXOR(arr){
    let xor = 0;
    for(let  i = 0; i < arr.length; i++){
        xor ^= arr[i];
        xor ^= i+1;
    }
    let bit = 0;
    while(xor & (1<<bit) === 0){
        bit++;
    }
    let xor1 = 0;
    let xor0 = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] & (1<<bit) !== 0){
            xor1 ^= arr[i];
        } else {
            xor0 ^= arr[i];
        }
        if((i+1) & (1<<bit) !== 0){
            xor1 ^= i+1;
        }else{
            xor0 ^= i+1;
        }
    }
    return [xor1, xor0];
}
console.log(getRepeatAndMissingNumberUsingXOR([3,1,2,5,4,6,7,5]));

