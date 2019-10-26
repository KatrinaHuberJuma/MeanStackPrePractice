
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



function fizzBuzz(num){
    var str = "";
    for (var i = 1; i < num; i++) {
        if (i % 5 === 0 && i % 3 === 0){
            str += "FizzBuzz, "; 
        } else if (i % 5 === 0){
            str += "Buzz, "; 
        } else if (i % 3 === 0){
            str += "Fizz, "; 
        } else {
            str += i + ", "
        }
    }
    if (num % 5 === 0 && num % 3 === 0){
        str += "FizzBuzz."; 
    } else if (num % 5 === 0){
        str += "Buzz."; 
    } else if (num % 3 === 0){
        str += "Fizz."; 
    } else {
        str += num + "."
    }

    return str;
}