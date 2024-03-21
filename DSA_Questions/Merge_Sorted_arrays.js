function shiftElementsToRight(arr, i){
for(let j = arr.length-2; j>=i; j--){
    arr[j+1] = arr[j];
}
return arr;
}
// this has time complexcity of O(n2), 
// there is a different method of moving all the smaller numbers in first array and larger number in second array and then sorting both these array
// that will have time complexcity of O(n + nlogn + n), first n to move elements(by taking two pointers), 2nd nlogn is for merge sort, 3rd n is for merging the arrays
// I am not doing it here but that is understood
function mergeSortedArrays(nums1, m, nums2, n){
    let i = 0; j =0;
    while(i<m+n && j<n){
        if(nums1[i] >= nums2[j]){
            shiftElementsToRight(nums1, i);
            nums1[i] = nums2[j];
            i++;
            j++;
        }else{
            i++;
        }
    }
    for (i=m+j;i<m+n;i++){
        nums1[i] = nums2[j];
        j++;
    }
    return nums1;
}

console.log(mergeSortedArrays([2,2,5,0,0,0], 3, [1,1,4], 3));