//Brute force: Time complexcity O(n2)
function majorityElement(nums){
    for(let i =0; i<nums.length; i++){
        let count =0;
        for(let j = i; j<nums.length;j++){
            if(nums[j]===nums[i]){
                count++;
            }
            if(count >= nums.length/2){
                return nums[j];
            }
        }
    }
    return NaN;
}

//console.log(majorityElement([12,12,23,12,5,5,5,12,13]));

//Brute Force: Time complexcity O(n) Space complexcity in the Order of n i.e. O(n);

function majorityElementBetter(nums){
    const map = new Map();

    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i])+1);
        }else{
            map.set(nums[i],1);
        }
    }
    let returnValue = NaN;
    map.forEach((val,key) =>{
        if(val>nums.length/2){
            returnValue = key;
        }
    })
    return returnValue;
}
//console.log(majorityElementBetter([12,12,23,12,5,5,5,12,12]));

//optimal approach:- We know that if the majority elements were exactly n/2 times then count of majority elements + non majority elements would equal to length of array
//Time complexcity:- O(n)

function majorityElementOptimal(nums){
    let count = 0;
    let element = null;
    for(let i =0; i< nums.length; i++){
        if(count === 0){
            element = nums[i];
            count++;
        }else if(nums[i]===element){
            count++;
        }else{
            count--;
        }
    }
    return element;
}

console.log(majorityElementOptimal([12,12,23,12,5,5,5,12,13]))