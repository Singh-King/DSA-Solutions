
function swapElements(matrix,rowArray,columnArray){
    let t = matrix[rowArray[0]][columnArray[0]];
    matrix[rowArray[0]][columnArray[0]] = matrix[rowArray[1]][columnArray[1]];
    matrix[rowArray[1]][columnArray[1]] = t;
    t = matrix[rowArray[2]][columnArray[2]];
    matrix[rowArray[2]][columnArray[2]] = matrix[rowArray[0]][columnArray[0]];
    matrix[rowArray[0]][columnArray[0]] = t;
    t = matrix[rowArray[0]][columnArray[0]];
    matrix[rowArray[0]][columnArray[0]] = matrix[rowArray[3]][columnArray[3]];
    matrix[rowArray[3]][columnArray[3]] = t;
    console.log(matrix);
    return matrix;
}
// My own personal approach if (i,j) represents element at ith indexed row and jth indexed column then in a matrix of 4*4 (0,0) will go at (0,3)
// (0,3) will go at (3,3). (3,3) will go at (3,0), and eventually (3,0) will go at (0,0). I have used this logic.
function rotateImage(matrix){
    for(let i=0; i<matrix.length; i++){
        for(let j=i; j<matrix.length-1-i; j++){
            let rowArray = [i,j,matrix.length-1-i,matrix.length-1-j];
            let columnArray = [j, matrix.length-1-i,matrix.length-1-j, i];
            matrix = swapElements(matrix, rowArray, columnArray);
        }
    }
    return matrix;
}

// console.log(rotateImage([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));

// Most common solution
// Transpose the matrix and then reverse the rows
// Transpose means changing columns to rows and rows to columns

function rotateImageCommon(matrix){
    //transpose
    for(let i=0; i< matrix.length; i++){
        for(let j=i; j<matrix.length; j++){
            let t = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = t;
        }
    }
    //reverse
    for(let i =0; i< matrix.length; i++){
        for(let j =0; j< matrix.length/2; j++){
            let t = matrix[i][j];
            matrix[i][j] = matrix[i][matrix.length-1-j];
            matrix[i][matrix.length-1-j] = t;
        }
    }
    return matrix;
}

console.log(rotateImageCommon([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));