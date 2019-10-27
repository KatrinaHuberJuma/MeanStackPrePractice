$(document).ready(function(){
    $("#minMaxAvg").click(function(){
        var numArr = getNumArrayFromUser();
        alert(minMaxAvg(numArr));

    });
    $("#fizzbuzz").click(function(){
        var input = prompt("enter a number");
        alert(fizzBuzz(parseInt(input)));
    });

    $("#bracesValid").click(function(){
        var input = prompt("enter some braces such as ({()}}, {{{}}} or ({()})");
        alert(validBraces(input));
    });

    $("#bubble").click(function(){
        var numArr = getNumArrayFromUser();
        alert(bubbleSort(numArr));
    });
    $("#change").click(function(){
        var input = prompt("enter a number");
        alert(coinChange(input));
    });
    $("#changeChange").click(function(){
        var changeObj = {dollars: 0, quarters: 0, dimes: 0, nickels: 0, pennies:0 };
        for (key in changeObj){
            changeObj[key] = prompt("How many "+ key + "s?")
        }
        alert(coinReChange(changeObj));
    });


    $("#search").click(function(){
        var arr = [1,2,4,6,7,8,10,11,12,15,20]
        var target = 9;
        alert("arr = " + arr + " target = " + target + "result = " + binarySearch(arr, target));
        var target = 1;
        alert("arr = " + arr + " target = " + target + "result = " + binarySearch(arr, target));
        var target = 10;
        alert("arr = " + arr + " target = " + target + "result = " + binarySearch(arr, target));
        var target = 20;
        alert("arr = " + arr + " target = " + target + "result = " + binarySearch(arr, target));
    });

    
});
