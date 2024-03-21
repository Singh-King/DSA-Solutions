//Bruet Force:- complexcity O(n2)
function findDuplicateNumber(nums){
    for(let i =0; i<nums.length; i++){
        for(let j= i+1; j< nums.length; j++){
            if(nums[j]===nums[i]){
                return nums[j];
            }
        }
    }
}
//console.log(findDuplicateNumber([1,3,4,3,2]));

// This approach uses concept of linked list rather cycle in a linked list.Since there is a duplicate number, there's going to be a cycle 
function findDuplicateNumberOptimal(nums){
    let slowPointer = nums[0], fastPointer = nums[0];
    do{
        slowPointer = nums[slowPointer];
        fastPointer = nums[nums[fastPointer]];
    } while(slowPointer !== fastPointer)
   fastPointer = nums[0];
   
   while(slowPointer !== fastPointer){
    slowPointer = nums[slowPointer];
    fastPointer = nums[fastPointer];
   }
    
   return slowPointer;
}
console.log(findDuplicateNumberOptimal([2,5,9,6,9,3,8,9,7,1]));