function Add() { // Adding numbers using + symbol
    var sum = 10 + 10;
    document.getElementById("Math").innerHTML = "10 + 10 = " + sum;
}

function Subtract() { // Subtracting numbers using - symbol
    var sub = 100 - 50;
    document.getElementById("Math2").innerHTML = "100 - 50 = " + sub;
}

function Multiply() { // Multiplying numbers using * symbol
    var product = 9 * 11;
    document.getElementById("Math3").innerHTML = "9 * 11 = " + product;
}

function Divide() { // Dividing numbers using / symbol
    var quotient = 12 / 4;
    document.getElementById("Math4").innerHTML = "12 / 4 = " + quotient;
}

function More_Math() { // Multiple math operations put together
    var result = (6 + 6) * 5 / 10 - 6;
    document.getElementById("Math5").innerHTML = "The result of 6 plus 6, multiplied by 5, divided by 10, and then subtracted by 6 is: " + result;
}

function Modulus() { // FInding the remainder when dividing using % symbol
    var rem = 57 % 5;
    document.getElementById("Math6").innerHTML = "When 57 is divided by 5, the remainder is: " + rem;
}

function Negation() { // Negating a number using - symbol
    var num = 12
    document.getElementById("Math7").innerHTML = -num;
}

var f = 8; // Incrementing
f++;
document.write(f);

document.write("<br>") // line break

var g = 10; // Decrementing
g--;
document.write(g);

window.alert(Math.random() * 50); // Computer selects number at random between 0 and 50

document.write("<br>")

var power = Math.pow(8, 3); // Math object method of multiplying numbers by a power
document.write("8 to the third power is: " + power);