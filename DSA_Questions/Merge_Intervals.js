function mergeIntervals(intervals){
    let resultArray = [];
    for(let i = 0; i< intervals.length; i++){
       if(intervals[i][0] === -1 && intervals[i][1] === -1){
        i++;
       }
       let currentInterval = intervals[i];
        for(let j=i+1; j<intervals.length; j++){
            if(intervals[j][0] === -1 && intervals[j][1] === -1){
                j++;
               }
               console.log()
            if(j <intervals.length && currentInterval[1] >= intervals[j][0] && currentInterval[1] <= intervals[j][1] 
                || j <intervals.length && intervals[j][1] >= currentInterval[0] && intervals[j][1] <= currentInterval[1]){
                currentInterval = [Math.min(currentInterval[0],intervals[j][0]),Math.max(currentInterval[1],intervals[j][1])]     
                intervals[j][0] = -1;
                intervals[j][1] = -1;
            }
        }
        if(i<intervals.length && intervals[i][0] !== -1 && intervals[i][1] !== -1){
            
            resultArray.push(currentInterval)
        }       
    }
    return resultArray;
}
console.log(mergeIntervals([[2,3],[4,5],[6,7],[8,9],[1,10]]));

function mergeIntervalsOptimal(intervals){
    let resultArray = [];
    let currentInterval = intervals[0];

    for(let i = 1; i<intervals.length; i++){
        if(currentInterval[1]>=intervals[i][0]){
            currentInterval = [Math.min(currentInterval[0],intervals[i][0]),intervals[i][1]];
        }else{
            resultArray.push(currentInterval);
            currentInterval = intervals[i];
        }
    }
    resultArray.push(currentInterval);
    return resultArray;
}

//console.log(mergeIntervalsOptimal([[1,3],[2,5],[4,6],[8,10],[15,18]]));