document.write(typeof 8); // Displays the data type of whatever is written
document.write("<br>");
document.write("five" + 5); // Type coercion of two different data types
document.write("<br>")

function my_function() {
    document.getElementById("Test").innerHTML = 0/0; // Produces the Not a Number result
}

function function_2() {
    document.getElementById("Test2").innerHTML = isNaN(7); // using NaN to evaluate data types
}

function function_3() {
    document.getElementById("Test3").innerHTML = isNaN("Hello"); // using NaN to evaluate data types
}

function function_4() {
    document.getElementById("Test4").innerHTML = (2E309); // Results in positive infinity
}

function function_5() {
    document.getElementById("Test5").innerHTML = (-2E309); // Results in negative infinity
}

document.write(100 < 78); // Boolean logic operator
document.write("<br>");
document.write(5 > 1); // Boolean logic operator
document.write("<br>")

console.log(25 * 5); // Prints results in the browser console
console.log(6 < 4); // Displays boolean logic in console

document.write(3 == 3); // Prints true
document.write("<br>");
document.write(9 == 6); // Prints false
document.write("<br>");

document.write(2 === 2); // Prints true for same data type and value
document.write("<br>");
document.write(2 === "red" ); // Prints false for different data type and value
document.write("<br>");
document.write("2" === 2); // Prints false for different data type
document.write("<br>");
document.write("red" === "blue"); // Prints false for different data value
document.write("<br>");

document.write(4 > 3 && 8 > 7); // Boolean logical operator "AND" to print true since both are true
document.write("<br>");
document.write(4 > 6 && 7 > 6); // Boolean logical operator "AND" to print false since one is not true
document.write("<br>");
document.write(4 > 6 || 8 > 7); // Boolean logical operator "OR" to print true since one is true
document.write("<br>");
document.write(4 > 6 || 6 > 8); // Boolean logical operator "OR" to print false since both are false

function not_1() { // Not operator checks if an expression is not true- this would return true
    document.getElementById("Test6").innerHTML = !(3 > 4)
};

function not_2() { // Not operator would return false since this expression is true
    document.getElementById("Test7").innerHTML = !(4 < 7)
};