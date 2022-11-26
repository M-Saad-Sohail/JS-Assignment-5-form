var arr = [];
var inpElmnt = document.getElementById("inp");
var inpElmnt2 = document.getElementById("inp2");
var inpElmnt3 = document.getElementById("inp3");
var inpElmnt4 = document.getElementById("inp4");
var errorInp = document.getElementById("error");
var errorInp2 = document.getElementById("error2");
var errorInp3 = document.getElementById("error3");
var errorInp4 = document.getElementById("error4");

function getValue() {
    var a = inpElmnt.value;
    if (a == "") {
        // error show
        errorInp.value = "Enter Value";
    } else {
        arr.push(a);
        console.log(arr);
    }
}


function getValue2() {
    var b = inpElmnt2.value;
    if (b == "") {
        // error show
        errorInp2.value = "Enter Value";
    } else {
        arr.push(b);
        console.log(arr);
    }


}
function getValue3() {
    var c = inpElmnt3.value;
    if (c == "") {
        // error show
        errorInp3.value = "Enter Value";
    } else {
        arr.push(c);
        console.log(arr);
    }


}
function getValue4() {
    var d = inpElmnt4.value;
    if (d == "") {
        // error show
        errorInp4.value = "Enter Value";
    } else {
        arr.push(d);
        console.log(arr);
    }


}







