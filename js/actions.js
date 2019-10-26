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

    
});
