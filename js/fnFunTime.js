function getNumArrayFromUser(){
    var numArr = [];
        var input = prompt("add a number to the array")
        while (parseInt(input)){
            numArr.push(parseInt(input));
            input = prompt("add another number to the array or just hit enter to signal the arry is complete")
        }
        return numArr;
}


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



function validBraces(str){
    console.log(str)
    var braceObj = {
        "{": true,
        "(": true,
        "[": true,

        "]": "[",
        "}": "{",
        ")": "(",
    }
    var stack = [];

    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (braceObj[char]){
            if ((braceObj[char]) === true){
                stack.push(char);
            } else if (braceObj[char] === stack[stack.length-1]){
                stack.pop();
            } else {
                return false;
            }
        } 
        
    }
    
    return stack.length === 0;
}

function coinChange(num){
    var changeObj = {dollars: 0, quarters: 0, dimes: 0, nickels: 0, pennies:0 };
    if (num >= 100) {
        changeObj.dollars = Math.floor(num / 100);
        num %= 100;
    }
    if (num >= 25) {
        changeObj.quarters = Math.floor(num / 25);
        num %= 25;
    }
    if (num >= 10) {
        changeObj.dimes = Math.floor(num / 10);
        num %= 10;
    }
    if (num >= 5) {
        changeObj.nickels = Math.floor(num / 5);
        num %= 5;
    }
    changeObj.pennies = num;
    return JSON.stringify(changeObj);
}

// {dollars: 2, dimes: 15, pennies: 5} ==> {dollars: 3, quarters: 2, nickels: 1}

function coinReChange(changeObj){
    var conversionObj = {dollars: 100, quarters: 25, dimes: 10, nickels: 5, pennies:1 }
    var sum = 0;
    for (key in changeObj){
        var cents = changeObj[key] * conversionObj[key];
        sum += cents
    }
    return coinChange(sum);
}