// Brute force:- O(n2m) time complexcity and constant time

function setMatrixZeroBrute(matrix){
    let m = matrix.length;
    let n = matrix[0].length;

    for(let i = 0; i<m; i++){
        for(let j = 0; j<n ; j++){
            if(matrix[i][j] === 0){
                // change all 1s in same row and column to -1
                for(let p = 0; p<m; p++){
                    if(matrix[p][j] === 1){
                        matrix[p][j] = -1;
                    }
                }
                for(let q=0; q<n; q++){
                    if(matrix[i][q] === 1){
                        matrix[i][q] = -1;
                    }
                }
            }
        }
    }
    // change -1s to 0
    for(let i = 0; i<m;i++){
        for(let j = 0; j<n; j++){
            if(matrix[i][j] === -1){
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

// console.log(setMatrixZeroBrute([[1,0,1,1],[1,1,0,1],[1,1,1,1],[1,0,1,1],[0,1,1,1]]));

// Better:- O(nm) time complexcity  and O(n+m) space complexcity

function setMatrixZeroBetter(matrix){
    let m = matrix.length;
    let n = matrix[0].length;

    // take two arrays

    let rows = new Array(m).fill(0);
    let columns = new Array(n).fill(0);

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(matrix[i][j] === 0){
                rows[i] = 1;
                columns[j] = 1;
            }
        }
    }

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(rows[i] === 1 || columns[j] === 1){
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

// console.log(setMatrixZeroBetter([[1,0,1,1],[1,1,0,1],[1,1,1,1],[1,0,1,1],[0,1,1,1]]));

// Optimal:- O(nm) time complexcity and constant space

function setMatrixZeroOptimal(matrix){
    let m = matrix.length;
    let n = matrix[0].length;

    let col0 = 1;

    for(let i = 0; i< m; i++){
        for(let j = 0; j< n; j++){
            if(matrix[i][j] === 0){
                if(j !== 0){
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }else{
                    col0 = 0;
                }
            }
        }
    }
    for(let i = 1; i<m; i++){
        for(let j= 1; j<n; j++){
            if(matrix[i][0] === 0 || matrix[0][j] === 0){
                matrix[i][j] = 0;
            }
        }
    }
    for(let j = n-1; j > 0 ; j--){
        if(matrix[0][0] === 0){
            matrix[0][j] = 0;
        }
    }
    for(let i = m-1; i >= 0; i--){
        if(col0 === 0){
            matrix[i][0] = 0;
        }
    }
    return matrix;
}

console.log(setMatrixZeroOptimal([[1,0,1,1],[1,1,0,1],[1,1,1,1],[1,0,1,1],[0,1,1,1]]));