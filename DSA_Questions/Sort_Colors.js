// nums is array of 0's, 1's, 2's where 0's 1's and 2's represnt 3 different colors

function sortColors(nums){
    let p = 0;
    for(let i =0; i<nums.length;i++){
        if(nums[i] === 0){
            //swap(nums[i],nums[p])
            let t= nums[i];
            nums[i] = nums[p];
            nums[p] = t;
            p++;
        }
    }
    p=nums.length-1
    for(let i=nums.length-1;i>=0; i--){
        if(nums[i]===2){
            //swap(nums[i],nums[p])
            let t= nums[i];
            nums[i] = nums[p];
            nums[p] = t;
            p--;
        }
    }
    return nums;
}
//console.log(sortColors([2,0,2,1,1,0]));

//Doing it in single loop

function sortColorsOptimal(nums){
    let p=0, q= nums.length-1, i=0;
    while(i<=q){  
        if(nums[i] === 0){
            //swap(nums[i],nums[p])
            let t= nums[i];
            nums[i] = nums[p];
            nums[p] = t;
            p++;
            i++;
        }
        else if(nums[i] ===1){
            i++;
        }
        else if(nums[i]===2){
            //swap(nums[i],nums[q])
            let t= nums[i];
            nums[i] = nums[q];
            nums[q] = t;
            q--;
        }
    }
    return nums;
}
console.log(sortColorsOptimal([1,2,0]));