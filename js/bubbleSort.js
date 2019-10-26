function bubbleSort(numArr) {
    for (var outerIndex = 0; outerIndex < numArr.length; outerIndex++) {
        for (var innerIndex = 1; innerIndex < numArr.length - outerIndex; innerIndex++) {
            if (numArr[innerIndex-1] > numArr[innerIndex]){
                console.log("bubbling numArr[" + (innerIndex -1) + "] and numArr[" + innerIndex + "]" )
                var temp = numArr[innerIndex-1];
                numArr[innerIndex-1] = numArr[innerIndex];
                numArr[innerIndex] = temp;
            }
        } 
        console.log(numArr);
    }
    return numArr;
}