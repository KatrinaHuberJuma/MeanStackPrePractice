function binarySearch(arr, target){
    console.log("*********************** " + arr)
    if (arr[length-1]< target){
        return "target is too large";
    } else if (arr[0]> target){
        return "target is too small";
    }
    var range = [0, arr.length-1];
    var counter = 0;
    while (range[1] - range[0] > 1){
        console.log("range is arr[" + range[0] + "] (value = "+ arr[range[0]]+ ") to arr[" + range[1] + "] (value = "+ arr[range[1]]+ ")" );
        var mid = range[0] + Math.ceil((range[1] - range[0])/2);
        console.log("mid = arr[" + mid + "] value = " + arr[mid]);
        if (arr[mid] === target){
            return mid;
        } else if (target > arr[mid]) {
            console.log("going right!")
            range[0] = mid;
        } else if (target < arr[mid]){
            console.log("going left!")
            range[1] = mid;
        }
    }
    if (arr[range[0]]===target){
        return range[0];
    }
    if (arr[range[1]]===target){
        return range[1];
    }
    return "target not found";
}