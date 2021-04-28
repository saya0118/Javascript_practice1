/*Variables*/

let myvariable = "dogs";

document.getElementById("animal").innerHTML = myvariable;


let myvariable2 = "cats";

document.getElementById("animal1").innerHTML = myvariable2;

let myvariable3 = "monkeys";

document.getElementById("animal2").innerHTML = myvariable3;

let myvariable4 = "elephants";

document.getElementById("animal3").innerHTML = myvariable3;

let myvariable5 = "gorillas";

document.getElementById("animal4").innerHTML = myvariable5;


/*Operator */
document.getElementById("test1").innerHTML = 49 + 20 - 4;

var x, y;
x = 30;
y = 20;
z = 10;

document.getElementById("test2").innerHTML = x + y * z;

document.getElementById("test3").innerHTML = 40 + 20 - 10;

/* Conditions */

function myFunction1() {
    var hour = new Date().getHours();
    var comment;
    if (hour < 10) {
        comment = "Good morning";
    } else {
        comment = "Hello! have a good day:)";
    }
    document.getElementById("test4").innerHTML = comment;
}




