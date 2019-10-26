
function minMaxAvg(numArr){
    var min = numArr[0];
    var max = numArr[0];
    var sum = numArr[0];

    for (let i = 1; i < numArr.length; i++){
        if (numArr[i] < min) {
            min = numArr[i];
        } else if (numArr[i] > max){
            max = numArr[i];
        }
        sum += numArr[i];
    }
    var avg = sum/numArr.length;
    return "the array was " + numArr + ", the min is " + min + ", the max is " + max + ", the avg is " + avg;

}