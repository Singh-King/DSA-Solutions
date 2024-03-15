// Simple approach
function pascalsTriangle(rows){
    let resultArray = [[1],[1,1]]
    for(let i = 2; i<rows; i++){
        let subArray = [];
        for(let j = 0; j <= i; j++){
            let t = 0, u = 0;
            if(j-1 > -1){
                t = resultArray[i-1][j-1];
            }
             if(j+1<=i){
                u = resultArray[i-1][j];
             }
            subArray[j] = t+u;
        }
        resultArray.push(subArray);
    }
    return resultArray;
}

//console.log(pascalsTriangle(5));

//Element at R row and C column can be found using formula (R-1)C(C-1) = (R-1)!/((C-1)!*(R-1-(C-1))!)

function generateNumber(ans, row, column){

    ans = ans * (row-column);  
    ans = ans/column;
    return ans;
}

function pascalsTriangleUsingCombination(rows){
    let resultArray = []
    for(let i = 1; i<=rows; i++){
        let subArray = [];
        subArray[0] = 1;
        for(let j = 1; j < i; j++){
            
            subArray[j] = generateNumber(subArray[j-1], i, j);
        }
        resultArray.push(subArray);
    }
    return resultArray;
}

console.log(pascalsTriangleUsingCombination(7));