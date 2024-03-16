function swapElement(arr, first, second){
    let t = arr[first];
    arr[first] = arr[second];
    arr[second] = t;

    return arr;
}

function getNextPermutataion(arr, pivot, index) {
    let i = pivot+1;
    let j = arr.length-1;
    if(pivot >= 0) {
        arr= swapElement(arr,pivot,index)
    }
    
    while(i<j){
        arr = swapElement(arr, i,j);
        i++;
        j--;
    }
    return arr;
}
function next_permutation(arr){
    let pivot = -1;
    let j = arr.length-1
    for(let i = arr.length -1; i>= 0; i--){
        if(i-1 >= 0){
            if(arr[i] > arr[i-1]){
                pivot = i-1;  
                while(arr[pivot] >=arr[j]){
                    j--;
                }
                break;          
            }
        }
    }
    return getNextPermutataion(arr,pivot, j);
}

// function getNextPermutationArray(arr){
//     let pivot = -1;
//     let resultArray = [];
//     for(let i = arr.length -1; i>= 0; i--){
//         if(i-1 >= 0){
//             if(arr[i] > arr[i-1]){
//                 pivot = i-1; 
//                 break;          
//             }
//         }
//         else{
//             return resultArray;
//         }
//     }
//     let num = getNextPermutataion(arr,pivot)
//     resultArray.push(num);
//     console.log(resultArray);
//     getNextPermutationArray(num);

// }

console.log(next_permutation([5,4,7,5,3,2]));