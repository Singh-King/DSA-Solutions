function majorityElement(nums){
    let count0=0, count1=0;
    let element0 = null, element1 = null;
    console.log(nums.length)
    for(let i =0; i< nums.length; i++){
        console.log(count0, element0, nums[i]);
        console.log(count1,element1, nums[i])
        if(count0 === 0 && nums[i] !== element1){
            element0 = nums[i];
            count0++;
        } else if(count1 === 0 && nums[i] !== element0){
            element1 = nums[i];
            count1++;
        }

        else if(nums[i] === element0){
            count0++;
        } else if(nums[i] === element1){
            count1++;
        } 
        // else if(count1<= count0){
        //     count1--;
        // } 
        else{
            count1--;
            count0--;
           
        }
    }
    count1 = 0;
    count0 = 0;
    for(let i = 0; i< nums.length; i++){
        if(nums[i] === element0){
            count0++;
        }
        if(nums[i] === element1){
            count1++;
        }
    }
    //console.log(count0, count1);
   // console.log(element0, element1);
    let result = [];
    if(count0 > nums.length/3){
        result.push(element0);
    }
    if(count1 > nums.length/3){
        result.push(element1);
    }
    return result;
}

console.log(majorityElement([1,1,2,2,7,7,8,8,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9,3]));