var x = 5 // Global variable
function add() { // Function using global variable and creating local variable
    var b = 5;
    document.write(x + b + "<br>");
};

function error() { // Function trying to utilize local variable but it will not work
    document.write(b + 2);
};

add();
error();
console.log(error()); // Debugging error by display result in console

function condition() { // Creating a function using a conditional if statement
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "Good afternoon to you!";
    };
};

function check_age() { // Using conditionals if and else to display different results based on input
    var Age = document.getElementById("Age").value;
    if (Age < 17) {
        document.getElementById("Message").innerHTML = "You're too young to drive!"
    }
    else {
        document.getElementById("Message").innerHTML = "Woohoo! You can drive!"
    }
};

function Time_Function() { // Using if and else if statements to perform different actions based on certain conditions (What time it is)
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
};