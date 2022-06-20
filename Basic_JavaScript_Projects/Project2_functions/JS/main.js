function My_Function() {
    var redElement = document.getElementById("red");
    redElement.style.color = "red";
    var str = "This is a button event handler!"
    document.getElementById("button_text").innerHTML = str; // Creating an event handler that calls two different elements using the getElementById method
}

function Concatenate() {
    var sentence = "I am learning to"
    sentence += " concatenate strings using an operator symbol."
    document.getElementById("Concatenate").innerHTML = sentence;
} // Concatenating strings using the += operator and assigning it to an element using the getElementById method