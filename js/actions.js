$(document).ready(function(){
    $("#minMaxAvg").click(function(){
        var numArr = [];
        var input = prompt("add a number to the array")
        while (parseInt(input)){
            numArr.push(parseInt(input));
            input = prompt("add another number to the array or just hit enter to signal the arry is complete")
        }
        

        alert(minMaxAvg(numArr));

    });
});
