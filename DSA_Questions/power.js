function pow(x,n){
    let result = 1;
    for(let i = 0; i<Math.abs(n); i++){
        if(n === 0){
            return 0;
        } else if(n<0){
            result = parseFloat(result*parseFloat(1/x));
        } else {
            result = parseFloat(result*parseFloat(x))
        }
    }
    return result;
}
console.log(pow(2.1,3));

function powOptimal(x,n){
    let result=1;
    let currentPower = Math.abs(n);
    let currentNumber = n >=0 ? x : parseFloat(1/x);
    console.log(currentNumber);
    while(currentPower>1){
        if(n === 0){
            return 0;
        } 
        if(currentPower%2 === 0){
            currentNumber = currentNumber*currentNumber;
            currentPower = currentPower/2;
        } else {
            result = parseFloat(result*currentNumber);
            currentPower = currentPower-1;
        }
    }
    return result*currentNumber;
}
console.log(powOptimal(2.0000,-2));